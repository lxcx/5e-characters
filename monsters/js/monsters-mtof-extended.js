// Mordenkainen's Tome of Foes - Extended Collection
// With environment and role tags for Monster Maker
// Source: MToF

const MONSTERS_MTOF_EXTENDED = {
    // ===== Gith =====
    "githyanki-warrior": {
        name: "Githyanki Warrior",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "gith",
        alignment: "lawful evil",
        ac: 17,
        acType: "half plate",
        hp: 49,
        hitDice: "9d8+9",
        speed: { walk: 30 },
        abilityScores: { str: 15, dex: 14, con: 12, int: 13, wis: 13, cha: 10 },
        savingThrows: { con: 3, int: 3, wis: 3 },
        senses: [],
        languages: "Gith",
        cr: 3,
        // CATEGORIZATION TAGS
        environment: ["astral", "urban"],
        role: "skirmisher",
        tags: ["gith", "extraplanar", "psionic"],
        traits: [
            { name: "Innate Spellcasting (Psionics)", description: "The githyanki's innate spellcasting ability is Intelligence. It can innately cast the following spells, requiring no components: At will: mage hand (the hand is invisible); 3/day each: jump, misty step, nondetection (self only)." }
        ],
        actions: [
            { name: "Multiattack", description: "The githyanki makes two greatsword attacks." },
            { name: "Greatsword", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6+2) slashing damage plus 7 (2d6) psychic damage." }
        ]
    },
    "githyanki-knight": {
        name: "Githyanki Knight",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "gith",
        alignment: "lawful evil",
        ac: 18,
        acType: "plate",
        hp: 91,
        hitDice: "14d8+28",
        speed: { walk: 30 },
        abilityScores: { str: 16, dex: 14, con: 15, int: 14, wis: 14, cha: 15 },
        savingThrows: { con: 5, int: 5, wis: 5 },
        senses: [],
        languages: "Gith",
        cr: 8,
        environment: ["astral", "urban"],
        role: "leader",
        tags: ["gith", "extraplanar", "psionic", "mounted"],
        traits: [
            { name: "Innate Spellcasting (Psionics)", description: "The githyanki's spellcasting ability is Intelligence (spell save DC 13, +5 to hit with spell attacks). It can innately cast the following spells, requiring no components: At will: mage hand (the hand is invisible); 3/day each: jump, misty step, nondetection (self only), tongues; 1/day each: plane shift, telekinesis." }
        ],
        actions: [
            { name: "Multiattack", description: "The githyanki makes two silver greatsword attacks." },
            { name: "Silver Greatsword", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 13 (2d6+6) slashing damage plus 10 (3d6) psychic damage. This is a magic weapon attack. On a critical hit against a target in an astral body (as with the astral projection spell), the githyanki can cut the silvery cord that tethers the target to its material body, instead of dealing damage." }
        ]
    },
    "githyanki-gish": {
        name: "Githyanki Gish",
        source: "MToF",
        size: "medium",
        type: "humanoid",
        subtype: "gith",
        alignment: "lawful evil",
        ac: 17,
        acType: "half plate",
        hp: 123,
        hitDice: "19d8+38",
        speed: { walk: 30 },
        abilityScores: { str: 17, dex: 15, con: 14, int: 16, wis: 15, cha: 16 },
        savingThrows: { con: 6, int: 7, wis: 6 },
        skills: { insight: 6, perception: 6, stealth: 6 },
        senses: [],
        languages: "Gith",
        cr: 10,
        environment: ["astral", "urban"],
        role: "controller",
        tags: ["gith", "extraplanar", "psionic", "spellcaster"],
        traits: [
            { name: "Innate Spellcasting (Psionics)", description: "The githyanki's innate spellcasting ability is Intelligence (spell save DC 15, +7 to hit with spell attacks). It can innately cast the following spells, requiring no components: At will: mage hand (the hand is invisible); 3/day each: jump, misty step, nondetection (self only); 1/day each: plane shift, telekinesis." },
            { name: "War Magic", description: "When the githyanki uses its action to cast a spell, it can make one weapon attack as a bonus action." }
        ],
        actions: [
            { name: "Multiattack", description: "The githyanki makes two longsword attacks." },
            { name: "Longsword", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d8+3) slashing damage plus 18 (4d8) psychic damage, or 8 (1d10+3) slashing damage plus 18 (4d8) psychic damage if used with two hands." }
        ],
        spellcasting: {
            ability: "int",
            dc: 15,
            attack: 7,
            spells: {
                cantrips: ["blade ward", "light", "message", "true strike"],
                "1st": { slots: 4, spells: ["expeditious retreat", "magic missile", "sleep", "thunderwave"] },
                "2nd": { slots: 3, spells: ["blur", "invisibility", "levitate"] },
                "3rd": { slots: 3, spells: ["counterspell", "fireball", "haste"] },
                "4th": { slots: 2, spells: ["dimension door"] }
            }
        }
    },
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
        environment: ["astral", "urban"],
        role: "leader",
        tags: ["gith", "extraplanar", "psionic", "commander"],
        traits: [
            { name: "Innate Spellcasting (Psionics)", description: "The githyanki's innate spellcasting ability is Intelligence (spell save DC 15, +7 to hit with spell attacks). It can innately cast the following spells, requiring no components: At will: mage hand (the hand is invisible); 3/day each: blur, jump, misty step, nondetection (self only); 1/day each: plane shift, telekinesis." },
            { name: "Rally the Troops", description: "As a bonus action, the githyanki can magically end the charmed and frightened conditions on itself and each creature of its choice that it can see within 30 feet of it." }
        ],
        actions: [
            { name: "Multiattack", description: "The githyanki makes three greatsword attacks." },
            { name: "Greatsword", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 11 (2d6+4) slashing damage plus 17 (5d6) psychic damage." }
        ]
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
        environment: ["astral", "urban"],
        role: "leader",
        tags: ["gith", "extraplanar", "psionic", "legendary"],
        traits: [
            { name: "Innate Spellcasting (Psionics)", description: "The githyanki's innate spellcasting ability is Intelligence (spell save DC 16, +8 to hit with spell attacks). It can innately cast the following spells, requiring no components: At will: mage hand (the hand is invisible); 3/day each: jump, levitate (self only), misty step, nondetection (self only); 1/day each: Bigby's hand, mass suggestion, plane shift, telekinesis." }
        ],
        actions: [
            { name: "Multiattack", description: "The githyanki makes two greatsword attacks." },
            { name: "Silver Greatsword", description: "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 14 (2d6+7) slashing damage plus 17 (5d6) psychic damage. On a critical hit against a target in an astral body (as with the astral projection spell), the githyanki can cut the silvery cord that tethers the target to its material body, instead of dealing damage." }
        ],
        legendaryActions: {
            perRound: 3,
            actions: [
                { name: "Attack (2 Actions)", description: "The githyanki makes a greatsword attack." },
                { name: "Command Ally", description: "The githyanki targets one ally it can see within 30 feet of it. If the target can see or hear the githyanki, the target can make one melee weapon attack using its reaction, if available, and has advantage on the attack roll." },
                { name: "Teleport", description: "The githyanki magically teleports, along with any equipment it is wearing and carrying, to an unoccupied space it can see within 30 feet of it. It also becomes insubstantial until the start of its next turn. While insubstantial, it can move through other creatures and objects as if they were difficult terrain. If it ends its turn inside an object, it takes 16 (3d10) force damage and is moved to the nearest unoccupied space." }
            ]
        }
    },
    "githzerai-monk": {
        name: "Githzerai Monk",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "gith",
        alignment: "lawful neutral",
        ac: 14,
        hp: 38,
        hitDice: "7d8+7",
        speed: { walk: 30 },
        abilityScores: { str: 12, dex: 15, con: 12, int: 13, wis: 14, cha: 10 },
        savingThrows: { str: 3, dex: 4, int: 3, wis: 4 },
        skills: { insight: 4, perception: 4 },
        senses: [],
        languages: "Gith",
        cr: 2,
        environment: ["limbo", "urban"],
        role: "skirmisher",
        tags: ["gith", "extraplanar", "psionic", "monk"],
        traits: [
            { name: "Innate Spellcasting (Psionics)", description: "The githzerai's innate spellcasting ability is Wisdom. It can innately cast the following spells, requiring no components: At will: mage hand (the hand is invisible); 3/day each: feather fall, jump, see invisibility, shield." },
            { name: "Psychic Defense", description: "While the githzerai is wearing no armor and wielding no shield, its AC includes its Wisdom modifier." }
        ],
        actions: [
            { name: "Multiattack", description: "The githzerai makes two unarmed strikes." },
            { name: "Unarmed Strike", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8+2) bludgeoning damage plus 9 (2d8) psychic damage." }
        ]
    },
    "githzerai-zerth": {
        name: "Githzerai Zerth",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "gith",
        alignment: "lawful neutral",
        ac: 17,
        hp: 84,
        hitDice: "13d8+26",
        speed: { walk: 30 },
        abilityScores: { str: 13, dex: 18, con: 15, int: 16, wis: 17, cha: 12 },
        savingThrows: { str: 4, dex: 7, int: 6, wis: 6 },
        skills: { arcana: 6, insight: 6, perception: 6 },
        senses: [],
        languages: "Gith",
        cr: 6,
        environment: ["limbo", "urban"],
        role: "controller",
        tags: ["gith", "extraplanar", "psionic", "monk"],
        traits: [
            { name: "Innate Spellcasting (Psionics)", description: "The githzerai's spellcasting ability is Wisdom (spell save DC 14, +6 to hit with spell attacks). It can innately cast the following spells, requiring no components: At will: mage hand (the hand is invisible); 3/day each: feather fall, jump, see invisibility, shield; 1/day each: phantasmal killer, plane shift." },
            { name: "Psychic Defense", description: "While the githzerai is wearing no armor and wielding no shield, its AC includes its Wisdom modifier." }
        ],
        actions: [
            { name: "Multiattack", description: "The githzerai makes two unarmed strikes." },
            { name: "Unarmed Strike", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6+4) bludgeoning damage plus 13 (3d8) psychic damage." }
        ]
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
        environment: ["limbo"],
        role: "controller",
        tags: ["gith", "extraplanar", "psionic", "legendary"],
        traits: [
            { name: "Innate Spellcasting (Psionics)", description: "The githzerai's innate spellcasting ability is Wisdom (spell save DC 18, +10 to hit with spell attacks). It can innately cast the following spells, requiring no components: At will: mage hand (the hand is invisible); 3/day each: feather fall, jump, see invisibility, shield, telekinesis; 1/day each: globe of invulnerability, plane shift, teleportation circle, wall of force." },
            { name: "Psychic Defense", description: "While the anarch is wearing no armor and wielding no shield, its AC includes its Wisdom modifier." }
        ],
        actions: [
            { name: "Multiattack", description: "The githzerai makes three unarmed strikes." },
            { name: "Unarmed Strike", description: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 9 (1d8+5) bludgeoning damage plus 18 (4d8) psychic damage." }
        ],
        legendaryActions: {
            perRound: 3,
            actions: [
                { name: "Strike", description: "The githzerai makes one unarmed strike." },
                { name: "Teleport", description: "The githzerai teleports, along with any equipment it is wearing or carrying, to an unoccupied space it can see within 30 feet of it." },
                { name: "Change Gravity (Costs 3 Actions)", description: "The githzerai casts the reverse gravity spell. The spell has the normal effect, except that the githzerai can orient the area in any direction and creatures and objects fall toward the end of the area." }
            ]
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
        environment: ["limbo", "urban"],
        role: "controller",
        tags: ["gith", "extraplanar", "psionic", "monk"],
        traits: [
            { name: "Innate Spellcasting (Psionics)", description: "The githzerai's innate spellcasting ability is Wisdom (spell save DC 16, +8 to hit with spell attacks). It can innately cast the following spells, requiring no components: At will: mage hand (the hand is invisible); 3/day each: blur, expeditious retreat, feather fall, jump, see invisibility, shield; 1/day each: haste, plane shift, teleport." },
            { name: "Psychic Defense", description: "While the githzerai is wearing no armor and wielding no shield, its AC includes its Wisdom modifier." }
        ],
        actions: [
            { name: "Multiattack", description: "The githzerai makes three unarmed strikes." },
            { name: "Unarmed Strike", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 8 (1d8+4) bludgeoning damage plus 13 (3d8) psychic damage." },
            { name: "Temporal Strike (Recharge 6)", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one creature. Hit: 13 (2d8+4) bludgeoning damage plus 52 (8d12) psychic damage. The target must succeed on a DC 16 Wisdom saving throw or move 1 round forward in time. A target moved forward in time vanishes for the duration. When the effect ends, the target reappears in the space it left or in an unoccupied space nearest to that space if it's occupied." }
        ]
    },

    // ===== Shadar-kai =====
    "shadar-kai-gloom-weaver": {
        name: "Shadar-kai Gloom Weaver",
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
        environment: ["shadowfell", "urban", "underdark"],
        role: "controller",
        tags: ["shadar-kai", "elf", "shadowfell", "spellcaster"],
        traits: [
            { name: "Burden of Time", description: "Beasts and humanoids, other than shadar-kai, have disadvantage on saving throws while within 10 feet of the gloom weaver." },
            { name: "Fey Ancestry", description: "The gloom weaver has advantage on saving throws against being charmed, and magic can't put it to sleep." }
        ],
        actions: [
            { name: "Multiattack", description: "The gloom weaver makes two spear attacks and casts one spell that takes 1 action to cast." },
            { name: "Shadow Spear", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 7 (1d6+4) piercing damage plus 26 (4d12) necrotic damage, or 8 (1d8+4) piercing damage plus 26 (4d12) necrotic damage if used with two hands." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 16,
            spells: {
                atWill: ["arcane eye", "mage armor", "speak with dead"],
                "1/day each": ["arcane gate", "bane", "compulsion", "confusion", "true seeing"]
            }
        },
        reactions: [
            { name: "Misty Escape (Recharges after a Short or Long Rest)", description: "When the gloom weaver takes damage, it turns invisible and teleports up to 60 feet to an unoccupied space it can see. It remains invisible until the start of its next turn or until it attacks or casts a spell." }
        ]
    },
    "shadar-kai-shadow-dancer": {
        name: "Shadar-kai Shadow Dancer",
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
        environment: ["shadowfell", "urban", "underdark"],
        role: "skirmisher",
        tags: ["shadar-kai", "elf", "shadowfell"],
        traits: [
            { name: "Fey Ancestry", description: "The shadow dancer has advantage on saving throws against being charmed, and magic can't put it to sleep." },
            { name: "Shadow Jump", description: "As a bonus action, the shadow dancer can teleport up to 30 feet to an unoccupied space it can see. Both the space it teleports from and the space it teleports to must be in dim light or darkness. The shadow dancer can use this ability between the weapon attacks of another action it takes." }
        ],
        actions: [
            { name: "Multiattack", description: "The shadow dancer makes three spiked chain attacks." },
            { name: "Spiked Chain", description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 10 (2d6+3) piercing damage, and the target must succeed on a DC 14 Dexterity saving throw or suffer one additional effect of the shadow dancer's choice: The target is grappled (escape DC 14), The target is knocked prone, The target takes 22 (4d10) necrotic damage." }
        ]
    },
    "shadar-kai-soul-monger": {
        name: "Shadar-kai Soul Monger",
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
        environment: ["shadowfell", "urban"],
        role: "controller",
        tags: ["shadar-kai", "elf", "shadowfell", "spellcaster"],
        traits: [
            { name: "Fey Ancestry", description: "The soul monger has advantage on saving throws against being charmed, and magic can't put it to sleep." },
            { name: "Magic Resistance", description: "The soul monger has advantage on saving throws against spells and other magical effects." },
            { name: "Soul Thirst", description: "When the soul monger reduces a creature to 0 hit points, the soul monger can gain temporary hit points equal to half the creature's hit point maximum. While the soul monger has temporary hit points from this ability, it has advantage on attack rolls." },
            { name: "Weight of Ages", description: "Any beast or humanoid, other than a shadar-kai, that starts its turn within 5 feet of the soul monger has its speed reduced by 20 feet until the start of that creature's next turn." }
        ],
        actions: [
            { name: "Multiattack", description: "The soul monger makes two phantasmal dagger attacks." },
            { name: "Phantasmal Dagger", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (4d4+3) piercing damage plus 19 (3d12) necrotic damage, and the target has disadvantage on saving throws until the start of the soul monger's next turn." },
            { name: "Wave of Weariness (Recharge 4-6)", description: "The soul monger emits weariness in a 60-foot cube. Each creature in that area must make a DC 16 Constitution saving throw. On a failed save, a creature takes 45 (10d8) psychic damage and suffers 1 level of exhaustion. On a successful save, it takes half as much damage and doesn't gain a level of exhaustion." }
        ]
    },

    // ===== Star Spawn =====
    "star-spawn-grue": {
        name: "Star Spawn Grue",
        source: "MToF",
        size: "small",
        type: "aberration",
        alignment: "neutral evil",
        ac: 11,
        hp: 17,
        hitDice: "5d6",
        speed: { walk: 30 },
        abilityScores: { str: 6, dex: 13, con: 10, int: 9, wis: 11, cha: 6 },
        damageImmunities: ["psychic"],
        senses: ["darkvision 60 ft."],
        languages: "Deep Speech",
        cr: 0.25,
        environment: ["far realm", "underdark"],
        role: "minion",
        tags: ["star spawn", "aberration", "eldritch"],
        traits: [
            { name: "Aura of Madness", description: "Creatures within 20 feet of the grue that aren't aberrations have disadvantage on saving throws, as well as on attack rolls against creatures other than a star spawn grue." }
        ],
        actions: [
            { name: "Confounding Bite", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4+1) piercing damage, and the target must succeed on a DC 10 Wisdom saving throw or attack rolls against it have advantage until the start of the grue's next turn." }
        ]
    },
    "star-spawn-hulk": {
        name: "Star Spawn Hulk",
        source: "MToF",
        size: "large",
        type: "aberration",
        alignment: "chaotic evil",
        ac: 16,
        acType: "natural armor",
        hp: 136,
        hitDice: "13d10+65",
        speed: { walk: 30 },
        abilityScores: { str: 20, dex: 8, con: 21, int: 7, wis: 12, cha: 9 },
        savingThrows: { dex: 3, wis: 5 },
        skills: { perception: 5 },
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        conditionImmunities: ["charmed", "frightened"],
        senses: ["darkvision 60 ft."],
        languages: "Deep Speech",
        cr: 10,
        environment: ["far realm", "underdark"],
        role: "brute",
        tags: ["star spawn", "aberration", "eldritch"],
        traits: [
            { name: "Psychic Mirror", description: "If the hulk takes psychic damage, each creature within 10 feet of the hulk takes that damage instead; the hulk takes none of the damage. In addition, the hulk's thoughts and location can't be discerned by magic." }
        ],
        actions: [
            { name: "Multiattack", description: "The hulk makes two slam attacks. If both attacks hit the same target, the target also takes 9 (2d8) psychic damage and must succeed on a DC 17 Constitution saving throw or be stunned until the end of the target's next turn." },
            { name: "Slam", description: "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 14 (2d8+5) bludgeoning damage." },
            { name: "Reaping Arms (Recharge 5-6)", description: "The hulk makes a separate slam attack against each creature within 10 feet of it. Each creature that is hit must also succeed on a DC 17 Dexterity saving throw or be knocked prone." }
        ]
    },
    "star-spawn-larva-mage": {
        name: "Star Spawn Larva Mage",
        source: "MToF",
        size: "medium",
        type: "aberration",
        alignment: "chaotic evil",
        ac: 16,
        acType: "natural armor",
        hp: 168,
        hitDice: "16d8+96",
        speed: { walk: 30 },
        abilityScores: { str: 17, dex: 12, con: 23, int: 18, wis: 12, cha: 16 },
        savingThrows: { dex: 6, wis: 6, cha: 8 },
        skills: { perception: 6 },
        damageResistances: ["cold; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["psychic"],
        conditionImmunities: ["charmed", "frightened", "paralyzed", "petrified", "poisoned", "restrained"],
        senses: ["darkvision 60 ft."],
        languages: "Deep Speech",
        cr: 16,
        environment: ["far realm"],
        role: "controller",
        tags: ["star spawn", "aberration", "eldritch", "legendary", "spellcaster"],
        traits: [
            { name: "Return to Worms", description: "When the larva mage is reduced to 0 hit points, it breaks apart into a swarm of insects in the same space. Unless the swarm is destroyed, the larva mage reforms from it 24 hours later." }
        ],
        actions: [
            { name: "Slam", description: "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 7 (1d8+3) bludgeoning damage, and the target must succeed on a DC 19 Constitution saving throw or be poisoned until the end of its next turn. While poisoned in this way, the target is also paralyzed." },
            { name: "Plague of Worms (Recharge 6)", description: "Each creature other than a star spawn within 10 feet of the larva mage must make a DC 19 Dexterity saving throw. On a failure, the creature takes 22 (5d8) necrotic damage and is blinded and restrained by masses of swarming worms. On a success, the creature takes half the damage and isn't blinded or restrained." }
        ],
        legendaryActions: {
            perRound: 3,
            actions: [
                { name: "Slam (Costs 2 Actions)", description: "The larva mage makes one slam attack." },
                { name: "Feed (Costs 3 Actions)", description: "Each creature restrained by the larva mage's Plague of Worms takes 13 (3d8) necrotic damage, and the larva mage gains 6 temporary hit points." }
            ]
        },
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 16,
            attack: 8,
            spells: {
                atWill: ["eldritch blast (3 beams, +3 bonus to each damage roll)", "minor illusion"],
                "3/day": ["dominate monster"],
                "1/day": ["circle of death"]
            }
        }
    },
    "star-spawn-mangler": {
        name: "Star Spawn Mangler",
        source: "MToF",
        size: "medium",
        type: "aberration",
        alignment: "chaotic evil",
        ac: 14,
        hp: 71,
        hitDice: "13d8+13",
        speed: { walk: 40, climb: 40 },
        abilityScores: { str: 8, dex: 18, con: 12, int: 11, wis: 12, cha: 7 },
        savingThrows: { dex: 7, con: 4 },
        skills: { stealth: 7 },
        damageResistances: ["cold"],
        damageImmunities: ["psychic"],
        conditionImmunities: ["charmed", "frightened", "prone"],
        senses: ["darkvision 60 ft."],
        languages: "Deep Speech",
        cr: 5,
        environment: ["far realm", "underdark"],
        role: "skirmisher",
        tags: ["star spawn", "aberration", "eldritch"],
        traits: [
            { name: "Ambush", description: "On the first round of each combat, the mangler has advantage on attack rolls against a creature that hasn't taken a turn yet." },
            { name: "Shadow Stealth", description: "While in dim light or darkness, the mangler can take the Hide action as a bonus action." }
        ],
        actions: [
            { name: "Multiattack", description: "The mangler makes two claw attacks." },
            { name: "Claw", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d8+4) slashing damage. If the attack roll has advantage, the target also takes 7 (2d6) psychic damage." },
            { name: "Flurry of Claws (Recharge 5-6)", description: "The mangler makes six claw attacks against one target. Either before or after these attacks, it can move up to its speed as a bonus action without provoking opportunity attacks." }
        ]
    },
    "star-spawn-seer": {
        name: "Star Spawn Seer",
        source: "MToF",
        size: "medium",
        type: "aberration",
        alignment: "neutral evil",
        ac: 17,
        acType: "natural armor",
        hp: 153,
        hitDice: "18d8+72",
        speed: { walk: 30 },
        abilityScores: { str: 14, dex: 12, con: 18, int: 22, wis: 19, cha: 16 },
        savingThrows: { dex: 6, int: 11, wis: 9, cha: 8 },
        skills: { perception: 9 },
        damageResistances: ["cold; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["psychic"],
        conditionImmunities: ["charmed", "frightened"],
        senses: ["darkvision 60 ft."],
        languages: "Common, Deep Speech, Undercommon",
        cr: 13,
        environment: ["far realm", "underdark"],
        role: "artillery",
        tags: ["star spawn", "aberration", "eldritch", "spellcaster"],
        traits: [
            { name: "Out-of-Phase Movement", description: "The seer can move through other creatures and objects as if they were difficult terrain. Each creature it moves through takes 5 (1d10) psychic damage; no creature can take this damage more than once per turn. The seer takes 5 (1d10) force damage if it ends its turn inside an object." }
        ],
        actions: [
            { name: "Multiattack", description: "The seer makes two comet staff attacks or uses Psychic Orb twice." },
            { name: "Comet Staff", description: "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 9 (1d6+6) bludgeoning damage plus 18 (4d8) psychic damage, or 10 (1d8+6) bludgeoning damage plus 18 (4d8) psychic damage if used with two hands, and the target must succeed on a DC 19 Constitution saving throw or be incapacitated until the end of its next turn." },
            { name: "Psychic Orb", description: "Ranged Spell Attack: +11 to hit, range 120 ft., one target. Hit: 27 (5d10) psychic damage." },
            { name: "Collapse Distance (Recharge 6)", description: "The seer warps space around a creature it can see within 30 feet of it. That creature must make a DC 19 Wisdom saving throw. On a failed save, the target, along with any equipment it is wearing or carrying, is magically teleported up to 60 feet to an unoccupied space the seer can see, and all other creatures within 10 feet of the target's original space each take 39 (6d12) psychic damage. On a successful save, the target takes 19 (3d12) psychic damage." }
        ],
        reactions: [
            { name: "Bend Space", description: "When the seer would be hit by an attack, it teleports, exchanging positions with another star spawn it can see within 60 feet of it. The other star spawn is hit by the attack instead." }
        ]
    },

    // ===== Sorrowsworn =====
    "sorrowsworn-angry": {
        name: "The Angry",
        source: "MToF",
        size: "medium",
        type: "monstrosity",
        alignment: "neutral evil",
        ac: 18,
        acType: "natural armor",
        hp: 255,
        hitDice: "30d8+120",
        speed: { walk: 30 },
        abilityScores: { str: 17, dex: 10, con: 19, int: 8, wis: 13, cha: 6 },
        skills: { perception: 6 },
        damageResistances: ["bludgeoning, piercing, and slashing while in dim light or darkness"],
        senses: ["darkvision 60 ft."],
        languages: "Common",
        cr: 13,
        environment: ["shadowfell"],
        role: "brute",
        tags: ["sorrowsworn", "shadowfell", "emotion"],
        traits: [
            { name: "Two Heads", description: "The Angry has advantage on saving throws against being blinded, charmed, deafened, frightened, stunned, or knocked unconscious." },
            { name: "Rising Anger", description: "If another creature deals damage to the Angry, the Angry's attack rolls have advantage until the end of its next turn, and the first time it hits with a hook attack on its next turn, the attack's target takes an extra 19 (3d12) psychic damage." }
        ],
        actions: [
            { name: "Multiattack", description: "The Angry makes two hook attacks." },
            { name: "Hook", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 16 (2d12+3) piercing damage." }
        ]
    },
    "sorrowsworn-hungry": {
        name: "The Hungry",
        source: "MToF",
        size: "medium",
        type: "monstrosity",
        alignment: "neutral evil",
        ac: 17,
        acType: "natural armor",
        hp: 225,
        hitDice: "30d8+90",
        speed: { walk: 30 },
        abilityScores: { str: 19, dex: 10, con: 17, int: 6, wis: 11, cha: 6 },
        damageResistances: ["bludgeoning, piercing, and slashing while in dim light or darkness"],
        senses: ["darkvision 60 ft."],
        languages: "Common",
        cr: 11,
        environment: ["shadowfell"],
        role: "brute",
        tags: ["sorrowsworn", "shadowfell", "emotion"],
        traits: [
            { name: "Life Hunger", description: "If a creature the Hungry can see regains hit points, the Hungry gains two benefits until the end of its next turn: it has advantage on attack rolls, and its bite deals an extra 22 (4d10) necrotic damage on a hit." }
        ],
        actions: [
            { name: "Multiattack", description: "The Hungry makes two attacks: one with its bite and one with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 8 (1d8+4) piercing damage plus 13 (3d8) necrotic damage." },
            { name: "Claws", description: "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 18 (4d6+4) slashing damage. If the target is Medium or smaller, it is grappled (escape DC 16) and is restrained until the grapple ends. While grappling a creature, the Hungry can't attack with its claws." }
        ]
    },
    "sorrowsworn-lonely": {
        name: "The Lonely",
        source: "MToF",
        size: "medium",
        type: "monstrosity",
        alignment: "neutral evil",
        ac: 16,
        acType: "natural armor",
        hp: 112,
        hitDice: "15d8+45",
        speed: { walk: 30 },
        abilityScores: { str: 16, dex: 12, con: 17, int: 6, wis: 11, cha: 6 },
        damageResistances: ["bludgeoning, piercing, and slashing while in dim light or darkness"],
        senses: ["darkvision 60 ft."],
        languages: "Common",
        cr: 9,
        environment: ["shadowfell"],
        role: "controller",
        tags: ["sorrowsworn", "shadowfell", "emotion"],
        traits: [
            { name: "Psychic Leech", description: "At the start of each of the Lonely's turns, each creature within 5 feet of it must succeed on a DC 15 Wisdom saving throw or take 10 (3d6) psychic damage." },
            { name: "Thrives on Company", description: "The Lonely has advantage on attack rolls while it is within 30 feet of at least two other creatures. It otherwise has disadvantage on attack rolls." }
        ],
        actions: [
            { name: "Multiattack", description: "The Lonely makes one harpoon arm attack and uses Sorrowful Embrace." },
            { name: "Harpoon Arm", description: "Melee Weapon Attack: +7 to hit, reach 60 ft., one target. Hit: 21 (4d8+3) piercing damage, and the target is grappled (escape DC 15) if it is a Large or smaller creature. Until this grapple ends, the target is restrained, and the Lonely can't make other harpoon arm attacks." },
            { name: "Sorrowful Embrace", description: "Each creature grappled by the Lonely must make a DC 15 Wisdom saving throw. A creature takes 18 (4d8) psychic damage on a failed save, or half as much damage on a successful one. In either case, the Lonely pulls each of those creatures up to 30 feet straight toward it." }
        ]
    },
    "sorrowsworn-lost": {
        name: "The Lost",
        source: "MToF",
        size: "medium",
        type: "monstrosity",
        alignment: "neutral evil",
        ac: 15,
        acType: "natural armor",
        hp: 78,
        hitDice: "12d8+24",
        speed: { walk: 30 },
        abilityScores: { str: 17, dex: 12, con: 15, int: 6, wis: 7, cha: 5 },
        skills: { athletics: 6 },
        damageResistances: ["bludgeoning, piercing, and slashing while in dim light or darkness"],
        senses: ["darkvision 60 ft."],
        languages: "Common",
        cr: 7,
        environment: ["shadowfell"],
        role: "skirmisher",
        tags: ["sorrowsworn", "shadowfell", "emotion"],
        traits: [
            { name: "Embrace Death", description: "Any creature that starts its turn within 5 feet of the Lost must succeed on a DC 13 Wisdom saving throw or be frightened until the start of its next turn." },
            { name: "Spreading the Curse", description: "A humanoid that dies while grappled by the Lost becomes a new the Lost after 1d10 days, if it isn't restored to life before that happens." }
        ],
        actions: [
            { name: "Multiattack", description: "The Lost makes two arm spike attacks." },
            { name: "Arm Spike", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 14 (2d10+3) piercing damage." }
        ]
    },
    "sorrowsworn-wretched": {
        name: "The Wretched",
        source: "MToF",
        size: "small",
        type: "monstrosity",
        alignment: "neutral evil",
        ac: 15,
        acType: "natural armor",
        hp: 10,
        hitDice: "4d6-4",
        speed: { walk: 40 },
        abilityScores: { str: 7, dex: 12, con: 9, int: 5, wis: 6, cha: 5 },
        damageResistances: ["bludgeoning, piercing, and slashing while in dim light or darkness"],
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 0.25,
        environment: ["shadowfell"],
        role: "minion",
        tags: ["sorrowsworn", "shadowfell", "emotion"],
        traits: [
            { name: "Wretched Pack Tactics", description: "The Wretched has advantage on an attack roll against a creature if at least one of the Wretched's allies is within 5 feet of the creature and the ally isn't incapacitated. The Wretched otherwise has disadvantage on attack rolls." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (1d10+1) piercing damage, and the Wretched attaches to the target. While attached, the Wretched can't attack, and at the start of each of the Wretched's turns, the target takes 6 (1d10+1) necrotic damage. The attached Wretched moves with the target whenever the target moves. The creature can detach the Wretched by using its action to make a DC 11 Strength check and succeeding." }
        ]
    }
};
