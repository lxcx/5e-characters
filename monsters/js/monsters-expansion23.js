// Expansion Pack 23 - More Creatures
// Continuing comprehensive coverage

const MONSTERS_EXPANSION23 = {
    // ===== More Classic Monsters =====
    
    
    

    // ===== More Giants =====
    "storm-giant-quintessent": {
        name: "Storm Giant Quintessent",
        source: "VGtM",
        size: "huge",
        type: "giant",
        alignment: "chaotic good",
        ac: 12,
        hp: 230,
        hitDice: "20d12+100",
        speed: { walk: 50, fly: 50, swim: 50 },
        abilityScores: { str: 29, dex: 14, con: 20, int: 17, wis: 20, cha: 19 },
        savingThrows: { str: 14, con: 10, wis: 10, cha: 9 },
        skills: { arcana: 8, history: 8, perception: 10 },
        damageResistances: ["cold; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["lightning", "thunder"],
        senses: ["truesight 60 ft."],
        languages: "Common, Giant",
        cr: 16,
        environment: ["coastal", "underwater"],
        role: "artillery",
        tags: ["giant"],
        traits: [
            { name: "Amphibious", description: "The giant can breathe air and water." }
        ],
        actions: [
            { name: "Multiattack", description: "The giant makes two Lightning Sword attacks or uses Wind Javelin twice." },
            { name: "Lightning Sword", description: "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 40 (9d6+9) lightning damage." },
            { name: "Wind Javelin", description: "The giant coalesces wind into a javelin-like form and hurls it at a creature it can see within 600 feet of it. The javelin is considered a magic weapon and deals 19 (3d6+9) piercing damage to the target, striking unerringly. The javelin disappears after it hits." }
        ],
        legendaryActions: [
            { name: "Gust", description: "The giant targets a creature it can see within 60 feet of it and creates a magical gust of wind around it. The target must succeed on a DC 18 Strength saving throw or be pushed up to 20 feet in any horizontal direction the giant chooses." },
            { name: "Thunderbolt (Costs 2 Actions)", description: "The giant hurls a thunderbolt at a creature it can see within 600 feet of it. The target must make a DC 18 Dexterity saving throw, taking 22 (4d10) thunder damage on a failed save, or half as much damage on a successful one." },
            { name: "One with the Storm (Costs 3 Actions)", description: "The giant vanishes, dispersing itself into the storm surrounding its lair. The giant can end this effect at the start of any of its turns, becoming a giant once more and appearing in any location it chooses within its lair. While dispersed, the giant can't take any actions other than lair actions, and it can't be targeted by attacks, spells, or other effects. The giant can't use this ability outside its lair, nor can it use this ability if another creature is using a control weather spell or similar magic to quell the storm." }
        ]
    },
    "cloud-giant-smiling-one": {
        name: "Cloud Giant Smiling One",
        source: "VGtM",
        size: "huge",
        type: "giant",
        alignment: "chaotic neutral",
        ac: 15,
        acType: "natural armor",
        hp: 250,
        hitDice: "20d12+120",
        speed: { walk: 40 },
        abilityScores: { str: 26, dex: 12, con: 22, int: 15, wis: 16, cha: 17 },
        savingThrows: { con: 10, int: 6, cha: 7 },
        skills: { deception: 11, insight: 7, perception: 7, sleight: 9 },
        senses: [],
        languages: "Common, Giant",
        cr: 11,
        environment: ["mountain"],
        role: "controller",
        tags: ["giant", "spellcaster"],
        traits: [
            { name: "Keen Smell", description: "The giant has advantage on Wisdom (Perception) checks that rely on smell." }
        ],
        actions: [
            { name: "Multiattack", description: "The giant makes two attacks with its morningstar." },
            { name: "Morningstar", description: "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 21 (3d8+8) bludgeoning damage. The attack deals an extra 14 (4d6) damage if the giant has advantage on the attack roll." },
            { name: "Rock", description: "Ranged Weapon Attack: +12 to hit, range 60/240 ft., one target. Hit: 30 (4d10+8) bludgeoning damage. The attack deals an extra 14 (4d6) damage if the giant has advantage on the attack roll." },
            { name: "Change Shape", description: "The giant magically polymorphs into a beast or humanoid it has seen, or back into its true form. Any equipment the giant is wearing or carrying is absorbed by the new form. Its statistics, other than its size, are the same in each form. It reverts to its true form if it dies." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 15,
            spells: {
                atWill: ["detect magic", "fog cloud", "light", "minor illusion"],
                "3/day each": ["invisibility", "suggestion", "tongues"],
                "1/day each": ["gaseous form", "major image"]
            }
        }
    }
};
