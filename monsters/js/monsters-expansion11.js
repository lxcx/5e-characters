// Expansion Pack 11 - Even More Comprehensive
// Filling remaining gaps

const MONSTERS_EXPANSION11 = {
    // ===== More Elementals =====
    
    
    
    
    

    // ===== More Fey =====
    
    
    
    

    // ===== More Sphinxes =====
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
        tags: ["monstrosity", "sphinx"],
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

    // ===== More Misc =====
    
    
    
};
