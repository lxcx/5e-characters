// D&D 5E Monster Generator - Data

// Monster Types with descriptions and typical traits
const monsterTypes = {
    aberration: {
        name: "Aberration",
        description: "Utterly alien beings with bizarre anatomy, strange abilities, or an otherworldly origin.",
        typicalAlignments: ["lawful evil", "neutral evil", "chaotic evil"],
        typicalTraits: ["darkvision", "telepathy"],
        examples: ["Beholder", "Mind Flayer", "Aboleth"]
    },
    beast: {
        name: "Beast",
        description: "Nonhumanoid creatures that are part of the natural world. Can be wild or domesticated.",
        typicalAlignments: ["unaligned"],
        typicalTraits: ["keen-senses"],
        examples: ["Wolf", "Giant Eagle", "Dire Wolf"]
    },
    celestial: {
        name: "Celestial",
        description: "Creatures native to the Upper Planes, often servants of good-aligned deities.",
        typicalAlignments: ["lawful good", "neutral good", "chaotic good"],
        typicalTraits: ["darkvision", "magic-resistance", "damage-resistance-radiant"],
        examples: ["Angel", "Unicorn", "Pegasus"]
    },
    construct: {
        name: "Construct",
        description: "Made, not born. Animated by magic or bound elemental spirits.",
        typicalAlignments: ["unaligned"],
        typicalTraits: ["damage-immunity-poison", "condition-immunity-poisoned", "condition-immunity-exhaustion"],
        examples: ["Golem", "Animated Armor", "Shield Guardian"]
    },
    dragon: {
        name: "Dragon",
        description: "Large reptilian creatures of ancient origin with potent magical powers.",
        typicalAlignments: ["lawful evil", "chaotic evil", "lawful good"],
        typicalTraits: ["darkvision", "blindsight", "frightful-presence"],
        examples: ["Red Dragon", "Gold Dragon", "Dragon Turtle"]
    },
    elemental: {
        name: "Elemental",
        description: "Creatures composed of elemental matter or energy from the Inner Planes.",
        typicalAlignments: ["true neutral"],
        typicalTraits: ["darkvision", "damage-immunity-poison", "condition-immunity-poisoned"],
        examples: ["Fire Elemental", "Air Elemental", "Djinni"]
    },
    fey: {
        name: "Fey",
        description: "Magical creatures tied to nature or the Feywild. Often capricious and tricksome.",
        typicalAlignments: ["chaotic neutral", "chaotic good", "neutral evil"],
        typicalTraits: ["darkvision", "magic-resistance", "fey-ancestry"],
        examples: ["Dryad", "Satyr", "Pixie"]
    },
    fiend: {
        name: "Fiend",
        description: "Wicked creatures native to the Lower Planes, including demons and devils.",
        typicalAlignments: ["lawful evil", "neutral evil", "chaotic evil"],
        typicalTraits: ["darkvision", "magic-resistance", "damage-resistance-fire"],
        examples: ["Demon", "Devil", "Yugoloth"]
    },
    giant: {
        name: "Giant",
        description: "Humanlike creatures of great size, often tied to elemental forces.",
        typicalAlignments: ["chaotic evil", "lawful good", "true neutral"],
        typicalTraits: [],
        examples: ["Hill Giant", "Storm Giant", "Ogre"]
    },
    humanoid: {
        name: "Humanoid",
        description: "Bipedal creatures with language and culture, including many playable races.",
        typicalAlignments: ["any"],
        typicalTraits: [],
        examples: ["Orc", "Goblin", "Bandit"]
    },
    monstrosity: {
        name: "Monstrosity",
        description: "Frightening creatures not quite beasts, often results of magical experimentation.",
        typicalAlignments: ["unaligned", "neutral evil", "chaotic evil"],
        typicalTraits: ["darkvision"],
        examples: ["Owlbear", "Displacer Beast", "Manticore"]
    },
    ooze: {
        name: "Ooze",
        description: "Amorphous creatures that thrive in darkness, consuming organic matter.",
        typicalAlignments: ["unaligned"],
        typicalTraits: ["blindsight", "damage-immunity-acid", "condition-immunity-prone"],
        examples: ["Gelatinous Cube", "Black Pudding", "Gray Ooze"]
    },
    plant: {
        name: "Plant",
        description: "Vegetable creatures, often animated by magic or otherworldly energy.",
        typicalAlignments: ["unaligned", "true neutral"],
        typicalTraits: ["blindsight"],
        examples: ["Shambling Mound", "Treant", "Myconid"]
    },
    undead: {
        name: "Undead",
        description: "Once-living creatures animated by necromancy, spirits, or dark powers.",
        typicalAlignments: ["lawful evil", "neutral evil", "chaotic evil"],
        typicalTraits: ["darkvision", "damage-immunity-poison", "condition-immunity-poisoned"],
        examples: ["Zombie", "Vampire", "Lich"]
    }
};

