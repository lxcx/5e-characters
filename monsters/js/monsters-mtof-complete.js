// Mordenkainen's Tome of Foes - Complete Collection
// Source: MToF (Mordenkainen's Tome of Foes)

const MONSTERS_MTOF_COMPLETE = {
    // ===== Demons =====
    "alkilith": {
        name: "Alkilith",
        source: "MToF",
        size: "medium",
        type: "fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 17,
        acType: "natural armor",
        hp: 157,
        hitDice: "15d8+90",
        speed: { walk: 40, climb: 40 },
        abilityScores: { str: 12, dex: 19, con: 22, int: 6, wis: 11, cha: 7 },
        savingThrows: { dex: 8, con: 10 },
        skills: { stealth: 8 },
        damageResistances: ["acid", "cold", "fire", "lightning; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["charmed", "frightened", "poisoned"],
        senses: ["darkvision 120 ft."],
        languages: "understands Abyssal but can't speak",
        cr: 11,
        traits: [
            { name: "Amorphous", description: "The alkilith can move through a space as narrow as 1 inch wide without squeezing." },
            { name: "False Appearance", description: "While the alkilith is motionless, it is indistinguishable from an ordinary slime or fungus." },
            { name: "Foment Madness", description: "Any creature that isn't a demon that starts its turn within 30 feet of the alkilith must succeed on a DC 18 Wisdom saving throw, or it hears a faint buzzing in its head for a moment and has disadvantage on its next attack roll, saving throw, or ability check." },
            { name: "Magic Resistance", description: "The alkilith has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack", description: "The alkilith makes three tentacle attacks." },
            { name: "Tentacle", description: "Melee Weapon Attack: +8 to hit, reach 15 ft., one target. Hit: 18 (4d6+4) acid damage." }
        ]
    },
    "armanite": {
        name: "Armanite",
        source: "MToF",
        size: "large",
        type: "fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 16,
        acType: "natural armor",
        hp: 84,
        hitDice: "8d10+40",
        speed: { walk: 60 },
        abilityScores: { str: 21, dex: 18, con: 21, int: 8, wis: 12, cha: 13 },
        damageResistances: ["cold", "fire", "lightning"],
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 120 ft."],
        languages: "Abyssal, telepathy 120 ft.",
        cr: 7,
        traits: [
            { name: "Magic Resistance", description: "The armanite has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "The armanite's weapon attacks are magical." }
        ],
        actions: [
            { name: "Multiattack", description: "The armanite makes three attacks: one with its hooves, one with its claws, and one with its serrated tail." },
            { name: "Hooves", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 12 (2d6+5) bludgeoning damage." },
            { name: "Claws", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 10 (2d4+5) slashing damage." },
            { name: "Serrated Tail", description: "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 16 (2d10+5) slashing damage." },
            { name: "Lightning Lance (Recharge 5-6)", description: "The armanite looses a bolt of lightning in a line 60 feet long and 10 feet wide. Each creature in the line must make a DC 15 Dexterity saving throw, taking 27 (6d8) lightning damage on a failed save, or half as much damage on a successful one." }
        ]
    },
    "babau": {
        name: "Babau",
        source: "MToF",
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
        skills: { perception: 5, stealth: 7 },
        damageResistances: ["cold", "fire", "lightning; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 120 ft."],
        languages: "Abyssal",
        cr: 4,
        traits: [
            { name: "Innate Spellcasting", description: "The babau's innate spellcasting ability is Wisdom (spell save DC 13). The babau can innately cast the following spells, requiring no material components: At will: darkness, dispel magic, fear, heat metal, levitate." }
        ],
        actions: [
            { name: "Multiattack", description: "The babau makes two melee attacks. It can also use Weakening Gaze before or after making these attacks." },
            { name: "Claw", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8+4) slashing damage." },
            { name: "Spear", description: "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 7 (1d6+4) piercing damage, or 8 (1d8+4) piercing damage when used with two hands to make a melee attack." },
            { name: "Weakening Gaze", description: "The babau targets one creature that it can see within 20 feet of it. The target must make a DC 13 Constitution saving throw. On a failed save, the target deals only half damage with weapon attacks that use Strength for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." }
        ]
    },
    "dybbuk": {
        name: "Dybbuk",
        source: "MToF",
        size: "medium",
        type: "fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 14,
        hp: 37,
        hitDice: "5d8+15",
        speed: { walk: 0, fly: 40 },
        abilityScores: { str: 6, dex: 19, con: 16, int: 16, wis: 15, cha: 14 },
        skills: { deception: 6, intimidation: 4, perception: 4 },
        damageResistances: ["acid", "cold", "fire", "lightning", "thunder; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained"],
        senses: ["darkvision 120 ft."],
        languages: "Abyssal, Common, telepathy 120 ft.",
        cr: 4,
        traits: [
            { name: "Incorporeal Movement", description: "The dybbuk can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object." },
            { name: "Magic Resistance", description: "The dybbuk has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Tendril", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8+4) necrotic damage. If the target is a creature, its hit point maximum is also reduced by 3 (1d6). This reduction lasts until the target finishes a short or long rest. The target dies if this effect reduces its hit point maximum to 0." },
            { name: "Possess Corpse (Recharge 6)", description: "The dybbuk disappears into an intact corpse it can see within 5 feet of it. The corpse must be Large or smaller and be that of a beast or a humanoid. The dybbuk is now effectively the possessed creature." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 12,
            spells: {
                atWill: ["dimension door"],
                "3/day": ["fear", "phantasmal force"]
            }
        }
    },
    "maurezhi": {
        name: "Maurezhi",
        source: "MToF",
        size: "medium",
        type: "fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 15,
        acType: "natural armor",
        hp: 88,
        hitDice: "16d8+16",
        speed: { walk: 30 },
        abilityScores: { str: 14, dex: 17, con: 12, int: 11, wis: 12, cha: 15 },
        skills: { deception: 5 },
        damageResistances: ["cold", "fire", "lightning", "necrotic; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["charmed", "exhaustion", "poisoned"],
        senses: ["darkvision 120 ft."],
        languages: "Abyssal, Elvish, telepathy 120 ft.",
        cr: 7,
        traits: [
            { name: "Assume Form", description: "The maurezhi can assume the appearance of any Medium humanoid it has eaten. It remains in this form for 1d6 days, during which time the form gradually decays until, when the effect ends, the form sloughs from the demon's body." },
            { name: "Magic Resistance", description: "The maurezhi has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack", description: "The maurezhi makes two attacks: one with its bite and one with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 14 (2d10+3) piercing damage. If the target is a humanoid, its Charisma score is reduced by 1d4. This reduction lasts until the target finishes a short or long rest. The target dies if this reduces its Charisma to 0. It rises 24 hours later as a ghoul, unless the humanoid is restored to life or its body is destroyed." },
            { name: "Claws", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 12 (2d8+3) slashing damage. If the target is a creature other than an undead, it must succeed on a DC 12 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 13,
            spells: {
                atWill: ["darkness", "detect magic"],
                "1/day": ["fear", "raise dead"]
            }
        }
    },
    "molydeus": {
        name: "Molydeus",
        source: "MToF",
        size: "huge",
        type: "fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 19,
        acType: "natural armor",
        hp: 216,
        hitDice: "16d12+112",
        speed: { walk: 40 },
        abilityScores: { str: 28, dex: 22, con: 25, int: 21, wis: 24, cha: 24 },
        savingThrows: { str: 16, con: 14, wis: 14, cha: 14 },
        skills: { perception: 21 },
        damageResistances: ["cold", "fire", "lightning; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["blinded", "charmed", "deafened", "frightened", "poisoned", "stunned"],
        senses: ["truesight 120 ft."],
        languages: "Abyssal, telepathy 120 ft.",
        cr: 21,
        traits: [
            { name: "Legendary Resistance (3/Day)", description: "If the molydeus fails a saving throw, it can choose to succeed instead." },
            { name: "Magic Resistance", description: "The molydeus has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "The molydeus's weapon attacks are magical." }
        ],
        actions: [
            { name: "Multiattack", description: "The molydeus makes three attacks: one with its weapon, one with its wolf bite, and one with its snakebite." },
            { name: "Demonic Weapon", description: "Melee Weapon Attack: +16 to hit, reach 15 ft., one target. Hit: 35 (4d12+9) slashing damage. If the target has at least one head and the molydeus rolled a 20 on the attack roll, the target is decapitated and dies if it can't survive without that head. A target is immune to this effect if it takes none of the damage, has legendary actions, or is Huge or larger. Such a creature takes an extra 27 (6d8) slashing damage from the hit." },
            { name: "Wolf Bite", description: "Melee Weapon Attack: +16 to hit, reach 10 ft., one target. Hit: 16 (2d6+9) piercing damage." },
            { name: "Snakebite", description: "Melee Weapon Attack: +16 to hit, reach 15 ft., one creature. Hit: 12 (1d6+9) piercing damage, and the target must succeed on a DC 22 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target transforms into a manes if this reduces its hit point maximum to 0. This transformation can be ended only by a wish spell." }
        ],
        legendaryActions: {
            perRound: 3,
            actions: [
                { name: "Attack", description: "The molydeus makes one attack, either with its demonic weapon or with its snakebite." },
                { name: "Move", description: "The molydeus moves without provoking opportunity attacks." },
                { name: "Cast a Spell", description: "The molydeus casts one spell." }
            ]
        },
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 22,
            spells: {
                atWill: ["dispel magic", "polymorph", "telekinesis", "teleport"],
                "3/day": ["lightning bolt"],
                "1/day": ["imprisonment"]
            }
        }
    },
    "nabassu": {
        name: "Nabassu",
        source: "MToF",
        size: "medium",
        type: "fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 18,
        acType: "natural armor",
        hp: 190,
        hitDice: "20d8+100",
        speed: { walk: 40, fly: 60 },
        abilityScores: { str: 22, dex: 14, con: 21, int: 14, wis: 15, cha: 17 },
        savingThrows: { str: 11, dex: 7 },
        skills: { perception: 7 },
        damageResistances: ["cold", "fire", "lightning; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "Abyssal, telepathy 120 ft.",
        cr: 15,
        traits: [
            { name: "Demonic Shadows", description: "The nabassu darkens the area around its body in a 10-foot radius. Nonmagical light can't illuminate this area of dim light." },
            { name: "Devour Soul", description: "A nabassu can eat the soul of a creature it has killed within the last hour, provided that creature is neither a construct nor an undead. The devouring requires the nabassu to be within 5 feet of the corpse for at least 10 minutes, after which it gains a number of Hit Dice (d8s) equal to half the creature's number of Hit Dice. The nabassu also increases its hit point maximum by 5 for every Hit Die it gains." },
            { name: "Magic Resistance", description: "The nabassu has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "The nabassu's weapon attacks are magical." }
        ],
        actions: [
            { name: "Multiattack", description: "The nabassu makes two attacks: one with its claws and one with its bite." },
            { name: "Bite", description: "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 38 (5d12+6) necrotic damage." },
            { name: "Claws", description: "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 28 (4d10+6) slashing damage." },
            { name: "Soul-Stealing Gaze", description: "The nabassu targets one creature it can see within 30 feet of it. If the target can see the nabassu and isn't a construct or an undead, it must succeed on a DC 16 Charisma saving throw or reduce its hit point maximum by 13 (2d12) and give the nabassu an equal number of temporary hit points. This reduction lasts until the target finishes a short or long rest. The target dies if its hit point maximum is reduced to 0, and if the target is a humanoid, it immediately rises as a ghoul under the nabassu's control." }
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
        traits: [
            { name: "Crippling Fear", description: "When a creature that isn't a demon starts its turn within 30 feet of three or more rutterkins, it must make a DC 11 Wisdom saving throw. The creature has disadvantage on the save if it's within 30 feet of six or more rutterkins. On a failed save, the creature becomes frightened of the rutterkins for 1 minute. While frightened in this way, the creature is restrained. At the end of each of the frightened creature's turns, it can repeat the saving throw, ending the effect on itself on a success." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 12 (3d6+2) piercing damage. If the target is a creature, it must succeed on a DC 13 Constitution saving throw against disease or become poisoned. At the end of each long rest, the poisoned target can repeat the saving throw, ending the effect on itself on a success. If the target is reduced to 0 hit points while poisoned in this way, it dies and instantly transforms into a living abyssal wretch under the DM's control." }
        ]
    },
    "sibriex": {
        name: "Sibriex",
        source: "MToF",
        size: "huge",
        type: "fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 19,
        acType: "natural armor",
        hp: 150,
        hitDice: "12d12+72",
        speed: { walk: 0, fly: 20 },
        abilityScores: { str: 10, dex: 3, con: 23, int: 25, wis: 24, cha: 25 },
        savingThrows: { int: 13, cha: 13 },
        skills: { arcana: 13, history: 13, perception: 13 },
        damageResistances: ["cold", "fire", "lightning; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["truesight 120 ft."],
        languages: "all, telepathy 120 ft.",
        cr: 18,
        traits: [
            { name: "Contamination", description: "The sibriex emits an aura of corruption 30 feet in every direction. Plants that aren't creatures wither in the aura, and the ground in it is difficult terrain for other creatures. Any creature that starts its turn in the aura must succeed on a DC 20 Constitution saving throw or take 14 (4d6) poison damage. A creature that succeeds on the save is immune to this sibriex's Contamination for 24 hours." },
            { name: "Legendary Resistance (3/Day)", description: "If the sibriex fails a saving throw, it can choose to succeed instead." },
            { name: "Magic Resistance", description: "The sibriex has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack", description: "The sibriex uses Squirt Bile once and makes three attacks using its chain, bite, or both." },
            { name: "Chain", description: "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 20 (2d12+7) piercing damage." },
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (2d8) piercing damage plus 9 (2d8) acid damage." },
            { name: "Squirt Bile", description: "The sibriex targets one creature it can see within 120 feet of it. The target must succeed on a DC 20 Dexterity saving throw or take 35 (10d6) acid damage." },
            { name: "Warp Creature", description: "The sibriex targets up to three creatures it can see within 120 feet of it. Each target must make a DC 20 Constitution saving throw. On a failed save, the target is poisoned, which causes it to also gain 1 level of exhaustion. While poisoned in this way, the target must repeat the saving throw at the start of each of its turns. Three successful saves against the poison end it, and ending the poison removes any levels of exhaustion caused by it. Each failed save causes the target to suffer another level of exhaustion. Once the target reaches 6 levels of exhaustion, it dies and instantly transforms into a living abyssal wretch under the sibriex's control." }
        ],
        legendaryActions: {
            perRound: 3,
            actions: [
                { name: "Cast a Spell", description: "The sibriex casts a spell." },
                { name: "Spray Bile", description: "The sibriex uses Squirt Bile." },
                { name: "Warp (Costs 2 Actions)", description: "The sibriex uses Warp Creature." }
            ]
        },
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 21,
            spells: {
                atWill: ["charm person", "command", "dispel magic", "hold monster"],
                "3/day": ["feeblemind"]
            }
        }
    },

    // ===== Devils =====
    "amnizu": {
        name: "Amnizu",
        source: "MToF",
        size: "medium",
        type: "fiend",
        subtype: "devil",
        alignment: "lawful evil",
        ac: 21,
        acType: "natural armor",
        hp: 202,
        hitDice: "27d8+81",
        speed: { walk: 30, fly: 40 },
        abilityScores: { str: 11, dex: 13, con: 16, int: 20, wis: 12, cha: 18 },
        savingThrows: { dex: 7, con: 9, wis: 7, cha: 10 },
        skills: { perception: 7 },
        damageResistances: ["cold; bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["charmed", "poisoned"],
        senses: ["darkvision 120 ft."],
        languages: "Common, Infernal, telepathy 1,000 ft.",
        cr: 18,
        traits: [
            { name: "Devil's Sight", description: "Magical darkness doesn't impede the amnizu's darkvision." },
            { name: "Magic Resistance", description: "The amnizu has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack", description: "The amnizu uses Poison Mind. It also makes two attacks: one with its whip and one with its Disruptive Touch." },
            { name: "Taskmaster Whip", description: "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 10 (2d4+5) slashing damage plus 33 (6d10) force damage." },
            { name: "Disruptive Touch", description: "Melee Spell Attack: +11 to hit, reach 5 ft., one target. Hit: 44 (8d10) necrotic damage." },
            { name: "Poison Mind", description: "The amnizu targets one or two creatures that it can see within 60 feet of it. Each target must succeed on a DC 19 Wisdom saving throw or take 26 (4d12) psychic damage and must use its reaction to make a melee attack against one creature of the amnizu's choice that the amnizu can see." },
            { name: "Forgetfulness (Recharge 6)", description: "The amnizu targets one creature it can see within 60 feet of it. That creature must make a DC 18 Intelligence saving throw and on a failed save take 26 (4d12) psychic damage and become stunned for 1 minute. A stunned creature repeats the saving throw at the end of each of its turns, ending the effect on itself on a success. If the target is stunned for the full minute, it forgets everything it sensed, experienced, and learned during the last 5 hours." }
        ],
        reactions: [
            { name: "Instinctive Charm", description: "When a creature within 60 feet of the amnizu makes an attack roll against it, and another creature is within the attack's range, the attacker must make a DC 19 Wisdom saving throw. On a failed save, the attacker must target the creature that is closest to it, not including the amnizu or itself. If multiple creatures are closest, the attacker chooses which one to target. If the saving throw is successful, the attacker is immune to the amnizu's Instinctive Charm for 24 hours." }
        ],
        spellcasting: {
            innate: true,
            ability: "int",
            dc: 19,
            attack: 11,
            spells: {
                atWill: ["charm person", "command"],
                "3/day": ["dominate person"],
                "1/day each": ["dominate monster", "feeblemind"]
            }
        }
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
        traits: [
            { name: "Devil's Sight", description: "Magical darkness doesn't impede the merregon's darkvision." },
            { name: "Magic Resistance", description: "The merregon has advantage on saving throws against spells and other magical effects." }
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
    "nupperibo": {
        name: "Nupperibo",
        source: "MToF",
        size: "medium",
        type: "fiend",
        subtype: "devil",
        alignment: "lawful evil",
        ac: 13,
        acType: "natural armor",
        hp: 11,
        hitDice: "2d8+2",
        speed: { walk: 20 },
        abilityScores: { str: 16, dex: 11, con: 13, int: 3, wis: 8, cha: 1 },
        skills: { perception: 1 },
        damageResistances: ["cold; bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["blinded", "charmed", "frightened", "poisoned"],
        senses: ["blindsight 10 ft. (blind beyond this radius)"],
        languages: "understands Infernal but can't speak",
        cr: 0.5,
        traits: [
            { name: "Cloud of Vermin", description: "Any creature, other than a devil, that starts its turn within 20 feet of one or more nupperibos must succeed on a DC 11 Constitution saving throw or take 2 (1d4) piercing damage." },
            { name: "Hunger-Driven", description: "In the Nine Hells, the weights of a lemure and nupperibo both can change." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6+3) piercing damage." }
        ]
    },
    "orthon": {
        name: "Orthon",
        source: "MToF",
        size: "large",
        type: "fiend",
        subtype: "devil",
        alignment: "lawful evil",
        ac: 17,
        acType: "half plate",
        hp: 105,
        hitDice: "10d10+50",
        speed: { walk: 30, climb: 30 },
        abilityScores: { str: 22, dex: 16, con: 21, int: 15, wis: 15, cha: 16 },
        savingThrows: { dex: 7, con: 9, wis: 6 },
        skills: { perception: 10, stealth: 11, survival: 10 },
        damageResistances: ["cold; bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["charmed", "exhaustion", "poisoned"],
        senses: ["darkvision 120 ft.", "truesight 30 ft."],
        languages: "Common, Infernal, telepathy 120 ft.",
        cr: 10,
        traits: [
            { name: "Invisibility Field", description: "The orthon can use a bonus action to become invisible. Any equipment the orthon wears or carries is also invisible as long as the equipment is on its person. This invisibility ends immediately after the orthon makes an attack roll or is hit by an attack." },
            { name: "Magic Resistance", description: "The orthon has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Infernal Dagger", description: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 11 (2d4+6) slashing damage, and the target must make a DC 17 Constitution saving throw, taking 22 (4d10) poison damage on a failed save, or half as much damage on a successful one. On a failure, the target is poisoned for 1 minute. The poisoned target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." },
            { name: "Brass Crossbow", description: "Ranged Weapon Attack: +7 to hit, range 100/400 ft., one target. Hit: 14 (2d10+3) piercing damage, plus one of the following effects: 1. Acid: 17 (5d6) acid damage. 2. Blindness (1/day): See stat block. 3. Concussion: 17 (5d6) thunder damage. 4. Entanglement (1/day): See stat block. 5. Paralysis (1/day): See stat block. 6. Tracking: For 24 hours the orthon knows location of target." }
        ],
        reactions: [
            { name: "Explosive Retribution", description: "When it is reduced to 15 hit points or fewer, the orthon causes itself to explode. All other creatures within 30 feet of it must each make a DC 17 Dexterity saving throw, taking 9 (2d8) fire damage plus 9 (2d8) thunder damage on a failed save, or half as much damage on a successful one. This explosion destroys the orthon, its infernal dagger, and its brass crossbow." }
        ]
    },

    // ===== Duergar =====
    "duergar-despot": {
        name: "Duergar Despot",
        source: "MToF",
        size: "medium",
        type: "humanoid",
        subtype: "dwarf",
        alignment: "lawful evil",
        ac: 21,
        acType: "natural armor",
        hp: 119,
        hitDice: "14d8+56",
        speed: { walk: 25 },
        abilityScores: { str: 20, dex: 5, con: 19, int: 15, wis: 14, cha: 13 },
        savingThrows: { con: 8, wis: 6 },
        damageImmunities: ["poison"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "poisoned"],
        senses: ["darkvision 120 ft."],
        languages: "Dwarvish, Undercommon",
        cr: 12,
        traits: [
            { name: "Magic Resistance", description: "The duergar has advantage on saving throws against spells and other magical effects." },
            { name: "Psychic Engine", description: "When the duergar suffers a critical hit or is reduced to 0 hit points, psychic energy erupts from its frame to deal 14 (4d6) psychic damage to each creature within 5 feet of it." },
            { name: "Sunlight Sensitivity", description: "While in sunlight, the duergar has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Multiattack", description: "The duergar makes two Iron Fist attacks and two Stomping Foot attacks. It can replace up to four of these attacks with uses of Flame Jet." },
            { name: "Iron Fist", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 14 (2d8+5) bludgeoning damage. If the target is a Large or smaller creature, it must make a DC 17 Strength saving throw or be pushed up to 30 feet away in a straight line and knocked prone." },
            { name: "Stomping Foot", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 9 (1d8+5) bludgeoning damage, or 18 (3d8+5) bludgeoning damage to a prone target." },
            { name: "Flame Jet", description: "The duergar spews flames in a line 100 feet long and 5 feet wide. Each creature in the line must make a DC 16 Dexterity saving throw, taking 18 (4d8) fire damage on a failed save, or half as much damage on a successful one." }
        ],
        spellcasting: {
            innate: true,
            ability: "int",
            dc: 12,
            spells: {
                atWill: ["mage hand", "minor illusion"],
                "1/day each": ["counterspell", "misty step", "stinking cloud"]
            }
        }
    },
    "duergar-hammerer": {
        name: "Duergar Hammerer",
        source: "MToF",
        size: "medium",
        type: "construct",
        alignment: "lawful evil",
        ac: 17,
        acType: "natural armor",
        hp: 33,
        hitDice: "6d8+6",
        speed: { walk: 20 },
        abilityScores: { str: 17, dex: 7, con: 12, int: 5, wis: 5, cha: 5 },
        damageImmunities: ["poison"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "petrified", "poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "understands Dwarvish but can't speak",
        cr: 2,
        traits: [
            { name: "Engine of Pain", description: "Once per turn, a creature that attacks the hammerer can target the duergar trapped in it. The attacker has disadvantage on the attack roll. On a hit, the attack deals an extra 5 (1d10) damage to the hammerer, and the hammerer can respond by using its Multiattack with its reaction." },
            { name: "Siege Monster", description: "The hammerer deals double damage to objects and structures." }
        ],
        actions: [
            { name: "Multiattack", description: "The hammerer makes two attacks: one with its claw and one with its hammer." },
            { name: "Claw", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6+3) bludgeoning damage." },
            { name: "Hammer", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6+3) bludgeoning damage." }
        ]
    },
    "duergar-kavalrachni": {
        name: "Duergar Kavalrachni",
        source: "MToF",
        size: "medium",
        type: "humanoid",
        subtype: "dwarf",
        alignment: "lawful evil",
        ac: 16,
        acType: "scale mail, shield",
        hp: 26,
        hitDice: "4d8+8",
        speed: { walk: 25 },
        abilityScores: { str: 14, dex: 11, con: 14, int: 11, wis: 10, cha: 9 },
        damageResistances: ["poison"],
        senses: ["darkvision 120 ft."],
        languages: "Dwarvish, Undercommon",
        cr: 2,
        traits: [
            { name: "Cavalry Training", description: "When the duergar hits a target with a melee attack while mounted, the mount can use its reaction to make one melee attack against the same target." },
            { name: "Duergar Resilience", description: "The duergar has advantage on saving throws against poison, spells, and illusions, as well as to resist being charmed or paralyzed." },
            { name: "Sunlight Sensitivity", description: "While in sunlight, the duergar has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Multiattack", description: "The duergar makes two war pick attacks." },
            { name: "War Pick", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8+2) piercing damage, or 11 (2d8+2) piercing damage while enlarged." },
            { name: "Heavy Crossbow", description: "Ranged Weapon Attack: +2 to hit, range 100/400 ft., one target. Hit: 5 (1d10) piercing damage." },
            { name: "Enlarge (Recharges after a Short or Long Rest)", description: "For 1 minute, the duergar magically increases in size, along with anything it is wearing or carrying. While enlarged, the duergar is Large, doubles its damage dice on Strength-based weapon attacks (included in the attacks), and makes Strength checks and Strength saving throws with advantage. If the duergar lacks the room to become Large, it attains the maximum size possible in the space available." },
            { name: "Invisibility (Recharges after a Short or Long Rest)", description: "The duergar magically turns invisible for up to 1 hour or until it attacks, it casts a spell, it uses its Enlarge, or its concentration is broken (as if concentrating on a spell). Any equipment the duergar wears or carries is invisible with it." }
        ]
    },
    "duergar-screamer": {
        name: "Duergar Screamer",
        source: "MToF",
        size: "medium",
        type: "construct",
        alignment: "lawful evil",
        ac: 15,
        acType: "natural armor",
        hp: 38,
        hitDice: "7d8+7",
        speed: { walk: 20 },
        abilityScores: { str: 18, dex: 7, con: 12, int: 5, wis: 5, cha: 5 },
        damageImmunities: ["poison"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "petrified", "poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "understands Dwarvish but can't speak",
        cr: 3,
        traits: [
            { name: "Engine of Pain", description: "Once per turn, a creature that attacks the screamer can target the duergar trapped in it. The attacker has disadvantage on the attack roll. On a hit, the attack deals an extra 5 (1d10) damage to the screamer, and the screamer can respond by using its Multiattack with its reaction." }
        ],
        actions: [
            { name: "Multiattack", description: "The screamer makes one drill attack and uses its Sonic Scream." },
            { name: "Drill", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (1d12+4) piercing damage." },
            { name: "Sonic Scream", description: "The screamer emits destructive energy in a 15-foot cube. Each creature in that area must succeed on a DC 11 Strength saving throw or take 7 (2d6) thunder damage and be knocked prone." }
        ]
    },
    "duergar-soulblade": {
        name: "Duergar Soulblade",
        source: "MToF",
        size: "medium",
        type: "humanoid",
        subtype: "dwarf",
        alignment: "lawful evil",
        ac: 14,
        acType: "leather armor",
        hp: 18,
        hitDice: "4d8",
        speed: { walk: 25 },
        abilityScores: { str: 11, dex: 16, con: 10, int: 11, wis: 10, cha: 12 },
        damageResistances: ["poison"],
        senses: ["darkvision 120 ft."],
        languages: "Dwarvish, Undercommon",
        cr: 1,
        traits: [
            { name: "Duergar Resilience", description: "The duergar has advantage on saving throws against poison, spells, and illusions, as well as to resist being charmed or paralyzed." },
            { name: "Sunlight Sensitivity", description: "While in sunlight, the duergar has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Soulblade", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6+3) force damage, or 10 (2d6+3) force damage while enlarged. If the soulblade has advantage on the attack roll, the attack deals an extra 7 (2d6) force damage." },
            { name: "Enlarge (Recharges after a Short or Long Rest)", description: "For 1 minute, the duergar magically increases in size, along with anything it is wearing or carrying. While enlarged, the duergar is Large, doubles its damage dice on Strength-based weapon attacks (included in the attacks), and makes Strength checks and Strength saving throws with advantage." },
            { name: "Invisibility (Recharges after a Short or Long Rest)", description: "The duergar magically turns invisible for up to 1 hour or until it attacks, it casts a spell, it uses its Enlarge, or its concentration is broken (as if concentrating on a spell). Any equipment the duergar wears or carries is invisible with it." }
        ]
    },
    "duergar-stone-guard": {
        name: "Duergar Stone Guard",
        source: "MToF",
        size: "medium",
        type: "humanoid",
        subtype: "dwarf",
        alignment: "lawful evil",
        ac: 18,
        acType: "chain mail, shield",
        hp: 39,
        hitDice: "6d8+12",
        speed: { walk: 25 },
        abilityScores: { str: 18, dex: 11, con: 14, int: 11, wis: 10, cha: 9 },
        damageResistances: ["poison"],
        senses: ["darkvision 120 ft."],
        languages: "Dwarvish, Undercommon",
        cr: 2,
        traits: [
            { name: "Duergar Resilience", description: "The duergar has advantage on saving throws against poison, spells, and illusions, as well as to resist being charmed or paralyzed." },
            { name: "Phalanx Formation", description: "The duergar has advantage on attack rolls and Dexterity saving throws while standing within 5 feet of a duergar ally wielding a shield." },
            { name: "Sunlight Sensitivity", description: "While in sunlight, the duergar has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Multiattack", description: "The duergar makes two king's knife attacks." },
            { name: "King's Knife", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8+4) piercing damage, or 13 (2d8+4) piercing damage while enlarged." },
            { name: "Javelin", description: "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 7 (1d6+4) piercing damage, or 11 (2d6+4) piercing damage while enlarged." },
            { name: "Enlarge (Recharges after a Short or Long Rest)", description: "For 1 minute, the duergar magically increases in size, along with anything it is wearing or carrying. While enlarged, the duergar is Large, doubles its damage dice on Strength-based weapon attacks (included in the attacks), and makes Strength checks and Strength saving throws with advantage." },
            { name: "Invisibility (Recharges after a Short or Long Rest)", description: "The duergar magically turns invisible for up to 1 hour or until it attacks, it casts a spell, it uses its Enlarge, or its concentration is broken (as if concentrating on a spell). Any equipment the duergar wears or carries is invisible with it." }
        ]
    },
    "duergar-warlord": {
        name: "Duergar Warlord",
        source: "MToF",
        size: "medium",
        type: "humanoid",
        subtype: "dwarf",
        alignment: "lawful evil",
        ac: 20,
        acType: "plate, shield",
        hp: 75,
        hitDice: "10d8+30",
        speed: { walk: 25 },
        abilityScores: { str: 18, dex: 11, con: 17, int: 12, wis: 12, cha: 14 },
        damageResistances: ["poison"],
        senses: ["darkvision 120 ft."],
        languages: "Dwarvish, Undercommon",
        cr: 6,
        traits: [
            { name: "Duergar Resilience", description: "The duergar has advantage on saving throws against poison, spells, and illusions, as well as to resist being charmed or paralyzed." },
            { name: "Sunlight Sensitivity", description: "While in sunlight, the duergar has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Multiattack", description: "The duergar makes three psychic-attuned hammer or javelin attacks and uses Call to Attack, or Enlarge if it is available." },
            { name: "Psychic-Attuned Hammer", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (1d10+4) bludgeoning damage, or 15 (2d10+4) bludgeoning damage while enlarged, plus 5 (1d10) psychic damage." },
            { name: "Javelin", description: "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 7 (1d6+4) piercing damage, or 11 (2d6+4) piercing damage while enlarged." },
            { name: "Call to Attack", description: "Up to three allied duergar within 120 feet of this duergar that can hear it can each use their reaction to make one weapon attack." },
            { name: "Enlarge (Recharges after a Short or Long Rest)", description: "For 1 minute, the duergar magically increases in size, along with anything it is wearing or carrying. While enlarged, the duergar is Large, doubles its damage dice on Strength-based weapon attacks (included in the attacks), and makes Strength checks and Strength saving throws with advantage." },
            { name: "Invisibility (Recharges after a Short or Long Rest)", description: "The duergar magically turns invisible for up to 1 hour or until it attacks, it casts a spell, it uses its Enlarge, or its concentration is broken (as if concentrating on a spell). Any equipment the duergar wears or carries is invisible with it." }
        ],
        reactions: [
            { name: "Scouring Instruction", description: "When an ally that the duergar can see makes a d20 roll, the duergar can roll 1d6 and the ally can add the number rolled to the d20 by taking 3 (1d6) psychic damage." }
        ]
    },
    "duergar-xarrorn": {
        name: "Duergar Xarrorn",
        source: "MToF",
        size: "medium",
        type: "humanoid",
        subtype: "dwarf",
        alignment: "lawful evil",
        ac: 18,
        acType: "plate",
        hp: 26,
        hitDice: "4d8+8",
        speed: { walk: 25 },
        abilityScores: { str: 16, dex: 11, con: 14, int: 11, wis: 10, cha: 9 },
        damageResistances: ["poison"],
        senses: ["darkvision 120 ft."],
        languages: "Dwarvish, Undercommon",
        cr: 2,
        traits: [
            { name: "Duergar Resilience", description: "The duergar has advantage on saving throws against poison, spells, and illusions, as well as to resist being charmed or paralyzed." },
            { name: "Sunlight Sensitivity", description: "While in sunlight, the duergar has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Fire Lance", description: "Melee Weapon Attack: +5 to hit, reach 10 ft., one target. Hit: 9 (1d12+3) piercing damage plus 3 (1d6) fire damage, or 16 (2d12+3) piercing damage plus 3 (1d6) fire damage while enlarged." },
            { name: "Fire Spray (Recharge 5-6)", description: "From its fire lance, the duergar shoots a 15-foot cone of fire or a line of fire 30 feet long and 5 feet wide. Each creature in that area must make a DC 12 Dexterity saving throw, taking 10 (3d6) fire damage on a failed save, or half as much damage on a successful one." },
            { name: "Enlarge (Recharges after a Short or Long Rest)", description: "For 1 minute, the duergar magically increases in size, along with anything it is wearing or carrying. While enlarged, the duergar is Large, doubles its damage dice on Strength-based weapon attacks (included in the attacks), and makes Strength checks and Strength saving throws with advantage." },
            { name: "Invisibility (Recharges after a Short or Long Rest)", description: "The duergar magically turns invisible for up to 1 hour or until it attacks, it casts a spell, it uses its Enlarge, or its concentration is broken (as if concentrating on a spell). Any equipment the duergar wears or carries is invisible with it." }
        ]
    },

    // ===== Misc =====
    "astral-dreadnought": {
        name: "Astral Dreadnought",
        source: "MToF",
        size: "gargantuan",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 20,
        acType: "natural armor",
        hp: 297,
        hitDice: "17d20+119",
        speed: { walk: 15, fly: 80 },
        abilityScores: { str: 28, dex: 7, con: 25, int: 5, wis: 14, cha: 18 },
        savingThrows: { dex: 5, wis: 9 },
        skills: { perception: 9 },
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "petrified", "poisoned", "prone", "stunned"],
        senses: ["darkvision 120 ft."],
        languages: "—",
        cr: 21,
        traits: [
            { name: "Antimagic Cone", description: "The astral dreadnought's opened eye creates an area of antimagic, as in the antimagic field spell, in a 150-foot cone. At the start of each of its turns, the dreadnought decides which way the cone faces. The cone doesn't function while the dreadnought's eye is closed or while the dreadnought is blinded." },
            { name: "Astral Entity", description: "The astral dreadnought can't leave the Astral Plane, nor can it be banished or otherwise transported out of the Astral Plane." },
            { name: "Demiplanar Donjon", description: "Any creature or object that the astral dreadnought swallows is transported to a demiplane that can be entered by no other means except a wish spell or this creature's Donjon Visit ability. A creature can leave the demiplane only by using magic that enables planar travel, such as the plane shift spell. The demiplane resembles a stone cave roughly 1,000 feet in diameter with a ceiling 100 feet high. Like a stomach, it contains the remains of the dreadnought's past meals. The dreadnought can't be harmed from within the demiplane. If the dreadnought dies, the demiplane disappears, and everything inside it appears around the corpse. The demiplane is otherwise indestructible." },
            { name: "Legendary Resistance (3/Day)", description: "If the astral dreadnought fails a saving throw, it can choose to succeed instead." },
            { name: "Magic Weapons", description: "An astral dreadnought's weapon attacks are magical." },
            { name: "Sever Silver Cord", description: "If the astral dreadnought scores a critical hit against a creature traveling by means of the astral projection spell, the dreadnought can cut the target's silver cord instead of dealing damage." }
        ],
        actions: [
            { name: "Multiattack", description: "The astral dreadnought makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +16 to hit, reach 10 ft., one target. Hit: 36 (5d10+9) piercing damage. If the target is a creature of Huge size or smaller and this damage reduces it to 0 hit points or it is incapacitated, the astral dreadnought swallows it. The swallowed target, along with everything it is wearing and carrying, appears in an unoccupied space on the floor of the astral dreadnought's Demiplanar Donjon." },
            { name: "Claw", description: "Melee Weapon Attack: +16 to hit, reach 20 ft., one target. Hit: 19 (3d6+9) slashing damage." }
        ],
        legendaryActions: {
            perRound: 3,
            actions: [
                { name: "Claw", description: "The astral dreadnought makes one claw attack." },
                { name: "Donjon Visit (Costs 2 Actions)", description: "One creature that is Huge or smaller that the astral dreadnought can see within 60 feet of it must succeed on a DC 19 Charisma saving throw or be magically teleported to an unoccupied space on the floor of the astral dreadnought's Demiplanar Donjon. At the end of the target's next turn, the target reappears in the space it left or in the nearest unoccupied space if that space is occupied." },
                { name: "Psychic Projection (Costs 3 Actions)", description: "Each creature within 60 feet of the astral dreadnought must make a DC 19 Wisdom saving throw, taking 15 (2d10+4) psychic damage on a failed save, or half as much damage on a successful one." }
            ]
        }
    },
    "berbalang": {
        name: "Berbalang",
        source: "MToF",
        size: "medium",
        type: "aberration",
        alignment: "neutral evil",
        ac: 14,
        acType: "natural armor",
        hp: 38,
        hitDice: "11d8-11",
        speed: { walk: 30, fly: 40 },
        abilityScores: { str: 9, dex: 16, con: 9, int: 17, wis: 11, cha: 10 },
        savingThrows: { dex: 5, int: 5 },
        skills: { arcana: 5, history: 5, insight: 2, perception: 2, religion: 5 },
        senses: ["truesight 120 ft."],
        languages: "all, but rarely speaks",
        cr: 2,
        traits: [
            { name: "Spectral Duplicate (Recharges after a Short or Long Rest)", description: "As a bonus action, the berbalang creates one spectral duplicate of itself in an unoccupied space it can see within 60 feet of it. While the duplicate exists, the berbalang is unconscious. A berbalang can have only one duplicate at a time. The duplicate disappears when it or the berbalang drops to 0 hit points or when the berbalang dismisses it (no action required). The duplicate has the same statistics and knowledge as the berbalang, and everything experienced by the duplicate is known by the berbalang. All damage dealt by the duplicate's attacks is psychic damage." }
        ],
        actions: [
            { name: "Multiattack", description: "The berbalang makes two attacks: one with its bite and one with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10+3) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (2d4+3) slashing damage." }
        ],
        spellcasting: {
            innate: true,
            ability: "int",
            dc: 13,
            spells: {
                atWill: ["speak with dead"],
                "1/day": ["plane shift (self only)"]
            }
        }
    },
    "corpse-flower": {
        name: "Corpse Flower",
        source: "MToF",
        size: "large",
        type: "plant",
        alignment: "chaotic evil",
        ac: 12,
        hp: 127,
        hitDice: "15d10+45",
        speed: { walk: 20, climb: 20 },
        abilityScores: { str: 14, dex: 14, con: 16, int: 7, wis: 15, cha: 3 },
        conditionImmunities: ["blinded", "deafened"],
        senses: ["blindsight 120 ft. (blind beyond this radius)"],
        languages: "—",
        cr: 8,
        traits: [
            { name: "Corpses", description: "When first encountered, a corpse flower contains the corpses of 1d6 + 3 humanoids. A corpse flower can hold the remains of up to nine dead humanoids. These remains have total cover against attacks and other effects outside the corpse flower. If the corpse flower dies, the corpses within it can be pulled free." },
            { name: "Spider Climb", description: "The corpse flower can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." },
            { name: "Stench of Death", description: "Each creature that starts its turn within 10 feet of the corpse flower or one of its zombies must make a DC 14 Constitution saving throw, unless the creature is a construct or undead. On a failed save, the creature is incapacitated until the start of its next turn. On a successful save, the creature is immune to the Stench of Death of all corpse flowers for 24 hours." }
        ],
        actions: [
            { name: "Multiattack", description: "The corpse flower makes three tentacle attacks." },
            { name: "Tentacle", description: "Melee Weapon Attack: +5 to hit, reach 10 ft., one target. Hit: 9 (2d6+2) bludgeoning damage plus 10 (3d6) poison damage." },
            { name: "Harvest the Dead", description: "The corpse flower grabs one unsecured dead humanoid within 10 feet of it and stuffs the corpse into itself, along with any equipment the corpse is wearing or carrying. The remains can be used with the Digest or Reanimate action." },
            { name: "Digest", description: "The corpse flower digests one humanoid corpse in its body and instantly regains 11 (2d10) hit points. Nothing of the digested body remains. Any equipment on the corpse is expelled from the corpse flower in its space." },
            { name: "Reanimate", description: "The corpse flower animates one corpse in its body, turning it into a zombie. The zombie appears in an unoccupied space within 5 feet of the corpse flower and acts immediately after it in the initiative order. The zombie acts as an ally of the corpse flower but isn't under its control, and the flower's stench clings to it (see Stench of Death)." }
        ]
    }
};
