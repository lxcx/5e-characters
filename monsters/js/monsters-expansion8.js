// Expansion Pack 8 - Comprehensive Coverage
// More creatures from all sources

const MONSTERS_EXPANSION8 = {
    // ===== More Giants =====
    
    
    "fomorian": {
        name: "Fomorian",
        source: "MM",
        size: "huge",
        type: "giant",
        alignment: "chaotic evil",
        ac: 14,
        acType: "natural armor",
        hp: 149,
        hitDice: "13d12+65",
        speed: { walk: 30 },
        abilityScores: { str: 23, dex: 10, con: 20, int: 9, wis: 14, cha: 6 },
        skills: { perception: 8, stealth: 3 },
        senses: ["darkvision 120 ft."],
        languages: "Giant, Undercommon",
        cr: 8,
        environment: ["underdark"],
        role: "brute",
        tags: ["giant", "fey"],
        actions: [
            { name: "Multiattack", description: "The fomorian attacks twice with its greatclub or makes one greatclub attack and uses Evil Eye once." },
            { name: "Greatclub", description: "Melee Weapon Attack: +9 to hit, reach 15 ft., one target. Hit: 19 (3d8+6) bludgeoning damage." },
            { name: "Evil Eye", description: "The fomorian magically forces a creature it can see within 60 feet of it to make a DC 14 Charisma saving throw. The creature takes 27 (6d8) psychic damage on a failed save, or half as much damage on a successful one." },
            { name: "Curse of the Evil Eye (Recharges after a Short or Long Rest)", description: "With a stare, the fomorian uses Evil Eye, but on a failed save, the creature is also cursed with magical deformities. While cursed, the creature's speed is halved, and its hit point maximum is reduced by 3 (1d6) every 24 hours. The curse doesn't end until removed by the remove curse spell or similar magic." }
        ]
    },

    // ===== More Humanoids =====
    
    
    
    "bullywug": {
        name: "Bullywug",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "bullywug",
        alignment: "neutral evil",
        ac: 15,
        acType: "hide armor, shield",
        hp: 11,
        hitDice: "2d8+2",
        speed: { walk: 20, swim: 40 },
        abilityScores: { str: 12, dex: 12, con: 13, int: 7, wis: 10, cha: 7 },
        skills: { stealth: 3 },
        senses: [],
        languages: "Bullywug",
        cr: 0.25,
        environment: ["swamp"],
        role: "minion",
        tags: ["humanoid", "bullywug", "aquatic"],
        traits: [
            { name: "Amphibious", description: "The bullywug can breathe air and water." },
            { name: "Speak with Frogs and Toads", description: "The bullywug can communicate simple concepts to frogs and toads when it speaks in Bullywug." },
            { name: "Swamp Camouflage", description: "The bullywug has advantage on Dexterity (Stealth) checks made to hide in swampy terrain." },
            { name: "Standing Leap", description: "The bullywug's long jump is up to 20 feet and its high jump is up to 10 feet, with or without a running start." }
        ],
        actions: [
            { name: "Multiattack", description: "The bullywug makes two melee attacks: one with its bite and one with its spear." },
            { name: "Bite", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4+1) bludgeoning damage." },
            { name: "Spear", description: "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d6+1) piercing damage, or 5 (1d8+1) piercing damage if used with two hands to make a melee attack." }
        ]
    },
    

    // ===== More Aberrations =====
    
    
    "grell": {
        name: "Grell",
        source: "MM",
        size: "medium",
        type: "aberration",
        alignment: "neutral evil",
        ac: 12,
        hp: 55,
        hitDice: "10d8+10",
        speed: { walk: 10, fly: 30 },
        abilityScores: { str: 15, dex: 14, con: 13, int: 12, wis: 11, cha: 9 },
        skills: { perception: 4, stealth: 6 },
        damageImmunities: ["lightning"],
        conditionImmunities: ["blinded", "prone"],
        senses: ["blindsight 60 ft. (blind beyond this radius)"],
        languages: "Grell",
        cr: 3,
        environment: ["underdark"],
        role: "lurker",
        tags: ["aberration"],
        actions: [
            { name: "Multiattack", description: "The grell makes two attacks: one with its tentacles and one with its beak." },
            { name: "Tentacles", description: "Melee Weapon Attack: +4 to hit, reach 10 ft., one creature. Hit: 7 (1d10+2) piercing damage, and the target must succeed on a DC 11 Constitution saving throw or be poisoned for 1 minute. The poisoned target is paralyzed, and it can repeat the saving throw at the end of each of its turns, ending the effect on a success. The target is also grappled (escape DC 15). If the target is Medium or smaller, it is also restrained until this grapple ends." },
            { name: "Beak", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (2d4+2) piercing damage." }
        ]
    },

    // ===== More Constructs =====
    
    
    

    // ===== More Beasts =====
    
    
    
    
    
    
    
};
