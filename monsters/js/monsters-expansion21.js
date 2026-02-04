// Expansion Pack 21 - More Creatures
// Continuing comprehensive coverage

const MONSTERS_EXPANSION21 = {
    // ===== More Constructs =====
    
    
    

    // ===== More Undead =====
    
    
    

    // ===== More Fiends =====
    "moloch": {
        name: "Moloch",
        source: "MToF",
        size: "large",
        type: "fiend",
        subtype: "devil",
        alignment: "lawful evil",
        ac: 19,
        acType: "natural armor",
        hp: 253,
        hitDice: "22d10+132",
        speed: { walk: 30 },
        abilityScores: { str: 26, dex: 19, con: 22, int: 21, wis: 18, cha: 23 },
        savingThrows: { dex: 11, con: 13, wis: 11, cha: 13 },
        skills: { deception: 13, intimidation: 13, perception: 11 },
        damageResistances: ["cold; bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "poisoned"],
        senses: ["darkvision 120 ft."],
        languages: "all, telepathy 120 ft.",
        cr: 21,
        environment: ["nine hells"],
        role: "brute",
        tags: ["fiend", "devil", "archdevil"],
        traits: [
            { name: "Legendary Resistance (3/Day)", description: "If Moloch fails a saving throw, he can choose to succeed instead." },
            { name: "Magic Resistance", description: "Moloch has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "Moloch's weapon attacks are magical." },
            { name: "Regeneration", description: "Moloch regains 20 hit points at the start of his turn. If he takes radiant damage, this trait doesn't function at the start of his next turn. Moloch dies only if he starts his turn with 0 hit points and doesn't regenerate." }
        ],
        actions: [
            { name: "Multiattack", description: "Moloch makes three attacks: one with his bite, one with his claw, and one with his whip." },
            { name: "Bite", description: "Melee Weapon Attack: +15 to hit, reach 5 ft., one target. Hit: 26 (4d8+8) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 17 (2d8+8) slashing damage." },
            { name: "Many-Tailed Whip", description: "Melee Weapon Attack: +15 to hit, reach 30 ft., one target. Hit: 13 (2d4+8) slashing damage plus 11 (2d10) lightning damage. If the target is a creature, it must succeed on a DC 24 Strength saving throw or be pulled up to 30 feet in a straight line toward Moloch." },
            { name: "Breath of Despair (Recharge 5-6)", description: "Moloch exhales in a 30-foot cube. Each creature in that area must succeed on a DC 21 Wisdom saving throw or take 27 (5d10) psychic damage, drop whatever it is holding, and become frightened for 1 minute. While frightened in this way, a creature must take the Dash action and move away from Moloch by the safest available route on each of its turns, unless there is nowhere to move, in which case it needn't take the Dash action. If the creature ends its turn in a location where it doesn't have line of sight to Moloch, the creature can repeat the saving throw. On a success, the effect ends." }
        ],
        legendaryActions: [
            { name: "Attack", description: "Moloch makes one claw attack or uses his whip." },
            { name: "Teleport", description: "Moloch magically teleports to an unoccupied space he can see within 120 feet of him." },
            { name: "Cast a Spell (Costs 2 Actions)", description: "Moloch uses Spellcasting." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 21,
            spells: {
                atWill: ["alter self (can become Medium when using this spell)", "animate dead", "burning hands", "confusion", "detect magic", "fly", "geas", "major image", "stinking cloud", "suggestion", "wall of fire"],
                "1/day": ["flame strike", "symbol (hopelessness only)"]
            }
        }
    }};
