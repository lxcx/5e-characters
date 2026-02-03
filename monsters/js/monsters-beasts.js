// Beasts and Common Creatures
// Source: MM (Monster Manual)

const MONSTERS_BEASTS = {
    // ===== WOLVES & CANINES =====
    "wolf": {
        name: "Wolf",
        source: "MM",
        size: "medium",
        type: "beast",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 11,
        hitDice: "2d8+2",
        speed: { walk: 40 },
        abilityScores: { str: 12, dex: 15, con: 12, int: 3, wis: 12, cha: 6 },
        skills: { perception: 3, stealth: 4 },
        senses: [],
        languages: "—",
        cr: 0.25,
        traits: [
            { name: "Keen Hearing and Smell", description: "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell." },
            { name: "Pack Tactics", description: "The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 feet of the creature and the ally isn't incapacitated." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4+2) piercing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone." }
        ]
    },
    "dire-wolf": {
        name: "Dire Wolf",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 14,
        acType: "natural armor",
        hp: 37,
        hitDice: "5d10+10",
        speed: { walk: 50 },
        abilityScores: { str: 17, dex: 15, con: 15, int: 3, wis: 12, cha: 7 },
        skills: { perception: 3, stealth: 4 },
        senses: [],
        languages: "—",
        cr: 1,
        traits: [
            { name: "Keen Hearing and Smell", description: "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell." },
            { name: "Pack Tactics", description: "The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 feet of the creature and the ally isn't incapacitated." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6+3) piercing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone." }
        ]
    },
    "winter-wolf": {
        name: "Winter Wolf",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "neutral evil",
        ac: 13,
        acType: "natural armor",
        hp: 75,
        hitDice: "10d10+20",
        speed: { walk: 50 },
        abilityScores: { str: 18, dex: 13, con: 14, int: 7, wis: 12, cha: 8 },
        skills: { perception: 5, stealth: 3 },
        damageImmunities: ["cold"],
        senses: [],
        languages: "Common, Giant, Winter Wolf",
        cr: 3,
        traits: [
            { name: "Keen Hearing and Smell", description: "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell." },
            { name: "Pack Tactics", description: "The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 feet of the creature and the ally isn't incapacitated." },
            { name: "Snow Camouflage", description: "The wolf has advantage on Dexterity (Stealth) checks made to hide in snowy terrain." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6+4) piercing damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone." },
            { name: "Cold Breath (Recharge 5-6)", description: "The wolf exhales a blast of freezing wind in a 15-foot cone. Each creature in that area must make a DC 12 Dexterity saving throw, taking 18 (4d8) cold damage on a failed save, or half as much damage on a successful one." }
        ]
    },

    // ===== BEARS =====
    "black-bear": {
        name: "Black Bear",
        source: "MM",
        size: "medium",
        type: "beast",
        alignment: "unaligned",
        ac: 11,
        acType: "natural armor",
        hp: 19,
        hitDice: "3d8+6",
        speed: { walk: 40, climb: 30 },
        abilityScores: { str: 15, dex: 10, con: 14, int: 2, wis: 12, cha: 7 },
        skills: { perception: 3 },
        senses: [],
        languages: "—",
        cr: 0.5,
        traits: [
            { name: "Keen Smell", description: "The bear has advantage on Wisdom (Perception) checks that rely on smell." }
        ],
        actions: [
            { name: "Multiattack", description: "The bear makes two attacks: one with its bite and one with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6+2) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4+2) slashing damage." }
        ]
    },
    "brown-bear": {
        name: "Brown Bear",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 11,
        acType: "natural armor",
        hp: 34,
        hitDice: "4d10+12",
        speed: { walk: 40, climb: 30 },
        abilityScores: { str: 19, dex: 10, con: 16, int: 2, wis: 13, cha: 7 },
        skills: { perception: 3 },
        senses: [],
        languages: "—",
        cr: 1,
        traits: [
            { name: "Keen Smell", description: "The bear has advantage on Wisdom (Perception) checks that rely on smell." }
        ],
        actions: [
            { name: "Multiattack", description: "The bear makes two attacks: one with its bite and one with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8+4) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6+4) slashing damage." }
        ]
    },
    "polar-bear": {
        name: "Polar Bear",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        acType: "natural armor",
        hp: 42,
        hitDice: "5d10+15",
        speed: { walk: 40, swim: 30 },
        abilityScores: { str: 20, dex: 10, con: 16, int: 2, wis: 13, cha: 7 },
        skills: { perception: 3 },
        senses: [],
        languages: "—",
        cr: 2,
        traits: [
            { name: "Keen Smell", description: "The bear has advantage on Wisdom (Perception) checks that rely on smell." }
        ],
        actions: [
            { name: "Multiattack", description: "The bear makes two attacks: one with its bite and one with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (1d8+5) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 12 (2d6+5) slashing damage." }
        ]
    },
    "owlbear": {
        name: "Owlbear",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 59,
        hitDice: "7d10+21",
        speed: { walk: 40 },
        abilityScores: { str: 20, dex: 12, con: 17, int: 3, wis: 12, cha: 7 },
        skills: { perception: 3 },
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 3,
        traits: [
            { name: "Keen Sight and Smell", description: "The owlbear has advantage on Wisdom (Perception) checks that rely on sight or smell." }
        ],
        actions: [
            { name: "Multiattack", description: "The owlbear makes two attacks: one with its beak and one with its claws." },
            { name: "Beak", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 10 (1d10+5) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8+5) slashing damage." }
        ]
    },

    // ===== CATS =====
    "lion": {
        name: "Lion",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        hp: 26,
        hitDice: "4d10+4",
        speed: { walk: 50 },
        abilityScores: { str: 17, dex: 15, con: 13, int: 3, wis: 12, cha: 8 },
        skills: { perception: 3, stealth: 6 },
        senses: [],
        languages: "—",
        cr: 1,
        traits: [
            { name: "Keen Smell", description: "The lion has advantage on Wisdom (Perception) checks that rely on smell." },
            { name: "Pack Tactics", description: "The lion has advantage on an attack roll against a creature if at least one of the lion's allies is within 5 feet of the creature and the ally isn't incapacitated." },
            { name: "Pounce", description: "If the lion moves at least 20 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the lion can make one bite attack against it as a bonus action." },
            { name: "Running Leap", description: "With a 10-foot running start, the lion can long jump up to 25 feet." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8+3) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6+3) slashing damage." }
        ]
    },
    "tiger": {
        name: "Tiger",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        hp: 37,
        hitDice: "5d10+10",
        speed: { walk: 40 },
        abilityScores: { str: 17, dex: 15, con: 14, int: 3, wis: 12, cha: 8 },
        skills: { perception: 3, stealth: 6 },
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 1,
        traits: [
            { name: "Keen Smell", description: "The tiger has advantage on Wisdom (Perception) checks that rely on smell." },
            { name: "Pounce", description: "If the tiger moves at least 20 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the tiger can make one bite attack against it as a bonus action." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10+3) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8+3) slashing damage." }
        ]
    },
    "panther": {
        name: "Panther",
        source: "MM",
        size: "medium",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        hp: 13,
        hitDice: "3d8",
        speed: { walk: 50, climb: 40 },
        abilityScores: { str: 14, dex: 15, con: 10, int: 3, wis: 14, cha: 7 },
        skills: { perception: 4, stealth: 6 },
        senses: [],
        languages: "—",
        cr: 0.25,
        traits: [
            { name: "Keen Smell", description: "The panther has advantage on Wisdom (Perception) checks that rely on smell." },
            { name: "Pounce", description: "If the panther moves at least 20 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked prone. If the target is prone, the panther can make one bite attack against it as a bonus action." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6+2) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4+2) slashing damage." }
        ]
    },
    "saber-toothed-tiger": {
        name: "Saber-Toothed Tiger",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        hp: 52,
        hitDice: "7d10+14",
        speed: { walk: 40 },
        abilityScores: { str: 18, dex: 14, con: 15, int: 3, wis: 12, cha: 8 },
        skills: { perception: 3, stealth: 6 },
        senses: [],
        languages: "—",
        cr: 2,
        traits: [
            { name: "Keen Smell", description: "The tiger has advantage on Wisdom (Perception) checks that rely on smell." },
            { name: "Pounce", description: "If the tiger moves at least 20 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the tiger can make one bite attack against it as a bonus action." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (1d10+5) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 12 (2d6+5) slashing damage." }
        ]
    },
    "displacer-beast": {
        name: "Displacer Beast",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "lawful evil",
        ac: 13,
        acType: "natural armor",
        hp: 85,
        hitDice: "10d10+30",
        speed: { walk: 40 },
        abilityScores: { str: 18, dex: 15, con: 16, int: 6, wis: 12, cha: 8 },
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 3,
        traits: [
            { name: "Avoidance", description: "If the displacer beast is subjected to an effect that allows it to make a saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails." },
            { name: "Displacement", description: "The displacer beast projects a magical illusion that makes it appear to be standing near its actual location, causing attack rolls against it to have disadvantage. If it is hit by an attack, this trait is disrupted until the end of its next turn. This trait is also disrupted while the displacer beast is incapacitated or has a speed of 0." }
        ],
        actions: [
            { name: "Multiattack", description: "The displacer beast makes two attacks with its tentacles." },
            { name: "Tentacle", description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 7 (1d6+4) bludgeoning damage plus 3 (1d6) piercing damage." }
        ]
    },

    // ===== HORSES & MOUNTS =====
    "riding-horse": {
        name: "Riding Horse",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 10,
        hp: 13,
        hitDice: "2d10+2",
        speed: { walk: 60 },
        abilityScores: { str: 16, dex: 10, con: 12, int: 2, wis: 11, cha: 7 },
        senses: [],
        languages: "—",
        cr: 0.25,
        actions: [
            { name: "Hooves", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (2d4+3) bludgeoning damage." }
        ]
    },
    "warhorse": {
        name: "Warhorse",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 11,
        hp: 19,
        hitDice: "3d10+3",
        speed: { walk: 60 },
        abilityScores: { str: 18, dex: 12, con: 13, int: 2, wis: 12, cha: 7 },
        senses: [],
        languages: "—",
        cr: 0.5,
        traits: [
            { name: "Trampling Charge", description: "If the horse moves at least 20 feet straight toward a creature and then hits it with a hooves attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the horse can make another attack with its hooves against it as a bonus action." }
        ],
        actions: [
            { name: "Hooves", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6+4) bludgeoning damage." }
        ]
    },
    "nightmare": {
        name: "Nightmare",
        source: "MM",
        size: "large",
        type: "fiend",
        alignment: "neutral evil",
        ac: 13,
        acType: "natural armor",
        hp: 68,
        hitDice: "8d10+24",
        speed: { walk: 60, fly: 90 },
        abilityScores: { str: 18, dex: 15, con: 16, int: 10, wis: 13, cha: 15 },
        damageImmunities: ["fire"],
        senses: [],
        languages: "understands Abyssal, Common, and Infernal but can't speak",
        cr: 3,
        traits: [
            { name: "Confer Fire Resistance", description: "The nightmare can grant resistance to fire damage to anyone riding it." },
            { name: "Illumination", description: "The nightmare sheds bright light in a 10-foot radius and dim light for an additional 10 feet." }
        ],
        actions: [
            { name: "Hooves", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8+4) bludgeoning damage plus 7 (2d6) fire damage." },
            { name: "Ethereal Stride", description: "The nightmare and up to three willing creatures within 5 feet of it magically enter the Ethereal Plane from the Material Plane, or vice versa." }
        ]
    },

    // ===== SNAKES =====
    "giant-constrictor-snake": {
        name: "Giant Constrictor Snake",
        source: "MM",
        size: "huge",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        hp: 60,
        hitDice: "8d12+8",
        speed: { walk: 30, swim: 30 },
        abilityScores: { str: 19, dex: 14, con: 12, int: 1, wis: 10, cha: 3 },
        skills: { perception: 2 },
        senses: ["blindsight 10 ft."],
        languages: "—",
        cr: 2,
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one creature. Hit: 11 (2d6+4) piercing damage." },
            { name: "Constrict", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 13 (2d8+4) bludgeoning damage, and the target is grappled (escape DC 16). Until this grapple ends, the creature is restrained, and the snake can't constrict another target." }
        ]
    },
    "giant-poisonous-snake": {
        name: "Giant Poisonous Snake",
        source: "MM",
        size: "medium",
        type: "beast",
        alignment: "unaligned",
        ac: 14,
        hp: 11,
        hitDice: "2d8+2",
        speed: { walk: 30, swim: 30 },
        abilityScores: { str: 10, dex: 18, con: 13, int: 2, wis: 10, cha: 3 },
        skills: { perception: 2 },
        senses: ["blindsight 10 ft."],
        languages: "—",
        cr: 0.25,
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 6 (1d4+4) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one." }
        ]
    },

    // ===== SPIDERS =====
    "giant-spider": {
        name: "Giant Spider",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 14,
        acType: "natural armor",
        hp: 26,
        hitDice: "4d10+4",
        speed: { walk: 30, climb: 30 },
        abilityScores: { str: 14, dex: 16, con: 12, int: 2, wis: 11, cha: 4 },
        skills: { stealth: 7 },
        senses: ["blindsight 10 ft.", "darkvision 60 ft."],
        languages: "—",
        cr: 1,
        traits: [
            { name: "Spider Climb", description: "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." },
            { name: "Web Sense", description: "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web." },
            { name: "Web Walker", description: "The spider ignores movement restrictions caused by webbing." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 7 (1d8+3) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 9 (2d8) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way." },
            { name: "Web (Recharge 5-6)", description: "Ranged Weapon Attack: +5 to hit, range 30/60 ft., one creature. Hit: The target is restrained by webbing. As an action, the restrained target can make a DC 12 Strength check, bursting the webbing on a success." }
        ]
    },
    "phase-spider": {
        name: "Phase Spider",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 32,
        hitDice: "5d10+5",
        speed: { walk: 30, climb: 30 },
        abilityScores: { str: 15, dex: 15, con: 12, int: 6, wis: 10, cha: 6 },
        skills: { stealth: 6 },
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 3,
        traits: [
            { name: "Ethereal Jaunt", description: "As a bonus action, the spider can magically shift from the Material Plane to the Ethereal Plane, or vice versa." },
            { name: "Spider Climb", description: "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." },
            { name: "Web Walker", description: "The spider ignores movement restrictions caused by webbing." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (1d10+2) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 18 (4d8) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way." }
        ]
    },

    // ===== AQUATIC =====
    "giant-shark": {
        name: "Giant Shark",
        source: "MM",
        size: "huge",
        type: "beast",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 126,
        hitDice: "11d12+55",
        speed: { walk: 0, swim: 50 },
        abilityScores: { str: 23, dex: 11, con: 21, int: 1, wis: 10, cha: 5 },
        skills: { perception: 3 },
        senses: ["blindsight 60 ft."],
        languages: "—",
        cr: 5,
        traits: [
            { name: "Blood Frenzy", description: "The shark has advantage on melee attack rolls against any creature that doesn't have all its hit points." },
            { name: "Water Breathing", description: "The shark can breathe only underwater." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 22 (3d10+6) piercing damage." }
        ]
    },
    "giant-octopus": {
        name: "Giant Octopus",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 11,
        hp: 52,
        hitDice: "8d10+8",
        speed: { walk: 10, swim: 60 },
        abilityScores: { str: 17, dex: 13, con: 13, int: 4, wis: 10, cha: 4 },
        skills: { perception: 4, stealth: 5 },
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 1,
        traits: [
            { name: "Hold Breath", description: "While out of water, the octopus can hold its breath for 1 hour." },
            { name: "Underwater Camouflage", description: "The octopus has advantage on Dexterity (Stealth) checks made while underwater." },
            { name: "Water Breathing", description: "The octopus can breathe only underwater." }
        ],
        actions: [
            { name: "Tentacles", description: "Melee Weapon Attack: +5 to hit, reach 15 ft., one target. Hit: 10 (2d6+3) bludgeoning damage. If the target is a creature, it is grappled (escape DC 16). Until this grapple ends, the target is restrained, and the octopus can't use its tentacles on another target." },
            { name: "Ink Cloud (Recharges after a Short or Long Rest)", description: "A 20-foot-radius cloud of ink extends all around the octopus if it is underwater. The area is heavily obscured for 1 minute, although a significant current can disperse the ink. After releasing the ink, the octopus can use the Dash action as a bonus action." }
        ]
    },

    // ===== BIRDS =====
    "giant-eagle": {
        name: "Giant Eagle",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "neutral good",
        ac: 13,
        hp: 26,
        hitDice: "4d10+4",
        speed: { walk: 10, fly: 80 },
        abilityScores: { str: 16, dex: 17, con: 13, int: 8, wis: 14, cha: 10 },
        skills: { perception: 4 },
        senses: [],
        languages: "Giant Eagle, understands Common and Auran but can't speak",
        cr: 1,
        traits: [
            { name: "Keen Sight", description: "The eagle has advantage on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Multiattack", description: "The eagle makes two attacks: one with its beak and one with its talons." },
            { name: "Beak", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6+3) piercing damage." },
            { name: "Talons", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6+3) slashing damage." }
        ]
    },
    "giant-owl": {
        name: "Giant Owl",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "neutral",
        ac: 12,
        hp: 19,
        hitDice: "3d10+3",
        speed: { walk: 5, fly: 60 },
        abilityScores: { str: 13, dex: 15, con: 12, int: 8, wis: 13, cha: 10 },
        skills: { perception: 5, stealth: 4 },
        senses: ["darkvision 120 ft."],
        languages: "Giant Owl, understands Common, Elvish, and Sylvan but can't speak",
        cr: 0.25,
        traits: [
            { name: "Flyby", description: "The owl doesn't provoke opportunity attacks when it flies out of an enemy's reach." },
            { name: "Keen Hearing and Sight", description: "The owl has advantage on Wisdom (Perception) checks that rely on hearing or sight." }
        ],
        actions: [
            { name: "Talons", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 8 (2d6+1) slashing damage." }
        ]
    },

    // ===== MISC BEASTS =====
    "giant-boar": {
        name: "Giant Boar",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        acType: "natural armor",
        hp: 42,
        hitDice: "5d10+15",
        speed: { walk: 40 },
        abilityScores: { str: 17, dex: 10, con: 16, int: 2, wis: 7, cha: 5 },
        senses: [],
        languages: "—",
        cr: 2,
        traits: [
            { name: "Charge", description: "If the boar moves at least 20 feet straight toward a target and then hits it with a tusk attack on the same turn, the target takes an extra 7 (2d6) slashing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone." },
            { name: "Relentless (Recharges after a Short or Long Rest)", description: "If the boar takes 10 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead." }
        ],
        actions: [
            { name: "Tusk", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6+3) slashing damage." }
        ]
    },
    "giant-elk": {
        name: "Giant Elk",
        source: "MM",
        size: "huge",
        type: "beast",
        alignment: "unaligned",
        ac: 14,
        acType: "natural armor",
        hp: 42,
        hitDice: "5d12+10",
        speed: { walk: 60 },
        abilityScores: { str: 19, dex: 16, con: 14, int: 7, wis: 14, cha: 10 },
        skills: { perception: 4 },
        senses: [],
        languages: "Giant Elk, understands Common, Elvish, and Sylvan but can't speak",
        cr: 2,
        traits: [
            { name: "Charge", description: "If the elk moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone." }
        ],
        actions: [
            { name: "Ram", description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 11 (2d6+4) bludgeoning damage." },
            { name: "Hooves", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one prone creature. Hit: 22 (4d8+4) bludgeoning damage." }
        ]
    },
    "giant-ape": {
        name: "Giant Ape",
        source: "MM",
        size: "huge",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        hp: 157,
        hitDice: "15d12+60",
        speed: { walk: 40, climb: 40 },
        abilityScores: { str: 23, dex: 14, con: 18, int: 7, wis: 12, cha: 7 },
        skills: { athletics: 9, perception: 4 },
        senses: [],
        languages: "—",
        cr: 7,
        actions: [
            { name: "Multiattack", description: "The ape makes two fist attacks." },
            { name: "Fist", description: "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 22 (3d10+6) bludgeoning damage." },
            { name: "Rock", description: "Ranged Weapon Attack: +9 to hit, range 50/100 ft., one target. Hit: 30 (7d6+6) bludgeoning damage." }
        ]
    },
    "mammoth": {
        name: "Mammoth",
        source: "MM",
        size: "huge",
        type: "beast",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 126,
        hitDice: "11d12+55",
        speed: { walk: 40 },
        abilityScores: { str: 24, dex: 9, con: 21, int: 3, wis: 11, cha: 6 },
        senses: [],
        languages: "—",
        cr: 6,
        traits: [
            { name: "Trampling Charge", description: "If the mammoth moves at least 20 feet straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 18 Strength saving throw or be knocked prone. If the target is prone, the mammoth can make one stomp attack against it as a bonus action." }
        ],
        actions: [
            { name: "Gore", description: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 25 (4d8+7) piercing damage." },
            { name: "Stomp", description: "Melee Weapon Attack: +10 to hit, reach 5 ft., one prone creature. Hit: 29 (4d10+7) bludgeoning damage." }
        ]
    },
    "elephant": {
        name: "Elephant",
        source: "MM",
        size: "huge",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        acType: "natural armor",
        hp: 76,
        hitDice: "8d12+24",
        speed: { walk: 40 },
        abilityScores: { str: 22, dex: 9, con: 17, int: 3, wis: 11, cha: 6 },
        senses: [],
        languages: "—",
        cr: 4,
        traits: [
            { name: "Trampling Charge", description: "If the elephant moves at least 20 feet straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked prone. If the target is prone, the elephant can make one stomp attack against it as a bonus action." }
        ],
        actions: [
            { name: "Gore", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 19 (3d8+6) piercing damage." },
            { name: "Stomp", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one prone creature. Hit: 22 (3d10+6) bludgeoning damage." }
        ]
    },
    "rhinoceros": {
        name: "Rhinoceros",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 11,
        acType: "natural armor",
        hp: 45,
        hitDice: "6d10+12",
        speed: { walk: 40 },
        abilityScores: { str: 21, dex: 8, con: 15, int: 2, wis: 12, cha: 6 },
        senses: [],
        languages: "—",
        cr: 2,
        traits: [
            { name: "Charge", description: "If the rhinoceros moves at least 20 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 (2d8) bludgeoning damage. If the target is a creature, it must succeed on a DC 15 Strength saving throw or be knocked prone." }
        ],
        actions: [
            { name: "Gore", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8+5) bludgeoning damage." }
        ]
    },
    "giant-crocodile": {
        name: "Giant Crocodile",
        source: "MM",
        size: "huge",
        type: "beast",
        alignment: "unaligned",
        ac: 14,
        acType: "natural armor",
        hp: 85,
        hitDice: "9d12+27",
        speed: { walk: 30, swim: 50 },
        abilityScores: { str: 21, dex: 9, con: 17, int: 2, wis: 10, cha: 7 },
        skills: { stealth: 5 },
        senses: [],
        languages: "—",
        cr: 5,
        traits: [
            { name: "Hold Breath", description: "The crocodile can hold its breath for 30 minutes." }
        ],
        actions: [
            { name: "Multiattack", description: "The crocodile makes two attacks: one with its bite and one with its tail." },
            { name: "Bite", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 21 (3d10+5) piercing damage, and the target is grappled (escape DC 16). Until this grapple ends, the target is restrained, and the crocodile can't bite another target." },
            { name: "Tail", description: "Melee Weapon Attack: +8 to hit, reach 10 ft., one target not grappled by the crocodile. Hit: 14 (2d8+5) bludgeoning damage. If the target is a creature, it must succeed on a DC 16 Strength saving throw or be knocked prone." }
        ]
    }
};
