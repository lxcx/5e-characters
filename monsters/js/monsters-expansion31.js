// Expansion Pack 31 - Metallic Dragons
// Adult metallic dragons

const MONSTERS_EXPANSION31 = {
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
        speed: { walk: 40, burrow: 30, fly: 80 },
        abilityScores: { str: 23, dex: 10, con: 21, int: 14, wis: 13, cha: 17 },
        savingThrows: { dex: 5, con: 10, wis: 6, cha: 8 },
        skills: { history: 7, perception: 11, persuasion: 8, stealth: 5 },
        damageImmunities: ["fire"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft."],
        languages: "Common, Draconic",
        cr: 13,
        environment: ["desert"],
        role: "controller",
        tags: ["dragon", "metallic"],
        traits: [
            { name: "Legendary Resistance (3/Day)", description: "If the dragon fails a saving throw, it can choose to succeed instead." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10+6) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6+6) slashing damage." },
            { name: "Tail", description: "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8+6) bludgeoning damage." },
            { name: "Frightful Presence", description: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute." },
            { name: "Breath Weapons (Recharge 5-6)", description: "The dragon uses one of the following breath weapons: Fire Breath - The dragon exhales fire in an 60-foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 45 (13d6) fire damage on a failed save, or half as much damage on a successful one. Sleep Breath - The dragon exhales sleep gas in a 60-foot cone. Each creature in that area must succeed on a DC 18 Constitution saving throw or fall unconscious for 10 minutes. This effect ends for a creature if the creature takes damage or someone uses an action to wake it." }
        ],
        legendaryActions: [
            { name: "Detect", description: "The dragon makes a Wisdom (Perception) check." },
            { name: "Tail Attack", description: "The dragon makes a tail attack." },
            { name: "Wing Attack (Costs 2 Actions)", description: "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6+6) bludgeoning damage and be knocked prone." }
        ]
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
        speed: { walk: 40, climb: 40, fly: 80 },
        abilityScores: { str: 23, dex: 12, con: 21, int: 18, wis: 15, cha: 17 },
        savingThrows: { dex: 6, con: 10, wis: 7, cha: 8 },
        skills: { deception: 8, perception: 12, stealth: 6 },
        damageImmunities: ["acid"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft."],
        languages: "Common, Draconic",
        cr: 14,
        environment: ["hill"],
        role: "controller",
        tags: ["dragon", "metallic"],
        traits: [
            { name: "Legendary Resistance (3/Day)", description: "If the dragon fails a saving throw, it can choose to succeed instead." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10+6) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6+6) slashing damage." },
            { name: "Tail", description: "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8+6) bludgeoning damage." },
            { name: "Frightful Presence", description: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute." },
            { name: "Breath Weapons (Recharge 5-6)", description: "The dragon uses one of the following breath weapons: Acid Breath - The dragon exhales acid in an 60-foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 54 (12d8) acid damage on a failed save, or half as much damage on a successful one. Slowing Breath - The dragon exhales gas in a 60-foot cone. Each creature in that area must succeed on a DC 18 Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save." }
        ],
        legendaryActions: [
            { name: "Detect", description: "The dragon makes a Wisdom (Perception) check." },
            { name: "Tail Attack", description: "The dragon makes a tail attack." },
            { name: "Wing Attack (Costs 2 Actions)", description: "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6+6) bludgeoning damage and be knocked prone." }
        ]
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
        environment: ["coastal"],
        role: "brute",
        tags: ["dragon", "metallic"],
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
            { name: "Breath Weapons (Recharge 5-6)", description: "The dragon uses one of the following breath weapons: Lightning Breath - The dragon exhales lightning in a 90-foot line that is 5 feet wide. Each creature in that line must make a DC 19 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one. Repulsion Breath - The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a DC 19 Strength saving throw. On a failed save, the creature is pushed 60 feet away from the dragon." },
            { name: "Change Shape", description: "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice)." }
        ],
        legendaryActions: [
            { name: "Detect", description: "The dragon makes a Wisdom (Perception) check." },
            { name: "Tail Attack", description: "The dragon makes a tail attack." },
            { name: "Wing Attack (Costs 2 Actions)", description: "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 20 Dexterity saving throw or take 14 (2d6+7) bludgeoning damage and be knocked prone." }
        ]
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
        environment: ["mountain"],
        role: "brute",
        tags: ["dragon", "metallic"],
        traits: [
            { name: "Legendary Resistance (3/Day)", description: "If the dragon fails a saving throw, it can choose to succeed instead." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 19 (2d10+8) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 15 (2d6+8) slashing damage." },
            { name: "Tail", description: "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 17 (2d8+8) bludgeoning damage." },
            { name: "Frightful Presence", description: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 18 Wisdom saving throw or become frightened for 1 minute." },
            { name: "Breath Weapons (Recharge 5-6)", description: "The dragon uses one of the following breath weapons: Cold Breath - The dragon exhales an icy blast in a 60-foot cone. Each creature in that area must make a DC 20 Constitution saving throw, taking 58 (13d8) cold damage on a failed save, or half as much damage on a successful one. Paralyzing Breath - The dragon exhales paralyzing gas in a 60-foot cone. Each creature in that area must succeed on a DC 20 Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." },
            { name: "Change Shape", description: "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form." }
        ],
        legendaryActions: [
            { name: "Detect", description: "The dragon makes a Wisdom (Perception) check." },
            { name: "Tail Attack", description: "The dragon makes a tail attack." },
            { name: "Wing Attack (Costs 2 Actions)", description: "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 21 Dexterity saving throw or take 15 (2d6+8) bludgeoning damage and be knocked prone." }
        ]
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
        environment: ["grassland"],
        role: "brute",
        tags: ["dragon", "metallic"],
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
            { name: "Breath Weapons (Recharge 5-6)", description: "The dragon uses one of the following breath weapons: Fire Breath - The dragon exhales fire in a 60-foot cone. Each creature in that area must make a DC 21 Dexterity saving throw, taking 66 (12d10) fire damage on a failed save, or half as much damage on a successful one. Weakening Breath - The dragon exhales gas in a 60-foot cone. Each creature in that area must succeed on a DC 21 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." },
            { name: "Change Shape", description: "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form." }
        ],
        legendaryActions: [
            { name: "Detect", description: "The dragon makes a Wisdom (Perception) check." },
            { name: "Tail Attack", description: "The dragon makes a tail attack." },
            { name: "Wing Attack (Costs 2 Actions)", description: "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6+8) bludgeoning damage and be knocked prone." }
        ]
    }
};
