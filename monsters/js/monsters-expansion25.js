// Expansion Pack 25 - More Creatures
// Comprehensive coverage continues

const MONSTERS_EXPANSION25 = {
    // ===== More Underdark Creatures =====
    "deep-gnome-svirfneblin": {
        name: "Deep Gnome (Svirfneblin)",
        source: "MM",
        size: "small",
        type: "humanoid",
        subtype: "gnome",
        alignment: "neutral good",
        ac: 15,
        acType: "chain shirt",
        hp: 16,
        hitDice: "3d6+6",
        speed: { walk: 20 },
        abilityScores: { str: 15, dex: 14, con: 14, int: 12, wis: 10, cha: 9 },
        skills: { investigation: 3, perception: 2, stealth: 4 },
        senses: ["darkvision 120 ft."],
        languages: "Gnomish, Terran, Undercommon",
        cr: 0.5,
        environment: ["underdark"],
        role: "soldier",
        tags: ["humanoid", "gnome"],
        traits: [
            { name: "Stone Camouflage", description: "The gnome has advantage on Dexterity (Stealth) checks made to hide in rocky terrain." },
            { name: "Gnome Cunning", description: "The gnome has advantage on Intelligence, Wisdom, and Charisma saving throws against magic." }
        ],
        actions: [
            { name: "War Pick", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8+2) piercing damage." },
            { name: "Poisoned Dart", description: "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one creature. Hit: 4 (1d4+2) piercing damage, and the target must succeed on a DC 12 Constitution saving throw or be poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." }
        ],
        spellcasting: {
            innate: true,
            ability: "int",
            dc: 11,
            spells: {
                atWill: ["nondetection (self only)"],
                "1/day each": ["blindness/deafness", "blur", "disguise self"]
            }
        }
    },
    
    
    

    // ===== More Creatures =====
    
    
    

    // ===== More Misc =====
    
    
};
