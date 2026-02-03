// D&D 5E Monster Manual - Monsters A-B
// Source: Monster Manual (MM)

const monstersMM_A = {
    // ===== A =====
    "aarakocra": {
        name: "Aarakocra",
        source: "MM",
        size: "medium",
        type: "humanoid",
        tags: ["aarakocra"],
        alignment: "neutral good",
        ac: 12,
        hp: 13,
        hitDice: "3d8",
        speed: { walk: "20 ft.", fly: "50 ft." },
        abilityScores: { str: 10, dex: 14, con: 10, int: 11, wis: 12, cha: 11 },
        skills: { perception: 5 },
        senses: ["passive Perception 15"],
        languages: "Auran, Aarakocra",
        cr: 0.25,
        traits: [
            { name: "Dive Attack", description: "If the aarakocra is flying and dives at least 30 feet straight toward a target and then hits it with a melee weapon attack, the attack deals an extra 3 (1d6) damage to the target." }
        ],
        actions: [
            { name: "Talon", type: "melee", attackBonus: 4, reach: 5, damage: "1d4+2 slashing" },
            { name: "Javelin", type: "melee", attackBonus: 4, reach: 5, damage: "1d6+2 piercing" },
            { name: "Javelin (Ranged)", type: "ranged", attackBonus: 4, range: "30/120 ft.", damage: "1d6+2 piercing" }
        ]
    },
    "aboleth": {
        name: "Aboleth",
        source: "MM",
        size: "large",
        type: "aberration",
        alignment: "lawful evil",
        ac: 17,
        acType: "natural armor",
        hp: 135,
        hitDice: "18d10+36",
        speed: { walk: "10 ft.", swim: "40 ft." },
        abilityScores: { str: 21, dex: 9, con: 15, int: 18, wis: 15, cha: 18 },
        savingThrows: { con: 6, int: 8, wis: 6 },
        skills: { history: 12, perception: 10 },
        senses: ["darkvision 120 ft.", "passive Perception 20"],
        languages: "Deep Speech, telepathy 120 ft.",
        cr: 10,
        traits: [
            { name: "Amphibious", description: "The aboleth can breathe air and water." },
            { name: "Mucous Cloud", description: "While underwater, the aboleth is surrounded by transformative mucus. A creature that touches the aboleth or that hits it with a melee attack while within 5 feet of it must make a DC 14 Constitution saving throw. On a failure, the creature is diseased for 1d4 hours. The diseased creature can breathe only underwater." },
            { name: "Probing Telepathy", description: "If a creature communicates telepathically with the aboleth, the aboleth learns the creature's greatest desires if the aboleth can see the creature." }
        ],
        actions: [
            { name: "Multiattack", description: "The aboleth makes three tentacle attacks." },
            { name: "Tentacle", type: "melee", attackBonus: 9, reach: 10, damage: "2d6+5 bludgeoning", additionalText: "If the target is a creature, it must succeed on a DC 14 Constitution saving throw or become diseased. The disease has no effect for 1 minute and can be removed by any magic that cures disease. After 1 minute, the diseased creature's skin becomes translucent and slimy, the creature can't regain hit points unless it is underwater, and the disease can be removed only by heal or another disease-curing spell of 6th level or higher. When the creature is outside a body of water, it takes 6 (1d12) acid damage every 10 minutes unless moisture is applied to the skin before 10 minutes have passed." },
            { name: "Tail", type: "melee", attackBonus: 9, reach: 10, damage: "3d6+5 bludgeoning" },
            { name: "Enslave (3/Day)", description: "The aboleth targets one creature it can see within 30 feet of it. The target must succeed on a DC 14 Wisdom saving throw or be magically charmed by the aboleth until the aboleth dies or until it is on a different plane of existence from the target. The charmed target is under the aboleth's control and can't take reactions, and the aboleth and the target can communicate telepathically with each other over any distance." }
        ],
        legendaryActions: {
            count: 3,
            actions: [
                { name: "Detect", cost: 1, description: "The aboleth makes a Wisdom (Perception) check." },
                { name: "Tail Swipe", cost: 1, description: "The aboleth makes one tail attack." },
                { name: "Psychic Drain (Costs 2 Actions)", cost: 2, description: "One creature charmed by the aboleth takes 10 (3d6) psychic damage, and the aboleth regains hit points equal to the damage the creature takes." }
            ]
        },
        lairActions: [
            { description: "The aboleth casts phantasmal force (no components required) on any number of creatures it can see within 60 feet of it. While maintaining concentration on this effect, the aboleth can't take other lair actions. If a target succeeds on the saving throw or if the effect ends for it, the target is immune to the aboleth's phantasmal force lair action for the next 24 hours." },
            { description: "Pools of water within 90 feet of the aboleth surge outward in a grasping tide. Any creature on the ground within 20 feet of such a pool must succeed on a DC 14 Strength saving throw or be pulled up to 20 feet into the water and knocked prone." },
            { description: "Water in the aboleth's lair magically becomes a conduit for the creature's rage. The aboleth can target any number of creatures it can see in such water within 90 feet of it. A target must succeed on a DC 14 Wisdom saving throw or take 7 (2d6) psychic damage." }
        ]
    },
    "acolyte": {
        name: "Acolyte",
        source: "MM",
        size: "medium",
        type: "humanoid",
        tags: ["any race"],
        alignment: "any alignment",
        ac: 10,
        hp: 9,
        hitDice: "2d8",
        speed: { walk: "30 ft." },
        abilityScores: { str: 10, dex: 10, con: 10, int: 10, wis: 14, cha: 11 },
        skills: { medicine: 4, religion: 2 },
        senses: ["passive Perception 12"],
        languages: "any one language (usually Common)",
        cr: 0.25,
        spellcasting: {
            ability: "wis",
            saveDC: 12,
            attackBonus: 4,
            level: 1,
            slots: { 1: 3 },
            spells: {
                cantrips: ["light", "sacred-flame", "thaumaturgy"],
                1: ["bless", "cure-wounds", "sanctuary"]
            }
        },
        actions: [
            { name: "Club", type: "melee", attackBonus: 2, reach: 5, damage: "1d4 bludgeoning" }
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
        speed: { walk: "40 ft.", fly: "80 ft.", swim: "40 ft." },
        abilityScores: { str: 23, dex: 14, con: 21, int: 14, wis: 13, cha: 17 },
        savingThrows: { dex: 7, con: 10, wis: 6, cha: 8 },
        skills: { perception: 11, stealth: 7 },
        damageImmunities: ["acid"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft.", "passive Perception 21"],
        languages: "Common, Draconic",
        cr: 14,
        traits: [
            { name: "Amphibious", description: "The dragon can breathe air and water." },
            { name: "Legendary Resistance (3/Day)", description: "If the dragon fails a saving throw, it can choose to succeed instead." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", type: "melee", attackBonus: 11, reach: 10, damage: "2d10+6 piercing plus 1d8 acid" },
            { name: "Claw", type: "melee", attackBonus: 11, reach: 5, damage: "2d6+6 slashing" },
            { name: "Tail", type: "melee", attackBonus: 11, reach: 15, damage: "2d8+6 bludgeoning" },
            { name: "Frightful Presence", description: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours." },
            { name: "Acid Breath (Recharge 5-6)", description: "The dragon exhales acid in a 60-foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 54 (12d8) acid damage on a failed save, or half as much damage on a successful one." }
        ],
        legendaryActions: {
            count: 3,
            actions: [
                { name: "Detect", cost: 1, description: "The dragon makes a Wisdom (Perception) check." },
                { name: "Tail Attack", cost: 1, description: "The dragon makes a tail attack." },
                { name: "Wing Attack (Costs 2 Actions)", cost: 2, description: "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6+6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed." }
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
        speed: { walk: "40 ft.", burrow: "30 ft.", fly: "80 ft." },
        abilityScores: { str: 25, dex: 10, con: 23, int: 16, wis: 15, cha: 19 },
        savingThrows: { dex: 5, con: 11, wis: 7, cha: 9 },
        skills: { perception: 12, stealth: 5 },
        damageImmunities: ["lightning"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft.", "passive Perception 22"],
        languages: "Common, Draconic",
        cr: 16,
        traits: [
            { name: "Legendary Resistance (3/Day)", description: "If the dragon fails a saving throw, it can choose to succeed instead." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", type: "melee", attackBonus: 12, reach: 10, damage: "2d10+7 piercing plus 1d10 lightning" },
            { name: "Claw", type: "melee", attackBonus: 12, reach: 5, damage: "2d6+7 slashing" },
            { name: "Tail", type: "melee", attackBonus: 12, reach: 15, damage: "2d8+7 bludgeoning" },
            { name: "Frightful Presence", description: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 17 Wisdom saving throw or become frightened for 1 minute." },
            { name: "Lightning Breath (Recharge 5-6)", description: "The dragon exhales lightning in a 90-foot line that is 5 feet wide. Each creature in that line must make a DC 19 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one." }
        ],
        legendaryActions: {
            count: 3,
            actions: [
                { name: "Detect", cost: 1, description: "The dragon makes a Wisdom (Perception) check." },
                { name: "Tail Attack", cost: 1, description: "The dragon makes a tail attack." },
                { name: "Wing Attack (Costs 2 Actions)", cost: 2, description: "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 20 Dexterity saving throw or take 14 (2d6+7) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed." }
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
        speed: { walk: "40 ft.", burrow: "30 ft.", fly: "80 ft." },
        abilityScores: { str: 23, dex: 10, con: 21, int: 14, wis: 13, cha: 17 },
        savingThrows: { dex: 5, con: 10, wis: 6, cha: 8 },
        skills: { history: 7, perception: 11, persuasion: 8, stealth: 5 },
        damageImmunities: ["fire"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft.", "passive Perception 21"],
        languages: "Common, Draconic",
        cr: 13,
        traits: [
            { name: "Legendary Resistance (3/Day)", description: "If the dragon fails a saving throw, it can choose to succeed instead." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", type: "melee", attackBonus: 11, reach: 10, damage: "2d10+6 piercing" },
            { name: "Claw", type: "melee", attackBonus: 11, reach: 5, damage: "2d6+6 slashing" },
            { name: "Tail", type: "melee", attackBonus: 11, reach: 15, damage: "2d8+6 bludgeoning" },
            { name: "Frightful Presence", description: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute." },
            { name: "Breath Weapons (Recharge 5-6)", description: "The dragon uses one of the following breath weapons:\n\nFire Breath. The dragon exhales fire in an 60-foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 45 (13d6) fire damage on a failed save, or half as much damage on a successful one.\n\nSleep Breath. The dragon exhales sleep gas in a 60-foot cone. Each creature in that area must succeed on a DC 18 Constitution saving throw or fall unconscious for 10 minutes. This effect ends for a creature if the creature takes damage or someone uses an action to wake it." }
        ],
        legendaryActions: {
            count: 3,
            actions: [
                { name: "Detect", cost: 1, description: "The dragon makes a Wisdom (Perception) check." },
                { name: "Tail Attack", cost: 1, description: "The dragon makes a tail attack." },
                { name: "Wing Attack (Costs 2 Actions)", cost: 2, description: "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6+6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed." }
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
        speed: { walk: "40 ft.", fly: "80 ft.", swim: "40 ft." },
        abilityScores: { str: 25, dex: 10, con: 23, int: 16, wis: 15, cha: 19 },
        savingThrows: { dex: 5, con: 11, wis: 7, cha: 9 },
        skills: { insight: 7, perception: 12, stealth: 5 },
        damageImmunities: ["lightning"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft.", "passive Perception 22"],
        languages: "Common, Draconic",
        cr: 15,
        traits: [
            { name: "Amphibious", description: "The dragon can breathe air and water." },
            { name: "Legendary Resistance (3/Day)", description: "If the dragon fails a saving throw, it can choose to succeed instead." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", type: "melee", attackBonus: 12, reach: 10, damage: "2d10+7 piercing" },
            { name: "Claw", type: "melee", attackBonus: 12, reach: 5, damage: "2d6+7 slashing" },
            { name: "Tail", type: "melee", attackBonus: 12, reach: 15, damage: "2d8+7 bludgeoning" },
            { name: "Frightful Presence", description: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 17 Wisdom saving throw or become frightened for 1 minute." },
            { name: "Breath Weapons (Recharge 5-6)", description: "The dragon uses one of the following breath weapons:\n\nLightning Breath. The dragon exhales lightning in a 90-foot line that is 5 feet wide. Each creature in that line must make a DC 19 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one.\n\nRepulsion Breath. The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a DC 19 Strength saving throw. On a failed save, the creature is pushed 60 feet away from the dragon." },
            { name: "Change Shape", description: "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice)." }
        ],
        legendaryActions: {
            count: 3,
            actions: [
                { name: "Detect", cost: 1, description: "The dragon makes a Wisdom (Perception) check." },
                { name: "Tail Attack", cost: 1, description: "The dragon makes a tail attack." },
                { name: "Wing Attack (Costs 2 Actions)", cost: 2, description: "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 20 Dexterity saving throw or take 14 (2d6+7) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed." }
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
        speed: { walk: "40 ft.", climb: "40 ft.", fly: "80 ft." },
        abilityScores: { str: 23, dex: 12, con: 21, int: 18, wis: 15, cha: 17 },
        savingThrows: { dex: 6, con: 10, wis: 7, cha: 8 },
        skills: { deception: 8, perception: 12, stealth: 6 },
        damageImmunities: ["acid"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft.", "passive Perception 22"],
        languages: "Common, Draconic",
        cr: 14,
        traits: [
            { name: "Legendary Resistance (3/Day)", description: "If the dragon fails a saving throw, it can choose to succeed instead." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", type: "melee", attackBonus: 11, reach: 10, damage: "2d10+6 piercing" },
            { name: "Claw", type: "melee", attackBonus: 11, reach: 5, damage: "2d6+6 slashing" },
            { name: "Tail", type: "melee", attackBonus: 11, reach: 15, damage: "2d8+6 bludgeoning" },
            { name: "Frightful Presence", description: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute." },
            { name: "Breath Weapons (Recharge 5-6)", description: "The dragon uses one of the following breath weapons:\n\nAcid Breath. The dragon exhales acid in an 60-foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 54 (12d8) acid damage on a failed save, or half as much damage on a successful one.\n\nSlowing Breath. The dragon exhales gas in a 60-foot cone. Each creature in that area must succeed on a DC 18 Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save." }
        ],
        legendaryActions: {
            count: 3,
            actions: [
                { name: "Detect", cost: 1, description: "The dragon makes a Wisdom (Perception) check." },
                { name: "Tail Attack", cost: 1, description: "The dragon makes a tail attack." },
                { name: "Wing Attack (Costs 2 Actions)", cost: 2, description: "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6+6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed." }
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
        speed: { walk: "40 ft.", fly: "80 ft.", swim: "40 ft." },
        abilityScores: { str: 27, dex: 14, con: 25, int: 16, wis: 15, cha: 24 },
        savingThrows: { dex: 8, con: 13, wis: 8, cha: 13 },
        skills: { insight: 8, perception: 14, persuasion: 13, stealth: 8 },
        damageImmunities: ["fire"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft.", "passive Perception 24"],
        languages: "Common, Draconic",
        cr: 17,
        traits: [
            { name: "Amphibious", description: "The dragon can breathe air and water." },
            { name: "Legendary Resistance (3/Day)", description: "If the dragon fails a saving throw, it can choose to succeed instead." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", type: "melee", attackBonus: 14, reach: 10, damage: "2d10+8 piercing" },
            { name: "Claw", type: "melee", attackBonus: 14, reach: 5, damage: "2d6+8 slashing" },
            { name: "Tail", type: "melee", attackBonus: 14, reach: 15, damage: "2d8+8 bludgeoning" },
            { name: "Frightful Presence", description: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 21 Wisdom saving throw or become frightened for 1 minute." },
            { name: "Breath Weapons (Recharge 5-6)", description: "The dragon uses one of the following breath weapons:\n\nFire Breath. The dragon exhales fire in a 60-foot cone. Each creature in that area must make a DC 21 Dexterity saving throw, taking 66 (12d10) fire damage on a failed save, or half as much damage on a successful one.\n\nWeakening Breath. The dragon exhales gas in a 60-foot cone. Each creature in that area must succeed on a DC 21 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." },
            { name: "Change Shape", description: "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form." }
        ],
        legendaryActions: {
            count: 3,
            actions: [
                { name: "Detect", cost: 1, description: "The dragon makes a Wisdom (Perception) check." },
                { name: "Tail Attack", cost: 1, description: "The dragon makes a tail attack." },
                { name: "Wing Attack (Costs 2 Actions)", cost: 2, description: "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6+8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed." }
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
        speed: { walk: "40 ft.", fly: "80 ft.", swim: "40 ft." },
        abilityScores: { str: 23, dex: 12, con: 21, int: 18, wis: 15, cha: 17 },
        savingThrows: { dex: 6, con: 10, wis: 7, cha: 8 },
        skills: { deception: 8, insight: 7, perception: 12, persuasion: 8, stealth: 6 },
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft.", "passive Perception 22"],
        languages: "Common, Draconic",
        cr: 15,
        traits: [
            { name: "Amphibious", description: "The dragon can breathe air and water." },
            { name: "Legendary Resistance (3/Day)", description: "If the dragon fails a saving throw, it can choose to succeed instead." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", type: "melee", attackBonus: 11, reach: 10, damage: "2d10+6 piercing plus 2d6 poison" },
            { name: "Claw", type: "melee", attackBonus: 11, reach: 5, damage: "2d6+6 slashing" },
            { name: "Tail", type: "melee", attackBonus: 11, reach: 15, damage: "2d8+6 bludgeoning" },
            { name: "Frightful Presence", description: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute." },
            { name: "Poison Breath (Recharge 5-6)", description: "The dragon exhales poisonous gas in a 60-foot cone. Each creature in that area must make a DC 18 Constitution saving throw, taking 56 (16d6) poison damage on a failed save, or half as much damage on a successful one." }
        ],
        legendaryActions: {
            count: 3,
            actions: [
                { name: "Detect", cost: 1, description: "The dragon makes a Wisdom (Perception) check." },
                { name: "Tail Attack", cost: 1, description: "The dragon makes a tail attack." },
                { name: "Wing Attack (Costs 2 Actions)", cost: 2, description: "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6+6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed." }
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
        speed: { walk: "40 ft.", climb: "40 ft.", fly: "80 ft." },
        abilityScores: { str: 27, dex: 10, con: 25, int: 16, wis: 13, cha: 21 },
        savingThrows: { dex: 6, con: 13, wis: 7, cha: 11 },
        skills: { perception: 13, stealth: 6 },
        damageImmunities: ["fire"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft.", "passive Perception 23"],
        languages: "Common, Draconic",
        cr: 17,
        traits: [
            { name: "Legendary Resistance (3/Day)", description: "If the dragon fails a saving throw, it can choose to succeed instead." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", type: "melee", attackBonus: 14, reach: 10, damage: "2d10+8 piercing plus 2d6 fire" },
            { name: "Claw", type: "melee", attackBonus: 14, reach: 5, damage: "2d6+8 slashing" },
            { name: "Tail", type: "melee", attackBonus: 14, reach: 15, damage: "2d8+8 bludgeoning" },
            { name: "Frightful Presence", description: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute." },
            { name: "Fire Breath (Recharge 5-6)", description: "The dragon exhales fire in a 60-foot cone. Each creature in that area must make a DC 21 Dexterity saving throw, taking 63 (18d6) fire damage on a failed save, or half as much damage on a successful one." }
        ],
        legendaryActions: {
            count: 3,
            actions: [
                { name: "Detect", cost: 1, description: "The dragon makes a Wisdom (Perception) check." },
                { name: "Tail Attack", cost: 1, description: "The dragon makes a tail attack." },
                { name: "Wing Attack (Costs 2 Actions)", cost: 2, description: "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6+8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed." }
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
        speed: { walk: "40 ft.", fly: "80 ft." },
        abilityScores: { str: 27, dex: 10, con: 25, int: 16, wis: 13, cha: 21 },
        savingThrows: { dex: 5, con: 12, wis: 6, cha: 10 },
        skills: { arcana: 8, history: 8, perception: 11, stealth: 5 },
        damageImmunities: ["cold"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft.", "passive Perception 21"],
        languages: "Common, Draconic",
        cr: 16,
        traits: [
            { name: "Legendary Resistance (3/Day)", description: "If the dragon fails a saving throw, it can choose to succeed instead." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", type: "melee", attackBonus: 13, reach: 10, damage: "2d10+8 piercing" },
            { name: "Claw", type: "melee", attackBonus: 13, reach: 5, damage: "2d6+8 slashing" },
            { name: "Tail", type: "melee", attackBonus: 13, reach: 15, damage: "2d8+8 bludgeoning" },
            { name: "Frightful Presence", description: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 18 Wisdom saving throw or become frightened for 1 minute." },
            { name: "Breath Weapons (Recharge 5-6)", description: "The dragon uses one of the following breath weapons:\n\nCold Breath. The dragon exhales an icy blast in a 60-foot cone. Each creature in that area must make a DC 20 Constitution saving throw, taking 58 (13d8) cold damage on a failed save, or half as much damage on a successful one.\n\nParalyzing Breath. The dragon exhales paralyzing gas in a 60-foot cone. Each creature in that area must succeed on a DC 20 Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." },
            { name: "Change Shape", description: "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form." }
        ],
        legendaryActions: {
            count: 3,
            actions: [
                { name: "Detect", cost: 1, description: "The dragon makes a Wisdom (Perception) check." },
                { name: "Tail Attack", cost: 1, description: "The dragon makes a tail attack." },
                { name: "Wing Attack (Costs 2 Actions)", cost: 2, description: "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 21 Dexterity saving throw or take 15 (2d6+8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed." }
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
        speed: { walk: "40 ft.", burrow: "30 ft.", fly: "80 ft.", swim: "40 ft." },
        abilityScores: { str: 22, dex: 10, con: 22, int: 8, wis: 12, cha: 12 },
        savingThrows: { dex: 5, con: 11, wis: 6, cha: 6 },
        skills: { perception: 11, stealth: 5 },
        damageImmunities: ["cold"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft.", "passive Perception 21"],
        languages: "Common, Draconic",
        cr: 13,
        traits: [
            { name: "Ice Walk", description: "The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn't cost it extra movement." },
            { name: "Legendary Resistance (3/Day)", description: "If the dragon fails a saving throw, it can choose to succeed instead." }
        ],
        actions: [
            { name: "Multiattack", description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", type: "melee", attackBonus: 11, reach: 10, damage: "2d10+6 piercing plus 1d8 cold" },
            { name: "Claw", type: "melee", attackBonus: 11, reach: 5, damage: "2d6+6 slashing" },
            { name: "Tail", type: "melee", attackBonus: 11, reach: 15, damage: "2d8+6 bludgeoning" },
            { name: "Frightful Presence", description: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 14 Wisdom saving throw or become frightened for 1 minute." },
            { name: "Cold Breath (Recharge 5-6)", description: "The dragon exhales an icy blast in a 60-foot cone. Each creature in that area must make a DC 19 Constitution saving throw, taking 54 (12d8) cold damage on a failed save, or half as much damage on a successful one." }
        ],
        legendaryActions: {
            count: 3,
            actions: [
                { name: "Detect", cost: 1, description: "The dragon makes a Wisdom (Perception) check." },
                { name: "Tail Attack", cost: 1, description: "The dragon makes a tail attack." },
                { name: "Wing Attack (Costs 2 Actions)", cost: 2, description: "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6+6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed." }
            ]
        }
    },
    "air-elemental": {
        name: "Air Elemental",
        source: "MM",
        size: "large",
        type: "elemental",
        alignment: "neutral",
        ac: 15,
        hp: 90,
        hitDice: "12d10+24",
        speed: { walk: "0 ft.", fly: "90 ft. (hover)" },
        abilityScores: { str: 14, dex: 20, con: 14, int: 6, wis: 10, cha: 6 },
        damageResistances: ["lightning", "thunder", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["exhaustion", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained", "unconscious"],
        senses: ["darkvision 60 ft.", "passive Perception 10"],
        languages: "Auran",
        cr: 5,
        traits: [
            { name: "Air Form", description: "The elemental can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing." }
        ],
        actions: [
            { name: "Multiattack", description: "The elemental makes two slam attacks." },
            { name: "Slam", type: "melee", attackBonus: 8, reach: 5, damage: "2d8+5 bludgeoning" },
            { name: "Whirlwind (Recharge 4-6)", description: "Each creature in the elemental's space must make a DC 13 Strength saving throw. On a failure, a target takes 15 (3d8+2) bludgeoning damage and is flung up 20 feet away from the elemental in a random direction and knocked prone. If a thrown target strikes an object, such as a wall or floor, the target takes 3 (1d6) bludgeoning damage for every 10 feet it was thrown. If the target is thrown at another creature, that creature must succeed on a DC 13 Dexterity saving throw or take the same damage and be knocked prone." }
        ]
    },
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
        speed: { walk: "25 ft." },
        abilityScores: { str: 14, dex: 11, con: 13, int: 1, wis: 3, cha: 1 },
        damageImmunities: ["poison", "psychic"],
        conditionImmunities: ["blinded", "charmed", "deafened", "exhaustion", "frightened", "paralyzed", "petrified", "poisoned"],
        senses: ["blindsight 60 ft. (blind beyond this radius)", "passive Perception 6"],
        languages: "—",
        cr: 1,
        traits: [
            { name: "Antimagic Susceptibility", description: "The armor is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the armor must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute." },
            { name: "False Appearance", description: "While the armor remains motionless, it is indistinguishable from a normal suit of armor." }
        ],
        actions: [
            { name: "Multiattack", description: "The armor makes two melee attacks." },
            { name: "Slam", type: "melee", attackBonus: 4, reach: 5, damage: "1d6+2 bludgeoning" }
        ]
    },
    "ankheg": {
        name: "Ankheg",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 14,
        acType: "natural armor (11 while prone)",
        hp: 39,
        hitDice: "6d10+6",
        speed: { walk: "30 ft.", burrow: "10 ft." },
        abilityScores: { str: 17, dex: 11, con: 13, int: 1, wis: 13, cha: 6 },
        senses: ["darkvision 60 ft.", "tremorsense 60 ft.", "passive Perception 11"],
        languages: "—",
        cr: 2,
        actions: [
            { name: "Bite", type: "melee", attackBonus: 5, reach: 5, damage: "2d6+3 slashing plus 1d6 acid", additionalText: "If the target is a Large or smaller creature, it is grappled (escape DC 13). Until this grapple ends, the ankheg can bite only the grappled creature and has advantage on attack rolls to do so." },
            { name: "Acid Spray (Recharge 6)", description: "The ankheg spits acid in a line that is 30 feet long and 5 feet wide, provided that it has no creature grappled. Each creature in that line must make a DC 13 Dexterity saving throw, taking 10 (3d6) acid damage on a failed save, or half as much damage on a successful one." }
        ]
    },
    "ape": {
        name: "Ape",
        source: "MM",
        size: "medium",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        hp: 19,
        hitDice: "3d8+6",
        speed: { walk: "30 ft.", climb: "30 ft." },
        abilityScores: { str: 16, dex: 14, con: 14, int: 6, wis: 12, cha: 7 },
        skills: { athletics: 5, perception: 3 },
        senses: ["passive Perception 13"],
        languages: "—",
        cr: 0.5,
        actions: [
            { name: "Multiattack", description: "The ape makes two fist attacks." },
            { name: "Fist", type: "melee", attackBonus: 5, reach: 5, damage: "1d6+3 bludgeoning" },
            { name: "Rock", type: "ranged", attackBonus: 5, range: "25/50 ft.", damage: "1d6+3 bludgeoning" }
        ]
    },
    "archmage": {
        name: "Archmage",
        source: "MM",
        size: "medium",
        type: "humanoid",
        tags: ["any race"],
        alignment: "any alignment",
        ac: 12,
        acType: "15 with mage armor",
        hp: 99,
        hitDice: "18d8+18",
        speed: { walk: "30 ft." },
        abilityScores: { str: 10, dex: 14, con: 12, int: 20, wis: 15, cha: 16 },
        savingThrows: { int: 9, wis: 6 },
        skills: { arcana: 13, history: 13 },
        damageResistances: ["damage from spells; nonmagical bludgeoning, piercing, and slashing (from stoneskin)"],
        senses: ["passive Perception 12"],
        languages: "any six languages",
        cr: 12,
        traits: [
            { name: "Magic Resistance", description: "The archmage has advantage on saving throws against spells and other magical effects." }
        ],
        spellcasting: {
            ability: "int",
            saveDC: 17,
            attackBonus: 9,
            level: 18,
            slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 1, 7: 1, 8: 1, 9: 1 },
            spells: {
                cantrips: ["fire-bolt", "light", "mage-hand", "prestidigitation", "shocking-grasp"],
                1: ["detect-magic", "identify", "mage-armor", "magic-missile"],
                2: ["detect-thoughts", "mirror-image", "misty-step"],
                3: ["counterspell", "fly", "lightning-bolt"],
                4: ["banishment", "fire-shield", "stoneskin"],
                5: ["cone-of-cold", "scrying", "wall-of-force"],
                6: ["globe-of-invulnerability"],
                7: ["teleport"],
                8: ["mind-blank"],
                9: ["time-stop"]
            },
            notes: "The archmage casts mage armor and stoneskin on itself before combat."
        },
        actions: [
            { name: "Dagger", type: "melee", attackBonus: 6, reach: 5, damage: "1d4+2 piercing" },
            { name: "Dagger (Ranged)", type: "ranged", attackBonus: 6, range: "20/60 ft.", damage: "1d4+2 piercing" }
        ]
    },
    "assassin": {
        name: "Assassin",
        source: "MM",
        size: "medium",
        type: "humanoid",
        tags: ["any race"],
        alignment: "any non-good alignment",
        ac: 15,
        acType: "studded leather",
        hp: 78,
        hitDice: "12d8+24",
        speed: { walk: "30 ft." },
        abilityScores: { str: 11, dex: 16, con: 14, int: 13, wis: 11, cha: 10 },
        savingThrows: { dex: 6, int: 4 },
        skills: { acrobatics: 6, deception: 3, perception: 3, stealth: 9 },
        damageResistances: ["poison"],
        senses: ["passive Perception 13"],
        languages: "Thieves' cant plus any two languages",
        cr: 8,
        traits: [
            { name: "Assassinate", description: "During its first turn, the assassin has advantage on attack rolls against any creature that hasn't taken a turn. Any hit the assassin scores against a surprised creature is a critical hit." },
            { name: "Evasion", description: "If the assassin is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, the assassin instead takes no damage if it succeeds on the saving throw, and only half damage if it fails." },
            { name: "Sneak Attack (1/Turn)", description: "The assassin deals an extra 14 (4d6) damage when it hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 feet of an ally of the assassin that isn't incapacitated and the assassin doesn't have disadvantage on the attack roll." }
        ],
        actions: [
            { name: "Multiattack", description: "The assassin makes two shortsword attacks." },
            { name: "Shortsword", type: "melee", attackBonus: 6, reach: 5, damage: "1d6+3 piercing", additionalText: "The target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one." },
            { name: "Light Crossbow", type: "ranged", attackBonus: 6, range: "80/320 ft.", damage: "1d8+3 piercing", additionalText: "The target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one." }
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
        speed: { walk: "20 ft." },
        abilityScores: { str: 3, dex: 8, con: 11, int: 10, wis: 10, cha: 6 },
        damageVulnerabilities: ["fire"],
        damageResistances: ["piercing"],
        senses: ["passive Perception 10"],
        languages: "one language known by its creator",
        cr: 0,
        traits: [
            { name: "False Appearance", description: "While the shrub remains motionless, it is indistinguishable from a normal shrub." }
        ],
        actions: [
            { name: "Rake", type: "melee", attackBonus: 1, reach: 5, damage: "1d4-1 slashing" }
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
        speed: { walk: "20 ft." },
        abilityScores: { str: 19, dex: 6, con: 15, int: 10, wis: 10, cha: 7 },
        damageVulnerabilities: ["fire"],
        damageResistances: ["bludgeoning, piercing"],
        senses: ["passive Perception 10"],
        languages: "one language known by its creator",
        cr: 2,
        traits: [
            { name: "False Appearance", description: "While the tree remains motionless, it is indistinguishable from a normal tree." }
        ],
        actions: [
            { name: "Slam", type: "melee", attackBonus: 6, reach: 10, damage: "3d6+4 bludgeoning" }
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
        speed: { walk: "50 ft." },
        abilityScores: { str: 14, dex: 12, con: 12, int: 2, wis: 10, cha: 5 },
        senses: ["passive Perception 10"],
        languages: "—",
        cr: 0.25,
        actions: [
            { name: "Beak", type: "melee", attackBonus: 4, reach: 5, damage: "1d8+2 slashing" }
        ]
    },
    "azer": {
        name: "Azer",
        source: "MM",
        size: "medium",
        type: "elemental",
        alignment: "lawful neutral",
        ac: 17,
        acType: "natural armor, shield",
        hp: 39,
        hitDice: "6d8+12",
        speed: { walk: "30 ft." },
        abilityScores: { str: 17, dex: 12, con: 15, int: 12, wis: 13, cha: 10 },
        savingThrows: { con: 4 },
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["poisoned"],
        senses: ["passive Perception 11"],
        languages: "Ignan",
        cr: 2,
        traits: [
            { name: "Heated Body", description: "A creature that touches the azer or hits it with a melee attack while within 5 feet of it takes 5 (1d10) fire damage." },
            { name: "Heated Weapons", description: "When the azer hits with a metal melee weapon, it deals an extra 3 (1d6) fire damage (included in the attack)." },
            { name: "Illumination", description: "The azer sheds bright light in a 10-foot radius and dim light for an additional 10 feet." }
        ],
        actions: [
            { name: "Warhammer", type: "melee", attackBonus: 5, reach: 5, damage: "1d8+3 bludgeoning plus 1d6 fire" }
        ]
    }
};

// Add to global monsters object
if (typeof allMonsters === 'undefined') {
    var allMonsters = {};
}
Object.assign(allMonsters, monstersMM_A);
