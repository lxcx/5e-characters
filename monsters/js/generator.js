// D&D 5E Monster Generator - Generation Logic

let currentMonster = null;
let lockStates = {};
let currentMode = 'generate'; // 'generate' or 'select'

// Initialize monster library on page load
document.addEventListener('DOMContentLoaded', function() {
    populateMonsterList();
});

// Set generation mode
function setMode(mode) {
    currentMode = mode;
    
    // Update button states
    document.getElementById('modeGenerate').classList.toggle('active', mode === 'generate');
    document.getElementById('modeSelect').classList.toggle('active', mode === 'select');
    
    // Show/hide sections
    document.getElementById('generatorSection').style.display = mode === 'generate' ? 'block' : 'none';
    document.getElementById('librarySection').style.display = mode === 'select' ? 'block' : 'none';
    
    // Show/hide buttons
    document.getElementById('generateBtn').style.display = mode === 'generate' ? 'block' : 'none';
    document.getElementById('loadBtn').style.display = mode === 'select' ? 'block' : 'none';
}

// Handle generate button click (routes based on mode)
function handleGenerate() {
    if (currentMode === 'generate') {
        generateMonster();
    } else {
        loadSelectedMonster();
    }
}

// Populate monster select dropdown
function populateMonsterList() {
    const select = document.getElementById('monsterSelect');
    if (!select || typeof allMonsters === 'undefined') return;
    
    // Sort monsters alphabetically
    const sortedMonsters = Object.entries(allMonsters)
        .sort((a, b) => a[1].name.localeCompare(b[1].name));
    
    select.innerHTML = '';
    
    for (const [id, monster] of sortedMonsters) {
        const option = document.createElement('option');
        option.value = id;
        option.textContent = `${monster.name} (CR ${formatCR(monster.cr)})`;
        option.dataset.type = monster.type;
        option.dataset.cr = monster.cr;
        option.dataset.source = monster.source || 'MM';
        select.appendChild(option);
    }
    
    // Update count
    const countDisplay = document.querySelector('.monster-count');
    if (countDisplay) {
        countDisplay.textContent = `${sortedMonsters.length} monsters`;
    }
}

// Filter monster list based on search
function filterMonsterList() {
    const searchTerm = document.getElementById('monsterSearch').value.toLowerCase();
    const select = document.getElementById('monsterSelect');
    const options = select.getElementsByTagName('option');
    
    for (const option of options) {
        const name = option.textContent.toLowerCase();
        const type = (option.dataset.type || '').toLowerCase();
        const matches = name.includes(searchTerm) || type.includes(searchTerm);
        option.style.display = matches ? '' : 'none';
    }
}

// Preview selected monster
function previewSelectedMonster() {
    const select = document.getElementById('monsterSelect');
    const preview = document.getElementById('monsterPreview');
    
    if (!select.value || !allMonsters[select.value]) {
        preview.style.display = 'none';
        return;
    }
    
    const monster = allMonsters[select.value];
    preview.style.display = 'block';
    preview.innerHTML = `
        <div class="monster-preview-name">${monster.name}</div>
        <div class="monster-preview-stats">
            <strong>Type:</strong> ${capitalize(monster.size)} ${monster.type}<br>
            <strong>CR:</strong> ${formatCR(monster.cr)} (${formatNumber(crToXP[monster.cr] || 0)} XP)<br>
            <strong>AC:</strong> ${monster.ac}${monster.acType ? ` (${monster.acType})` : ''}<br>
            <strong>HP:</strong> ${monster.hp} (${monster.hitDice})<br>
            <strong>Source:</strong> ${monster.source || 'Monster Manual'}
        </div>
    `;
}

