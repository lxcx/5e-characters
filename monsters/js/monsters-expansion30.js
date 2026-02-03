// Expansion Pack 30 - More Creatures
// Continuing comprehensive coverage

const MONSTERS_EXPANSION30 = {
    // ===== More Dragons =====
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
        speed: { walk: 40, burrow: 30, fly: 80, swim: 40 },
        abilityScores: { str: 22, dex: 10, con: 22, int: 8, wis: 12, cha: 12 },
        savingThrows: { dex: 5, con: 11, wis: 6, cha: 6 },
        skills: { perception: 11, stealth: 5 },
        damageImmunities: ["cold"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft."],
        languages: "Common, Draconic",
        cr: 13,
        environment: ["arctic"],
        role: "brute",
        tags: ["dragon", "chromatic"],
        traits: [
            { name: "Ice Walk", description: "The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn't cost it extra movement." },
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
        legendaryActions: [
            { name: "Detect", description: "The dragon makes a Wisdom (Perception) check." },
            { name: "Tail Attack", description: "The dragon makes a tail attack." },
            { name: "Wing Attack (Costs 2 Actions)", description: "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6+6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed." }
        ]
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
        environment: ["swamp"],
        role: "brute",
        tags: ["dragon", "chromatic"],
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
        legendaryActions: [
            { name: "Detect", description: "The dragon makes a Wisdom (Perception) check." },
            { name: "Tail Attack", description: "The dragon makes a tail attack." },
            { name: "Wing Attack (Costs 2 Actions)", description: "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6+6) bludgeoning damage and be knocked prone." }
        ]
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
        environment: ["forest"],
        role: "controller",
        tags: ["dragon", "chromatic"],
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
        legendaryActions: [
            { name: "Detect", description: "The dragon makes a Wisdom (Perception) check." },
            { name: "Tail Attack", description: "The dragon makes a tail attack." },
            { name: "Wing Attack (Costs 2 Actions)", description: "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6+6) bludgeoning damage and be knocked prone." }
        ]
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
        speed: { walk: 40, burrow: 30, fly: 80 },
        abilityScores: { str: 25, dex: 10, con: 23, int: 16, wis: 15, cha: 19 },
        savingThrows: { dex: 5, con: 11, wis: 7, cha: 9 },
        skills: { perception: 12, stealth: 5 },
        damageImmunities: ["lightning"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft."],
        languages: "Common, Draconic",
        cr: 16,
        environment: ["desert", "coastal"],
        role: "artillery",
        tags: ["dragon", "chromatic"],
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
        legendaryActions: [
            { name: "Detect", description: "The dragon makes a Wisdom (Perception) check." },
            { name: "Tail Attack", description: "The dragon makes a tail attack." },
            { name: "Wing Attack (Costs 2 Actions)", description: "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 20 Dexterity saving throw or take 14 (2d6+7) bludgeoning damage and be knocked prone." }
        ]
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
        speed: { walk: 40, climb: 40, fly: 80 },
        abilityScores: { str: 27, dex: 10, con: 25, int: 16, wis: 13, cha: 21 },
        savingThrows: { dex: 6, con: 13, wis: 7, cha: 11 },
        skills: { perception: 13, stealth: 6 },
        damageImmunities: ["fire"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft."],
        languages: "Common, Draconic",
        cr: 17,
        environment: ["mountain"],
        role: "brute",
        tags: ["dragon", "chromatic"],
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
        legendaryActions: [
            { name: "Detect", description: "The dragon makes a Wisdom (Perception) check." },
            { name: "Tail Attack", description: "The dragon makes a tail attack." },
            { name: "Wing Attack (Costs 2 Actions)", description: "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6+8) bludgeoning damage and be knocked prone." }
        ]
    }
};
