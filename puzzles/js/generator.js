// D&D 5E Puzzle & Trap Generator - Generation Logic

let currentGenerated = null;
let generatorMode = 'trap'; // 'trap' or 'puzzle'

// Set generator mode (trap or puzzle)
function setGeneratorMode(mode) {
    generatorMode = mode;
    
    document.getElementById('modeTrap').classList.toggle('active', mode === 'trap');
    document.getElementById('modePuzzle').classList.toggle('active', mode === 'puzzle');
    
    document.getElementById('trapOptions').style.display = mode === 'trap' ? 'block' : 'none';
    document.getElementById('puzzleOptions').style.display = mode === 'puzzle' ? 'block' : 'none';
    
    // Update button text
    document.getElementById('generateBtn').innerHTML = mode === 'trap' 
        ? '<i class="fa-solid fa-wand-magic-sparkles"></i> Generate Trap'
        : '<i class="fa-solid fa-wand-magic-sparkles"></i> Generate Puzzle';
}

// Main generate function
function generate() {
    if (generatorMode === 'trap') {
        generateTrap();
    } else {
        generatePuzzle();
    }
}

// Generate a trap
function generateTrap() {
    const options = getTrapFormValues();
    
    let trap;
    if (options.useTemplate && trapTemplates.length > 0) {
        // Use a template
        trap = generateFromTemplate(options);
    } else {
        // Generate random trap
        trap = generateRandomTrap(options);
    }
    
    currentGenerated = { type: 'trap', data: trap };
    displayTrap(trap);
    
    document.getElementById('regenerateBtn').style.display = 'flex';
    document.getElementById('placeholder').style.display = 'none';
    document.getElementById('result').classList.remove('hidden');
}

// Generate from a template
function generateFromTemplate(options) {
    // Filter templates by selected criteria
    let available = [...trapTemplates];
    
    if (options.category !== 'random') {
        available = available.filter(t => t.category === options.category);
    }
    
    if (options.danger !== 'random') {
        available = available.filter(t => t.danger === options.danger);
    }
    
    if (available.length === 0) {
        available = [...trapTemplates]; // Fallback to all if no match
    }
    
    const template = randomChoice(available);
    
    // Scale damage and DCs based on party level
    const scaledTrap = scaleTrap(template, options.partyLevel);
    
    // Add location context
    scaledTrap.location = options.location !== 'random' ? options.location : randomChoice(dungeonRooms);
    scaledTrap.reason = randomChoice(trapReasons);
    
    return scaledTrap;
}

// Generate a completely random trap
function generateRandomTrap(options) {
    const category = options.category !== 'random' ? options.category : randomChoice(Object.keys(trapCategories));
    const danger = options.danger !== 'random' ? options.danger : randomChoice(Object.keys(trapDangerLevels));
    const dangerData = trapDangerLevels[danger];
    
    // Choose effect type
    const effectType = category === 'magical' ? 'magical' : 
                       category === 'hybrid' ? (Math.random() > 0.5 ? 'magical' : 'damage') : 
                       (Math.random() > 0.7 ? 'environmental' : 'damage');
    
    const effectList = trapEffects[effectType] || trapEffects.damage;
    const effect = randomChoice(effectList);
    const trigger = randomChoice(trapTriggers);
    
    // Calculate DCs and damage based on danger level and party level
    const baseDC = randomInt(dangerData.dcRange[0], dangerData.dcRange[1]);
    const scaledDC = getPartyTierDC(baseDC, options.partyLevel);
    const damage = getDamageByLevel(danger, options.partyLevel);
    const attackBonus = randomInt(dangerData.attackBonus[0], dangerData.attackBonus[1]) + Math.floor((options.partyLevel - 1) / 4);
    
    const trap = {
        name: effect.name || "Custom Trap",
        category: category,
        danger: danger,
        trigger: trigger,
        effect: effect.description,
        detection: {
            dc: scaledDC - 2,
            skill: "Perception",
            clue: generateDetectionClue(category, effect)
        },
        disarm: {
            dc: scaledDC,
            skill: category === 'magical' ? "Arcana" : "Thieves' Tools",
            method: generateDisarmMethod(category, effect)
        },
        damage: damage + (effect.type ? ` ${effect.type}` : ''),
        save: {
            type: effect.save || (Math.random() > 0.5 ? "Dexterity" : "Constitution"),
            dc: scaledDC
        },
        countermeasures: generateCountermeasures(category, effect),
        location: options.location !== 'random' ? options.location : randomChoice(dungeonRooms),
        reason: randomChoice(trapReasons),
        source: "Generated"
    };
    
    if (effect.secondary) {
        trap.secondaryDamage = damage + ` ${effect.secondary}`;
    }
    
    return trap;
}