// Load selected monster from library
function loadSelectedMonster() {
    const select = document.getElementById('monsterSelect');
    if (!select.value || !allMonsters[select.value]) {
        alert('Please select a monster from the list.');
        return;
    }
    
    const monsterData = allMonsters[select.value];
    
    // Convert library format to display format
    const monster = convertLibraryMonster(monsterData);
    
    currentMonster = monster;
    displayMonster(monster);
    
    document.getElementById('regenerateBtn').style.display = 'flex';
    document.getElementById('placeholder').style.display = 'none';
    document.getElementById('monsterResult').classList.remove('hidden');
}

// Convert library monster format to generator format
function convertLibraryMonster(data) {
    // Calculate ability modifiers
    const abilityModifiers = {};
    for (const [ability, score] of Object.entries(data.abilityScores)) {
        abilityModifiers[ability] = getModifier(score);
    }
    
    return {
        name: data.name,
        source: data.source || 'MM',
        type: data.type,
        size: data.size,
        alignment: data.alignment,
        ac: data.ac,
        acType: data.acType || 'natural armor',
        hp: data.hp,
        hpFormula: data.hitDice,
        hitDice: parseInt(data.hitDice) || 1,
        cr: data.cr,
        xp: crToXP[data.cr] || 0,
        proficiencyBonus: crToProficiency[data.cr] || 2,
        speeds: data.speed,
        abilityScores: data.abilityScores,
        abilityModifiers: abilityModifiers,
        savingThrows: data.savingThrows || {},
        skills: data.skills || {},
        damageVulnerabilities: data.damageVulnerabilities || [],
        damageResistances: data.damageResistances || [],
        damageImmunities: data.damageImmunities || [],
        conditionImmunities: data.conditionImmunities || [],
        senses: data.senses || [],
        languages: data.languages || '—',
        traits: (data.traits || []).map(t => ({
            name: t.name,
            description: t.description,
            id: t.name.toLowerCase().replace(/\s+/g, '-')
        })),
        actions: data.actions || [],
        reactions: data.reactions || [],
        legendaryActions: data.legendaryActions || null,
        lairActions: data.lairActions || null,
        spellcasting: data.spellcasting || null,
        isLegendary: !!data.legendaryActions,
        hasSpellcasting: !!data.spellcasting,
        description: `A ${data.size} ${data.type} from the ${data.source || 'Monster Manual'}.`,
        isFromLibrary: true
    };
}

// Main generation function
function generateMonster() {
    const options = getFormValues();
    
    // Generate base monster
    const monster = {
        // Basic info
        name: generateMonsterName(options.type),
        type: options.type,
        size: options.size,
        alignment: options.alignment,
        cr: options.cr,
        xp: crToXP[options.cr],
        proficiencyBonus: crToProficiency[options.cr],
        environment: options.environment,
        role: options.role,
        
        // Core stats (generated based on CR)
        ...generateCoreStats(options.cr, options.size, options.role),
        
        // Ability scores
        abilityScores: generateAbilityScores(options.cr, options.type, options.role),
        
        // Movement
        speeds: generateSpeeds(options.type, options.size, options.role, options.environment),
        
        // Defenses
        ...generateDefenses(options.type, options.cr),
        
        // Senses and languages
        senses: generateSenses(options.type, options.cr),
        languages: generateLanguages(options.type, options.cr),
        
        // Traits
        traits: generateTraits(options.type, options.cr, options.role),
        
        // Actions
        actions: generateActions(options.cr, options.type, options.role, options.size),
        
        // Special features
        isLegendary: options.isLegendary,
        hasSpellcasting: options.hasSpellcasting
    };
    
    // Add multiattack if appropriate
    if (options.cr >= 1 && monster.actions.length > 1) {
        monster.multiattack = generateMultiattack(monster.actions);
    }
    
    // Add legendary actions if legendary
    if (options.isLegendary && options.cr >= 10) {
        monster.legendaryActions = generateLegendaryActions(monster, options.cr);
        monster.lairActions = options.cr >= 15 ? generateLairActions() : null;
    }
    
    // Add spellcasting if enabled
    if (options.hasSpellcasting) {
        monster.spellcasting = generateSpellcasting(monster, options.cr);
    }
    
    // Calculate modifiers
    monster.abilityModifiers = {};
    for (const [ability, score] of Object.entries(monster.abilityScores)) {
        monster.abilityModifiers[ability] = getModifier(score);
    }
    
    // Calculate saving throws
    monster.savingThrows = generateSavingThrows(monster);
    
    // Calculate skills
    monster.skills = generateSkills(monster, options.type);
    
    // Generate description/lore
    monster.description = generateDescription(monster);
    
    currentMonster = monster;
    displayMonster(monster);
    
    document.getElementById('regenerateBtn').style.display = 'flex';
    document.getElementById('placeholder').style.display = 'none';
    document.getElementById('monsterResult').classList.remove('hidden');
}

