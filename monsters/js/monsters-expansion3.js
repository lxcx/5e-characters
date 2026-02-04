// Expansion Pack 3 - Final push to 900+
// More classic creatures

const MONSTERS_EXPANSION3 = {
    // ===== Giants (more variants) =====
    
    
    
    
    
    

    // ===== More Undead =====
    
    
    
    
    "poltergeist": {
        name: "Poltergeist",
        source: "MM",
        size: "medium",
        type: "undead",
        alignment: "chaotic evil",
        ac: 12,
        hp: 22,
        hitDice: "5d8",
        speed: { walk: 0, fly: 50 },
        abilityScores: { str: 1, dex: 14, con: 11, int: 10, wis: 10, cha: 11 },
        damageResistances: ["acid", "cold", "fire", "lightning", "thunder; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["necrotic", "poison"],
        conditionImmunities: ["charmed", "exhaustion", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained", "unconscious"],
        senses: ["darkvision 60 ft."],
        languages: "understands all languages it knew in life but can't speak",
        cr: 2,
        environment: ["urban"],
        role: "controller",
        tags: ["undead", "incorporeal"],
        traits: [
            { name: "Incorporeal Movement", description: "The poltergeist can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object." },
            { name: "Invisibility", description: "The poltergeist is invisible." },
            { name: "Sunlight Sensitivity", description: "While in sunlight, the poltergeist has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Forceful Slam", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 10 (3d6) force damage." },
            { name: "Telekinetic Thrust", description: "The poltergeist targets a creature or unattended object within 30 feet of it. A creature must be Medium or smaller to be affected by this magic, and an object can weigh up to 150 pounds. If the target is a creature, the poltergeist makes a Charisma check contested by the target's Strength check. If the poltergeist wins the contest, the poltergeist hurls the target up to 30 feet in any direction, including upward. If the target then comes into contact with a hard surface or heavy object, the target takes 1d6 damage per 10 feet moved." }
        ]
    },

    // ===== Elementals =====
    
    
    
    
};
