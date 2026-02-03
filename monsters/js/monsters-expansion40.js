// Expansion Pack 40 - More Creatures
// Additional monsters for comprehensive coverage

const MONSTERS_EXPANSION40 = {
    // ===== More Beasts =====
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
        languages: "Giant Eagle, understands Common and Auran but can't speak them",
        cr: 1,
        environment: ["mountain", "grassland"],
        role: "skirmisher",
        tags: ["beast"],
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
        languages: "Giant Owl, understands Common, Elvish, and Sylvan but can't speak them",
        cr: "1/4",
        environment: ["forest"],
        role: "lurker",
        tags: ["beast"],
        traits: [
            { name: "Flyby", description: "The owl doesn't provoke opportunity attacks when it flies out of an enemy's reach." },
            { name: "Keen Hearing and Sight", description: "The owl has advantage on Wisdom (Perception) checks that rely on hearing or sight." }
        ],
        actions: [
            { name: "Talons", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 8 (2d6+1) slashing damage." }
        ]
    },
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
        environment: ["forest", "grassland", "hill"],
        role: "brute",
        tags: ["beast"],
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
        languages: "Giant Elk, understands Common, Elvish, and Sylvan but can't speak them",
        cr: 2,
        environment: ["forest", "grassland", "hill"],
        role: "brute",
        tags: ["beast"],
        traits: [
            { name: "Charge", description: "If the elk moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone." }
        ],
        actions: [
            { name: "Ram", description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 11 (2d6+4) bludgeoning damage." },
            { name: "Hooves", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one prone creature. Hit: 22 (4d8+4) bludgeoning damage." }
        ]
    },
    "giant-vulture": {
        name: "Giant Vulture",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "neutral evil",
        ac: 10,
        hp: 22,
        hitDice: "3d10+6",
        speed: { walk: 10, fly: 60 },
        abilityScores: { str: 15, dex: 10, con: 15, int: 6, wis: 12, cha: 7 },
        skills: { perception: 3 },
        senses: [],
        languages: "understands Common but can't speak",
        cr: 1,
        environment: ["desert", "grassland"],
        role: "skirmisher",
        tags: ["beast"],
        traits: [
            { name: "Keen Sight and Smell", description: "The vulture has advantage on Wisdom (Perception) checks that rely on sight or smell." },
            { name: "Pack Tactics", description: "The vulture has advantage on an attack roll against a creature if at least one of the vulture's allies is within 5 feet of the creature and the ally isn't incapacitated." }
        ],
        actions: [
            { name: "Multiattack", description: "The vulture makes two attacks: one with its beak and one with its talons." },
            { name: "Beak", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4+2) piercing damage." },
            { name: "Talons", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6+2) slashing damage." }
        ]
    },
    "giant-bat": {
        name: "Giant Bat",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 13,
        hp: 22,
        hitDice: "4d10",
        speed: { walk: 10, fly: 60 },
        abilityScores: { str: 15, dex: 16, con: 11, int: 2, wis: 12, cha: 6 },
        senses: ["blindsight 60 ft."],
        languages: "—",
        cr: "1/4",
        environment: ["underdark", "forest"],
        role: "skirmisher",
        tags: ["beast"],
        traits: [
            { name: "Echolocation", description: "The bat can't use its blindsight while deafened." },
            { name: "Keen Hearing", description: "The bat has advantage on Wisdom (Perception) checks that rely on hearing." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6+2) piercing damage." }
        ]
    },
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
        environment: ["swamp", "forest", "underwater"],
        role: "brute",
        tags: ["beast"],
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
        cr: "1/4",
        environment: ["swamp", "forest", "desert"],
        role: "lurker",
        tags: ["beast"],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 6 (1d4+4) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one." }
        ]
    },
    "giant-scorpion": {
        name: "Giant Scorpion",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 15,
        acType: "natural armor",
        hp: 52,
        hitDice: "7d10+14",
        speed: { walk: 40 },
        abilityScores: { str: 15, dex: 13, con: 15, int: 1, wis: 9, cha: 3 },
        senses: ["blindsight 60 ft."],
        languages: "—",
        cr: 3,
        environment: ["desert"],
        role: "brute",
        tags: ["beast"],
        actions: [
            { name: "Multiattack", description: "The scorpion makes three attacks: two with its claws and one with its sting." },
            { name: "Claw", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8+2) bludgeoning damage, and the target is grappled (escape DC 12). The scorpion has two claws, each of which can grapple only one target." },
            { name: "Sting", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (1d10+2) piercing damage, and the target must make a DC 12 Constitution saving throw, taking 22 (4d10) poison damage on a failed save, or half as much damage on a successful one." }
        ]
    },
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
        environment: ["forest", "swamp", "underdark"],
        role: "lurker",
        tags: ["beast"],
        traits: [
            { name: "Spider Climb", description: "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." },
            { name: "Web Sense", description: "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web." },
            { name: "Web Walker", description: "The spider ignores movement restrictions caused by webbing." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 7 (1d8+3) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 9 (2d8) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way." },
            { name: "Web (Recharge 5-6)", description: "Ranged Weapon Attack: +5 to hit, range 30/60 ft., one creature. Hit: The target is restrained by webbing. As an action, the restrained target can make a DC 12 Strength check, bursting the webbing on a success. The webbing can also be attacked and destroyed (AC 10; hp 5; vulnerability to fire damage; immunity to bludgeoning, poison, and psychic damage)." }
        ]
    }
};
