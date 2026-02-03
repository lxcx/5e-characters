// Expansion Pack 56 - More Missing Creatures from MToF
// Additional creatures

const MONSTERS_EXPANSION56 = {
    "giff": {
        name: "Giff",
        source: "MToF",
        size: "medium",
        type: "humanoid",
        alignment: "lawful neutral",
        ac: 16,
        acType: "breastplate",
        hp: 60,
        hitDice: "8d8+24",
        speed: { walk: 30 },
        abilityScores: { str: 18, dex: 14, con: 17, int: 11, wis: 12, cha: 12 },
        senses: [],
        languages: "Common",
        cr: 3,
        environment: ["any"],
        role: "soldier",
        tags: ["humanoid"],
        traits: [
            { name: "Headfirst Charge", description: "The giff can try to knock a creature over; if the giff moves at least 20 feet in a straight line that ends within 5 feet of a Large or smaller creature, that creature must succeed on a DC 14 Strength saving throw or take 7 (2d6) bludgeoning damage and be knocked prone." },
            { name: "Firearms Knowledge", description: "The giff's mastery of its weapons enables it to ignore the loading property of muskets and pistols." }
        ],
        actions: [
            { name: "Multiattack", description: "The giff makes two pistol attacks." },
            { name: "Longsword", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8+4) slashing damage, or 9 (1d10+4) slashing damage if used with two hands." },
            { name: "Musket", description: "Ranged Weapon Attack: +4 to hit, range 40/120 ft., one target. Hit: 8 (1d12+2) piercing damage." },
            { name: "Pistol", description: "Ranged Weapon Attack: +4 to hit, range 30/90 ft., one target. Hit: 7 (1d10+2) piercing damage." },
            { name: "Fragmentation Grenade (1/Day)", description: "The giff throws a grenade up to 60 feet. Each creature within 20 feet of the grenade's detonation must make a DC 15 Dexterity saving throw, taking 17 (5d6) piercing damage on a failed save, or half as much damage on a successful one." }
        ]
    },
    "marut": {
        name: "Marut",
        source: "MToF",
        size: "large",
        type: "construct",
        subtype: "inevitable",
        alignment: "lawful neutral",
        ac: 22,
        acType: "natural armor",
        hp: 432,
        hitDice: "32d10+256",
        speed: { walk: 40, fly: 30 },
        abilityScores: { str: 28, dex: 12, con: 26, int: 19, wis: 15, cha: 18 },
        savingThrows: { int: 12, wis: 10, cha: 12 },
        skills: { insight: 10, intimidation: 12, perception: 10 },
        damageResistances: ["thunder; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["charmed", "frightened", "paralyzed", "poisoned", "unconscious"],
        senses: ["darkvision 60 ft."],
        languages: "all but rarely speaks",
        cr: 25,
        environment: ["any"],
        role: "brute",
        tags: ["construct", "inevitable"],
        traits: [
            { name: "Immutable Form", description: "The marut is immune to any spell or effect that would alter its form." },
            { name: "Legendary Resistance (3/Day)", description: "If the marut fails a saving throw, it can choose to succeed instead." },
            { name: "Magic Resistance", description: "The marut has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack", description: "The marut makes two slam attacks." },
            { name: "Unerring Slam", description: "Melee Weapon Attack: automatic hit, reach 5 ft., one target. Hit: 60 force damage, and the target is pushed up to 5 feet away from the marut if it is Huge or smaller." },
            { name: "Blazing Edict (Recharge 5-6)", description: "Arcane energy emanates from the marut's chest in a 60-foot cube. Every creature in that area takes 45 radiant damage. Each creature that takes any of this damage must succeed on a DC 20 Wisdom saving throw or be stunned until the end of the marut's next turn." },
            { name: "Plane Shift", description: "The marut casts plane shift, requiring no material components and using Intelligence as the spellcasting ability. The marut can cast the spell normally, or it can cast the spell on an unwilling creature it can see within 60 feet of it. If it uses the latter option, the targeted creature must succeed on a DC 20 Charisma saving throw or be banished to a teleportation circle in the Hall of Concordance in Sigil." }
        ]
    },
    "oinoloth": {
        name: "Oinoloth",
        source: "MToF",
        size: "medium",
        type: "fiend",
        subtype: "yugoloth",
        alignment: "neutral evil",
        ac: 17,
        acType: "natural armor",
        hp: 126,
        hitDice: "12d8+72",
        speed: { walk: 40 },
        abilityScores: { str: 19, dex: 17, con: 23, int: 17, wis: 16, cha: 19 },
        savingThrows: { con: 10, wis: 7 },
        skills: { deception: 8, intimidation: 8, perception: 7 },
        damageResistances: ["cold", "fire", "lightning; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["acid", "poison"],
        conditionImmunities: ["poisoned"],
        senses: ["blindsight 60 ft.", "darkvision 60 ft."],
        languages: "Abyssal, Infernal, telepathy 60 ft.",
        cr: 12,
        environment: ["gehenna"],
        role: "controller",
        tags: ["fiend", "yugoloth"],
        traits: [
            { name: "Bringer of Plagues", description: "The oinoloth can use a bonus action to infect a target it is grappling with one of the diseases from the contagion spell." },
            { name: "Magic Resistance", description: "The oinoloth has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "The oinoloth's weapon attacks are magical." }
        ],
        actions: [
            { name: "Multiattack", description: "The oinoloth makes two claw attacks and uses Transfixing Gaze." },
            { name: "Claw", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 14 (3d6+4) slashing damage plus 22 (4d10) necrotic damage." },
            { name: "Corrupted Healing (Recharge 6)", description: "The oinoloth touches one willing creature within 5 feet of it. The target regains all its hit points. In addition, the oinoloth can end one disease on the target or remove one of the following conditions from it: blinded, deafened, paralyzed, or poisoned. The target then gains 1 level of exhaustion, and its hit point maximum is reduced by 7 (2d6). This reduction can be removed only by a wish spell or by casting greater restoration on the target three times within the same hour. The target dies if its hit point maximum is reduced to 0." },
            { name: "Transfixing Gaze", description: "The oinoloth targets one creature it can see within 30 feet of it. The target must succeed on a DC 16 Wisdom saving throw against this magic or be charmed for 1 minute. While charmed in this way, the target is incapacitated and ignores the attacks and other harmful effects of the oinoloth's allies. The charmed target can repeat the saving throw if another creature deals damage to it, ending the effect on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to the oinoloth's gaze for the next 24 hours." },
            { name: "Teleport", description: "The oinoloth magically teleports, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 16,
            spells: {
                atWill: ["darkness", "detect magic", "dispel magic", "invisibility (self only)"],
                "1/day each": ["feeblemind", "globe of invulnerability", "wall of fire", "wall of ice"]
            }
        }
    },
    "steel-predator": {
        name: "Steel Predator",
        source: "MToF",
        size: "large",
        type: "construct",
        alignment: "lawful evil",
        ac: 20,
        acType: "natural armor",
        hp: 207,
        hitDice: "18d10+108",
        speed: { walk: 40 },
        abilityScores: { str: 24, dex: 17, con: 22, int: 4, wis: 14, cha: 6 },
        skills: { perception: 7, stealth: 8, survival: 7 },
        damageResistances: ["cold", "lightning", "necrotic", "thunder"],
        damageImmunities: ["poison", "psychic; bludgeoning, piercing, and slashing from nonmagical attacks"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "petrified", "poisoned", "stunned"],
        senses: ["blindsight 30 ft.", "darkvision 60 ft."],
        languages: "understands Modron and the language of its owner but can't speak",
        cr: 16,
        environment: ["any"],
        role: "brute",
        tags: ["construct"],
        traits: [
            { name: "Magic Resistance", description: "The steel predator has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "The steel predator's weapon attacks are magical." }
        ],
        actions: [
            { name: "Multiattack", description: "The steel predator makes three attacks: one with its bite and two with its claw." },
            { name: "Bite", description: "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 14 (2d6+7) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 16 (2d8+7) slashing damage." },
            { name: "Stunning Roar (Recharge 5-6)", description: "The steel predator emits a roar in a 60-foot cone. Each creature in that area must make a DC 19 Constitution saving throw. On a failed save, a creature takes 27 (5d10) thunder damage, drops everything it's holding, and is stunned for 1 minute. On a successful save, a creature takes half as much damage but isn't stunned. The stunned creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." }
        ],
        spellcasting: {
            innate: true,
            ability: "wis",
            spells: {
                "3/day each": ["dimension door (self only)", "plane shift (self only)"]
            }
        }
    },
    "stone-cursed": {
        name: "Stone Cursed",
        source: "MToF",
        size: "medium",
        type: "construct",
        alignment: "lawful evil",
        ac: 17,
        acType: "natural armor",
        hp: 19,
        hitDice: "3d8+6",
        speed: { walk: 10 },
        abilityScores: { str: 16, dex: 5, con: 14, int: 5, wis: 8, cha: 7 },
        damageVulnerabilities: ["bludgeoning"],
        damageImmunities: ["poison"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "petrified", "poisoned"],
        senses: [],
        languages: "the languages it knew in life",
        cr: 1,
        environment: ["any"],
        role: "soldier",
        tags: ["construct"],
        traits: [
            { name: "Cunning Opportunist", description: "The stone cursed has advantage on the attack rolls of opportunity attacks." },
            { name: "False Appearance", description: "While the stone cursed remains motionless, it is indistinguishable from a normal statue." }
        ],
        actions: [
            { name: "Petrifying Claws", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 12 (2d8+3) slashing damage. If the target is a creature, it must succeed on a DC 12 Constitution saving throw, or it begins to turn to stone and is restrained until the end of its next turn, when it must repeat the saving throw. The effect ends if the second save is successful; otherwise the target is petrified for 24 hours." }
        ]
    }
};