function regenerateMonster() {
    generateMonster();
}

// Get values from form
function getFormValues() {
    const typeSelect = document.getElementById('monsterType');
    const sizeSelect = document.getElementById('size');
    const crSelect = document.getElementById('challengeRating');
    const alignmentSelect = document.getElementById('alignment');
    const environmentSelect = document.getElementById('environment');
    const roleSelect = document.getElementById('role');
    
    let type = typeSelect.value;
    if (type === 'random') {
        const types = Object.keys(monsterTypes);
        type = randomChoice(types);
    }
    
    let size = sizeSelect.value;
    if (size === 'random') {
        const sizesArr = Object.keys(sizes);
        size = randomChoice(sizesArr);
    }
    
    let cr = crSelect.value;
    if (cr === 'random') {
        const crs = Object.keys(crToXP).map(Number);
        cr = randomChoice(crs);
    } else {
        cr = parseFloat(cr);
    }
    
    let alignment = alignmentSelect.value;
    if (alignment === 'random') {
        const typeInfo = monsterTypes[type];
        if (typeInfo.typicalAlignments[0] === 'any') {
            const alignments = ['lawful good', 'neutral good', 'chaotic good', 'lawful neutral', 'true neutral', 'chaotic neutral', 'lawful evil', 'neutral evil', 'chaotic evil'];
            alignment = randomChoice(alignments);
        } else {
            alignment = randomChoice(typeInfo.typicalAlignments);
        }
    }
    
    let environment = environmentSelect.value;
    if (environment === 'random') {
        const envs = Object.keys(environments);
        environment = randomChoice(envs);
    }
    
    let role = roleSelect.value;
    if (role === 'random') {
        const roles = Object.keys(combatRoles);
        role = randomChoice(roles);
    }
    
    return {
        type,
        size,
        cr,
        alignment,
        environment,
        role,
        isLegendary: document.getElementById('isLegendary').checked,
        hasSpellcasting: document.getElementById('hasSpellcasting').checked
    };
}

// Generate monster name
function generateMonsterName(type) {
    const parts = monsterNameParts;
    const usePrefix = Math.random() > 0.4;
    const useSuffix = Math.random() > 0.7;
    
    let name = '';
    if (usePrefix) {
        name += randomChoice(parts.prefixes) + ' ';
    }
    name += randomChoice(parts.roots[type] || parts.roots.monstrosity);
    if (useSuffix) {
        name += randomChoice(parts.suffixes);
    }
    
    return name;
}

// Generate core stats (HP, AC) based on CR
function generateCoreStats(cr, size, role) {
    const targets = crTargets[cr] || crTargets[1];
    const roleData = combatRoles[role];
    const sizeData = sizes[size];
    
    // Calculate target HP with role modifier
    const baseHP = randomInt(targets.hp[0], targets.hp[1]);
    const hp = Math.round(baseHP * roleData.hpMod);
    
    // Calculate hit dice based on size and HP
    const hitDie = sizeData.hitDie;
    const avgPerDie = (hitDie + 1) / 2;
    const numDice = Math.max(1, Math.round(hp / avgPerDie));
    const hpFormula = `${numDice}d${hitDie}`;
    
    // Calculate AC with role modifier
    const baseAC = randomInt(targets.ac[0], targets.ac[1]);
    const ac = baseAC + roleData.acMod;
    
    return {
        hp,
        hpFormula,
        hitDice: numDice,
        ac,
        acType: generateACType(ac, size)
    };
}