// Scale a trap template for party level
function scaleTrap(template, partyLevel) {
    const trap = { ...template };
    
    // Scale detection DC
    if (trap.detection) {
        trap.detection = { ...trap.detection };
        trap.detection.dc = getPartyTierDC(trap.detection.dc, partyLevel);
    }
    
    // Scale disarm DC
    if (trap.disarm) {
        trap.disarm = { ...trap.disarm };
        trap.disarm.dc = getPartyTierDC(trap.disarm.dc, partyLevel);
    }
    
    // Scale save DC
    if (trap.save) {
        trap.save = { ...trap.save };
        trap.save.dc = getPartyTierDC(trap.save.dc, partyLevel);
    }
    
    // Scale damage
    trap.damage = getDamageByLevel(trap.danger, partyLevel) + (trap.damage.includes(' ') ? ' ' + trap.damage.split(' ').slice(1).join(' ') : '');
    
    return trap;
}

// Generate detection clue
function generateDetectionClue(category, effect) {
    const clues = {
        mechanical: [
            "Slight irregularity in the stonework",
            "Faint scratches on the floor from previous triggers",
            "Thin wire barely visible in the dim light",
            "Small holes in the walls or ceiling",
            "Loose flagstone that shifts slightly",
            "Oil residue on nearby mechanisms"
        ],
        magical: [
            "Faint magical aura detectable with detect magic",
            "Ancient runes carved into the stone",
            "Slight shimmer in the air",
            "Unusual warmth or cold emanating from the area",
            "Arcane symbols that glow faintly",
            "The hairs on your neck stand up"
        ],
        hybrid: [
            "Combination of mechanical parts and glowing runes",
            "Mundane trigger connected to magical crystal",
            "Physical mechanism with enchanted components",
            "Metal mechanism with arcane inscriptions"
        ]
    };
    
    return randomChoice(clues[category] || clues.mechanical);
}

// Generate disarm method
function generateDisarmMethod(category, effect) {
    const methods = {
        mechanical: [
            "Carefully disabling the trigger mechanism",
            "Jamming the moving parts with metal spikes",
            "Cutting the connecting wires or cables",
            "Blocking the release mechanism",
            "Removing a key component"
        ],
        magical: [
            "Dispelling the magical enchantment",
            "Draining the magical energy",
            "Scratching through the arcane runes",
            "Overloading the magical circuit",
            "Using counterspell at the right moment"
        ],
        hybrid: [
            "Disabling the mechanical trigger while suppressing the magic",
            "Breaking the connection between trigger and magical effect",
            "Simultaneously disarming physical and arcane components"
        ]
    };
    
    return randomChoice(methods[category] || methods.mechanical);
}

// Generate countermeasures
function generateCountermeasures(category, effect) {
    const general = [
        "Triggering the trap from a safe distance",
        "Using magical protection before approaching",
        "Finding an alternate route",
        "Destroying the trap mechanism"
    ];
    
    const specific = {
        fire: ["Fire resistance or immunity", "Creating a firebreak", "Dousing with water"],
        cold: ["Cold resistance", "Generating heat", "Wearing warm clothing"],
        lightning: ["Grounding the electricity", "Rubber or non-conductive materials", "Lightning resistance"],
        poison: ["Poison immunity", "Holding breath", "Antitoxin potions"],
        piercing: ["Heavy armor", "Shield to block projectiles", "Thick clothing"],
        bludgeoning: ["Avoiding the impact zone", "Bracing for impact", "Cushioning materials"],
        slashing: ["Keeping low or high", "Metal armor", "Blocking with shields"]
    };
    
    let countermeasures = [...general];
    if (effect.type && specific[effect.type]) {
        countermeasures = [...countermeasures, ...specific[effect.type]];
    }
    
    // Return 3-4 random countermeasures
    const shuffled = countermeasures.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, randomInt(3, 4));
}

// Generate a puzzle
function generatePuzzle() {
    const options = getPuzzleFormValues();
    
    let puzzle;
    if (options.useTemplate && puzzleTemplates.length > 0) {
        puzzle = generatePuzzleFromTemplate(options);
    } else {
        puzzle = generateRandomPuzzle(options);
    }
    
    currentGenerated = { type: 'puzzle', data: puzzle };
    displayPuzzle(puzzle);
    
    document.getElementById('regenerateBtn').style.display = 'flex';
    document.getElementById('placeholder').style.display = 'none';
    document.getElementById('result').classList.remove('hidden');
}

