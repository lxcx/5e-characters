// Expansion Pack 29 - More iconic creatures
// Comprehensive additions

const MONSTERS_EXPANSION29 = {
    // ===== More Iconic D&D Creatures =====
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
        speed: { walk: 0, fly: 20 },
        abilityScores: { str: 10, dex: 14, con: 18, int: 17, wis: 15, cha: 17 },
        savingThrows: { int: 8, wis: 7, cha: 8 },
        skills: { perception: 12 },
        conditionImmunities: ["prone"],
        senses: ["darkvision 120 ft."],
        languages: "Deep Speech, Undercommon",
        cr: 13,
        environment: ["underdark"],
        role: "artillery",
        tags: ["aberration", "beholder"],
        traits: [
            { name: "Antimagic Cone", description: "The beholder's central eye creates an area of antimagic, as in the antimagic field spell, in a 150-foot cone. At the start of each of its turns, the beholder decides which way the cone faces and whether the cone is active. The area works against the beholder's own eye rays." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 14 (4d6) piercing damage." },
            { name: "Eye Rays", description: "The beholder shoots three of the following magical eye rays at random (reroll duplicates), choosing one to three targets it can see within 120 ft. of it: 1. Charm Ray, 2. Paralyzing Ray, 3. Fear Ray, 4. Slowing Ray, 5. Enervation Ray, 6. Telekinetic Ray, 7. Sleep Ray, 8. Petrification Ray, 9. Disintegration Ray, 10. Death Ray." }
        ],
        legendaryActions: [
            { name: "Eye Ray", description: "The beholder uses one random eye ray." }
        ]
    },
    "mind-flayer": {
        name: "Mind Flayer",
        source: "MM",
        size: "medium",
        type: "aberration",
        alignment: "lawful evil",
        ac: 15,
        acType: "breastplate",
        hp: 71,
        hitDice: "13d8+13",
        speed: { walk: 30 },
        abilityScores: { str: 11, dex: 12, con: 12, int: 19, wis: 17, cha: 17 },
        savingThrows: { int: 7, wis: 6, cha: 6 },
        skills: { arcana: 7, deception: 6, insight: 6, perception: 6, persuasion: 6, stealth: 4 },
        senses: ["darkvision 120 ft."],
        languages: "Deep Speech, Undercommon, telepathy 120 ft.",
        cr: 7,
        environment: ["underdark"],
        role: "controller",
        tags: ["aberration", "mind flayer"],
        traits: [
            { name: "Magic Resistance", description: "The mind flayer has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Tentacles", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 15 (2d10+4) psychic damage. If the target is Medium or smaller, it is grappled (escape DC 15) and must succeed on a DC 15 Intelligence saving throw or be stunned until this grapple ends." },
            { name: "Extract Brain", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one incapacitated humanoid grappled by the mind flayer. Hit: The target takes 55 (10d10) piercing damage. If this damage reduces the target to 0 hit points, the mind flayer kills the target by extracting and devouring its brain." },
            { name: "Mind Blast (Recharge 5-6)", description: "The mind flayer magically emits psychic energy in a 60-foot cone. Each creature in that area must succeed on a DC 15 Intelligence saving throw or take 22 (4d8+4) psychic damage and be stunned for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." }
        ],
        spellcasting: {
            innate: true,
            ability: "int",
            dc: 15,
            spells: {
                atWill: ["detect thoughts", "levitate"],
                "1/day each": ["dominate monster", "plane shift (self only)"]
            }
        }
    },
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
        tags: ["fiend", "devil"],
        traits: [
            { name: "Fear Aura", description: "Any creature hostile to the pit fiend that starts its turn within 20 feet of the pit fiend must make a DC 21 Wisdom saving throw, unless the pit fiend is incapacitated. On a failed save, the creature is frightened until the start of its next turn. If a creature's saving throw is successful, the creature is immune to the pit fiend's Fear Aura for the next 24 hours." },
            { name: "Magic Resistance", description: "The pit fiend has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "The pit fiend's weapon attacks are magical." }
        ],
        actions: [
            { name: "Multiattack", description: "The pit fiend makes four attacks: one with its bite, one with its claw, one with its mace, and one with its tail." },
            { name: "Bite", description: "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 22 (4d6+8) piercing damage. The target must succeed on a DC 21 Constitution saving throw or become poisoned. While poisoned in this way, the target can't regain hit points, and it takes 21 (6d6) poison damage at the start of each of its turns. The poisoned target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." },
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
        tags: ["fiend", "demon"],
        traits: [
            { name: "Death Throes", description: "When the balor dies, it explodes, and each creature within 30 feet of it must make a DC 20 Dexterity saving throw, taking 70 (20d6) fire damage on a failed save, or half as much damage on a successful one. The explosion ignites flammable objects in that area that aren't being worn or carried, and it destroys the balor's weapons." },
            { name: "Fire Aura", description: "At the start of each of the balor's turns, each creature within 5 feet of it takes 10 (3d6) fire damage, and flammable objects in the aura that aren't being worn or carried ignite. A creature that touches the balor or hits it with a melee attack while within 5 feet of it takes 10 (3d6) fire damage." },
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
        role: "soldier",
        tags: ["fiend", "demon"],
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

    // ===== More Misc =====
    "cambion": {
        name: "Cambion",
        source: "MM",
        size: "medium",
        type: "fiend",
        alignment: "any evil alignment",
        ac: 19,
        acType: "scale mail",
        hp: 82,
        hitDice: "11d8+33",
        speed: { walk: 30, fly: 60 },
        abilityScores: { str: 18, dex: 18, con: 16, int: 14, wis: 12, cha: 16 },
        savingThrows: { str: 7, con: 6, int: 5, cha: 6 },
        skills: { deception: 6, intimidation: 6, perception: 4, stealth: 7 },
        damageResistances: ["cold", "fire", "lightning", "poison; bludgeoning, piercing, and slashing from nonmagical attacks"],
        senses: ["darkvision 60 ft."],
        languages: "Abyssal, Common, Infernal",
        cr: 5,
        environment: ["urban"],
        role: "skirmisher",
        tags: ["fiend"],
        traits: [
            { name: "Fiendish Blessing", description: "The AC of the cambion includes its Charisma bonus." }
        ],
        actions: [
            { name: "Multiattack", description: "The cambion makes two melee attacks or uses its Fire Ray twice." },
            { name: "Spear", description: "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 7 (1d6+4) piercing damage, or 8 (1d8+4) piercing damage if used with two hands to make a melee attack, plus 3 (1d6) fire damage." },
            { name: "Fire Ray", description: "Ranged Spell Attack: +7 to hit, range 120 ft., one target. Hit: 10 (3d6) fire damage." },
            { name: "Fiendish Charm", description: "One humanoid the cambion can see within 30 feet of it must succeed on a DC 14 Wisdom saving throw or be magically charmed for 1 day. The charmed target obeys the cambion's spoken commands. If the target suffers any harm from the cambion or another creature or receives a suicidal command from the cambion, the target can repeat the saving throw, ending the effect on itself on a success. If a target's saving throw is successful, or if the effect ends for it, the creature is immune to the cambion's Fiendish Charm for the next 24 hours." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 14,
            spells: {
                "3/day each": ["alter self", "command", "detect magic"],
                "1/day": ["plane shift (self only)"]
            }
        }
    },
    "succubus-incubus": {
        name: "Succubus/Incubus",
        source: "MM",
        size: "medium",
        type: "fiend",
        subtype: "shapechanger",
        alignment: "neutral evil",
        ac: 15,
        acType: "natural armor",
        hp: 66,
        hitDice: "12d8+12",
        speed: { walk: 30, fly: 60 },
        abilityScores: { str: 8, dex: 17, con: 13, int: 15, wis: 12, cha: 20 },
        skills: { deception: 9, insight: 5, perception: 5, persuasion: 9, stealth: 7 },
        damageResistances: ["cold", "fire", "lightning", "poison; bludgeoning, piercing, and slashing from nonmagical attacks"],
        senses: ["darkvision 60 ft."],
        languages: "Abyssal, Common, Infernal, telepathy 60 ft.",
        cr: 4,
        environment: ["urban"],
        role: "lurker",
        tags: ["fiend", "shapechanger"],
        traits: [
            { name: "Telepathic Bond", description: "The fiend ignores the range restriction on its telepathy when communicating with a creature it has charmed. The two don't even need to be on the same plane of existence." },
            { name: "Shapechanger", description: "The fiend can use its action to polymorph into a Small or Medium humanoid, or back into its true form. Without wings, the fiend loses its flying speed. Other than its size and speed, its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies." }
        ],
        actions: [
            { name: "Claw (Fiend Form Only)", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6+3) slashing damage." },
            { name: "Charm", description: "One humanoid the fiend can see within 30 feet of it must succeed on a DC 15 Wisdom saving throw or be magically charmed for 1 day. The charmed target obeys the fiend's verbal or telepathic commands. If the target suffers any harm or receives a suicidal command, it can repeat the saving throw, ending the effect on a success. If the target successfully saves against the effect, or if the effect on it ends, the target is immune to this fiend's Charm for the next 24 hours. The fiend can have only one target charmed at a time. If it charms another, the effect on the previous target ends." },
            { name: "Draining Kiss", description: "The fiend kisses a creature charmed by it or a willing creature. The target must make a DC 15 Constitution saving throw against this magic, taking 32 (5d10+5) psychic damage on a failed save, or half as much damage on a successful one. The target's hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0." },
            { name: "Etherealness", description: "The fiend magically enters the Ethereal Plane from the Material Plane, or vice versa." }
        ]
    }
};
