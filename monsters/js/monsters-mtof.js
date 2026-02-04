// Mordenkainen's Tome of Foes - Monster Data
// Source: MToF (Mordenkainen's Tome of Foes)

const MONSTERS_MTOF = {
    // ===== DEMONS =====
    
    
    "bulezau": {
        name: "Bulezau",
        source: "MToF",
        size: "medium",
        type: "fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 14,
        acType: "natural armor",
        hp: 52,
        hitDice: "7d8+21",
        speed: { walk: 40 },
        abilityScores: { str: 15, dex: 14, con: 17, int: 8, wis: 9, cha: 6 },
        damageResistances: ["cold", "fire", "lightning"],
        damageImmunities: ["poison"],
        conditionImmunities: ["charmed", "frightened", "poisoned"],
        senses: ["darkvision 120 ft."],
        languages: "Abyssal, telepathy 60 ft.",
        cr: 3,
        traits: [
            { name: "Rotting Presence", description: "When any creature that isn't a demon starts its turn within 30 feet of one or more bulezaus, that creature must succeed on a DC 13 Constitution saving throw or take 1d6 necrotic damage plus 1 necrotic damage for each bulezau within 30 feet of it." },
            { name: "Standing Leap", description: "The bulezau's long jump is up to 20 feet and its high jump is up to 10 feet, with or without a running start." },
            { name: "Sure-Footed", description: "The bulezau has advantage on Strength and Dexterity saving throws made against effects that would knock it prone." }
        ],
        actions: [
            { name: "Barbed Tail", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 8 (1d12+2) piercing damage. If the target is a creature, it must succeed on a DC 13 Constitution saving throw against disease or become poisoned until the disease ends. While poisoned in this way, the target sports festering boils, coughs up flies, and sheds rotting skin, and the target must repeat the saving throw after every 24 hours that elapse. On a successful save, the disease ends. On a failed save, the target's hit point maximum is reduced by 4 (1d8). The target dies if its hit point maximum is reduced to 0." }
        ]
    },
    
    
    
    
    

    // ===== DEVILS =====
    
    
    "narzugon": {
        name: "Narzugon",
        source: "MToF",
        size: "medium",
        type: "fiend",
        subtype: "devil",
        alignment: "lawful evil",
        ac: 20,
        acType: "plate, shield",
        hp: 112,
        hitDice: "15d8+45",
        speed: { walk: 30 },
        abilityScores: { str: 20, dex: 10, con: 17, int: 16, wis: 14, cha: 19 },
        savingThrows: { dex: 4, con: 7, cha: 8 },
        skills: { perception: 6 },
        damageResistances: ["acid", "cold; bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["charmed", "frightened", "poisoned"],
        senses: ["darkvision 120 ft."],
        languages: "Common, Infernal, telepathy 120 ft.",
        cr: 13,
        traits: [
            { name: "Diabolical Sense", description: "The narzugon has advantage on saving throws against spells and effects that would banish it from its current plane or send it to a different one." },
            { name: "Infernal Tack", description: "The narzugon wears spurs that are part of infernal tack, which allow it to summon its nightmare companion." },
            { name: "Magic Resistance", description: "The narzugon has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack", description: "The narzugon makes three hellfire lance attacks. It also uses Infernal Command or Terrifying Command." },
            { name: "Hellfire Lance", description: "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 11 (1d12+5) piercing damage plus 16 (3d10) fire damage. If this damage kills a creature, the creature's soul rises from the River Styx as a lemure in Avernus in 1d4 hours. If the creature isn't revived before then, only a wish spell or killing the lemure and casting true resurrection on the creature's original body can restore it to life." },
            { name: "Infernal Command", description: "Each ally of the narzugon within 60 feet of it can't be charmed or frightened until the end of the narzugon's next turn." },
            { name: "Terrifying Command", description: "Each creature that isn't a fiend within 60 feet of the narzugon that can hear it must succeed on a DC 17 Charisma saving throw or become frightened of it for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." },
            { name: "Healing (1/Day)", description: "The narzugon, or one creature it touches, regains up to 100 hit points." }
        ]
    },
    
    

    // ===== ELADRIN =====
    "autumn-eladrin": {
        name: "Autumn Eladrin",
        source: "MToF",
        size: "medium",
        type: "fey",
        subtype: "elf",
        alignment: "chaotic neutral",
        ac: 19,
        acType: "natural armor",
        hp: 127,
        hitDice: "17d8+51",
        speed: { walk: 30 },
        abilityScores: { str: 12, dex: 16, con: 16, int: 14, wis: 17, cha: 18 },
        skills: { insight: 7, medicine: 7 },
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        senses: ["darkvision 60 ft."],
        languages: "Common, Elvish, Sylvan",
        cr: 10,
        traits: [
            { name: "Enchanting Presence", description: "Any non-eladrin creature that starts its turn within 60 feet of the eladrin must make a DC 16 Wisdom saving throw. On a failed save, the creature is charmed by the eladrin for 1 minute. On a successful save, the creature becomes immune to any eladrin's Enchanting Presence for 24 hours." },
            { name: "Fey Step (Recharge 4-6)", description: "As a bonus action, the eladrin can teleport up to 30 feet to an unoccupied space it can see." },
            { name: "Magic Resistance", description: "The eladrin has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack", description: "The eladrin makes two longsword attacks." },
            { name: "Longsword", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d8+1) slashing damage, or 6 (1d10+1) slashing damage if used with two hands, plus 18 (4d8) psychic damage." },
            { name: "Longbow", description: "Ranged Weapon Attack: +7 to hit, range 150/600 ft., one target. Hit: 7 (1d8+3) piercing damage plus 18 (4d8) psychic damage." }
        ],
        reactions: [
            { name: "Foster Peace", description: "If a creature charmed by the eladrin hits with an attack roll while within 60 feet of the eladrin, the eladrin magically causes the attack to miss, provided the eladrin can see the attacker." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 16,
            spells: {
                atWill: ["calm emotions", "sleep"],
                "3/day each": ["cure wounds (as a 5th-level spell)", "lesser restoration"],
                "1/day each": ["greater restoration", "heal", "raise dead"]
            }
        }
    },
    "spring-eladrin": {
        name: "Spring Eladrin",
        source: "MToF",
        size: "medium",
        type: "fey",
        subtype: "elf",
        alignment: "chaotic neutral",
        ac: 19,
        acType: "natural armor",
        hp: 127,
        hitDice: "17d8+51",
        speed: { walk: 30 },
        abilityScores: { str: 14, dex: 16, con: 16, int: 18, wis: 11, cha: 18 },
        skills: { deception: 8, persuasion: 8 },
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        senses: ["darkvision 60 ft."],
        languages: "Common, Elvish, Sylvan",
        cr: 10,
        traits: [
            { name: "Fey Step (Recharge 4-6)", description: "As a bonus action, the eladrin can teleport up to 30 feet to an unoccupied space it can see." },
            { name: "Joyful Presence", description: "Any non-eladrin creature that starts its turn within 60 feet of the eladrin must make a DC 16 Wisdom saving throw. On a failed save, the creature is charmed for 1 minute. While charmed, the creature is overcome with joy and must use its movement on each of its turns to move at least 30 feet in a random direction." },
            { name: "Magic Resistance", description: "The eladrin has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack", description: "The eladrin makes two longsword attacks." },
            { name: "Longsword", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d8+2) slashing damage, or 7 (1d10+2) slashing damage if used with two hands, plus 18 (4d8) psychic damage." },
            { name: "Longbow", description: "Ranged Weapon Attack: +7 to hit, range 150/600 ft., one target. Hit: 7 (1d8+3) piercing damage plus 18 (4d8) psychic damage." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 16,
            spells: {
                atWill: ["charm person", "Tasha's hideous laughter"],
                "3/day each": ["confusion", "enthrall", "suggestion"],
                "1/day each": ["hallucinatory terrain", "Otto's irresistible dance"]
            }
        }
    },
    "summer-eladrin": {
        name: "Summer Eladrin",
        source: "MToF",
        size: "medium",
        type: "fey",
        subtype: "elf",
        alignment: "chaotic neutral",
        ac: 19,
        acType: "natural armor",
        hp: 127,
        hitDice: "17d8+51",
        speed: { walk: 50 },
        abilityScores: { str: 19, dex: 21, con: 16, int: 14, wis: 12, cha: 18 },
        skills: { athletics: 8, intimidation: 8 },
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        senses: ["darkvision 60 ft."],
        languages: "Common, Elvish, Sylvan",
        cr: 10,
        traits: [
            { name: "Fearsome Presence", description: "Any non-eladrin creature that starts its turn within 60 feet of the eladrin must make a DC 16 Wisdom saving throw. On a failed save, the creature becomes frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." },
            { name: "Fey Step (Recharge 4-6)", description: "As a bonus action, the eladrin can teleport up to 30 feet to an unoccupied space it can see." },
            { name: "Magic Resistance", description: "The eladrin has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack", description: "The eladrin makes two longsword attacks." },
            { name: "Longsword", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 8 (1d8+4) slashing damage, or 9 (1d10+4) slashing damage if used with two hands, plus 18 (4d8) fire damage." },
            { name: "Longbow", description: "Ranged Weapon Attack: +9 to hit, range 150/600 ft., one target. Hit: 9 (1d8+5) piercing damage plus 18 (4d8) fire damage." }
        ],
        reactions: [
            { name: "Parry", description: "The eladrin adds 3 to its AC against one melee attack that would hit it. To do so, the eladrin must see the attacker and be wielding a melee weapon." }
        ]
    },
    "winter-eladrin": {
        name: "Winter Eladrin",
        source: "MToF",
        size: "medium",
        type: "fey",
        subtype: "elf",
        alignment: "chaotic neutral",
        ac: 19,
        acType: "natural armor",
        hp: 127,
        hitDice: "17d8+51",
        speed: { walk: 30 },
        abilityScores: { str: 11, dex: 16, con: 16, int: 18, wis: 17, cha: 13 },
        damageResistances: ["cold; bludgeoning, piercing, and slashing from nonmagical attacks"],
        senses: ["darkvision 60 ft."],
        languages: "Common, Elvish, Sylvan",
        cr: 10,
        traits: [
            { name: "Fey Step (Recharge 4-6)", description: "As a bonus action, the eladrin can teleport up to 30 feet to an unoccupied space it can see. When the eladrin uses this trait, it can choose up to three creatures it can see within 5 feet of it. Each creature must succeed on a DC 13 Wisdom saving throw or be frightened for 1 minute." },
            { name: "Magic Resistance", description: "The eladrin has advantage on saving throws against spells and other magical effects." },
            { name: "Sorrowful Presence", description: "Any non-eladrin creature that starts its turn within 60 feet of the eladrin must make a DC 13 Wisdom saving throw. On a failed save, the creature is charmed for 1 minute. While charmed, the creature is filled with sadness, has its speed reduced by half, and takes 2d10 cold damage at the start of each of its turns." }
        ],
        actions: [
            { name: "Multiattack", description: "The eladrin makes two longsword attacks." },
            { name: "Longsword", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d8) slashing damage, or 5 (1d10) slashing damage if used with two hands, plus 13 (3d8) cold damage." },
            { name: "Longbow", description: "Ranged Weapon Attack: +7 to hit, range 150/600 ft., one target. Hit: 7 (1d8+3) piercing damage plus 13 (3d8) cold damage." }
        ],
        reactions: [
            { name: "Frigid Rebuke", description: "When the eladrin takes damage from a creature the eladrin can see within 60 feet of it, the eladrin can force that creature to succeed on a DC 13 Constitution saving throw or take 11 (2d10) cold damage." }
        ],
        spellcasting: {
            innate: true,
            ability: "int",
            dc: 16,
            spells: {
                atWill: ["fog cloud", "gust of wind"],
                "3/day each": ["cone of cold", "ice storm"],
                "1/day": ["control weather"]
            }
        }
    },

    // ===== SHADAR-KAI =====
    "shadow-dancer": {
        name: "Shadow Dancer",
        source: "MToF",
        size: "medium",
        type: "humanoid",
        subtype: "elf",
        alignment: "neutral",
        ac: 15,
        acType: "studded leather",
        hp: 71,
        hitDice: "13d8+13",
        speed: { walk: 30 },
        abilityScores: { str: 12, dex: 16, con: 13, int: 11, wis: 12, cha: 12 },
        savingThrows: { dex: 6, cha: 4 },
        skills: { stealth: 6 },
        damageResistances: ["necrotic"],
        conditionImmunities: ["charmed", "exhaustion"],
        senses: ["darkvision 60 ft."],
        languages: "Common, Elvish",
        cr: 7,
        traits: [
            { name: "Fey Ancestry", description: "The shadow dancer has advantage on saving throws against being charmed, and magic can't put it to sleep." },
            { name: "Shadow Jump", description: "As a bonus action, the shadow dancer can teleport up to 30 feet to an unoccupied space it can see. Both the space it teleports from and the space it teleports to must be in dim light or darkness." }
        ],
        actions: [
            { name: "Multiattack", description: "The shadow dancer makes three spiked chain attacks." },
            { name: "Spiked Chain", description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 10 (2d6+3) piercing damage, and the target must succeed on a DC 14 Dexterity saving throw or suffer one of the following effects (shadow dancer's choice): The target is grappled (escape DC 14), or the target is knocked prone, or the target takes 22 (4d10) necrotic damage." }
        ]
    },
    "gloom-weaver": {
        name: "Gloom Weaver",
        source: "MToF",
        size: "medium",
        type: "humanoid",
        subtype: "elf",
        alignment: "neutral",
        ac: 14,
        acType: "17 with mage armor",
        hp: 104,
        hitDice: "16d8+32",
        speed: { walk: 30 },
        abilityScores: { str: 11, dex: 18, con: 14, int: 15, wis: 12, cha: 18 },
        savingThrows: { dex: 8, con: 6 },
        damageImmunities: ["necrotic"],
        conditionImmunities: ["charmed", "exhaustion"],
        senses: ["darkvision 60 ft."],
        languages: "Common, Elvish",
        cr: 9,
        traits: [
            { name: "Burden of Time", description: "Beasts and humanoids, other than shadar-kai, have disadvantage on saving throws while within 10 feet of the gloom weaver." },
            { name: "Fey Ancestry", description: "The gloom weaver has advantage on saving throws against being charmed, and magic can't put it to sleep." }
        ],
        actions: [
            { name: "Multiattack", description: "The gloom weaver makes two spear attacks and casts one spell that takes 1 action to cast." },
            { name: "Shadow Spear", description: "Melee or Ranged Weapon Attack: +8 to hit, reach 5 ft. or range 30/120, one target. Hit: 7 (1d6+4) piercing damage plus 26 (4d12) necrotic damage. If this damage reduces a creature to 0 hit points, the creature dies and its body and everything it is carrying, except magic items, are reduced to piles of fine gray dust." }
        ],
        reactions: [
            { name: "Misty Escape (Recharges after a Short or Long Rest)", description: "When the gloom weaver takes damage, it turns invisible and teleports up to 60 feet to an unoccupied space it can see. It remains invisible until the start of its next turn or until it attacks or casts a spell." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 16,
            spells: {
                atWill: ["arcane eye", "mage armor", "speak with dead"],
                "1/day each": ["arcane gate", "bane", "compulsion", "confusion", "true seeing"]
            }
        }
    },
    "soul-monger": {
        name: "Soul Monger",
        source: "MToF",
        size: "medium",
        type: "humanoid",
        subtype: "elf",
        alignment: "neutral",
        ac: 15,
        acType: "studded leather",
        hp: 136,
        hitDice: "21d8+42",
        speed: { walk: 30 },
        abilityScores: { str: 8, dex: 17, con: 14, int: 19, wis: 16, cha: 13 },
        savingThrows: { dex: 7, wis: 7, cha: 5 },
        skills: { perception: 7 },
        damageImmunities: ["necrotic", "psychic"],
        conditionImmunities: ["charmed", "exhaustion", "frightened"],
        senses: ["darkvision 60 ft."],
        languages: "Common, Elvish",
        cr: 11,
        traits: [
            { name: "Fey Ancestry", description: "The soul monger has advantage on saving throws against being charmed, and magic can't put it to sleep." },
            { name: "Magic Resistance", description: "The soul monger has advantage on saving throws against spells and other magical effects." },
            { name: "Soul Thirst", description: "When the soul monger reduces a creature to 0 hit points, the soul monger can gain temporary hit points equal to half the creature's hit point maximum. While the soul monger has temporary hit points from this trait, it has advantage on attack rolls." },
            { name: "Weight of Ages", description: "Any beast or humanoid, other than a shadar-kai, that starts its turn within 5 feet of the soul monger has its speed reduced by 20 feet until the start of that creature's next turn." }
        ],
        actions: [
            { name: "Multiattack", description: "The soul monger makes two phantasmal dagger attacks." },
            { name: "Phantasmal Dagger", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (4d4+3) piercing damage plus 19 (3d12) psychic damage, and the target has disadvantage on saving throws until the start of the soul monger's next turn." },
            { name: "Wave of Weariness (Recharge 4-6)", description: "The soul monger emits weariness in a 60-foot cube. Each creature in that area must make a DC 16 Constitution saving throw. On a failed save, a creature takes 45 (10d8) psychic damage and suffers 1 level of exhaustion. On a successful save, it takes half as much damage and doesn't gain a level of exhaustion." }
        ],
        spellcasting: {
            innate: true,
            ability: "int",
            dc: 16,
            spells: {
                atWill: ["chill touch (4d8 damage)", "detect thoughts"],
                "1/day each": ["bestow curse", "finger of death", "gaseous form", "seeming"]
            }
        }
    },

    // ===== GITH =====
    "githyanki-kithrak": {
        name: "Githyanki Kith'rak",
        source: "MToF",
        size: "medium",
        type: "humanoid",
        subtype: "gith",
        alignment: "lawful evil",
        ac: 18,
        acType: "plate",
        hp: 180,
        hitDice: "24d8+72",
        speed: { walk: 30 },
        abilityScores: { str: 18, dex: 16, con: 17, int: 16, wis: 15, cha: 17 },
        savingThrows: { con: 7, int: 7, wis: 6 },
        skills: { intimidation: 7, perception: 6 },
        senses: [],
        languages: "Gith",
        cr: 12,
        traits: [
            { name: "Rally the Troops", description: "As a bonus action, the githyanki can magically end the charmed and frightened conditions on itself and each creature of its choice that it can see within 30 feet of it." }
        ],
        actions: [
            { name: "Multiattack", description: "The githyanki makes three greatsword attacks." },
            { name: "Greatsword", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 11 (2d6+4) slashing damage plus 17 (5d6) psychic damage." }
        ],
        spellcasting: {
            innate: true,
            ability: "int",
            dc: 15,
            spells: {
                atWill: ["mage hand (the hand is invisible)"],
                "3/day each": ["blur", "jump", "misty step", "nondetection (self only)"],
                "1/day each": ["plane shift", "telekinesis"]
            }
        }
    },
    "githyanki-supreme-commander": {
        name: "Githyanki Supreme Commander",
        source: "MToF",
        size: "medium",
        type: "humanoid",
        subtype: "gith",
        alignment: "lawful evil",
        ac: 18,
        acType: "plate",
        hp: 187,
        hitDice: "22d8+88",
        speed: { walk: 30 },
        abilityScores: { str: 19, dex: 17, con: 18, int: 16, wis: 16, cha: 18 },
        savingThrows: { con: 9, int: 8, wis: 8 },
        skills: { insight: 8, intimidation: 9, perception: 8 },
        senses: [],
        languages: "Gith",
        cr: 14,
        traits: [
            { name: "Legendary Resistance (3/Day)", description: "If the githyanki fails a saving throw, it can choose to succeed instead." }
        ],
        actions: [
            { name: "Multiattack", description: "The githyanki makes two greatsword attacks." },
            { name: "Silver Greatsword", description: "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 14 (2d6+7) slashing damage plus 17 (5d6) psychic damage. On a critical hit against a target in an astral body (as with the astral projection spell), the githyanki can cut the silvery cord that tethers the target to its material body, instead of dealing damage." }
        ],
        reactions: [
            { name: "Parry", description: "The githyanki adds 5 to its AC against one melee attack that would hit it. To do so, the githyanki must see the attacker and be wielding a melee weapon." }
        ],
        legendaryActions: {
            perRound: 3,
            actions: [
                { name: "Command Ally", description: "The githyanki targets one ally it can see within 30 feet of it. If the target can see or hear the githyanki, the target can make one melee weapon attack using its reaction, if available, and has advantage on the attack roll." },
                { name: "Attack (2 Actions)", description: "The githyanki makes a greatsword attack." }
            ]
        },
        spellcasting: {
            innate: true,
            ability: "int",
            dc: 16,
            spells: {
                atWill: ["mage hand (the hand is invisible)"],
                "3/day each": ["jump", "levitate", "misty step", "nondetection (self only)"],
                "1/day each": ["Bigby's hand", "mass suggestion", "plane shift", "telekinesis"]
            }
        }
    },
    "githzerai-anarch": {
        name: "Githzerai Anarch",
        source: "MToF",
        size: "medium",
        type: "humanoid",
        subtype: "gith",
        alignment: "lawful neutral",
        ac: 20,
        hp: 144,
        hitDice: "17d8+68",
        speed: { walk: 30, fly: 40 },
        abilityScores: { str: 16, dex: 21, con: 18, int: 18, wis: 20, cha: 14 },
        savingThrows: { str: 8, dex: 10, int: 9, wis: 10 },
        skills: { arcana: 9, insight: 10, perception: 10 },
        senses: [],
        languages: "Gith",
        cr: 16,
        traits: [
            { name: "Psychic Defense", description: "While the githzerai is wearing no armor and wielding no shield, its AC includes its Wisdom modifier." },
            { name: "Legendary Resistance (3/Day)", description: "If the githzerai fails a saving throw, it can choose to succeed instead." }
        ],
        actions: [
            { name: "Multiattack", description: "The githzerai makes three unarmed strikes." },
            { name: "Unarmed Strike", description: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 9 (1d8+5) bludgeoning damage plus 18 (4d8) psychic damage." }
        ],
        legendaryActions: {
            perRound: 3,
            actions: [
                { name: "Strike", description: "The githzerai makes one unarmed strike." },
                { name: "Teleport", description: "The githzerai teleports, along with any equipment it is wearing and carrying, to an unoccupied space it can see within 30 feet of it." },
                { name: "Change Gravity (Costs 3 Actions)", description: "The githzerai casts the reverse gravity spell. The spell has its normal duration, but the githzerai can end it as a bonus action." }
            ]
        },
        spellcasting: {
            innate: true,
            ability: "wis",
            dc: 18,
            spells: {
                atWill: ["mage hand (the hand is invisible)"],
                "3/day each": ["feather fall", "jump", "see invisibility", "shield", "telekinesis"],
                "1/day each": ["globe of invulnerability", "plane shift", "teleportation circle", "wall of force"]
            }
        }
    },
    "githzerai-enlightened": {
        name: "Githzerai Enlightened",
        source: "MToF",
        size: "medium",
        type: "humanoid",
        subtype: "gith",
        alignment: "lawful neutral",
        ac: 18,
        hp: 112,
        hitDice: "15d8+45",
        speed: { walk: 30 },
        abilityScores: { str: 14, dex: 19, con: 16, int: 17, wis: 19, cha: 13 },
        savingThrows: { str: 6, dex: 8, int: 7, wis: 8 },
        skills: { arcana: 7, insight: 8, perception: 8 },
        senses: [],
        languages: "Gith",
        cr: 10,
        traits: [
            { name: "Psychic Defense", description: "While the githzerai is wearing no armor and wielding no shield, its AC includes its Wisdom modifier." }
        ],
        actions: [
            { name: "Multiattack", description: "The githzerai makes three unarmed strikes." },
            { name: "Unarmed Strike", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 8 (1d8+4) bludgeoning damage plus 13 (3d8) psychic damage." },
            { name: "Temporal Strike (Recharge 6)", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one creature. Hit: 13 (2d8+4) bludgeoning damage plus 52 (8d12) psychic damage. The target must succeed on a DC 16 Wisdom saving throw or move 1 round forward in time. A target moved forward in time vanishes for the duration. When the effect ends, the target reappears in the space it left or in an unoccupied space nearest to that space if it's occupied." }
        ],
        spellcasting: {
            innate: true,
            ability: "wis",
            dc: 16,
            spells: {
                atWill: ["mage hand (the hand is invisible)"],
                "3/day each": ["blur", "expeditious retreat", "feather fall", "jump", "see invisibility", "shield"],
                "1/day each": ["haste", "plane shift", "teleport"]
            }
        }
    },

    // ===== DUERGAR =====
    
    
    
    

    // ===== MISCELLANEOUS =====
    
    "boneclaw": {
        name: "Boneclaw",
        source: "MToF",
        size: "large",
        type: "undead",
        alignment: "chaotic evil",
        ac: 16,
        acType: "natural armor",
        hp: 127,
        hitDice: "17d10+34",
        speed: { walk: 40 },
        abilityScores: { str: 19, dex: 16, con: 15, int: 13, wis: 15, cha: 9 },
        savingThrows: { dex: 7, con: 6, wis: 6 },
        skills: { perception: 6, stealth: 7 },
        damageResistances: ["cold", "necrotic; bludgeoning, piercing, and slashing from nonmagical attacks"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "Common plus the main language of its master",
        cr: 12,
        traits: [
            { name: "Rejuvenation", description: "While its master lives, a destroyed boneclaw gains a new body in 1d10 hours, with all its hit points. The new body appears within 1 mile of the boneclaw's master." },
            { name: "Shadow Stealth", description: "While in dim light or darkness, the boneclaw can take the Hide action as a bonus action." }
        ],
        actions: [
            { name: "Multiattack", description: "The boneclaw makes two claw attacks." },
            { name: "Piercing Claw", description: "Melee Weapon Attack: +8 to hit, reach 15 ft., one target. Hit: 20 (3d10+4) piercing damage. If the target is a creature, the boneclaw can pull the target up to 10 feet toward itself, and the target is grappled (escape DC 14). The boneclaw has two claws. While a claw grapples a target, the claw can attack only that target." },
            { name: "Shadow Jump", description: "If the boneclaw is in dim light or darkness, each creature of the boneclaw's choice within 5 feet of it must succeed on a DC 14 Constitution saving throw or take 34 (5d12+2) necrotic damage. The boneclaw then magically teleports up to 60 feet to an unoccupied space it can see. It can bring one creature it's grappling, teleporting that creature to an unoccupied space it can see within 5 feet of its destination. The destination spaces of this teleportation must be in dim light or darkness." }
        ],
        reactions: [
            { name: "Deadly Reach", description: "In response to a visible enemy moving into its reach, the boneclaw makes one claw attack against that enemy. If the attack hits, the boneclaw can make a second claw attack against the target." }
        ]
    },
    "cadaver-collector": {
        name: "Cadaver Collector",
        source: "MToF",
        size: "large",
        type: "construct",
        alignment: "lawful evil",
        ac: 17,
        acType: "natural armor",
        hp: 189,
        hitDice: "18d10+90",
        speed: { walk: 30 },
        abilityScores: { str: 21, dex: 14, con: 20, int: 5, wis: 11, cha: 8 },
        damageImmunities: ["necrotic", "poison", "psychic; bludgeoning, piercing, and slashing from nonmagical attacks that aren't adamantine"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "petrified", "poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "understands all languages but can't speak",
        cr: 14,
        traits: [
            { name: "Magic Resistance", description: "The cadaver collector has advantage on saving throws against spells and other magical effects." },
            { name: "Summon Specters (Recharges after a Short or Long Rest)", description: "As a bonus action, the cadaver collector calls up the enslaved spirits of those it has slain; 1d4 specters (without their Sunlight Sensitivity trait) arise in unoccupied spaces within 15 feet of the cadaver collector. The specters act right after the cadaver collector on the same initiative count and fight until they're destroyed. They disappear when the cadaver collector is destroyed." }
        ],
        actions: [
            { name: "Multiattack", description: "The cadaver collector makes two slam attacks." },
            { name: "Slam", description: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 18 (3d8+5) bludgeoning damage plus 16 (3d10) necrotic damage." },
            { name: "Paralyzing Breath (Recharge 5-6)", description: "The cadaver collector releases paralyzing gas in a 30-foot cone. Each creature in that area must make a successful DC 18 Constitution saving throw or be paralyzed for 1 minute. A paralyzed creature repeats the saving throw at the end of each of its turns, ending the effect on itself with a success." }
        ]
    },
    "nightwalker": {
        name: "Nightwalker",
        source: "MToF",
        size: "huge",
        type: "undead",
        alignment: "chaotic evil",
        ac: 14,
        hp: 297,
        hitDice: "22d12+154",
        speed: { walk: 40, fly: 40 },
        abilityScores: { str: 22, dex: 19, con: 24, int: 6, wis: 9, cha: 8 },
        savingThrows: { con: 13 },
        damageResistances: ["acid", "cold", "fire", "lightning", "thunder; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["necrotic", "poison"],
        conditionImmunities: ["exhaustion", "frightened", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained"],
        senses: ["darkvision 120 ft."],
        languages: "—",
        cr: 20,
        traits: [
            { name: "Annihilating Aura", description: "Any creature that starts its turn within 30 feet of the nightwalker must succeed on a DC 21 Constitution saving throw or take 14 (4d6) necrotic damage and grant the nightwalker advantage on attack rolls against it until the start of the creature's next turn. Undead are immune to this aura." },
            { name: "Life Eater", description: "A creature reduced to 0 hit points from damage dealt by the nightwalker dies and can't be revived by any means short of a wish spell." }
        ],
        actions: [
            { name: "Multiattack", description: "The nightwalker uses Enervating Focus twice, or it uses Enervating Focus and Finger of Doom, if available." },
            { name: "Enervating Focus", description: "Melee Weapon Attack: +12 to hit, reach 15 ft., one target. Hit: 28 (5d8+6) necrotic damage. The target must succeed on a DC 21 Constitution saving throw or its hit point maximum is reduced by an amount equal to the necrotic damage taken. This reduction lasts until the target finishes a long rest." },
            { name: "Finger of Doom (Recharge 6)", description: "The nightwalker points at one creature it can see within 300 feet of it. The target must succeed on a DC 21 Wisdom saving throw or take 26 (4d12) necrotic damage and become frightened until the end of the nightwalker's next turn. While frightened in this way, the creature is also paralyzed. If a target's saving throw is successful, the target is immune to the nightwalker's Finger of Doom for the next 24 hours." }
        ]
    },
    "sword-wraith-commander": {
        name: "Sword Wraith Commander",
        source: "MToF",
        size: "medium",
        type: "undead",
        alignment: "lawful evil",
        ac: 18,
        acType: "breastplate, shield",
        hp: 127,
        hitDice: "15d8+60",
        speed: { walk: 30 },
        abilityScores: { str: 18, dex: 14, con: 18, int: 11, wis: 12, cha: 14 },
        skills: { perception: 4 },
        damageResistances: ["necrotic; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["exhaustion", "frightened", "poisoned", "unconscious"],
        senses: ["darkvision 60 ft."],
        languages: "the languages it knew in life",
        cr: 8,
        traits: [
            { name: "Martial Fury", description: "As a bonus action, the sword wraith can make one weapon attack, which deals an extra 9 (2d8) necrotic damage on a hit. If it does so, attack rolls against it have advantage until the start of its next turn." },
            { name: "Turning Defiance", description: "The sword wraith and any other sword wraiths within 30 feet of it have advantage on saving throws against effects that turn undead." }
        ],
        actions: [
            { name: "Multiattack", description: "The sword wraith makes two weapon attacks." },
            { name: "Longsword", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d8+4) slashing damage, or 9 (1d10+4) slashing damage if used with two hands." },
            { name: "Longbow", description: "Ranged Weapon Attack: +5 to hit, range 150/600 ft., one target. Hit: 6 (1d8+2) piercing damage." },
            { name: "Call to Honor (1/Day)", description: "To use this action, the sword wraith must have taken damage during the current combat. If the sword wraith can use this action, it gives itself advantage on attack rolls until the end of its next turn, and 1d4+1 sword wraith warriors appear in unoccupied spaces within 30 feet of it. The warriors last until they drop to 0 hit points, and they take their turns immediately after the commander's turn on the same initiative count." }
        ]
    },
    "sword-wraith-warrior": {
        name: "Sword Wraith Warrior",
        source: "MToF",
        size: "medium",
        type: "undead",
        alignment: "lawful evil",
        ac: 16,
        acType: "chain shirt, shield",
        hp: 45,
        hitDice: "6d8+18",
        speed: { walk: 30 },
        abilityScores: { str: 18, dex: 12, con: 17, int: 6, wis: 9, cha: 10 },
        damageResistances: ["necrotic; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["exhaustion", "frightened", "poisoned", "unconscious"],
        senses: ["darkvision 60 ft."],
        languages: "the languages it knew in life",
        cr: 3,
        traits: [
            { name: "Martial Fury", description: "As a bonus action, the sword wraith can make one weapon attack. If it does so, attack rolls against it have advantage until the start of its next turn." }
        ],
        actions: [
            { name: "Longsword", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8+4) slashing damage, or 9 (1d10+4) slashing damage if used with two hands." },
            { name: "Longbow", description: "Ranged Weapon Attack: +3 to hit, range 150/600 ft., one target. Hit: 5 (1d8+1) piercing damage." }
        ]
    },
    "hellfire-engine": {
        name: "Hellfire Engine",
        source: "MToF",
        size: "huge",
        type: "construct",
        alignment: "lawful evil",
        ac: 18,
        acType: "natural armor",
        hp: 216,
        hitDice: "16d12+112",
        speed: { walk: 40 },
        abilityScores: { str: 20, dex: 16, con: 24, int: 2, wis: 10, cha: 1 },
        savingThrows: { dex: 8, wis: 5, cha: 0 },
        damageResistances: ["cold", "psychic; bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["charmed", "deafened", "exhaustion", "frightened", "paralyzed", "poisoned", "unconscious"],
        senses: ["darkvision 120 ft."],
        languages: "understands Infernal but can't speak",
        cr: 16,
        traits: [
            { name: "Immutable Form", description: "The hellfire engine is immune to any spell or effect that would alter its form." },
            { name: "Magic Resistance", description: "The hellfire engine has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Flesh-Crushing Stride", description: "The hellfire engine moves up to its speed in a straight line. During this move, it can enter Large or smaller creatures' spaces. A creature whose space the hellfire engine enters must make a DC 18 Dexterity saving throw. On a successful save, the creature is pushed 5 feet to the nearest space out of the hellfire engine's path. On a failed save, the creature falls prone and takes 28 (8d6) bludgeoning damage. If the hellfire engine remains in the prone creature's space, the creature is also restrained until it's no longer in the same space as the hellfire engine. While restrained in this way, the creature, or another creature within 5 feet of it, can make a DC 18 Strength check. On a success, the creature is shunted to an unoccupied space of its choice within 5 feet of the hellfire engine and is no longer restrained." },
            { name: "Hellfire Weapons", description: "The hellfire engine uses one of the following options (choose one): 1-Bonemelt Sprayer (30-foot cone, DC 20 Dex save, 11d6 fire damage, half on success), 2-Lightning Flail (reach 15 ft., +11 to hit, 18 (4d6+4) bludgeoning plus 22 (5d8) lightning damage, Large/smaller knocked prone), 3-Thunder Cannon (range 120 ft., +8 to hit, 27 (5d8+5) bludgeoning plus 13 (2d12) thunder damage, knocked back 60 feet if Huge or smaller)." }
        ]
    },
    "skull-lord": {
        name: "Skull Lord",
        source: "MToF",
        size: "medium",
        type: "undead",
        alignment: "lawful evil",
        ac: 18,
        acType: "plate",
        hp: 105,
        hitDice: "14d8+42",
        speed: { walk: 30 },
        abilityScores: { str: 14, dex: 16, con: 17, int: 16, wis: 15, cha: 21 },
        savingThrows: {},
        skills: { athletics: 7, history: 8, perception: 12, stealth: 8 },
        damageResistances: ["cold", "necrotic; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["blinded", "charmed", "deafened", "exhaustion", "frightened", "poisoned", "stunned", "unconscious"],
        senses: ["darkvision 60 ft."],
        languages: "all the languages it knew in life",
        cr: 15,
        traits: [
            { name: "Evasion", description: "If the skull lord is subjected to an effect that allows it to make a Dexterity saving throw to take only half the damage, the skull lord instead takes no damage if it succeeds on the saving throw, and only half damage if it fails." },
            { name: "Legendary Resistance (3/Day)", description: "If the skull lord fails a saving throw, it can choose to succeed instead." },
            { name: "Master of the Grave", description: "While within 30 feet of the skull lord, any undead ally of the skull lord makes saving throws with advantage, and that ally regains 1d6 hit points whenever it starts its turn there." }
        ],
        actions: [
            { name: "Multiattack", description: "The skull lord makes three bone staff attacks." },
            { name: "Bone Staff", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 7 (1d8+3) bludgeoning damage plus 14 (4d6) necrotic damage." }
        ],
        legendaryActions: {
            perRound: 3,
            actions: [
                { name: "Bone Staff (Costs 2 Actions)", description: "The skull lord makes a bone staff attack." },
                { name: "Cantrip", description: "The skull lord casts a cantrip." },
                { name: "Move", description: "The skull lord moves up to its speed without provoking opportunity attacks." },
                { name: "Summon Undead (Costs 3 Actions)", description: "Up to five skeletons or zombies appear in unoccupied spaces within 30 feet of the skull lord and remain until destroyed. Undead summoned in this way roll initiative and act in the next available turn. The skull lord can have up to five undead summoned by this ability at a time." }
            ]
        },
        spellcasting: {
            ability: "cha",
            dc: 18,
            attack: 10,
            spells: {
                atWill: ["chill touch", "finger of death", "message"],
                "3/day each": ["cloudkill", "cone of cold"],
                "2/day each": ["dimension door", "fear"],
                "1/day each": ["eyebite", "harm"]
            }
        }
    },
    "howler": {
        name: "Howler",
        source: "MToF",
        size: "large",
        type: "fiend",
        alignment: "chaotic evil",
        ac: 16,
        acType: "natural armor",
        hp: 90,
        hitDice: "12d10+24",
        speed: { walk: 40 },
        abilityScores: { str: 17, dex: 16, con: 15, int: 5, wis: 20, cha: 6 },
        skills: { perception: 8 },
        damageResistances: ["cold", "fire", "lightning", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        conditionImmunities: ["frightened"],
        senses: ["darkvision 60 ft."],
        languages: "understands Abyssal but can't speak",
        cr: 8,
        traits: [
            { name: "Pack Tactics", description: "The howler has advantage on attack rolls against a creature if at least one of the howler's allies is within 5 feet of the creature and the ally isn't incapacitated." }
        ],
        actions: [
            { name: "Multiattack", description: "The howler makes two bite attacks." },
            { name: "Rending Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6+3) piercing damage. If the target is frightened it takes an additional 22 (4d10) psychic damage. This attack ignores damage resistance." },
            { name: "Mind-Breaking Howl (Recharge 6)", description: "The howler emits a keening howl in a 60-foot cone. Each creature in that area that isn't deafened must succeed on a DC 16 Wisdom saving throw or be frightened until the end of the howler's next turn. While a creature is frightened in this way, its speed is halved, and it is incapacitated. A target that successfully saves is immune to the Mind-Breaking Howl of all howlers for the next 24 hours." }
        ]
    },
    "zaratan": {
        name: "Zaratan",
        source: "MToF",
        size: "gargantuan",
        type: "elemental",
        alignment: "neutral",
        ac: 21,
        acType: "natural armor",
        hp: 307,
        hitDice: "15d20+150",
        speed: { walk: 40, swim: 40 },
        abilityScores: { str: 30, dex: 10, con: 30, int: 2, wis: 21, cha: 18 },
        savingThrows: { wis: 12, cha: 11 },
        damageResistances: ["cold", "fire", "lightning; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["exhaustion", "paralyzed", "petrified", "poisoned", "stunned"],
        senses: ["darkvision 60 ft., tremorsense 60 ft."],
        languages: "—",
        cr: 22,
        traits: [
            { name: "Earth-Shaking Movement", description: "As a bonus action after moving at least 10 feet on the ground, the zaratan can send a shock wave through the ground in a 120-foot-radius circle centered on itself. That area becomes difficult terrain for 1 minute. Each creature on the ground that is concentrating must succeed on a DC 25 Constitution saving throw or the creature's concentration is broken." },
            { name: "Legendary Resistance (3/Day)", description: "If the zaratan fails a saving throw, it can choose to succeed instead." },
            { name: "Magic Weapons", description: "The zaratan's weapon attacks are magical." },
            { name: "Siege Monster", description: "The zaratan deals double damage to objects and structures (included in Earth-Shaking Movement)." }
        ],
        actions: [
            { name: "Multiattack", description: "The zaratan makes two attacks: one with its bite and one with its stomp." },
            { name: "Bite", description: "Melee Weapon Attack: +17 to hit, reach 20 ft., one target. Hit: 28 (4d8+10) piercing damage." },
            { name: "Stomp", description: "Melee Weapon Attack: +17 to hit, reach 20 ft., one target. Hit: 26 (3d10+10) bludgeoning damage." },
            { name: "Spit Rock", description: "Ranged Weapon Attack: +17 to hit, range 120/240 ft., one target. Hit: 31 (6d6+10) bludgeoning damage." },
            { name: "Spew Debris (Recharge 5-6)", description: "The zaratan exhales rocky debris in a 90-foot cube. Each creature in that area must make a DC 25 Dexterity saving throw. A creature takes 33 (6d10) bludgeoning damage on a failed save, or half as much damage on a successful one. A creature that fails the save by 5 or more is knocked prone." }
        ],
        legendaryActions: {
            perRound: 3,
            actions: [
                { name: "Stomp", description: "The zaratan makes one stomp attack." },
                { name: "Move", description: "The zaratan moves up to its speed." },
                { name: "Spit (Costs 2 Actions)", description: "The zaratan uses Spit Rock." },
                { name: "Retract (Costs 2 Actions)", description: "The zaratan retracts into its shell. Until it takes its Emerge action, it has resistance to all damage, and it is restrained. The next time it takes a legendary action, it must take its Revitalize or Emerge action." },
                { name: "Revitalize (Costs 2 Actions)", description: "The zaratan can use this option only if it is retracted in its shell. It regains 52 (5d20) hit points. The next time it takes a legendary action, it must take its Emerge action." },
                { name: "Emerge (Costs 2 Actions)", description: "The zaratan emerges from its shell and uses Spit Rock. It can use this option only if it is retracted in its shell." }
            ]
        }
    },
    "elder-tempest": {
        name: "Elder Tempest",
        source: "MToF",
        size: "gargantuan",
        type: "elemental",
        alignment: "neutral",
        ac: 19,
        hp: 264,
        hitDice: "16d20+96",
        speed: { walk: 0, fly: 120 },
        abilityScores: { str: 23, dex: 28, con: 23, int: 2, wis: 21, cha: 18 },
        savingThrows: { wis: 12, cha: 11 },
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["lightning", "poison", "thunder"],
        conditionImmunities: ["exhaustion", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained", "stunned"],
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 23,
        traits: [
            { name: "Air Form", description: "The elder tempest can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing." },
            { name: "Flyby", description: "The elder tempest doesn't provoke opportunity attacks when it flies out of an enemy's reach." },
            { name: "Legendary Resistance (3/Day)", description: "If the elder tempest fails a saving throw, it can choose to succeed instead." },
            { name: "Living Storm", description: "The elder tempest is always at the center of a storm 1d6 + 4 miles in diameter. Heavy precipitation in the form of either rain or snow falls there, causing the area to be lightly obscured. Heavy rain also extinguishes open flames and imposes disadvantage on Wisdom (Perception) checks that rely on hearing. In addition, strong winds swirl in the area covered by the storm. The winds impose disadvantage on ranged attack rolls. They also extinguish open flames and disperse fog." },
            { name: "Siege Monster", description: "The elder tempest deals double damage to objects and structures." }
        ],
        actions: [
            { name: "Multiattack", description: "The elder tempest makes two attacks with its thunderous slam." },
            { name: "Thunderous Slam", description: "Melee Weapon Attack: +16 to hit, reach 20 ft., one target. Hit: 23 (4d6+9) thunder damage." },
            { name: "Lightning Storm (Recharge 6)", description: "All other creatures within 120 feet of the elder tempest must each make a DC 21 Dexterity saving throw, taking 27 (6d8) lightning damage on a failed save, or half as much damage on a successful one. If the saving throw fails by 5 or more, the creature is also stunned until the end of its next turn." }
        ],
        legendaryActions: {
            perRound: 3,
            actions: [
                { name: "Move", description: "The elder tempest moves up to its speed." },
                { name: "Lightning Strike (Costs 2 Actions)", description: "The elder tempest can cause a bolt of lightning to strike a point on the ground anywhere under its storm. Each creature within 5 feet of that point must make a DC 21 Dexterity saving throw, taking 16 (3d10) lightning damage on a failed save, or half as much damage on a successful one." },
                { name: "Screaming Gale (Costs 3 Actions)", description: "The elder tempest releases a blast of thunder and wind in a line that is 300 feet long and 20 feet wide. Objects in that area take 22 (4d10) thunder damage. Each creature there must succeed on a DC 21 Dexterity saving throw or take 22 (4d10) thunder damage and be flung up to 60 feet in a direction away from the line." }
            ]
        }
    }
};
