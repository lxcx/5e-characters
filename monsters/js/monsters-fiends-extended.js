// Extended Fiends - More Devils and Demons
// Sources: MM, MToF, VGtM

const MONSTERS_FIENDS_EXTENDED = {
    // ===== Greater Devils =====
    "pit-fiend": {
        name: "Pit Fiend",
        source: "MM",
        size: "large",
        type: "fiend",
        subtype: "devil",
        alignment: "lawful evil",
        ac: 19,
        acType: "natural armor",
        hp: 300,
        hitDice: "24d10+168",
        speed: { walk: 30, fly: 60 },
        abilityScores: { str: 26, dex: 14, con: 24, int: 22, wis: 18, cha: 24 },
        savingThrows: { dex: 8, con: 13, wis: 10 },
        damageResistances: ["cold; bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["poisoned"],
        senses: ["truesight 120 ft."],
        languages: "Infernal, telepathy 120 ft.",
        cr: 20,
        environment: ["nine hells"],
        role: "brute",
        tags: ["devil", "fiend", "spellcaster"],
        traits: [
            { name: "Fear Aura", description: "Any creature hostile to the pit fiend that starts its turn within 20 feet of the pit fiend must make a DC 21 Wisdom saving throw, unless the pit fiend is incapacitated. On a failed save, the creature is frightened until the start of its next turn." },
            { name: "Magic Resistance", description: "The pit fiend has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "The pit fiend's weapon attacks are magical." }
        ],
        actions: [
            { name: "Multiattack", description: "The pit fiend makes four attacks: one with its bite, one with its claw, one with its mace, and one with its tail." },
            { name: "Bite", description: "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 22 (4d6+8) piercing damage. The target must succeed on a DC 21 Constitution saving throw or become poisoned. While poisoned in this way, the target can't regain hit points, and it takes 21 (6d6) poison damage at the start of each of its turns." },
            { name: "Claw", description: "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 17 (2d8+8) slashing damage." },
            { name: "Mace", description: "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 15 (2d6+8) bludgeoning damage plus 21 (6d6) fire damage." },
            { name: "Tail", description: "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 24 (3d10+8) bludgeoning damage." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 21,
            spells: {
                atWill: ["detect magic", "fireball"],
                "3/day each": ["hold monster", "wall of fire"]
            }
        }
    },
    "horned-devil": {
        name: "Horned Devil",
        source: "MM",
        size: "large",
        type: "fiend",
        subtype: "devil",
        alignment: "lawful evil",
        ac: 18,
        acType: "natural armor",
        hp: 178,
        hitDice: "17d10+85",
        speed: { walk: 20, fly: 60 },
        abilityScores: { str: 22, dex: 17, con: 21, int: 12, wis: 16, cha: 17 },
        savingThrows: { str: 10, dex: 7, wis: 7, cha: 7 },
        damageResistances: ["cold; bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 120 ft."],
        languages: "Infernal, telepathy 120 ft.",
        cr: 11,
        environment: ["nine hells"],
        role: "brute",
        tags: ["devil", "fiend"],
        traits: [
            { name: "Devil's Sight", description: "Magical darkness doesn't impede the devil's darkvision." },
            { name: "Magic Resistance", description: "The devil has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack", description: "The devil makes three melee attacks: two with its fork and one with its tail. It can use Hurl Flame in place of any melee attack." },
            { name: "Fork", description: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 15 (2d8+6) piercing damage." },
            { name: "Tail", description: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 10 (1d8+6) piercing damage. If the target is a creature other than an undead or a construct, it must succeed on a DC 17 Constitution saving throw or lose 10 (3d6) hit points at the start of each of its turns due to an infernal wound." },
            { name: "Hurl Flame", description: "Ranged Spell Attack: +7 to hit, range 150 ft., one target. Hit: 14 (4d6) fire damage. If the target is a flammable object that isn't being worn or carried, it also catches fire." }
        ]
    },
    "ice-devil": {
        name: "Ice Devil",
        source: "MM",
        size: "large",
        type: "fiend",
        subtype: "devil",
        alignment: "lawful evil",
        ac: 18,
        acType: "natural armor",
        hp: 180,
        hitDice: "19d10+76",
        speed: { walk: 40 },
        abilityScores: { str: 21, dex: 14, con: 18, int: 18, wis: 15, cha: 18 },
        savingThrows: { dex: 7, con: 9, wis: 7, cha: 9 },
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        damageImmunities: ["cold", "fire", "poison"],
        conditionImmunities: ["poisoned"],
        senses: ["blindsight 60 ft.", "darkvision 120 ft."],
        languages: "Infernal, telepathy 120 ft.",
        cr: 14,
        environment: ["nine hells", "arctic"],
        role: "soldier",
        tags: ["devil", "fiend", "cold"],
        traits: [
            { name: "Devil's Sight", description: "Magical darkness doesn't impede the devil's darkvision." },
            { name: "Magic Resistance", description: "The devil has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack", description: "The devil makes three attacks: one with its bite, one with its claws, and one with its tail." },
            { name: "Bite", description: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 12 (2d6+5) piercing damage plus 10 (3d6) cold damage." },
            { name: "Claws", description: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 10 (2d4+5) slashing damage plus 10 (3d6) cold damage." },
            { name: "Tail", description: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 12 (2d6+5) bludgeoning damage plus 10 (3d6) cold damage." },
            { name: "Wall of Ice (Recharge 6)", description: "The devil magically forms an opaque wall of ice on a solid surface it can see within 60 feet of it. The wall is 1 foot thick and up to 30 feet long and 10 feet high, or it's a hemispherical dome up to 20 feet in diameter." }
        ]
    },
    "erinyes": {
        name: "Erinyes",
        source: "MM",
        size: "medium",
        type: "fiend",
        subtype: "devil",
        alignment: "lawful evil",
        ac: 18,
        acType: "plate",
        hp: 153,
        hitDice: "18d8+72",
        speed: { walk: 30, fly: 60 },
        abilityScores: { str: 18, dex: 16, con: 18, int: 14, wis: 14, cha: 18 },
        savingThrows: { dex: 7, con: 8, wis: 6, cha: 8 },
        damageResistances: ["cold; bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["poisoned"],
        senses: ["truesight 120 ft."],
        languages: "Infernal, telepathy 120 ft.",
        cr: 12,
        environment: ["nine hells"],
        role: "skirmisher",
        tags: ["devil", "fiend"],
        traits: [
            { name: "Hellish Weapons", description: "The erinyes's weapon attacks are magical and deal an extra 13 (3d8) poison damage on a hit (included in the attacks)." },
            { name: "Magic Resistance", description: "The erinyes has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack", description: "The erinyes makes three attacks." },
            { name: "Longsword", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 8 (1d8+4) slashing damage, or 9 (1d10+4) slashing damage if used with two hands, plus 13 (3d8) poison damage." },
            { name: "Longbow", description: "Ranged Weapon Attack: +7 to hit, range 150/600 ft., one target. Hit: 7 (1d8+3) piercing damage plus 13 (3d8) poison damage, and the target must succeed on a DC 14 Constitution saving throw or be poisoned. The poison lasts until it is removed by the lesser restoration spell or similar magic." }
        ],
        reactions: [
            { name: "Parry", description: "The erinyes adds 4 to its AC against one melee attack that would hit it. To do so, the erinyes must see the attacker and be wielding a melee weapon." }
        ]
    },

    // ===== Greater Demons =====
    "balor": {
        name: "Balor",
        source: "MM",
        size: "huge",
        type: "fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 19,
        acType: "natural armor",
        hp: 262,
        hitDice: "21d12+126",
        speed: { walk: 40, fly: 80 },
        abilityScores: { str: 26, dex: 15, con: 22, int: 20, wis: 16, cha: 22 },
        savingThrows: { str: 14, con: 12, wis: 9, cha: 12 },
        damageResistances: ["cold", "lightning; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["poisoned"],
        senses: ["truesight 120 ft."],
        languages: "Abyssal, telepathy 120 ft.",
        cr: 19,
        environment: ["abyss"],
        role: "brute",
        tags: ["demon", "fiend"],
        traits: [
            { name: "Death Throes", description: "When the balor dies, it explodes, and each creature within 30 feet of it must make a DC 20 Dexterity saving throw, taking 70 (20d6) fire damage on a failed save, or half as much damage on a successful one." },
            { name: "Fire Aura", description: "At the start of each of the balor's turns, each creature within 5 feet of it takes 10 (3d6) fire damage, and flammable objects in the aura that aren't being worn or carried ignite." },
            { name: "Magic Resistance", description: "The balor has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "The balor's weapon attacks are magical." }
        ],
        actions: [
            { name: "Multiattack", description: "The balor makes two attacks: one with its longsword and one with its whip." },
            { name: "Longsword", description: "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 21 (3d8+8) slashing damage plus 13 (3d8) lightning damage. If the balor scores a critical hit, it rolls damage dice three times, instead of twice." },
            { name: "Whip", description: "Melee Weapon Attack: +14 to hit, reach 30 ft., one target. Hit: 15 (2d6+8) slashing damage plus 10 (3d6) fire damage, and the target must succeed on a DC 20 Strength saving throw or be pulled up to 25 feet toward the balor." },
            { name: "Teleport", description: "The balor magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see." }
        ]
    },
    "marilith": {
        name: "Marilith",
        source: "MM",
        size: "large",
        type: "fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 18,
        acType: "natural armor",
        hp: 189,
        hitDice: "18d10+90",
        speed: { walk: 40 },
        abilityScores: { str: 18, dex: 20, con: 20, int: 18, wis: 16, cha: 20 },
        savingThrows: { str: 9, con: 10, wis: 8, cha: 10 },
        damageResistances: ["cold", "fire", "lightning; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["truesight 120 ft."],
        languages: "Abyssal, telepathy 120 ft.",
        cr: 16,
        environment: ["abyss"],
        role: "skirmisher",
        tags: ["demon", "fiend"],
        traits: [
            { name: "Magic Resistance", description: "The marilith has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "The marilith's weapon attacks are magical." },
            { name: "Reactive", description: "The marilith can take one reaction on every turn in combat." }
        ],
        actions: [
            { name: "Multiattack", description: "The marilith makes seven attacks: six with its longswords and one with its tail." },
            { name: "Longsword", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 13 (2d8+4) slashing damage." },
            { name: "Tail", description: "Melee Weapon Attack: +9 to hit, reach 10 ft., one creature. Hit: 15 (2d10+4) bludgeoning damage. If the target is Medium or smaller, it is grappled (escape DC 19). Until this grapple ends, the target is restrained, the marilith can automatically hit the target with its tail, and the marilith can't make tail attacks against other targets." },
            { name: "Teleport", description: "The marilith magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see." }
        ],
        reactions: [
            { name: "Parry", description: "The marilith adds 5 to its AC against one melee attack that would hit it. To do so, the marilith must see the attacker and be wielding a melee weapon." }
        ]
    },
    "goristro": {
        name: "Goristro",
        source: "MM",
        size: "huge",
        type: "fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 19,
        acType: "natural armor",
        hp: 310,
        hitDice: "23d12+161",
        speed: { walk: 40 },
        abilityScores: { str: 25, dex: 11, con: 25, int: 6, wis: 13, cha: 14 },
        savingThrows: { str: 13, dex: 6, con: 13, wis: 7 },
        skills: { perception: 7 },
        damageResistances: ["cold", "fire", "lightning; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 120 ft."],
        languages: "Abyssal",
        cr: 17,
        environment: ["abyss"],
        role: "brute",
        tags: ["demon", "fiend", "minotaur"],
        traits: [
            { name: "Charge", description: "If the goristro moves at least 15 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 38 (7d10) piercing damage. If the target is a creature, it must succeed on a DC 21 Strength saving throw or be pushed up to 20 feet away and knocked prone." },
            { name: "Labyrinthine Recall", description: "The goristro can perfectly recall any path it has traveled." },
            { name: "Magic Resistance", description: "The goristro has advantage on saving throws against spells and other magical effects." },
            { name: "Siege Monster", description: "The goristro deals double damage to objects and structures." }
        ],
        actions: [
            { name: "Multiattack", description: "The goristro makes three attacks: two with its fists and one with its hoof." },
            { name: "Fist", description: "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 20 (3d8+7) bludgeoning damage." },
            { name: "Hoof", description: "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 23 (3d10+7) bludgeoning damage. If the target is a creature, it must succeed on a DC 21 Strength saving throw or be knocked prone." },
            { name: "Gore", description: "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 45 (7d10+7) piercing damage." }
        ]
    },
    "nalfeshnee": {
        name: "Nalfeshnee",
        source: "MM",
        size: "large",
        type: "fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 18,
        acType: "natural armor",
        hp: 184,
        hitDice: "16d10+96",
        speed: { walk: 20, fly: 30 },
        abilityScores: { str: 21, dex: 10, con: 22, int: 19, wis: 12, cha: 15 },
        savingThrows: { con: 11, int: 9, wis: 6, cha: 7 },
        damageResistances: ["cold", "fire", "lightning; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["truesight 120 ft."],
        languages: "Abyssal, telepathy 120 ft.",
        cr: 13,
        environment: ["abyss"],
        role: "controller",
        tags: ["demon", "fiend"],
        traits: [
            { name: "Magic Resistance", description: "The nalfeshnee has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack", description: "The nalfeshnee uses Horror Nimbus if it can. It then makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 32 (5d10+5) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 15 (3d6+5) slashing damage." },
            { name: "Horror Nimbus (Recharge 5-6)", description: "The nalfeshnee magically emits scintillating, multicolored light. Each creature within 15 feet of the nalfeshnee that can see the light must succeed on a DC 15 Wisdom saving throw or be frightened for 1 minute." },
            { name: "Teleport", description: "The nalfeshnee magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see." }
        ]
    },
    "glabrezu": {
        name: "Glabrezu",
        source: "MM",
        size: "large",
        type: "fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 17,
        acType: "natural armor",
        hp: 157,
        hitDice: "15d10+75",
        speed: { walk: 40 },
        abilityScores: { str: 20, dex: 15, con: 21, int: 19, wis: 17, cha: 16 },
        savingThrows: { str: 9, con: 9, wis: 7, cha: 7 },
        damageResistances: ["cold", "fire", "lightning; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["truesight 120 ft."],
        languages: "Abyssal, telepathy 120 ft.",
        cr: 9,
        environment: ["abyss"],
        role: "controller",
        tags: ["demon", "fiend", "spellcaster"],
        traits: [
            { name: "Magic Resistance", description: "The glabrezu has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack", description: "The glabrezu makes four attacks: two with its pincers and two with its fists. Alternatively, it makes two attacks with its pincers and casts one spell." },
            { name: "Pincer", description: "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 16 (2d10+5) bludgeoning damage. If the target is a Medium or smaller creature, it is grappled (escape DC 15). The glabrezu has two pincers, each of which can grapple only one target." },
            { name: "Fist", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 7 (2d4+2) bludgeoning damage." }
        ],
        spellcasting: {
            innate: true,
            ability: "int",
            dc: 16,
            spells: {
                atWill: ["darkness", "detect magic", "dispel magic"],
                "1/day each": ["confusion", "fly", "power word stun"]
            }
        }
    },

    // ===== Lesser Devils =====
    "chain-devil": {
        name: "Chain Devil",
        source: "MM",
        size: "medium",
        type: "fiend",
        subtype: "devil",
        alignment: "lawful evil",
        ac: 16,
        acType: "natural armor",
        hp: 85,
        hitDice: "10d8+40",
        speed: { walk: 30 },
        abilityScores: { str: 18, dex: 15, con: 18, int: 11, wis: 12, cha: 14 },
        savingThrows: { con: 7, wis: 4, cha: 5 },
        damageResistances: ["cold; bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 120 ft."],
        languages: "Infernal, telepathy 120 ft.",
        cr: 8,
        environment: ["nine hells"],
        role: "controller",
        tags: ["devil", "fiend"],
        traits: [
            { name: "Devil's Sight", description: "Magical darkness doesn't impede the devil's darkvision." },
            { name: "Magic Resistance", description: "The devil has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack", description: "The devil makes two attacks with its chains." },
            { name: "Chain", description: "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 11 (2d6+4) slashing damage. The target is grappled (escape DC 14) if the devil isn't already grappling a creature. Until this grapple ends, the target is restrained and takes 7 (2d6) piercing damage at the start of each of its turns." },
            { name: "Animate Chains (Recharges after a Short or Long Rest)", description: "Up to four chains the devil can see within 60 feet of it magically sprout razor-edged barbs and animate under the devil's control, provided that the chains aren't being worn or carried." }
        ],
        reactions: [
            { name: "Unnerving Mask", description: "When a creature the devil can see starts its turn within 30 feet of the devil, the devil can create the illusion that it looks like one of the creature's departed loved ones or bitter enemies. If the creature can see the devil, it must succeed on a DC 14 Wisdom saving throw or be frightened until the end of its turn." }
        ]
    },
    "barbed-devil": {
        name: "Barbed Devil",
        source: "MM",
        size: "medium",
        type: "fiend",
        subtype: "devil",
        alignment: "lawful evil",
        ac: 15,
        acType: "natural armor",
        hp: 110,
        hitDice: "13d8+52",
        speed: { walk: 30 },
        abilityScores: { str: 16, dex: 17, con: 18, int: 12, wis: 14, cha: 14 },
        savingThrows: { str: 6, con: 7, wis: 5, cha: 5 },
        skills: { deception: 5, insight: 5, perception: 8 },
        damageResistances: ["cold; bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 120 ft."],
        languages: "Infernal, telepathy 120 ft.",
        cr: 5,
        environment: ["nine hells"],
        role: "soldier",
        tags: ["devil", "fiend"],
        traits: [
            { name: "Barbed Hide", description: "At the start of each of its turns, the barbed devil deals 5 (1d10) piercing damage to any creature grappling it." },
            { name: "Devil's Sight", description: "Magical darkness doesn't impede the devil's darkvision." },
            { name: "Magic Resistance", description: "The devil has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack", description: "The devil makes three melee attacks: one with its tail and two with its claws. Alternatively, it can use Hurl Flame twice." },
            { name: "Claw", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6+3) piercing damage." },
            { name: "Tail", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6+3) piercing damage." },
            { name: "Hurl Flame", description: "Ranged Spell Attack: +5 to hit, range 150 ft., one target. Hit: 10 (3d6) fire damage. If the target is a flammable object that isn't being worn or carried, it also catches fire." }
        ]
    },
    "bearded-devil": {
        name: "Bearded Devil",
        source: "MM",
        size: "medium",
        type: "fiend",
        subtype: "devil",
        alignment: "lawful evil",
        ac: 13,
        acType: "natural armor",
        hp: 52,
        hitDice: "8d8+16",
        speed: { walk: 30 },
        abilityScores: { str: 16, dex: 15, con: 15, int: 9, wis: 11, cha: 11 },
        savingThrows: { str: 5, con: 4, wis: 2 },
        damageResistances: ["cold; bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 120 ft."],
        languages: "Infernal, telepathy 120 ft.",
        cr: 3,
        environment: ["nine hells"],
        role: "soldier",
        tags: ["devil", "fiend"],
        traits: [
            { name: "Devil's Sight", description: "Magical darkness doesn't impede the devil's darkvision." },
            { name: "Magic Resistance", description: "The devil has advantage on saving throws against spells and other magical effects." },
            { name: "Steadfast", description: "The devil can't be frightened while it can see an allied creature within 30 feet of it." }
        ],
        actions: [
            { name: "Multiattack", description: "The devil makes two attacks: one with its beard and one with its glaive." },
            { name: "Beard", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 6 (1d8+2) piercing damage, and the target must succeed on a DC 12 Constitution saving throw or be poisoned for 1 minute." },
            { name: "Glaive", description: "Melee Weapon Attack: +5 to hit, reach 10 ft., one target. Hit: 8 (1d10+3) slashing damage. If the target is a creature other than an undead or a construct, it must succeed on a DC 12 Constitution saving throw or lose 5 (1d10) hit points at the start of each of its turns due to an infernal wound." }
        ]
    }
};
