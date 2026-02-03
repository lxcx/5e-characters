// Expansion Pack 3 - Final push to 900+
// More classic creatures

const MONSTERS_EXPANSION3 = {
    // ===== Giants (more variants) =====
    "cloud-giant": {
        name: "Cloud Giant",
        source: "MM",
        size: "huge",
        type: "giant",
        alignment: "neutral good (50%) or neutral evil (50%)",
        ac: 14,
        acType: "natural armor",
        hp: 200,
        hitDice: "16d12+96",
        speed: { walk: 40 },
        abilityScores: { str: 27, dex: 10, con: 22, int: 12, wis: 16, cha: 16 },
        savingThrows: { con: 10, wis: 7, cha: 7 },
        skills: { insight: 7, perception: 7 },
        senses: [],
        languages: "Common, Giant",
        cr: 9,
        environment: ["mountain", "sky"],
        role: "brute",
        tags: ["giant"],
        traits: [
            { name: "Keen Smell", description: "The giant has advantage on Wisdom (Perception) checks that rely on smell." }
        ],
        actions: [
            { name: "Multiattack", description: "The giant makes two morningstar attacks." },
            { name: "Morningstar", description: "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 21 (3d8+8) piercing damage." },
            { name: "Rock", description: "Ranged Weapon Attack: +12 to hit, range 60/240 ft., one target. Hit: 30 (4d10+8) bludgeoning damage." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 15,
            spells: {
                atWill: ["detect magic", "fog cloud", "light"],
                "3/day each": ["feather fall", "fly", "misty step", "telekinesis"],
                "1/day each": ["control weather", "gaseous form"]
            }
        }
    },
    "stone-giant": {
        name: "Stone Giant",
        source: "MM",
        size: "huge",
        type: "giant",
        alignment: "neutral",
        ac: 17,
        acType: "natural armor",
        hp: 126,
        hitDice: "11d12+55",
        speed: { walk: 40 },
        abilityScores: { str: 23, dex: 15, con: 20, int: 10, wis: 12, cha: 9 },
        savingThrows: { dex: 5, con: 8, wis: 4 },
        skills: { athletics: 12, perception: 4 },
        senses: ["darkvision 60 ft."],
        languages: "Giant",
        cr: 7,
        environment: ["mountain", "underdark", "hill"],
        role: "brute",
        tags: ["giant"],
        traits: [
            { name: "Stone Camouflage", description: "The giant has advantage on Dexterity (Stealth) checks made to hide in rocky terrain." }
        ],
        actions: [
            { name: "Multiattack", description: "The giant makes two greatclub attacks." },
            { name: "Greatclub", description: "Melee Weapon Attack: +9 to hit, reach 15 ft., one target. Hit: 19 (3d8+6) bludgeoning damage." },
            { name: "Rock", description: "Ranged Weapon Attack: +9 to hit, range 60/240 ft., one target. Hit: 28 (4d10+6) bludgeoning damage. If the target is a creature, it must succeed on a DC 17 Strength saving throw or be knocked prone." }
        ],
        reactions: [
            { name: "Rock Catching", description: "If a rock or similar object is hurled at the giant, the giant can, with a successful DC 10 Dexterity saving throw, catch the missile and take no bludgeoning damage from it." }
        ]
    },
    "hill-giant": {
        name: "Hill Giant",
        source: "MM",
        size: "huge",
        type: "giant",
        alignment: "chaotic evil",
        ac: 13,
        acType: "natural armor",
        hp: 105,
        hitDice: "10d12+40",
        speed: { walk: 40 },
        abilityScores: { str: 21, dex: 8, con: 19, int: 5, wis: 9, cha: 6 },
        skills: { perception: 2 },
        senses: [],
        languages: "Giant",
        cr: 5,
        environment: ["hill", "grassland"],
        role: "brute",
        tags: ["giant"],
        actions: [
            { name: "Multiattack", description: "The giant makes two greatclub attacks." },
            { name: "Greatclub", description: "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 18 (3d8+5) bludgeoning damage." },
            { name: "Rock", description: "Ranged Weapon Attack: +8 to hit, range 60/240 ft., one target. Hit: 21 (3d10+5) bludgeoning damage." }
        ]
    },
    "frost-giant": {
        name: "Frost Giant",
        source: "MM",
        size: "huge",
        type: "giant",
        alignment: "neutral evil",
        ac: 15,
        acType: "patchwork armor",
        hp: 138,
        hitDice: "12d12+60",
        speed: { walk: 40 },
        abilityScores: { str: 23, dex: 9, con: 21, int: 9, wis: 10, cha: 12 },
        savingThrows: { con: 8, wis: 3, cha: 4 },
        skills: { athletics: 9, perception: 3 },
        damageImmunities: ["cold"],
        senses: [],
        languages: "Giant",
        cr: 8,
        environment: ["arctic", "mountain"],
        role: "brute",
        tags: ["giant", "cold"],
        actions: [
            { name: "Multiattack", description: "The giant makes two greataxe attacks." },
            { name: "Greataxe", description: "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 25 (3d12+6) slashing damage." },
            { name: "Rock", description: "Ranged Weapon Attack: +9 to hit, range 60/240 ft., one target. Hit: 28 (4d10+6) bludgeoning damage." }
        ]
    },
    "fire-giant": {
        name: "Fire Giant",
        source: "MM",
        size: "huge",
        type: "giant",
        alignment: "lawful evil",
        ac: 18,
        acType: "plate",
        hp: 162,
        hitDice: "13d12+78",
        speed: { walk: 30 },
        abilityScores: { str: 25, dex: 9, con: 23, int: 10, wis: 14, cha: 13 },
        savingThrows: { dex: 3, con: 10, cha: 5 },
        skills: { athletics: 11, perception: 6 },
        damageImmunities: ["fire"],
        senses: [],
        languages: "Giant",
        cr: 9,
        environment: ["mountain", "underdark"],
        role: "brute",
        tags: ["giant", "fire"],
        actions: [
            { name: "Multiattack", description: "The giant makes two greatsword attacks." },
            { name: "Greatsword", description: "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 28 (6d6+7) slashing damage." },
            { name: "Rock", description: "Ranged Weapon Attack: +11 to hit, range 60/240 ft., one target. Hit: 29 (4d10+7) bludgeoning damage." }
        ]
    },
    "storm-giant": {
        name: "Storm Giant",
        source: "MM",
        size: "huge",
        type: "giant",
        alignment: "chaotic good",
        ac: 16,
        acType: "scale mail",
        hp: 230,
        hitDice: "20d12+100",
        speed: { walk: 50, swim: 50 },
        abilityScores: { str: 29, dex: 14, con: 20, int: 16, wis: 18, cha: 18 },
        savingThrows: { str: 14, con: 10, wis: 9, cha: 9 },
        skills: { arcana: 8, athletics: 14, history: 8, perception: 9 },
        damageResistances: ["cold"],
        damageImmunities: ["lightning", "thunder"],
        senses: [],
        languages: "Common, Giant",
        cr: 13,
        environment: ["coastal", "underwater", "mountain"],
        role: "brute",
        tags: ["giant", "lightning"],
        traits: [
            { name: "Amphibious", description: "The giant can breathe air and water." }
        ],
        actions: [
            { name: "Multiattack", description: "The giant makes two greatsword attacks." },
            { name: "Greatsword", description: "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 30 (6d6+9) slashing damage." },
            { name: "Rock", description: "Ranged Weapon Attack: +14 to hit, range 60/240 ft., one target. Hit: 35 (4d12+9) bludgeoning damage." },
            { name: "Lightning Strike (Recharge 5-6)", description: "The giant hurls a magical lightning bolt at a point it can see within 500 feet of it. Each creature within 10 feet of that point must make a DC 17 Dexterity saving throw, taking 54 (12d8) lightning damage on a failed save, or half as much damage on a successful one." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 17,
            spells: {
                atWill: ["detect magic", "feather fall", "levitate", "light"],
                "3/day each": ["control weather", "water breathing"]
            }
        }
    },

    // ===== More Undead =====
    "ghast": {
        name: "Ghast",
        source: "MM",
        size: "medium",
        type: "undead",
        alignment: "chaotic evil",
        ac: 13,
        hp: 36,
        hitDice: "8d8",
        speed: { walk: 30 },
        abilityScores: { str: 16, dex: 17, con: 10, int: 11, wis: 10, cha: 8 },
        damageResistances: ["necrotic"],
        damageImmunities: ["poison"],
        conditionImmunities: ["charmed", "exhaustion", "poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "Common",
        cr: 2,
        environment: ["underdark", "urban"],
        role: "skirmisher",
        tags: ["undead", "ghoul"],
        traits: [
            { name: "Stench", description: "Any creature that starts its turn within 5 feet of the ghast must succeed on a DC 10 Constitution saving throw or be poisoned until the start of its next turn. On a successful saving throw, the creature is immune to the ghast's Stench for 24 hours." },
            { name: "Turning Defiance", description: "The ghast and any ghouls within 30 feet of it have advantage on saving throws against effects that turn undead." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 12 (2d8+3) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6+3) slashing damage. If the target is a creature other than an undead, it must succeed on a DC 10 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." }
        ]
    },
    "ghoul": {
        name: "Ghoul",
        source: "MM",
        size: "medium",
        type: "undead",
        alignment: "chaotic evil",
        ac: 12,
        hp: 22,
        hitDice: "5d8",
        speed: { walk: 30 },
        abilityScores: { str: 13, dex: 15, con: 10, int: 7, wis: 10, cha: 6 },
        damageImmunities: ["poison"],
        conditionImmunities: ["charmed", "exhaustion", "poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "Common",
        cr: 1,
        environment: ["underdark", "urban"],
        role: "skirmisher",
        tags: ["undead"],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 9 (2d6+2) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4+2) slashing damage. If the target is a creature other than an elf or undead, it must succeed on a DC 10 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." }
        ]
    },
    "shadow": {
        name: "Shadow",
        source: "MM",
        size: "medium",
        type: "undead",
        alignment: "chaotic evil",
        ac: 12,
        hp: 16,
        hitDice: "3d8+3",
        speed: { walk: 40 },
        abilityScores: { str: 6, dex: 14, con: 13, int: 6, wis: 10, cha: 8 },
        skills: { stealth: 4 },
        damageVulnerabilities: ["radiant"],
        damageResistances: ["acid", "cold", "fire", "lightning", "thunder; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["necrotic", "poison"],
        conditionImmunities: ["exhaustion", "frightened", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained"],
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 0.5,
        environment: ["underdark", "urban"],
        role: "lurker",
        tags: ["undead", "incorporeal"],
        traits: [
            { name: "Amorphous", description: "The shadow can move through a space as narrow as 1 inch wide without squeezing." },
            { name: "Shadow Stealth", description: "While in dim light or darkness, the shadow can take the Hide action as a bonus action." },
            { name: "Sunlight Weakness", description: "While in sunlight, the shadow has disadvantage on attack rolls, ability checks, and saving throws." }
        ],
        actions: [
            { name: "Strength Drain", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 9 (2d6+2) necrotic damage, and the target's Strength score is reduced by 1d4. The target dies if this reduces its Strength to 0. Otherwise, the reduction lasts until the target finishes a short or long rest. If a non-evil humanoid dies from this attack, a new shadow rises from the corpse 1d4 hours later." }
        ]
    },
    "specter": {
        name: "Specter",
        source: "MM",
        size: "medium",
        type: "undead",
        alignment: "chaotic evil",
        ac: 12,
        hp: 22,
        hitDice: "5d8",
        speed: { walk: 0, fly: 50 },
        abilityScores: { str: 1, dex: 14, con: 11, int: 10, wis: 10, cha: 11 },
        damageResistances: ["acid", "cold", "fire", "lightning", "thunder; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["necrotic", "poison"],
        conditionImmunities: ["charmed", "exhaustion", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained", "unconscious"],
        senses: ["darkvision 60 ft."],
        languages: "understands all languages it knew in life but can't speak",
        cr: 1,
        environment: ["underdark", "urban"],
        role: "skirmisher",
        tags: ["undead", "incorporeal"],
        traits: [
            { name: "Incorporeal Movement", description: "The specter can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object." },
            { name: "Sunlight Sensitivity", description: "While in sunlight, the specter has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Life Drain", description: "Melee Spell Attack: +4 to hit, reach 5 ft., one creature. Hit: 10 (3d6) necrotic damage. The target must succeed on a DC 10 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the creature finishes a long rest. The target dies if this effect reduces its hit point maximum to 0." }
        ]
    },
    "poltergeist": {
        name: "Poltergeist",
        source: "MM",
        size: "medium",
        type: "undead",
        alignment: "chaotic evil",
        ac: 12,
        hp: 22,
        hitDice: "5d8",
        speed: { walk: 0, fly: 50 },
        abilityScores: { str: 1, dex: 14, con: 11, int: 10, wis: 10, cha: 11 },
        damageResistances: ["acid", "cold", "fire", "lightning", "thunder; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["necrotic", "poison"],
        conditionImmunities: ["charmed", "exhaustion", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained", "unconscious"],
        senses: ["darkvision 60 ft."],
        languages: "understands all languages it knew in life but can't speak",
        cr: 2,
        environment: ["urban"],
        role: "controller",
        tags: ["undead", "incorporeal"],
        traits: [
            { name: "Incorporeal Movement", description: "The poltergeist can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object." },
            { name: "Invisibility", description: "The poltergeist is invisible." },
            { name: "Sunlight Sensitivity", description: "While in sunlight, the poltergeist has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Forceful Slam", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 10 (3d6) force damage." },
            { name: "Telekinetic Thrust", description: "The poltergeist targets a creature or unattended object within 30 feet of it. A creature must be Medium or smaller to be affected by this magic, and an object can weigh up to 150 pounds. If the target is a creature, the poltergeist makes a Charisma check contested by the target's Strength check. If the poltergeist wins the contest, the poltergeist hurls the target up to 30 feet in any direction, including upward. If the target then comes into contact with a hard surface or heavy object, the target takes 1d6 damage per 10 feet moved." }
        ]
    },

    // ===== Elementals =====
    "water-elemental": {
        name: "Water Elemental",
        source: "MM",
        size: "large",
        type: "elemental",
        alignment: "neutral",
        ac: 14,
        acType: "natural armor",
        hp: 114,
        hitDice: "12d10+48",
        speed: { walk: 30, swim: 90 },
        abilityScores: { str: 18, dex: 14, con: 18, int: 5, wis: 10, cha: 8 },
        damageResistances: ["acid; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["exhaustion", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained", "unconscious"],
        senses: ["darkvision 60 ft."],
        languages: "Aquan",
        cr: 5,
        environment: ["underwater", "coastal", "swamp"],
        role: "brute",
        tags: ["elemental", "water"],
        traits: [
            { name: "Water Form", description: "The elemental can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing." },
            { name: "Freeze", description: "If the elemental takes cold damage, it partially freezes; its speed is reduced by 20 feet until the end of its next turn." }
        ],
        actions: [
            { name: "Multiattack", description: "The elemental makes two slam attacks." },
            { name: "Slam", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8+4) bludgeoning damage." },
            { name: "Whelm (Recharge 4-6)", description: "Each creature in the elemental's space must make a DC 15 Strength saving throw. On a failure, a target takes 13 (2d8+4) bludgeoning damage. If it is Large or smaller, it is also grappled (escape DC 14). Until this grapple ends, the target is restrained and unable to breathe unless it can breathe water. If the saving throw is successful, the target is pushed out of the elemental's space." }
        ]
    },
    "air-elemental": {
        name: "Air Elemental",
        source: "MM",
        size: "large",
        type: "elemental",
        alignment: "neutral",
        ac: 15,
        hp: 90,
        hitDice: "12d10+24",
        speed: { walk: 0, fly: 90 },
        abilityScores: { str: 14, dex: 20, con: 14, int: 6, wis: 10, cha: 6 },
        damageResistances: ["lightning", "thunder; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["exhaustion", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained", "unconscious"],
        senses: ["darkvision 60 ft."],
        languages: "Auran",
        cr: 5,
        environment: ["mountain", "desert"],
        role: "skirmisher",
        tags: ["elemental", "air"],
        traits: [
            { name: "Air Form", description: "The elemental can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing." }
        ],
        actions: [
            { name: "Multiattack", description: "The elemental makes two slam attacks." },
            { name: "Slam", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 14 (2d8+5) bludgeoning damage." },
            { name: "Whirlwind (Recharge 4-6)", description: "Each creature in the elemental's space must make a DC 13 Strength saving throw. On a failure, a target takes 15 (3d8+2) bludgeoning damage and is flung up to 20 feet away from the elemental in a random direction and knocked prone." }
        ]
    },
    "fire-elemental": {
        name: "Fire Elemental",
        source: "MM",
        size: "large",
        type: "elemental",
        alignment: "neutral",
        ac: 13,
        hp: 102,
        hitDice: "12d10+36",
        speed: { walk: 50 },
        abilityScores: { str: 10, dex: 17, con: 16, int: 6, wis: 10, cha: 7 },
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["exhaustion", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained", "unconscious"],
        senses: ["darkvision 60 ft."],
        languages: "Ignan",
        cr: 5,
        environment: ["desert", "mountain"],
        role: "skirmisher",
        tags: ["elemental", "fire"],
        traits: [
            { name: "Fire Form", description: "The elemental can move through a space as narrow as 1 inch wide without squeezing. A creature that touches the elemental or hits it with a melee attack while within 5 feet of it takes 5 (1d10) fire damage. In addition, the elemental can enter a hostile creature's space and stop there. The first time it enters a creature's space on a turn, that creature takes 5 (1d10) fire damage and catches fire; until someone takes an action to douse the fire, the creature takes 5 (1d10) fire damage at the start of each of its turns." },
            { name: "Illumination", description: "The elemental sheds bright light in a 30-foot radius and dim light in an additional 30 feet." },
            { name: "Water Susceptibility", description: "For every 5 feet the elemental moves in water, or for every gallon of water splashed on it, it takes 1 cold damage." }
        ],
        actions: [
            { name: "Multiattack", description: "The elemental makes two touch attacks." },
            { name: "Touch", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6+3) fire damage. If the target is a creature or a flammable object, it ignites. Until a creature takes an action to douse the fire, the target takes 5 (1d10) fire damage at the start of each of its turns." }
        ]
    },
    "earth-elemental": {
        name: "Earth Elemental",
        source: "MM",
        size: "large",
        type: "elemental",
        alignment: "neutral",
        ac: 17,
        acType: "natural armor",
        hp: 126,
        hitDice: "12d10+60",
        speed: { walk: 30, burrow: 30 },
        abilityScores: { str: 20, dex: 8, con: 20, int: 5, wis: 10, cha: 5 },
        damageVulnerabilities: ["thunder"],
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["exhaustion", "paralyzed", "petrified", "poisoned", "unconscious"],
        senses: ["darkvision 60 ft.", "tremorsense 60 ft."],
        languages: "Terran",
        cr: 5,
        environment: ["mountain", "underdark"],
        role: "brute",
        tags: ["elemental", "earth"],
        traits: [
            { name: "Earth Glide", description: "The elemental can burrow through nonmagical, unworked earth and stone. While doing so, the elemental doesn't disturb the material it moves through." },
            { name: "Siege Monster", description: "The elemental deals double damage to objects and structures." }
        ],
        actions: [
            { name: "Multiattack", description: "The elemental makes two slam attacks." },
            { name: "Slam", description: "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 14 (2d8+5) bludgeoning damage." }
        ]
    }
};
