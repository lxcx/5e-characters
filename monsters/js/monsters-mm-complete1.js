// Monster Manual Complete - Part 1 (A-F remaining)
// Source: MM (Monster Manual)

const MONSTERS_MM_COMPLETE1 = {
    // ===== A =====
    "aarakocra": {
        name: "Aarakocra",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "aarakocra",
        alignment: "neutral good",
        ac: 12,
        hp: 13,
        hitDice: "3d8",
        speed: { walk: 20, fly: 50 },
        abilityScores: { str: 10, dex: 14, con: 10, int: 11, wis: 12, cha: 11 },
        skills: { perception: 5 },
        senses: [],
        languages: "Auran, Aarakocra",
        cr: 0.25,
        traits: [
            { name: "Dive Attack", description: "If the aarakocra is flying and dives at least 30 feet straight toward a target and then hits it with a melee weapon attack, the attack deals an extra 3 (1d6) damage to the target." }
        ],
        actions: [
            { name: "Talon", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4+2) slashing damage." },
            { name: "Javelin", description: "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 5 (1d6+2) piercing damage." },
            { name: "Summon Air Elemental", description: "Five aarakocra within 30 feet of each other can magically summon an air elemental. Each of the five must use its action and movement on three consecutive turns to perform an aerial dance and must maintain concentration while doing so (as if concentrating on a spell)." }
        ]
    },
    "ankheg": {
        name: "Ankheg",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 14,
        acType: "natural armor, 11 while prone",
        hp: 39,
        hitDice: "6d10+6",
        speed: { walk: 30, burrow: 10 },
        abilityScores: { str: 17, dex: 11, con: 13, int: 1, wis: 13, cha: 6 },
        senses: ["darkvision 60 ft.", "tremorsense 60 ft."],
        languages: "—",
        cr: 2,
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6+3) slashing damage plus 3 (1d6) acid damage. If the target is a Large or smaller creature, it is grappled (escape DC 13). Until this grapple ends, the ankheg can bite only the grappled creature and has advantage on attack rolls to do so." },
            { name: "Acid Spray (Recharge 6)", description: "The ankheg spits acid in a line that is 30 feet long and 5 feet wide, provided that it has no creature grappled. Each creature in that line must make a DC 13 Dexterity saving throw, taking 10 (3d6) acid damage on a failed save, or half as much damage on a successful one." }
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
        damageVulnerabilities: ["fire"],
        damageResistances: ["piercing"],
        senses: [],
        languages: "one language known by its creator",
        cr: 0,
        traits: [
            { name: "False Appearance", description: "While the shrub remains motionless, it is indistinguishable from a normal shrub." }
        ],
        actions: [
            { name: "Rake", description: "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 1 (1d4−1) slashing damage." }
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
        damageVulnerabilities: ["fire"],
        damageResistances: ["bludgeoning", "piercing"],
        senses: [],
        languages: "one language known by its creator",
        cr: 2,
        traits: [
            { name: "False Appearance", description: "While the tree remains motionless, it is indistinguishable from a normal tree." }
        ],
        actions: [
            { name: "Slam", description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 14 (3d6+4) bludgeoning damage." }
        ]
    },
    "axe-beak": {
        name: "Axe Beak",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 11,
        hp: 19,
        hitDice: "3d10+3",
        speed: { walk: 50 },
        abilityScores: { str: 14, dex: 12, con: 12, int: 2, wis: 10, cha: 5 },
        senses: [],
        languages: "—",
        cr: 0.25,
        actions: [
            { name: "Beak", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8+2) slashing damage." }
        ]
    },

    // ===== B =====
    "basilisk": {
        name: "Basilisk",
        source: "MM",
        size: "medium",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 15,
        acType: "natural armor",
        hp: 52,
        hitDice: "8d8+16",
        speed: { walk: 20 },
        abilityScores: { str: 16, dex: 8, con: 15, int: 2, wis: 8, cha: 7 },
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 3,
        traits: [
            { name: "Petrifying Gaze", description: "If a creature starts its turn within 30 feet of the basilisk and the two of them can see each other, the basilisk can force the creature to make a DC 12 Constitution saving throw if the basilisk isn't incapacitated. On a failed save, the creature magically begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified until freed by the greater restoration spell or other magic." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6+3) piercing damage plus 7 (2d6) poison damage." }
        ]
    },
    "bat": {
        name: "Bat",
        source: "MM",
        size: "tiny",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        hp: 1,
        hitDice: "1d4-1",
        speed: { walk: 5, fly: 30 },
        abilityScores: { str: 2, dex: 15, con: 8, int: 2, wis: 12, cha: 4 },
        senses: ["blindsight 60 ft."],
        languages: "—",
        cr: 0,
        traits: [
            { name: "Echolocation", description: "The bat can't use its blindsight while deafened." },
            { name: "Keen Hearing", description: "The bat has advantage on Wisdom (Perception) checks that rely on hearing." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +0 to hit, reach 5 ft., one creature. Hit: 1 piercing damage." }
        ]
    },
    "blink-dog": {
        name: "Blink Dog",
        source: "MM",
        size: "medium",
        type: "fey",
        alignment: "lawful good",
        ac: 13,
        hp: 22,
        hitDice: "4d8+4",
        speed: { walk: 40 },
        abilityScores: { str: 12, dex: 17, con: 12, int: 10, wis: 13, cha: 11 },
        skills: { perception: 3, stealth: 5 },
        senses: [],
        languages: "Blink Dog, understands Sylvan but can't speak it",
        cr: 0.25,
        traits: [
            { name: "Keen Hearing and Smell", description: "The dog has advantage on Wisdom (Perception) checks that rely on hearing or smell." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6+1) piercing damage." },
            { name: "Teleport (Recharge 4-6)", description: "The dog magically teleports, along with any equipment it is wearing or carrying, up to 40 feet to an unoccupied space it can see. Before or after teleporting, the dog can make one bite attack." }
        ]
    },
    "blood-hawk": {
        name: "Blood Hawk",
        source: "MM",
        size: "small",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        hp: 7,
        hitDice: "2d6",
        speed: { walk: 10, fly: 60 },
        abilityScores: { str: 6, dex: 14, con: 10, int: 3, wis: 14, cha: 5 },
        skills: { perception: 4 },
        senses: [],
        languages: "—",
        cr: 0.125,
        traits: [
            { name: "Keen Sight", description: "The hawk has advantage on Wisdom (Perception) checks that rely on sight." },
            { name: "Pack Tactics", description: "The hawk has advantage on an attack roll against a creature if at least one of the hawk's allies is within 5 feet of the creature and the ally isn't incapacitated." }
        ],
        actions: [
            { name: "Beak", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4+2) piercing damage." }
        ]
    },
    "boar": {
        name: "Boar",
        source: "MM",
        size: "medium",
        type: "beast",
        alignment: "unaligned",
        ac: 11,
        acType: "natural armor",
        hp: 11,
        hitDice: "2d8+2",
        speed: { walk: 40 },
        abilityScores: { str: 13, dex: 11, con: 12, int: 2, wis: 9, cha: 5 },
        senses: [],
        languages: "—",
        cr: 0.25,
        traits: [
            { name: "Charge", description: "If the boar moves at least 20 feet straight toward a target and then hits it with a tusk attack on the same turn, the target takes an extra 3 (1d6) slashing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone." },
            { name: "Relentless (Recharges after a Short or Long Rest)", description: "If the boar takes 7 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead." }
        ],
        actions: [
            { name: "Tusk", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6+1) slashing damage." }
        ]
    },
    "bulette": {
        name: "Bulette",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 17,
        acType: "natural armor",
        hp: 94,
        hitDice: "9d10+45",
        speed: { walk: 40, burrow: 40 },
        abilityScores: { str: 19, dex: 11, con: 21, int: 2, wis: 10, cha: 5 },
        skills: { perception: 6 },
        senses: ["darkvision 60 ft.", "tremorsense 60 ft."],
        languages: "—",
        cr: 5,
        traits: [
            { name: "Standing Leap", description: "The bulette's long jump is up to 30 feet and its high jump is up to 15 feet, with or without a running start." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 30 (4d12+4) piercing damage." },
            { name: "Deadly Leap", description: "If the bulette jumps at least 15 feet as part of its movement, it can then use this action to land on its feet in a space that contains one or more other creatures. Each of those creatures must succeed on a DC 16 Strength or Dexterity saving throw (target's choice) or be knocked prone and take 14 (3d6+4) bludgeoning damage plus 14 (3d6+4) slashing damage. On a successful save, the creature takes only half the damage, isn't knocked prone, and is pushed 5 feet out of the bulette's space into an unoccupied space of the creature's choice. If no unoccupied space is within range, the creature instead falls prone in the bulette's space." }
        ]
    },

    // ===== C =====
    "camel": {
        name: "Camel",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 9,
        hp: 15,
        hitDice: "2d10+4",
        speed: { walk: 50 },
        abilityScores: { str: 16, dex: 8, con: 14, int: 2, wis: 8, cha: 5 },
        senses: [],
        languages: "—",
        cr: 0.125,
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage." }
        ]
    },
    "carrion-crawler": {
        name: "Carrion Crawler",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 51,
        hitDice: "6d10+18",
        speed: { walk: 30, climb: 30 },
        abilityScores: { str: 14, dex: 13, con: 16, int: 1, wis: 12, cha: 5 },
        skills: { perception: 3 },
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 2,
        traits: [
            { name: "Keen Smell", description: "The carrion crawler has advantage on Wisdom (Perception) checks that rely on smell." },
            { name: "Spider Climb", description: "The carrion crawler can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." }
        ],
        actions: [
            { name: "Multiattack", description: "The carrion crawler makes two attacks: one with its tentacles and one with its bite." },
            { name: "Tentacles", description: "Melee Weapon Attack: +8 to hit, reach 10 ft., one creature. Hit: 4 (1d4+2) poison damage, and the target must succeed on a DC 13 Constitution saving throw or be poisoned for 1 minute. Until this poison ends, the target is paralyzed. The target can repeat the saving throw at the end of each of its turns, ending the poison on itself on a success." },
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4+2) piercing damage." }
        ]
    },
    "cat": {
        name: "Cat",
        source: "MM",
        size: "tiny",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        hp: 2,
        hitDice: "1d4",
        speed: { walk: 40, climb: 30 },
        abilityScores: { str: 3, dex: 15, con: 10, int: 3, wis: 12, cha: 7 },
        skills: { perception: 3, stealth: 4 },
        senses: [],
        languages: "—",
        cr: 0,
        traits: [
            { name: "Keen Smell", description: "The cat has advantage on Wisdom (Perception) checks that rely on smell." }
        ],
        actions: [
            { name: "Claws", description: "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 slashing damage." }
        ]
    },
    "centaur": {
        name: "Centaur",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "neutral good",
        ac: 12,
        hp: 45,
        hitDice: "6d10+12",
        speed: { walk: 50 },
        abilityScores: { str: 18, dex: 14, con: 14, int: 9, wis: 13, cha: 11 },
        skills: { athletics: 6, perception: 3, survival: 3 },
        senses: [],
        languages: "Elvish, Sylvan",
        cr: 2,
        traits: [
            { name: "Charge", description: "If the centaur moves at least 30 feet straight toward a target and then hits it with a pike attack on the same turn, the target takes an extra 10 (3d6) piercing damage." }
        ],
        actions: [
            { name: "Multiattack", description: "The centaur makes two attacks: one with its pike and one with its hooves or two with its longbow." },
            { name: "Pike", description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 9 (1d10+4) piercing damage." },
            { name: "Hooves", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6+4) bludgeoning damage." },
            { name: "Longbow", description: "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit: 6 (1d8+2) piercing damage." }
        ]
    },
    "chimera": {
        name: "Chimera",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "chaotic evil",
        ac: 14,
        acType: "natural armor",
        hp: 114,
        hitDice: "12d10+48",
        speed: { walk: 30, fly: 60 },
        abilityScores: { str: 19, dex: 11, con: 19, int: 3, wis: 14, cha: 10 },
        skills: { perception: 8 },
        senses: ["darkvision 60 ft."],
        languages: "understands Draconic but can't speak",
        cr: 6,
        actions: [
            { name: "Multiattack", description: "The chimera makes three attacks: one with its bite, one with its horns, and one with its claws. When its fire breath is available, it can use the breath in place of its bite or horns." },
            { name: "Bite", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6+4) piercing damage." },
            { name: "Horns", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 10 (1d12+4) bludgeoning damage." },
            { name: "Claws", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6+4) slashing damage." },
            { name: "Fire Breath (Recharge 5-6)", description: "The dragon head exhales fire in a 15-foot cone. Each creature in that area must make a DC 15 Dexterity saving throw, taking 31 (7d8) fire damage on a failed save, or half as much damage on a successful one." }
        ]
    },
    "cockatrice": {
        name: "Cockatrice",
        source: "MM",
        size: "small",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 11,
        hp: 27,
        hitDice: "6d6+6",
        speed: { walk: 20, fly: 40 },
        abilityScores: { str: 6, dex: 12, con: 12, int: 2, wis: 13, cha: 5 },
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 0.5,
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 3 (1d4+1) piercing damage, and the target must succeed on a DC 11 Constitution saving throw against being magically petrified. On a failed save, the creature begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified for 24 hours." }
        ]
    },
    "constrictor-snake": {
        name: "Constrictor Snake",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        hp: 13,
        hitDice: "2d10+2",
        speed: { walk: 30, swim: 30 },
        abilityScores: { str: 15, dex: 14, con: 12, int: 1, wis: 10, cha: 3 },
        senses: ["blindsight 10 ft."],
        languages: "—",
        cr: 0.25,
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6+2) piercing damage." },
            { name: "Constrict", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 6 (1d8+2) bludgeoning damage, and the target is grappled (escape DC 14). Until this grapple ends, the creature is restrained, and the snake can't constrict another target." }
        ]
    },
    "crab": {
        name: "Crab",
        source: "MM",
        size: "tiny",
        type: "beast",
        alignment: "unaligned",
        ac: 11,
        acType: "natural armor",
        hp: 2,
        hitDice: "1d4",
        speed: { walk: 20, swim: 20 },
        abilityScores: { str: 2, dex: 11, con: 10, int: 1, wis: 8, cha: 2 },
        skills: { stealth: 2 },
        senses: ["blindsight 30 ft."],
        languages: "—",
        cr: 0,
        traits: [
            { name: "Amphibious", description: "The crab can breathe air and water." }
        ],
        actions: [
            { name: "Claw", description: "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 bludgeoning damage." }
        ]
    },
    "crocodile": {
        name: "Crocodile",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        acType: "natural armor",
        hp: 19,
        hitDice: "3d10+3",
        speed: { walk: 20, swim: 30 },
        abilityScores: { str: 15, dex: 10, con: 13, int: 2, wis: 10, cha: 5 },
        skills: { stealth: 2 },
        senses: [],
        languages: "—",
        cr: 0.5,
        traits: [
            { name: "Hold Breath", description: "The crocodile can hold its breath for 15 minutes." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (1d10+2) piercing damage, and the target is grappled (escape DC 12). Until this grapple ends, the target is restrained, and the crocodile can't bite another target." }
        ]
    },

    // ===== D =====
    "death-dog": {
        name: "Death Dog",
        source: "MM",
        size: "medium",
        type: "monstrosity",
        alignment: "neutral evil",
        ac: 12,
        hp: 39,
        hitDice: "6d8+12",
        speed: { walk: 40 },
        abilityScores: { str: 15, dex: 14, con: 14, int: 3, wis: 13, cha: 6 },
        skills: { perception: 5, stealth: 4 },
        senses: ["darkvision 120 ft."],
        languages: "—",
        cr: 1,
        traits: [
            { name: "Two-Headed", description: "The dog has advantage on Wisdom (Perception) checks and on saving throws against being blinded, charmed, deafened, frightened, stunned, or knocked unconscious." }
        ],
        actions: [
            { name: "Multiattack", description: "The dog makes two bite attacks." },
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6+2) piercing damage. If the target is a creature, it must succeed on a DC 12 Constitution saving throw against disease or become poisoned until the disease is cured. Every 24 hours that elapse, the creature must repeat the saving throw, reducing its hit point maximum by 5 (1d10) on a failure. This reduction lasts until the disease is cured. The creature dies if the disease reduces its hit point maximum to 0." }
        ]
    },
    "deer": {
        name: "Deer",
        source: "MM",
        size: "medium",
        type: "beast",
        alignment: "unaligned",
        ac: 13,
        hp: 4,
        hitDice: "1d8",
        speed: { walk: 50 },
        abilityScores: { str: 11, dex: 16, con: 11, int: 2, wis: 14, cha: 5 },
        senses: [],
        languages: "—",
        cr: 0,
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) piercing damage." }
        ]
    },
    "doppelganger": {
        name: "Doppelganger",
        source: "MM",
        size: "medium",
        type: "monstrosity",
        subtype: "shapechanger",
        alignment: "neutral",
        ac: 14,
        hp: 52,
        hitDice: "8d8+16",
        speed: { walk: 30 },
        abilityScores: { str: 11, dex: 18, con: 14, int: 11, wis: 12, cha: 14 },
        skills: { deception: 6, insight: 3 },
        conditionImmunities: ["charmed"],
        senses: ["darkvision 60 ft."],
        languages: "Common",
        cr: 3,
        traits: [
            { name: "Shapechanger", description: "The doppelganger can use its action to polymorph into a Small or Medium humanoid it has seen, or back into its true form. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies." },
            { name: "Ambusher", description: "The doppelganger has advantage on attack rolls against any creature it has surprised." },
            { name: "Surprise Attack", description: "If the doppelganger surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 10 (3d6) damage from the attack." }
        ],
        actions: [
            { name: "Multiattack", description: "The doppelganger makes two melee attacks." },
            { name: "Slam", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6+4) bludgeoning damage." },
            { name: "Read Thoughts", description: "The doppelganger magically reads the surface thoughts of one creature within 60 feet of it. The effect can penetrate barriers, but 3 feet of wood or dirt, 2 feet of stone, 2 inches of metal, or a thin sheet of lead blocks it. While the target is in range, the doppelganger can continue reading its thoughts, as long as the doppelganger's concentration isn't broken (as if concentrating on a spell). While reading the target's mind, the doppelganger has advantage on Wisdom (Insight) and Charisma (Deception, Intimidation, and Persuasion) checks against the target." }
        ]
    },
    "draft-horse": {
        name: "Draft Horse",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 10,
        hp: 19,
        hitDice: "3d10+3",
        speed: { walk: 40 },
        abilityScores: { str: 18, dex: 10, con: 12, int: 2, wis: 11, cha: 7 },
        senses: [],
        languages: "—",
        cr: 0.25,
        actions: [
            { name: "Hooves", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (2d4+4) bludgeoning damage." }
        ]
    },

    // ===== E =====
    "eagle": {
        name: "Eagle",
        source: "MM",
        size: "small",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        hp: 3,
        hitDice: "1d6",
        speed: { walk: 10, fly: 60 },
        abilityScores: { str: 6, dex: 15, con: 10, int: 2, wis: 14, cha: 7 },
        skills: { perception: 4 },
        senses: [],
        languages: "—",
        cr: 0,
        traits: [
            { name: "Keen Sight", description: "The eagle has advantage on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Talons", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4+2) slashing damage." }
        ]
    },
    "elk": {
        name: "Elk",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 10,
        hp: 13,
        hitDice: "2d10+2",
        speed: { walk: 50 },
        abilityScores: { str: 16, dex: 10, con: 12, int: 2, wis: 10, cha: 6 },
        senses: [],
        languages: "—",
        cr: 0.25,
        traits: [
            { name: "Charge", description: "If the elk moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone." }
        ],
        actions: [
            { name: "Ram", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6+3) bludgeoning damage." },
            { name: "Hooves", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one prone creature. Hit: 8 (2d4+3) bludgeoning damage." }
        ]
    },
    "ettercap": {
        name: "Ettercap",
        source: "MM",
        size: "medium",
        type: "monstrosity",
        alignment: "neutral evil",
        ac: 13,
        acType: "natural armor",
        hp: 44,
        hitDice: "8d8+8",
        speed: { walk: 30, climb: 30 },
        abilityScores: { str: 14, dex: 15, con: 13, int: 7, wis: 12, cha: 8 },
        skills: { perception: 3, stealth: 4, survival: 3 },
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 2,
        traits: [
            { name: "Spider Climb", description: "The ettercap can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." },
            { name: "Web Sense", description: "While in contact with a web, the ettercap knows the exact location of any other creature in contact with the same web." },
            { name: "Web Walker", description: "The ettercap ignores movement restrictions caused by webbing." }
        ],
        actions: [
            { name: "Multiattack", description: "The ettercap makes two attacks: one with its bite and one with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 6 (1d8+2) piercing damage plus 4 (1d8) poison damage. The target must succeed on a DC 11 Constitution saving throw or be poisoned for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." },
            { name: "Claws", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4+2) slashing damage." },
            { name: "Web (Recharge 5-6)", description: "Ranged Weapon Attack: +4 to hit, range 30/60 ft., one Large or smaller creature. Hit: The creature is restrained by webbing. As an action, the restrained creature can make a DC 11 Strength check, escaping from the webbing on a success. The effect also ends if the webbing is destroyed. The webbing has AC 10, 5 hit points, vulnerability to fire damage, and immunity to bludgeoning, poison, and psychic damage." }
        ]
    },

    // ===== F =====
    "flying-snake": {
        name: "Flying Snake",
        source: "MM",
        size: "tiny",
        type: "beast",
        alignment: "unaligned",
        ac: 14,
        hp: 5,
        hitDice: "2d4",
        speed: { walk: 30, fly: 60, swim: 30 },
        abilityScores: { str: 4, dex: 18, con: 11, int: 2, wis: 12, cha: 5 },
        senses: ["blindsight 10 ft."],
        languages: "—",
        cr: 0.125,
        traits: [
            { name: "Flyby", description: "The snake doesn't provoke opportunity attacks when it flies out of an enemy's reach." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 1 piercing damage plus 7 (3d4) poison damage." }
        ]
    },
    "frog": {
        name: "Frog",
        source: "MM",
        size: "tiny",
        type: "beast",
        alignment: "unaligned",
        ac: 11,
        hp: 1,
        hitDice: "1d4-1",
        speed: { walk: 20, swim: 20 },
        abilityScores: { str: 1, dex: 13, con: 8, int: 1, wis: 8, cha: 3 },
        skills: { perception: 1, stealth: 3 },
        senses: ["darkvision 30 ft."],
        languages: "—",
        cr: 0,
        traits: [
            { name: "Amphibious", description: "The frog can breathe air and water." },
            { name: "Standing Leap", description: "The frog's long jump is up to 10 feet and its high jump is up to 5 feet, with or without a running start." }
        ]
    }
};
