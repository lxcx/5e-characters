// Complete Dragon Collection - All Chromatic and Metallic Dragons
// Source: MM (Monster Manual)

const MONSTERS_DRAGONS = {
    // ===== CHROMATIC DRAGONS =====
    
    // BLACK DRAGONS
    "ancient-black-dragon": {
        name: "Ancient Black Dragon",
        source: "MM",
        size: "gargantuan",
        type: "dragon",
        alignment: "chaotic evil",
        ac: 22,
        acType: "natural armor",
        hp: 367,
        hitDice: "21d20+147",
        speed: { walk: 40, fly: 80, swim: 40 },
        abilityScores: { str: 27, dex: 14, con: 25, int: 16, wis: 15, cha: 19 },
        savingThrows: { dex: 9, con: 14, wis: 9, cha: 11 },
        skills: { perception: 16, stealth: 9 },
        damageImmunities: ["acid"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft."],
        languages: "Common, Draconic",
        cr: 21,
        traits: [
            { name: "Amphibious", description: "The dragon can breathe air and water." },
            { name: "Legendary Resistance (3/Day)", description: "If the dragon fails a saving throw, it can choose to succeed instead." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +15 to hit, reach 15 ft., one target. Hit: 19 (2d10+8) piercing damage plus 9 (2d8) acid damage." },
            { name: "Claw", description: "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 15 (2d6+8) slashing damage." },
            { name: "Tail", description: "Melee Weapon Attack: +15 to hit, reach 20 ft., one target. Hit: 17 (2d8+8) bludgeoning damage." },
            { name: "Frightful Presence", description: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute." },
            { name: "Acid Breath (Recharge 5-6)", description: "The dragon exhales acid in a 90-foot line that is 10 feet wide. Each creature in that line must make a DC 22 Dexterity saving throw, taking 67 (15d8) acid damage on a failed save, or half as much damage on a successful one." }
        ],
        legendaryActions: {
            perRound: 3,
            actions: [
                { name: "Detect", description: "The dragon makes a Wisdom (Perception) check." },
                { name: "Tail Attack", description: "The dragon makes a tail attack." },
                { name: "Wing Attack (Costs 2 Actions)", description: "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 23 Dexterity saving throw or take 15 (2d6+8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed." }
            ]
        }
    },
    "adult-black-dragon": {
        name: "Adult Black Dragon",
        source: "MM",
        size: "huge",
        type: "dragon",
        alignment: "chaotic evil",
        ac: 19,
        acType: "natural armor",
        hp: 195,
        hitDice: "17d12+85",
        speed: { walk: 40, fly: 80, swim: 40 },
        abilityScores: { str: 23, dex: 14, con: 21, int: 14, wis: 13, cha: 17 },
        savingThrows: { dex: 7, con: 10, wis: 6, cha: 8 },
        skills: { perception: 11, stealth: 7 },
        damageImmunities: ["acid"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft."],
        languages: "Common, Draconic",
        cr: 14,
        traits: [
            { name: "Amphibious", description: "The dragon can breathe air and water." },
            { name: "Legendary Resistance (3/Day)", description: "If the dragon fails a saving throw, it can choose to succeed instead." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10+6) piercing damage plus 4 (1d8) acid damage." },
            { name: "Claw", description: "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6+6) slashing damage." },
            { name: "Tail", description: "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8+6) bludgeoning damage." },
            { name: "Frightful Presence", description: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute." },
            { name: "Acid Breath (Recharge 5-6)", description: "The dragon exhales acid in a 60-foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 54 (12d8) acid damage on a failed save, or half as much damage on a successful one." }
        ],
        legendaryActions: {
            perRound: 3,
            actions: [
                { name: "Detect", description: "The dragon makes a Wisdom (Perception) check." },
                { name: "Tail Attack", description: "The dragon makes a tail attack." },
                { name: "Wing Attack (Costs 2 Actions)", description: "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6+6) bludgeoning damage and be knocked prone." }
            ]
        }
    },
    "young-black-dragon": {
        name: "Young Black Dragon",
        source: "MM",
        size: "large",
        type: "dragon",
        alignment: "chaotic evil",
        ac: 18,
        acType: "natural armor",
        hp: 127,
        hitDice: "15d10+45",
        speed: { walk: 40, fly: 80, swim: 40 },
        abilityScores: { str: 19, dex: 14, con: 17, int: 12, wis: 11, cha: 15 },
        savingThrows: { dex: 5, con: 6, wis: 3, cha: 5 },
        skills: { perception: 6, stealth: 5 },
        damageImmunities: ["acid"],
        senses: ["blindsight 30 ft.", "darkvision 120 ft."],
        languages: "Common, Draconic",
        cr: 7,
        traits: [
            { name: "Amphibious", description: "The dragon can breathe air and water." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10+4) piercing damage plus 4 (1d8) acid damage." },
            { name: "Claw", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6+4) slashing damage." },
            { name: "Acid Breath (Recharge 5-6)", description: "The dragon exhales acid in a 40-foot line that is 5 feet wide. Each creature in that line must make a DC 14 Dexterity saving throw, taking 49 (11d8) acid damage on a failed save, or half as much damage on a successful one." }
        ]
    },
    "black-dragon-wyrmling": {
        name: "Black Dragon Wyrmling",
        source: "MM",
        size: "medium",
        type: "dragon",
        alignment: "chaotic evil",
        ac: 17,
        acType: "natural armor",
        hp: 33,
        hitDice: "6d8+6",
        speed: { walk: 30, fly: 60, swim: 30 },
        abilityScores: { str: 15, dex: 14, con: 13, int: 10, wis: 11, cha: 13 },
        savingThrows: { dex: 4, con: 3, wis: 2, cha: 3 },
        skills: { perception: 4, stealth: 4 },
        damageImmunities: ["acid"],
        senses: ["blindsight 10 ft.", "darkvision 60 ft."],
        languages: "Draconic",
        cr: 2,
        traits: [
            { name: "Amphibious", description: "The dragon can breathe air and water." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10+2) piercing damage plus 2 (1d4) acid damage." },
            { name: "Acid Breath (Recharge 5-6)", description: "The dragon exhales acid in a 15-foot line that is 5 feet wide. Each creature in that line must make a DC 11 Dexterity saving throw, taking 22 (5d8) acid damage on a failed save, or half as much damage on a successful one." }
        ]
    },

    // BLUE DRAGONS
    "ancient-blue-dragon": {
        name: "Ancient Blue Dragon",
        source: "MM",
        size: "gargantuan",
        type: "dragon",
        alignment: "lawful evil",
        ac: 22,
        acType: "natural armor",
        hp: 481,
        hitDice: "26d20+208",
        speed: { walk: 40, fly: 80, burrow: 40 },
        abilityScores: { str: 29, dex: 10, con: 27, int: 18, wis: 17, cha: 21 },
        savingThrows: { dex: 7, con: 15, wis: 10, cha: 12 },
        skills: { perception: 17, stealth: 7 },
        damageImmunities: ["lightning"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft."],
        languages: "Common, Draconic",
        cr: 23,
        traits: [
            { name: "Legendary Resistance (3/Day)", description: "If the dragon fails a saving throw, it can choose to succeed instead." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +16 to hit, reach 15 ft., one target. Hit: 20 (2d10+9) piercing damage plus 11 (2d10) lightning damage." },
            { name: "Claw", description: "Melee Weapon Attack: +16 to hit, reach 10 ft., one target. Hit: 16 (2d6+9) slashing damage." },
            { name: "Tail", description: "Melee Weapon Attack: +16 to hit, reach 20 ft., one target. Hit: 18 (2d8+9) bludgeoning damage." },
            { name: "Frightful Presence", description: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 20 Wisdom saving throw or become frightened for 1 minute." },
            { name: "Lightning Breath (Recharge 5-6)", description: "The dragon exhales lightning in a 120-foot line that is 10 feet wide. Each creature in that line must make a DC 23 Dexterity saving throw, taking 88 (16d10) lightning damage on a failed save, or half as much damage on a successful one." }
        ],
        legendaryActions: {
            perRound: 3,
            actions: [
                { name: "Detect", description: "The dragon makes a Wisdom (Perception) check." },
                { name: "Tail Attack", description: "The dragon makes a tail attack." },
                { name: "Wing Attack (Costs 2 Actions)", description: "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 24 Dexterity saving throw or take 16 (2d6+9) bludgeoning damage and be knocked prone." }
            ]
        }
    },
    "adult-blue-dragon": {
        name: "Adult Blue Dragon",
        source: "MM",
        size: "huge",
        type: "dragon",
        alignment: "lawful evil",
        ac: 19,
        acType: "natural armor",
        hp: 225,
        hitDice: "18d12+108",
        speed: { walk: 40, fly: 80, burrow: 30 },
        abilityScores: { str: 25, dex: 10, con: 23, int: 16, wis: 15, cha: 19 },
        savingThrows: { dex: 5, con: 11, wis: 7, cha: 9 },
        skills: { perception: 12, stealth: 5 },
        damageImmunities: ["lightning"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft."],
        languages: "Common, Draconic",
        cr: 16,
        traits: [
            { name: "Legendary Resistance (3/Day)", description: "If the dragon fails a saving throw, it can choose to succeed instead." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 18 (2d10+7) piercing damage plus 5 (1d10) lightning damage." },
            { name: "Claw", description: "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 14 (2d6+7) slashing damage." },
            { name: "Tail", description: "Melee Weapon Attack: +12 to hit, reach 15 ft., one target. Hit: 16 (2d8+7) bludgeoning damage." },
            { name: "Frightful Presence", description: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 17 Wisdom saving throw or become frightened for 1 minute." },
            { name: "Lightning Breath (Recharge 5-6)", description: "The dragon exhales lightning in a 90-foot line that is 5 feet wide. Each creature in that line must make a DC 19 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one." }
        ],
        legendaryActions: {
            perRound: 3,
            actions: [
                { name: "Detect", description: "The dragon makes a Wisdom (Perception) check." },
                { name: "Tail Attack", description: "The dragon makes a tail attack." },
                { name: "Wing Attack (Costs 2 Actions)", description: "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 20 Dexterity saving throw or take 14 (2d6+7) bludgeoning damage and be knocked prone." }
            ]
        }
    },
    "young-blue-dragon": {
        name: "Young Blue Dragon",
        source: "MM",
        size: "large",
        type: "dragon",
        alignment: "lawful evil",
        ac: 18,
        acType: "natural armor",
        hp: 152,
        hitDice: "16d10+64",
        speed: { walk: 40, fly: 80, burrow: 20 },
        abilityScores: { str: 21, dex: 10, con: 19, int: 14, wis: 13, cha: 17 },
        savingThrows: { dex: 4, con: 8, wis: 5, cha: 7 },
        skills: { perception: 9, stealth: 4 },
        damageImmunities: ["lightning"],
        senses: ["blindsight 30 ft.", "darkvision 120 ft."],
        languages: "Common, Draconic",
        cr: 9,
        actions: [
            { name: "Multiattack", description: "The dragon makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 16 (2d10+5) piercing damage plus 5 (1d10) lightning damage." },
            { name: "Claw", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6+5) slashing damage." },
            { name: "Lightning Breath (Recharge 5-6)", description: "The dragon exhales lightning in a 60-foot line that is 5 feet wide. Each creature in that line must make a DC 16 Dexterity saving throw, taking 55 (10d10) lightning damage on a failed save, or half as much damage on a successful one." }
        ]
    },
    "blue-dragon-wyrmling": {
        name: "Blue Dragon Wyrmling",
        source: "MM",
        size: "medium",
        type: "dragon",
        alignment: "lawful evil",
        ac: 17,
        acType: "natural armor",
        hp: 52,
        hitDice: "8d8+16",
        speed: { walk: 30, fly: 60, burrow: 15 },
        abilityScores: { str: 17, dex: 10, con: 15, int: 12, wis: 11, cha: 15 },
        savingThrows: { dex: 2, con: 4, wis: 2, cha: 4 },
        skills: { perception: 4, stealth: 2 },
        damageImmunities: ["lightning"],
        senses: ["blindsight 10 ft.", "darkvision 60 ft."],
        languages: "Draconic",
        cr: 3,
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10+3) piercing damage plus 3 (1d6) lightning damage." },
            { name: "Lightning Breath (Recharge 5-6)", description: "The dragon exhales lightning in a 30-foot line that is 5 feet wide. Each creature in that line must make a DC 12 Dexterity saving throw, taking 22 (4d10) lightning damage on a failed save, or half as much damage on a successful one." }
        ]
    },

    // GREEN DRAGONS
    "ancient-green-dragon": {
        name: "Ancient Green Dragon",
        source: "MM",
        size: "gargantuan",
        type: "dragon",
        alignment: "lawful evil",
        ac: 21,
        acType: "natural armor",
        hp: 385,
        hitDice: "22d20+154",
        speed: { walk: 40, fly: 80, swim: 40 },
        abilityScores: { str: 27, dex: 12, con: 25, int: 20, wis: 17, cha: 19 },
        savingThrows: { dex: 8, con: 14, wis: 10, cha: 11 },
        skills: { deception: 11, insight: 10, perception: 17, persuasion: 11, stealth: 8 },
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft."],
        languages: "Common, Draconic",
        cr: 22,
        traits: [
            { name: "Amphibious", description: "The dragon can breathe air and water." },
            { name: "Legendary Resistance (3/Day)", description: "If the dragon fails a saving throw, it can choose to succeed instead." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +15 to hit, reach 15 ft., one target. Hit: 19 (2d10+8) piercing damage plus 10 (3d6) poison damage." },
            { name: "Claw", description: "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 22 (4d6+8) slashing damage." },
            { name: "Tail", description: "Melee Weapon Attack: +15 to hit, reach 20 ft., one target. Hit: 17 (2d8+8) bludgeoning damage." },
            { name: "Frightful Presence", description: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute." },
            { name: "Poison Breath (Recharge 5-6)", description: "The dragon exhales poisonous gas in a 90-foot cone. Each creature in that area must make a DC 22 Constitution saving throw, taking 77 (22d6) poison damage on a failed save, or half as much damage on a successful one." }
        ],
        legendaryActions: {
            perRound: 3,
            actions: [
                { name: "Detect", description: "The dragon makes a Wisdom (Perception) check." },
                { name: "Tail Attack", description: "The dragon makes a tail attack." },
                { name: "Wing Attack (Costs 2 Actions)", description: "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 23 Dexterity saving throw or take 15 (2d6+8) bludgeoning damage and be knocked prone." }
            ]
        }
    },
    "adult-green-dragon": {
        name: "Adult Green Dragon",
        source: "MM",
        size: "huge",
        type: "dragon",
        alignment: "lawful evil",
        ac: 19,
        acType: "natural armor",
        hp: 207,
        hitDice: "18d12+90",
        speed: { walk: 40, fly: 80, swim: 40 },
        abilityScores: { str: 23, dex: 12, con: 21, int: 18, wis: 15, cha: 17 },
        savingThrows: { dex: 6, con: 10, wis: 7, cha: 8 },
        skills: { deception: 8, insight: 7, perception: 12, persuasion: 8, stealth: 6 },
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft."],
        languages: "Common, Draconic",
        cr: 15,
        traits: [
            { name: "Amphibious", description: "The dragon can breathe air and water." },
            { name: "Legendary Resistance (3/Day)", description: "If the dragon fails a saving throw, it can choose to succeed instead." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10+6) piercing damage plus 7 (2d6) poison damage." },
            { name: "Claw", description: "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6+6) slashing damage." },
            { name: "Tail", description: "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8+6) bludgeoning damage." },
            { name: "Frightful Presence", description: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute." },
            { name: "Poison Breath (Recharge 5-6)", description: "The dragon exhales poisonous gas in a 60-foot cone. Each creature in that area must make a DC 18 Constitution saving throw, taking 56 (16d6) poison damage on a failed save, or half as much damage on a successful one." }
        ],
        legendaryActions: {
            perRound: 3,
            actions: [
                { name: "Detect", description: "The dragon makes a Wisdom (Perception) check." },
                { name: "Tail Attack", description: "The dragon makes a tail attack." },
                { name: "Wing Attack (Costs 2 Actions)", description: "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6+6) bludgeoning damage and be knocked prone." }
            ]
        }
    },
    "young-green-dragon": {
        name: "Young Green Dragon",
        source: "MM",
        size: "large",
        type: "dragon",
        alignment: "lawful evil",
        ac: 18,
        acType: "natural armor",
        hp: 136,
        hitDice: "16d10+48",
        speed: { walk: 40, fly: 80, swim: 40 },
        abilityScores: { str: 19, dex: 12, con: 17, int: 16, wis: 13, cha: 15 },
        savingThrows: { dex: 4, con: 6, wis: 4, cha: 5 },
        skills: { deception: 5, perception: 7, stealth: 4 },
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["blindsight 30 ft.", "darkvision 120 ft."],
        languages: "Common, Draconic",
        cr: 8,
        traits: [
            { name: "Amphibious", description: "The dragon can breathe air and water." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10+4) piercing damage plus 7 (2d6) poison damage." },
            { name: "Claw", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6+4) slashing damage." },
            { name: "Poison Breath (Recharge 5-6)", description: "The dragon exhales poisonous gas in a 30-foot cone. Each creature in that area must make a DC 14 Constitution saving throw, taking 42 (12d6) poison damage on a failed save, or half as much damage on a successful one." }
        ]
    },
    "green-dragon-wyrmling": {
        name: "Green Dragon Wyrmling",
        source: "MM",
        size: "medium",
        type: "dragon",
        alignment: "lawful evil",
        ac: 17,
        acType: "natural armor",
        hp: 38,
        hitDice: "7d8+7",
        speed: { walk: 30, fly: 60, swim: 30 },
        abilityScores: { str: 15, dex: 12, con: 13, int: 14, wis: 11, cha: 13 },
        savingThrows: { dex: 3, con: 3, wis: 2, cha: 3 },
        skills: { perception: 4, stealth: 3 },
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["blindsight 10 ft.", "darkvision 60 ft."],
        languages: "Draconic",
        cr: 2,
        traits: [
            { name: "Amphibious", description: "The dragon can breathe air and water." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10+2) piercing damage plus 3 (1d6) poison damage." },
            { name: "Poison Breath (Recharge 5-6)", description: "The dragon exhales poisonous gas in a 15-foot cone. Each creature in that area must make a DC 11 Constitution saving throw, taking 21 (6d6) poison damage on a failed save, or half as much damage on a successful one." }
        ]
    },

    // RED DRAGONS
    "ancient-red-dragon": {
        name: "Ancient Red Dragon",
        source: "MM",
        size: "gargantuan",
        type: "dragon",
        alignment: "chaotic evil",
        ac: 22,
        acType: "natural armor",
        hp: 546,
        hitDice: "28d20+252",
        speed: { walk: 40, fly: 80, climb: 40 },
        abilityScores: { str: 30, dex: 10, con: 29, int: 18, wis: 15, cha: 23 },
        savingThrows: { dex: 7, con: 16, wis: 9, cha: 13 },
        skills: { perception: 16, stealth: 7 },
        damageImmunities: ["fire"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft."],
        languages: "Common, Draconic",
        cr: 24,
        traits: [
            { name: "Legendary Resistance (3/Day)", description: "If the dragon fails a saving throw, it can choose to succeed instead." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +17 to hit, reach 15 ft., one target. Hit: 21 (2d10+10) piercing damage plus 14 (4d6) fire damage." },
            { name: "Claw", description: "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 17 (2d6+10) slashing damage." },
            { name: "Tail", description: "Melee Weapon Attack: +17 to hit, reach 20 ft., one target. Hit: 19 (2d8+10) bludgeoning damage." },
            { name: "Frightful Presence", description: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 21 Wisdom saving throw or become frightened for 1 minute." },
            { name: "Fire Breath (Recharge 5-6)", description: "The dragon exhales fire in a 90-foot cone. Each creature in that area must make a DC 24 Dexterity saving throw, taking 91 (26d6) fire damage on a failed save, or half as much damage on a successful one." }
        ],
        legendaryActions: {
            perRound: 3,
            actions: [
                { name: "Detect", description: "The dragon makes a Wisdom (Perception) check." },
                { name: "Tail Attack", description: "The dragon makes a tail attack." },
                { name: "Wing Attack (Costs 2 Actions)", description: "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 25 Dexterity saving throw or take 17 (2d6+10) bludgeoning damage and be knocked prone." }
            ]
        }
    },
    "adult-red-dragon": {
        name: "Adult Red Dragon",
        source: "MM",
        size: "huge",
        type: "dragon",
        alignment: "chaotic evil",
        ac: 19,
        acType: "natural armor",
        hp: 256,
        hitDice: "19d12+133",
        speed: { walk: 40, fly: 80, climb: 40 },
        abilityScores: { str: 27, dex: 10, con: 25, int: 16, wis: 13, cha: 21 },
        savingThrows: { dex: 6, con: 13, wis: 7, cha: 11 },
        skills: { perception: 13, stealth: 6 },
        damageImmunities: ["fire"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft."],
        languages: "Common, Draconic",
        cr: 17,
        traits: [
            { name: "Legendary Resistance (3/Day)", description: "If the dragon fails a saving throw, it can choose to succeed instead." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 19 (2d10+8) piercing damage plus 7 (2d6) fire damage." },
            { name: "Claw", description: "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 15 (2d6+8) slashing damage." },
            { name: "Tail", description: "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 17 (2d8+8) bludgeoning damage." },
            { name: "Frightful Presence", description: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute." },
            { name: "Fire Breath (Recharge 5-6)", description: "The dragon exhales fire in a 60-foot cone. Each creature in that area must make a DC 21 Dexterity saving throw, taking 63 (18d6) fire damage on a failed save, or half as much damage on a successful one." }
        ],
        legendaryActions: {
            perRound: 3,
            actions: [
                { name: "Detect", description: "The dragon makes a Wisdom (Perception) check." },
                { name: "Tail Attack", description: "The dragon makes a tail attack." },
                { name: "Wing Attack (Costs 2 Actions)", description: "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6+8) bludgeoning damage and be knocked prone." }
            ]
        }
    },
    "young-red-dragon": {
        name: "Young Red Dragon",
        source: "MM",
        size: "large",
        type: "dragon",
        alignment: "chaotic evil",
        ac: 18,
        acType: "natural armor",
        hp: 178,
        hitDice: "17d10+85",
        speed: { walk: 40, fly: 80, climb: 40 },
        abilityScores: { str: 23, dex: 10, con: 21, int: 14, wis: 11, cha: 19 },
        savingThrows: { dex: 4, con: 9, wis: 4, cha: 8 },
        skills: { perception: 8, stealth: 4 },
        damageImmunities: ["fire"],
        senses: ["blindsight 30 ft.", "darkvision 120 ft."],
        languages: "Common, Draconic",
        cr: 10,
        actions: [
            { name: "Multiattack", description: "The dragon makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 17 (2d10+6) piercing damage plus 3 (1d6) fire damage." },
            { name: "Claw", description: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 13 (2d6+6) slashing damage." },
            { name: "Fire Breath (Recharge 5-6)", description: "The dragon exhales fire in a 30-foot cone. Each creature in that area must make a DC 17 Dexterity saving throw, taking 56 (16d6) fire damage on a failed save, or half as much damage on a successful one." }
        ]
    },
    "red-dragon-wyrmling": {
        name: "Red Dragon Wyrmling",
        source: "MM",
        size: "medium",
        type: "dragon",
        alignment: "chaotic evil",
        ac: 17,
        acType: "natural armor",
        hp: 75,
        hitDice: "10d8+30",
        speed: { walk: 30, fly: 60, climb: 30 },
        abilityScores: { str: 19, dex: 10, con: 17, int: 12, wis: 11, cha: 15 },
        savingThrows: { dex: 2, con: 5, wis: 2, cha: 4 },
        skills: { perception: 4, stealth: 2 },
        damageImmunities: ["fire"],
        senses: ["blindsight 10 ft.", "darkvision 60 ft."],
        languages: "Draconic",
        cr: 4,
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (1d10+4) piercing damage plus 3 (1d6) fire damage." },
            { name: "Fire Breath (Recharge 5-6)", description: "The dragon exhales fire in a 15-foot cone. Each creature in that area must make a DC 13 Dexterity saving throw, taking 24 (7d6) fire damage on a failed save, or half as much damage on a successful one." }
        ]
    },

    // WHITE DRAGONS
    "ancient-white-dragon": {
        name: "Ancient White Dragon",
        source: "MM",
        size: "gargantuan",
        type: "dragon",
        alignment: "chaotic evil",
        ac: 20,
        acType: "natural armor",
        hp: 333,
        hitDice: "18d20+144",
        speed: { walk: 40, fly: 80, burrow: 40, swim: 40 },
        abilityScores: { str: 26, dex: 10, con: 26, int: 10, wis: 13, cha: 14 },
        savingThrows: { dex: 6, con: 14, wis: 7, cha: 8 },
        skills: { perception: 13, stealth: 6 },
        damageImmunities: ["cold"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft."],
        languages: "Common, Draconic",
        cr: 20,
        traits: [
            { name: "Ice Walk", description: "The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn't cost it extra movement." },
            { name: "Legendary Resistance (3/Day)", description: "If the dragon fails a saving throw, it can choose to succeed instead." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 19 (2d10+8) piercing damage plus 9 (2d8) cold damage." },
            { name: "Claw", description: "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 15 (2d6+8) slashing damage." },
            { name: "Tail", description: "Melee Weapon Attack: +14 to hit, reach 20 ft., one target. Hit: 17 (2d8+8) bludgeoning damage." },
            { name: "Frightful Presence", description: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute." },
            { name: "Cold Breath (Recharge 5-6)", description: "The dragon exhales an icy blast in a 90-foot cone. Each creature in that area must make a DC 22 Constitution saving throw, taking 72 (16d8) cold damage on a failed save, or half as much damage on a successful one." }
        ],
        legendaryActions: {
            perRound: 3,
            actions: [
                { name: "Detect", description: "The dragon makes a Wisdom (Perception) check." },
                { name: "Tail Attack", description: "The dragon makes a tail attack." },
                { name: "Wing Attack (Costs 2 Actions)", description: "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6+8) bludgeoning damage and be knocked prone." }
            ]
        }
    },
    "adult-white-dragon": {
        name: "Adult White Dragon",
        source: "MM",
        size: "huge",
        type: "dragon",
        alignment: "chaotic evil",
        ac: 18,
        acType: "natural armor",
        hp: 200,
        hitDice: "16d12+96",
        speed: { walk: 40, fly: 80, burrow: 30, swim: 40 },
        abilityScores: { str: 22, dex: 10, con: 22, int: 8, wis: 12, cha: 12 },
        savingThrows: { dex: 5, con: 11, wis: 6, cha: 6 },
        skills: { perception: 11, stealth: 5 },
        damageImmunities: ["cold"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft."],
        languages: "Common, Draconic",
        cr: 13,
        traits: [
            { name: "Ice Walk", description: "The dragon can move across and climb icy surfaces without needing to make an ability check." },
            { name: "Legendary Resistance (3/Day)", description: "If the dragon fails a saving throw, it can choose to succeed instead." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10+6) piercing damage plus 4 (1d8) cold damage." },
            { name: "Claw", description: "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6+6) slashing damage." },
            { name: "Tail", description: "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8+6) bludgeoning damage." },
            { name: "Frightful Presence", description: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 14 Wisdom saving throw or become frightened for 1 minute." },
            { name: "Cold Breath (Recharge 5-6)", description: "The dragon exhales an icy blast in a 60-foot cone. Each creature in that area must make a DC 19 Constitution saving throw, taking 54 (12d8) cold damage on a failed save, or half as much damage on a successful one." }
        ],
        legendaryActions: {
            perRound: 3,
            actions: [
                { name: "Detect", description: "The dragon makes a Wisdom (Perception) check." },
                { name: "Tail Attack", description: "The dragon makes a tail attack." },
                { name: "Wing Attack (Costs 2 Actions)", description: "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6+6) bludgeoning damage and be knocked prone." }
            ]
        }
    },
    "young-white-dragon": {
        name: "Young White Dragon",
        source: "MM",
        size: "large",
        type: "dragon",
        alignment: "chaotic evil",
        ac: 17,
        acType: "natural armor",
        hp: 133,
        hitDice: "14d10+56",
        speed: { walk: 40, fly: 80, burrow: 20, swim: 40 },
        abilityScores: { str: 18, dex: 10, con: 18, int: 6, wis: 11, cha: 12 },
        savingThrows: { dex: 3, con: 7, wis: 3, cha: 4 },
        skills: { perception: 6, stealth: 3 },
        damageImmunities: ["cold"],
        senses: ["blindsight 30 ft.", "darkvision 120 ft."],
        languages: "Common, Draconic",
        cr: 6,
        traits: [
            { name: "Ice Walk", description: "The dragon can move across and climb icy surfaces without needing to make an ability check." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10+4) piercing damage plus 4 (1d8) cold damage." },
            { name: "Claw", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6+4) slashing damage." },
            { name: "Cold Breath (Recharge 5-6)", description: "The dragon exhales an icy blast in a 30-foot cone. Each creature in that area must make a DC 15 Constitution saving throw, taking 45 (10d8) cold damage on a failed save, or half as much damage on a successful one." }
        ]
    },
    "white-dragon-wyrmling": {
        name: "White Dragon Wyrmling",
        source: "MM",
        size: "medium",
        type: "dragon",
        alignment: "chaotic evil",
        ac: 16,
        acType: "natural armor",
        hp: 32,
        hitDice: "5d8+10",
        speed: { walk: 30, fly: 60, burrow: 15, swim: 30 },
        abilityScores: { str: 14, dex: 10, con: 14, int: 5, wis: 10, cha: 11 },
        savingThrows: { dex: 2, con: 4, wis: 2, cha: 2 },
        skills: { perception: 4, stealth: 2 },
        damageImmunities: ["cold"],
        senses: ["blindsight 10 ft.", "darkvision 60 ft."],
        languages: "Draconic",
        cr: 2,
        traits: [
            { name: "Ice Walk", description: "The dragon can move across and climb icy surfaces without needing to make an ability check." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10+2) piercing damage plus 2 (1d4) cold damage." },
            { name: "Cold Breath (Recharge 5-6)", description: "The dragon exhales an icy blast in a 15-foot cone. Each creature in that area must make a DC 12 Constitution saving throw, taking 22 (5d8) cold damage on a failed save, or half as much damage on a successful one." }
        ]
    },

    // ===== METALLIC DRAGONS =====
    
    // BRASS DRAGONS
    "ancient-brass-dragon": {
        name: "Ancient Brass Dragon",
        source: "MM",
        size: "gargantuan",
        type: "dragon",
        alignment: "chaotic good",
        ac: 20,
        acType: "natural armor",
        hp: 297,
        hitDice: "17d20+119",
        speed: { walk: 40, fly: 80, burrow: 40 },
        abilityScores: { str: 27, dex: 10, con: 25, int: 16, wis: 15, cha: 19 },
        savingThrows: { dex: 6, con: 13, wis: 8, cha: 10 },
        skills: { history: 9, perception: 14, persuasion: 10, stealth: 6 },
        damageImmunities: ["fire"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft."],
        languages: "Common, Draconic",
        cr: 20,
        traits: [
            { name: "Legendary Resistance (3/Day)", description: "If the dragon fails a saving throw, it can choose to succeed instead." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 19 (2d10+8) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 15 (2d6+8) slashing damage." },
            { name: "Tail", description: "Melee Weapon Attack: +14 to hit, reach 20 ft., one target. Hit: 17 (2d8+8) bludgeoning damage." },
            { name: "Frightful Presence", description: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 18 Wisdom saving throw or become frightened for 1 minute." },
            { name: "Breath Weapons (Recharge 5-6)", description: "The dragon uses one of the following breath weapons: Fire Breath (90-foot line, DC 21 Dex save, 56 (16d6) fire damage) or Sleep Breath (90-foot cone, DC 21 Con save or fall unconscious for 10 minutes)." }
        ],
        legendaryActions: {
            perRound: 3,
            actions: [
                { name: "Detect", description: "The dragon makes a Wisdom (Perception) check." },
                { name: "Tail Attack", description: "The dragon makes a tail attack." },
                { name: "Wing Attack (Costs 2 Actions)", description: "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6+8) bludgeoning damage and be knocked prone." }
            ]
        }
    },
    "adult-brass-dragon": {
        name: "Adult Brass Dragon",
        source: "MM",
        size: "huge",
        type: "dragon",
        alignment: "chaotic good",
        ac: 18,
        acType: "natural armor",
        hp: 172,
        hitDice: "15d12+75",
        speed: { walk: 40, fly: 80, burrow: 30 },
        abilityScores: { str: 23, dex: 10, con: 21, int: 14, wis: 13, cha: 17 },
        savingThrows: { dex: 5, con: 10, wis: 6, cha: 8 },
        skills: { history: 7, perception: 11, persuasion: 8, stealth: 5 },
        damageImmunities: ["fire"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft."],
        languages: "Common, Draconic",
        cr: 13,
        traits: [
            { name: "Legendary Resistance (3/Day)", description: "If the dragon fails a saving throw, it can choose to succeed instead." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10+6) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6+6) slashing damage." },
            { name: "Tail", description: "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8+6) bludgeoning damage." },
            { name: "Frightful Presence", description: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute." },
            { name: "Breath Weapons (Recharge 5-6)", description: "The dragon uses one of the following breath weapons: Fire Breath (60-foot line, DC 18 Dex save, 45 (13d6) fire damage) or Sleep Breath (60-foot cone, DC 18 Con save or fall unconscious for 10 minutes)." }
        ],
        legendaryActions: {
            perRound: 3,
            actions: [
                { name: "Detect", description: "The dragon makes a Wisdom (Perception) check." },
                { name: "Tail Attack", description: "The dragon makes a tail attack." },
                { name: "Wing Attack (Costs 2 Actions)", description: "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6+6) bludgeoning damage and be knocked prone." }
            ]
        }
    },
    "young-brass-dragon": {
        name: "Young Brass Dragon",
        source: "MM",
        size: "large",
        type: "dragon",
        alignment: "chaotic good",
        ac: 17,
        acType: "natural armor",
        hp: 110,
        hitDice: "13d10+39",
        speed: { walk: 40, fly: 80, burrow: 20 },
        abilityScores: { str: 19, dex: 10, con: 17, int: 12, wis: 11, cha: 15 },
        savingThrows: { dex: 3, con: 6, wis: 3, cha: 5 },
        skills: { perception: 6, persuasion: 5, stealth: 3 },
        damageImmunities: ["fire"],
        senses: ["blindsight 30 ft.", "darkvision 120 ft."],
        languages: "Common, Draconic",
        cr: 6,
        actions: [
            { name: "Multiattack", description: "The dragon makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10+4) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6+4) slashing damage." },
            { name: "Breath Weapons (Recharge 5-6)", description: "The dragon uses one of the following breath weapons: Fire Breath (40-foot line, DC 14 Dex save, 42 (12d6) fire damage) or Sleep Breath (30-foot cone, DC 14 Con save or fall unconscious for 5 minutes)." }
        ]
    },
    "brass-dragon-wyrmling": {
        name: "Brass Dragon Wyrmling",
        source: "MM",
        size: "medium",
        type: "dragon",
        alignment: "chaotic good",
        ac: 16,
        acType: "natural armor",
        hp: 16,
        hitDice: "3d8+3",
        speed: { walk: 30, fly: 60, burrow: 15 },
        abilityScores: { str: 15, dex: 10, con: 13, int: 10, wis: 11, cha: 13 },
        savingThrows: { dex: 2, con: 3, wis: 2, cha: 3 },
        skills: { perception: 4, stealth: 2 },
        damageImmunities: ["fire"],
        senses: ["blindsight 10 ft.", "darkvision 60 ft."],
        languages: "Draconic",
        cr: 1,
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10+2) piercing damage." },
            { name: "Breath Weapons (Recharge 5-6)", description: "The dragon uses one of the following breath weapons: Fire Breath (20-foot line, DC 11 Dex save, 14 (4d6) fire damage) or Sleep Breath (15-foot cone, DC 11 Con save or fall unconscious for 1 minute)." }
        ]
    },

    // BRONZE DRAGONS
    "ancient-bronze-dragon": {
        name: "Ancient Bronze Dragon",
        source: "MM",
        size: "gargantuan",
        type: "dragon",
        alignment: "lawful good",
        ac: 22,
        acType: "natural armor",
        hp: 444,
        hitDice: "24d20+192",
        speed: { walk: 40, fly: 80, swim: 40 },
        abilityScores: { str: 29, dex: 10, con: 27, int: 18, wis: 17, cha: 21 },
        savingThrows: { dex: 7, con: 15, wis: 10, cha: 12 },
        skills: { insight: 10, perception: 17, stealth: 7 },
        damageImmunities: ["lightning"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft."],
        languages: "Common, Draconic",
        cr: 22,
        traits: [
            { name: "Amphibious", description: "The dragon can breathe air and water." },
            { name: "Legendary Resistance (3/Day)", description: "If the dragon fails a saving throw, it can choose to succeed instead." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +16 to hit, reach 15 ft., one target. Hit: 20 (2d10+9) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +16 to hit, reach 10 ft., one target. Hit: 16 (2d6+9) slashing damage." },
            { name: "Tail", description: "Melee Weapon Attack: +16 to hit, reach 20 ft., one target. Hit: 18 (2d8+9) bludgeoning damage." },
            { name: "Frightful Presence", description: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 20 Wisdom saving throw or become frightened for 1 minute." },
            { name: "Breath Weapons (Recharge 5-6)", description: "The dragon uses one of the following breath weapons: Lightning Breath (120-foot line, DC 23 Dex save, 88 (16d10) lightning damage) or Repulsion Breath (30-foot cone, DC 23 Str save or pushed 60 feet away)." },
            { name: "Change Shape", description: "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form." }
        ],
        legendaryActions: {
            perRound: 3,
            actions: [
                { name: "Detect", description: "The dragon makes a Wisdom (Perception) check." },
                { name: "Tail Attack", description: "The dragon makes a tail attack." },
                { name: "Wing Attack (Costs 2 Actions)", description: "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 24 Dexterity saving throw or take 16 (2d6+9) bludgeoning damage and be knocked prone." }
            ]
        }
    },
    "adult-bronze-dragon": {
        name: "Adult Bronze Dragon",
        source: "MM",
        size: "huge",
        type: "dragon",
        alignment: "lawful good",
        ac: 19,
        acType: "natural armor",
        hp: 212,
        hitDice: "17d12+102",
        speed: { walk: 40, fly: 80, swim: 40 },
        abilityScores: { str: 25, dex: 10, con: 23, int: 16, wis: 15, cha: 19 },
        savingThrows: { dex: 5, con: 11, wis: 7, cha: 9 },
        skills: { insight: 7, perception: 12, stealth: 5 },
        damageImmunities: ["lightning"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft."],
        languages: "Common, Draconic",
        cr: 15,
        traits: [
            { name: "Amphibious", description: "The dragon can breathe air and water." },
            { name: "Legendary Resistance (3/Day)", description: "If the dragon fails a saving throw, it can choose to succeed instead." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 18 (2d10+7) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 14 (2d6+7) slashing damage." },
            { name: "Tail", description: "Melee Weapon Attack: +12 to hit, reach 15 ft., one target. Hit: 16 (2d8+7) bludgeoning damage." },
            { name: "Frightful Presence", description: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 17 Wisdom saving throw or become frightened for 1 minute." },
            { name: "Breath Weapons (Recharge 5-6)", description: "The dragon uses one of the following breath weapons: Lightning Breath (90-foot line, DC 19 Dex save, 66 (12d10) lightning damage) or Repulsion Breath (30-foot cone, DC 19 Str save or pushed 60 feet away)." },
            { name: "Change Shape", description: "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form." }
        ],
        legendaryActions: {
            perRound: 3,
            actions: [
                { name: "Detect", description: "The dragon makes a Wisdom (Perception) check." },
                { name: "Tail Attack", description: "The dragon makes a tail attack." },
                { name: "Wing Attack (Costs 2 Actions)", description: "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 20 Dexterity saving throw or take 14 (2d6+7) bludgeoning damage and be knocked prone." }
            ]
        }
    },
    "young-bronze-dragon": {
        name: "Young Bronze Dragon",
        source: "MM",
        size: "large",
        type: "dragon",
        alignment: "lawful good",
        ac: 18,
        acType: "natural armor",
        hp: 142,
        hitDice: "15d10+60",
        speed: { walk: 40, fly: 80, swim: 40 },
        abilityScores: { str: 21, dex: 10, con: 19, int: 14, wis: 13, cha: 17 },
        savingThrows: { dex: 3, con: 7, wis: 4, cha: 6 },
        skills: { insight: 4, perception: 7, stealth: 3 },
        damageImmunities: ["lightning"],
        senses: ["blindsight 30 ft.", "darkvision 120 ft."],
        languages: "Common, Draconic",
        cr: 8,
        traits: [
            { name: "Amphibious", description: "The dragon can breathe air and water." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 16 (2d10+5) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 12 (2d6+5) slashing damage." },
            { name: "Breath Weapons (Recharge 5-6)", description: "The dragon uses one of the following breath weapons: Lightning Breath (60-foot line, DC 15 Dex save, 55 (10d10) lightning damage) or Repulsion Breath (30-foot cone, DC 15 Str save or pushed 40 feet away)." }
        ]
    },
    "bronze-dragon-wyrmling": {
        name: "Bronze Dragon Wyrmling",
        source: "MM",
        size: "medium",
        type: "dragon",
        alignment: "lawful good",
        ac: 17,
        acType: "natural armor",
        hp: 32,
        hitDice: "5d8+10",
        speed: { walk: 30, fly: 60, swim: 30 },
        abilityScores: { str: 17, dex: 10, con: 15, int: 12, wis: 11, cha: 15 },
        savingThrows: { dex: 2, con: 4, wis: 2, cha: 4 },
        skills: { perception: 4, stealth: 2 },
        damageImmunities: ["lightning"],
        senses: ["blindsight 10 ft.", "darkvision 60 ft."],
        languages: "Draconic",
        cr: 2,
        traits: [
            { name: "Amphibious", description: "The dragon can breathe air and water." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10+3) piercing damage." },
            { name: "Breath Weapons (Recharge 5-6)", description: "The dragon uses one of the following breath weapons: Lightning Breath (40-foot line, DC 12 Dex save, 16 (3d10) lightning damage) or Repulsion Breath (30-foot cone, DC 12 Str save or pushed 30 feet away)." }
        ]
    },

    // COPPER DRAGONS
    "ancient-copper-dragon": {
        name: "Ancient Copper Dragon",
        source: "MM",
        size: "gargantuan",
        type: "dragon",
        alignment: "chaotic good",
        ac: 21,
        acType: "natural armor",
        hp: 350,
        hitDice: "20d20+140",
        speed: { walk: 40, fly: 80, climb: 40 },
        abilityScores: { str: 27, dex: 12, con: 25, int: 20, wis: 17, cha: 19 },
        savingThrows: { dex: 8, con: 14, wis: 10, cha: 11 },
        skills: { deception: 11, perception: 17, stealth: 8 },
        damageImmunities: ["acid"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft."],
        languages: "Common, Draconic",
        cr: 21,
        traits: [
            { name: "Legendary Resistance (3/Day)", description: "If the dragon fails a saving throw, it can choose to succeed instead." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +15 to hit, reach 15 ft., one target. Hit: 19 (2d10+8) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 15 (2d6+8) slashing damage." },
            { name: "Tail", description: "Melee Weapon Attack: +15 to hit, reach 20 ft., one target. Hit: 17 (2d8+8) bludgeoning damage." },
            { name: "Frightful Presence", description: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute." },
            { name: "Breath Weapons (Recharge 5-6)", description: "The dragon uses one of the following breath weapons: Acid Breath (90-foot line, DC 22 Dex save, 63 (14d8) acid damage) or Slowing Breath (90-foot cone, DC 22 Con save or slowed for 1 minute)." },
            { name: "Change Shape", description: "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form." }
        ],
        legendaryActions: {
            perRound: 3,
            actions: [
                { name: "Detect", description: "The dragon makes a Wisdom (Perception) check." },
                { name: "Tail Attack", description: "The dragon makes a tail attack." },
                { name: "Wing Attack (Costs 2 Actions)", description: "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 23 Dexterity saving throw or take 15 (2d6+8) bludgeoning damage and be knocked prone." }
            ]
        }
    },
    "adult-copper-dragon": {
        name: "Adult Copper Dragon",
        source: "MM",
        size: "huge",
        type: "dragon",
        alignment: "chaotic good",
        ac: 18,
        acType: "natural armor",
        hp: 184,
        hitDice: "16d12+80",
        speed: { walk: 40, fly: 80, climb: 40 },
        abilityScores: { str: 23, dex: 12, con: 21, int: 18, wis: 15, cha: 17 },
        savingThrows: { dex: 6, con: 10, wis: 7, cha: 8 },
        skills: { deception: 8, perception: 12, stealth: 6 },
        damageImmunities: ["acid"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft."],
        languages: "Common, Draconic",
        cr: 14,
        traits: [
            { name: "Legendary Resistance (3/Day)", description: "If the dragon fails a saving throw, it can choose to succeed instead." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10+6) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6+6) slashing damage." },
            { name: "Tail", description: "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8+6) bludgeoning damage." },
            { name: "Frightful Presence", description: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute." },
            { name: "Breath Weapons (Recharge 5-6)", description: "The dragon uses one of the following breath weapons: Acid Breath (60-foot line, DC 18 Dex save, 54 (12d8) acid damage) or Slowing Breath (60-foot cone, DC 18 Con save or slowed for 1 minute)." }
        ],
        legendaryActions: {
            perRound: 3,
            actions: [
                { name: "Detect", description: "The dragon makes a Wisdom (Perception) check." },
                { name: "Tail Attack", description: "The dragon makes a tail attack." },
                { name: "Wing Attack (Costs 2 Actions)", description: "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6+6) bludgeoning damage and be knocked prone." }
            ]
        }
    },
    "young-copper-dragon": {
        name: "Young Copper Dragon",
        source: "MM",
        size: "large",
        type: "dragon",
        alignment: "chaotic good",
        ac: 17,
        acType: "natural armor",
        hp: 119,
        hitDice: "14d10+42",
        speed: { walk: 40, fly: 80, climb: 40 },
        abilityScores: { str: 19, dex: 12, con: 17, int: 16, wis: 13, cha: 15 },
        savingThrows: { dex: 4, con: 6, wis: 4, cha: 5 },
        skills: { deception: 5, perception: 7, stealth: 4 },
        damageImmunities: ["acid"],
        senses: ["blindsight 30 ft.", "darkvision 120 ft."],
        languages: "Common, Draconic",
        cr: 7,
        actions: [
            { name: "Multiattack", description: "The dragon makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10+4) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6+4) slashing damage." },
            { name: "Breath Weapons (Recharge 5-6)", description: "The dragon uses one of the following breath weapons: Acid Breath (40-foot line, DC 14 Dex save, 40 (9d8) acid damage) or Slowing Breath (30-foot cone, DC 14 Con save or slowed for 1 minute)." }
        ]
    },
    "copper-dragon-wyrmling": {
        name: "Copper Dragon Wyrmling",
        source: "MM",
        size: "medium",
        type: "dragon",
        alignment: "chaotic good",
        ac: 16,
        acType: "natural armor",
        hp: 22,
        hitDice: "4d8+4",
        speed: { walk: 30, fly: 60, climb: 30 },
        abilityScores: { str: 15, dex: 12, con: 13, int: 14, wis: 11, cha: 13 },
        savingThrows: { dex: 3, con: 3, wis: 2, cha: 3 },
        skills: { perception: 4, stealth: 3 },
        damageImmunities: ["acid"],
        senses: ["blindsight 10 ft.", "darkvision 60 ft."],
        languages: "Draconic",
        cr: 1,
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10+2) piercing damage." },
            { name: "Breath Weapons (Recharge 5-6)", description: "The dragon uses one of the following breath weapons: Acid Breath (20-foot line, DC 11 Dex save, 18 (4d8) acid damage) or Slowing Breath (15-foot cone, DC 11 Con save or slowed for 1 minute)." }
        ]
    },

    // GOLD DRAGONS
    "ancient-gold-dragon": {
        name: "Ancient Gold Dragon",
        source: "MM",
        size: "gargantuan",
        type: "dragon",
        alignment: "lawful good",
        ac: 22,
        acType: "natural armor",
        hp: 546,
        hitDice: "28d20+252",
        speed: { walk: 40, fly: 80, swim: 40 },
        abilityScores: { str: 30, dex: 14, con: 29, int: 18, wis: 17, cha: 28 },
        savingThrows: { dex: 9, con: 16, wis: 10, cha: 16 },
        skills: { insight: 10, perception: 17, persuasion: 16, stealth: 9 },
        damageImmunities: ["fire"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft."],
        languages: "Common, Draconic",
        cr: 24,
        traits: [
            { name: "Amphibious", description: "The dragon can breathe air and water." },
            { name: "Legendary Resistance (3/Day)", description: "If the dragon fails a saving throw, it can choose to succeed instead." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +17 to hit, reach 15 ft., one target. Hit: 21 (2d10+10) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 17 (2d6+10) slashing damage." },
            { name: "Tail", description: "Melee Weapon Attack: +17 to hit, reach 20 ft., one target. Hit: 19 (2d8+10) bludgeoning damage." },
            { name: "Frightful Presence", description: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 24 Wisdom saving throw or become frightened for 1 minute." },
            { name: "Breath Weapons (Recharge 5-6)", description: "The dragon uses one of the following breath weapons: Fire Breath (90-foot cone, DC 24 Dex save, 71 (13d10) fire damage) or Weakening Breath (90-foot cone, DC 24 Str save or have disadvantage on Str-based attacks, checks, and saves for 1 minute)." },
            { name: "Change Shape", description: "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form." }
        ],
        legendaryActions: {
            perRound: 3,
            actions: [
                { name: "Detect", description: "The dragon makes a Wisdom (Perception) check." },
                { name: "Tail Attack", description: "The dragon makes a tail attack." },
                { name: "Wing Attack (Costs 2 Actions)", description: "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 25 Dexterity saving throw or take 17 (2d6+10) bludgeoning damage and be knocked prone." }
            ]
        }
    },
    "adult-gold-dragon": {
        name: "Adult Gold Dragon",
        source: "MM",
        size: "huge",
        type: "dragon",
        alignment: "lawful good",
        ac: 19,
        acType: "natural armor",
        hp: 256,
        hitDice: "19d12+133",
        speed: { walk: 40, fly: 80, swim: 40 },
        abilityScores: { str: 27, dex: 14, con: 25, int: 16, wis: 15, cha: 24 },
        savingThrows: { dex: 8, con: 13, wis: 8, cha: 13 },
        skills: { insight: 8, perception: 14, persuasion: 13, stealth: 8 },
        damageImmunities: ["fire"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft."],
        languages: "Common, Draconic",
        cr: 17,
        traits: [
            { name: "Amphibious", description: "The dragon can breathe air and water." },
            { name: "Legendary Resistance (3/Day)", description: "If the dragon fails a saving throw, it can choose to succeed instead." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 19 (2d10+8) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 15 (2d6+8) slashing damage." },
            { name: "Tail", description: "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 17 (2d8+8) bludgeoning damage." },
            { name: "Frightful Presence", description: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 21 Wisdom saving throw or become frightened for 1 minute." },
            { name: "Breath Weapons (Recharge 5-6)", description: "The dragon uses one of the following breath weapons: Fire Breath (60-foot cone, DC 21 Dex save, 66 (12d10) fire damage) or Weakening Breath (60-foot cone, DC 21 Str save or have disadvantage on Str-based attacks, checks, and saves for 1 minute)." },
            { name: "Change Shape", description: "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form." }
        ],
        legendaryActions: {
            perRound: 3,
            actions: [
                { name: "Detect", description: "The dragon makes a Wisdom (Perception) check." },
                { name: "Tail Attack", description: "The dragon makes a tail attack." },
                { name: "Wing Attack (Costs 2 Actions)", description: "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6+8) bludgeoning damage and be knocked prone." }
            ]
        }
    },
    "young-gold-dragon": {
        name: "Young Gold Dragon",
        source: "MM",
        size: "large",
        type: "dragon",
        alignment: "lawful good",
        ac: 18,
        acType: "natural armor",
        hp: 178,
        hitDice: "17d10+85",
        speed: { walk: 40, fly: 80, swim: 40 },
        abilityScores: { str: 23, dex: 14, con: 21, int: 16, wis: 13, cha: 20 },
        savingThrows: { dex: 6, con: 9, wis: 5, cha: 9 },
        skills: { insight: 5, perception: 9, persuasion: 9, stealth: 6 },
        damageImmunities: ["fire"],
        senses: ["blindsight 30 ft.", "darkvision 120 ft."],
        languages: "Common, Draconic",
        cr: 10,
        traits: [
            { name: "Amphibious", description: "The dragon can breathe air and water." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 17 (2d10+6) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 13 (2d6+6) slashing damage." },
            { name: "Breath Weapons (Recharge 5-6)", description: "The dragon uses one of the following breath weapons: Fire Breath (30-foot cone, DC 17 Dex save, 55 (10d10) fire damage) or Weakening Breath (30-foot cone, DC 17 Str save or have disadvantage on Str-based attacks, checks, and saves for 1 minute)." }
        ]
    },
    "gold-dragon-wyrmling": {
        name: "Gold Dragon Wyrmling",
        source: "MM",
        size: "medium",
        type: "dragon",
        alignment: "lawful good",
        ac: 17,
        acType: "natural armor",
        hp: 60,
        hitDice: "8d8+24",
        speed: { walk: 30, fly: 60, swim: 30 },
        abilityScores: { str: 19, dex: 14, con: 17, int: 14, wis: 11, cha: 16 },
        savingThrows: { dex: 4, con: 5, wis: 2, cha: 5 },
        skills: { perception: 4, stealth: 4 },
        damageImmunities: ["fire"],
        senses: ["blindsight 10 ft.", "darkvision 60 ft."],
        languages: "Draconic",
        cr: 3,
        traits: [
            { name: "Amphibious", description: "The dragon can breathe air and water." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (1d10+4) piercing damage." },
            { name: "Breath Weapons (Recharge 5-6)", description: "The dragon uses one of the following breath weapons: Fire Breath (15-foot cone, DC 13 Dex save, 22 (4d10) fire damage) or Weakening Breath (15-foot cone, DC 13 Str save or have disadvantage on Str-based attacks, checks, and saves for 1 minute)." }
        ]
    },

    // SILVER DRAGONS
    "ancient-silver-dragon": {
        name: "Ancient Silver Dragon",
        source: "MM",
        size: "gargantuan",
        type: "dragon",
        alignment: "lawful good",
        ac: 22,
        acType: "natural armor",
        hp: 487,
        hitDice: "25d20+225",
        speed: { walk: 40, fly: 80 },
        abilityScores: { str: 30, dex: 10, con: 29, int: 18, wis: 15, cha: 23 },
        savingThrows: { dex: 7, con: 16, wis: 9, cha: 13 },
        skills: { arcana: 11, history: 11, perception: 16, stealth: 7 },
        damageImmunities: ["cold"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft."],
        languages: "Common, Draconic",
        cr: 23,
        traits: [
            { name: "Legendary Resistance (3/Day)", description: "If the dragon fails a saving throw, it can choose to succeed instead." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +17 to hit, reach 15 ft., one target. Hit: 21 (2d10+10) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 17 (2d6+10) slashing damage." },
            { name: "Tail", description: "Melee Weapon Attack: +17 to hit, reach 20 ft., one target. Hit: 19 (2d8+10) bludgeoning damage." },
            { name: "Frightful Presence", description: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 21 Wisdom saving throw or become frightened for 1 minute." },
            { name: "Breath Weapons (Recharge 5-6)", description: "The dragon uses one of the following breath weapons: Cold Breath (90-foot cone, DC 24 Con save, 67 (15d8) cold damage) or Paralyzing Breath (90-foot cone, DC 24 Con save or paralyzed for 1 minute)." },
            { name: "Change Shape", description: "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form." }
        ],
        legendaryActions: {
            perRound: 3,
            actions: [
                { name: "Detect", description: "The dragon makes a Wisdom (Perception) check." },
                { name: "Tail Attack", description: "The dragon makes a tail attack." },
                { name: "Wing Attack (Costs 2 Actions)", description: "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 25 Dexterity saving throw or take 17 (2d6+10) bludgeoning damage and be knocked prone." }
            ]
        }
    },
    "adult-silver-dragon": {
        name: "Adult Silver Dragon",
        source: "MM",
        size: "huge",
        type: "dragon",
        alignment: "lawful good",
        ac: 19,
        acType: "natural armor",
        hp: 243,
        hitDice: "18d12+126",
        speed: { walk: 40, fly: 80 },
        abilityScores: { str: 27, dex: 10, con: 25, int: 16, wis: 13, cha: 21 },
        savingThrows: { dex: 5, con: 12, wis: 6, cha: 10 },
        skills: { arcana: 8, history: 8, perception: 11, stealth: 5 },
        damageImmunities: ["cold"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft."],
        languages: "Common, Draconic",
        cr: 16,
        traits: [
            { name: "Legendary Resistance (3/Day)", description: "If the dragon fails a saving throw, it can choose to succeed instead." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 19 (2d10+8) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 15 (2d6+8) slashing damage." },
            { name: "Tail", description: "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 17 (2d8+8) bludgeoning damage." },
            { name: "Frightful Presence", description: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 18 Wisdom saving throw or become frightened for 1 minute." },
            { name: "Breath Weapons (Recharge 5-6)", description: "The dragon uses one of the following breath weapons: Cold Breath (60-foot cone, DC 20 Con save, 58 (13d8) cold damage) or Paralyzing Breath (60-foot cone, DC 20 Con save or paralyzed for 1 minute)." },
            { name: "Change Shape", description: "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form." }
        ],
        legendaryActions: {
            perRound: 3,
            actions: [
                { name: "Detect", description: "The dragon makes a Wisdom (Perception) check." },
                { name: "Tail Attack", description: "The dragon makes a tail attack." },
                { name: "Wing Attack (Costs 2 Actions)", description: "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 21 Dexterity saving throw or take 15 (2d6+8) bludgeoning damage and be knocked prone." }
            ]
        }
    },
    "young-silver-dragon": {
        name: "Young Silver Dragon",
        source: "MM",
        size: "large",
        type: "dragon",
        alignment: "lawful good",
        ac: 18,
        acType: "natural armor",
        hp: 168,
        hitDice: "16d10+80",
        speed: { walk: 40, fly: 80 },
        abilityScores: { str: 23, dex: 10, con: 21, int: 14, wis: 11, cha: 19 },
        savingThrows: { dex: 4, con: 9, wis: 4, cha: 8 },
        skills: { arcana: 6, history: 6, perception: 8, stealth: 4 },
        damageImmunities: ["cold"],
        senses: ["blindsight 30 ft.", "darkvision 120 ft."],
        languages: "Common, Draconic",
        cr: 9,
        actions: [
            { name: "Multiattack", description: "The dragon makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 17 (2d10+6) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 13 (2d6+6) slashing damage." },
            { name: "Breath Weapons (Recharge 5-6)", description: "The dragon uses one of the following breath weapons: Cold Breath (30-foot cone, DC 17 Con save, 54 (12d8) cold damage) or Paralyzing Breath (30-foot cone, DC 17 Con save or paralyzed for 1 minute)." }
        ]
    },
    "silver-dragon-wyrmling": {
        name: "Silver Dragon Wyrmling",
        source: "MM",
        size: "medium",
        type: "dragon",
        alignment: "lawful good",
        ac: 17,
        acType: "natural armor",
        hp: 45,
        hitDice: "6d8+18",
        speed: { walk: 30, fly: 60 },
        abilityScores: { str: 19, dex: 10, con: 17, int: 12, wis: 11, cha: 15 },
        savingThrows: { dex: 2, con: 5, wis: 2, cha: 4 },
        skills: { perception: 4, stealth: 2 },
        damageImmunities: ["cold"],
        senses: ["blindsight 10 ft.", "darkvision 60 ft."],
        languages: "Draconic",
        cr: 2,
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (1d10+4) piercing damage." },
            { name: "Breath Weapons (Recharge 5-6)", description: "The dragon uses one of the following breath weapons: Cold Breath (15-foot cone, DC 13 Con save, 18 (4d8) cold damage) or Paralyzing Breath (15-foot cone, DC 13 Con save or paralyzed for 1 minute)." }
        ]
    },

    // SPECIAL DRAGONS
    "dragon-turtle": {
        name: "Dragon Turtle",
        source: "MM",
        size: "gargantuan",
        type: "dragon",
        alignment: "neutral",
        ac: 20,
        acType: "natural armor",
        hp: 341,
        hitDice: "22d20+110",
        speed: { walk: 20, swim: 40 },
        abilityScores: { str: 25, dex: 10, con: 20, int: 10, wis: 12, cha: 12 },
        savingThrows: { dex: 6, con: 11, wis: 7 },
        damageResistances: ["fire"],
        senses: ["darkvision 120 ft."],
        languages: "Aquan, Draconic",
        cr: 17,
        traits: [
            { name: "Amphibious", description: "The dragon turtle can breathe air and water." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon turtle makes three attacks: one with its bite and two with its claws. It can make one tail attack in place of its two claw attacks." },
            { name: "Bite", description: "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 26 (3d12+7) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 16 (2d8+7) slashing damage." },
            { name: "Tail", description: "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 26 (3d12+7) bludgeoning damage. If the target is a creature, it must succeed on a DC 20 Strength saving throw or be pushed up to 10 feet away from the dragon turtle and knocked prone." },
            { name: "Steam Breath (Recharge 5-6)", description: "The dragon turtle exhales scalding steam in a 60-foot cone. Each creature in that area must make a DC 18 Constitution saving throw, taking 52 (15d6) fire damage on a failed save, or half as much damage on a successful one." }
        ]
    },
    "faerie-dragon-red": {
        name: "Faerie Dragon (Red)",
        source: "MM",
        size: "tiny",
        type: "dragon",
        alignment: "chaotic good",
        ac: 15,
        hp: 14,
        hitDice: "4d4+4",
        speed: { walk: 10, fly: 60 },
        abilityScores: { str: 3, dex: 20, con: 13, int: 14, wis: 12, cha: 16 },
        skills: { arcana: 4, perception: 3, stealth: 7 },
        senses: ["darkvision 60 ft."],
        languages: "Draconic, Sylvan",
        cr: 1,
        traits: [
            { name: "Superior Invisibility", description: "As a bonus action, the dragon can magically turn invisible until its concentration ends. Anything the dragon is wearing or carrying is invisible with it." },
            { name: "Limited Telepathy", description: "The dragon can magically communicate simple ideas, emotions, and images telepathically with any creature within 100 feet of it that can understand a language." },
            { name: "Magic Resistance", description: "The dragon has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 1 piercing damage." },
            { name: "Euphoria Breath (Recharge 5-6)", description: "The dragon exhales a puff of euphoria gas at one creature within 5 feet of it. The target must succeed on a DC 11 Wisdom saving throw, or for 1 minute, the target can't take reactions and must roll a d6 at the start of each of its turns to determine its behavior during the turn." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 13,
            spells: {
                "1/day each": ["color spray", "dancing lights", "mage hand", "minor illusion", "mirror image", "suggestion"]
            }
        }
    },
    "pseudodragon": {
        name: "Pseudodragon",
        source: "MM",
        size: "tiny",
        type: "dragon",
        alignment: "neutral good",
        ac: 13,
        acType: "natural armor",
        hp: 7,
        hitDice: "2d4+2",
        speed: { walk: 15, fly: 60 },
        abilityScores: { str: 6, dex: 15, con: 13, int: 10, wis: 12, cha: 10 },
        skills: { perception: 3, stealth: 4 },
        senses: ["blindsight 10 ft.", "darkvision 60 ft."],
        languages: "understands Common and Draconic but can't speak",
        cr: 0.25,
        traits: [
            { name: "Keen Senses", description: "The pseudodragon has advantage on Wisdom (Perception) checks that rely on sight, hearing, or smell." },
            { name: "Magic Resistance", description: "The pseudodragon has advantage on saving throws against spells and other magical effects." },
            { name: "Limited Telepathy", description: "The pseudodragon can magically communicate simple ideas, emotions, and images telepathically with any creature within 100 feet of it that can understand a language." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4+2) piercing damage." },
            { name: "Sting", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4+2) piercing damage, and the target must succeed on a DC 11 Constitution saving throw or become poisoned for 1 hour. If the saving throw fails by 5 or more, the target falls unconscious for the same duration, or until it takes damage or another creature uses an action to shake it awake." }
        ]
    },
    "wyvern": {
        name: "Wyvern",
        source: "MM",
        size: "large",
        type: "dragon",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 110,
        hitDice: "13d10+39",
        speed: { walk: 20, fly: 80 },
        abilityScores: { str: 19, dex: 10, con: 16, int: 5, wis: 12, cha: 6 },
        skills: { perception: 4 },
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 6,
        actions: [
            { name: "Multiattack", description: "The wyvern makes two attacks: one with its bite and one with its stinger. While flying, it can use its claws in place of one other attack." },
            { name: "Bite", description: "Melee Weapon Attack: +7 to hit, reach 10 ft., one creature. Hit: 11 (2d6+4) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8+4) slashing damage." },
            { name: "Stinger", description: "Melee Weapon Attack: +7 to hit, reach 10 ft., one creature. Hit: 11 (2d6+4) piercing damage. The target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one." }
        ]
    }
};
