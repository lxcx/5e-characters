// D&D 5E Monster Manual - Monsters A-B
// Source: Monster Manual (MM)

const monstersMM_A = {
    // ===== A =====
    
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
    }};