// Size categories with hit dice and space
const sizes = {
    tiny: { hitDie: 4, space: "2½ ft.", reach: 0, examples: "Rat, Sprite" },
    small: { hitDie: 6, space: "5 ft.", reach: 5, examples: "Goblin, Kobold" },
    medium: { hitDie: 8, space: "5 ft.", reach: 5, examples: "Orc, Human" },
    large: { hitDie: 10, space: "10 ft.", reach: 5, examples: "Ogre, Horse" },
    huge: { hitDie: 12, space: "15 ft.", reach: 10, examples: "Giant, Treant" },
    gargantuan: { hitDie: 20, space: "20+ ft.", reach: 15, examples: "Dragon, Tarrasque" }
};

// CR to XP mapping
const crToXP = {
    0: 10, 0.125: 25, 0.25: 50, 0.5: 100,
    1: 200, 2: 450, 3: 700, 4: 1100, 5: 1800,
    6: 2300, 7: 2900, 8: 3900, 9: 5000, 10: 5900,
    11: 7200, 12: 8400, 13: 10000, 14: 11500, 15: 13000,
    16: 15000, 17: 18000, 18: 20000, 19: 22000, 20: 25000,
    21: 33000, 22: 41000, 23: 50000, 24: 62000, 25: 75000,
    26: 90000, 27: 105000, 28: 120000, 29: 135000, 30: 155000
};

// CR to proficiency bonus
const crToProficiency = {
    0: 2, 0.125: 2, 0.25: 2, 0.5: 2,
    1: 2, 2: 2, 3: 2, 4: 2,
    5: 3, 6: 3, 7: 3, 8: 3,
    9: 4, 10: 4, 11: 4, 12: 4,
    13: 5, 14: 5, 15: 5, 16: 5,
    17: 6, 18: 6, 19: 6, 20: 6,
    21: 7, 22: 7, 23: 7, 24: 7,
    25: 8, 26: 8, 27: 8, 28: 8,
    29: 9, 30: 9
};

