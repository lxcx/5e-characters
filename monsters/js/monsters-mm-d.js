// D&D 5E Monster Manual - Monsters D
// Source: Monster Manual (MM)

const monstersMM_D = {
    // ===== D =====
    "darkmantle": {
        name: "Darkmantle",
        source: "MM",
        size: "small",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 11,
        hp: 22,
        hitDice: "5d6+5",
        speed: { walk: "10 ft.", fly: "30 ft." },
        abilityScores: { str: 16, dex: 12, con: 13, int: 2, wis: 10, cha: 5 },
        skills: { stealth: 3 },
        senses: ["blindsight 60 ft.", "passive Perception 10"],
        languages: "—",
        cr: 0.5,
        traits: [
            { name: "Echolocation", description: "The darkmantle can't use its blindsight while deafened." },
            { name: "False Appearance", description: "While the darkmantle remains motionless, it is indistinguishable from a cave formation such as a stalactite or stalagmite." }
        ],
        actions: [
            { name: "Crush", type: "melee", attackBonus: 5, reach: 5, damage: "1d6+3 bludgeoning", additionalText: "The darkmantle attaches to the target. If the target is Medium or smaller and the darkmantle has advantage on the attack roll, it attaches by engulfing the target's head, and the target is also blinded and unable to breathe while the darkmantle is attached in this way.\n\nWhile attached to the target, the darkmantle can attack no other creature except the target but has advantage on its attack rolls. The darkmantle's speed also becomes 0, it can't benefit from any bonus to its speed, and it moves with the target.\n\nA creature can detach the darkmantle by taking an action to make a DC 13 Strength check and succeeding." },
            { name: "Darkness Aura (1/Day)", description: "A 15-foot radius of magical darkness extends out from the darkmantle, moves with it, and spreads around corners. The darkness lasts as long as the darkmantle maintains concentration, up to 10 minutes. Darkvision can't penetrate this darkness, and no natural light can illuminate it. If any of the darkness overlaps with an area of light created by a spell of 2nd level or lower, the spell creating the light is dispelled." }
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
        speed: { walk: "40 ft." },
        abilityScores: { str: 15, dex: 14, con: 14, int: 3, wis: 13, cha: 6 },
        skills: { perception: 5, stealth: 4 },
        senses: ["darkvision 120 ft.", "passive Perception 15"],
        languages: "—",
        cr: 1,
        traits: [
            { name: "Two-Headed", description: "The dog has advantage on Wisdom (Perception) checks and on saving throws against being blinded, charmed, deafened, frightened, stunned, or knocked unconscious." }
        ],
        actions: [
            { name: "Multiattack", description: "The dog makes two bite attacks." },
            { name: "Bite", type: "melee", attackBonus: 4, reach: 5, damage: "1d6+2 piercing", additionalText: "If the target is a creature, it must succeed on a DC 12 Constitution saving throw against disease or become poisoned until the disease is cured. Every 24 hours that elapse, the creature must repeat the saving throw, reducing its hit point maximum by 5 (1d10) on a failure. This reduction lasts until the disease is cured. The creature dies if the disease reduces its hit point maximum to 0." }
        ]
    },
    "death-knight": {
        name: "Death Knight",
        source: "MM",
        size: "medium",
        type: "undead",
        alignment: "chaotic evil",
        ac: 20,
        acType: "plate, shield",
        hp: 180,
        hitDice: "19d8+95",
        speed: { walk: "30 ft." },
        abilityScores: { str: 20, dex: 11, con: 20, int: 12, wis: 16, cha: 18 },
        savingThrows: { dex: 6, wis: 9, cha: 10 },
        damageImmunities: ["necrotic", "poison"],
        conditionImmunities: ["exhaustion", "frightened", "poisoned"],
        senses: ["darkvision 120 ft.", "passive Perception 13"],
        languages: "Abyssal, Common",
        cr: 17,
        traits: [
            { name: "Magic Resistance", description: "The death knight has advantage on saving throws against spells and other magical effects." },
            { name: "Marshal Undead", description: "Unless the death knight is incapacitated, it and undead creatures of its choice within 60 feet of it have advantage on saving throws against features that turn undead." }
        ],
        spellcasting: {
            ability: "cha",
            saveDC: 18,
            attackBonus: 10,
            level: 19,
            slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2 },
            spells: {
                1: ["command", "compelled-duel", "searing-smite"],
                2: ["hold-person", "magic-weapon"],
                3: ["dispel-magic", "elemental-weapon"],
                4: ["banishment", "staggering-smite"],
                5: ["destructive-wave (necrotic)"]
            }
        },
        actions: [
            { name: "Multiattack", description: "The death knight makes three longsword attacks." },
            { name: "Longsword", type: "melee", attackBonus: 11, reach: 5, damage: "1d8+5 slashing plus 4d8 necrotic" },
            { name: "Hellfire Orb (1/Day)", description: "The death knight hurls a magical ball of fire that explodes at a point it can see within 120 feet of it. Each creature in a 20-foot-radius sphere centered on that point must make a DC 18 Dexterity saving throw. The sphere spreads around corners. A creature takes 35 (10d6) fire damage and 35 (10d6) necrotic damage on a failed save, or half as much damage on a successful one." }
        ],
        reactions: [
            { name: "Parry", description: "The death knight adds 6 to its AC against one melee attack that would hit it. To do so, the death knight must see the attacker and be wielding a melee weapon." }
        ]
    },
    "death-tyrant": {
        name: "Death Tyrant",
        source: "MM",
        size: "large",
        type: "undead",
        alignment: "lawful evil",
        ac: 19,
        acType: "natural armor",
        hp: 187,
        hitDice: "25d10+50",
        speed: { walk: "0 ft.", fly: "20 ft. (hover)" },
        abilityScores: { str: 10, dex: 14, con: 14, int: 19, wis: 15, cha: 19 },
        savingThrows: { str: 5, con: 7, int: 9, wis: 7, cha: 9 },
        skills: { perception: 12 },
        damageImmunities: ["poison"],
        conditionImmunities: ["charmed", "exhaustion", "paralyzed", "petrified", "poisoned", "prone"],
        senses: ["darkvision 120 ft.", "passive Perception 22"],
        languages: "Deep Speech, Undercommon",
        cr: 14,
        traits: [
            { name: "Negative Energy Cone", description: "The death tyrant's central eye emits an invisible, magical 150-foot cone of negative energy. At the start of each of its turns, the death tyrant decides which way the cone faces and whether the cone is active.\n\nAny creature in that area can't regain hit points. Any humanoid that dies there becomes a zombie under the death tyrant's command. The dead humanoid retains its place in the initiative order and animates at the start of its next turn, provided that its body hasn't been completely destroyed." }
        ],
        actions: [
            { name: "Bite", type: "melee", attackBonus: 5, reach: 5, damage: "4d6 piercing" },
            { name: "Eye Rays", description: "The death tyrant shoots three of the following magical eye rays at random (reroll duplicates), choosing one to three targets it can see within 120 feet of it:\n\n1. Charm Ray. The targeted creature must succeed on a DC 17 Wisdom saving throw or be charmed by the death tyrant for 1 hour.\n\n2. Paralyzing Ray. The targeted creature must succeed on a DC 17 Constitution saving throw or be paralyzed for 1 minute.\n\n3. Fear Ray. The targeted creature must succeed on a DC 17 Wisdom saving throw or be frightened for 1 minute.\n\n4. Slowing Ray. The targeted creature must succeed on a DC 17 Dexterity saving throw or have its speed halved for 1 minute.\n\n5. Enervation Ray. The targeted creature must make a DC 17 Constitution saving throw, taking 36 (8d8) necrotic damage on a failed save, or half as much damage on a successful one.\n\n6. Telekinetic Ray. If the target is a creature, it must succeed on a DC 17 Strength saving throw or the death tyrant moves it up to 30 feet in any direction.\n\n7. Sleep Ray. The targeted creature must succeed on a DC 17 Wisdom saving throw or fall asleep for 1 minute.\n\n8. Petrification Ray. The targeted creature must make a DC 17 Dexterity saving throw or begin turning to stone.\n\n9. Disintegration Ray. If the target is a creature, it must succeed on a DC 17 Dexterity saving throw or take 45 (10d8) force damage.\n\n10. Death Ray. The targeted creature must succeed on a DC 17 Dexterity saving throw or take 55 (10d10) necrotic damage." }
        ],
        legendaryActions: {
            count: 3,
            actions: [
                { name: "Eye Ray", cost: 1, description: "The death tyrant uses one random eye ray." }
            ]
        }
    },
    "deep-gnome": {
        name: "Deep Gnome (Svirfneblin)",
        source: "MM",
        size: "small",
        type: "humanoid",
        tags: ["gnome"],
        alignment: "neutral good",
        ac: 15,
        acType: "chain shirt",
        hp: 16,
        hitDice: "3d6+6",
        speed: { walk: "20 ft." },
        abilityScores: { str: 15, dex: 14, con: 14, int: 12, wis: 10, cha: 9 },
        skills: { investigation: 3, perception: 2, stealth: 4 },
        senses: ["darkvision 120 ft.", "passive Perception 12"],
        languages: "Gnomish, Terran, Undercommon",
        cr: 0.5,
        traits: [
            { name: "Stone Camouflage", description: "The gnome has advantage on Dexterity (Stealth) checks made to hide in rocky terrain." },
            { name: "Gnome Cunning", description: "The gnome has advantage on Intelligence, Wisdom, and Charisma saving throws against magic." }
        ],
        spellcasting: {
            ability: "int",
            saveDC: 11,
            innate: true,
            spells: {
                "at will": ["nondetection (self only)"],
                "1/day each": ["blindness-deafness", "blur", "disguise-self"]
            }
        },
        actions: [
            { name: "War Pick", type: "melee", attackBonus: 4, reach: 5, damage: "1d8+2 piercing" },
            { name: "Poisoned Dart", type: "ranged", attackBonus: 4, range: "30/120 ft.", damage: "1d4+2 piercing", additionalText: "The target must succeed on a DC 12 Constitution saving throw or be poisoned for 1 minute." }
        ]
    },
    "deer": {
        name: "Deer",
        source: "MM",
        size: "medium",
        type: "beast",
        alignment: "unaligned",
        ac: 13,
        hp: 4,
        hitDice: "1d8",
        speed: { walk: "50 ft." },
        abilityScores: { str: 11, dex: 16, con: 11, int: 2, wis: 14, cha: 5 },
        senses: ["passive Perception 12"],
        languages: "—",
        cr: 0,
        actions: [
            { name: "Bite", type: "melee", attackBonus: 2, reach: 5, damage: "1d4 piercing" }
        ]
    },
    "deva": {
        name: "Deva",
        source: "MM",
        size: "medium",
        type: "celestial",
        alignment: "lawful good",
        ac: 17,
        acType: "natural armor",
        hp: 136,
        hitDice: "16d8+64",
        speed: { walk: "30 ft.", fly: "90 ft." },
        abilityScores: { str: 18, dex: 18, con: 18, int: 17, wis: 20, cha: 20 },
        savingThrows: { wis: 9, cha: 9 },
        skills: { insight: 9, perception: 9 },
        damageResistances: ["radiant", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        conditionImmunities: ["charmed", "exhaustion", "frightened"],
        senses: ["darkvision 120 ft.", "passive Perception 19"],
        languages: "all, telepathy 120 ft.",
        cr: 10,
        traits: [
            { name: "Angelic Weapons", description: "The deva's weapon attacks are magical. When the deva hits with any weapon, the weapon deals an extra 4d8 radiant damage (included in the attack)." },
            { name: "Magic Resistance", description: "The deva has advantage on saving throws against spells and other magical effects." }
        ],
        spellcasting: {
            ability: "cha",
            saveDC: 17,
            innate: true,
            spells: {
                "at will": ["detect-evil-and-good"],
                "1/day each": ["commune", "raise-dead"]
            }
        },
        actions: [
            { name: "Multiattack", description: "The deva makes two melee attacks." },
            { name: "Mace", type: "melee", attackBonus: 8, reach: 5, damage: "1d6+4 bludgeoning plus 4d8 radiant" },
            { name: "Healing Touch (3/Day)", description: "The deva touches another creature. The target magically regains 20 (4d8+2) hit points and is freed from any curse, disease, poison, blindness, or deafness." },
            { name: "Change Shape", description: "The deva magically polymorphs into a humanoid or beast that has a challenge rating equal to or less than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the deva's choice)." }
        ]
    },
    "dire-wolf": {
        name: "Dire Wolf",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 14,
        acType: "natural armor",
        hp: 37,
        hitDice: "5d10+10",
        speed: { walk: "50 ft." },
        abilityScores: { str: 17, dex: 15, con: 15, int: 3, wis: 12, cha: 7 },
        skills: { perception: 3, stealth: 4 },
        senses: ["passive Perception 13"],
        languages: "—",
        cr: 1,
        traits: [
            { name: "Keen Hearing and Smell", description: "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell." },
            { name: "Pack Tactics", description: "The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 feet of the creature and the ally isn't incapacitated." }
        ],
        actions: [
            { name: "Bite", type: "melee", attackBonus: 5, reach: 5, damage: "2d6+3 piercing", additionalText: "If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone." }
        ]
    },
    "displacer-beast": {
        name: "Displacer Beast",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "lawful evil",
        ac: 13,
        acType: "natural armor",
        hp: 85,
        hitDice: "10d10+30",
        speed: { walk: "40 ft." },
        abilityScores: { str: 18, dex: 15, con: 16, int: 6, wis: 12, cha: 8 },
        senses: ["darkvision 60 ft.", "passive Perception 11"],
        languages: "—",
        cr: 3,
        traits: [
            { name: "Avoidance", description: "If the displacer beast is subjected to an effect that allows it to make a saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails." },
            { name: "Displacement", description: "The displacer beast projects a magical illusion that makes it appear to be standing near its actual location, causing attack rolls against it to have disadvantage. If it is hit by an attack, this trait is disrupted until the end of its next turn. This trait is also disrupted while the displacer beast is incapacitated or has a speed of 0." }
        ],
        actions: [
            { name: "Multiattack", description: "The displacer beast makes two attacks with its tentacles." },
            { name: "Tentacle", type: "melee", attackBonus: 6, reach: 10, damage: "1d6+4 bludgeoning plus 1d6 piercing" }
        ]
    },
    "djinni": {
        name: "Djinni",
        source: "MM",
        size: "large",
        type: "elemental",
        alignment: "chaotic good",
        ac: 17,
        acType: "natural armor",
        hp: 161,
        hitDice: "14d10+84",
        speed: { walk: "30 ft.", fly: "90 ft." },
        abilityScores: { str: 21, dex: 15, con: 22, int: 15, wis: 16, cha: 20 },
        savingThrows: { dex: 6, wis: 7, cha: 9 },
        damageImmunities: ["lightning", "thunder"],
        senses: ["darkvision 120 ft.", "passive Perception 13"],
        languages: "Auran",
        cr: 11,
        traits: [
            { name: "Elemental Demise", description: "If the djinni dies, its body disintegrates into a warm breeze, leaving behind only equipment the djinni was wearing or carrying." }
        ],
        spellcasting: {
            ability: "cha",
            saveDC: 17,
            attackBonus: 9,
            innate: true,
            spells: {
                "at will": ["detect-evil-and-good", "detect-magic", "thunderwave"],
                "3/day each": ["create-food-and-water", "tongues", "wind-walk"],
                "1/day each": ["conjure-elemental (air elemental only)", "creation", "gaseous-form", "invisibility", "major-image", "plane-shift"]
            }
        },
        actions: [
            { name: "Multiattack", description: "The djinni makes three scimitar attacks." },
            { name: "Scimitar", type: "melee", attackBonus: 9, reach: 5, damage: "2d6+5 slashing plus 1d6 lightning (or thunder)" },
            { name: "Create Whirlwind", description: "A 5-foot-radius, 30-foot-tall cylinder of swirling air magically forms on a point the djinni can see within 120 feet of it. The whirlwind lasts as long as the djinni maintains concentration (as if concentrating on a spell). Any creature but the djinni that enters the whirlwind must succeed on a DC 18 Strength saving throw or be restrained by it. The djinni can move the whirlwind up to 60 feet as an action, and creatures restrained by the whirlwind move with it. The whirlwind ends if the djinni loses sight of it.\n\nA creature can use its action to free a creature restrained by the whirlwind, including itself, by succeeding on a DC 18 Strength check. If the check succeeds, the creature is no longer restrained and moves to the nearest space outside the whirlwind." }
        ]
    },
    "doppelganger": {
        name: "Doppelganger",
        source: "MM",
        size: "medium",
        type: "monstrosity",
        tags: ["shapechanger"],
        alignment: "neutral",
        ac: 14,
        hp: 52,
        hitDice: "8d8+16",
        speed: { walk: "30 ft." },
        abilityScores: { str: 11, dex: 18, con: 14, int: 11, wis: 12, cha: 14 },
        skills: { deception: 6, insight: 3 },
        conditionImmunities: ["charmed"],
        senses: ["darkvision 60 ft.", "passive Perception 11"],
        languages: "Common",
        cr: 3,
        traits: [
            { name: "Shapechanger", description: "The doppelganger can use its action to polymorph into a Small or Medium humanoid it has seen, or back into its true form. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies." },
            { name: "Ambusher", description: "In the first round of combat, the doppelganger has advantage on attack rolls against any creature it surprised." },
            { name: "Surprise Attack", description: "If the doppelganger surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 10 (3d6) damage from the attack." }
        ],
        actions: [
            { name: "Multiattack", description: "The doppelganger makes two melee attacks." },
            { name: "Slam", type: "melee", attackBonus: 6, reach: 5, damage: "1d6+4 bludgeoning" },
            { name: "Read Thoughts", description: "The doppelganger magically reads the surface thoughts of one creature within 60 feet of it. The effect can penetrate barriers, but 3 feet of wood or dirt, 2 feet of stone, 2 inches of metal, or a thin sheet of lead blocks it. While the target is in range, the doppelganger can continue reading its thoughts, as long as the doppelganger's concentration isn't broken (as if concentrating on a spell). While reading the target's mind, the doppelganger has advantage on Wisdom (Insight) and Charisma (Deception, Intimidation, and Persuasion) checks against the target." }
        ]
    },
    "draft-horse": {
        name: "Draft Horse",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 10,
        hp: 19,
        hitDice: "3d10+3",
        speed: { walk: "40 ft." },
        abilityScores: { str: 18, dex: 10, con: 12, int: 2, wis: 11, cha: 7 },
        senses: ["passive Perception 10"],
        languages: "—",
        cr: 0.25,
        actions: [
            { name: "Hooves", type: "melee", attackBonus: 6, reach: 5, damage: "2d4+4 bludgeoning" }
        ]
    },
    "dretch": {
        name: "Dretch",
        source: "MM",
        size: "small",
        type: "fiend",
        tags: ["demon"],
        alignment: "chaotic evil",
        ac: 11,
        acType: "natural armor",
        hp: 18,
        hitDice: "4d6+4",
        speed: { walk: "20 ft." },
        abilityScores: { str: 11, dex: 11, con: 12, int: 5, wis: 8, cha: 3 },
        damageResistances: ["cold", "fire", "lightning"],
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 60 ft.", "passive Perception 9"],
        languages: "Abyssal, telepathy 60 ft. (works only with creatures that understand Abyssal)",
        cr: 0.25,
        actions: [
            { name: "Multiattack", description: "The dretch makes two attacks: one with its bite and one with its claws." },
            { name: "Bite", type: "melee", attackBonus: 2, reach: 5, damage: "1d6 piercing" },
            { name: "Claws", type: "melee", attackBonus: 2, reach: 5, damage: "2d4 slashing" },
            { name: "Fetid Cloud (1/Day)", description: "A 10-foot radius of disgusting green gas extends out from the dretch. The gas spreads around corners, and its area is lightly obscured. It lasts for 1 minute or until a strong wind disperses it. Any creature that starts its turn in that area must succeed on a DC 11 Constitution saving throw or be poisoned until the start of its next turn. While poisoned in this way, the target can take either an action or a bonus action on its turn, not both, and can't take reactions." }
        ]
    },
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
        speed: { walk: "30 ft.", climb: "30 ft." },
        abilityScores: { str: 16, dex: 16, con: 18, int: 13, wis: 14, cha: 12 },
        skills: { perception: 5, stealth: 9 },
        senses: ["darkvision 120 ft.", "passive Perception 15"],
        languages: "Elvish, Undercommon",
        cr: 6,
        traits: [
            { name: "Fey Ancestry", description: "The drider has advantage on saving throws against being charmed, and magic can't put the drider to sleep." },
            { name: "Spider Climb", description: "The drider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." },
            { name: "Sunlight Sensitivity", description: "While in sunlight, the drider has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." },
            { name: "Web Walker", description: "The drider ignores movement restrictions caused by webbing." }
        ],
        spellcasting: {
            ability: "wis",
            saveDC: 13,
            innate: true,
            spells: {
                "at will": ["dancing-lights"],
                "1/day each": ["darkness", "faerie-fire"]
            }
        },
        actions: [
            { name: "Multiattack", description: "The drider makes three attacks, either with its longsword or its longbow. It can replace one of those attacks with a bite attack." },
            { name: "Bite", type: "melee", attackBonus: 6, reach: 5, damage: "1d4 piercing plus 2d8 poison" },
            { name: "Longsword", type: "melee", attackBonus: 6, reach: 5, damage: "1d8+3 slashing" },
            { name: "Longbow", type: "ranged", attackBonus: 6, range: "150/600 ft.", damage: "1d8+3 piercing plus 1d8 poison" }
        ]
    },
    "drow": {
        name: "Drow",
        source: "MM",
        size: "medium",
        type: "humanoid",
        tags: ["elf"],
        alignment: "neutral evil",
        ac: 15,
        acType: "chain shirt",
        hp: 13,
        hitDice: "3d8",
        speed: { walk: "30 ft." },
        abilityScores: { str: 10, dex: 14, con: 10, int: 11, wis: 11, cha: 12 },
        skills: { perception: 2, stealth: 4 },
        senses: ["darkvision 120 ft.", "passive Perception 12"],
        languages: "Elvish, Undercommon",
        cr: 0.25,
        traits: [
            { name: "Fey Ancestry", description: "The drow has advantage on saving throws against being charmed, and magic can't put the drow to sleep." },
            { name: "Sunlight Sensitivity", description: "While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." }
        ],
        spellcasting: {
            ability: "cha",
            saveDC: 11,
            innate: true,
            spells: {
                "at will": ["dancing-lights"],
                "1/day each": ["darkness", "faerie-fire"]
            }
        },
        actions: [
            { name: "Shortsword", type: "melee", attackBonus: 4, reach: 5, damage: "1d6+2 piercing" },
            { name: "Hand Crossbow", type: "ranged", attackBonus: 4, range: "30/120 ft.", damage: "1d6+2 piercing", additionalText: "The target must succeed on a DC 13 Constitution saving throw or be poisoned for 1 hour. If the saving throw fails by 5 or more, the target is also unconscious while poisoned in this way. The target wakes up if it takes damage or if another creature takes an action to shake it awake." }
        ]
    },
    "druid": {
        name: "Druid",
        source: "MM",
        size: "medium",
        type: "humanoid",
        tags: ["any race"],
        alignment: "any alignment",
        ac: 11,
        acType: "16 with barkskin",
        hp: 27,
        hitDice: "5d8+5",
        speed: { walk: "30 ft." },
        abilityScores: { str: 10, dex: 12, con: 13, int: 12, wis: 15, cha: 11 },
        skills: { medicine: 4, nature: 3, perception: 4 },
        senses: ["passive Perception 14"],
        languages: "Druidic plus any two languages",
        cr: 2,
        spellcasting: {
            ability: "wis",
            saveDC: 12,
            attackBonus: 4,
            level: 4,
            slots: { 1: 4, 2: 3 },
            spells: {
                cantrips: ["druidcraft", "produce-flame", "shillelagh"],
                1: ["entangle", "longstrider", "speak-with-animals", "thunderwave"],
                2: ["animal-messenger", "barkskin"]
            }
        },
        actions: [
            { name: "Quarterstaff", type: "melee", attackBonus: 2, reach: 5, damage: "1d6 bludgeoning (1d8 with shillelagh)" }
        ]
    },
    "dryad": {
        name: "Dryad",
        source: "MM",
        size: "medium",
        type: "fey",
        alignment: "neutral",
        ac: 11,
        acType: "16 with barkskin",
        hp: 22,
        hitDice: "5d8",
        speed: { walk: "30 ft." },
        abilityScores: { str: 10, dex: 12, con: 11, int: 14, wis: 15, cha: 18 },
        skills: { perception: 4, stealth: 5 },
        senses: ["darkvision 60 ft.", "passive Perception 14"],
        languages: "Elvish, Sylvan",
        cr: 1,
        traits: [
            { name: "Magic Resistance", description: "The dryad has advantage on saving throws against spells and other magical effects." },
            { name: "Speak with Beasts and Plants", description: "The dryad can communicate with beasts and plants as if they shared a language." },
            { name: "Tree Stride", description: "Once on her turn, the dryad can use 10 feet of her movement to step magically into one living tree within her reach and emerge from a second living tree within 60 feet of the first tree, appearing in an unoccupied space within 5 feet of the second tree. Both trees must be Large or bigger." }
        ],
        spellcasting: {
            ability: "cha",
            saveDC: 14,
            innate: true,
            spells: {
                "at will": ["druidcraft"],
                "3/day each": ["entangle", "goodberry"],
                "1/day each": ["barkskin", "pass-without-trace", "shillelagh"]
            }
        },
        actions: [
            { name: "Club", type: "melee", attackBonus: 2, reach: 5, damage: "1d4 bludgeoning (1d8+4 with shillelagh)" },
            { name: "Fey Charm", description: "The dryad targets one humanoid or beast that she can see within 30 feet of her. If the target can see the dryad, it must succeed on a DC 14 Wisdom saving throw or be magically charmed. The charmed creature regards the dryad as a trusted friend to be heeded and protected. Although the target isn't under the dryad's control, it takes the dryad's requests or actions in the most favorable way it can.\n\nEach time the dryad or its allies do anything harmful to the target, it can repeat the saving throw, ending the effect on itself on a success. Otherwise, the effect lasts 24 hours or until the dryad dies, is on a different plane of existence from the target, or ends the effect as a bonus action. If a target's saving throw is successful, the target is immune to the dryad's Fey Charm for the next 24 hours.\n\nThe dryad can have no more than one humanoid and up to three beasts charmed at a time." }
        ]
    },
    "duergar": {
        name: "Duergar",
        source: "MM",
        size: "medium",
        type: "humanoid",
        tags: ["dwarf"],
        alignment: "lawful evil",
        ac: 16,
        acType: "scale mail, shield",
        hp: 26,
        hitDice: "4d8+8",
        speed: { walk: "25 ft." },
        abilityScores: { str: 14, dex: 11, con: 14, int: 11, wis: 10, cha: 9 },
        damageResistances: ["poison"],
        senses: ["darkvision 120 ft.", "passive Perception 10"],
        languages: "Dwarvish, Undercommon",
        cr: 1,
        traits: [
            { name: "Duergar Resilience", description: "The duergar has advantage on saving throws against poison, spells, and illusions, as well as to resist being charmed or paralyzed." },
            { name: "Sunlight Sensitivity", description: "While in sunlight, the duergar has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Enlarge (Recharges after a Short or Long Rest)", description: "For 1 minute, the duergar magically increases in size, along with anything it is wearing or carrying. While enlarged, the duergar is Large, doubles its damage dice on Strength-based weapon attacks (included in the attacks), and makes Strength checks and Strength saving throws with advantage. If the duergar lacks the room to become Large, it attains the maximum size possible in the space available." },
            { name: "War Pick", type: "melee", attackBonus: 4, reach: 5, damage: "1d8+2 piercing (2d8+2 while enlarged)" },
            { name: "Javelin", type: "melee", attackBonus: 4, reach: 5, damage: "1d6+2 piercing (2d6+2 while enlarged)" },
            { name: "Javelin (Ranged)", type: "ranged", attackBonus: 4, range: "30/120 ft.", damage: "1d6+2 piercing" },
            { name: "Invisibility (Recharges after a Short or Long Rest)", description: "The duergar magically turns invisible until it attacks, casts a spell, or uses its Enlarge, or until its concentration is broken, up to 1 hour. Any equipment the duergar wears or carries is invisible with it." }
        ]
    },
    "dust-mephit": {
        name: "Dust Mephit",
        source: "MM",
        size: "small",
        type: "elemental",
        alignment: "neutral evil",
        ac: 12,
        hp: 17,
        hitDice: "5d6",
        speed: { walk: "30 ft.", fly: "30 ft." },
        abilityScores: { str: 5, dex: 14, con: 10, int: 9, wis: 11, cha: 10 },
        skills: { perception: 2, stealth: 4 },
        damageVulnerabilities: ["fire"],
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 60 ft.", "passive Perception 12"],
        languages: "Auran, Terran",
        cr: 0.5,
        traits: [
            { name: "Death Burst", description: "When the mephit dies, it explodes in a burst of dust. Each creature within 5 feet of it must then succeed on a DC 10 Constitution saving throw or be blinded for 1 minute. A blinded creature can repeat the saving throw on each of its turns, ending the effect on itself on a success." }
        ],
        spellcasting: {
            ability: "cha",
            saveDC: 10,
            innate: true,
            spells: {
                "1/day": ["sleep"]
            }
        },
        actions: [
            { name: "Claws", type: "melee", attackBonus: 4, reach: 5, damage: "1d4+2 slashing" },
            { name: "Blinding Breath (Recharge 6)", description: "The mephit exhales a 15-foot cone of blinding dust. Each creature in that area must succeed on a DC 10 Dexterity saving throw or be blinded for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." }
        ]
    }
};

// Add to global monsters object
if (typeof allMonsters === 'undefined') {
    var allMonsters = {};
}
Object.assign(allMonsters, monstersMM_D);
