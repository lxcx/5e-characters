// Expansion Pack 1 - More MM Creatures
// Pushing toward 1000 monsters

const MONSTERS_EXPANSION1 = {
    // ===== Dinosaurs =====
    
    
    "plesiosaurus": {
        name: "Plesiosaurus",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 68,
        hitDice: "8d10+24",
        speed: { walk: 20, swim: 40 },
        abilityScores: { str: 18, dex: 15, con: 16, int: 2, wis: 12, cha: 5 },
        skills: { perception: 3, stealth: 4 },
        senses: [],
        languages: "—",
        cr: 2,
        environment: ["underwater", "coastal"],
        role: "skirmisher",
        tags: ["dinosaur", "beast", "aquatic"],
        traits: [
            { name: "Hold Breath", description: "The plesiosaurus can hold its breath for 1 hour." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 14 (3d6+4) piercing damage." }
        ]
    },
    "pteranodon": {
        name: "Pteranodon",
        source: "MM",
        size: "medium",
        type: "beast",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 13,
        hitDice: "3d8",
        speed: { walk: 10, fly: 60 },
        abilityScores: { str: 12, dex: 15, con: 10, int: 2, wis: 9, cha: 5 },
        skills: { perception: 1 },
        senses: [],
        languages: "—",
        cr: 0.25,
        environment: ["coastal", "mountain"],
        role: "skirmisher",
        tags: ["dinosaur", "beast"],
        traits: [
            { name: "Flyby", description: "The pteranodon doesn't provoke opportunity attacks when it flies out of an enemy's reach." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4+1) piercing damage." }
        ]
    },
    "allosaurus": {
        name: "Allosaurus",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 51,
        hitDice: "6d10+18",
        speed: { walk: 60 },
        abilityScores: { str: 19, dex: 13, con: 17, int: 2, wis: 12, cha: 5 },
        skills: { perception: 5 },
        senses: [],
        languages: "—",
        cr: 2,
        environment: ["jungle", "grassland"],
        role: "skirmisher",
        tags: ["dinosaur", "beast"],
        traits: [
            { name: "Pounce", description: "If the allosaurus moves at least 30 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the allosaurus can make one bite attack against it as a bonus action." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 15 (2d10+4) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8+4) slashing damage." }
        ]
    },
    "ankylosaurus": {
        name: "Ankylosaurus",
        source: "MM",
        size: "huge",
        type: "beast",
        alignment: "unaligned",
        ac: 15,
        acType: "natural armor",
        hp: 68,
        hitDice: "8d12+16",
        speed: { walk: 30 },
        abilityScores: { str: 19, dex: 11, con: 15, int: 2, wis: 12, cha: 5 },
        senses: [],
        languages: "—",
        cr: 3,
        environment: ["jungle", "grassland"],
        role: "brute",
        tags: ["dinosaur", "beast"],
        actions: [
            { name: "Tail", description: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 18 (4d6+4) bludgeoning damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone." }
        ]
    },
    "deinonychus": {
        name: "Deinonychus",
        source: "VGtM",
        size: "medium",
        type: "beast",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 26,
        hitDice: "4d8+8",
        speed: { walk: 40 },
        abilityScores: { str: 15, dex: 15, con: 14, int: 4, wis: 12, cha: 6 },
        skills: { perception: 3 },
        senses: [],
        languages: "—",
        cr: 1,
        environment: ["jungle", "grassland"],
        role: "skirmisher",
        tags: ["dinosaur", "beast", "pack"],
        traits: [
            { name: "Pounce", description: "If the deinonychus moves at least 20 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked prone. If the target is prone, the deinonychus can make one bite attack against it as a bonus action." }
        ],
        actions: [
            { name: "Multiattack", description: "The deinonychus makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8+2) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8+2) slashing damage." }
        ]
    },
    "velociraptor": {
        name: "Velociraptor",
        source: "VGtM",
        size: "tiny",
        type: "beast",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 10,
        hitDice: "3d4+3",
        speed: { walk: 30 },
        abilityScores: { str: 6, dex: 14, con: 13, int: 4, wis: 12, cha: 6 },
        skills: { perception: 3 },
        senses: [],
        languages: "—",
        cr: 0.25,
        environment: ["jungle", "grassland"],
        role: "minion",
        tags: ["dinosaur", "beast", "pack"],
        traits: [
            { name: "Pack Tactics", description: "The velociraptor has advantage on an attack roll against a creature if at least one of the velociraptor's allies is within 5 feet of the creature and the ally isn't incapacitated." }
        ],
        actions: [
            { name: "Multiattack", description: "The velociraptor makes two attacks: one with its bite and one with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6+2) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4+2) slashing damage." }
        ]
    },
    "quetzalcoatlus": {
        name: "Quetzalcoatlus",
        source: "VGtM",
        size: "huge",
        type: "beast",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 30,
        hitDice: "4d12+4",
        speed: { walk: 10, fly: 80 },
        abilityScores: { str: 15, dex: 13, con: 13, int: 2, wis: 10, cha: 5 },
        skills: { perception: 2 },
        senses: [],
        languages: "—",
        cr: 2,
        environment: ["coastal", "mountain", "grassland"],
        role: "skirmisher",
        tags: ["dinosaur", "beast"],
        traits: [
            { name: "Dive Attack", description: "If the quetzalcoatlus is flying and dives at least 30 feet straight toward a target and then hits it with a bite attack, the attack deals an extra 10 (3d6) damage to the target." },
            { name: "Flyby", description: "The quetzalcoatlus doesn't provoke opportunity attacks when it flies out of an enemy's reach." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 10 ft., one creature. Hit: 12 (3d6+2) piercing damage." }
        ]
    },
    "stegosaurus": {
        name: "Stegosaurus",
        source: "VGtM",
        size: "huge",
        type: "beast",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 76,
        hitDice: "8d12+24",
        speed: { walk: 40 },
        abilityScores: { str: 20, dex: 9, con: 17, int: 2, wis: 11, cha: 5 },
        senses: [],
        languages: "—",
        cr: 4,
        environment: ["jungle", "grassland"],
        role: "brute",
        tags: ["dinosaur", "beast"],
        actions: [
            { name: "Tail", description: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 26 (6d6+5) piercing damage." }
        ]
    },
    "brontosaurus": {
        name: "Brontosaurus",
        source: "VGtM",
        size: "gargantuan",
        type: "beast",
        alignment: "unaligned",
        ac: 15,
        acType: "natural armor",
        hp: 121,
        hitDice: "9d20+27",
        speed: { walk: 30 },
        abilityScores: { str: 21, dex: 9, con: 17, int: 2, wis: 10, cha: 7 },
        savingThrows: { con: 6 },
        senses: [],
        languages: "—",
        cr: 5,
        environment: ["jungle", "grassland"],
        role: "brute",
        tags: ["dinosaur", "beast"],
        actions: [
            { name: "Stomp", description: "Melee Weapon Attack: +8 to hit, reach 20 ft., one target. Hit: 27 (5d8+5) bludgeoning damage, and the target must succeed on a DC 14 Strength saving throw or be knocked prone." },
            { name: "Tail", description: "Melee Weapon Attack: +8 to hit, reach 20 ft., one target. Hit: 32 (6d8+5) bludgeoning damage." }
        ]
    },

    // ===== More Humanoids =====
    
    
    
    
    
    
    

    // ===== Swarms =====
    "swarm-of-beetles": {
        name: "Swarm of Beetles",
        source: "MM",
        size: "medium",
        type: "beast",
        subtype: "swarm of tiny beasts",
        alignment: "unaligned",
        ac: 12,
        acType: "natural armor",
        hp: 22,
        hitDice: "5d8",
        speed: { walk: 20, burrow: 5, climb: 20 },
        abilityScores: { str: 3, dex: 13, con: 10, int: 1, wis: 7, cha: 1 },
        damageResistances: ["bludgeoning", "piercing", "slashing"],
        conditionImmunities: ["charmed", "frightened", "grappled", "paralyzed", "petrified", "prone", "restrained", "stunned"],
        senses: ["blindsight 10 ft."],
        languages: "—",
        cr: 0.5,
        environment: ["forest", "swamp", "underdark"],
        role: "minion",
        tags: ["beast", "swarm"],
        traits: [
            { name: "Swarm", description: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points." }
        ],
        actions: [
            { name: "Bites", description: "Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm's space. Hit: 10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer." }
        ]
    },
    "swarm-of-centipedes": {
        name: "Swarm of Centipedes",
        source: "MM",
        size: "medium",
        type: "beast",
        subtype: "swarm of tiny beasts",
        alignment: "unaligned",
        ac: 12,
        acType: "natural armor",
        hp: 22,
        hitDice: "5d8",
        speed: { walk: 20, climb: 20 },
        abilityScores: { str: 3, dex: 13, con: 10, int: 1, wis: 7, cha: 1 },
        damageResistances: ["bludgeoning", "piercing", "slashing"],
        conditionImmunities: ["charmed", "frightened", "grappled", "paralyzed", "petrified", "prone", "restrained", "stunned"],
        senses: ["blindsight 10 ft."],
        languages: "—",
        cr: 0.5,
        environment: ["forest", "swamp", "underdark"],
        role: "minion",
        tags: ["beast", "swarm"],
        traits: [
            { name: "Swarm", description: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points." }
        ],
        actions: [
            { name: "Bites", description: "Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm's space. Hit: 10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer. A creature reduced to 0 hit points by a swarm of centipedes is stable but poisoned for 1 hour, even after regaining hit points, and paralyzed while poisoned in this way." }
        ]
    },
    "swarm-of-spiders": {
        name: "Swarm of Spiders",
        source: "MM",
        size: "medium",
        type: "beast",
        subtype: "swarm of tiny beasts",
        alignment: "unaligned",
        ac: 12,
        acType: "natural armor",
        hp: 22,
        hitDice: "5d8",
        speed: { walk: 20, climb: 20 },
        abilityScores: { str: 3, dex: 13, con: 10, int: 1, wis: 7, cha: 1 },
        damageResistances: ["bludgeoning", "piercing", "slashing"],
        conditionImmunities: ["charmed", "frightened", "grappled", "paralyzed", "petrified", "prone", "restrained", "stunned"],
        senses: ["blindsight 10 ft."],
        languages: "—",
        cr: 0.5,
        environment: ["forest", "swamp", "underdark"],
        role: "minion",
        tags: ["beast", "swarm"],
        traits: [
            { name: "Swarm", description: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points." },
            { name: "Spider Climb", description: "The swarm can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." },
            { name: "Web Sense", description: "While in contact with a web, the swarm knows the exact location of any other creature in contact with the same web." },
            { name: "Web Walker", description: "The swarm ignores movement restrictions caused by webbing." }
        ],
        actions: [
            { name: "Bites", description: "Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm's space. Hit: 10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer." }
        ]
    },
    "swarm-of-wasps": {
        name: "Swarm of Wasps",
        source: "MM",
        size: "medium",
        type: "beast",
        subtype: "swarm of tiny beasts",
        alignment: "unaligned",
        ac: 12,
        acType: "natural armor",
        hp: 22,
        hitDice: "5d8",
        speed: { walk: 5, fly: 30 },
        abilityScores: { str: 3, dex: 13, con: 10, int: 1, wis: 7, cha: 1 },
        damageResistances: ["bludgeoning", "piercing", "slashing"],
        conditionImmunities: ["charmed", "frightened", "grappled", "paralyzed", "petrified", "prone", "restrained", "stunned"],
        senses: [],
        languages: "—",
        cr: 0.5,
        environment: ["forest", "grassland"],
        role: "minion",
        tags: ["beast", "swarm"],
        traits: [
            { name: "Swarm", description: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points." }
        ],
        actions: [
            { name: "Stings", description: "Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm's space. Hit: 10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer." }
        ]
    }
};
