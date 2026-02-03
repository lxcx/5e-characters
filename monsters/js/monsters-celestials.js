// Celestials and Angels
// Sources: MM

const MONSTERS_CELESTIALS = {
    // ===== Angels =====
    "solar": {
        name: "Solar",
        source: "MM",
        size: "large",
        type: "celestial",
        alignment: "lawful good",
        ac: 21,
        acType: "natural armor",
        hp: 243,
        hitDice: "18d10+144",
        speed: { walk: 50, fly: 150 },
        abilityScores: { str: 26, dex: 22, con: 26, int: 25, wis: 25, cha: 30 },
        savingThrows: { int: 14, wis: 14, cha: 17 },
        skills: { perception: 14 },
        damageResistances: ["radiant; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["necrotic", "poison"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "poisoned"],
        senses: ["truesight 120 ft."],
        languages: "all, telepathy 120 ft.",
        cr: 21,
        environment: ["celestial planes"],
        role: "leader",
        tags: ["celestial", "angel", "legendary"],
        traits: [
            { name: "Angelic Weapons", description: "The solar's weapon attacks are magical. When the solar hits with any weapon, the weapon deals an extra 6d8 radiant damage (included in the attack)." },
            { name: "Divine Awareness", description: "The solar knows if it hears a lie." },
            { name: "Magic Resistance", description: "The solar has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack", description: "The solar makes two greatsword attacks." },
            { name: "Greatsword", description: "Melee Weapon Attack: +15 to hit, reach 5 ft., one target. Hit: 22 (4d6+8) slashing damage plus 27 (6d8) radiant damage." },
            { name: "Slaying Longbow", description: "Ranged Weapon Attack: +13 to hit, range 150/600 ft., one target. Hit: 15 (2d8+6) piercing damage plus 27 (6d8) radiant damage. If the target is a creature that has 100 hit points or fewer, it must succeed on a DC 15 Constitution saving throw or die." },
            { name: "Flying Sword", description: "The solar releases its greatsword to hover magically in an unoccupied space within 5 feet of it. If the solar can see the sword, the solar can mentally command it as a bonus action to fly up to 50 feet and either make one attack against a target or return to the solar's hands." },
            { name: "Healing Touch (4/Day)", description: "The solar touches another creature. The target magically regains 40 (8d8+4) hit points and is freed from any curse, disease, poison, blindness, or deafness." }
        ],
        legendaryActions: {
            perRound: 3,
            actions: [
                { name: "Teleport", description: "The solar magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see." },
                { name: "Searing Burst (Costs 2 Actions)", description: "The solar emits magical, divine energy. Each creature of its choice in a 10-foot radius must make a DC 23 Dexterity saving throw, taking 14 (4d6) fire damage plus 14 (4d6) radiant damage on a failed save, or half as much damage on a successful one." },
                { name: "Blinding Gaze (Costs 3 Actions)", description: "The solar targets one creature it can see within 30 feet of it. If the target can see it, the target must succeed on a DC 15 Constitution saving throw or be blinded until magic such as the lesser restoration spell removes the blindness." }
            ]
        },
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 25,
            spells: {
                atWill: ["detect evil and good", "invisibility (self only)"],
                "3/day each": ["blade barrier", "dispel evil and good", "resurrection"],
                "1/day each": ["commune", "control weather"]
            }
        }
    },
    "planetar": {
        name: "Planetar",
        source: "MM",
        size: "large",
        type: "celestial",
        alignment: "lawful good",
        ac: 19,
        acType: "natural armor",
        hp: 200,
        hitDice: "16d10+112",
        speed: { walk: 40, fly: 120 },
        abilityScores: { str: 24, dex: 20, con: 24, int: 19, wis: 22, cha: 25 },
        savingThrows: { con: 12, wis: 11, cha: 12 },
        skills: { perception: 11 },
        damageResistances: ["radiant; bludgeoning, piercing, and slashing from nonmagical attacks"],
        conditionImmunities: ["charmed", "exhaustion", "frightened"],
        senses: ["truesight 120 ft."],
        languages: "all, telepathy 120 ft.",
        cr: 16,
        environment: ["celestial planes"],
        role: "soldier",
        tags: ["celestial", "angel"],
        traits: [
            { name: "Angelic Weapons", description: "The planetar's weapon attacks are magical. When the planetar hits with any weapon, the weapon deals an extra 5d8 radiant damage (included in the attack)." },
            { name: "Divine Awareness", description: "The planetar knows if it hears a lie." },
            { name: "Magic Resistance", description: "The planetar has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack", description: "The planetar makes two melee attacks." },
            { name: "Greatsword", description: "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 21 (4d6+7) slashing damage plus 22 (5d8) radiant damage." },
            { name: "Healing Touch (4/Day)", description: "The planetar touches another creature. The target magically regains 30 (6d8+3) hit points and is freed from any curse, disease, poison, blindness, or deafness." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 20,
            spells: {
                atWill: ["detect evil and good", "invisibility (self only)"],
                "3/day each": ["blade barrier", "dispel evil and good", "flame strike", "raise dead"],
                "1/day each": ["commune", "control weather", "insect plague"]
            }
        }
    },
    "deva": {
        name: "Deva",
        source: "MM",
        size: "medium",
        type: "celestial",
        alignment: "lawful good",
        ac: 17,
        acType: "natural armor",
        hp: 136,
        hitDice: "16d8+64",
        speed: { walk: 30, fly: 90 },
        abilityScores: { str: 18, dex: 18, con: 18, int: 17, wis: 20, cha: 20 },
        savingThrows: { wis: 9, cha: 9 },
        skills: { insight: 9, perception: 9 },
        damageResistances: ["radiant; bludgeoning, piercing, and slashing from nonmagical attacks"],
        conditionImmunities: ["charmed", "exhaustion", "frightened"],
        senses: ["darkvision 120 ft."],
        languages: "all, telepathy 120 ft.",
        cr: 10,
        environment: ["celestial planes"],
        role: "skirmisher",
        tags: ["celestial", "angel", "shapechanger"],
        traits: [
            { name: "Angelic Weapons", description: "The deva's weapon attacks are magical. When the deva hits with any weapon, the weapon deals an extra 4d8 radiant damage (included in the attack)." },
            { name: "Magic Resistance", description: "The deva has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack", description: "The deva makes two melee attacks." },
            { name: "Mace", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 7 (1d6+4) bludgeoning damage plus 18 (4d8) radiant damage." },
            { name: "Healing Touch (3/Day)", description: "The deva touches another creature. The target magically regains 20 (4d8+2) hit points and is freed from any curse, disease, poison, blindness, or deafness." },
            { name: "Change Shape", description: "The deva magically polymorphs into a humanoid or beast that has a challenge rating equal to or less than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the deva's choice)." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 17,
            spells: {
                atWill: ["detect evil and good"],
                "1/day each": ["commune", "raise dead"]
            }
        }
    },

    // ===== Other Celestials =====
    "couatl": {
        name: "Couatl",
        source: "MM",
        size: "medium",
        type: "celestial",
        alignment: "lawful good",
        ac: 19,
        acType: "natural armor",
        hp: 97,
        hitDice: "13d8+39",
        speed: { walk: 30, fly: 90 },
        abilityScores: { str: 16, dex: 20, con: 17, int: 18, wis: 20, cha: 18 },
        savingThrows: { con: 5, wis: 7, cha: 6 },
        damageResistances: ["radiant"],
        damageImmunities: ["psychic; bludgeoning, piercing, and slashing from nonmagical attacks"],
        senses: ["truesight 120 ft."],
        languages: "all, telepathy 120 ft.",
        cr: 4,
        environment: ["jungle", "forest"],
        role: "controller",
        tags: ["celestial", "shapechanger", "serpent"],
        traits: [
            { name: "Magic Weapons", description: "The couatl's weapon attacks are magical." },
            { name: "Shielded Mind", description: "The couatl is immune to scrying and to any effect that would sense its emotions, read its thoughts, or detect its location." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one creature. Hit: 8 (1d6+5) piercing damage, and the target must succeed on a DC 13 Constitution saving throw or be poisoned for 24 hours. Until this poison ends, the target is unconscious. Another creature can use an action to shake the target awake." },
            { name: "Constrict", description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one Medium or smaller creature. Hit: 10 (2d6+3) bludgeoning damage, and the target is grappled (escape DC 15). Until this grapple ends, the target is restrained, and the couatl can't constrict another target." },
            { name: "Change Shape", description: "The couatl magically polymorphs into a humanoid or beast that has a challenge rating equal to or less than its own, or back into its true form. It reverts to its true form if it dies." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 14,
            spells: {
                atWill: ["detect evil and good", "detect magic", "detect thoughts"],
                "3/day each": ["bless", "create food and water", "cure wounds", "lesser restoration", "protection from poison", "sanctuary", "shield"],
                "1/day each": ["dream", "greater restoration", "scrying"]
            }
        }
    },
    "pegasus": {
        name: "Pegasus",
        source: "MM",
        size: "large",
        type: "celestial",
        alignment: "chaotic good",
        ac: 12,
        hp: 59,
        hitDice: "7d10+21",
        speed: { walk: 60, fly: 90 },
        abilityScores: { str: 18, dex: 15, con: 16, int: 10, wis: 15, cha: 13 },
        savingThrows: { dex: 4, wis: 4, cha: 3 },
        skills: { perception: 6 },
        senses: [],
        languages: "Celestial, Common, Elvish, Sylvan",
        cr: 2,
        environment: ["forest", "grassland", "mountain"],
        role: "skirmisher",
        tags: ["celestial", "mount"],
        actions: [
            { name: "Hooves", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6+4) bludgeoning damage." }
        ]
    },
    "unicorn": {
        name: "Unicorn",
        source: "MM",
        size: "large",
        type: "celestial",
        alignment: "lawful good",
        ac: 12,
        hp: 67,
        hitDice: "9d10+18",
        speed: { walk: 50 },
        abilityScores: { str: 18, dex: 14, con: 15, int: 11, wis: 17, cha: 16 },
        damageImmunities: ["poison"],
        conditionImmunities: ["charmed", "paralyzed", "poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "Celestial, Elvish, Sylvan, telepathy 60 ft.",
        cr: 5,
        environment: ["forest"],
        role: "leader",
        tags: ["celestial", "legendary"],
        traits: [
            { name: "Charge", description: "If the unicorn moves at least 20 feet straight toward a target and then hits it with a horn attack on the same turn, the target takes an extra 9 (2d8) piercing damage. If the target is a creature, it must succeed on a DC 15 Strength saving throw or be knocked prone." },
            { name: "Magic Resistance", description: "The unicorn has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "The unicorn's weapon attacks are magical." }
        ],
        actions: [
            { name: "Multiattack", description: "The unicorn makes two attacks: one with its hooves and one with its horn." },
            { name: "Hooves", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6+4) bludgeoning damage." },
            { name: "Horn", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d8+4) piercing damage." },
            { name: "Healing Touch (3/Day)", description: "The unicorn touches another creature with its horn. The target magically regains 11 (2d8+2) hit points. In addition, the touch removes all diseases and neutralizes all poisons afflicting the target." },
            { name: "Teleport (1/Day)", description: "The unicorn magically teleports itself and up to three willing creatures it can see within 5 feet of it, along with any equipment they are wearing or carrying, to a location the unicorn is familiar with, up to 1 mile away." }
        ],
        legendaryActions: {
            perRound: 3,
            actions: [
                { name: "Hooves", description: "The unicorn makes one attack with its hooves." },
                { name: "Shimmering Shield (Costs 2 Actions)", description: "The unicorn creates a shimmering, magical field around itself or another creature it can see within 60 feet of it. The target gains a +2 bonus to AC until the end of the unicorn's next turn." },
                { name: "Heal Self (Costs 3 Actions)", description: "The unicorn magically regains 11 (2d8+2) hit points." }
            ]
        },
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 14,
            spells: {
                atWill: ["detect evil and good", "druidcraft", "pass without trace"],
                "1/day each": ["calm emotions", "dispel evil and good", "entangle"]
            }
        }
    },
    "empyrean": {
        name: "Empyrean",
        source: "MM",
        size: "huge",
        type: "celestial",
        subtype: "titan",
        alignment: "chaotic good (75%) or neutral evil (25%)",
        ac: 22,
        acType: "natural armor",
        hp: 313,
        hitDice: "19d12+190",
        speed: { walk: 50, fly: 50, swim: 50 },
        abilityScores: { str: 30, dex: 21, con: 30, int: 21, wis: 22, cha: 27 },
        savingThrows: { str: 17, int: 12, wis: 13, cha: 15 },
        skills: { insight: 13, persuasion: 15 },
        damageImmunities: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        senses: ["truesight 120 ft."],
        languages: "all",
        cr: 23,
        environment: ["celestial planes"],
        role: "brute",
        tags: ["celestial", "titan", "legendary"],
        traits: [
            { name: "Legendary Resistance (3/Day)", description: "If the empyrean fails a saving throw, it can choose to succeed instead." },
            { name: "Magic Resistance", description: "The empyrean has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "The empyrean's weapon attacks are magical." }
        ],
        actions: [
            { name: "Maul", description: "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 31 (6d6+10) bludgeoning damage. If the target is a creature, it must succeed on a DC 15 Constitution saving throw or be stunned until the end of the empyrean's next turn." },
            { name: "Bolt", description: "Ranged Spell Attack: +15 to hit, range 600 ft., one target. Hit: 24 (7d6) damage of one of the following types (empyrean's choice): acid, cold, fire, force, lightning, radiant, or thunder." }
        ],
        legendaryActions: {
            perRound: 3,
            actions: [
                { name: "Attack", description: "The empyrean makes one attack." },
                { name: "Bolster", description: "The empyrean bolsters all nonhostile creatures within 120 feet of it until the end of its next turn. Bolstered creatures can't be charmed or frightened, and they gain advantage on ability checks and saving throws until the end of the empyrean's next turn." },
                { name: "Trembling Strike (Costs 2 Actions)", description: "The empyrean strikes the ground with its maul, triggering an earth tremor. All other creatures on the ground within 60 feet of the empyrean must succeed on a DC 25 Strength saving throw or be knocked prone." }
            ]
        },
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 23,
            spells: {
                atWill: ["greater restoration", "pass without trace", "water breathing", "water walk"],
                "1/day each": ["commune", "dispel evil and good", "earthquake", "fire storm", "plane shift (self only)"]
            }
        }
    },

    // ===== Ki-rin =====
    "ki-rin": {
        name: "Ki-rin",
        source: "VGtM",
        size: "huge",
        type: "celestial",
        alignment: "lawful good",
        ac: 20,
        acType: "natural armor",
        hp: 152,
        hitDice: "16d12+48",
        speed: { walk: 60, fly: 120 },
        abilityScores: { str: 21, dex: 16, con: 16, int: 19, wis: 20, cha: 20 },
        skills: { insight: 9, perception: 9, religion: 8 },
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["blindsight 30 ft.", "darkvision 120 ft."],
        languages: "all, telepathy 120 ft.",
        cr: 12,
        environment: ["mountain", "celestial planes"],
        role: "leader",
        tags: ["celestial", "legendary", "spellcaster"],
        traits: [
            { name: "Legendary Resistance (3/Day)", description: "If the ki-rin fails a saving throw, it can choose to succeed instead." },
            { name: "Magic Resistance", description: "The ki-rin has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "The ki-rin's weapon attacks are magical." }
        ],
        actions: [
            { name: "Multiattack", description: "The ki-rin makes three attacks: two with its hooves and one with its horn." },
            { name: "Hoof", description: "Melee Weapon Attack: +9 to hit, reach 15 ft., one target. Hit: 10 (2d4+5) bludgeoning damage." },
            { name: "Horn", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 14 (2d8+5) piercing damage." }
        ],
        legendaryActions: {
            perRound: 3,
            actions: [
                { name: "Detect", description: "The ki-rin makes a Wisdom (Perception) check or a Wisdom (Insight) check." },
                { name: "Smite", description: "The ki-rin makes a hoof attack or casts sacred flame." },
                { name: "Move", description: "The ki-rin moves up to its half its speed without provoking opportunity attacks." }
            ]
        },
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 17,
            spells: {
                atWill: ["gaseous form", "major image (6th-level version)", "wind walk"],
                "1/day": ["create food and water"]
            }
        }
    }
};
