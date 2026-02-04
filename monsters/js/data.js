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
    "incorporeal-movement": {
        name: "Incorporeal Movement",
        category: "movement",
        description: "Can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."
    },
    "standing-leap": {
        name: "Standing Leap",
        category: "movement",
        description: "Its long jump is up to {distance} feet and its high jump is up to {height} feet, with or without a running start.",
        defaultDistance: 30,
        defaultHeight: 15
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
    "legendary-resistance": {
        name: "Legendary Resistance (3/Day)",
        category: "defensive",
        description: "If the creature fails a saving throw, it can choose to succeed instead."
    },
    "evasion": {
        name: "Evasion",
        category: "defensive",
        description: "If subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails."
    },
    "sunlight-sensitivity": {
        name: "Sunlight Sensitivity",
        category: "defensive",
        description: "While in sunlight, has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
    },
    "limited-magic-immunity": {
        name: "Limited Magic Immunity",
        category: "defensive",
        description: "Can't be affected or detected by spells of {level}th level or lower unless it wishes to be."
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
    "aggressive": {
        name: "Aggressive",
        category: "offensive",
        description: "As a bonus action, can move up to its speed toward a hostile creature that it can see."
    },
    "charge": {
        name: "Charge",
        category: "offensive",
        description: "If moves at least {distance} feet straight toward a target and then hits it with a {attack} attack on the same turn, the target takes an extra {dice} damage. If the target is a creature, it must succeed on a DC {dc} Strength saving throw or be knocked prone.",
        defaultDistance: 20,
        defaultAttack: "gore",
        defaultDice: "2d6"
    },
    "frightful-presence": {
        name: "Frightful Presence",
        category: "offensive",
        description: "Each creature of the monster's choice that is within {range} feet and aware of it must succeed on a DC {dc} Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
        defaultRange: 60
    },
    "rampage": {
        name: "Rampage",
        category: "offensive",
        description: "When reduces a creature to 0 hit points with a melee attack on its turn, can take a bonus action to move up to half its speed and make a bite attack."
    },
    "blood-frenzy": {
        name: "Blood Frenzy",
        category: "offensive",
        description: "Has advantage on melee attack rolls against any creature that doesn't have all its hit points."
    },
    "surprise-attack": {
        name: "Surprise Attack",
        category: "offensive",
        description: "If surprises a creature and hits it with an attack during the first round of combat, the target takes an extra {dice} damage from the attack.",
        defaultDice: "2d6"
    },
    "relentless": {
        name: "Relentless (Recharges after a Short or Long Rest)",
        category: "offensive",
        description: "If takes {threshold} damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead.",
        defaultThreshold: 14
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
    },
    "false-appearance": {
        name: "False Appearance",
        category: "utility",
        description: "While motionless, is indistinguishable from a {object}.",
        defaultObject: "natural rock formation"
    },
    "ambusher": {
        name: "Ambusher",
        category: "utility",
        description: "Has advantage on attack rolls against any creature it has surprised."
    },
    "hold-breath": {
        name: "Hold Breath",
        category: "utility",
        description: "Can hold its breath for {duration} minutes.",
        defaultDuration: 15
    },
    "labyrinthine-recall": {
        name: "Labyrinthine Recall",
        category: "utility",
        description: "Can perfectly recall any path it has traveled."
    },
    "shadow-stealth": {
        name: "Shadow Stealth",
        category: "utility",
        description: "While in dim light or darkness, can take the Hide action as a bonus action."
    },
    "innate-spellcasting": {
        name: "Innate Spellcasting",
        category: "utility",
        description: "The creature's innate spellcasting ability is {ability} (spell save DC {dc}). It can innately cast the following spells, requiring no material components."
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
        greataxe: { name: "Greataxe", damage: "slashing", reach: 5 },
        greatsword: { name: "Greatsword", damage: "slashing", reach: 5 },
        morningstar: { name: "Morningstar", damage: "piercing", reach: 5 },
        scimitar: { name: "Scimitar", damage: "slashing", reach: 5 },
        rapier: { name: "Rapier", damage: "piercing", reach: 5 },
        dagger: { name: "Dagger", damage: "piercing", reach: 5 },
        maul: { name: "Maul", damage: "bludgeoning", reach: 5 },
        warhammer: { name: "Warhammer", damage: "bludgeoning", reach: 5 },
        halberd: { name: "Halberd", damage: "slashing", reach: 10 },
        glaive: { name: "Glaive", damage: "slashing", reach: 10 },
        pike: { name: "Pike", damage: "piercing", reach: 10 },
        spear: { name: "Spear", damage: "piercing", reach: 5 },
        sting: { name: "Sting", damage: "piercing", reach: 5 },
        talons: { name: "Talons", damage: "slashing", reach: 5 },
        hooves: { name: "Hooves", damage: "bludgeoning", reach: 5 },
        pseudopod: { name: "Pseudopod", damage: "bludgeoning", reach: 5 },
        constrict: { name: "Constrict", damage: "bludgeoning", reach: 5, grapple: true },
        touch: { name: "Withering Touch", damage: "necrotic", reach: 5 }
    },
    ranged: {
        longbow: { name: "Longbow", damage: "piercing", range: "150/600 ft." },
        shortbow: { name: "Shortbow", damage: "piercing", range: "80/320 ft." },
        javelin: { name: "Javelin", damage: "piercing", range: "30/120 ft." },
        rock: { name: "Rock", damage: "bludgeoning", range: "60/240 ft." },
        spit: { name: "Spit", damage: "acid", range: "30 ft." },
        lightCrossbow: { name: "Light Crossbow", damage: "piercing", range: "80/320 ft." },
        heavyCrossbow: { name: "Heavy Crossbow", damage: "piercing", range: "100/400 ft." },
        handCrossbow: { name: "Hand Crossbow", damage: "piercing", range: "30/120 ft." },
        dart: { name: "Dart", damage: "piercing", range: "20/60 ft." },
        eyeRay: { name: "Eye Ray", damage: "varies", range: "120 ft." },
        web: { name: "Web (Recharge 5-6)", damage: "none", range: "30/60 ft.", special: "restrained" },
        spine: { name: "Spine", damage: "piercing", range: "30/60 ft." },
        etherealBolt: { name: "Ethereal Bolt", damage: "force", range: "60 ft." }
    },
    breath: {
        fire: { name: "Fire Breath", damage: "fire", shape: "cone", save: "Dexterity" },
        cold: { name: "Cold Breath", damage: "cold", shape: "cone", save: "Constitution" },
        lightning: { name: "Lightning Breath", damage: "lightning", shape: "line", save: "Dexterity" },
        acid: { name: "Acid Breath", damage: "acid", shape: "line", save: "Dexterity" },
        poison: { name: "Poison Breath", damage: "poison", shape: "cone", save: "Constitution" },
        necrotic: { name: "Necrotic Breath", damage: "necrotic", shape: "cone", save: "Constitution" },
        radiant: { name: "Radiant Breath", damage: "radiant", shape: "cone", save: "Dexterity" },
        thunder: { name: "Sonic Roar", damage: "thunder", shape: "cone", save: "Constitution" },
        psychic: { name: "Mind Blast", damage: "psychic", shape: "cone", save: "Intelligence" }
    },
    special: {
        frighteningGaze: { name: "Frightening Gaze", save: "Wisdom", effect: "frightened", range: 30 },
        petrifyingGaze: { name: "Petrifying Gaze", save: "Constitution", effect: "petrified", range: 30 },
        charmingGaze: { name: "Charming Gaze", save: "Wisdom", effect: "charmed", range: 30 },
        drainLife: { name: "Life Drain", save: "Constitution", effect: "hp max reduction", damage: "necrotic" },
        engulf: { name: "Engulf", save: "Dexterity", effect: "restrained and damage", sizeLimit: "Large or smaller" },
        swallow: { name: "Swallow", save: "none", effect: "blinded, restrained, and damage", sizeLimit: "Medium or smaller" },
        possession: { name: "Possession (Recharge 6)", save: "Charisma", effect: "possessed" }
    }
};

// Legendary action templates
const legendaryActionTemplates = [
    { name: "Detect", cost: 1, description: "Makes a Wisdom (Perception) check." },
    { name: "Tail Attack", cost: 1, description: "Makes a tail attack." },
    { name: "Wing Attack", cost: 2, description: "Beats its wings. Each creature within 15 feet must succeed on a DC {dc} Dexterity saving throw or take {damage} bludgeoning damage and be knocked prone. The creature can then fly up to half its flying speed." },
    { name: "Move", cost: 1, description: "Moves up to half its speed without provoking opportunity attacks." },
    { name: "Attack", cost: 2, description: "Makes one weapon attack." },
    { name: "Cast a Spell", cost: 3, description: "Casts a spell from its list of spells, using a spell slot as normal." },
    { name: "Claw Attack", cost: 1, description: "Makes one claw attack." },
    { name: "Bite Attack", cost: 2, description: "Makes one bite attack." },
    { name: "Frightening Presence", cost: 1, description: "Uses Frightful Presence." },
    { name: "Teleport", cost: 2, description: "Magically teleports up to 60 feet to an unoccupied space it can see." },
    { name: "Command Ally", cost: 1, description: "One ally within 30 feet that can hear the creature can use its reaction to move up to its speed or make one weapon attack." },
    { name: "Eye Ray", cost: 2, description: "Uses one random eye ray." },
    { name: "Disrupt Life", cost: 3, description: "Each non-undead creature within 20 feet must make a DC {dc} Constitution saving throw, taking {damage} necrotic damage on a failed save, or half as much on a successful one." },
    { name: "Energy Drain", cost: 2, description: "Melee Spell Attack: +{bonus} to hit, reach 5 ft., one creature. Hit: {damage} necrotic damage. The target must succeed on a DC {dc} Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken." },
    { name: "Unearthly Howl", cost: 2, description: "Each creature within 60 feet that can hear the creature must succeed on a DC {dc} Wisdom saving throw or become frightened until the end of the creature's next turn." }
];

// Lair action templates
const lairActionTemplates = [
    { description: "A cloud of swarming insects fills a 20-foot-radius sphere centered on a point the creature chooses within 120 feet. The cloud spreads around corners and remains until dismissed or dispelled. Any creature in the cloud is lightly obscured." },
    { description: "Pools of water within 90 feet surge outward. Each creature on the ground within 20 feet of such a pool must succeed on a DC 15 Strength saving throw or be pulled up to 20 feet into the pool and knocked prone." },
    { description: "The creature creates a wall of stone on a solid surface within 120 feet. The wall can be up to 60 feet long, 10 feet high, and 5 feet thick." },
    { description: "Magical darkness spreads from a point within 60 feet, filling a 15-foot-radius sphere until the creature dismisses it or uses this lair action again." },
    { description: "The ground in a 20-foot radius centered on a point within 120 feet becomes difficult terrain until the next initiative count 20." },
    { description: "Grasping tendrils of shadow reach out from a wall within 60 feet. Each creature within 10 feet of the wall must succeed on a DC 15 Dexterity saving throw or be grappled (escape DC 15). Until this grapple ends, the creature is restrained." },
    { description: "The creature causes up to three corpses within its lair to rise as zombies. The zombies act immediately after the creature's lair action and are hostile to all non-undead creatures." },
    { description: "A 20-foot radius of fire erupts from a point on the ground the creature can see within 120 feet. Each creature in that area must make a DC 15 Dexterity saving throw, taking 10 (3d6) fire damage on a failed save, or half as much on a successful one." },
    { description: "Freezing fog fills a 20-foot-radius sphere centered on a point the creature can see within 120 feet. The fog spreads around corners, and its area is heavily obscured. Each creature in the fog must make a DC 15 Constitution saving throw, taking 10 (3d6) cold damage on a failed save, or half as much on a successful one." },
    { description: "Lightning arcs, forming a 5-foot-wide line between two solid surfaces the creature can see within 120 feet. Each creature in that line must make a DC 15 Dexterity saving throw, taking 10 (3d6) lightning damage on a failed save, or half as much on a successful one." },
    { description: "The creature summons a spectral chain that wraps around one creature it can see within 60 feet. The target must succeed on a DC 15 Strength saving throw or be restrained until initiative count 20 on the next round." },
    { description: "The creature magically summons 1d4 loyal servants (use appropriate CR creature statistics). The summoned creatures appear in unoccupied spaces within 60 feet and act on the creature's initiative." },
    { description: "A tremor shakes the lair. Each creature on the ground within 60 feet of the creature must succeed on a DC 15 Dexterity saving throw or be knocked prone." }
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
    "chill-touch": { name: "Chill Touch", level: 0, school: "necromancy", damage: "1d8 necrotic", 
        description: "You create a ghostly, skeletal hand in the space of a creature within range. Make a ranged spell attack. On a hit, the target takes 1d8 necrotic damage and can't regain hit points until the start of your next turn. If you hit an undead target, it also has disadvantage on attack rolls against you until the end of your next turn." },
    "eldritch-blast": { name: "Eldritch Blast", level: 0, school: "evocation", damage: "1d10 force",
        description: "A beam of crackling energy streaks toward a creature within range. Make a ranged spell attack. On a hit, the target takes 1d10 force damage." },
    "fire-bolt": { name: "Fire Bolt", level: 0, school: "evocation", damage: "1d10 fire",
        description: "You hurl a mote of fire at a creature or object within range. Make a ranged spell attack. On a hit, the target takes 1d10 fire damage. A flammable object hit by this spell ignites if it isn't being worn or carried." },
    "ray-of-frost": { name: "Ray of Frost", level: 0, school: "evocation", damage: "1d8 cold",
        description: "A frigid beam of blue-white light streaks toward a creature within range. Make a ranged spell attack. On a hit, it takes 1d8 cold damage, and its speed is reduced by 10 feet until the start of your next turn." },
    "poison-spray": { name: "Poison Spray", level: 0, school: "conjuration", damage: "1d12 poison",
        description: "You extend your hand toward a creature you can see within range and project a puff of noxious gas. The creature must succeed on a Constitution saving throw or take 1d12 poison damage." },
    "shocking-grasp": { name: "Shocking Grasp", level: 0, school: "evocation", damage: "1d8 lightning",
        description: "Lightning springs from your hand to deliver a shock. Make a melee spell attack (with advantage if target wears metal armor). On a hit, the target takes 1d8 lightning damage and can't take reactions until the start of its next turn." },
    "sacred-flame": { name: "Sacred Flame", level: 0, school: "evocation", damage: "1d8 radiant",
        description: "Flame-like radiance descends on a creature you can see within range. The target must succeed on a Dexterity saving throw or take 1d8 radiant damage. The target gains no benefit from cover for this saving throw." },
    "toll-the-dead": { name: "Toll the Dead", level: 0, school: "necromancy", damage: "1d8/1d12 necrotic",
        description: "You point at one creature you can see within range, and the sound of a dolorous bell fills the air. The target must succeed on a Wisdom saving throw or take 1d8 necrotic damage. If the target is missing any of its hit points, it instead takes 1d12 necrotic damage." },
    "mage-hand": { name: "Mage Hand", level: 0, school: "conjuration",
        description: "A spectral, floating hand appears at a point you choose within range. The hand can manipulate objects, open doors, stow or retrieve items, or pour out the contents of a vial. The hand can't attack, activate magic items, or carry more than 10 pounds." },
    
    // 1st Level
    "burning-hands": { name: "Burning Hands", level: 1, school: "evocation", damage: "3d6 fire",
        description: "A thin sheet of flames shoots forth from your outstretched fingertips. Each creature in a 15-foot cone must make a Dexterity saving throw. A creature takes 3d6 fire damage on a failed save, or half as much on a successful one." },
    "charm-person": { name: "Charm Person", level: 1, school: "enchantment",
        description: "You attempt to charm a humanoid you can see within range. It must make a Wisdom saving throw (with advantage if you or your companions are fighting it). If it fails, it is charmed by you until the spell ends or until you or your companions do anything harmful to it. The charmed creature regards you as a friendly acquaintance." },
    "command": { name: "Command", level: 1, school: "enchantment",
        description: "You speak a one-word command to a creature you can see within range. The target must succeed on a Wisdom saving throw or follow the command on its next turn. Common commands include Approach, Drop, Flee, Grovel, or Halt." },
    "cure-wounds": { name: "Cure Wounds", level: 1, school: "evocation", healing: "1d8",
        description: "A creature you touch regains a number of hit points equal to 1d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs." },
    "detect-magic": { name: "Detect Magic", level: 1, school: "divination",
        description: "For the duration, you sense the presence of magic within 30 feet of you. If you sense magic in this way, you can use your action to see a faint aura around any visible creature or object that bears magic, and you learn its school of magic." },
    "disguise-self": { name: "Disguise Self", level: 1, school: "illusion",
        description: "You make yourself—including your clothing, armor, weapons, and other belongings—look different until the spell ends. You can seem 1 foot shorter or taller and can appear thin, fat, or in between. You can't change your body type. The changes fail to hold up to physical inspection." },
    "fog-cloud": { name: "Fog Cloud", level: 1, school: "conjuration",
        description: "You create a 20-foot-radius sphere of fog centered on a point within range. The sphere spreads around corners, and its area is heavily obscured. It lasts for the duration or until a wind of moderate or greater speed disperses it." },
    "hellish-rebuke": { name: "Hellish Rebuke", level: 1, school: "evocation", damage: "2d10 fire",
        description: "You point your finger, and the creature that damaged you is momentarily surrounded by hellish flames. The creature must make a Dexterity saving throw. It takes 2d10 fire damage on a failed save, or half as much on a successful one." },
    "hex": { name: "Hex", level: 1, school: "enchantment",
        description: "You place a curse on a creature you can see within range. Until the spell ends, you deal an extra 1d6 necrotic damage to the target whenever you hit it with an attack. Also, choose one ability; the target has disadvantage on ability checks made with that ability." },
    "inflict-wounds": { name: "Inflict Wounds", level: 1, school: "necromancy", damage: "3d10 necrotic",
        description: "Make a melee spell attack against a creature you can reach. On a hit, the target takes 3d10 necrotic damage." },
    "magic-missile": { name: "Magic Missile", level: 1, school: "evocation", damage: "1d4+1 force",
        description: "You create three glowing darts of magical force. Each dart hits a creature of your choice that you can see within range. A dart deals 1d4+1 force damage to its target. The darts all strike simultaneously." },
    "shield": { name: "Shield", level: 1, school: "abjuration",
        description: "An invisible barrier of magical force appears and protects you. Until the start of your next turn, you have a +5 bonus to AC, including against the triggering attack, and you take no damage from magic missile." },
    "sleep": { name: "Sleep", level: 1, school: "enchantment",
        description: "This spell sends creatures into a magical slumber. Roll 5d8; the total is how many hit points of creatures this spell can affect. Starting with the creature with the lowest current hit points, each creature falls unconscious until the spell ends, the sleeper takes damage, or someone uses an action to wake it." },
    "thunderwave": { name: "Thunderwave", level: 1, school: "evocation", damage: "2d8 thunder",
        description: "A wave of thunderous force sweeps out from you. Each creature in a 15-foot cube originating from you must make a Constitution saving throw. On a failed save, a creature takes 2d8 thunder damage and is pushed 10 feet away from you. On a success, the creature takes half damage and isn't pushed." },
    "ray-of-sickness": { name: "Ray of Sickness", level: 1, school: "necromancy", damage: "2d8 poison",
        description: "A ray of sickening greenish energy lashes out toward a creature within range. Make a ranged spell attack. On a hit, the target takes 2d8 poison damage and must make a Constitution saving throw. On a failed save, it is also poisoned until the end of your next turn." },
    
    // 2nd Level
    "blindness-deafness": { name: "Blindness/Deafness", level: 2, school: "necromancy",
        description: "You can blind or deafen a foe. Choose one creature you can see within range. The target must make a Constitution saving throw. If it fails, the target is either blinded or deafened (your choice) for the duration. At the end of each of its turns, the target can make a Constitution saving throw to end the effect." },
    "darkness": { name: "Darkness", level: 2, school: "evocation",
        description: "Magical darkness spreads from a point you choose within range to fill a 15-foot-radius sphere for the duration. Creatures with darkvision can't see through this darkness, and nonmagical light can't illuminate it." },
    "hold-person": { name: "Hold Person", level: 2, school: "enchantment",
        description: "Choose a humanoid you can see within range. The target must succeed on a Wisdom saving throw or be paralyzed for the duration. At the end of each of its turns, the target can make another Wisdom saving throw. On a success, the spell ends on the target." },
    "invisibility": { name: "Invisibility", level: 2, school: "illusion",
        description: "A creature you touch becomes invisible until the spell ends. Anything the target is wearing or carrying is invisible as long as it is on the target's person. The spell ends for a target that attacks or casts a spell." },
    "mirror-image": { name: "Mirror Image", level: 2, school: "illusion",
        description: "Three illusory duplicates of yourself appear in your space. Each time a creature targets you with an attack, roll a d20 to determine whether the attack instead targets one of your duplicates. A duplicate's AC equals 10 + your Dexterity modifier. If an attack hits a duplicate, the duplicate is destroyed." },
    "misty-step": { name: "Misty Step", level: 2, school: "conjuration",
        description: "Briefly surrounded by silvery mist, you teleport up to 30 feet to an unoccupied space that you can see." },
    "scorching-ray": { name: "Scorching Ray", level: 2, school: "evocation", damage: "2d6 fire",
        description: "You create three rays of fire and hurl them at targets within range. You can hurl them at one target or several. Make a ranged spell attack for each ray. On a hit, the target takes 2d6 fire damage." },
    "shatter": { name: "Shatter", level: 2, school: "evocation", damage: "3d8 thunder",
        description: "A sudden loud ringing noise painfully intense erupts from a point of your choice within range. Each creature in a 10-foot-radius sphere must make a Constitution saving throw. A creature takes 3d8 thunder damage on a failed save, or half as much on a successful one. A nonmagical object that isn't being worn or carried also takes the damage." },
    "suggestion": { name: "Suggestion", level: 2, school: "enchantment",
        description: "You suggest a course of activity (limited to a sentence or two) and magically influence a creature you can see within range that can hear and understand you. The suggestion must be worded to sound reasonable. The target must make a Wisdom saving throw. On a failed save, it pursues the course of action you described." },
    "web": { name: "Web", level: 2, school: "conjuration",
        description: "You conjure a mass of thick, sticky webbing at a point of your choice within range. The webs fill a 20-foot cube for the duration. The webs are difficult terrain and lightly obscure the area. A creature that starts its turn in the webs or enters them must make a Dexterity saving throw or be restrained." },
    "arcane-lock": { name: "Arcane Lock", level: 2, school: "abjuration",
        description: "You touch a closed door, window, gate, chest, or other entryway, and it becomes locked for the duration. You and the creatures you designate when you cast this spell can open the object normally. You can also set a password that suppresses this spell for 1 minute when spoken within 5 feet of the object." },
    "knock": { name: "Knock", level: 2, school: "transmutation",
        description: "Choose an object that you can see within range. The object can be a door, a box, a chest, a set of manacles, a padlock, or another object that contains a mundane or magical means that prevents access. A target that is held shut by a mundane lock or that is stuck or barred becomes unlocked, unstuck, or unbarred." },
    
    // 3rd Level
    "animate-dead": { name: "Animate Dead", level: 3, school: "necromancy",
        description: "This spell creates an undead servant. Choose a pile of bones or a corpse of a Medium or Small humanoid within range. Your spell imbues the target with a foul mimicry of life, raising it as an undead creature. The target becomes a skeleton or zombie that obeys your verbal commands." },
    "counterspell": { name: "Counterspell", level: 3, school: "abjuration",
        description: "You attempt to interrupt a creature in the process of casting a spell. If the creature is casting a spell of 3rd level or lower, its spell fails. If it is casting a spell of 4th level or higher, make an ability check using your spellcasting ability. The DC equals 10 + the spell's level. On a success, the creature's spell fails." },
    "dispel-magic": { name: "Dispel Magic", level: 3, school: "abjuration",
        description: "Choose one creature, object, or magical effect within range. Any spell of 3rd level or lower on the target ends. For each spell of 4th level or higher on the target, make an ability check using your spellcasting ability. The DC equals 10 + the spell's level. On a successful check, the spell ends." },
    "fear": { name: "Fear", level: 3, school: "illusion",
        description: "You project a phantasmal image of a creature's worst fears. Each creature in a 30-foot cone must succeed on a Wisdom saving throw or drop whatever it is holding and become frightened for the duration. While frightened, a creature must take the Dash action and move away from you by the safest available route on each of its turns." },
    "fireball": { name: "Fireball", level: 3, school: "evocation", damage: "8d6 fire",
        description: "A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into an explosion of flame. Each creature in a 20-foot-radius sphere must make a Dexterity saving throw. A target takes 8d6 fire damage on a failed save, or half as much on a successful one." },
    "fly": { name: "Fly", level: 3, school: "transmutation",
        description: "You touch a willing creature. The target gains a flying speed of 60 feet for the duration. When the spell ends, the target falls if it is still aloft, unless it can stop the fall." },
    "haste": { name: "Haste", level: 3, school: "transmutation",
        description: "Choose a willing creature you can see within range. Until the spell ends, the target's speed is doubled, it gains a +2 bonus to AC, it has advantage on Dexterity saving throws, and it gains an additional action on each of its turns. When the spell ends, the target can't move or take actions until after its next turn." },
    "lightning-bolt": { name: "Lightning Bolt", level: 3, school: "evocation", damage: "8d6 lightning",
        description: "A stroke of lightning forming a line 100 feet long and 5 feet wide blasts out from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 8d6 lightning damage on a failed save, or half as much on a successful one." },
    "slow": { name: "Slow", level: 3, school: "transmutation",
        description: "You alter time around up to six creatures of your choice in a 40-foot cube within range. Each target must succeed on a Wisdom saving throw or be affected. An affected target's speed is halved, it takes a −2 penalty to AC and Dexterity saving throws, and it can't use reactions. On its turn, it can use either an action or a bonus action, not both." },
    "vampiric-touch": { name: "Vampiric Touch", level: 3, school: "necromancy", damage: "3d6 necrotic",
        description: "The touch of your shadow-wreathed hand can siphon life force from others to heal your wounds. Make a melee spell attack against a creature within your reach. On a hit, the target takes 3d6 necrotic damage, and you regain hit points equal to half the amount of necrotic damage dealt." },
    "minor-illusion": { name: "Minor Illusion", level: 0, school: "illusion",
        description: "You create a sound or an image of an object within range that lasts for the duration. If you create a sound, its volume can range from a whisper to a scream. If you create an image of an object, it must be no larger than a 5-foot cube. The image can't create sound, light, smell, or any other sensory effect." },
    "stone-shape": { name: "Stone Shape", level: 4, school: "transmutation",
        description: "You touch a stone object of Medium size or smaller or a section of stone no more than 5 feet in any dimension and form it into any shape that suits your purpose." },
    
    // 4th Level
    "banishment": { name: "Banishment", level: 4, school: "abjuration",
        description: "You attempt to send one creature that you can see within range to another plane of existence. The target must succeed on a Charisma saving throw or be banished. If the target is native to a different plane than the one you're on, the target is banished with a faint popping noise, returning to its home plane." },
    "blight": { name: "Blight", level: 4, school: "necromancy", damage: "8d8 necrotic",
        description: "Necromantic energy washes over a creature of your choice that you can see within range, draining moisture and vitality from it. The target must make a Constitution saving throw. The target takes 8d8 necrotic damage on a failed save, or half as much damage on a successful one." },
    "confusion": { name: "Confusion", level: 4, school: "enchantment",
        description: "This spell assaults and twists creatures' minds, spawning delusions and provoking uncontrolled action. Each creature in a 10-foot-radius sphere must succeed on a Wisdom saving throw or be affected. An affected target can't take reactions and must roll a d10 at the start of each turn to determine its behavior." },
    "dimension-door": { name: "Dimension Door", level: 4, school: "conjuration",
        description: "You teleport yourself from your current location to any other spot within range. You arrive at exactly the spot desired. It can be a place you can see, one you can visualize, or one you can describe by stating distance and direction. You can bring along objects and one willing creature of your size or smaller." },
    "greater-invisibility": { name: "Greater Invisibility", level: 4, school: "illusion",
        description: "You or a creature you touch becomes invisible until the spell ends. Anything the target is wearing or carrying is invisible as long as it is on the target's person." },
    "ice-storm": { name: "Ice Storm", level: 4, school: "evocation", damage: "2d8 bludgeoning + 4d6 cold",
        description: "A hail of rock-hard ice pounds to the ground in a 20-foot-radius, 40-foot-high cylinder centered on a point within range. Each creature in the cylinder must make a Dexterity saving throw. A creature takes 2d8 bludgeoning damage and 4d6 cold damage on a failed save, or half as much on a successful one." },
    "phantasmal-killer": { name: "Phantasmal Killer", level: 4, school: "illusion", damage: "4d10 psychic",
        description: "You tap into the nightmares of a creature you can see within range and create an illusory manifestation of its deepest fears. The target must make a Wisdom saving throw. On a failed save, the target becomes frightened for the duration. At the end of each of its turns, the target takes 4d10 psychic damage." },
    "polymorph": { name: "Polymorph", level: 4, school: "transmutation",
        description: "This spell transforms a creature that you can see within range into a new form. An unwilling creature must make a Wisdom saving throw to avoid the effect. The transformation lasts for the duration, or until the target drops to 0 hit points or dies. The new form can be any beast whose challenge rating is equal to or less than the target's." },
    "wall-of-fire": { name: "Wall of Fire", level: 4, school: "evocation", damage: "5d8 fire",
        description: "You create a wall of fire on a solid surface within range. The wall is opaque and lasts for the duration. When the wall appears, each creature in its area must make a Dexterity saving throw. On a failed save, a creature takes 5d8 fire damage, or half as much on a successful save." },
    
    // 5th Level
    "cloudkill": { name: "Cloudkill", level: 5, school: "conjuration", damage: "5d8 poison",
        description: "You create a 20-foot-radius sphere of poisonous, yellow-green fog centered on a point you choose within range. The fog spreads around corners. A creature that starts its turn in the fog must make a Constitution saving throw, taking 5d8 poison damage on a failed save, or half as much on a successful one." },
    "cone-of-cold": { name: "Cone of Cold", level: 5, school: "evocation", damage: "8d8 cold",
        description: "A blast of cold air erupts from your hands. Each creature in a 60-foot cone must make a Constitution saving throw. A creature takes 8d8 cold damage on a failed save, or half as much on a successful one. A creature killed by this spell becomes a frozen statue until it thaws." },
    "dominate-person": { name: "Dominate Person", level: 5, school: "enchantment",
        description: "You attempt to beguile a humanoid that you can see within range. It must succeed on a Wisdom saving throw or be charmed by you for the duration. While charmed, you have a telepathic link with it. You can use this telepathic link to issue commands to the creature while you are conscious." },
    "hold-monster": { name: "Hold Monster", level: 5, school: "enchantment",
        description: "Choose a creature that you can see within range. The target must succeed on a Wisdom saving throw or be paralyzed for the duration. This spell has no effect on undead. At the end of each of its turns, the target can make another Wisdom saving throw. On a success, the spell ends on the target." },
    "insect-plague": { name: "Insect Plague", level: 5, school: "conjuration", damage: "4d10 piercing",
        description: "Swarming, biting locusts fill a 20-foot-radius sphere centered on a point you choose within range. The sphere spreads around corners. Each creature that starts its turn in the area must make a Constitution saving throw, taking 4d10 piercing damage on a failed save, or half as much on a successful one." },
    "scrying": { name: "Scrying", level: 5, school: "divination",
        description: "You can see and hear a particular creature you choose that is on the same plane of existence as you. The target must make a Wisdom saving throw, which is modified by how well you know the target and the sort of physical connection you have to it. On a failed save, you can see and hear the target for 10 minutes." },
    "telekinesis": { name: "Telekinesis", level: 5, school: "transmutation",
        description: "You gain the ability to move or manipulate creatures or objects by thought. You can try to move a Huge or smaller creature. Make an ability check contested by the creature's Strength check. If you win, you move the creature up to 30 feet in any direction. You can also exert fine control on objects, such as manipulating a simple tool or opening a door." },
    "wall-of-stone": { name: "Wall of Stone", level: 5, school: "evocation",
        description: "A nonmagical wall of solid stone springs into existence at a point you choose within range. The wall is 6 inches thick and is composed of ten 10-foot-by-10-foot panels. Each panel must be contiguous with at least one other panel. If the wall cuts through a creature's space when it appears, the creature is pushed to one side of the wall." },
    "wall-of-force": { name: "Wall of Force", level: 5, school: "evocation",
        description: "An invisible wall of force springs into existence at a point you choose within range. The wall is 1/4 inch thick and is composed of up to ten 10-foot-by-10-foot panels. Nothing can physically pass through the wall. It is immune to all damage and can't be dispelled by dispel magic." },
    
    // 6th Level
    "chain-lightning": { name: "Chain Lightning", level: 6, school: "evocation", damage: "10d8 lightning",
        description: "You create a bolt of lightning that arcs toward a target of your choice that you can see within range. Three bolts then leap from that target to as many as three other targets, each of which must be within 30 feet of the first target. A target must make a Dexterity saving throw, taking 10d8 lightning damage on a failed save, or half as much on a successful one." },
    "circle-of-death": { name: "Circle of Death", level: 6, school: "necromancy", damage: "8d6 necrotic",
        description: "A sphere of negative energy ripples out in a 60-foot-radius sphere from a point within range. Each creature in that area must make a Constitution saving throw. A target takes 8d6 necrotic damage on a failed save, or half as much damage on a successful one." },
    "disintegrate": { name: "Disintegrate", level: 6, school: "transmutation", damage: "10d6+40 force",
        description: "A thin green ray springs from your pointing finger to a target that you can see within range. The target can be a creature, an object, or a creation of magical force. A creature targeted by this spell must make a Dexterity saving throw. On a failed save, the target takes 10d6+40 force damage. If this damage reduces the target to 0 hit points, it is disintegrated." },
    "eyebite": { name: "Eyebite", level: 6, school: "necromancy",
        description: "For the spell's duration, your eyes become an inky void imbued with dread power. One creature of your choice within 60 feet must succeed on a Wisdom saving throw or be affected by one of the following effects: Asleep (falls unconscious), Panicked (frightened and must Dash away), or Sickened (disadvantage on attacks and ability checks)." },
    "globe-of-invulnerability": { name: "Globe of Invulnerability", level: 6, school: "abjuration",
        description: "An immobile, faintly shimmering barrier springs into existence in a 10-foot radius around you and remains for the duration. Any spell of 5th level or lower cast from outside the barrier can't affect creatures or objects within it. Such a spell can target creatures and objects within the barrier, but the spell has no effect on them." },
    "mass-suggestion": { name: "Mass Suggestion", level: 6, school: "enchantment",
        description: "You suggest a course of activity (limited to a sentence or two) and magically influence up to twelve creatures of your choice that you can see within range. The suggestion must be worded to sound reasonable. Each target must make a Wisdom saving throw. On a failed save, it pursues the course of action you described." },
    
    // 7th Level
    "finger-of-death": { name: "Finger of Death", level: 7, school: "necromancy", damage: "7d8+30 necrotic",
        description: "You send negative energy coursing through a creature that you can see within range, causing it searing pain. The target must make a Constitution saving throw. It takes 7d8+30 necrotic damage on a failed save, or half as much on a successful one. A humanoid killed by this spell rises at the start of your next turn as a zombie permanently under your command." },
    "fire-storm": { name: "Fire Storm", level: 7, school: "evocation", damage: "7d10 fire",
        description: "A storm made up of sheets of roaring flame appears in a location you choose within range. The area of the storm consists of up to ten 10-foot cubes. Each creature in the area must make a Dexterity saving throw. It takes 7d10 fire damage on a failed save, or half as much on a successful one." },
    "plane-shift": { name: "Plane Shift", level: 7, school: "conjuration",
        description: "You and up to eight willing creatures who link hands in a circle are transported to a different plane of existence. You can specify a target destination in general terms and you appear in or near that destination. Alternatively, you can use this spell to banish an unwilling creature to another plane (Charisma save to resist)." },
    "prismatic-spray": { name: "Prismatic Spray", level: 7, school: "evocation", damage: "10d6 (varies)",
        description: "Eight multicolored rays of light flash from your hand. Each ray is a different color and has a different power and purpose. Each creature in a 60-foot cone must make a Dexterity saving throw. For each target, roll a d8 to determine which color ray affects it: Red (fire), Orange (acid), Yellow (lightning), Green (poison), Blue (cold), Indigo (restrained then petrified), or Violet (blinded then banished)." },
    "teleport": { name: "Teleport", level: 7, school: "conjuration",
        description: "This spell instantly transports you and up to eight willing creatures of your choice that you can see within range, or a single object that you can see within range, to a destination you select. The destination must be known to you, and it must be on the same plane of existence as you." },
    
    // 8th Level
    "dominate-monster": { name: "Dominate Monster", level: 8, school: "enchantment",
        description: "You attempt to beguile a creature that you can see within range. It must succeed on a Wisdom saving throw or be charmed by you for the duration. While the creature is charmed, you have a telepathic link with it. You can use this telepathic link to issue commands to the creature while you are conscious." },
    "feeblemind": { name: "Feeblemind", level: 8, school: "enchantment", damage: "4d6 psychic",
        description: "You blast the mind of a creature that you can see within range, attempting to shatter its intellect and personality. The target takes 4d6 psychic damage and must make an Intelligence saving throw. On a failed save, the creature's Intelligence and Charisma scores become 1. The creature can't cast spells, activate magic items, understand language, or communicate." },
    "incendiary-cloud": { name: "Incendiary Cloud", level: 8, school: "conjuration", damage: "10d8 fire",
        description: "A swirling cloud of smoke shot through with white-hot embers appears in a 20-foot-radius sphere centered on a point within range. The cloud spreads around corners and is heavily obscured. When the cloud appears, each creature in it must make a Dexterity saving throw, taking 10d8 fire damage on a failed save, or half as much on a successful one." },
    "maze": { name: "Maze", level: 8, school: "conjuration",
        description: "You banish a creature that you can see within range into a labyrinthine demiplane. The target remains there for the duration or until it escapes the maze. The target can use its action to attempt to escape by making a DC 20 Intelligence check. When it succeeds, the spell ends." },
    "power-word-stun": { name: "Power Word Stun", level: 8, school: "enchantment",
        description: "You speak a word of power that can overwhelm the mind of one creature you can see within range, leaving it dumbfounded. If the target has 150 hit points or fewer, it is stunned. Otherwise, the spell has no effect. At the end of each of its turns, the stunned target can make a Constitution saving throw. On a success, the stunning effect ends." },
    "mind-blank": { name: "Mind Blank", level: 8, school: "abjuration",
        description: "Until the spell ends, one willing creature you touch is immune to psychic damage, any effect that would sense its emotions or read its thoughts, divination spells, and the charmed condition." },
    
    // 9th Level
    "meteor-swarm": { name: "Meteor Swarm", level: 9, school: "evocation", damage: "40d6 fire/bludgeoning",
        description: "Blazing orbs of fire plummet to the ground at four different points you can see within range. Each creature in a 40-foot-radius sphere centered on each point must make a Dexterity saving throw. A creature takes 20d6 fire damage and 20d6 bludgeoning damage on a failed save, or half as much on a successful one." },
    "power-word-kill": { name: "Power Word Kill", level: 9, school: "enchantment",
        description: "You utter a word of power that can compel one creature you can see within range to die instantly. If the creature you choose has 100 hit points or fewer, it dies. Otherwise, the spell has no effect." },
    "time-stop": { name: "Time Stop", level: 9, school: "transmutation",
        description: "You briefly stop the flow of time for everyone but yourself. No time passes for other creatures, while you take 1d4+1 turns in a row, during which you can use actions and move as normal. This spell ends if one of the actions you use during this period, or any effects that you create during this period, affects a creature other than you." },
    "true-polymorph": { name: "True Polymorph", level: 9, school: "transmutation",
        description: "Choose one creature or nonmagical object that you can see within range. You transform the creature into a different creature, the creature into a nonmagical object, or the object into a creature. The transformation lasts for the duration, or until the target drops to 0 hit points or dies. If you concentrate on this spell for the full duration, the transformation becomes permanent." },
    "wish": { name: "Wish", level: 9, school: "conjuration",
        description: "Wish is the mightiest spell a mortal creature can cast. By simply speaking aloud, you can alter the very foundations of reality in accord with your desires. The basic use of this spell is to duplicate any other spell of 8th level or lower. You don't need to meet any requirements in that spell, including costly components." }
};
