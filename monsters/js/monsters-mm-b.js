// D&D 5E Monster Manual - Monsters B
// Source: Monster Manual (MM)

const monstersMM_B = {
    // ===== B =====
    "baboon": {
        name: "Baboon",
        source: "MM",
        size: "small",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        hp: 3,
        hitDice: "1d6",
        speed: { walk: "30 ft.", climb: "30 ft." },
        abilityScores: { str: 8, dex: 14, con: 11, int: 4, wis: 12, cha: 6 },
        senses: ["passive Perception 11"],
        languages: "—",
        cr: 0,
        traits: [
            { name: "Pack Tactics", description: "The baboon has advantage on an attack roll against a creature if at least one of the baboon's allies is within 5 feet of the creature and the ally isn't incapacitated." }
        ],
        actions: [
            { name: "Bite", type: "melee", attackBonus: 1, reach: 5, damage: "1d4-1 piercing" }
        ]
    },
    "badger": {
        name: "Badger",
        source: "MM",
        size: "tiny",
        type: "beast",
        alignment: "unaligned",
        ac: 10,
        hp: 3,
        hitDice: "1d4+1",
        speed: { walk: "20 ft.", burrow: "5 ft." },
        abilityScores: { str: 4, dex: 11, con: 12, int: 2, wis: 12, cha: 5 },
        senses: ["darkvision 30 ft.", "passive Perception 11"],
        languages: "—",
        cr: 0,
        traits: [
            { name: "Keen Smell", description: "The badger has advantage on Wisdom (Perception) checks that rely on smell." }
        ],
        actions: [
            { name: "Bite", type: "melee", attackBonus: 2, reach: 5, damage: "1 piercing" }
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
        speed: { walk: "5 ft.", fly: "30 ft." },
        abilityScores: { str: 2, dex: 15, con: 8, int: 2, wis: 12, cha: 4 },
        senses: ["blindsight 60 ft.", "passive Perception 11"],
        languages: "—",
        cr: 0,
        traits: [
            { name: "Echolocation", description: "The bat can't use its blindsight while deafened." },
            { name: "Keen Hearing", description: "The bat has advantage on Wisdom (Perception) checks that rely on hearing." }
        ],
        actions: [
            { name: "Bite", type: "melee", attackBonus: 0, reach: 5, damage: "1 piercing" }
        ]
    },
    
    "behir": {
        name: "Behir",
        source: "MM",
        size: "huge",
        type: "monstrosity",
        alignment: "neutral evil",
        ac: 17,
        acType: "natural armor",
        hp: 168,
        hitDice: "16d12+64",
        speed: { walk: "50 ft.", climb: "40 ft." },
        abilityScores: { str: 23, dex: 16, con: 18, int: 7, wis: 14, cha: 12 },
        skills: { perception: 6, stealth: 7 },
        damageImmunities: ["lightning"],
        senses: ["darkvision 90 ft.", "passive Perception 16"],
        languages: "Draconic",
        cr: 11,
        actions: [
            { name: "Multiattack", description: "The behir makes two attacks: one with its bite and one to constrict." },
            { name: "Bite", type: "melee", attackBonus: 10, reach: 10, damage: "3d10+6 piercing" },
            { name: "Constrict", type: "melee", attackBonus: 10, reach: 5, damage: "2d10+6 bludgeoning plus 2d10 slashing", additionalText: "The target is grappled (escape DC 16) if the behir isn't already constricting a creature, and the target is restrained until this grapple ends." },
            { name: "Lightning Breath (Recharge 5-6)", description: "The behir exhales a line of lightning that is 20 feet long and 5 feet wide. Each creature in that line must make a DC 16 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one." },
            { name: "Swallow", description: "The behir makes one bite attack against a Medium or smaller target it is grappling. If the attack hits, the target is also swallowed, and the grapple ends. While swallowed, the target is blinded and restrained, it has total cover against attacks and other effects outside the behir, and it takes 21 (6d6) acid damage at the start of each of the behir's turns. A behir can have only one creature swallowed at a time.\n\nIf the behir takes 30 damage or more on a single turn from the swallowed creature, the behir must succeed on a DC 14 Constitution saving throw at the end of that turn or regurgitate the creature, which falls prone in a space within 10 feet of the behir. If the behir dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 15 feet of movement, exiting prone." }
        ]
    },
    "beholder": {
        name: "Beholder",
        source: "MM",
        size: "large",
        type: "aberration",
        alignment: "lawful evil",
        ac: 18,
        acType: "natural armor",
        hp: 180,
        hitDice: "19d10+76",
        speed: { walk: "0 ft.", fly: "20 ft. (hover)" },
        abilityScores: { str: 10, dex: 14, con: 18, int: 17, wis: 15, cha: 17 },
        savingThrows: { int: 8, wis: 7, cha: 8 },
        skills: { perception: 12 },
        conditionImmunities: ["prone"],
        senses: ["darkvision 120 ft.", "passive Perception 22"],
        languages: "Deep Speech, Undercommon",
        cr: 13,
        traits: [
            { name: "Antimagic Cone", description: "The beholder's central eye creates an area of antimagic, as in the antimagic field spell, in a 150-foot cone. At the start of each of its turns, the beholder decides which way the cone faces and whether the cone is active. The area works against the beholder's own eye rays." }
        ],
        actions: [
            { name: "Bite", type: "melee", attackBonus: 5, reach: 5, damage: "4d6 piercing" },
            { name: "Eye Rays", description: "The beholder shoots three of the following magical eye rays at random (reroll duplicates), choosing one to three targets it can see within 120 feet of it:\n\n1. Charm Ray. The targeted creature must succeed on a DC 16 Wisdom saving throw or be charmed by the beholder for 1 hour, or until the beholder harms the creature.\n\n2. Paralyzing Ray. The targeted creature must succeed on a DC 16 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.\n\n3. Fear Ray. The targeted creature must succeed on a DC 16 Wisdom saving throw or be frightened for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.\n\n4. Slowing Ray. The targeted creature must succeed on a DC 16 Dexterity saving throw. On a failed save, the target's speed is halved for 1 minute. In addition, the creature can't take reactions, and it can take either an action or a bonus action on its turn, not both. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.\n\n5. Enervation Ray. The targeted creature must make a DC 16 Constitution saving throw, taking 36 (8d8) necrotic damage on a failed save, or half as much damage on a successful one.\n\n6. Telekinetic Ray. If the target is a creature, it must succeed on a DC 16 Strength saving throw or the beholder moves it up to 30 feet in any direction. It is restrained by the ray's telekinetic grip until the start of the beholder's next turn or until the beholder is incapacitated.\n\nIf the target is an object weighing 300 pounds or less that isn't being worn or carried, it is moved up to 30 feet in any direction. The beholder can also exert fine control on objects with this ray, such as manipulating a simple tool or opening a door or a container.\n\n7. Sleep Ray. The targeted creature must succeed on a DC 16 Wisdom saving throw or fall asleep and remain unconscious for 1 minute. The target awakens if it takes damage or another creature takes an action to wake it. This ray has no effect on constructs and undead.\n\n8. Petrification Ray. The targeted creature must make a DC 16 Dexterity saving throw. On a failed save, the creature begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified until freed by the greater restoration spell or other magic.\n\n9. Disintegration Ray. If the target is a creature, it must succeed on a DC 16 Dexterity saving throw or take 45 (10d8) force damage. If this damage reduces the creature to 0 hit points, its body becomes a pile of fine gray dust.\n\nIf the target is a Large or smaller nonmagical object or creation of magical force, it is disintegrated without a saving throw. If the target is a Huge or larger object or creation of magical force, this ray disintegrates a 10-foot cube of it.\n\n10. Death Ray. The targeted creature must succeed on a DC 16 Dexterity saving throw or take 55 (10d10) necrotic damage. The target dies if the ray reduces it to 0 hit points." }
        ],
        legendaryActions: {
            count: 3,
            actions: [
                { name: "Eye Ray", cost: 1, description: "The beholder uses one random eye ray." }
            ]
        }
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
        speed: { walk: "40 ft.", climb: "30 ft." },
        abilityScores: { str: 15, dex: 10, con: 14, int: 2, wis: 12, cha: 7 },
        skills: { perception: 3 },
        senses: ["passive Perception 13"],
        languages: "—",
        cr: 0.5,
        traits: [
            { name: "Keen Smell", description: "The bear has advantage on Wisdom (Perception) checks that rely on smell." }
        ],
        actions: [
            { name: "Multiattack", description: "The bear makes two attacks: one with its bite and one with its claws." },
            { name: "Bite", type: "melee", attackBonus: 4, reach: 5, damage: "1d6+2 piercing" },
            { name: "Claws", type: "melee", attackBonus: 4, reach: 5, damage: "2d4+2 slashing" }
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
        speed: { walk: "40 ft.", climb: "30 ft." },
        abilityScores: { str: 19, dex: 10, con: 16, int: 2, wis: 13, cha: 7 },
        skills: { perception: 3 },
        senses: ["passive Perception 13"],
        languages: "—",
        cr: 1,
        traits: [
            { name: "Keen Smell", description: "The bear has advantage on Wisdom (Perception) checks that rely on smell." }
        ],
        actions: [
            { name: "Multiattack", description: "The bear makes two attacks: one with its bite and one with its claws." },
            { name: "Bite", type: "melee", attackBonus: 6, reach: 5, damage: "1d8+4 piercing" },
            { name: "Claws", type: "melee", attackBonus: 6, reach: 5, damage: "2d6+4 slashing" }
        ]
    },
    "bugbear": {
        name: "Bugbear",
        source: "MM",
        size: "medium",
        type: "humanoid",
        tags: ["goblinoid"],
        alignment: "chaotic evil",
        ac: 16,
        acType: "hide armor, shield",
        hp: 27,
        hitDice: "5d8+5",
        speed: { walk: "30 ft." },
        abilityScores: { str: 15, dex: 14, con: 13, int: 8, wis: 11, cha: 9 },
        skills: { stealth: 6, survival: 2 },
        senses: ["darkvision 60 ft.", "passive Perception 10"],
        languages: "Common, Goblin",
        cr: 1,
        traits: [
            { name: "Brute", description: "A melee weapon deals one extra die of its damage when the bugbear hits with it (included in the attack)." },
            { name: "Surprise Attack", description: "If the bugbear surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 7 (2d6) damage from the attack." }
        ],
        actions: [
            { name: "Morningstar", type: "melee", attackBonus: 4, reach: 5, damage: "2d8+2 piercing" },
            { name: "Javelin", type: "melee", attackBonus: 4, reach: 5, damage: "2d6+2 piercing" },
            { name: "Javelin (Ranged)", type: "ranged", attackBonus: 4, range: "30/120 ft.", damage: "1d6+2 piercing" }
        ]
    }};