function generateACType(ac, size) {
    if (ac <= 12) return "natural armor";
    if (ac <= 14) return "natural armor";
    if (ac <= 16) return "natural armor";
    if (ac <= 18) return "natural armor, shield";
    return "natural armor";
}

// Generate ability scores based on CR and type
function generateAbilityScores(cr, type, role) {
    // Base scores that scale with CR
    const baseScore = Math.min(20, 10 + Math.floor(cr / 3));
    
    // Role-based primary stats
    const rolePrimary = {
        artillery: ['dex', 'int'],
        brute: ['str', 'con'],
        controller: ['int', 'wis'],
        lurker: ['dex', 'wis'],
        skirmisher: ['dex', 'str'],
        soldier: ['str', 'con'],
        support: ['wis', 'cha']
    };
    
    // Type-based adjustments
    const typeAdjust = {
        aberration: { int: 4, wis: 2, cha: 2 },
        beast: { str: 2, dex: 2, con: 2, int: -6 },
        celestial: { wis: 4, cha: 4 },
        construct: { str: 4, con: 2, int: -4, wis: -2, cha: -4 },
        dragon: { str: 4, con: 4, cha: 4 },
        elemental: { con: 4 },
        fey: { dex: 2, cha: 4 },
        fiend: { str: 2, con: 2, cha: 4 },
        giant: { str: 6, con: 4, int: -2 },
        humanoid: {},
        monstrosity: { str: 2, con: 2 },
        ooze: { str: 2, con: 4, int: -8, wis: -4, cha: -6 },
        plant: { con: 4, int: -4, cha: -4 },
        undead: { con: 2, int: -2, cha: 2 }
    };
    
    const scores = {
        str: baseScore,
        dex: baseScore,
        con: baseScore,
        int: baseScore,
        wis: baseScore,
        cha: baseScore
    };
    
    // Apply role bonuses
    const primary = rolePrimary[role] || ['str', 'con'];
    scores[primary[0]] += 4;
    scores[primary[1]] += 2;
    
    // Apply type adjustments
    const adjust = typeAdjust[type] || {};
    for (const [stat, mod] of Object.entries(adjust)) {
        scores[stat] = Math.max(1, Math.min(30, scores[stat] + mod));
    }
    
    // Scale with CR
    if (cr >= 10) {
        scores[primary[0]] = Math.min(30, scores[primary[0]] + 2);
    }
    if (cr >= 17) {
        scores[primary[0]] = Math.min(30, scores[primary[0]] + 2);
        scores[primary[1]] = Math.min(30, scores[primary[1]] + 2);
    }
    
    // Add some randomness
    for (const stat of Object.keys(scores)) {
        scores[stat] = Math.max(1, Math.min(30, scores[stat] + randomInt(-2, 2)));
    }
    
    return scores;
}

// Generate movement speeds
function generateSpeeds(type, size, role, environment) {
    const roleData = combatRoles[role];
    const baseSpeed = 30 + roleData.speedMod;
    
    const speeds = {
        walk: `${baseSpeed} ft.`
    };
    
    // Type-based special movement
    if (['dragon', 'celestial'].includes(type) || (type === 'fiend' && Math.random() > 0.5)) {
        speeds.fly = `${baseSpeed + 30} ft.`;
    }
    if (['aberration', 'ooze', 'monstrosity'].includes(type) && Math.random() > 0.5) {
        speeds.climb = `${baseSpeed} ft.`;
    }
    if (environment === 'underwater' || ['elemental'].includes(type)) {
        speeds.swim = `${baseSpeed} ft.`;
    }
    if (environment === 'underdark' && Math.random() > 0.5) {
        speeds.burrow = `${Math.floor(baseSpeed / 2)} ft.`;
    }
    
    return speeds;
}

