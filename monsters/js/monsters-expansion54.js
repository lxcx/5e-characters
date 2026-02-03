// Expansion Pack 54 - Archdevils
// The powerful archdevils from MToF

const MONSTERS_EXPANSION54 = {
    "zariel": {
        name: "Zariel",
        source: "MToF",
        size: "large",
        type: "fiend",
        subtype: "devil",
        alignment: "lawful evil",
        ac: 21,
        acType: "natural armor",
        hp: 580,
        hitDice: "40d10+360",
        speed: { walk: 50, fly: 150 },
        abilityScores: { str: 27, dex: 24, con: 28, int: 26, wis: 27, cha: 30 },
        savingThrows: { int: 16, wis: 16, cha: 18 },
        skills: { intimidation: 18, perception: 16 },
        damageResistances: ["cold; bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "poisoned"],
        senses: ["darkvision 120 ft."],
        languages: "all, telepathy 120 ft.",
        cr: 26,
        environment: ["nine hells"],
        role: "boss",
        tags: ["fiend", "devil", "archdevil", "legendary"],
        traits: [
            { name: "Devil's Sight", description: "Magical darkness doesn't impede Zariel's darkvision." },
            { name: "Legendary Resistance (3/Day)", description: "If Zariel fails a saving throw, she can choose to succeed instead." },
            { name: "Magic Resistance", description: "Zariel has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "Zariel's weapon attacks are magical." },
            { name: "Regeneration", description: "Zariel regains 20 hit points at the start of her turn. If she takes radiant damage, this trait doesn't function at the start of her next turn. Zariel dies only if she starts her turn with 0 hit points and doesn't regenerate." }
        ],
        actions: [
            { name: "Multiattack", description: "Zariel makes three attacks: two with her longsword and one with her javelin." },
            { name: "Longsword", description: "Melee Weapon Attack: +16 to hit, reach 10 ft., one target. Hit: 17 (2d8+8) slashing damage plus 36 (8d8) fire damage." },
            { name: "Javelin", description: "Melee or Ranged Weapon Attack: +16 to hit, reach 10 ft. or range 30/120 ft., one target. Hit: 15 (2d6+8) piercing damage plus 36 (8d8) fire damage." },
            { name: "Horrid Touch (Recharge 5-6)", description: "Zariel touches one creature within 10 feet of her. The target must succeed on a DC 26 Constitution saving throw or take 44 (8d10) necrotic damage and be poisoned for 1 minute. While poisoned in this way, the target is also blinded and deafened. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." },
            { name: "Teleport", description: "Zariel magically teleports, along with any equipment she is wearing and carrying, up to 120 feet to an unoccupied space she can see." }
        ],
        legendaryActions: [
            { name: "Teleport", description: "Zariel uses her Teleport action." },
            { name: "Immolating Gaze (Costs 2 Actions)", description: "Zariel turns her magical gaze toward one creature she can see within 120 feet of her and commands it to combust. The target must succeed on a DC 26 Wisdom saving throw or take 22 (4d10) fire damage." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 26,
            spells: {
                atWill: ["alter self (can become Medium when using this spell)", "detect evil and good", "fireball", "invisibility (self only)", "wall of fire"],
                "3/day each": ["blade barrier", "dispel evil and good", "finger of death"]
            }
        }
    },
    "bael": {
        name: "Bael",
        source: "MToF",
        size: "large",
        type: "fiend",
        subtype: "devil",
        alignment: "lawful evil",
        ac: 18,
        acType: "plate",
        hp: 189,
        hitDice: "18d10+90",
        speed: { walk: 30 },
        abilityScores: { str: 24, dex: 17, con: 20, int: 21, wis: 24, cha: 24 },
        savingThrows: { dex: 9, con: 11, int: 11, cha: 13 },
        skills: { intimidation: 13, perception: 13, persuasion: 13 },
        damageResistances: ["cold; bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "poisoned"],
        senses: ["truesight 120 ft."],
        languages: "all, telepathy 120 ft.",
        cr: 19,
        environment: ["nine hells"],
        role: "boss",
        tags: ["fiend", "devil", "archdevil", "legendary"],
        traits: [
            { name: "Dread", description: "Any creature, other than a devil, that starts its turn within 10 feet of Bael must succeed on a DC 22 Wisdom saving throw or be frightened of him until the start of its next turn. A creature succeeds on this saving throw automatically if Bael wishes it or if he is incapacitated." },
            { name: "Legendary Resistance (3/Day)", description: "If Bael fails a saving throw, he can choose to succeed instead." },
            { name: "Magic Resistance", description: "Bael has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "Bael's weapon attacks are magical." },
            { name: "Regeneration", description: "Bael regains 20 hit points at the start of his turn. If he takes cold or radiant damage, this trait doesn't function at the start of his next turn. Bael dies only if he starts his turn with 0 hit points and doesn't regenerate." }
        ],
        actions: [
            { name: "Multiattack", description: "Bael makes two melee attacks." },
            { name: "Hellish Morningstar", description: "Melee Weapon Attack: +13 to hit, reach 20 ft., one target. Hit: 16 (2d8+7) piercing damage plus 13 (3d8) necrotic damage." },
            { name: "Infernal Command", description: "Each ally of Bael's within 60 feet of him can't be charmed or frightened until the end of his next turn." },
            { name: "Teleport", description: "Bael magically teleports, along with any equipment he is wearing and carrying, up to 120 feet to an unoccupied space he can see." }
        ],
        legendaryActions: [
            { name: "Attack (Costs 2 Actions)", description: "Bael makes one Hellish Morningstar attack." },
            { name: "Awaken Greed", description: "Bael casts charm person or major image." },
            { name: "Infernal Command", description: "Bael uses his Infernal Command action." },
            { name: "Teleport", description: "Bael uses his Teleport action." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 21,
            spells: {
                atWill: ["alter self", "animate dead", "charm person", "detect magic", "invisibility (self only)", "major image"],
                "3/day each": ["counterspell", "dispel magic", "fly", "suggestion"],
                "1/day each": ["dominate monster", "symbol (hopelessness only)"]
            }
        }
    },
    "geryon": {
        name: "Geryon",
        source: "MToF",
        size: "huge",
        type: "fiend",
        subtype: "devil",
        alignment: "lawful evil",
        ac: 19,
        acType: "natural armor",
        hp: 300,
        hitDice: "24d12+144",
        speed: { walk: 30, fly: 50 },
        abilityScores: { str: 29, dex: 17, con: 22, int: 19, wis: 16, cha: 23 },
        savingThrows: { dex: 10, con: 13, wis: 10, cha: 13 },
        skills: { deception: 13, intimidation: 13, perception: 10 },
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        damageImmunities: ["cold", "fire", "poison"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "poisoned"],
        senses: ["truesight 120 ft."],
        languages: "all, telepathy 120 ft.",
        cr: 22,
        environment: ["nine hells"],
        role: "boss",
        tags: ["fiend", "devil", "archdevil", "legendary"],
        traits: [
            { name: "Legendary Resistance (3/Day)", description: "If Geryon fails a saving throw, he can choose to succeed instead." },
            { name: "Magic Resistance", description: "Geryon has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "Geryon's weapon attacks are magical." },
            { name: "Regeneration", description: "Geryon regains 20 hit points at the start of his turn. If he takes radiant damage, this trait doesn't function at the start of his next turn. Geryon dies only if he starts his turn with 0 hit points and doesn't regenerate." }
        ],
        actions: [
            { name: "Multiattack", description: "Geryon makes two attacks: one with his claws and one with his stinger." },
            { name: "Claws", description: "Melee Weapon Attack: +16 to hit, reach 15 ft., one target. Hit: 23 (4d6+9) slashing damage. If the target is Large or smaller, it is grappled (DC 24) and is restrained until the grapple ends. Geryon can grapple one creature at a time." },
            { name: "Stinger", description: "Melee Weapon Attack: +16 to hit, reach 20 ft., one creature. Hit: 14 (2d4+9) piercing damage, and the target must succeed on a DC 21 Constitution saving throw or take 13 (2d12) poison damage and become poisoned until it finishes a short or long rest. The target's hit point maximum is reduced by an amount equal to half the poison damage it takes. If its hit point maximum drops to 0, it dies. This reduction lasts until the poisoned condition is removed." },
            { name: "Teleport", description: "Geryon magically teleports, along with any equipment he is wearing and carrying, up to 120 feet to an unoccupied space he can see." }
        ],
        legendaryActions: [
            { name: "Infernal Glare", description: "Geryon targets one creature he can see within 60 feet of him. If the target can see Geryon, the target must succeed on a DC 23 Wisdom saving throw or become frightened of Geryon until the end of its next turn." },
            { name: "Swift Sting (Costs 2 Actions)", description: "Geryon makes one stinger attack." },
            { name: "Teleport", description: "Geryon uses his Teleport action." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 21,
            spells: {
                atWill: ["alter self", "detect magic", "geas", "ice storm", "invisibility (self only)", "locate object", "suggestion", "wall of ice"]
            }
        }
    },
    "hutijin": {
        name: "Hutijin",
        source: "MToF",
        size: "large",
        type: "fiend",
        subtype: "devil",
        alignment: "lawful evil",
        ac: 19,
        acType: "natural armor",
        hp: 200,
        hitDice: "16d10+112",
        speed: { walk: 30, fly: 60 },
        abilityScores: { str: 27, dex: 15, con: 25, int: 23, wis: 19, cha: 25 },
        savingThrows: { dex: 9, con: 14, wis: 11 },
        skills: { intimidation: 14, perception: 11 },
        damageResistances: ["cold; bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "poisoned"],
        senses: ["truesight 120 ft."],
        languages: "all, telepathy 120 ft.",
        cr: 21,
        environment: ["nine hells"],
        role: "boss",
        tags: ["fiend", "devil", "archdevil", "legendary"],
        traits: [
            { name: "Infernal Despair", description: "Each creature within 15 feet of Hutijin that isn't a devil makes saving throws with disadvantage." },
            { name: "Legendary Resistance (3/Day)", description: "If Hutijin fails a saving throw, he can choose to succeed instead." },
            { name: "Magic Resistance", description: "Hutijin has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "Hutijin's weapon attacks are magical." },
            { name: "Regeneration", description: "Hutijin regains 20 hit points at the start of his turn. If he takes radiant damage, this trait doesn't function at the start of his next turn. Hutijin dies only if he starts his turn with 0 hit points and doesn't regenerate." }
        ],
        actions: [
            { name: "Multiattack", description: "Hutijin makes four attacks: one with his bite, one with his claw, one with his mace, and one with his tail." },
            { name: "Bite", description: "Melee Weapon Attack: +15 to hit, reach 5 ft., one target. Hit: 15 (2d6+8) piercing damage. The target must succeed on a DC 22 Constitution saving throw or become poisoned. While poisoned in this way, the target can't regain hit points, and it takes 10 (3d6) poison damage at the start of each of its turns. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." },
            { name: "Claw", description: "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 17 (2d8+8) slashing damage." },
            { name: "Mace", description: "Melee Weapon Attack: +15 to hit, reach 5 ft., one target. Hit: 15 (2d6+8) bludgeoning damage." },
            { name: "Tail", description: "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 19 (2d10+8) bludgeoning damage." },
            { name: "Teleport", description: "Hutijin magically teleports, along with any equipment he is wearing and carrying, up to 120 feet to an unoccupied space he can see." }
        ],
        legendaryActions: [
            { name: "Attack", description: "Hutijin makes one melee attack." },
            { name: "Lightning Storm (Costs 2 Actions)", description: "Hutijin releases lightning in a 20-foot radius. All other creatures in that area must each make a DC 22 Dexterity saving throw, taking 18 (4d8) lightning damage on a failed save, or half as much damage on a successful one." },
            { name: "Teleport", description: "Hutijin uses his Teleport action." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 22,
            spells: {
                atWill: ["alter self", "detect magic", "hold monster", "invisibility (self only)", "lightning bolt", "suggestion", "wall of fire"],
                "3/day": ["dispel magic"],
                "1/day each": ["heal", "symbol (hopelessness only)"]
            }
        }
    },
    "titivilus": {
        name: "Titivilus",
        source: "MToF",
        size: "medium",
        type: "fiend",
        subtype: "devil",
        alignment: "lawful evil",
        ac: 20,
        acType: "natural armor",
        hp: 150,
        hitDice: "20d8+60",
        speed: { walk: 40, fly: 60 },
        abilityScores: { str: 19, dex: 22, con: 17, int: 24, wis: 22, cha: 26 },
        savingThrows: { dex: 11, con: 8, wis: 11, cha: 13 },
        skills: { deception: 13, insight: 11, intimidation: 13, persuasion: 13 },
        damageResistances: ["cold; bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "poisoned"],
        senses: ["darkvision 120 ft."],
        languages: "all, telepathy 120 ft.",
        cr: 16,
        environment: ["nine hells"],
        role: "controller",
        tags: ["fiend", "devil", "archdevil", "legendary"],
        traits: [
            { name: "Legendary Resistance (3/Day)", description: "If Titivilus fails a saving throw, he can choose to succeed instead." },
            { name: "Magic Resistance", description: "Titivilus has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "Titivilus's weapon attacks are magical." },
            { name: "Regeneration", description: "Titivilus regains 10 hit points at the start of his turn. If he takes cold or radiant damage, this trait doesn't function at the start of his next turn. Titivilus dies only if he starts his turn with 0 hit points and doesn't regenerate." },
            { name: "Ventriloquism", description: "Whenever Titivilus speaks, he can choose a point within 60 feet; his voice emanates from that point." }
        ],
        actions: [
            { name: "Multiattack", description: "Titivilus makes one sword attack and uses his Frightful Word once." },
            { name: "Silver Sword", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 8 (1d8+4) slashing damage plus 16 (3d10) necrotic damage. If the target is a creature, its hit point maximum is reduced by an amount equal to the necrotic damage. This reduction lasts until the target finishes a long rest." },
            { name: "Frightful Word", description: "Titivilus targets one creature he can see within 10 feet of him. The target must succeed on a DC 21 Wisdom saving throw or become frightened for 1 minute. While frightened in this way, the target must take the Dash action and move away from Titivilus by the safest available route on each of its turns, unless there is nowhere to move, in which case it needn't take the Dash action. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." },
            { name: "Teleport", description: "Titivilus magically teleports, along with any equipment he is wearing and carrying, up to 120 feet to an unoccupied space he can see." },
            { name: "Twisting Words", description: "Titivilus targets one creature he can see within 60 feet of him. The target must make a DC 21 Charisma saving throw. On a failure, the target is charmed by Titivilus for 1 minute. The charmed target can repeat the saving throw if Titivilus deals any damage to it. A creature that succeeds on the saving throw is immune to this ability for 24 hours." }
        ],
        legendaryActions: [
            { name: "Corrupting Guidance", description: "Titivilus uses Twisting Words. Alternatively, he targets one creature charmed by him; that charmed target must make a DC 21 Charisma saving throw. On a failure, Titivilus decides how the target acts during its next turn." },
            { name: "Teleport", description: "Titivilus uses his Teleport action." },
            { name: "Assault (Costs 2 Actions)", description: "Titivilus makes one sword attack." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 21,
            spells: {
                atWill: ["alter self", "animate dead", "bestow curse", "confusion", "major image", "modify memory", "nondetection", "sending", "suggestion"],
                "3/day each": ["greater invisibility", "mislead"],
                "1/day each": ["feeblemind", "symbol (discord or sleep only)"]
            }
        }
    }
};