// Target stats by CR (approximate HP and AC)
const crTargets = {
    0:     { hp: [1, 6],      ac: [10, 13], attackBonus: [0, 3],   damage: [0, 1] },
    0.125: { hp: [7, 35],     ac: [11, 13], attackBonus: [1, 3],   damage: [2, 3] },
    0.25:  { hp: [36, 49],    ac: [11, 13], attackBonus: [2, 3],   damage: [4, 5] },
    0.5:   { hp: [50, 70],    ac: [12, 13], attackBonus: [2, 3],   damage: [6, 8] },
    1:     { hp: [71, 85],    ac: [12, 13], attackBonus: [3, 3],   damage: [9, 14] },
    2:     { hp: [86, 100],   ac: [12, 13], attackBonus: [3, 3],   damage: [15, 20] },
    3:     { hp: [101, 115],  ac: [12, 13], attackBonus: [4, 4],   damage: [21, 26] },
    4:     { hp: [116, 130],  ac: [13, 14], attackBonus: [5, 5],   damage: [27, 32] },
    5:     { hp: [131, 145],  ac: [14, 15], attackBonus: [6, 6],   damage: [33, 38] },
    6:     { hp: [146, 160],  ac: [14, 15], attackBonus: [6, 6],   damage: [39, 44] },
    7:     { hp: [161, 175],  ac: [14, 15], attackBonus: [6, 6],   damage: [45, 50] },
    8:     { hp: [176, 190],  ac: [15, 16], attackBonus: [7, 7],   damage: [51, 56] },
    9:     { hp: [191, 205],  ac: [15, 16], attackBonus: [7, 7],   damage: [57, 62] },
    10:    { hp: [206, 220],  ac: [16, 17], attackBonus: [7, 7],   damage: [63, 68] },
    11:    { hp: [221, 235],  ac: [16, 17], attackBonus: [8, 8],   damage: [69, 74] },
    12:    { hp: [236, 250],  ac: [16, 17], attackBonus: [8, 8],   damage: [75, 80] },
    13:    { hp: [251, 265],  ac: [17, 18], attackBonus: [8, 8],   damage: [81, 86] },
    14:    { hp: [266, 280],  ac: [17, 18], attackBonus: [8, 8],   damage: [87, 92] },
    15:    { hp: [281, 295],  ac: [17, 18], attackBonus: [8, 8],   damage: [93, 98] },
    16:    { hp: [296, 310],  ac: [17, 18], attackBonus: [9, 9],   damage: [99, 104] },
    17:    { hp: [311, 325],  ac: [18, 19], attackBonus: [10, 10], damage: [105, 110] },
    18:    { hp: [326, 340],  ac: [18, 19], attackBonus: [10, 10], damage: [111, 116] },
    19:    { hp: [341, 355],  ac: [18, 19], attackBonus: [10, 10], damage: [117, 122] },
    20:    { hp: [356, 400],  ac: [18, 19], attackBonus: [10, 10], damage: [123, 140] },
    21:    { hp: [401, 445],  ac: [19, 19], attackBonus: [11, 11], damage: [141, 158] },
    22:    { hp: [446, 490],  ac: [19, 19], attackBonus: [11, 11], damage: [159, 176] },
    23:    { hp: [491, 535],  ac: [19, 19], attackBonus: [11, 11], damage: [177, 194] },
    24:    { hp: [536, 580],  ac: [19, 19], attackBonus: [12, 12], damage: [195, 212] },
    25:    { hp: [581, 625],  ac: [19, 19], attackBonus: [12, 12], damage: [213, 230] },
    26:    { hp: [626, 670],  ac: [19, 19], attackBonus: [12, 12], damage: [231, 248] },
    27:    { hp: [671, 715],  ac: [19, 19], attackBonus: [13, 13], damage: [249, 266] },
    28:    { hp: [716, 760],  ac: [19, 19], attackBonus: [13, 13], damage: [267, 284] },
    29:    { hp: [761, 805],  ac: [19, 19], attackBonus: [13, 13], damage: [285, 302] },
    30:    { hp: [806, 850],  ac: [19, 19], attackBonus: [14, 14], damage: [303, 320] }
};

// Combat roles with stat adjustments
const combatRoles = {
    artillery: {
        name: "Artillery",
        description: "Deals damage from range, fragile up close",
        hpMod: 0.8,
        acMod: -1,
        speedMod: 0,
        typicalSpeeds: ["30 ft."],
        preferredActions: ["ranged-attack", "aoe-attack"]
    },
    brute: {
        name: "Brute",
        description: "High HP, high damage, slower",
        hpMod: 1.3,
        acMod: -1,
        speedMod: -5,
        typicalSpeeds: ["25 ft.", "30 ft."],
        preferredActions: ["melee-attack", "multiattack"]
    },
    controller: {
        name: "Controller",
        description: "Manipulates the battlefield with conditions and area effects",
        hpMod: 0.9,
        acMod: 0,
        speedMod: 0,
        typicalSpeeds: ["30 ft."],
        preferredActions: ["save-effect", "aoe-control"]
    },
    lurker: {
        name: "Lurker",
        description: "Ambush predator, high damage but fragile",
        hpMod: 0.7,
        acMod: 1,
        speedMod: 0,
        typicalSpeeds: ["30 ft.", "40 ft."],
        preferredActions: ["sneak-attack", "grapple"]
    },
    skirmisher: {
        name: "Skirmisher",
        description: "Mobile striker, hit and run tactics",
        hpMod: 0.9,
        acMod: 1,
        speedMod: 10,
        typicalSpeeds: ["40 ft.", "50 ft."],
        preferredActions: ["melee-attack", "disengage"]
    },
    soldier: {
        name: "Soldier",
        description: "Frontline tank, high AC and HP",
        hpMod: 1.1,
        acMod: 2,
        speedMod: 0,
        typicalSpeeds: ["30 ft."],
        preferredActions: ["melee-attack", "opportunity-attack"]
    },
    support: {
        name: "Support",
        description: "Buffs allies or debuffs enemies",
        hpMod: 0.8,
        acMod: 0,
        speedMod: 0,
        typicalSpeeds: ["30 ft."],
        preferredActions: ["buff", "heal", "debuff"]
    }
};