// Generate defenses (resistances, immunities)
function generateDefenses(type, cr) {
    const typeInfo = monsterTypes[type];
    const defenses = {
        damageResistances: [],
        damageImmunities: [],
        conditionImmunities: []
    };
    
    // Type-based immunities/resistances
    if (type === 'construct') {
        defenses.damageImmunities.push('poison', 'psychic');
        defenses.conditionImmunities.push('charmed', 'exhaustion', 'frightened', 'paralyzed', 'petrified', 'poisoned');
    } else if (type === 'undead') {
        defenses.damageImmunities.push('poison');
        defenses.conditionImmunities.push('poisoned');
        if (cr >= 5) defenses.damageResistances.push('necrotic');
    } else if (type === 'elemental') {
        defenses.damageImmunities.push('poison');
        defenses.conditionImmunities.push('exhaustion', 'paralyzed', 'petrified', 'poisoned', 'unconscious');
    } else if (type === 'fiend') {
        defenses.damageResistances.push('cold', 'fire', 'lightning');
        defenses.damageImmunities.push('poison');
        defenses.conditionImmunities.push('poisoned');
    } else if (type === 'celestial') {
        defenses.damageResistances.push('radiant');
        defenses.conditionImmunities.push('charmed', 'exhaustion', 'frightened');
    } else if (type === 'ooze') {
        defenses.damageImmunities.push('acid');
        defenses.conditionImmunities.push('blinded', 'charmed', 'deafened', 'exhaustion', 'frightened', 'prone');
    }
    
    // Add BPS resistance for higher CR
    if (cr >= 6 && !['construct', 'ooze'].includes(type)) {
        defenses.damageResistances.push('bludgeoning, piercing, and slashing from nonmagical attacks');
    }
    
    return defenses;
}

// Generate senses
function generateSenses(type, cr) {
    const senses = [];
    const passivePerception = 10 + Math.floor(cr / 2);
    
    // Type-based senses
    if (['aberration', 'dragon', 'fiend', 'undead', 'fey'].includes(type)) {
        senses.push(`darkvision ${60 + Math.floor(cr / 5) * 30} ft.`);
    }
    if (['aberration', 'dragon'].includes(type) && cr >= 5) {
        senses.push('blindsight 30 ft.');
    }
    if (type === 'ooze') {
        senses.push('blindsight 60 ft. (blind beyond this radius)');
    }
    if (cr >= 15) {
        senses.push('truesight 120 ft.');
    }
    
    senses.push(`passive Perception ${passivePerception}`);
    
    return senses;
}

// Generate languages
function generateLanguages(type, cr) {
    if (['beast', 'ooze', 'plant'].includes(type) && cr < 5) {
        return '—';
    }
    
    const languages = [];
    
    if (type === 'aberration') {
        languages.push('Deep Speech', 'telepathy 120 ft.');
    } else if (type === 'celestial') {
        languages.push('Celestial', 'telepathy 120 ft.');
    } else if (type === 'dragon') {
        languages.push('Draconic');
        if (cr >= 10) languages.push('Common');
    } else if (type === 'elemental') {
        languages.push('Primordial');
    } else if (type === 'fey') {
        languages.push('Sylvan', 'Elvish');
    } else if (type === 'fiend') {
        languages.push('Abyssal', 'Infernal', 'telepathy 120 ft.');
    } else if (type === 'giant') {
        languages.push('Giant');
    } else if (type === 'humanoid') {
        languages.push('Common');
    } else if (type === 'undead') {
        languages.push('the languages it knew in life');
    }
    
    if (cr >= 10 && !languages.includes('Common')) {
        languages.unshift('Common');
    }
    
    return languages.length > 0 ? languages.join(', ') : '—';
}

