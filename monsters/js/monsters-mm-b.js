// D&D 5E Monster Manual - Monsters B
// Source: Monster Manual (MM)

const monstersMM_B = {
    // ===== B =====
    "baboon": {
        name: "Baboon",
        source: "MM",
        size: "small",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        hp: 3,
        hitDice: "1d6",
        speed: { walk: "30 ft.", climb: "30 ft." },
        abilityScores: { str: 8, dex: 14, con: 11, int: 4, wis: 12, cha: 6 },
        senses: ["passive Perception 11"],
        languages: "—",
        cr: 0,
        traits: [
            { name: "Pack Tactics", description: "The baboon has advantage on an attack roll against a creature if at least one of the baboon's allies is within 5 feet of the creature and the ally isn't incapacitated." }
        ],
        actions: [
            { name: "Bite", type: "melee", attackBonus: 1, reach: 5, damage: "1d4-1 piercing" }
        ]
    },
    "badger": {
        name: "Badger",
        source: "MM",
        size: "tiny",
        type: "beast",
        alignment: "unaligned",
        ac: 10,
        hp: 3,
        hitDice: "1d4+1",
        speed: { walk: "20 ft.", burrow: "5 ft." },
        abilityScores: { str: 4, dex: 11, con: 12, int: 2, wis: 12, cha: 5 },
        senses: ["darkvision 30 ft.", "passive Perception 11"],
        languages: "—",
        cr: 0,
        traits: [
            { name: "Keen Smell", description: "The badger has advantage on Wisdom (Perception) checks that rely on smell." }
        ],
        actions: [
            { name: "Bite", type: "melee", attackBonus: 2, reach: 5, damage: "1 piercing" }
        ]
    },
    "balor": {
        name: "Balor",
        source: "MM",
        size: "huge",
        type: "fiend",
        tags: ["demon"],
        alignment: "chaotic evil",
        ac: 19,
        acType: "natural armor",
        hp: 262,
        hitDice: "21d12+126",
        speed: { walk: "40 ft.", fly: "80 ft." },
        abilityScores: { str: 26, dex: 15, con: 22, int: 20, wis: 16, cha: 22 },
        savingThrows: { str: 14, con: 12, wis: 9, cha: 12 },
        damageResistances: ["cold", "lightning", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["poisoned"],
        senses: ["truesight 120 ft.", "passive Perception 13"],
        languages: "Abyssal, telepathy 120 ft.",
        cr: 19,
        traits: [
            { name: "Death Throes", description: "When the balor dies, it explodes, and each creature within 30 feet of it must make a DC 20 Dexterity saving throw, taking 70 (20d6) fire damage on a failed save, or half as much damage on a successful one. The explosion ignites flammable objects in that area that aren't being worn or carried, and it destroys the balor's weapons." },
            { name: "Fire Aura", description: "At the start of each of the balor's turns, each creature within 5 feet of it takes 10 (3d6) fire damage, and flammable objects in the aura that aren't being worn or carried ignite. A creature that touches the balor or hits it with a melee attack while within 5 feet of it takes 10 (3d6) fire damage." },
            { name: "Magic Resistance", description: "The balor has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "The balor's weapon attacks are magical." }
        ],
        actions: [
            { name: "Multiattack", description: "The balor makes two attacks: one with its longsword and one with its whip." },
            { name: "Longsword", type: "melee", attackBonus: 14, reach: 10, damage: "3d8+8 slashing plus 3d8 lightning" },
            { name: "Whip", type: "melee", attackBonus: 14, reach: 30, damage: "2d6+8 slashing plus 3d6 fire", additionalText: "The target must succeed on a DC 20 Strength saving throw or be pulled up to 25 feet toward the balor." },
            { name: "Teleport", description: "The balor magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see." }
        ]
    },
    "bandit": {
        name: "Bandit",
        source: "MM",
        size: "medium",
        type: "humanoid",
        tags: ["any race"],
        alignment: "any non-lawful alignment",
        ac: 12,
        acType: "leather armor",
        hp: 11,
        hitDice: "2d8+2",
        speed: { walk: "30 ft." },
        abilityScores: { str: 11, dex: 12, con: 12, int: 10, wis: 10, cha: 10 },
        senses: ["passive Perception 10"],
        languages: "any one language (usually Common)",
        cr: 0.125,
        actions: [
            { name: "Scimitar", type: "melee", attackBonus: 3, reach: 5, damage: "1d6+1 slashing" },
            { name: "Light Crossbow", type: "ranged", attackBonus: 3, range: "80/320 ft.", damage: "1d8+1 piercing" }
        ]
    },
    "bandit-captain": {
        name: "Bandit Captain",
        source: "MM",
        size: "medium",
        type: "humanoid",
        tags: ["any race"],
        alignment: "any non-lawful alignment",
        ac: 15,
        acType: "studded leather",
        hp: 65,
        hitDice: "10d8+20",
        speed: { walk: "30 ft." },
        abilityScores: { str: 15, dex: 16, con: 14, int: 14, wis: 11, cha: 14 },
        savingThrows: { str: 4, dex: 5, wis: 2 },
        skills: { athletics: 4, deception: 4 },
        senses: ["passive Perception 10"],
        languages: "any two languages",
        cr: 2,
        actions: [
            { name: "Multiattack", description: "The captain makes three melee attacks: two with its scimitar and one with its dagger. Or the captain makes two ranged attacks with its daggers." },
            { name: "Scimitar", type: "melee", attackBonus: 5, reach: 5, damage: "1d6+3 slashing" },
            { name: "Dagger", type: "melee", attackBonus: 5, reach: 5, damage: "1d4+3 piercing" },
            { name: "Dagger (Ranged)", type: "ranged", attackBonus: 5, range: "20/60 ft.", damage: "1d4+3 piercing" }
        ],
        reactions: [
            { name: "Parry", description: "The captain adds 2 to its AC against one melee attack that would hit it. To do so, the captain must see the attacker and be wielding a melee weapon." }
        ]
    },
    "banshee": {
        name: "Banshee",
        source: "MM",
        size: "medium",
        type: "undead",
        alignment: "chaotic evil",
        ac: 12,
        hp: 58,
        hitDice: "13d8",
        speed: { walk: "0 ft.", fly: "40 ft. (hover)" },
        abilityScores: { str: 1, dex: 14, con: 10, int: 12, wis: 11, cha: 17 },
        savingThrows: { wis: 2, cha: 5 },
        damageResistances: ["acid", "fire", "lightning", "thunder", "bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["cold", "necrotic", "poison"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained"],
        senses: ["darkvision 60 ft.", "passive Perception 10"],
        languages: "Common, Elvish",
        cr: 4,
        traits: [
            { name: "Detect Life", description: "The banshee can magically sense the presence of living creatures up to 5 miles away that aren't undead or constructs. She knows the general direction they're in but not their exact locations." },
            { name: "Incorporeal Movement", description: "The banshee can move through other creatures and objects as if they were difficult terrain. She takes 5 (1d10) force damage if she ends her turn inside an object." }
        ],
        actions: [
            { name: "Corrupting Touch", type: "melee", attackBonus: 4, reach: 5, damage: "3d6+2 necrotic" },
            { name: "Horrifying Visage", description: "Each non-undead creature within 60 feet of the banshee that can see her must succeed on a DC 13 Wisdom saving throw or be frightened for 1 minute. A frightened target can repeat the saving throw at the end of each of its turns, with disadvantage if the banshee is within line of sight, ending the effect on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to the banshee's Horrifying Visage for the next 24 hours." },
            { name: "Wail (1/Day)", description: "The banshee releases a mournful wail, provided that she isn't in sunlight. This wail has no effect on constructs and undead. All other creatures within 30 feet of her that can hear her must make a DC 13 Constitution saving throw. On a failure, a creature drops to 0 hit points. On a success, a creature takes 10 (3d6) psychic damage." }
        ]
    },
    "barbed-devil": {
        name: "Barbed Devil",
        source: "MM",
        size: "medium",
        type: "fiend",
        tags: ["devil"],
        alignment: "lawful evil",
        ac: 15,
        acType: "natural armor",
        hp: 110,
        hitDice: "13d8+52",
        speed: { walk: "30 ft." },
        abilityScores: { str: 16, dex: 17, con: 18, int: 12, wis: 14, cha: 14 },
        savingThrows: { str: 6, con: 7, wis: 5, cha: 5 },
        skills: { deception: 5, insight: 5, perception: 8 },
        damageResistances: ["cold", "bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 120 ft.", "passive Perception 18"],
        languages: "Infernal, telepathy 120 ft.",
        cr: 5,
        traits: [
            { name: "Barbed Hide", description: "At the start of each of its turns, the barbed devil deals 5 (1d10) piercing damage to any creature grappling it." },
            { name: "Devil's Sight", description: "Magical darkness doesn't impede the devil's darkvision." },
            { name: "Magic Resistance", description: "The devil has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack", description: "The devil makes three melee attacks: one with its tail and two with its claws. Alternatively, it can use Hurl Flame twice." },
            { name: "Claw", type: "melee", attackBonus: 6, reach: 5, damage: "1d6+3 piercing" },
            { name: "Tail", type: "melee", attackBonus: 6, reach: 5, damage: "2d6+3 piercing" },
            { name: "Hurl Flame", type: "ranged", attackBonus: 5, range: "150 ft.", damage: "3d6 fire", additionalText: "If the target is a flammable object that isn't being worn or carried, it also catches fire." }
        ]
    },
    "basilisk": {
        name: "Basilisk",
        source: "MM",
        size: "medium",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 15,
        acType: "natural armor",
        hp: 52,
        hitDice: "8d8+16",
        speed: { walk: "20 ft." },
        abilityScores: { str: 16, dex: 8, con: 15, int: 2, wis: 8, cha: 7 },
        senses: ["darkvision 60 ft.", "passive Perception 9"],
        languages: "—",
        cr: 3,
        traits: [
            { name: "Petrifying Gaze", description: "If a creature starts its turn within 30 feet of the basilisk and the two of them can see each other, the basilisk can force the creature to make a DC 12 Constitution saving throw if the basilisk isn't incapacitated. On a failed save, the creature magically begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified until freed by the greater restoration spell or other magic.\n\nA creature that isn't surprised can avert its eyes to avoid the saving throw at the start of its turn. If it does so, it can't see the basilisk until the start of its next turn, when it can avert its eyes again. If it looks at the basilisk in the meantime, it must immediately make the save.\n\nIf the basilisk sees its reflection within 30 feet of it in bright light, it mistakes itself for a rival and targets itself with its gaze." }
        ],
        actions: [
            { name: "Bite", type: "melee", attackBonus: 5, reach: 5, damage: "2d6+3 piercing plus 2d6 poison" }
        ]
    },
    "bat": {
        name: "Bat",
        source: "MM",
        size: "tiny",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        hp: 1,
        hitDice: "1d4-1",
        speed: { walk: "5 ft.", fly: "30 ft." },
        abilityScores: { str: 2, dex: 15, con: 8, int: 2, wis: 12, cha: 4 },
        senses: ["blindsight 60 ft.", "passive Perception 11"],
        languages: "—",
        cr: 0,
        traits: [
            { name: "Echolocation", description: "The bat can't use its blindsight while deafened." },
            { name: "Keen Hearing", description: "The bat has advantage on Wisdom (Perception) checks that rely on hearing." }
        ],
        actions: [
            { name: "Bite", type: "melee", attackBonus: 0, reach: 5, damage: "1 piercing" }
        ]
    },
    "bearded-devil": {
        name: "Bearded Devil",
        source: "MM",
        size: "medium",
        type: "fiend",
        tags: ["devil"],
        alignment: "lawful evil",
        ac: 13,
        acType: "natural armor",
        hp: 52,
        hitDice: "8d8+16",
        speed: { walk: "30 ft." },
        abilityScores: { str: 16, dex: 15, con: 15, int: 9, wis: 11, cha: 11 },
        savingThrows: { str: 5, con: 4, wis: 2 },
        damageResistances: ["cold", "bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 120 ft.", "passive Perception 10"],
        languages: "Infernal, telepathy 120 ft.",
        cr: 3,
        traits: [
            { name: "Devil's Sight", description: "Magical darkness doesn't impede the devil's darkvision." },
            { name: "Magic Resistance", description: "The devil has advantage on saving throws against spells and other magical effects." },
            { name: "Steadfast", description: "The devil can't be frightened while it can see an allied creature within 30 feet of it." }
        ],
        actions: [
            { name: "Multiattack", description: "The devil makes two attacks: one with its beard and one with its glaive." },
            { name: "Beard", type: "melee", attackBonus: 5, reach: 5, damage: "1d8+2 piercing", additionalText: "The target must succeed on a DC 12 Constitution saving throw or be poisoned for 1 minute. While poisoned in this way, the target can't regain hit points. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." },
            { name: "Glaive", type: "melee", attackBonus: 5, reach: 10, damage: "1d10+3 slashing", additionalText: "If the target is a creature other than an undead or a construct, it must succeed on a DC 12 Constitution saving throw or lose 5 (1d10) hit points at the start of each of its turns due to an infernal wound. Each time the devil hits the wounded target with this attack, the damage dealt by the wound increases by 5 (1d10). Any creature can take an action to stanch the wound with a successful DC 12 Wisdom (Medicine) check. The wound also closes if the target receives magical healing." }
        ]
    },
    "behir": {
        name: "Behir",
        source: "MM",
        size: "huge",
        type: "monstrosity",
        alignment: "neutral evil",
        ac: 17,
        acType: "natural armor",
        hp: 168,
        hitDice: "16d12+64",
        speed: { walk: "50 ft.", climb: "40 ft." },
        abilityScores: { str: 23, dex: 16, con: 18, int: 7, wis: 14, cha: 12 },
        skills: { perception: 6, stealth: 7 },
        damageImmunities: ["lightning"],
        senses: ["darkvision 90 ft.", "passive Perception 16"],
        languages: "Draconic",
        cr: 11,
        actions: [
            { name: "Multiattack", description: "The behir makes two attacks: one with its bite and one to constrict." },
            { name: "Bite", type: "melee", attackBonus: 10, reach: 10, damage: "3d10+6 piercing" },
            { name: "Constrict", type: "melee", attackBonus: 10, reach: 5, damage: "2d10+6 bludgeoning plus 2d10 slashing", additionalText: "The target is grappled (escape DC 16) if the behir isn't already constricting a creature, and the target is restrained until this grapple ends." },
            { name: "Lightning Breath (Recharge 5-6)", description: "The behir exhales a line of lightning that is 20 feet long and 5 feet wide. Each creature in that line must make a DC 16 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one." },
            { name: "Swallow", description: "The behir makes one bite attack against a Medium or smaller target it is grappling. If the attack hits, the target is also swallowed, and the grapple ends. While swallowed, the target is blinded and restrained, it has total cover against attacks and other effects outside the behir, and it takes 21 (6d6) acid damage at the start of each of the behir's turns. A behir can have only one creature swallowed at a time.\n\nIf the behir takes 30 damage or more on a single turn from the swallowed creature, the behir must succeed on a DC 14 Constitution saving throw at the end of that turn or regurgitate the creature, which falls prone in a space within 10 feet of the behir. If the behir dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 15 feet of movement, exiting prone." }
        ]
    },
    "beholder": {
        name: "Beholder",
        source: "MM",
        size: "large",
        type: "aberration",
        alignment: "lawful evil",
        ac: 18,
        acType: "natural armor",
        hp: 180,
        hitDice: "19d10+76",
        speed: { walk: "0 ft.", fly: "20 ft. (hover)" },
        abilityScores: { str: 10, dex: 14, con: 18, int: 17, wis: 15, cha: 17 },
        savingThrows: { int: 8, wis: 7, cha: 8 },
        skills: { perception: 12 },
        conditionImmunities: ["prone"],
        senses: ["darkvision 120 ft.", "passive Perception 22"],
        languages: "Deep Speech, Undercommon",
        cr: 13,
        traits: [
            { name: "Antimagic Cone", description: "The beholder's central eye creates an area of antimagic, as in the antimagic field spell, in a 150-foot cone. At the start of each of its turns, the beholder decides which way the cone faces and whether the cone is active. The area works against the beholder's own eye rays." }
        ],
        actions: [
            { name: "Bite", type: "melee", attackBonus: 5, reach: 5, damage: "4d6 piercing" },
            { name: "Eye Rays", description: "The beholder shoots three of the following magical eye rays at random (reroll duplicates), choosing one to three targets it can see within 120 feet of it:\n\n1. Charm Ray. The targeted creature must succeed on a DC 16 Wisdom saving throw or be charmed by the beholder for 1 hour, or until the beholder harms the creature.\n\n2. Paralyzing Ray. The targeted creature must succeed on a DC 16 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.\n\n3. Fear Ray. The targeted creature must succeed on a DC 16 Wisdom saving throw or be frightened for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.\n\n4. Slowing Ray. The targeted creature must succeed on a DC 16 Dexterity saving throw. On a failed save, the target's speed is halved for 1 minute. In addition, the creature can't take reactions, and it can take either an action or a bonus action on its turn, not both. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.\n\n5. Enervation Ray. The targeted creature must make a DC 16 Constitution saving throw, taking 36 (8d8) necrotic damage on a failed save, or half as much damage on a successful one.\n\n6. Telekinetic Ray. If the target is a creature, it must succeed on a DC 16 Strength saving throw or the beholder moves it up to 30 feet in any direction. It is restrained by the ray's telekinetic grip until the start of the beholder's next turn or until the beholder is incapacitated.\n\nIf the target is an object weighing 300 pounds or less that isn't being worn or carried, it is moved up to 30 feet in any direction. The beholder can also exert fine control on objects with this ray, such as manipulating a simple tool or opening a door or a container.\n\n7. Sleep Ray. The targeted creature must succeed on a DC 16 Wisdom saving throw or fall asleep and remain unconscious for 1 minute. The target awakens if it takes damage or another creature takes an action to wake it. This ray has no effect on constructs and undead.\n\n8. Petrification Ray. The targeted creature must make a DC 16 Dexterity saving throw. On a failed save, the creature begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified until freed by the greater restoration spell or other magic.\n\n9. Disintegration Ray. If the target is a creature, it must succeed on a DC 16 Dexterity saving throw or take 45 (10d8) force damage. If this damage reduces the creature to 0 hit points, its body becomes a pile of fine gray dust.\n\nIf the target is a Large or smaller nonmagical object or creation of magical force, it is disintegrated without a saving throw. If the target is a Huge or larger object or creation of magical force, this ray disintegrates a 10-foot cube of it.\n\n10. Death Ray. The targeted creature must succeed on a DC 16 Dexterity saving throw or take 55 (10d10) necrotic damage. The target dies if the ray reduces it to 0 hit points." }
        ],
        legendaryActions: {
            count: 3,
            actions: [
                { name: "Eye Ray", cost: 1, description: "The beholder uses one random eye ray." }
            ]
        }
    },
    "berserker": {
        name: "Berserker",
        source: "MM",
        size: "medium",
        type: "humanoid",
        tags: ["any race"],
        alignment: "any chaotic alignment",
        ac: 13,
        acType: "hide armor",
        hp: 67,
        hitDice: "9d8+27",
        speed: { walk: "30 ft." },
        abilityScores: { str: 16, dex: 12, con: 17, int: 9, wis: 11, cha: 9 },
        senses: ["passive Perception 10"],
        languages: "any one language (usually Common)",
        cr: 2,
        traits: [
            { name: "Reckless", description: "At the start of its turn, the berserker can gain advantage on all melee weapon attack rolls during that turn, but attack rolls against it have advantage until the start of its next turn." }
        ],
        actions: [
            { name: "Greataxe", type: "melee", attackBonus: 5, reach: 5, damage: "1d12+3 slashing" }
        ]
    },
    "black-bear": {
        name: "Black Bear",
        source: "MM",
        size: "medium",
        type: "beast",
        alignment: "unaligned",
        ac: 11,
        acType: "natural armor",
        hp: 19,
        hitDice: "3d8+6",
        speed: { walk: "40 ft.", climb: "30 ft." },
        abilityScores: { str: 15, dex: 10, con: 14, int: 2, wis: 12, cha: 7 },
        skills: { perception: 3 },
        senses: ["passive Perception 13"],
        languages: "—",
        cr: 0.5,
        traits: [
            { name: "Keen Smell", description: "The bear has advantage on Wisdom (Perception) checks that rely on smell." }
        ],
        actions: [
            { name: "Multiattack", description: "The bear makes two attacks: one with its bite and one with its claws." },
            { name: "Bite", type: "melee", attackBonus: 4, reach: 5, damage: "1d6+2 piercing" },
            { name: "Claws", type: "melee", attackBonus: 4, reach: 5, damage: "2d4+2 slashing" }
        ]
    },
    "black-pudding": {
        name: "Black Pudding",
        source: "MM",
        size: "large",
        type: "ooze",
        alignment: "unaligned",
        ac: 7,
        hp: 85,
        hitDice: "10d10+30",
        speed: { walk: "20 ft.", climb: "20 ft." },
        abilityScores: { str: 16, dex: 5, con: 16, int: 1, wis: 6, cha: 1 },
        damageImmunities: ["acid", "cold", "lightning", "slashing"],
        conditionImmunities: ["blinded", "charmed", "deafened", "exhaustion", "frightened", "prone"],
        senses: ["blindsight 60 ft. (blind beyond this radius)", "passive Perception 8"],
        languages: "—",
        cr: 4,
        traits: [
            { name: "Amorphous", description: "The pudding can move through a space as narrow as 1 inch wide without squeezing." },
            { name: "Corrosive Form", description: "A creature that touches the pudding or hits it with a melee attack while within 5 feet of it takes 4 (1d8) acid damage. Any nonmagical weapon made of metal or wood that hits the pudding corrodes. After dealing damage, the weapon takes a permanent and cumulative -1 penalty to damage rolls. If its penalty drops to -5, the weapon is destroyed. Nonmagical ammunition made of metal or wood that hits the pudding is destroyed after dealing damage.\n\nThe pudding can eat through 2-inch-thick, nonmagical wood or metal in 1 round." },
            { name: "Spider Climb", description: "The pudding can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." }
        ],
        actions: [
            { name: "Pseudopod", type: "melee", attackBonus: 5, reach: 5, damage: "1d6+3 bludgeoning plus 4d8 acid", additionalText: "In addition, nonmagical armor worn by the target is partly dissolved and takes a permanent and cumulative -1 penalty to the AC it offers. The armor is destroyed if the penalty reduces its AC to 10." }
        ],
        reactions: [
            { name: "Split", description: "When a pudding that is Medium or larger is subjected to lightning or slashing damage, it splits into two new puddings if it has at least 10 hit points. Each new pudding has hit points equal to half the original pudding's, rounded down. New puddings are one size smaller than the original pudding." }
        ]
    },
    "blink-dog": {
        name: "Blink Dog",
        source: "MM",
        size: "medium",
        type: "fey",
        alignment: "lawful good",
        ac: 13,
        hp: 22,
        hitDice: "4d8+4",
        speed: { walk: "40 ft." },
        abilityScores: { str: 12, dex: 17, con: 12, int: 10, wis: 13, cha: 11 },
        skills: { perception: 3, stealth: 5 },
        senses: ["passive Perception 13"],
        languages: "Blink Dog, understands Sylvan but can't speak it",
        cr: 0.25,
        traits: [
            { name: "Keen Hearing and Smell", description: "The dog has advantage on Wisdom (Perception) checks that rely on hearing or smell." }
        ],
        actions: [
            { name: "Bite", type: "melee", attackBonus: 3, reach: 5, damage: "1d6+1 piercing" },
            { name: "Teleport (Recharge 4-6)", description: "The dog magically teleports, along with any equipment it is wearing or carrying, up to 40 feet to an unoccupied space it can see. Before or after teleporting, the dog can make one bite attack." }
        ]
    },
    "blood-hawk": {
        name: "Blood Hawk",
        source: "MM",
        size: "small",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        hp: 7,
        hitDice: "2d6",
        speed: { walk: "10 ft.", fly: "60 ft." },
        abilityScores: { str: 6, dex: 14, con: 10, int: 3, wis: 14, cha: 5 },
        skills: { perception: 4 },
        senses: ["passive Perception 14"],
        languages: "—",
        cr: 0.125,
        traits: [
            { name: "Keen Sight", description: "The hawk has advantage on Wisdom (Perception) checks that rely on sight." },
            { name: "Pack Tactics", description: "The hawk has advantage on an attack roll against a creature if at least one of the hawk's allies is within 5 feet of the creature and the ally isn't incapacitated." }
        ],
        actions: [
            { name: "Beak", type: "melee", attackBonus: 4, reach: 5, damage: "1d4+2 piercing" }
        ]
    },
    "boar": {
        name: "Boar",
        source: "MM",
        size: "medium",
        type: "beast",
        alignment: "unaligned",
        ac: 11,
        acType: "natural armor",
        hp: 11,
        hitDice: "2d8+2",
        speed: { walk: "40 ft." },
        abilityScores: { str: 13, dex: 11, con: 12, int: 2, wis: 9, cha: 5 },
        senses: ["passive Perception 9"],
        languages: "—",
        cr: 0.25,
        traits: [
            { name: "Charge", description: "If the boar moves at least 20 feet straight toward a target and then hits it with a tusk attack on the same turn, the target takes an extra 3 (1d6) slashing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone." },
            { name: "Relentless (Recharges after a Short or Long Rest)", description: "If the boar takes 7 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead." }
        ],
        actions: [
            { name: "Tusk", type: "melee", attackBonus: 3, reach: 5, damage: "1d6+1 slashing" }
        ]
    },
    "bone-devil": {
        name: "Bone Devil",
        source: "MM",
        size: "large",
        type: "fiend",
        tags: ["devil"],
        alignment: "lawful evil",
        ac: 19,
        acType: "natural armor",
        hp: 142,
        hitDice: "15d10+60",
        speed: { walk: "40 ft.", fly: "40 ft." },
        abilityScores: { str: 18, dex: 16, con: 18, int: 13, wis: 14, cha: 16 },
        savingThrows: { int: 5, wis: 6, cha: 7 },
        skills: { deception: 7, insight: 6 },
        damageResistances: ["cold", "bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 120 ft.", "passive Perception 12"],
        languages: "Infernal, telepathy 120 ft.",
        cr: 9,
        traits: [
            { name: "Devil's Sight", description: "Magical darkness doesn't impede the devil's darkvision." },
            { name: "Magic Resistance", description: "The devil has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack", description: "The devil makes three attacks: two with its claws and one with its sting." },
            { name: "Claw", type: "melee", attackBonus: 8, reach: 10, damage: "1d8+4 slashing" },
            { name: "Sting", type: "melee", attackBonus: 8, reach: 10, damage: "2d8+4 piercing plus 5d6 poison", additionalText: "The target must succeed on a DC 14 Constitution saving throw or become poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." }
        ]
    },
    "brown-bear": {
        name: "Brown Bear",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 11,
        acType: "natural armor",
        hp: 34,
        hitDice: "4d10+12",
        speed: { walk: "40 ft.", climb: "30 ft." },
        abilityScores: { str: 19, dex: 10, con: 16, int: 2, wis: 13, cha: 7 },
        skills: { perception: 3 },
        senses: ["passive Perception 13"],
        languages: "—",
        cr: 1,
        traits: [
            { name: "Keen Smell", description: "The bear has advantage on Wisdom (Perception) checks that rely on smell." }
        ],
        actions: [
            { name: "Multiattack", description: "The bear makes two attacks: one with its bite and one with its claws." },
            { name: "Bite", type: "melee", attackBonus: 6, reach: 5, damage: "1d8+4 piercing" },
            { name: "Claws", type: "melee", attackBonus: 6, reach: 5, damage: "2d6+4 slashing" }
        ]
    },
    "bugbear": {
        name: "Bugbear",
        source: "MM",
        size: "medium",
        type: "humanoid",
        tags: ["goblinoid"],
        alignment: "chaotic evil",
        ac: 16,
        acType: "hide armor, shield",
        hp: 27,
        hitDice: "5d8+5",
        speed: { walk: "30 ft." },
        abilityScores: { str: 15, dex: 14, con: 13, int: 8, wis: 11, cha: 9 },
        skills: { stealth: 6, survival: 2 },
        senses: ["darkvision 60 ft.", "passive Perception 10"],
        languages: "Common, Goblin",
        cr: 1,
        traits: [
            { name: "Brute", description: "A melee weapon deals one extra die of its damage when the bugbear hits with it (included in the attack)." },
            { name: "Surprise Attack", description: "If the bugbear surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 7 (2d6) damage from the attack." }
        ],
        actions: [
            { name: "Morningstar", type: "melee", attackBonus: 4, reach: 5, damage: "2d8+2 piercing" },
            { name: "Javelin", type: "melee", attackBonus: 4, reach: 5, damage: "2d6+2 piercing" },
            { name: "Javelin (Ranged)", type: "ranged", attackBonus: 4, range: "30/120 ft.", damage: "1d6+2 piercing" }
        ]
    },
    "bulette": {
        name: "Bulette",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 17,
        acType: "natural armor",
        hp: 94,
        hitDice: "9d10+45",
        speed: { walk: "40 ft.", burrow: "40 ft." },
        abilityScores: { str: 19, dex: 11, con: 21, int: 2, wis: 10, cha: 5 },
        skills: { perception: 6 },
        senses: ["darkvision 60 ft.", "tremorsense 60 ft.", "passive Perception 16"],
        languages: "—",
        cr: 5,
        traits: [
            { name: "Standing Leap", description: "The bulette's long jump is up to 30 feet and its high jump is up to 15 feet, with or without a running start." }
        ],
        actions: [
            { name: "Bite", type: "melee", attackBonus: 7, reach: 5, damage: "4d12+4 piercing" },
            { name: "Deadly Leap", description: "If the bulette jumps at least 15 feet as part of its movement, it can then use this action to land on its feet in a space that contains one or more other creatures. Each of those creatures must succeed on a DC 16 Strength or Dexterity saving throw (target's choice) or be knocked prone and take 14 (3d6+4) bludgeoning damage plus 14 (3d6+4) slashing damage. On a successful save, the creature takes only half the damage, isn't knocked prone, and is pushed 5 feet out of the bulette's space into an unoccupied space of the creature's choice. If no unoccupied space is within range, the creature instead falls prone in the bulette's space." }
        ]
    }
};

// Add to global monsters object
if (typeof allMonsters === 'undefined') {
    var allMonsters = {};
}
Object.assign(allMonsters, monstersMM_B);