// Generate puzzle from template
function generatePuzzleFromTemplate(options) {
    let available = [...puzzleTemplates];
    
    if (options.category !== 'random') {
        available = available.filter(p => p.category === options.category);
    }
    
    if (options.difficulty !== 'random') {
        available = available.filter(p => p.difficulty === options.difficulty);
    }
    
    if (available.length === 0) {
        available = [...puzzleTemplates];
    }
    
    const template = randomChoice(available);
    const puzzle = { ...template };
    
    // Use variation if available
    if (puzzle.variations && Math.random() > 0.5) {
        const variation = randomChoice(puzzle.variations);
        puzzle.setup = puzzle.setup.replace(/['"].*['"]/, `'${variation.riddle}'`);
        puzzle.solution = variation.answer;
    }
    
    // Add location context
    puzzle.location = options.location !== 'random' ? options.location : randomChoice(dungeonRooms);
    puzzle.reason = randomChoice(puzzleReasons);
    
    // Scale DCs if puzzle has them
    if (puzzle.consequence && puzzle.consequence.includes('d10')) {
        const baseDamage = puzzle.consequence.match(/\d+d10/)?.[0] || '2d10';
        const scaledDamage = getDamageByLevel('dangerous', options.partyLevel);
        puzzle.consequence = puzzle.consequence.replace(/\d+d10/, scaledDamage);
    }
    
    return puzzle;
}

// Generate a random puzzle (creates a framework)
function generateRandomPuzzle(options) {
    const category = options.category !== 'random' ? options.category : randomChoice(Object.keys(puzzleCategories));
    const difficulty = options.difficulty !== 'random' ? options.difficulty : randomChoice(Object.keys(puzzleDifficulty));
    
    // Generate a basic puzzle framework
    const puzzle = {
        name: generatePuzzleName(category),
        category: category,
        difficulty: difficulty,
        description: generatePuzzleDescription(category, difficulty),
        setup: generatePuzzleSetup(category),
        solution: "DM to determine based on the specific puzzle elements.",
        hints: generateGenericHints(category),
        reward: generatePuzzleReward(difficulty),
        consequence: generatePuzzleConsequence(difficulty, options.partyLevel),
        location: options.location !== 'random' ? options.location : randomChoice(dungeonRooms),
        reason: randomChoice(puzzleReasons),
        source: "Generated"
    };
    
    return puzzle;
}

// Generate puzzle name
function generatePuzzleName(category) {
    const prefixes = ["The", "Ancient", "Mysterious", "Forgotten", "Enchanted", "Hidden"];
    const categoryNouns = {
        riddle: ["Riddler's Challenge", "Sphinx's Question", "Oracle's Test", "Sage's Query"],
        logic: ["Logic Gate", "Deduction Chamber", "Reasoning Hall", "Mind Maze"],
        physical: ["Trial of Hands", "Manipulation Test", "Touch Puzzle", "Dexterity Challenge"],
        pattern: ["Pattern Lock", "Sequence Door", "Symbol Array", "Code Wall"],
        cipher: ["Coded Message", "Secret Script", "Hidden Words", "Cryptic Text"],
        mechanical: ["Gear Puzzle", "Lock Mechanism", "Clockwork Challenge", "Machine Riddle"]
    };
    
    return `${randomChoice(prefixes)} ${randomChoice(categoryNouns[category] || categoryNouns.logic)}`;
}

// Generate puzzle description
function generatePuzzleDescription(category, difficulty) {
    const descriptions = {
        riddle: "A spoken or written riddle must be answered correctly to proceed.",
        logic: "A logical problem requiring deduction and reasoning to solve.",
        physical: "Objects must be physically manipulated in the correct way.",
        pattern: "A sequence or pattern must be identified and completed.",
        cipher: "An encoded message must be deciphered to reveal the solution.",
        mechanical: "A mechanical device must be operated correctly."
    };
    
    return descriptions[category] + ` (${puzzleDifficulty[difficulty].name} difficulty)`;
}

// Generate puzzle setup
function generatePuzzleSetup(category) {
    const setups = {
        riddle: [
            "A booming voice echoes through the chamber, posing a question.",
            "Words are carved into the stone door, forming a riddle.",
            "A ghostly figure appears and speaks in cryptic verses.",
            "A stone face on the wall animates and poses its challenge."
        ],
        logic: [
            "Several levers protrude from the wall, each with different markings.",
            "A grid of tiles covers the floor, some depressed, some raised.",
            "Three chests sit before you, one contains treasure, one death, one nothing.",
            "A scale sits on a pedestal with various weights nearby."
        ],
        physical: [
            "Stone blocks of different sizes must be arranged on pressure plates.",
            "A series of handles extend from the wall, each in a different position.",
            "Water must be transferred between containers of different sizes.",
            "Mirrors must be angled to direct a beam of light."
        ],
        pattern: [
            "Colored gems are set into slots around a circular door.",
            "Musical tones play in a sequence that must be repeated.",
            "Symbols on rotating rings must be aligned correctly.",
            "Torches around the room must be lit in the correct order."
        ],
        cipher: [
            "Strange symbols are carved into the wall with a partial translation key.",
            "A letter is written in an unknown script or code.",
            "Numbers are inscribed around the door frame.",
            "A poem is written with certain letters emphasized."
        ],
        mechanical: [
            "Gears of various sizes lie scattered near a complex mechanism.",
            "A clockwork device has stopped, its hands frozen in place.",
            "Pipes connect various valves that control water flow.",
            "A combination lock requires a specific sequence of numbers."
        ]
    };
    
    return randomChoice(setups[category] || setups.logic);
}

// Generate generic hints
function generateGenericHints(category) {
    const hints = {
        riddle: [
            "Think literally about the words used.",
            "Consider what the riddle describes, not what it seems to describe.",
            "The answer is usually simpler than you think."
        ],
        logic: [
            "Write down what you know for certain.",
            "Eliminate impossible options first.",
            "Look for patterns in the information given."
        ],
        physical: [
            "Sometimes brute force isn't the answer.",
            "Look for markings or wear patterns that suggest use.",
            "Consider the weight, size, and shape of objects."
        ],
        pattern: [
            "The pattern may repeat or cycle.",
            "Look for mathematical relationships.",
            "Consider colors, symbols, and positions."
        ],
        cipher: [
            "Look for common letter patterns.",
            "The most common letter in Common is 'e'.",
            "Numbers might represent letter positions."
        ],
        mechanical: [
            "Gears that touch must turn in opposite directions.",
            "Follow the flow from input to output.",
            "Look for missing or broken components."
        ]
    };
    
    return hints[category] || hints.logic;
}

// Generate puzzle reward
function generatePuzzleReward(difficulty) {
    const rewards = {
        easy: [
            "The door opens, revealing the next chamber.",
            "A small cache of coins is revealed.",
            "A useful common magic item appears."
        ],
        medium: [
            "A hidden vault opens with valuable treasure.",
            "An uncommon magic item materializes.",
            "A shortcut to a deeper level is revealed."
        ],
        hard: [
            "A rare magic item is bestowed upon the solver.",
            "The party gains a valuable piece of information.",
            "Access to a powerful artifact is granted."
        ]
    };
    
    return randomChoice(rewards[difficulty] || rewards.medium);
}

// Generate puzzle consequence
function generatePuzzleConsequence(difficulty, partyLevel) {
    const damage = getDamageByLevel(difficulty === 'easy' ? 'setback' : difficulty === 'hard' ? 'deadly' : 'dangerous', partyLevel);
    
    const consequences = [
        `Wrong answers trigger a magical trap dealing ${damage} damage.`,
        "Incorrect attempts reset the puzzle and summon guardians.",
        `A failed attempt causes ${damage} psychic damage from mental backlash.`,
        "Wrong solutions cause the room to begin flooding or filling with gas.",
        "Each incorrect answer brings the ceiling 1 foot closer to the floor."
    ];
    
    return randomChoice(consequences);
}

// Get trap form values
function getTrapFormValues() {
    return {
        category: document.getElementById('trapCategory').value,
        danger: document.getElementById('trapDanger').value,
        partyLevel: parseInt(document.getElementById('partyLevel').value) || 5,
        location: document.getElementById('location').value,
        useTemplate: document.getElementById('useTemplates').checked
    };
}

// Get puzzle form values
function getPuzzleFormValues() {
    return {
        category: document.getElementById('puzzleCategory').value,
        difficulty: document.getElementById('puzzleDifficulty').value,
        partyLevel: parseInt(document.getElementById('partyLevelPuzzle').value) || 5,
        location: document.getElementById('locationPuzzle').value,
        useTemplate: document.getElementById('useTemplatesPuzzle').checked
    };
}

// Regenerate current type
function regenerate() {
    generate();
}