// Generate traits
function generateTraits(type, cr, role) {
    const traits = [];
    const typeInfo = monsterTypes[type];
    
    // Add typical type traits
    for (const traitId of typeInfo.typicalTraits) {
        if (monsterTraits[traitId]) {
            traits.push({
                ...monsterTraits[traitId],
                id: traitId
            });
        }
    }
    
    // Add magic resistance for high CR
    if (cr >= 8 && !traits.find(t => t.id === 'magic-resistance')) {
        traits.push({ ...monsterTraits['magic-resistance'], id: 'magic-resistance' });
    }
    
    // Role-specific traits
    if (role === 'lurker' && !traits.find(t => t.id === 'sneak-attack')) {
        const dice = `${Math.max(1, Math.floor(cr / 2))}d6`;
        traits.push({ 
            ...monsterTraits['sneak-attack'], 
            id: 'sneak-attack',
            description: monsterTraits['sneak-attack'].description.replace('{dice}', dice)
        });
    }
    if (role === 'brute' && Math.random() > 0.5) {
        traits.push({ ...monsterTraits['reckless'], id: 'reckless' });
    }
    if (role === 'skirmisher') {
        traits.push({ ...monsterTraits['flyby'], id: 'flyby' });
    }
    
    return traits;
}

// Generate actions
function generateActions(cr, type, role, size) {
    const actions = [];
    const targets = crTargets[cr] || crTargets[1];
    const profBonus = crToProficiency[cr];
    const attackBonus = targets.attackBonus[0];
    
    // Determine primary attack type based on role
    const isMelee = !['artillery'].includes(role);
    const sizeData = sizes[size];
    
    // Primary attack
    if (isMelee) {
        const meleeOptions = Object.keys(actionTemplates.melee);
        const attackType = randomChoice(meleeOptions);
        const template = actionTemplates.melee[attackType];
        
        // Calculate damage dice based on CR
        const damageDice = getDamageDice(cr, 'primary');
        
        actions.push({
            name: template.name,
            type: 'melee',
            attackBonus: attackBonus,
            reach: Math.max(template.reach, sizeData.reach),
            damage: `${damageDice} ${template.damage}`,
            description: ''
        });
        
        // Add secondary melee for higher CR
        if (cr >= 3) {
            const secondaryOptions = meleeOptions.filter(o => o !== attackType);
            const secondary = randomChoice(secondaryOptions);
            const secTemplate = actionTemplates.melee[secondary];
            const secDamage = getDamageDice(cr, 'secondary');
            
            actions.push({
                name: secTemplate.name,
                type: 'melee',
                attackBonus: attackBonus,
                reach: Math.max(secTemplate.reach, sizeData.reach),
                damage: `${secDamage} ${secTemplate.damage}`,
                description: ''
            });
        }
    }
    
    // Ranged attack for artillery or as secondary
    if (role === 'artillery' || (cr >= 5 && Math.random() > 0.5)) {
        const rangedOptions = Object.keys(actionTemplates.ranged);
        const rangedType = randomChoice(rangedOptions);
        const template = actionTemplates.ranged[rangedType];
        const damageDice = getDamageDice(cr, role === 'artillery' ? 'primary' : 'secondary');
        
        actions.push({
            name: template.name,
            type: 'ranged',
            attackBonus: attackBonus,
            range: template.range,
            damage: `${damageDice} ${template.damage}`,
            description: ''
        });
    }
    
    // Breath weapon for dragons or high CR
    if (type === 'dragon' || (cr >= 10 && Math.random() > 0.6)) {
        const breathOptions = Object.keys(actionTemplates.breath);
        const breathType = randomChoice(breathOptions);
        const template = actionTemplates.breath[breathType];
        const breathDamage = getDamageDice(cr, 'breath');
        const dc = 8 + profBonus + 3; // Assume +3 CON mod
        const range = template.shape === 'cone' ? `${15 + Math.floor(cr / 2) * 5}-foot cone` : `${30 + Math.floor(cr / 2) * 10} ft. line that is 5 ft. wide`;
        
        actions.push({
            name: template.name,
            type: 'breath',
            recharge: '5-6',
            saveDC: dc,
            saveType: template.save,
            range: range,
            damage: `${breathDamage} ${template.damage}`,
            description: `The creature exhales ${template.damage.replace(' damage', '')} in a ${range}. Each creature in that area must make a DC ${dc} ${template.save} saving throw, taking ${breathDamage} ${template.damage} damage on a failed save, or half as much damage on a successful one.`
        });
    }
    
    return actions;
}

