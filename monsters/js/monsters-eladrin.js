// Eladrin (Seasonal) - MToF
// With environment and role tags for Monster Maker

const MONSTERS_ELADRIN = {
    "eladrin-autumn": {
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
        environment: ["feywild", "forest"],
        role: "controller",
        tags: ["eladrin", "fey", "elf", "seasonal"],
        traits: [
            { name: "Enchanting Presence", description: "Any non-eladrin creature that starts its turn within 60 feet of the eladrin must make a DC 16 Wisdom saving throw. On a failed save, the creature becomes charmed by the eladrin for 1 minute. On a successful save, the creature becomes immune to any eladrin's Enchanting Presence for 24 hours." },
            { name: "Fey Step (Recharge 4-6)", description: "As a bonus action, the eladrin can teleport up to 30 feet to an unoccupied space it can see." },
            { name: "Magic Resistance", description: "The eladrin has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Longsword", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d8+1) slashing damage plus 18 (4d8) psychic damage, or 6 (1d10+1) slashing damage plus 18 (4d8) psychic damage if used with two hands." },
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
    "eladrin-spring": {
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
        environment: ["feywild", "forest", "grassland"],
        role: "controller",
        tags: ["eladrin", "fey", "elf", "seasonal"],
        traits: [
            { name: "Fey Step (Recharge 4-6)", description: "As a bonus action, the eladrin can teleport up to 30 feet to an unoccupied space it can see." },
            { name: "Joyful Presence", description: "Any non-eladrin creature that starts its turn within 60 feet of the eladrin must make a DC 16 Wisdom saving throw. On a failed save, the creature becomes charmed by the eladrin for 1 minute. On a successful save, the creature becomes immune to any eladrin's Joyful Presence for 24 hours." },
            { name: "Magic Resistance", description: "The eladrin has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack", description: "The eladrin makes two weapon attacks. The eladrin can cast one spell in place of one of these attacks." },
            { name: "Longsword", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d8+2) slashing damage plus 4 (1d8) psychic damage, or 7 (1d10+2) slashing damage plus 4 (1d8) psychic damage if used with two hands." },
            { name: "Longbow", description: "Ranged Weapon Attack: +7 to hit, range 150/600 ft., one target. Hit: 7 (1d8+3) piercing damage plus 4 (1d8) psychic damage." }
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
    "eladrin-summer": {
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
        environment: ["feywild", "desert", "grassland"],
        role: "brute",
        tags: ["eladrin", "fey", "elf", "seasonal"],
        traits: [
            { name: "Fearsome Presence", description: "Any non-eladrin creature that starts its turn within 60 feet of the eladrin must make a DC 16 Wisdom saving throw. On a failed save, the creature becomes frightened of the eladrin for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to any eladrin's Fearsome Presence for the next 24 hours." },
            { name: "Fey Step (Recharge 4-6)", description: "As a bonus action, the eladrin can teleport up to 30 feet to an unoccupied space it can see." },
            { name: "Magic Resistance", description: "The eladrin has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack", description: "The eladrin makes two weapon attacks." },
            { name: "Longsword", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 8 (1d8+4) slashing damage plus 4 (1d8) fire damage, or 9 (1d10+4) slashing damage plus 4 (1d8) fire damage if used with two hands." },
            { name: "Longbow", description: "Ranged Weapon Attack: +9 to hit, range 150/600 ft., one target. Hit: 9 (1d8+5) piercing damage plus 4 (1d8) fire damage." }
        ],
        reactions: [
            { name: "Parry", description: "The eladrin adds 3 to its AC against one melee attack that would hit it. To do so, the eladrin must see the attacker and be wielding a melee weapon." }
        ]
    },
    "eladrin-winter": {
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
        skills: { arcana: 8, history: 8 },
        damageResistances: ["cold; bludgeoning, piercing, and slashing from nonmagical attacks"],
        senses: ["darkvision 60 ft."],
        languages: "Common, Elvish, Sylvan",
        cr: 10,
        environment: ["feywild", "arctic"],
        role: "controller",
        tags: ["eladrin", "fey", "elf", "seasonal"],
        traits: [
            { name: "Fey Step (Recharge 4-6)", description: "As a bonus action, the eladrin can teleport up to 30 feet to an unoccupied space it can see." },
            { name: "Frigid Rebuttal", description: "When the eladrin takes damage from a creature the eladrin can see within 60 feet of it, the eladrin can force that creature to make a DC 16 Constitution saving throw. On a failed save, the creature takes 11 (2d10) cold damage." },
            { name: "Magic Resistance", description: "The eladrin has advantage on saving throws against spells and other magical effects." },
            { name: "Sorrowful Presence", description: "Any non-eladrin creature that starts its turn within 60 feet of the eladrin must make a DC 13 Wisdom saving throw. On a failed save, the creature becomes charmed by the eladrin for 1 minute. While charmed in this way, the creature has disadvantage on ability checks and saving throws. The charmed creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to any eladrin's Sorrowful Presence for the next 24 hours." }
        ],
        actions: [
            { name: "Longsword", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d8) slashing damage plus 13 (3d8) cold damage, or 5 (1d10) slashing damage plus 13 (3d8) cold damage if used with two hands." },
            { name: "Longbow", description: "Ranged Weapon Attack: +7 to hit, range 150/600 ft., one target. Hit: 7 (1d8+3) piercing damage plus 13 (3d8) cold damage." }
        ],
        spellcasting: {
            innate: true,
            ability: "int",
            dc: 16,
            spells: {
                atWill: ["fog cloud", "gust of wind"],
                "3/day": ["cone of cold"],
                "1/day each": ["ice storm", "sleet storm"]
            }
        }
    },

    // ===== Oblex =====
    "oblex-spawn": {
        name: "Oblex Spawn",
        source: "MToF",
        size: "tiny",
        type: "ooze",
        alignment: "lawful evil",
        ac: 13,
        hp: 18,
        hitDice: "4d4+8",
        speed: { walk: 20 },
        abilityScores: { str: 8, dex: 16, con: 15, int: 14, wis: 11, cha: 10 },
        savingThrows: { int: 4, cha: 2 },
        conditionImmunities: ["blinded", "charmed", "deafened", "exhaustion", "prone"],
        senses: ["blindsight 60 ft. (blind beyond this radius)"],
        languages: "—",
        cr: 0.25,
        environment: ["underdark", "urban"],
        role: "lurker",
        tags: ["oblex", "ooze", "mind flayer"],
        traits: [
            { name: "Amorphous", description: "The oblex can move through a space as narrow as 1 inch wide without squeezing." },
            { name: "Aversion to Fire", description: "If the oblex takes fire damage, it has disadvantage on attack rolls and ability checks until the end of its next turn." }
        ],
        actions: [
            { name: "Pseudopod", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4+3) bludgeoning damage plus 2 (1d4) psychic damage." }
        ]
    },
    "oblex-adult": {
        name: "Adult Oblex",
        source: "MToF",
        size: "medium",
        type: "ooze",
        alignment: "lawful evil",
        ac: 14,
        hp: 75,
        hitDice: "10d8+30",
        speed: { walk: 20 },
        abilityScores: { str: 8, dex: 19, con: 16, int: 19, wis: 12, cha: 15 },
        savingThrows: { int: 7, cha: 5 },
        skills: { deception: 5, perception: 4 },
        conditionImmunities: ["blinded", "charmed", "deafened", "exhaustion", "prone"],
        senses: ["blindsight 60 ft. (blind beyond this radius)"],
        languages: "Common plus two more languages",
        cr: 5,
        environment: ["underdark", "urban"],
        role: "controller",
        tags: ["oblex", "ooze", "mind flayer", "shapechanger"],
        traits: [
            { name: "Amorphous", description: "The oblex can move through a space as narrow as 1 inch wide without squeezing." },
            { name: "Aversion to Fire", description: "If the oblex takes fire damage, it has disadvantage on attack rolls and ability checks until the end of its next turn." },
            { name: "Sulfurous Impersonation", description: "As a bonus action, the oblex can extrude a piece of itself that assumes the appearance of one Medium or smaller creature whose memories it has stolen. This simulacrum appears, feels, and sounds exactly like the creature it impersonates, though it smells faintly of sulfur. The oblex can impersonate 1d4+1 different creatures, each one tethered to its body by a strand of slime that can extend up to 120 feet away. The simulacrum is an extension of the oblex, meaning that the oblex occupies its space and the simulacrum's space simultaneously. The tether is immune to damage, but it is severed if there is no opening at least 1 inch wide between the oblex's main body and the simulacrum. The simulacrum disappears if the tether is severed." }
        ],
        actions: [
            { name: "Multiattack", description: "The oblex makes one pseudopod attack and uses Eat Memories." },
            { name: "Pseudopod", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d6+4) bludgeoning damage plus 5 (2d4) psychic damage." },
            { name: "Eat Memories", description: "The oblex targets one creature it can see within 5 feet of it. The target must succeed on a DC 15 Wisdom saving throw or take 18 (4d8) psychic damage and become memory drained until it finishes a short or long rest or until it benefits from the greater restoration or heal spell. Constructs, oozes, plants, and undead succeed on the save automatically." }
        ],
        spellcasting: {
            innate: true,
            ability: "int",
            dc: 15,
            spells: {
                "3/day each": ["charm person (as 5th-level spell)", "color spray", "detect thoughts", "hold person (as 3rd-level spell)"]
            }
        }
    },
    "oblex-elder": {
        name: "Elder Oblex",
        source: "MToF",
        size: "huge",
        type: "ooze",
        alignment: "lawful evil",
        ac: 16,
        hp: 115,
        hitDice: "10d12+50",
        speed: { walk: 20 },
        abilityScores: { str: 15, dex: 16, con: 21, int: 22, wis: 13, cha: 18 },
        savingThrows: { int: 10, cha: 8 },
        skills: { arcana: 10, deception: 8, history: 10, nature: 10, perception: 5, religion: 10 },
        conditionImmunities: ["blinded", "charmed", "deafened", "exhaustion", "prone"],
        senses: ["blindsight 60 ft. (blind beyond this radius)"],
        languages: "Common plus six more languages",
        cr: 10,
        environment: ["underdark", "urban"],
        role: "controller",
        tags: ["oblex", "ooze", "mind flayer", "shapechanger"],
        traits: [
            { name: "Amorphous", description: "The oblex can move through a space as narrow as 1 inch wide without squeezing." },
            { name: "Aversion to Fire", description: "If the oblex takes fire damage, it has disadvantage on attack rolls and ability checks until the end of its next turn." },
            { name: "Sulfurous Impersonation", description: "As a bonus action, the oblex can extrude a piece of itself that assumes the appearance of one Medium or smaller creature whose memories it has stolen. This simulacrum appears, feels, and sounds exactly like the creature it impersonates, though it smells faintly of sulfur. The oblex can impersonate 2d6+1 different creatures, each one tethered to its body by a strand of slime that can extend up to 120 feet away." }
        ],
        actions: [
            { name: "Multiattack", description: "The elder oblex makes two pseudopod attacks and uses Eat Memories." },
            { name: "Pseudopod", description: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 17 (4d6+3) bludgeoning damage plus 7 (2d6) psychic damage." },
            { name: "Eat Memories", description: "The oblex targets one creature it can see within 5 feet of it. The target must succeed on a DC 18 Wisdom saving throw or take 44 (8d10) psychic damage and become memory drained until it finishes a short or long rest or until it benefits from the greater restoration or heal spell. Constructs, oozes, plants, and undead succeed on the save automatically." }
        ],
        spellcasting: {
            innate: true,
            ability: "int",
            dc: 18,
            spells: {
                atWill: ["charm person (as 5th-level spell)", "detect thoughts"],
                "3/day each": ["confusion", "dimension door", "dominate person", "fear", "hallucinatory terrain", "hold person (as 3rd-level spell)", "hypnotic pattern", "telekinesis"]
            }
        }
    },

    // ===== Boneclaw =====
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
        languages: "Common plus the languages of its master",
        cr: 12,
        environment: ["urban", "underdark"],
        role: "skirmisher",
        tags: ["undead", "shadow"],
        traits: [
            { name: "Rejuvenation", description: "While its master lives, a destroyed boneclaw gains a new body in 1d10 hours, with all its hit points. The new body appears within 1 mile of the boneclaw's master." },
            { name: "Shadow Stealth", description: "While in dim light or darkness, the boneclaw can take the Hide action as a bonus action." }
        ],
        actions: [
            { name: "Multiattack", description: "The boneclaw makes two claw attacks." },
            { name: "Piercing Claw", description: "Melee Weapon Attack: +8 to hit, reach 15 ft., one target. Hit: 20 (3d10+4) piercing damage plus 11 (2d10) necrotic damage. If the target is a creature, the boneclaw can pull the target up to 10 feet toward itself, and the target is grappled (escape DC 14). The boneclaw has two claws. While a claw grapples a target, the claw can attack only that target." },
            { name: "Shadow Jump", description: "If the boneclaw is in dim light or darkness, each creature of the boneclaw's choice within 5 feet of it must succeed on a DC 14 Constitution saving throw or take 34 (5d12+2) necrotic damage. The boneclaw then magically teleports up to 60 feet to an unoccupied space it can see. It can bring one creature it's grappling, teleporting that creature to an unoccupied space it can see within 5 feet of its destination. The destination spaces of this teleportation must be in dim light or darkness." }
        ],
        reactions: [
            { name: "Deadly Reach", description: "In response to a visible enemy moving into its reach, the boneclaw makes one claw attack against that enemy. If the attack hits, the boneclaw can make a second claw attack against the target." }
        ]
    },

    // ===== Skull Lord =====
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
        savingThrows: { dex: 7, int: 7, cha: 9 },
        skills: { athletics: 6, history: 7, perception: 10, stealth: 7 },
        damageResistances: ["cold", "necrotic; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["blinded", "charmed", "deafened", "exhaustion", "frightened", "poisoned", "stunned", "unconscious"],
        senses: ["darkvision 60 ft."],
        languages: "the languages it knew in life",
        cr: 15,
        environment: ["underdark", "urban"],
        role: "leader",
        tags: ["undead", "legendary"],
        traits: [
            { name: "Legendary Resistance (3/Day)", description: "If the skull lord fails a saving throw, it can choose to succeed instead." },
            { name: "Master of the Grave", description: "While within 30 feet of the skull lord, any undead ally of the skull lord makes saving throws with advantage, and that ally regains 1d6 hit points whenever it starts its turn there." },
            { name: "Evasion", description: "If the skull lord is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails." }
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
            dc: 17,
            attack: 9,
            spells: {
                cantrips: ["chill touch", "fire bolt", "mage hand", "poison spray"],
                "1st": { slots: 4, spells: ["magic missile", "expeditious retreat", "thunderwave"] },
                "2nd": { slots: 3, spells: ["darkness", "mirror image", "scorching ray"] },
                "3rd": { slots: 3, spells: ["fear", "haste", "fireball"] },
                "4th": { slots: 3, spells: ["dimension door", "ice storm"] },
                "5th": { slots: 2, spells: ["cloudkill", "cone of cold"] },
                "6th": { slots: 1, spells: ["eyebite"] }
            }
        }
    }
};
