// Expansion Pack 6 - Final push to 1000!
// More diverse creatures

const MONSTERS_EXPANSION6 = {
    // ===== Sahuagin =====
    "sahuagin": {
        name: "Sahuagin",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "sahuagin",
        alignment: "lawful evil",
        ac: 12,
        acType: "natural armor",
        hp: 22,
        hitDice: "4d8+4",
        speed: { walk: 30, swim: 40 },
        abilityScores: { str: 13, dex: 11, con: 12, int: 12, wis: 13, cha: 9 },
        skills: { perception: 5 },
        senses: ["darkvision 120 ft."],
        languages: "Sahuagin",
        cr: 0.5,
        environment: ["underwater", "coastal"],
        role: "soldier",
        tags: ["humanoid", "sahuagin", "aquatic"],
        traits: [
            { name: "Blood Frenzy", description: "The sahuagin has advantage on melee attack rolls against any creature that doesn't have all its hit points." },
            { name: "Limited Amphibiousness", description: "The sahuagin can breathe air and water, but it needs to be submerged at least once every 4 hours to avoid suffocating." },
            { name: "Shark Telepathy", description: "The sahuagin can magically command any shark within 120 feet of it, using a limited telepathy." }
        ],
        actions: [
            { name: "Multiattack", description: "The sahuagin makes two melee attacks: one with its bite and one with its claws or spear." },
            { name: "Bite", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4+1) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4+1) slashing damage." },
            { name: "Spear", description: "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d6+1) piercing damage, or 5 (1d8+1) piercing damage if used with two hands to make a melee attack." }
        ]
    },
    "merrow": {
        name: "Merrow",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "chaotic evil",
        ac: 13,
        acType: "natural armor",
        hp: 45,
        hitDice: "6d10+12",
        speed: { walk: 10, swim: 40 },
        abilityScores: { str: 18, dex: 10, con: 15, int: 8, wis: 10, cha: 9 },
        senses: ["darkvision 60 ft."],
        languages: "Abyssal, Aquan",
        cr: 2,
        environment: ["underwater", "coastal"],
        role: "brute",
        tags: ["monstrosity", "aquatic"],
        traits: [
            { name: "Amphibious", description: "The merrow can breathe air and water." }
        ],
        actions: [
            { name: "Multiattack", description: "The merrow makes two attacks: one with its bite and one with its claws or harpoon." },
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8+4) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (2d4+4) slashing damage." },
            { name: "Harpoon", description: "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 11 (2d6+4) piercing damage. If the target is a Huge or smaller creature, it must succeed on a Strength contest against the merrow or be pulled up to 20 feet toward the merrow." }
        ]
    },

    // ===== More Underdark Creatures =====
    "drider": {
        name: "Drider",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "chaotic evil",
        ac: 19,
        acType: "natural armor",
        hp: 123,
        hitDice: "13d10+52",
        speed: { walk: 30, climb: 30 },
        abilityScores: { str: 16, dex: 16, con: 18, int: 13, wis: 14, cha: 12 },
        skills: { perception: 5, stealth: 9 },
        senses: ["darkvision 120 ft."],
        languages: "Elvish, Undercommon",
        cr: 6,
        environment: ["underdark"],
        role: "skirmisher",
        tags: ["monstrosity", "drow", "spider"],
        traits: [
            { name: "Fey Ancestry", description: "The drider has advantage on saving throws against being charmed, and magic can't put the drider to sleep." },
            { name: "Spider Climb", description: "The drider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." },
            { name: "Sunlight Sensitivity", description: "While in sunlight, the drider has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." },
            { name: "Web Walker", description: "The drider ignores movement restrictions caused by webbing." }
        ],
        actions: [
            { name: "Multiattack", description: "The drider makes three attacks, either with its longsword or its longbow. It can replace one of those attacks with a bite attack." },
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 2 (1d4) piercing damage plus 9 (2d8) poison damage." },
            { name: "Longsword", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d8+3) slashing damage, or 8 (1d10+3) slashing damage if used with two hands." },
            { name: "Longbow", description: "Ranged Weapon Attack: +6 to hit, range 150/600 ft., one target. Hit: 7 (1d8+3) piercing damage plus 4 (1d8) poison damage." }
        ],
        spellcasting: {
            innate: true,
            ability: "wis",
            dc: 13,
            spells: {
                atWill: ["dancing lights"],
                "1/day each": ["darkness", "faerie fire"]
            }
        }
    },
    "grimlock": {
        name: "Grimlock",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "grimlock",
        alignment: "neutral evil",
        ac: 11,
        hp: 11,
        hitDice: "2d8+2",
        speed: { walk: 30 },
        abilityScores: { str: 16, dex: 12, con: 12, int: 9, wis: 8, cha: 6 },
        skills: { athletics: 5, perception: 3, stealth: 3 },
        conditionImmunities: ["blinded"],
        senses: ["blindsight 30 ft. (blind beyond this radius)"],
        languages: "Undercommon",
        cr: 0.25,
        environment: ["underdark"],
        role: "brute",
        tags: ["humanoid", "grimlock"],
        traits: [
            { name: "Blind Senses", description: "The grimlock can't use its blindsight while deafened and unable to smell." },
            { name: "Keen Hearing and Smell", description: "The grimlock has advantage on Wisdom (Perception) checks that rely on hearing or smell." },
            { name: "Stone Camouflage", description: "The grimlock has advantage on Dexterity (Stealth) checks made to hide in rocky terrain." }
        ],
        actions: [
            { name: "Spiked Bone Club", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4+3) bludgeoning damage plus 2 (1d4) piercing damage." }
        ]
    },
    "quaggoth": {
        name: "Quaggoth",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "quaggoth",
        alignment: "chaotic neutral",
        ac: 13,
        acType: "natural armor",
        hp: 45,
        hitDice: "6d8+18",
        speed: { walk: 30, climb: 30 },
        abilityScores: { str: 17, dex: 12, con: 16, int: 6, wis: 12, cha: 7 },
        skills: { athletics: 5 },
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 120 ft."],
        languages: "Undercommon",
        cr: 2,
        environment: ["underdark"],
        role: "brute",
        tags: ["humanoid", "quaggoth"],
        traits: [
            { name: "Wounded Fury", description: "While it has 10 hit points or fewer, the quaggoth has advantage on attack rolls. In addition, it deals an extra 7 (2d6) damage to any target it hits with a melee attack." }
        ],
        actions: [
            { name: "Multiattack", description: "The quaggoth makes two claw attacks." },
            { name: "Claw", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6+3) slashing damage." }
        ]
    },
    "hook-horror": {
        name: "Hook Horror",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "neutral",
        ac: 15,
        acType: "natural armor",
        hp: 75,
        hitDice: "10d10+20",
        speed: { walk: 30, climb: 30 },
        abilityScores: { str: 18, dex: 10, con: 15, int: 6, wis: 12, cha: 7 },
        skills: { perception: 3 },
        senses: ["blindsight 60 ft.", "darkvision 10 ft."],
        languages: "Hook Horror",
        cr: 3,
        environment: ["underdark"],
        role: "brute",
        tags: ["monstrosity"],
        traits: [
            { name: "Echolocation", description: "The hook horror can't use its blindsight while deafened." },
            { name: "Keen Hearing", description: "The hook horror has advantage on Wisdom (Perception) checks that rely on hearing." }
        ],
        actions: [
            { name: "Multiattack", description: "The hook horror makes two hook attacks." },
            { name: "Hook", description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 11 (2d6+4) piercing damage." }
        ]
    },
    "piercer": {
        name: "Piercer",
        source: "MM",
        size: "medium",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 15,
        acType: "natural armor",
        hp: 22,
        hitDice: "3d8+9",
        speed: { walk: 5, climb: 5 },
        abilityScores: { str: 10, dex: 13, con: 16, int: 1, wis: 7, cha: 3 },
        skills: { stealth: 5 },
        senses: ["blindsight 30 ft.", "darkvision 60 ft."],
        languages: "—",
        cr: 0.5,
        environment: ["underdark"],
        role: "lurker",
        tags: ["monstrosity"],
        traits: [
            { name: "False Appearance", description: "While the piercer remains motionless on the ceiling, it is indistinguishable from a normal stalactite." },
            { name: "Spider Climb", description: "The piercer can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." }
        ],
        actions: [
            { name: "Drop", description: "Melee Weapon Attack: +3 to hit, one creature directly underneath the piercer. Hit: 3 (1d6) piercing damage per 10 feet fallen, up to 21 (6d6). Miss: The piercer takes half the normal falling damage for the distance fallen." }
        ]
    },
    "roper": {
        name: "Roper",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "neutral evil",
        ac: 20,
        acType: "natural armor",
        hp: 93,
        hitDice: "11d10+33",
        speed: { walk: 10, climb: 10 },
        abilityScores: { str: 18, dex: 8, con: 17, int: 7, wis: 16, cha: 6 },
        skills: { perception: 6, stealth: 5 },
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 5,
        environment: ["underdark"],
        role: "lurker",
        tags: ["monstrosity"],
        traits: [
            { name: "False Appearance", description: "While the roper remains motionless, it is indistinguishable from a normal cave formation, such as a stalagmite." },
            { name: "Grasping Tendrils", description: "The roper can have up to six tendrils at a time. Each tendril can be attacked (AC 20; 10 hit points; immunity to poison and psychic damage). Destroying a tendril deals no damage to the roper, which can extrude a replacement tendril on its next turn." },
            { name: "Spider Climb", description: "The roper can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." }
        ],
        actions: [
            { name: "Multiattack", description: "The roper makes four attacks with its tendrils, uses Reel, and makes one attack with its bite." },
            { name: "Bite", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 22 (4d8+4) piercing damage." },
            { name: "Tendril", description: "Melee Weapon Attack: +7 to hit, reach 50 ft., one creature. Hit: The target is grappled (escape DC 15). Until the grapple ends, the target is restrained and has disadvantage on Strength checks and Strength saving throws, and the roper can't use the same tendril on another target." },
            { name: "Reel", description: "The roper pulls each creature grappled by it up to 25 feet straight toward it." }
        ]
    },

    // ===== More Beasts =====
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
        environment: ["forest", "arctic"],
        role: "brute",
        tags: ["beast", "bear"],
        traits: [
            { name: "Keen Smell", description: "The bear has advantage on Wisdom (Perception) checks that rely on smell." }
        ],
        actions: [
            { name: "Multiattack", description: "The bear makes two attacks: one with its bite and one with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d8+4) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 11 (2d6+4) slashing damage." }
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
        environment: ["arctic"],
        role: "brute",
        tags: ["beast", "bear"],
        traits: [
            { name: "Keen Smell", description: "The bear has advantage on Wisdom (Perception) checks that rely on smell." }
        ],
        actions: [
            { name: "Multiattack", description: "The bear makes two attacks: one with its bite and one with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (1d8+5) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 12 (2d6+5) slashing damage." }
        ]
    },
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
        environment: ["forest"],
        role: "brute",
        tags: ["beast", "bear"],
        traits: [
            { name: "Keen Smell", description: "The bear has advantage on Wisdom (Perception) checks that rely on smell." }
        ],
        actions: [
            { name: "Multiattack", description: "The bear makes two attacks: one with its bite and one with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d6+2) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 7 (2d4+2) slashing damage." }
        ]
    },
    "cave-bear": {
        name: "Cave Bear",
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
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 2,
        environment: ["underdark"],
        role: "brute",
        tags: ["beast", "bear"],
        traits: [
            { name: "Keen Smell", description: "The bear has advantage on Wisdom (Perception) checks that rely on smell." }
        ],
        actions: [
            { name: "Multiattack", description: "The bear makes two attacks: one with its bite and one with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (1d8+5) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 12 (2d6+5) slashing damage." }
        ]
    },
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
        environment: ["grassland", "desert"],
        role: "skirmisher",
        tags: ["beast", "cat"],
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
        environment: ["forest", "grassland", "jungle"],
        role: "skirmisher",
        tags: ["beast", "cat"],
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
        environment: ["forest", "grassland", "jungle"],
        role: "skirmisher",
        tags: ["beast", "cat"],
        traits: [
            { name: "Keen Smell", description: "The panther has advantage on Wisdom (Perception) checks that rely on smell." },
            { name: "Pounce", description: "If the panther moves at least 20 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked prone. If the target is prone, the panther can make one bite attack against it as a bonus action." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6+2) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4+2) slashing damage." }
        ]
    },
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
        environment: ["forest", "grassland", "hill"],
        role: "minion",
        tags: ["beast", "wolf", "pack"],
        traits: [
            { name: "Keen Hearing and Smell", description: "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell." },
            { name: "Pack Tactics", description: "The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 feet of the creature and the ally isn't incapacitated." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4+2) piercing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone." }
        ]
    },

    // ===== More Misc Creatures =====
    "animated-armor": {
        name: "Animated Armor",
        source: "MM",
        size: "medium",
        type: "construct",
        alignment: "unaligned",
        ac: 18,
        acType: "natural armor",
        hp: 33,
        hitDice: "6d8+6",
        speed: { walk: 25 },
        abilityScores: { str: 14, dex: 11, con: 13, int: 1, wis: 3, cha: 1 },
        damageImmunities: ["poison", "psychic"],
        conditionImmunities: ["blinded", "charmed", "deafened", "exhaustion", "frightened", "paralyzed", "petrified", "poisoned"],
        senses: ["blindsight 60 ft. (blind beyond this radius)"],
        languages: "—",
        cr: 1,
        environment: ["dungeon", "urban"],
        role: "soldier",
        tags: ["construct"],
        traits: [
            { name: "Antimagic Susceptibility", description: "The armor is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the armor must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute." },
            { name: "False Appearance", description: "While the armor remains motionless, it is indistinguishable from a normal suit of armor." }
        ],
        actions: [
            { name: "Multiattack", description: "The armor makes two melee attacks." },
            { name: "Slam", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6+2) bludgeoning damage." }
        ]
    },
    "flying-sword": {
        name: "Flying Sword",
        source: "MM",
        size: "small",
        type: "construct",
        alignment: "unaligned",
        ac: 17,
        acType: "natural armor",
        hp: 17,
        hitDice: "5d6",
        speed: { walk: 0, fly: 50 },
        abilityScores: { str: 12, dex: 15, con: 11, int: 1, wis: 5, cha: 1 },
        savingThrows: { dex: 4 },
        damageImmunities: ["poison", "psychic"],
        conditionImmunities: ["blinded", "charmed", "deafened", "frightened", "paralyzed", "petrified", "poisoned"],
        senses: ["blindsight 60 ft. (blind beyond this radius)"],
        languages: "—",
        cr: 0.25,
        environment: ["dungeon", "urban"],
        role: "skirmisher",
        tags: ["construct"],
        traits: [
            { name: "Antimagic Susceptibility", description: "The sword is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the sword must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute." },
            { name: "False Appearance", description: "While the sword remains motionless and isn't flying, it is indistinguishable from a normal sword." }
        ],
        actions: [
            { name: "Longsword", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8+1) slashing damage." }
        ]
    },
    "rug-of-smothering": {
        name: "Rug of Smothering",
        source: "MM",
        size: "large",
        type: "construct",
        alignment: "unaligned",
        ac: 12,
        hp: 33,
        hitDice: "6d10",
        speed: { walk: 10 },
        abilityScores: { str: 17, dex: 14, con: 10, int: 1, wis: 3, cha: 1 },
        damageImmunities: ["poison", "psychic"],
        conditionImmunities: ["blinded", "charmed", "deafened", "frightened", "paralyzed", "petrified", "poisoned"],
        senses: ["blindsight 60 ft. (blind beyond this radius)"],
        languages: "—",
        cr: 2,
        environment: ["dungeon", "urban"],
        role: "lurker",
        tags: ["construct"],
        traits: [
            { name: "Antimagic Susceptibility", description: "The rug is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the rug must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute." },
            { name: "Damage Transfer", description: "While it is grappling a creature, the rug takes only half the damage dealt to it, and the creature grappled by the rug takes the other half." },
            { name: "False Appearance", description: "While the rug remains motionless, it is indistinguishable from a normal rug." }
        ],
        actions: [
            { name: "Smother", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one Medium or smaller creature. Hit: The creature is grappled (escape DC 13). Until this grapple ends, the target is restrained, blinded, and at risk of suffocating, and the rug can't smother another target. In addition, at the start of each of the target's turns, the target takes 10 (2d6+3) bludgeoning damage." }
        ]
    },
    "homunculus": {
        name: "Homunculus",
        source: "MM",
        size: "tiny",
        type: "construct",
        alignment: "neutral",
        ac: 13,
        acType: "natural armor",
        hp: 5,
        hitDice: "2d4",
        speed: { walk: 20, fly: 40 },
        abilityScores: { str: 4, dex: 15, con: 11, int: 10, wis: 10, cha: 7 },
        damageImmunities: ["poison"],
        conditionImmunities: ["charmed", "poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "understands the languages of its creator but can't speak",
        cr: 0,
        environment: ["urban"],
        role: "minion",
        tags: ["construct"],
        traits: [
            { name: "Telepathic Bond", description: "While the homunculus is on the same plane of existence as its master, it can magically convey what it senses to its master, and the two can communicate telepathically." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 1 piercing damage, and the target must succeed on a DC 10 Constitution saving throw or be poisoned for 1 minute. If the saving throw fails by 5 or more, the target is instead poisoned for 5 (1d10) minutes and unconscious while poisoned in this way." }
        ]
    }
};
