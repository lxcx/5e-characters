// Expansion Pack 16 - More Creatures
// Continuing comprehensive coverage

const MONSTERS_EXPANSION16 = {
    // ===== More Fiends =====
    "spined-devil": {
        name: "Spined Devil",
        source: "MM",
        size: "small",
        type: "fiend",
        subtype: "devil",
        alignment: "lawful evil",
        ac: 13,
        acType: "natural armor",
        hp: 22,
        hitDice: "5d6+5",
        speed: { walk: 20, fly: 40 },
        abilityScores: { str: 10, dex: 15, con: 12, int: 11, wis: 14, cha: 8 },
        damageResistances: ["cold; bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 120 ft."],
        languages: "Infernal, telepathy 120 ft.",
        cr: 2,
        environment: ["nine hells"],
        role: "artillery",
        tags: ["fiend", "devil"],
        traits: [
            { name: "Devil's Sight", description: "Magical darkness doesn't impede the devil's darkvision." },
            { name: "Flyby", description: "The devil doesn't provoke an opportunity attack when it flies out of an enemy's reach." },
            { name: "Limited Spines", description: "The devil has twelve tail spines. Used spines regrow by the time the devil finishes a long rest." },
            { name: "Magic Resistance", description: "The devil has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack", description: "The devil makes two attacks: one with its bite and one with its fork or two with its tail spines." },
            { name: "Bite", description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 5 (2d4) slashing damage." },
            { name: "Fork", description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6) piercing damage." },
            { name: "Tail Spine", description: "Ranged Weapon Attack: +4 to hit, range 20/80 ft., one target. Hit: 4 (1d4+2) piercing damage plus 3 (1d6) fire damage." }
        ]
    },
    "merregon": {
        name: "Merregon",
        source: "MToF",
        size: "medium",
        type: "fiend",
        subtype: "devil",
        alignment: "lawful evil",
        ac: 16,
        acType: "natural armor",
        hp: 45,
        hitDice: "6d8+18",
        speed: { walk: 30 },
        abilityScores: { str: 18, dex: 14, con: 17, int: 6, wis: 12, cha: 8 },
        damageResistances: ["cold; bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["frightened", "poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "understands Infernal but can't speak, telepathy 120 ft.",
        cr: 4,
        environment: ["nine hells"],
        role: "soldier",
        tags: ["fiend", "devil"],
        traits: [
            { name: "Devil's Sight", description: "Magical darkness doesn't impede the devil's darkvision." },
            { name: "Magic Resistance", description: "The devil has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack", description: "The merregon makes two halberd attacks, or if an allied fiend of challenge rating 6 or higher is within 60 feet of it, the merregon makes three halberd attacks." },
            { name: "Halberd", description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 9 (1d10+4) slashing damage." },
            { name: "Heavy Crossbow", description: "Ranged Weapon Attack: +4 to hit, range 100/400 ft., one target. Hit: 7 (1d10+2) piercing damage." }
        ],
        reactions: [
            { name: "Loyal Bodyguard", description: "When another fiend within 5 feet of the merregon is hit by an attack, the merregon causes itself to be hit instead." }
        ]
    },

    // ===== More Demons =====
    "manes": {
        name: "Manes",
        source: "MM",
        size: "small",
        type: "fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 9,
        hp: 9,
        hitDice: "2d6+2",
        speed: { walk: 20 },
        abilityScores: { str: 10, dex: 9, con: 13, int: 3, wis: 8, cha: 4 },
        damageResistances: ["cold", "fire", "lightning"],
        damageImmunities: ["poison"],
        conditionImmunities: ["charmed", "frightened", "poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "understands Abyssal but can't speak",
        cr: 0.125,
        environment: ["abyss"],
        role: "minion",
        tags: ["fiend", "demon"],
        actions: [
            { name: "Claws", description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 5 (2d4) slashing damage." }
        ]
    },
    "rutterkin": {
        name: "Rutterkin",
        source: "MToF",
        size: "medium",
        type: "fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 12,
        hp: 37,
        hitDice: "5d8+15",
        speed: { walk: 20 },
        abilityScores: { str: 14, dex: 15, con: 17, int: 5, wis: 12, cha: 6 },
        damageResistances: ["cold", "fire", "lightning"],
        damageImmunities: ["poison"],
        conditionImmunities: ["charmed", "frightened", "poisoned"],
        senses: ["darkvision 120 ft."],
        languages: "understands Abyssal but can't speak",
        cr: 2,
        environment: ["abyss"],
        role: "brute",
        tags: ["fiend", "demon"],
        traits: [
            { name: "Crippling Fear", description: "When a creature that isn't a demon starts its turn within 30 feet of three or more rutterkins, it must make a DC 11 Wisdom saving throw. The creature has disadvantage on the save if it's within 30 feet of six or more rutterkins. On a failed save, the creature becomes frightened of the rutterkins for 1 minute. While frightened in this way, the creature is restrained. At the end of each of the frightened creature's turns, it can repeat the saving throw, ending the effect on itself on a success." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 12 (3d6+2) piercing damage. If the target is a creature, it must succeed on a DC 13 Constitution saving throw against disease or become poisoned. At the end of each long rest, the poisoned target can repeat the saving throw, ending the effect on itself on a success. If the target is reduced to 0 hit points while poisoned in this way, it dies and instantly transforms into a living abyssal wretch under the DM's control." }
        ]
    },
    "babau": {
        name: "Babau",
        source: "VGtM",
        size: "medium",
        type: "fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 16,
        acType: "natural armor",
        hp: 82,
        hitDice: "11d8+33",
        speed: { walk: 40 },
        abilityScores: { str: 19, dex: 16, con: 16, int: 11, wis: 12, cha: 13 },
        skills: { perception: 5, stealth: 5 },
        damageResistances: ["cold", "fire", "lightning; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 120 ft."],
        languages: "Abyssal",
        cr: 4,
        environment: ["abyss"],
        role: "lurker",
        tags: ["fiend", "demon"],
        traits: [
            { name: "Innate Spellcasting", description: "The babau's innate spellcasting ability is Wisdom (spell save DC 11). The babau can innately cast the following spells, requiring no material components: At will: darkness, dispel magic, fear, heat metal, levitate" }
        ],
        actions: [
            { name: "Multiattack", description: "The babau makes two melee attacks. It can also use Weakening Gaze before or after making these attacks." },
            { name: "Claw", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8+4) slashing damage." },
            { name: "Spear", description: "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 7 (1d6+4) piercing damage, or 8 (1d8+4) piercing damage when used with two hands to make a melee attack." },
            { name: "Weakening Gaze", description: "The babau targets one creature that it can see within 20 feet of it. The target must make a DC 13 Constitution saving throw. On a failed save, the target deals only half damage with weapon attacks that use Strength for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." }
        ]
    },

    // ===== More Undead =====
    "bodak": {
        name: "Bodak",
        source: "VGtM",
        size: "medium",
        type: "undead",
        alignment: "chaotic evil",
        ac: 15,
        acType: "natural armor",
        hp: 58,
        hitDice: "9d8+18",
        speed: { walk: 30 },
        abilityScores: { str: 15, dex: 16, con: 15, int: 7, wis: 12, cha: 12 },
        skills: { perception: 4, stealth: 6 },
        damageResistances: ["cold", "fire", "necrotic; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["lightning", "poison"],
        conditionImmunities: ["charmed", "frightened", "poisoned"],
        senses: ["darkvision 120 ft."],
        languages: "Abyssal, the languages it knew in life",
        cr: 6,
        environment: ["underdark", "swamp"],
        role: "lurker",
        tags: ["undead"],
        traits: [
            { name: "Aura of Annihilation", description: "The bodak can activate or deactivate this feature as a bonus action. While active, the aura deals 5 necrotic damage to any creature that ends its turn within 30 feet of the bodak. Undead and fiends ignore this effect." },
            { name: "Death Gaze", description: "When a creature that can see the bodak's eyes starts its turn within 30 feet of the bodak, the bodak can force it to make a DC 13 Constitution saving throw if the bodak isn't incapacitated and can see the creature. If the saving throw fails by 5 or more, the creature is reduced to 0 hit points, unless it is immune to the frightened condition. Otherwise, a creature takes 16 (3d10) psychic damage on a failed save." },
            { name: "Sunlight Hypersensitivity", description: "The bodak takes 5 radiant damage when it starts its turn in sunlight. While in sunlight, it has disadvantage on attack rolls and ability checks." }
        ],
        actions: [
            { name: "Fist", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 4 (1d4+2) bludgeoning damage plus 9 (2d8) necrotic damage." },
            { name: "Withering Gaze", description: "One creature that the bodak can see within 60 feet of it must make a DC 13 Constitution saving throw, taking 22 (4d10) necrotic damage on a failed save, or half as much damage on a successful one." }
        ]
    },
    "devourer": {
        name: "Devourer",
        source: "VGtM",
        size: "large",
        type: "fiend",
        alignment: "chaotic evil",
        ac: 16,
        acType: "natural armor",
        hp: 178,
        hitDice: "17d10+85",
        speed: { walk: 30 },
        abilityScores: { str: 20, dex: 12, con: 20, int: 13, wis: 10, cha: 16 },
        damageResistances: ["cold", "fire", "lightning"],
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 120 ft."],
        languages: "Abyssal, telepathy 120 ft.",
        cr: 13,
        environment: ["underdark"],
        role: "brute",
        tags: ["fiend"],
        traits: [
            { name: "Soul Eater", description: "A devourer can consume the soul of a creature that has been dead for no longer than 1 minute, provided that creature is neither a construct nor an undead. The devourer must be within 5 feet of the corpse. A consumed soul is trapped inside the devourer's skeletal chest. While the soul is trapped, the devourer can use it as a source of energy for its Imprison Soul action. The soul is freed if the devourer dies or when 24 hours have passed since the soul was consumed. While trapped, a soul can't be returned to life by any means. A devourer can only hold one soul at a time." }
        ],
        actions: [
            { name: "Multiattack", description: "The devourer makes two claw attacks and can use either Imprison Soul or Soul Rend." },
            { name: "Claw", description: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 12 (2d6+5) slashing damage plus 21 (6d6) necrotic damage." },
            { name: "Imprison Soul", description: "The devourer chooses a living humanoid with 0 hit points that it can see within 30 feet of it. That creature is teleported inside the devourer's ribcage and imprisoned there. A creature imprisoned in this manner has disadvantage on death saving throws. If it dies while imprisoned, the devourer regains 25 hit points, immediately recharges Soul Rend, and the creature's soul is trapped." },
            { name: "Soul Rend (Recharge 6)", description: "The devourer creates a vortex of life-draining energy in a 20-foot radius centered on itself. Each humanoid in that area must make a DC 18 Constitution saving throw, taking 44 (8d10) necrotic damage on a failed save, or half as much damage on a successful one." }
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
        environment: ["any"],
        role: "leader",
        tags: ["undead"],
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

    // ===== More Monstrosities =====
    "yeti": {
        name: "Yeti",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "chaotic evil",
        ac: 12,
        acType: "natural armor",
        hp: 51,
        hitDice: "6d10+18",
        speed: { walk: 40, climb: 40 },
        abilityScores: { str: 18, dex: 13, con: 16, int: 8, wis: 12, cha: 7 },
        skills: { perception: 3, stealth: 3 },
        damageImmunities: ["cold"],
        senses: ["darkvision 60 ft."],
        languages: "Yeti",
        cr: 3,
        environment: ["arctic"],
        role: "brute",
        tags: ["monstrosity", "cold"],
        traits: [
            { name: "Fear of Fire", description: "If the yeti takes fire damage, it has disadvantage on attack rolls and ability checks until the end of its next turn." },
            { name: "Keen Smell", description: "The yeti has advantage on Wisdom (Perception) checks that rely on smell." },
            { name: "Snow Camouflage", description: "The yeti has advantage on Dexterity (Stealth) checks made to hide in snowy terrain." }
        ],
        actions: [
            { name: "Multiattack", description: "The yeti can use its Chilling Gaze and makes two claw attacks." },
            { name: "Claw", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6+4) slashing damage plus 3 (1d6) cold damage." },
            { name: "Chilling Gaze", description: "The yeti targets one creature it can see within 30 feet of it. If the target can see the yeti, the target must succeed on a DC 13 Constitution saving throw against this magic or take 10 (3d6) cold damage and then be paralyzed for 1 minute, unless it is immune to cold damage. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If the target's saving throw is successful, or if the effect ends on it, the target is immune to the Chilling Gaze of all yetis (but not abominable yetis) for 1 hour." }
        ]
    },
    "abominable-yeti": {
        name: "Abominable Yeti",
        source: "MM",
        size: "huge",
        type: "monstrosity",
        alignment: "chaotic evil",
        ac: 15,
        acType: "natural armor",
        hp: 137,
        hitDice: "11d12+66",
        speed: { walk: 40, climb: 40 },
        abilityScores: { str: 24, dex: 10, con: 22, int: 9, wis: 13, cha: 9 },
        skills: { perception: 5, stealth: 4 },
        damageImmunities: ["cold"],
        senses: ["darkvision 60 ft."],
        languages: "Yeti",
        cr: 9,
        environment: ["arctic"],
        role: "brute",
        tags: ["monstrosity", "cold"],
        traits: [
            { name: "Fear of Fire", description: "If the yeti takes fire damage, it has disadvantage on attack rolls and ability checks until the end of its next turn." },
            { name: "Keen Smell", description: "The yeti has advantage on Wisdom (Perception) checks that rely on smell." },
            { name: "Snow Camouflage", description: "The yeti has advantage on Dexterity (Stealth) checks made to hide in snowy terrain." }
        ],
        actions: [
            { name: "Multiattack", description: "The yeti can use its Chilling Gaze and makes two claw attacks." },
            { name: "Claw", description: "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 14 (2d6+7) slashing damage plus 7 (2d6) cold damage." },
            { name: "Chilling Gaze", description: "The yeti targets one creature it can see within 30 feet of it. If the target can see the yeti, the target must succeed on a DC 18 Constitution saving throw against this magic or take 21 (6d6) cold damage and then be paralyzed for 1 minute, unless it is immune to cold damage. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." },
            { name: "Cold Breath (Recharge 6)", description: "The yeti exhales a 30-foot cone of frigid air. Each creature in that area must make a DC 18 Constitution saving throw, taking 45 (10d8) cold damage on a failed save, or half as much damage on a successful one." }
        ]
    },
    "leucrotta": {
        name: "Leucrotta",
        source: "VGtM",
        size: "large",
        type: "monstrosity",
        alignment: "chaotic evil",
        ac: 14,
        acType: "natural armor",
        hp: 67,
        hitDice: "9d10+18",
        speed: { walk: 50 },
        abilityScores: { str: 18, dex: 14, con: 15, int: 9, wis: 12, cha: 6 },
        skills: { deception: 2, perception: 5 },
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
            { name: "Rampage", description: "When the leucrotta reduces a creature to 0 hit points with a melee attack on its turn, it can take a bonus action to move up to half its speed and make an attack with its hooves." }
        ],
        actions: [
            { name: "Multiattack", description: "The leucrotta makes two attacks: one with its bite and one with its hooves." },
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8+4) piercing damage. If the leucrotta scores a critical hit, it rolls the damage dice three times, instead of twice." },
            { name: "Hooves", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6+4) bludgeoning damage." }
        ]
    },

    // ===== More Beasts =====
    "giant-elk": {
        name: "Giant Elk",
        source: "MM",
        size: "huge",
        type: "beast",
        alignment: "unaligned",
        ac: 14,
        acType: "natural armor",
        hp: 42,
        hitDice: "5d12+10",
        speed: { walk: 60 },
        abilityScores: { str: 19, dex: 16, con: 14, int: 7, wis: 14, cha: 10 },
        skills: { perception: 4 },
        senses: [],
        languages: "Giant Elk, understands Common, Elvish, and Sylvan but can't speak them",
        cr: 2,
        environment: ["forest", "grassland", "hill", "mountain"],
        role: "brute",
        tags: ["beast"],
        traits: [
            { name: "Charge", description: "If the elk moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone." }
        ],
        actions: [
            { name: "Ram", description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 11 (2d6+4) bludgeoning damage." },
            { name: "Hooves", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one prone creature. Hit: 22 (4d8+4) bludgeoning damage." }
        ]
    },
    "giant-vulture": {
        name: "Giant Vulture",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "neutral evil",
        ac: 10,
        hp: 22,
        hitDice: "3d10+6",
        speed: { walk: 10, fly: 60 },
        abilityScores: { str: 15, dex: 10, con: 15, int: 6, wis: 12, cha: 7 },
        skills: { perception: 3 },
        senses: [],
        languages: "understands Common but can't speak",
        cr: 1,
        environment: ["desert", "grassland"],
        role: "skirmisher",
        tags: ["beast"],
        traits: [
            { name: "Keen Sight and Smell", description: "The vulture has advantage on Wisdom (Perception) checks that rely on sight or smell." },
            { name: "Pack Tactics", description: "The vulture has advantage on an attack roll against a creature if at least one of the vulture's allies is within 5 feet of the creature and the ally isn't incapacitated." }
        ],
        actions: [
            { name: "Multiattack", description: "The vulture makes two attacks: one with its beak and one with its talons." },
            { name: "Beak", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4+2) piercing damage." },
            { name: "Talons", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6+2) slashing damage." }
        ]
    },
    "giant-hyena": {
        name: "Giant Hyena",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        hp: 45,
        hitDice: "6d10+12",
        speed: { walk: 50 },
        abilityScores: { str: 16, dex: 14, con: 14, int: 2, wis: 12, cha: 7 },
        skills: { perception: 3 },
        senses: [],
        languages: "—",
        cr: 1,
        environment: ["desert", "forest", "grassland", "hill"],
        role: "brute",
        tags: ["beast"],
        traits: [
            { name: "Rampage", description: "When the hyena reduces a creature to 0 hit points with a melee attack on its turn, the hyena can take a bonus action to move up to half its speed and make a bite attack." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6+3) piercing damage." }
        ]
    },
    "giant-poisonous-snake": {
        name: "Giant Poisonous Snake",
        source: "MM",
        size: "medium",
        type: "beast",
        alignment: "unaligned",
        ac: 14,
        hp: 11,
        hitDice: "2d8+2",
        speed: { walk: 30, swim: 30 },
        abilityScores: { str: 10, dex: 18, con: 13, int: 2, wis: 10, cha: 3 },
        skills: { perception: 2 },
        senses: ["blindsight 10 ft."],
        languages: "—",
        cr: 0.25,
        environment: ["desert", "forest", "grassland", "swamp"],
        role: "lurker",
        tags: ["beast"],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 6 (1d4+4) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one." }
        ]
    }
};