// Get damage dice based on CR
function getDamageDice(cr, attackType) {
    const targets = crTargets[cr] || crTargets[1];
    const avgDamage = Math.floor((targets.damage[0] + targets.damage[1]) / 2);
    
    let targetDamage = avgDamage;
    if (attackType === 'secondary') targetDamage = Math.floor(avgDamage * 0.6);
    if (attackType === 'breath') targetDamage = Math.floor(avgDamage * 2);
    
    // Convert to dice
    if (targetDamage <= 4) return '1d6';
    if (targetDamage <= 7) return '1d8+2';
    if (targetDamage <= 10) return '2d6+2';
    if (targetDamage <= 14) return '2d8+3';
    if (targetDamage <= 18) return '3d6+4';
    if (targetDamage <= 22) return '2d10+5';
    if (targetDamage <= 28) return '4d6+5';
    if (targetDamage <= 35) return '3d10+6';
    if (targetDamage <= 45) return '6d6+7';
    if (targetDamage <= 55) return '4d10+8';
    if (targetDamage <= 70) return '8d6+8';
    if (targetDamage <= 90) return '6d10+10';
    return '8d10+10';
}

// Generate multiattack
function generateMultiattack(actions) {
    const meleeActions = actions.filter(a => a.type === 'melee');
    if (meleeActions.length === 0) return null;
    
    if (meleeActions.length === 1) {
        return `The creature makes two ${meleeActions[0].name.toLowerCase()} attacks.`;
    } else {
        return `The creature makes two attacks: one with its ${meleeActions[0].name.toLowerCase()} and one with its ${meleeActions[1].name.toLowerCase()}.`;
    }
}

// Generate legendary actions
function generateLegendaryActions(monster, cr) {
    const actions = [];
    const numActions = cr >= 20 ? 3 : 2;
    
    // Always add detect
    actions.push({ ...legendaryActionTemplates[0] });
    
    // Add attack options based on monster's actions
    if (monster.actions.find(a => a.name.toLowerCase().includes('tail'))) {
        actions.push({ ...legendaryActionTemplates[1] });
    }
    
    // Add move
    actions.push({ ...legendaryActionTemplates[3] });
    
    // Add attack (costs 2)
    actions.push({ ...legendaryActionTemplates[4] });
    
    return {
        count: 3,
        actions: actions
    };
}

// Generate lair actions
function generateLairActions() {
    const numActions = randomInt(2, 3);
    const selected = [];
    const available = [...lairActionTemplates];
    
    for (let i = 0; i < numActions && available.length > 0; i++) {
        const idx = randomInt(0, available.length - 1);
        selected.push(available.splice(idx, 1)[0]);
    }
    
    return selected;
}

// Generate spellcasting
function generateSpellcasting(monster, cr) {
    const ability = ['int', 'wis', 'cha'][randomInt(0, 2)];
    const abilityMod = monster.abilityModifiers[ability];
    const saveDC = 8 + abilityMod + monster.proficiencyBonus;
    const attackBonus = abilityMod + monster.proficiencyBonus;
    
    const innateSpells = getInnateSpells(cr, ability);
    
    return {
        ability: ability,
        saveDC: saveDC,
        attackBonus: attackBonus,
        innate: true,
        spells: innateSpells
    };
}

