// Expansion Pack 2 - More Creatures
// Continuing toward 1000 monsters

const MONSTERS_EXPANSION2 = {
    // ===== More Fey =====
    
    
    
    
    
    
    "yeth-hound": {
        name: "Yeth Hound",
        source: "VGtM",
        size: "large",
        type: "fey",
        alignment: "neutral evil",
        ac: 14,
        acType: "natural armor",
        hp: 51,
        hitDice: "6d10+18",
        speed: { walk: 40, fly: 40 },
        abilityScores: { str: 18, dex: 17, con: 16, int: 5, wis: 12, cha: 7 },
        skills: { perception: 5 },
        damageImmunities: ["bludgeoning, piercing, and slashing from nonmagical attacks not made with silvered weapons"],
        conditionImmunities: ["charmed", "exhaustion", "frightened"],
        senses: ["darkvision 60 ft."],
        languages: "understands Common, Elvish, and Sylvan but can't speak",
        cr: 4,
        environment: ["forest", "feywild"],
        role: "skirmisher",
        tags: ["fey", "hound"],
        traits: [
            { name: "Keen Hearing and Smell", description: "The yeth hound has advantage on Wisdom (Perception) checks that rely on hearing or smell." },
            { name: "Sunlight Banishment", description: "If the yeth hound starts its turn in sunlight, it is transported to the Ethereal Plane. While sunlight shines on the spot from which it vanished, the hound must remain in the Deep Ethereal. After sunset, it returns to the Border Ethereal at the same spot, whereupon it typically sets out to find its pack or its master. The hound is visible on the Material Plane while it is in the Border Ethereal, and vice versa, but it can't affect or be affected by anything on the other plane." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6+4) piercing damage, plus 14 (4d6) psychic damage if the target is frightened." },
            { name: "Baleful Baying", description: "The yeth hound bays magically. Every enemy within 300 feet of the hound that can hear it must succeed on a DC 13 Wisdom saving throw or be frightened until the end of the hound's next turn or until the hound is incapacitated. A frightened target that starts its turn within 30 feet of the hound must use all its movement on that turn to get as far from the hound as possible." }
        ]
    },

    // ===== Plants =====
    
    "myconid-sovereign": {
        name: "Myconid Sovereign",
        source: "MM",
        size: "large",
        type: "plant",
        alignment: "lawful neutral",
        ac: 13,
        acType: "natural armor",
        hp: 60,
        hitDice: "8d10+16",
        speed: { walk: 30 },
        abilityScores: { str: 12, dex: 10, con: 14, int: 13, wis: 15, cha: 10 },
        senses: ["darkvision 120 ft."],
        languages: "—",
        cr: 2,
        environment: ["underdark"],
        role: "leader",
        tags: ["plant", "fungus"],
        traits: [
            { name: "Distress Spores", description: "When the myconid takes damage, all other myconids within 240 feet of it can sense its pain." },
            { name: "Sun Sickness", description: "While in sunlight, the myconid has disadvantage on ability checks, attack rolls, and saving throws. The myconid dies if it spends more than 1 hour in direct sunlight." }
        ],
        actions: [
            { name: "Multiattack", description: "The myconid uses either its Hallucination Spores or its Pacifying Spores, then makes a fist attack." },
            { name: "Fist", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 8 (3d4+1) bludgeoning damage plus 7 (3d4) poison damage." },
            { name: "Animating Spores (3/Day)", description: "The myconid targets one corpse of a humanoid or a Large or smaller beast within 5 feet of it and releases spores at the corpse. In 24 hours, the corpse rises as a spore servant." },
            { name: "Hallucination Spores", description: "The myconid ejects spores at one creature it can see within 5 feet of it. The target must succeed on a DC 12 Constitution saving throw or be poisoned for 1 minute. The poisoned target is incapacitated while it hallucinates." },
            { name: "Pacifying Spores", description: "The myconid ejects spores at one creature it can see within 5 feet of it. The target must succeed on a DC 12 Constitution saving throw or be stunned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." },
            { name: "Rapport Spores", description: "A 30-foot radius of spores extends from the myconid. These spores can go around corners and affect only creatures with an Intelligence of 2 or higher that aren't undead, constructs, or elementals. Affected creatures can communicate telepathically with one another while they are within 30 feet of each other." }
        ]
    },
    "myconid-adult": {
        name: "Myconid Adult",
        source: "MM",
        size: "medium",
        type: "plant",
        alignment: "lawful neutral",
        ac: 12,
        acType: "natural armor",
        hp: 22,
        hitDice: "4d8+4",
        speed: { walk: 20 },
        abilityScores: { str: 10, dex: 10, con: 12, int: 10, wis: 13, cha: 7 },
        senses: ["darkvision 120 ft."],
        languages: "—",
        cr: 0.5,
        environment: ["underdark"],
        role: "soldier",
        tags: ["plant", "fungus"],
        traits: [
            { name: "Distress Spores", description: "When the myconid takes damage, all other myconids within 240 feet of it can sense its pain." },
            { name: "Sun Sickness", description: "While in sunlight, the myconid has disadvantage on ability checks, attack rolls, and saving throws. The myconid dies if it spends more than 1 hour in direct sunlight." }
        ],
        actions: [
            { name: "Fist", description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 5 (2d4) bludgeoning damage plus 5 (2d4) poison damage." },
            { name: "Pacifying Spores (3/Day)", description: "The myconid ejects spores at one creature it can see within 5 feet of it. The target must succeed on a DC 11 Constitution saving throw or be stunned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." },
            { name: "Rapport Spores", description: "A 20-foot radius of spores extends from the myconid. These spores can go around corners and affect only creatures with an Intelligence of 2 or higher that aren't undead, constructs, or elementals." }
        ]
    },
    "myconid-sprout": {
        name: "Myconid Sprout",
        source: "MM",
        size: "small",
        type: "plant",
        alignment: "lawful neutral",
        ac: 10,
        hp: 7,
        hitDice: "2d6",
        speed: { walk: 10 },
        abilityScores: { str: 8, dex: 10, con: 10, int: 8, wis: 11, cha: 5 },
        senses: ["darkvision 120 ft."],
        languages: "—",
        cr: 0,
        environment: ["underdark"],
        role: "minion",
        tags: ["plant", "fungus"],
        traits: [
            { name: "Distress Spores", description: "When the myconid takes damage, all other myconids within 240 feet of it can sense its pain." },
            { name: "Sun Sickness", description: "While in sunlight, the myconid has disadvantage on ability checks, attack rolls, and saving throws. The myconid dies if it spends more than 1 hour in direct sunlight." }
        ],
        actions: [
            { name: "Fist", description: "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 1 (1d4-1) bludgeoning damage plus 2 (1d4) poison damage." },
            { name: "Rapport Spores", description: "A 10-foot radius of spores extends from the myconid. These spores can go around corners and affect only creatures with an Intelligence of 2 or higher that aren't undead, constructs, or elementals." }
        ]
    },
    

    // ===== More Oozes =====
    
    
    
};
