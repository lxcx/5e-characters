// Expansion Pack 38 - More Creatures
// Additional monsters

const MONSTERS_EXPANSION38 = {
    // ===== More Classic Monsters =====
    "androsphinx": {
        name: "Androsphinx",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "lawful neutral",
        ac: 17,
        acType: "natural armor",
        hp: 199,
        hitDice: "19d10+95",
        speed: { walk: 40, fly: 60 },
        abilityScores: { str: 22, dex: 10, con: 20, int: 16, wis: 18, cha: 23 },
        savingThrows: { dex: 6, con: 11, int: 9, wis: 10 },
        skills: { arcana: 9, perception: 10, religion: 15 },
        damageImmunities: ["psychic; bludgeoning, piercing, and slashing from nonmagical attacks"],
        conditionImmunities: ["charmed", "frightened"],
        senses: ["truesight 120 ft."],
        languages: "Common, Sphinx",
        cr: 17,
        environment: ["desert"],
        role: "controller",
        tags: ["monstrosity", "sphinx", "spellcaster"],
        traits: [
            { name: "Inscrutable", description: "The sphinx is immune to any effect that would sense its emotions or read its thoughts, as well as any divination spell that it refuses. Wisdom (Insight) checks made to ascertain the sphinx's intentions or sincerity have disadvantage." },
            { name: "Magic Weapons", description: "The sphinx's weapon attacks are magical." }
        ],
        actions: [
            { name: "Multiattack", description: "The sphinx makes two claw attacks." },
            { name: "Claw", description: "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 17 (2d10+6) slashing damage." },
            { name: "Roar (3/Day)", description: "The sphinx emits a magical roar. Each time it roars before finishing a long rest, the roar is louder and the effect is different. First Roar: Each creature within 500 feet that can hear the roar must succeed on a DC 18 Wisdom saving throw or be frightened for 1 minute. Second Roar: Each creature within 500 feet that can hear the roar must succeed on a DC 18 Wisdom saving throw or be paralyzed with fear and deafened for 1 minute. Third Roar: Each creature within 500 feet that can hear the roar must make a DC 18 Constitution saving throw. On a failed save, a creature takes 44 (8d10) thunder damage and is knocked prone. On a successful save, the creature takes half as much damage and isn't knocked prone." }
        ],
        legendaryActions: [
            { name: "Claw Attack", description: "The sphinx makes one claw attack." },
            { name: "Teleport (Costs 2 Actions)", description: "The sphinx magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see." },
            { name: "Cast a Spell (Costs 3 Actions)", description: "The sphinx casts a spell from its list of prepared spells, using a spell slot as normal." }
        ],
        spellcasting: {
            ability: "wis",
            dc: 18,
            attack: 10,
            spells: {
                cantrips: ["sacred flame", "spare the dying", "thaumaturgy"],
                "1st": { slots: 4, spells: ["command", "detect evil and good", "detect magic"] },
                "2nd": { slots: 3, spells: ["lesser restoration", "zone of truth"] },
                "3rd": { slots: 3, spells: ["dispel magic", "tongues"] },
                "4th": { slots: 3, spells: ["banishment", "freedom of movement"] },
                "5th": { slots: 2, spells: ["flame strike", "greater restoration"] },
                "6th": { slots: 1, spells: ["heroes' feast"] }
            }
        }
    },
    "gynosphinx": {
        name: "Gynosphinx",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "lawful neutral",
        ac: 17,
        acType: "natural armor",
        hp: 136,
        hitDice: "16d10+48",
        speed: { walk: 40, fly: 60 },
        abilityScores: { str: 18, dex: 15, con: 16, int: 18, wis: 18, cha: 18 },
        skills: { arcana: 12, history: 12, perception: 8, religion: 8 },
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["psychic"],
        conditionImmunities: ["charmed", "frightened"],
        senses: ["truesight 120 ft."],
        languages: "Common, Sphinx",
        cr: 11,
        environment: ["desert"],
        role: "controller",
        tags: ["monstrosity", "sphinx", "spellcaster"],
        traits: [
            { name: "Inscrutable", description: "The sphinx is immune to any effect that would sense its emotions or read its thoughts, as well as any divination spell that it refuses. Wisdom (Insight) checks made to ascertain the sphinx's intentions or sincerity have disadvantage." },
            { name: "Magic Weapons", description: "The sphinx's weapon attacks are magical." }
        ],
        actions: [
            { name: "Multiattack", description: "The sphinx makes two claw attacks." },
            { name: "Claw", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 13 (2d8+4) slashing damage." }
        ],
        legendaryActions: [
            { name: "Claw Attack", description: "The sphinx makes one claw attack." },
            { name: "Teleport (Costs 2 Actions)", description: "The sphinx magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see." },
            { name: "Cast a Spell (Costs 3 Actions)", description: "The sphinx casts a spell from its list of prepared spells, using a spell slot as normal." }
        ],
        spellcasting: {
            ability: "int",
            dc: 16,
            attack: 8,
            spells: {
                cantrips: ["mage hand", "minor illusion", "prestidigitation"],
                "1st": { slots: 4, spells: ["detect magic", "identify", "shield"] },
                "2nd": { slots: 3, spells: ["darkness", "locate object", "suggestion"] },
                "3rd": { slots: 3, spells: ["dispel magic", "remove curse", "tongues"] },
                "4th": { slots: 3, spells: ["banishment", "greater invisibility"] },
                "5th": { slots: 1, spells: ["legend lore"] }
            }
        }
    },
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
        environment: ["forest", "grassland"],
        role: "controller",
        tags: ["celestial", "spellcaster"],
        traits: [
            { name: "Magic Weapons", description: "The couatl's weapon attacks are magical." },
            { name: "Shielded Mind", description: "The couatl is immune to scrying and to any effect that would sense its emotions, read its thoughts, or detect its location." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one creature. Hit: 8 (1d6+5) piercing damage, and the target must succeed on a DC 13 Constitution saving throw or be poisoned for 24 hours. Until this poison ends, the target is unconscious. Another creature can use an action to shake the target awake." },
            { name: "Constrict", description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one Medium or smaller creature. Hit: 10 (2d6+3) bludgeoning damage, and the target is grappled (escape DC 15). Until this grapple ends, the target is restrained, and the couatl can't constrict another target." },
            { name: "Change Shape", description: "The couatl magically polymorphs into a humanoid or beast that has a challenge rating equal to or less than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the couatl's choice)." }
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
        tags: ["celestial", "spellcaster"],
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
        legendaryActions: [
            { name: "Hooves", description: "The unicorn makes one attack with its hooves." },
            { name: "Shimmering Shield (Costs 2 Actions)", description: "The unicorn creates a shimmering, magical field around itself or another creature it can see within 60 feet of it. The target gains a +2 bonus to AC until the end of the unicorn's next turn." },
            { name: "Heal Self (Costs 3 Actions)", description: "The unicorn magically regains 11 (2d8+2) hit points." }
        ],
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
        languages: "understands Celestial, Common, Elvish, and Sylvan but can't speak",
        cr: 2,
        environment: ["forest", "grassland", "mountain"],
        role: "skirmisher",
        tags: ["celestial"],
        actions: [
            { name: "Hooves", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6+4) bludgeoning damage." }
        ]
    },
    "nightmare": {
        name: "Nightmare",
        source: "MM",
        size: "large",
        type: "fiend",
        alignment: "neutral evil",
        ac: 13,
        acType: "natural armor",
        hp: 68,
        hitDice: "8d10+24",
        speed: { walk: 60, fly: 90 },
        abilityScores: { str: 18, dex: 15, con: 16, int: 10, wis: 13, cha: 15 },
        damageImmunities: ["fire"],
        senses: [],
        languages: "understands Abyssal, Common, and Infernal but can't speak",
        cr: 3,
        environment: ["nine hells", "abyss"],
        role: "skirmisher",
        tags: ["fiend"],
        traits: [
            { name: "Confer Fire Resistance", description: "The nightmare can grant resistance to fire damage to anyone riding it." },
            { name: "Illumination", description: "The nightmare sheds bright light in a 10-foot radius and dim light for an additional 10 feet." }
        ],
        actions: [
            { name: "Hooves", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8+4) bludgeoning damage plus 7 (2d6) fire damage." },
            { name: "Ethereal Stride", description: "The nightmare and up to three willing creatures within 5 feet of it magically enter the Ethereal Plane from the Material Plane, or vice versa." }
        ]
    }
};