// Environments
const environments = {
    arctic: { name: "Arctic", typicalTypes: ["beast", "elemental", "giant", "monstrosity"] },
    coastal: { name: "Coastal", typicalTypes: ["beast", "dragon", "elemental", "monstrosity"] },
    desert: { name: "Desert", typicalTypes: ["beast", "dragon", "elemental", "monstrosity", "undead"] },
    forest: { name: "Forest", typicalTypes: ["beast", "fey", "plant", "monstrosity", "humanoid"] },
    grassland: { name: "Grassland", typicalTypes: ["beast", "humanoid", "monstrosity"] },
    hill: { name: "Hill", typicalTypes: ["beast", "giant", "humanoid", "monstrosity"] },
    mountain: { name: "Mountain", typicalTypes: ["dragon", "elemental", "giant", "monstrosity"] },
    swamp: { name: "Swamp", typicalTypes: ["beast", "plant", "undead", "monstrosity"] },
    underdark: { name: "Underdark", typicalTypes: ["aberration", "ooze", "undead", "monstrosity"] },
    underwater: { name: "Underwater", typicalTypes: ["beast", "elemental", "monstrosity"] },
    urban: { name: "Urban", typicalTypes: ["construct", "humanoid", "undead", "fiend"] }
};

// Monster traits
const monsterTraits = {
    // Senses
    "darkvision": {
        name: "Darkvision",
        category: "senses",
        description: "Can see in dim light within {range} feet as if it were bright light, and in darkness as if it were dim light.",
        defaultRange: 60
    },
    "blindsight": {
        name: "Blindsight",
        category: "senses",
        description: "Can perceive its surroundings within {range} feet without relying on sight.",
        defaultRange: 30
    },
    "tremorsense": {
        name: "Tremorsense",
        category: "senses",
        description: "Can detect and pinpoint the origin of vibrations within {range} feet, provided the monster and the source are in contact with the same ground or substance.",
        defaultRange: 60
    },
    "truesight": {
        name: "Truesight",
        category: "senses",
        description: "Can see in normal and magical darkness, see invisible creatures, automatically detect visual illusions, perceive original form of shapechangers, and see into the Ethereal Plane within {range} feet.",
        defaultRange: 120
    },
    
    // Movement
    "amphibious": {
        name: "Amphibious",
        category: "movement",
        description: "Can breathe air and water."
    },
    "spider-climb": {
        name: "Spider Climb",
        category: "movement",
        description: "Can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
    },
    "flyby": {
        name: "Flyby",
        category: "movement",
        description: "Doesn't provoke opportunity attacks when it flies out of an enemy's reach."
    },
    
    // Defensive
    "magic-resistance": {
        name: "Magic Resistance",
        category: "defensive",
        description: "Has advantage on saving throws against spells and other magical effects."
    },
    "regeneration": {
        name: "Regeneration",
        category: "defensive",
        description: "Regains {amount} hit points at the start of its turn.",
        defaultAmount: 10
    },
    "damage-resistance": {
        name: "Damage Resistance",
        category: "defensive",
        description: "Has resistance to {types} damage.",
        options: ["bludgeoning", "piercing", "slashing", "fire", "cold", "lightning", "thunder", "acid", "poison", "necrotic", "radiant", "psychic", "force"]
    },
    "damage-immunity": {
        name: "Damage Immunity",
        category: "defensive",
        description: "Is immune to {types} damage.",
        options: ["bludgeoning", "piercing", "slashing", "fire", "cold", "lightning", "thunder", "acid", "poison", "necrotic", "radiant", "psychic", "force"]
    },
    "condition-immunity": {
        name: "Condition Immunity",
        category: "defensive",
        description: "Is immune to the {conditions} condition.",
        options: ["blinded", "charmed", "deafened", "exhaustion", "frightened", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained", "stunned", "unconscious"]
    },
    
    // Offensive
    "pack-tactics": {
        name: "Pack Tactics",
        category: "offensive",
        description: "Has advantage on attack rolls against a creature if at least one of the monster's allies is within 5 feet of the creature and the ally isn't incapacitated."
    },
    "sneak-attack": {
        name: "Sneak Attack",
        category: "offensive",
        description: "Once per turn, deals an extra {dice} damage when it hits a target with a weapon attack and has advantage, or when the target is within 5 feet of an ally that isn't incapacitated and the monster doesn't have disadvantage.",
        defaultDice: "2d6"
    },
    "pounce": {
        name: "Pounce",
        category: "offensive",
        description: "If moves at least 20 feet straight toward a creature and then hits it with a claw attack on the same turn, the target must succeed on a DC {dc} Strength saving throw or be knocked prone. If the target is prone, can make one bite attack against it as a bonus action."
    },
    "reckless": {
        name: "Reckless",
        category: "offensive",
        description: "At the start of its turn, can gain advantage on all melee weapon attack rolls during that turn, but attack rolls against it have advantage until the start of its next turn."
    },
    
    // Utility
    "keen-senses": {
        name: "Keen Senses",
        category: "utility",
        description: "Has advantage on Wisdom (Perception) checks that rely on {senses}.",
        options: ["sight", "hearing", "smell", "hearing and smell"]
    },
    "mimicry": {
        name: "Mimicry",
        category: "utility",
        description: "Can mimic sounds it has heard, including voices. A creature that hears the sounds can tell they are imitations with a successful DC {dc} Wisdom (Insight) check."
    },
    "shapechanger": {
        name: "Shapechanger",
        category: "utility",
        description: "Can use its action to polymorph into a {forms}, or back into its true form."
    },
    "telepathy": {
        name: "Telepathy",
        category: "utility",
        description: "Can magically communicate simple ideas, emotions, and images telepathically with any creature within {range} feet that can understand a language.",
        defaultRange: 120
    }
};

// Action templates by type
const actionTemplates = {
    melee: {
        bite: { name: "Bite", damage: "piercing", reach: 5 },
        claw: { name: "Claw", damage: "slashing", reach: 5 },
        slam: { name: "Slam", damage: "bludgeoning", reach: 5 },
        tentacle: { name: "Tentacle", damage: "bludgeoning", reach: 10 },
        tail: { name: "Tail", damage: "bludgeoning", reach: 10 },
        gore: { name: "Gore", damage: "piercing", reach: 5 },
        fist: { name: "Fist", damage: "bludgeoning", reach: 5 },
        longsword: { name: "Longsword", damage: "slashing", reach: 5 },
        greataxe: { name: "Greataxe", damage: "slashing", reach: 5 }
    },
    ranged: {
        longbow: { name: "Longbow", damage: "piercing", range: "150/600 ft." },
        shortbow: { name: "Shortbow", damage: "piercing", range: "80/320 ft." },
        javelin: { name: "Javelin", damage: "piercing", range: "30/120 ft." },
        rock: { name: "Rock", damage: "bludgeoning", range: "60/240 ft." },
        spit: { name: "Spit", damage: "acid", range: "30 ft." }
    },
    breath: {
        fire: { name: "Fire Breath", damage: "fire", shape: "cone", save: "Dexterity" },
        cold: { name: "Cold Breath", damage: "cold", shape: "cone", save: "Constitution" },
        lightning: { name: "Lightning Breath", damage: "lightning", shape: "line", save: "Dexterity" },
        acid: { name: "Acid Breath", damage: "acid", shape: "line", save: "Dexterity" },
        poison: { name: "Poison Breath", damage: "poison", shape: "cone", save: "Constitution" }
    }
};

// Legendary action templates
const legendaryActionTemplates = [
    { name: "Detect", cost: 1, description: "Makes a Wisdom (Perception) check." },
    { name: "Tail Attack", cost: 1, description: "Makes a tail attack." },
    { name: "Wing Attack", cost: 2, description: "Beats its wings. Each creature within 15 feet must succeed on a DC {dc} Dexterity saving throw or take {damage} bludgeoning damage and be knocked prone. The creature can then fly up to half its flying speed." },
    { name: "Move", cost: 1, description: "Moves up to half its speed without provoking opportunity attacks." },
    { name: "Attack", cost: 2, description: "Makes one weapon attack." },
    { name: "Cast a Spell", cost: 3, description: "Casts a spell from its list of spells, using a spell slot as normal." }
];

// Lair action templates
const lairActionTemplates = [
    { description: "A cloud of swarming insects fills a 20-foot-radius sphere centered on a point the creature chooses within 120 feet. The cloud spreads around corners and remains until dismissed or dispelled. Any creature in the cloud is lightly obscured." },
    { description: "Pools of water within 90 feet surge outward. Each creature on the ground within 20 feet of such a pool must succeed on a DC 15 Strength saving throw or be pulled up to 20 feet into the pool and knocked prone." },
    { description: "The creature creates a wall of stone on a solid surface within 120 feet. The wall can be up to 60 feet long, 10 feet high, and 5 feet thick." },
    { description: "Magical darkness spreads from a point within 60 feet, filling a 15-foot-radius sphere until the creature dismisses it or uses this lair action again." },
    { description: "The ground in a 20-foot radius centered on a point within 120 feet becomes difficult terrain until the next initiative count 20." }
];

// Monster name parts for generation
const monsterNameParts = {
    prefixes: ["Shadow", "Blood", "Bone", "Flame", "Frost", "Storm", "Night", "Dread", "Iron", "Stone", "Void", "Plague", "Death", "Crimson", "Dire", "Elder", "Ancient", "Savage", "Feral", "Corrupted"],
    roots: {
        aberration: ["Mind", "Eye", "Tentacle", "Horror", "Crawler", "Thing", "Spawn"],
        beast: ["Fang", "Claw", "Howl", "Hunter", "Stalker", "Prowler", "Maw"],
        celestial: ["Wing", "Light", "Herald", "Guardian", "Seraph", "Virtue"],
        construct: ["Golem", "Sentinel", "Guardian", "Automaton", "Engine", "Colossus"],
        dragon: ["Drake", "Wyrm", "Serpent", "Wing", "Scale", "Fire"],
        elemental: ["Storm", "Flame", "Stone", "Wave", "Wind", "Spark"],
        fey: ["Sprite", "Wisp", "Dream", "Thorn", "Blossom", "Shade"],
        fiend: ["Demon", "Devil", "Imp", "Horror", "Tormentor", "Bane"],
        giant: ["Brute", "Titan", "Colossus", "Crusher", "Hurler"],
        humanoid: ["Raider", "Warrior", "Cultist", "Bandit", "Marauder"],
        monstrosity: ["Beast", "Horror", "Predator", "Terror", "Chimera"],
        ooze: ["Slime", "Pudding", "Jelly", "Blob", "Muck"],
        plant: ["Vine", "Root", "Bloom", "Thorn", "Blight"],
        undead: ["Wight", "Wraith", "Specter", "Revenant", "Corpse"]
    },
    suffixes: ["", " of the Deep", " of Shadows", " Incarnate", " the Destroyer", " the Ancient", " Prime", " Alpha", " Lord", " Matriarch", " Patriarch"]
};

// Spells (subset for monster spellcasting)
const spells = {
    // Cantrips
    "chill-touch": { name: "Chill Touch", level: 0, school: "necromancy", damage: "1d8 necrotic" },
    "eldritch-blast": { name: "Eldritch Blast", level: 0, school: "evocation", damage: "1d10 force" },
    "fire-bolt": { name: "Fire Bolt", level: 0, school: "evocation", damage: "1d10 fire" },
    "ray-of-frost": { name: "Ray of Frost", level: 0, school: "evocation", damage: "1d8 cold" },
    "poison-spray": { name: "Poison Spray", level: 0, school: "conjuration", damage: "1d12 poison" },
    "shocking-grasp": { name: "Shocking Grasp", level: 0, school: "evocation", damage: "1d8 lightning" },
    "sacred-flame": { name: "Sacred Flame", level: 0, school: "evocation", damage: "1d8 radiant" },
    "toll-the-dead": { name: "Toll the Dead", level: 0, school: "necromancy", damage: "1d8/1d12 necrotic" },
    
    // 1st Level
    "burning-hands": { name: "Burning Hands", level: 1, school: "evocation", damage: "3d6 fire" },
    "charm-person": { name: "Charm Person", level: 1, school: "enchantment" },
    "command": { name: "Command", level: 1, school: "enchantment" },
    "cure-wounds": { name: "Cure Wounds", level: 1, school: "evocation", healing: "1d8" },
    "detect-magic": { name: "Detect Magic", level: 1, school: "divination" },
    "disguise-self": { name: "Disguise Self", level: 1, school: "illusion" },
    "fog-cloud": { name: "Fog Cloud", level: 1, school: "conjuration" },
    "hellish-rebuke": { name: "Hellish Rebuke", level: 1, school: "evocation", damage: "2d10 fire" },
    "hex": { name: "Hex", level: 1, school: "enchantment" },
    "inflict-wounds": { name: "Inflict Wounds", level: 1, school: "necromancy", damage: "3d10 necrotic" },
    "magic-missile": { name: "Magic Missile", level: 1, school: "evocation", damage: "1d4+1 force" },
    "shield": { name: "Shield", level: 1, school: "abjuration" },
    "sleep": { name: "Sleep", level: 1, school: "enchantment" },
    "thunderwave": { name: "Thunderwave", level: 1, school: "evocation", damage: "2d8 thunder" },
    
    // 2nd Level
    "blindness-deafness": { name: "Blindness/Deafness", level: 2, school: "necromancy" },
    "darkness": { name: "Darkness", level: 2, school: "evocation" },
    "hold-person": { name: "Hold Person", level: 2, school: "enchantment" },
    "invisibility": { name: "Invisibility", level: 2, school: "illusion" },
    "mirror-image": { name: "Mirror Image", level: 2, school: "illusion" },
    "misty-step": { name: "Misty Step", level: 2, school: "conjuration" },
    "scorching-ray": { name: "Scorching Ray", level: 2, school: "evocation", damage: "2d6 fire" },
    "shatter": { name: "Shatter", level: 2, school: "evocation", damage: "3d8 thunder" },
    "suggestion": { name: "Suggestion", level: 2, school: "enchantment" },
    "web": { name: "Web", level: 2, school: "conjuration" },
    
    // 3rd Level
    "animate-dead": { name: "Animate Dead", level: 3, school: "necromancy" },
    "counterspell": { name: "Counterspell", level: 3, school: "abjuration" },
    "dispel-magic": { name: "Dispel Magic", level: 3, school: "abjuration" },
    "fear": { name: "Fear", level: 3, school: "illusion" },
    "fireball": { name: "Fireball", level: 3, school: "evocation", damage: "8d6 fire" },
    "fly": { name: "Fly", level: 3, school: "transmutation" },
    "haste": { name: "Haste", level: 3, school: "transmutation" },
    "lightning-bolt": { name: "Lightning Bolt", level: 3, school: "evocation", damage: "8d6 lightning" },
    "slow": { name: "Slow", level: 3, school: "transmutation" },
    "vampiric-touch": { name: "Vampiric Touch", level: 3, school: "necromancy", damage: "3d6 necrotic" },
    
    // 4th Level
    "banishment": { name: "Banishment", level: 4, school: "abjuration" },
    "blight": { name: "Blight", level: 4, school: "necromancy", damage: "8d8 necrotic" },
    "confusion": { name: "Confusion", level: 4, school: "enchantment" },
    "dimension-door": { name: "Dimension Door", level: 4, school: "conjuration" },
    "greater-invisibility": { name: "Greater Invisibility", level: 4, school: "illusion" },
    "ice-storm": { name: "Ice Storm", level: 4, school: "evocation", damage: "2d8 bludgeoning + 4d6 cold" },
    "phantasmal-killer": { name: "Phantasmal Killer", level: 4, school: "illusion", damage: "4d10 psychic" },
    "polymorph": { name: "Polymorph", level: 4, school: "transmutation" },
    "wall-of-fire": { name: "Wall of Fire", level: 4, school: "evocation", damage: "5d8 fire" },
    
    // 5th Level
    "cloudkill": { name: "Cloudkill", level: 5, school: "conjuration", damage: "5d8 poison" },
    "cone-of-cold": { name: "Cone of Cold", level: 5, school: "evocation", damage: "8d8 cold" },
    "dominate-person": { name: "Dominate Person", level: 5, school: "enchantment" },
    "hold-monster": { name: "Hold Monster", level: 5, school: "enchantment" },
    "insect-plague": { name: "Insect Plague", level: 5, school: "conjuration", damage: "4d10 piercing" },
    "scrying": { name: "Scrying", level: 5, school: "divination" },
    "telekinesis": { name: "Telekinesis", level: 5, school: "transmutation" },
    "wall-of-stone": { name: "Wall of Stone", level: 5, school: "evocation" },
    
    // 6th Level
    "chain-lightning": { name: "Chain Lightning", level: 6, school: "evocation", damage: "10d8 lightning" },
    "circle-of-death": { name: "Circle of Death", level: 6, school: "necromancy", damage: "8d6 necrotic" },
    "disintegrate": { name: "Disintegrate", level: 6, school: "transmutation", damage: "10d6+40 force" },
    "eyebite": { name: "Eyebite", level: 6, school: "necromancy" },
    "globe-of-invulnerability": { name: "Globe of Invulnerability", level: 6, school: "abjuration" },
    "mass-suggestion": { name: "Mass Suggestion", level: 6, school: "enchantment" },
    
    // 7th Level
    "finger-of-death": { name: "Finger of Death", level: 7, school: "necromancy", damage: "7d8+30 necrotic" },
    "fire-storm": { name: "Fire Storm", level: 7, school: "evocation", damage: "7d10 fire" },
    "plane-shift": { name: "Plane Shift", level: 7, school: "conjuration" },
    "prismatic-spray": { name: "Prismatic Spray", level: 7, school: "evocation", damage: "10d6 (varies)" },
    "teleport": { name: "Teleport", level: 7, school: "conjuration" },
    
    // 8th Level
    "dominate-monster": { name: "Dominate Monster", level: 8, school: "enchantment" },
    "feeblemind": { name: "Feeblemind", level: 8, school: "enchantment", damage: "4d6 psychic" },
    "incendiary-cloud": { name: "Incendiary Cloud", level: 8, school: "conjuration", damage: "10d8 fire" },
    "maze": { name: "Maze", level: 8, school: "conjuration" },
    "power-word-stun": { name: "Power Word Stun", level: 8, school: "enchantment" },
    
    // 9th Level
    "meteor-swarm": { name: "Meteor Swarm", level: 9, school: "evocation", damage: "40d6 fire/bludgeoning" },
    "power-word-kill": { name: "Power Word Kill", level: 9, school: "enchantment" },
    "time-stop": { name: "Time Stop", level: 9, school: "transmutation" },
    "true-polymorph": { name: "True Polymorph", level: 9, school: "transmutation" },
    "wish": { name: "Wish", level: 9, school: "conjuration" }
};
