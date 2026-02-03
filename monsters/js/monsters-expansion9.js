// Expansion Pack 9 - More Comprehensive Coverage
// Filling gaps across all creature types

const MONSTERS_EXPANSION9 = {
    // ===== More Fiends =====
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
        tags: ["fiend", "devil"],
        traits: [
            { name: "Devil's Sight", description: "Magical darkness doesn't impede the devil's darkvision." },
            { name: "Magic Resistance", description: "The devil has advantage on saving throws against spells and other magical effects." },
            { name: "Steadfast", description: "The devil can't be frightened while it can see an allied creature within 30 feet of it." }
        ],
        actions: [
            { name: "Multiattack", description: "The devil makes two attacks: one with its beard and one with its glaive." },
            { name: "Beard", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 6 (1d8+2) piercing damage, and the target must succeed on a DC 12 Constitution saving throw or be poisoned for 1 minute. While poisoned in this way, the target can't regain hit points. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." },
            { name: "Glaive", description: "Melee Weapon Attack: +5 to hit, reach 10 ft., one target. Hit: 8 (1d10+3) slashing damage. If the target is a creature other than an undead or a construct, it must succeed on a DC 12 Constitution saving throw or lose 5 (1d10) hit points at the start of each of its turns due to an infernal wound. Each time the devil hits the wounded target with this attack, the damage dealt by the wound increases by 5 (1d10). Any creature can take an action to stanch the wound with a successful DC 12 Wisdom (Medicine) check. The wound also closes if the target receives magical healing." }
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
        tags: ["fiend", "devil"],
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
        tags: ["fiend", "devil"],
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
    "bone-devil": {
        name: "Bone Devil",
        source: "MM",
        size: "large",
        type: "fiend",
        subtype: "devil",
        alignment: "lawful evil",
        ac: 19,
        acType: "natural armor",
        hp: 142,
        hitDice: "15d10+60",
        speed: { walk: 40, fly: 40 },
        abilityScores: { str: 18, dex: 16, con: 18, int: 13, wis: 14, cha: 16 },
        savingThrows: { int: 5, wis: 6, cha: 7 },
        skills: { deception: 7, insight: 6 },
        damageResistances: ["cold; bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 120 ft."],
        languages: "Infernal, telepathy 120 ft.",
        cr: 9,
        environment: ["nine hells"],
        role: "skirmisher",
        tags: ["fiend", "devil"],
        traits: [
            { name: "Devil's Sight", description: "Magical darkness doesn't impede the devil's darkvision." },
            { name: "Magic Resistance", description: "The devil has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack", description: "The devil makes three attacks: two with its claws and one with its sting." },
            { name: "Claw", description: "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 8 (1d8+4) slashing damage." },
            { name: "Sting", description: "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 13 (2d8+4) piercing damage plus 17 (5d6) poison damage, and the target must succeed on a DC 14 Constitution saving throw or become poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." }
        ]
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
        tags: ["fiend", "devil"],
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
        environment: ["nine hells"],
        role: "soldier",
        tags: ["fiend", "devil", "cold"],
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
        tags: ["fiend", "devil"],
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

    // ===== More Demons =====
    "shadow-demon": {
        name: "Shadow Demon",
        source: "MM",
        size: "medium",
        type: "fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 13,
        hp: 66,
        hitDice: "12d8+12",
        speed: { walk: 30, fly: 30 },
        abilityScores: { str: 1, dex: 17, con: 12, int: 14, wis: 13, cha: 14 },
        savingThrows: { dex: 5, cha: 4 },
        skills: { stealth: 7 },
        damageVulnerabilities: ["radiant"],
        damageResistances: ["acid", "fire", "necrotic", "thunder; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["cold", "lightning", "poison"],
        conditionImmunities: ["exhaustion", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained"],
        senses: ["darkvision 120 ft."],
        languages: "Abyssal, telepathy 120 ft.",
        cr: 4,
        environment: ["abyss"],
        role: "lurker",
        tags: ["fiend", "demon"],
        traits: [
            { name: "Incorporeal Movement", description: "The demon can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object." },
            { name: "Light Sensitivity", description: "While in bright light, the demon has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." },
            { name: "Shadow Stealth", description: "While in dim light or darkness, the demon can take the Hide action as a bonus action." }
        ],
        actions: [
            { name: "Claws", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 10 (2d6+3) psychic damage or, if the demon had advantage on the attack roll, 17 (4d6+3) psychic damage." }
        ]
    },
    "barlgura": {
        name: "Barlgura",
        source: "MM",
        size: "large",
        type: "fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 15,
        acType: "natural armor",
        hp: 68,
        hitDice: "8d10+24",
        speed: { walk: 40, climb: 40 },
        abilityScores: { str: 18, dex: 15, con: 16, int: 7, wis: 14, cha: 9 },
        savingThrows: { dex: 5, con: 6 },
        skills: { perception: 5, stealth: 5 },
        damageResistances: ["cold", "fire", "lightning"],
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["blindsight 30 ft.", "darkvision 120 ft."],
        languages: "Abyssal, telepathy 120 ft.",
        cr: 5,
        environment: ["abyss"],
        role: "brute",
        tags: ["fiend", "demon"],
        traits: [
            { name: "Reckless", description: "At the start of its turn, the barlgura can gain advantage on all melee weapon attack rolls it makes during that turn, but attack rolls against it have advantage until the start of its next turn." },
            { name: "Running Leap", description: "The barlgura's long jump is up to 40 feet and its high jump is up to 20 feet when it has a running start." }
        ],
        actions: [
            { name: "Multiattack", description: "The barlgura makes three attacks: one with its bite and two with its fists." },
            { name: "Bite", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6+4) piercing damage." },
            { name: "Fist", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (1d10+4) bludgeoning damage." }
        ],
        spellcasting: {
            innate: true,
            ability: "wis",
            dc: 13,
            spells: {
                "1/day each": ["entangle", "phantasmal force"],
                "2/day each": ["disguise self", "invisibility (self only)"]
            }
        }
    },
    "chasme": {
        name: "Chasme",
        source: "MM",
        size: "large",
        type: "fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 15,
        acType: "natural armor",
        hp: 84,
        hitDice: "13d10+13",
        speed: { walk: 20, fly: 60 },
        abilityScores: { str: 15, dex: 15, con: 12, int: 11, wis: 14, cha: 10 },
        savingThrows: { dex: 5, wis: 5 },
        skills: { perception: 5 },
        damageResistances: ["cold", "fire", "lightning"],
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["blindsight 10 ft.", "darkvision 120 ft."],
        languages: "Abyssal, telepathy 120 ft.",
        cr: 6,
        environment: ["abyss"],
        role: "skirmisher",
        tags: ["fiend", "demon"],
        traits: [
            { name: "Drone", description: "The chasme produces a horrid droning sound to which demons are immune. Any other creature that starts its turn within 30 feet of the chasme must succeed on a DC 12 Constitution saving throw or fall unconscious for 10 minutes." },
            { name: "Magic Resistance", description: "The chasme has advantage on saving throws against spells and other magical effects." },
            { name: "Spider Climb", description: "The chasme can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." }
        ],
        actions: [
            { name: "Proboscis", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 16 (4d6+2) piercing damage plus 24 (7d6) necrotic damage, and the target's hit point maximum is reduced by an amount equal to the necrotic damage taken. If this effect reduces a creature's hit point maximum to 0, the creature dies. This reduction lasts until the creature finishes a long rest or until it is affected by a spell like greater restoration." }
        ]
    },
    "vrock": {
        name: "Vrock",
        source: "MM",
        size: "large",
        type: "fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 15,
        acType: "natural armor",
        hp: 104,
        hitDice: "11d10+44",
        speed: { walk: 40, fly: 60 },
        abilityScores: { str: 17, dex: 15, con: 18, int: 8, wis: 13, cha: 8 },
        savingThrows: { dex: 5, wis: 4, cha: 2 },
        damageResistances: ["cold", "fire", "lightning; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 120 ft."],
        languages: "Abyssal, telepathy 120 ft.",
        cr: 6,
        environment: ["abyss"],
        role: "skirmisher",
        tags: ["fiend", "demon"],
        traits: [
            { name: "Magic Resistance", description: "The vrock has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack", description: "The vrock makes two attacks: one with its beak and one with its talons." },
            { name: "Beak", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6+3) piercing damage." },
            { name: "Talons", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 14 (2d10+3) slashing damage." },
            { name: "Spores (Recharge 6)", description: "A 15-foot-radius cloud of toxic spores extends out from the vrock. The spores spread around corners. Each creature in that area must succeed on a DC 14 Constitution saving throw or become poisoned. While poisoned in this way, a target takes 5 (1d10) poison damage at the start of each of its turns." },
            { name: "Stunning Screech (1/Day)", description: "The vrock emits a horrific screech. Each creature within 20 feet of it that can hear it and that isn't a demon must succeed on a DC 14 Constitution saving throw or be stunned until the end of the vrock's next turn." }
        ]
    },
    "hezrou": {
        name: "Hezrou",
        source: "MM",
        size: "large",
        type: "fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 16,
        acType: "natural armor",
        hp: 136,
        hitDice: "13d10+65",
        speed: { walk: 30 },
        abilityScores: { str: 19, dex: 17, con: 20, int: 5, wis: 12, cha: 13 },
        savingThrows: { str: 7, con: 8, wis: 4 },
        damageResistances: ["cold", "fire", "lightning; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 120 ft."],
        languages: "Abyssal, telepathy 120 ft.",
        cr: 8,
        environment: ["abyss"],
        role: "brute",
        tags: ["fiend", "demon"],
        traits: [
            { name: "Magic Resistance", description: "The hezrou has advantage on saving throws against spells and other magical effects." },
            { name: "Stench", description: "Any creature that starts its turn within 10 feet of the hezrou must succeed on a DC 14 Constitution saving throw or be poisoned until the start of its next turn. On a successful saving throw, the creature is immune to the hezrou's stench for 24 hours." }
        ],
        actions: [
            { name: "Multiattack", description: "The hezrou makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 15 (2d10+4) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6+4) slashing damage." }
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
        role: "brute",
        tags: ["fiend", "demon"],
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
        role: "brute",
        tags: ["fiend", "demon"],
        traits: [
            { name: "Magic Resistance", description: "The nalfeshnee has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack", description: "The nalfeshnee uses Horror Nimbus if it can. It then makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 32 (5d10+5) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 15 (3d6+5) slashing damage." },
            { name: "Horror Nimbus (Recharge 5-6)", description: "The nalfeshnee magically emits scintillating, multicolored light. Each creature within 15 feet of the nalfeshnee that can see the light must succeed on a DC 15 Wisdom saving throw or be frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." },
            { name: "Teleport", description: "The nalfeshnee magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see." }
        ]
    }
};
