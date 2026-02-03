// Expansion Pack 43 - More Creatures
// Additional monsters

const MONSTERS_EXPANSION43 = {
    // ===== More Plants =====
    "shambling-mound": {
        name: "Shambling Mound",
        source: "MM",
        size: "large",
        type: "plant",
        alignment: "unaligned",
        ac: 15,
        acType: "natural armor",
        hp: 136,
        hitDice: "16d10+48",
        speed: { walk: 20, swim: 20 },
        abilityScores: { str: 18, dex: 8, con: 16, int: 5, wis: 10, cha: 5 },
        skills: { stealth: 2 },
        damageResistances: ["cold", "fire"],
        damageImmunities: ["lightning"],
        conditionImmunities: ["blinded", "deafened", "exhaustion"],
        senses: ["blindsight 60 ft. (blind beyond this radius)"],
        languages: "—",
        cr: 5,
        environment: ["forest", "swamp"],
        role: "brute",
        tags: ["plant"],
        traits: [
            { name: "Lightning Absorption", description: "Whenever the shambling mound is subjected to lightning damage, it takes no damage and regains a number of hit points equal to the lightning damage dealt." }
        ],
        actions: [
            { name: "Multiattack", description: "The shambling mound makes two slam attacks. If both attacks hit a Medium or smaller target, the target is grappled (escape DC 14), and the shambling mound uses its Engulf on it." },
            { name: "Slam", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8+4) bludgeoning damage." },
            { name: "Engulf", description: "The shambling mound engulfs a Medium or smaller creature grappled by it. The engulfed target is blinded, restrained, and unable to breathe, and it must succeed on a DC 14 Constitution saving throw at the start of each of the mound's turns or take 13 (2d8+4) bludgeoning damage. If the mound moves, the engulfed target moves with it. The mound can have only one creature engulfed at a time." }
        ]
    },
    "treant": {
        name: "Treant",
        source: "MM",
        size: "huge",
        type: "plant",
        alignment: "chaotic good",
        ac: 16,
        acType: "natural armor",
        hp: 138,
        hitDice: "12d12+60",
        speed: { walk: 30 },
        abilityScores: { str: 23, dex: 8, con: 21, int: 12, wis: 16, cha: 12 },
        damageResistances: ["bludgeoning", "piercing"],
        damageVulnerabilities: ["fire"],
        senses: [],
        languages: "Common, Druidic, Elvish, Sylvan",
        cr: 9,
        environment: ["forest"],
        role: "brute",
        tags: ["plant"],
        traits: [
            { name: "False Appearance", description: "While the treant remains motionless, it is indistinguishable from a normal tree." },
            { name: "Siege Monster", description: "The treant deals double damage to objects and structures." }
        ],
        actions: [
            { name: "Multiattack", description: "The treant makes two slam attacks." },
            { name: "Slam", description: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 16 (3d6+6) bludgeoning damage." },
            { name: "Rock", description: "Ranged Weapon Attack: +10 to hit, range 60/180 ft., one target. Hit: 28 (4d10+6) bludgeoning damage." },
            { name: "Animate Trees (1/Day)", description: "The treant magically animates one or two trees it can see within 60 feet of it. These trees have the same statistics as a treant, except they have Intelligence and Charisma scores of 1, they can't speak, and they have only the Slam action option. An animated tree acts as an ally of the treant. The tree remains animate for 1 day or until it dies; until the treant dies or is more than 120 feet from the tree; or until the treant takes a bonus action to turn it back into an inanimate tree. The tree then takes root if possible." }
        ]
    },
    "awakened-tree": {
        name: "Awakened Tree",
        source: "MM",
        size: "huge",
        type: "plant",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 59,
        hitDice: "7d12+14",
        speed: { walk: 20 },
        abilityScores: { str: 19, dex: 6, con: 15, int: 10, wis: 10, cha: 7 },
        damageResistances: ["bludgeoning", "piercing"],
        damageVulnerabilities: ["fire"],
        senses: [],
        languages: "one language known by its creator",
        cr: 2,
        environment: ["forest"],
        role: "brute",
        tags: ["plant"],
        traits: [
            { name: "False Appearance", description: "While the tree remains motionless, it is indistinguishable from a normal tree." }
        ],
        actions: [
            { name: "Slam", description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 14 (3d6+4) bludgeoning damage." }
        ]
    },
    "awakened-shrub": {
        name: "Awakened Shrub",
        source: "MM",
        size: "small",
        type: "plant",
        alignment: "unaligned",
        ac: 9,
        hp: 10,
        hitDice: "3d6",
        speed: { walk: 20 },
        abilityScores: { str: 3, dex: 8, con: 11, int: 10, wis: 10, cha: 6 },
        damageResistances: ["piercing"],
        damageVulnerabilities: ["fire"],
        senses: [],
        languages: "one language known by its creator",
        cr: 0,
        environment: ["forest"],
        role: "minion",
        tags: ["plant"],
        traits: [
            { name: "False Appearance", description: "While the shrub remains motionless, it is indistinguishable from a normal shrub." }
        ],
        actions: [
            { name: "Rake", description: "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 1 (1d4-1) slashing damage." }
        ]
    },
    "vine-blight": {
        name: "Vine Blight",
        source: "MM",
        size: "medium",
        type: "plant",
        alignment: "neutral evil",
        ac: 12,
        acType: "natural armor",
        hp: 26,
        hitDice: "4d8+8",
        speed: { walk: 10 },
        abilityScores: { str: 15, dex: 8, con: 14, int: 5, wis: 10, cha: 3 },
        skills: { stealth: 1 },
        conditionImmunities: ["blinded", "deafened"],
        senses: ["blindsight 60 ft. (blind beyond this radius)"],
        languages: "Common",
        cr: "1/2",
        environment: ["forest"],
        role: "controller",
        tags: ["plant", "blight"],
        traits: [
            { name: "False Appearance", description: "While the blight remains motionless, it is indistinguishable from a tangle of vines." }
        ],
        actions: [
            { name: "Constrict", description: "Melee Weapon Attack: +4 to hit, reach 10 ft., one target. Hit: 9 (2d6+2) bludgeoning damage, and a Large or smaller target is grappled (escape DC 12). Until this grapple ends, the target is restrained, and the blight can't constrict another target." },
            { name: "Entangling Plants (Recharge 5-6)", description: "Grasping roots and vines sprout in a 15-foot radius centered on the blight, withering away after 1 minute. For the duration, that area is difficult terrain for nonplant creatures. In addition, each creature of the blight's choice in that area when the plants appear must succeed on a DC 12 Strength saving throw or become restrained. A creature can use its action to make a DC 12 Strength check, freeing itself or another entangled creature within reach on a success." }
        ]
    },
    "needle-blight": {
        name: "Needle Blight",
        source: "MM",
        size: "medium",
        type: "plant",
        alignment: "neutral evil",
        ac: 12,
        acType: "natural armor",
        hp: 11,
        hitDice: "2d8+2",
        speed: { walk: 30 },
        abilityScores: { str: 12, dex: 12, con: 13, int: 4, wis: 8, cha: 3 },
        conditionImmunities: ["blinded", "deafened"],
        senses: ["blindsight 60 ft. (blind beyond this radius)"],
        languages: "understands Common but can't speak",
        cr: "1/4",
        environment: ["forest"],
        role: "artillery",
        tags: ["plant", "blight"],
        actions: [
            { name: "Claws", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4+1) piercing damage." },
            { name: "Needles", description: "Ranged Weapon Attack: +3 to hit, range 30/60 ft., one target. Hit: 8 (2d6+1) piercing damage." }
        ]
    },
    "twig-blight": {
        name: "Twig Blight",
        source: "MM",
        size: "small",
        type: "plant",
        alignment: "neutral evil",
        ac: 13,
        acType: "natural armor",
        hp: 4,
        hitDice: "1d6+1",
        speed: { walk: 20 },
        abilityScores: { str: 6, dex: 13, con: 12, int: 4, wis: 8, cha: 3 },
        skills: { stealth: 3 },
        damageVulnerabilities: ["fire"],
        conditionImmunities: ["blinded", "deafened"],
        senses: ["blindsight 60 ft. (blind beyond this radius)"],
        languages: "understands Common but can't speak",
        cr: "1/8",
        environment: ["forest"],
        role: "minion",
        tags: ["plant", "blight"],
        traits: [
            { name: "False Appearance", description: "While the blight remains motionless, it is indistinguishable from a dead shrub." }
        ],
        actions: [
            { name: "Claws", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4+1) piercing damage." }
        ]
    },

    // ===== More Undead =====
    "wraith": {
        name: "Wraith",
        source: "MM",
        size: "medium",
        type: "undead",
        alignment: "neutral evil",
        ac: 13,
        hp: 67,
        hitDice: "9d8+27",
        speed: { walk: 0, fly: 60 },
        abilityScores: { str: 6, dex: 16, con: 16, int: 12, wis: 14, cha: 15 },
        damageResistances: ["acid", "cold", "fire", "lightning", "thunder; bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        damageImmunities: ["necrotic", "poison"],
        conditionImmunities: ["charmed", "exhaustion", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained"],
        senses: ["darkvision 60 ft."],
        languages: "the languages it knew in life",
        cr: 5,
        environment: ["underdark", "urban"],
        role: "lurker",
        tags: ["undead", "incorporeal"],
        traits: [
            { name: "Incorporeal Movement", description: "The wraith can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object." },
            { name: "Sunlight Sensitivity", description: "While in sunlight, the wraith has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Life Drain", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 21 (4d8+3) necrotic damage. The target must succeed on a DC 14 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0." },
            { name: "Create Specter", description: "The wraith targets a humanoid within 10 feet of it that has been dead for no longer than 1 minute and died violently. The target's spirit rises as a specter in the space of its corpse or in the nearest unoccupied space. The specter is under the wraith's control. The wraith can have no more than seven specters under its control at one time." }
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
        role: "lurker",
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
            { name: "Invisibility", description: "The poltergeist is invisible." }
        ],
        actions: [
            { name: "Forceful Slam", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 10 (3d6) force damage." },
            { name: "Telekinetic Thrust", description: "The poltergeist targets a creature or unattended object within 30 feet of it. A creature must be Medium or smaller to be affected by this magic, and an object can weigh up to 150 pounds. If the target is a creature, the poltergeist makes a Charisma check contested by the target's Strength check. If the poltergeist wins the contest, the poltergeist hurls the target up to 30 feet in any direction, including upward. If the target then comes into contact with a hard surface or heavy object, the target takes 1d6 damage per 10 feet moved. If the target is an object that isn't being worn or carried, the poltergeist hurls it up to 30 feet in any direction. The poltergeist can use the object as a ranged weapon, attacking one creature along the object's path (+4 to hit) and dealing 5 (2d4) bludgeoning damage on a hit." }
        ]
    }
};
