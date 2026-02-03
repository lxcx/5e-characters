// Expansion Pack 46 - More Creatures
// Additional monsters

const MONSTERS_EXPANSION46 = {
    // ===== More Classic Monsters =====
    "cockatrice": {
        name: "Cockatrice",
        source: "MM",
        size: "small",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 11,
        hp: 27,
        hitDice: "6d6+6",
        speed: { walk: 20, fly: 40 },
        abilityScores: { str: 6, dex: 12, con: 12, int: 2, wis: 13, cha: 5 },
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: "1/2",
        environment: ["grassland"],
        role: "controller",
        tags: ["monstrosity"],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 3 (1d4+1) piercing damage, and the target must succeed on a DC 11 Constitution saving throw against being magically petrified. On a failed save, the creature begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified for 24 hours." }
        ]
    },
    "death-dog": {
        name: "Death Dog",
        source: "MM",
        size: "medium",
        type: "monstrosity",
        alignment: "neutral evil",
        ac: 12,
        hp: 39,
        hitDice: "6d8+12",
        speed: { walk: 40 },
        abilityScores: { str: 15, dex: 14, con: 14, int: 3, wis: 13, cha: 6 },
        skills: { perception: 5, stealth: 4 },
        senses: ["darkvision 120 ft."],
        languages: "—",
        cr: 1,
        environment: ["desert"],
        role: "brute",
        tags: ["monstrosity"],
        traits: [
            { name: "Two-Headed", description: "The dog has advantage on Wisdom (Perception) checks and on saving throws against being blinded, charmed, deafened, frightened, stunned, or knocked unconscious." }
        ],
        actions: [
            { name: "Multiattack", description: "The dog makes two bite attacks." },
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6+2) piercing damage. If the target is a creature, it must succeed on a DC 12 Constitution saving throw against disease or become poisoned until the disease is cured. Every 24 hours that elapse, the creature must repeat the saving throw, reducing its hit point maximum by 5 (1d10) on a failure. This reduction lasts until the disease is cured. The creature dies if the disease reduces its hit point maximum to 0." }
        ]
    },
    "winter-wolf": {
        name: "Winter Wolf",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "neutral evil",
        ac: 13,
        acType: "natural armor",
        hp: 75,
        hitDice: "10d10+20",
        speed: { walk: 50 },
        abilityScores: { str: 18, dex: 13, con: 14, int: 7, wis: 12, cha: 8 },
        skills: { perception: 5, stealth: 3 },
        damageImmunities: ["cold"],
        senses: [],
        languages: "Common, Giant, Winter Wolf",
        cr: 3,
        environment: ["arctic"],
        role: "brute",
        tags: ["monstrosity"],
        traits: [
            { name: "Keen Hearing and Smell", description: "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell." },
            { name: "Pack Tactics", description: "The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 feet of the creature and the ally isn't incapacitated." },
            { name: "Snow Camouflage", description: "The wolf has advantage on Dexterity (Stealth) checks made to hide in snowy terrain." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6+4) piercing damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone." },
            { name: "Cold Breath (Recharge 5-6)", description: "The wolf exhales a blast of freezing wind in a 15-foot cone. Each creature in that area must make a DC 12 Dexterity saving throw, taking 18 (4d8) cold damage on a failed save, or half as much damage on a successful one." }
        ]
    },
    "worg": {
        name: "Worg",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "neutral evil",
        ac: 13,
        acType: "natural armor",
        hp: 26,
        hitDice: "4d10+4",
        speed: { walk: 50 },
        abilityScores: { str: 16, dex: 13, con: 13, int: 7, wis: 11, cha: 8 },
        skills: { perception: 4 },
        senses: ["darkvision 60 ft."],
        languages: "Goblin, Worg",
        cr: "1/2",
        environment: ["forest", "grassland", "hill"],
        role: "brute",
        tags: ["monstrosity"],
        traits: [
            { name: "Keen Hearing and Smell", description: "The worg has advantage on Wisdom (Perception) checks that rely on hearing or smell." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6+3) piercing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone." }
        ]
    },
    "lamia": {
        name: "Lamia",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "chaotic evil",
        ac: 13,
        acType: "natural armor",
        hp: 97,
        hitDice: "13d10+26",
        speed: { walk: 30 },
        abilityScores: { str: 16, dex: 13, con: 15, int: 14, wis: 15, cha: 16 },
        skills: { deception: 7, insight: 4, stealth: 3 },
        senses: ["darkvision 60 ft."],
        languages: "Abyssal, Common",
        cr: 4,
        environment: ["desert"],
        role: "controller",
        tags: ["monstrosity", "spellcaster"],
        actions: [
            { name: "Multiattack", description: "The lamia makes two attacks: one with its claws and one with its dagger or Intoxicating Touch." },
            { name: "Claws", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 14 (2d10+3) slashing damage." },
            { name: "Dagger", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4+3) piercing damage." },
            { name: "Intoxicating Touch", description: "Melee Spell Attack: +5 to hit, reach 5 ft., one creature. Hit: The target is magically cursed for 1 hour. Until the curse ends, the target has disadvantage on Wisdom saving throws and all ability checks." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 13,
            spells: {
                atWill: ["disguise self (any humanoid form)", "major image"],
                "3/day each": ["charm person", "mirror image", "scrying", "suggestion"],
                "1/day": ["geas"]
            }
        }
    },
    "leucrotta": {
        name: "Leucrotta",
        source: "VGM",
        size: "large",
        type: "monstrosity",
        alignment: "chaotic evil",
        ac: 14,
        acType: "natural armor",
        hp: 67,
        hitDice: "9d10+18",
        speed: { walk: 50 },
        abilityScores: { str: 18, dex: 14, con: 15, int: 9, wis: 12, cha: 6 },
        skills: { deception: 2, perception: 3 },
        senses: ["darkvision 60 ft."],
        languages: "Abyssal, Gnoll",
        cr: 3,
        environment: ["desert", "grassland"],
        role: "brute",
        tags: ["monstrosity"],
        traits: [
            { name: "Keen Smell", description: "The leucrotta has advantage on Wisdom (Perception) checks that rely on smell." },
            { name: "Kicking Retreat", description: "If the leucrotta attacks with its hooves, it can take the Disengage action as a bonus action." },
            { name: "Mimicry", description: "The leucrotta can mimic animal sounds and humanoid voices. A creature that hears the sounds can tell they are imitations with a successful DC 14 Wisdom (Insight) check." },
            { name: "Rampage", description: "When the leucrotta reduces a creature to 0 hit points with a melee attack on its turn, the leucrotta can take a bonus action to move up to half its speed and make an attack with its hooves." }
        ],
        actions: [
            { name: "Multiattack", description: "The leucrotta makes two attacks: one with its bite and one with its hooves." },
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8+4) piercing damage. If the leucrotta scores a critical hit, it rolls the damage dice three times, instead of twice." },
            { name: "Hooves", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6+4) bludgeoning damage." }
        ]
    },
    "catoblepas": {
        name: "Catoblepas",
        source: "VGM",
        size: "large",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 14,
        acType: "natural armor",
        hp: 84,
        hitDice: "8d10+40",
        speed: { walk: 30 },
        abilityScores: { str: 19, dex: 12, con: 21, int: 3, wis: 14, cha: 8 },
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 5,
        environment: ["swamp"],
        role: "controller",
        tags: ["monstrosity"],
        traits: [
            { name: "Keen Smell", description: "The catoblepas has advantage on Wisdom (Perception) checks that rely on smell." },
            { name: "Stench", description: "Any creature other than a catoblepas that starts its turn within 10 feet of the catoblepas must succeed on a DC 16 Constitution saving throw or be poisoned until the start of the creature's next turn. On a successful saving throw, the creature is immune to the stench of any catoblepas for 1 hour." }
        ],
        actions: [
            { name: "Tail", description: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 21 (5d6+4) bludgeoning damage, and the target must succeed on a DC 16 Constitution saving throw or be stunned until the start of the catoblepas's next turn." },
            { name: "Death Ray (Recharge 5-6)", description: "The catoblepas targets one creature it can see within 30 feet of it. The target must make a DC 16 Constitution saving throw, taking 36 (8d8) necrotic damage on a failed save, or half as much damage on a successful one. If the saving throw fails by 5 or more, the target instead takes 64 necrotic damage. The target dies if reduced to 0 hit points by this ray." }
        ]
    },
    "gorgon": {
        name: "Gorgon",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 19,
        acType: "natural armor",
        hp: 114,
        hitDice: "12d10+48",
        speed: { walk: 40 },
        abilityScores: { str: 20, dex: 11, con: 18, int: 2, wis: 12, cha: 7 },
        skills: { perception: 4 },
        conditionImmunities: ["petrified"],
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 5,
        environment: ["grassland", "forest", "hill"],
        role: "brute",
        tags: ["monstrosity"],
        traits: [
            { name: "Trampling Charge", description: "If the gorgon moves at least 20 feet straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 16 Strength saving throw or be knocked prone. If the target is prone, the gorgon can make one attack with its hooves against it as a bonus action." }
        ],
        actions: [
            { name: "Gore", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 18 (2d12+5) piercing damage." },
            { name: "Hooves", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 16 (2d10+5) bludgeoning damage." },
            { name: "Petrifying Breath (Recharge 5-6)", description: "The gorgon exhales petrifying gas in a 30-foot cone. Each creature in that area must succeed on a DC 13 Constitution saving throw. On a failed save, a target begins to turn to stone and is restrained. The restrained target must repeat the saving throw at the end of its next turn. On a success, the effect ends on the target. On a failure, the target is petrified until freed by the greater restoration spell or other magic." }
        ]
    },
    "yuan-ti-abomination": {
        name: "Yuan-ti Abomination",
        source: "MM",
        size: "large",
        type: "monstrosity",
        subtype: "shapechanger, yuan-ti",
        alignment: "neutral evil",
        ac: 15,
        acType: "natural armor",
        hp: 127,
        hitDice: "15d10+45",
        speed: { walk: 40 },
        abilityScores: { str: 19, dex: 16, con: 17, int: 17, wis: 15, cha: 18 },
        skills: { perception: 5, stealth: 6 },
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "Abyssal, Common, Draconic",
        cr: 7,
        environment: ["forest", "swamp"],
        role: "controller",
        tags: ["monstrosity", "yuan-ti", "shapechanger", "spellcaster"],
        traits: [
            { name: "Shapechanger", description: "The yuan-ti can use its action to polymorph into a Large snake, or back into its true form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It doesn't change form if it dies." },
            { name: "Magic Resistance", description: "The yuan-ti has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack (Abomination Form Only)", description: "The yuan-ti makes two ranged attacks or three melee attacks, but can use its bite and constrict attacks only once each." },
            { name: "Bite", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 7 (1d6+4) piercing damage plus 10 (3d6) poison damage." },
            { name: "Constrict", description: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 11 (2d6+4) bludgeoning damage, and the target is grappled (escape DC 14). Until this grapple ends, the target is restrained, and the yuan-ti can't constrict another target." },
            { name: "Scimitar (Abomination Form Only)", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6+4) slashing damage." },
            { name: "Longbow (Abomination Form Only)", description: "Ranged Weapon Attack: +6 to hit, range 150/600 ft., one target. Hit: 12 (2d8+3) piercing damage plus 10 (3d6) poison damage." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 15,
            spells: {
                atWill: ["animal friendship (snakes only)"],
                "3/day": ["suggestion"],
                "1/day": ["fear"]
            }
        }
    },
    "yuan-ti-malison": {
        name: "Yuan-ti Malison",
        source: "MM",
        size: "medium",
        type: "monstrosity",
        subtype: "shapechanger, yuan-ti",
        alignment: "neutral evil",
        ac: 12,
        hp: 66,
        hitDice: "12d8+12",
        speed: { walk: 30 },
        abilityScores: { str: 16, dex: 14, con: 13, int: 14, wis: 12, cha: 16 },
        skills: { deception: 5, stealth: 4 },
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "Abyssal, Common, Draconic",
        cr: 3,
        environment: ["forest", "swamp"],
        role: "controller",
        tags: ["monstrosity", "yuan-ti", "shapechanger", "spellcaster"],
        traits: [
            { name: "Shapechanger", description: "The yuan-ti can use its action to polymorph into a Medium snake, or back into its true form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It doesn't change form if it dies." },
            { name: "Magic Resistance", description: "The yuan-ti has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack (Humanoid or Hybrid Form Only)", description: "The yuan-ti makes two ranged attacks or two melee attacks, but can only use its bite attack once." },
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 5 (1d4+3) piercing damage plus 7 (2d6) poison damage." },
            { name: "Scimitar (Humanoid or Hybrid Form Only)", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6+3) slashing damage." },
            { name: "Longbow (Humanoid or Hybrid Form Only)", description: "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit: 6 (1d8+2) piercing damage plus 7 (2d6) poison damage." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 13,
            spells: {
                atWill: ["animal friendship (snakes only)"],
                "3/day": ["suggestion"]
            }
        }
    }
};
