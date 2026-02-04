// Expansion Pack 37 - More Creatures
// Additional monsters for comprehensive coverage

const MONSTERS_EXPANSION37 = {
    // ===== More NPCs =====
    
    
    
    
    "spy": {
        name: "Spy",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 12,
        hp: 27,
        hitDice: "6d8",
        speed: { walk: 30 },
        abilityScores: { str: 10, dex: 15, con: 10, int: 12, wis: 14, cha: 16 },
        skills: { deception: 5, insight: 4, investigation: 5, perception: 6, persuasion: 5, sleight: 4, stealth: 4 },
        senses: [],
        languages: "any two languages",
        cr: 1,
        environment: ["urban"],
        role: "lurker",
        tags: ["humanoid", "npc"],
        traits: [
            { name: "Cunning Action", description: "On each of its turns, the spy can use a bonus action to take the Dash, Disengage, or Hide action." },
            { name: "Sneak Attack (1/Turn)", description: "The spy deals an extra 7 (2d6) damage when it hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 feet of an ally of the spy that isn't incapacitated and the spy doesn't have disadvantage on the attack roll." }
        ],
        actions: [
            { name: "Multiattack", description: "The spy makes two melee attacks." },
            { name: "Shortsword", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6+2) piercing damage." },
            { name: "Hand Crossbow", description: "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 5 (1d6+2) piercing damage." }
        ]
    }};