// Generate saving throws
function generateSavingThrows(monster) {
    const saves = {};
    const profBonus = monster.proficiencyBonus;
    
    // Higher CR monsters have more save proficiencies
    const numSaves = monster.cr >= 10 ? 3 : monster.cr >= 5 ? 2 : 1;
    
    // Prioritize based on type
    const priorities = {
        aberration: ['int', 'wis', 'cha'],
        beast: ['dex', 'con', 'wis'],
        celestial: ['wis', 'cha', 'con'],
        construct: ['con', 'str', 'wis'],
        dragon: ['dex', 'con', 'wis', 'cha'],
        elemental: ['con', 'wis'],
        fey: ['wis', 'cha', 'dex'],
        fiend: ['con', 'wis', 'cha'],
        giant: ['con', 'str', 'wis'],
        humanoid: ['dex', 'wis'],
        monstrosity: ['con', 'dex', 'wis'],
        ooze: ['con'],
        plant: ['con', 'wis'],
        undead: ['wis', 'con', 'cha']
    };
    
    const typePriorities = priorities[monster.type] || ['con', 'wis'];
    
    for (let i = 0; i < numSaves && i < typePriorities.length; i++) {
        const stat = typePriorities[i];
        saves[stat] = monster.abilityModifiers[stat] + profBonus;
    }
    
    return saves;
}

// Generate skills
function generateSkills(monster, type) {
    const skills = {};
    const profBonus = monster.proficiencyBonus;
    
    // Type-based skill tendencies
    const typeSkills = {
        aberration: ['perception', 'stealth'],
        beast: ['perception', 'stealth'],
        celestial: ['insight', 'perception'],
        construct: ['perception'],
        dragon: ['perception', 'stealth'],
        elemental: ['perception'],
        fey: ['perception', 'stealth', 'deception'],
        fiend: ['deception', 'insight', 'perception'],
        giant: ['athletics', 'perception'],
        humanoid: ['perception'],
        monstrosity: ['perception', 'stealth'],
        ooze: [],
        plant: ['stealth'],
        undead: ['perception', 'stealth']
    };
    
    const skillAbilities = {
        acrobatics: 'dex', athletics: 'str', deception: 'cha',
        insight: 'wis', intimidation: 'cha', investigation: 'int',
        perception: 'wis', persuasion: 'cha', stealth: 'dex', survival: 'wis'
    };
    
    const relevantSkills = typeSkills[type] || ['perception'];
    
    for (const skill of relevantSkills) {
        const ability = skillAbilities[skill];
        skills[skill] = monster.abilityModifiers[ability] + profBonus;
    }
    
    return skills;
}

// Generate description
function generateDescription(monster) {
    const typeInfo = monsterTypes[monster.type];
    const descriptions = [
        `This ${monster.size} ${monster.type} is a fearsome creature that dwells in ${monster.environment} regions.`,
        `A terrifying ${monster.size} ${monster.type}, known for its ${monster.role === 'brute' ? 'devastating strength' : monster.role === 'lurker' ? 'cunning ambushes' : 'deadly abilities'}.`,
        `${typeInfo.description} This particular specimen is especially ${monster.cr >= 10 ? 'powerful' : 'dangerous'}.`
    ];
    
    return randomChoice(descriptions);
}

// Show type description
function showTypeDescription() {
    const type = document.getElementById('monsterType').value;
    const descEl = document.getElementById('typeDescription');
    
    if (type === 'random') {
        descEl.classList.add('hidden');
        return;
    }
    
    const typeInfo = monsterTypes[type];
    descEl.innerHTML = `<strong>${typeInfo.name}:</strong> ${typeInfo.description}<br><em>Examples: ${typeInfo.examples.join(', ')}</em>`;
    descEl.classList.remove('hidden');
}
