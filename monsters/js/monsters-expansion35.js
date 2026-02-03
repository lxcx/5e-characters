// Expansion Pack 35 - More Creatures
// Continuing comprehensive coverage

const MONSTERS_EXPANSION35 = {
    // ===== Ancient Metallic Dragons =====
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
        speed: { walk: 40, burrow: 40, fly: 80 },
        abilityScores: { str: 27, dex: 10, con: 25, int: 16, wis: 15, cha: 19 },
        savingThrows: { dex: 6, con: 13, wis: 8, cha: 10 },
        skills: { history: 9, perception: 14, persuasion: 10, stealth: 6 },
        damageImmunities: ["fire"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft."],
        languages: "Common, Draconic",
        cr: 20,
        environment: ["desert"],
        role: "controller",
        tags: ["dragon", "metallic"],
        traits: [
            { name: "Legendary Resistance (3/Day)", description: "If the dragon fails a saving throw, it can choose to succeed instead." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 19 (2d10+8) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 15 (2d6+8) slashing damage." },
            { name: "Tail", description: "Melee Weapon Attack: +14 to hit, reach 20 ft., one target. Hit: 17 (2d8+8) bludgeoning damage." },
            { name: "Frightful Presence", description: "Each creature of the dragon's choice within 120 feet must succeed on a DC 18 Wisdom saving throw or become frightened for 1 minute." },
            { name: "Breath Weapons (Recharge 5-6)", description: "The dragon uses one of the following breath weapons: Fire Breath (90-foot line, DC 21, 56 (16d6) fire damage) or Sleep Breath (90-foot cone, DC 21)." },
            { name: "Change Shape", description: "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form." }
        ],
        legendaryActions: [
            { name: "Detect", description: "The dragon makes a Wisdom (Perception) check." },
            { name: "Tail Attack", description: "The dragon makes a tail attack." },
            { name: "Wing Attack (Costs 2 Actions)", description: "The dragon beats its wings. Each creature within 15 feet must succeed on a DC 22 Dexterity saving throw or take 15 (2d6+8) bludgeoning damage and be knocked prone." }
        ]
    },
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
        speed: { walk: 40, climb: 40, fly: 80 },
        abilityScores: { str: 27, dex: 12, con: 25, int: 20, wis: 17, cha: 19 },
        savingThrows: { dex: 8, con: 14, wis: 10, cha: 11 },
        skills: { deception: 11, perception: 17, stealth: 8 },
        damageImmunities: ["acid"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft."],
        languages: "Common, Draconic",
        cr: 21,
        environment: ["hill"],
        role: "controller",
        tags: ["dragon", "metallic"],
        traits: [
            { name: "Legendary Resistance (3/Day)", description: "If the dragon fails a saving throw, it can choose to succeed instead." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon can use its Frightful Presence. It then makes three attacks." },
            { name: "Bite", description: "Melee Weapon Attack: +15 to hit, reach 15 ft., one target. Hit: 19 (2d10+8) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 15 (2d6+8) slashing damage." },
            { name: "Tail", description: "Melee Weapon Attack: +15 to hit, reach 20 ft., one target. Hit: 17 (2d8+8) bludgeoning damage." },
            { name: "Frightful Presence", description: "Each creature of the dragon's choice within 120 feet must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute." },
            { name: "Breath Weapons (Recharge 5-6)", description: "The dragon uses one of the following breath weapons: Acid Breath (90-foot line, DC 22, 63 (14d8) acid damage) or Slowing Breath (90-foot cone, DC 22)." },
            { name: "Change Shape", description: "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form." }
        ],
        legendaryActions: [
            { name: "Detect", description: "The dragon makes a Wisdom (Perception) check." },
            { name: "Tail Attack", description: "The dragon makes a tail attack." },
            { name: "Wing Attack (Costs 2 Actions)", description: "The dragon beats its wings. Each creature within 15 feet must succeed on a DC 23 Dexterity saving throw or take 15 (2d6+8) bludgeoning damage and be knocked prone." }
        ]
    },
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
        environment: ["coastal"],
        role: "brute",
        tags: ["dragon", "metallic"],
        traits: [
            { name: "Amphibious", description: "The dragon can breathe air and water." },
            { name: "Legendary Resistance (3/Day)", description: "If the dragon fails a saving throw, it can choose to succeed instead." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon can use its Frightful Presence. It then makes three attacks." },
            { name: "Bite", description: "Melee Weapon Attack: +16 to hit, reach 15 ft., one target. Hit: 20 (2d10+9) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +16 to hit, reach 10 ft., one target. Hit: 16 (2d6+9) slashing damage." },
            { name: "Tail", description: "Melee Weapon Attack: +16 to hit, reach 20 ft., one target. Hit: 18 (2d8+9) bludgeoning damage." },
            { name: "Frightful Presence", description: "Each creature of the dragon's choice within 120 feet must succeed on a DC 20 Wisdom saving throw or become frightened for 1 minute." },
            { name: "Breath Weapons (Recharge 5-6)", description: "The dragon uses one of the following breath weapons: Lightning Breath (120-foot line, DC 23, 88 (16d10) lightning damage) or Repulsion Breath (30-foot cone, DC 23)." },
            { name: "Change Shape", description: "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form." }
        ],
        legendaryActions: [
            { name: "Detect", description: "The dragon makes a Wisdom (Perception) check." },
            { name: "Tail Attack", description: "The dragon makes a tail attack." },
            { name: "Wing Attack (Costs 2 Actions)", description: "The dragon beats its wings. Each creature within 15 feet must succeed on a DC 24 Dexterity saving throw or take 16 (2d6+9) bludgeoning damage and be knocked prone." }
        ]
    },
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
        environment: ["mountain"],
        role: "brute",
        tags: ["dragon", "metallic"],
        traits: [
            { name: "Legendary Resistance (3/Day)", description: "If the dragon fails a saving throw, it can choose to succeed instead." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon can use its Frightful Presence. It then makes three attacks." },
            { name: "Bite", description: "Melee Weapon Attack: +17 to hit, reach 15 ft., one target. Hit: 21 (2d10+10) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 17 (2d6+10) slashing damage." },
            { name: "Tail", description: "Melee Weapon Attack: +17 to hit, reach 20 ft., one target. Hit: 19 (2d8+10) bludgeoning damage." },
            { name: "Frightful Presence", description: "Each creature of the dragon's choice within 120 feet must succeed on a DC 21 Wisdom saving throw or become frightened for 1 minute." },
            { name: "Breath Weapons (Recharge 5-6)", description: "The dragon uses one of the following breath weapons: Cold Breath (90-foot cone, DC 24, 67 (15d8) cold damage) or Paralyzing Breath (90-foot cone, DC 24)." },
            { name: "Change Shape", description: "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form." }
        ],
        legendaryActions: [
            { name: "Detect", description: "The dragon makes a Wisdom (Perception) check." },
            { name: "Tail Attack", description: "The dragon makes a tail attack." },
            { name: "Wing Attack (Costs 2 Actions)", description: "The dragon beats its wings. Each creature within 15 feet must succeed on a DC 25 Dexterity saving throw or take 17 (2d6+10) bludgeoning damage and be knocked prone." }
        ]
    },
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
        environment: ["grassland"],
        role: "brute",
        tags: ["dragon", "metallic"],
        traits: [
            { name: "Amphibious", description: "The dragon can breathe air and water." },
            { name: "Legendary Resistance (3/Day)", description: "If the dragon fails a saving throw, it can choose to succeed instead." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon can use its Frightful Presence. It then makes three attacks." },
            { name: "Bite", description: "Melee Weapon Attack: +17 to hit, reach 15 ft., one target. Hit: 21 (2d10+10) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 17 (2d6+10) slashing damage." },
            { name: "Tail", description: "Melee Weapon Attack: +17 to hit, reach 20 ft., one target. Hit: 19 (2d8+10) bludgeoning damage." },
            { name: "Frightful Presence", description: "Each creature of the dragon's choice within 120 feet must succeed on a DC 24 Wisdom saving throw or become frightened for 1 minute." },
            { name: "Breath Weapons (Recharge 5-6)", description: "The dragon uses one of the following breath weapons: Fire Breath (90-foot cone, DC 24, 71 (13d10) fire damage) or Weakening Breath (90-foot cone, DC 24)." },
            { name: "Change Shape", description: "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form." }
        ],
        legendaryActions: [
            { name: "Detect", description: "The dragon makes a Wisdom (Perception) check." },
            { name: "Tail Attack", description: "The dragon makes a tail attack." },
            { name: "Wing Attack (Costs 2 Actions)", description: "The dragon beats its wings. Each creature within 15 feet must succeed on a DC 25 Dexterity saving throw or take 17 (2d6+10) bludgeoning damage and be knocked prone." }
        ]
    }
};
