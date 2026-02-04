// Expansion Pack 43 - More Creatures
// Additional monsters

const MONSTERS_EXPANSION43 = {
    // ===== More Plants =====
    
    
    
    
    "vine-blight": {
        name: "Vine Blight",
        source: "MM",
        size: "medium",
        type: "plant",
        alignment: "neutral evil",
        ac: 12,
        acType: "natural armor",
        hp: 26,
        hitDice: "4d8+8",
        speed: { walk: 10 },
        abilityScores: { str: 15, dex: 8, con: 14, int: 5, wis: 10, cha: 3 },
        skills: { stealth: 1 },
        conditionImmunities: ["blinded", "deafened"],
        senses: ["blindsight 60 ft. (blind beyond this radius)"],
        languages: "Common",
        cr: "1/2",
        environment: ["forest"],
        role: "controller",
        tags: ["plant", "blight"],
        traits: [
            { name: "False Appearance", description: "While the blight remains motionless, it is indistinguishable from a tangle of vines." }
        ],
        actions: [
            { name: "Constrict", description: "Melee Weapon Attack: +4 to hit, reach 10 ft., one target. Hit: 9 (2d6+2) bludgeoning damage, and a Large or smaller target is grappled (escape DC 12). Until this grapple ends, the target is restrained, and the blight can't constrict another target." },
            { name: "Entangling Plants (Recharge 5-6)", description: "Grasping roots and vines sprout in a 15-foot radius centered on the blight, withering away after 1 minute. For the duration, that area is difficult terrain for nonplant creatures. In addition, each creature of the blight's choice in that area when the plants appear must succeed on a DC 12 Strength saving throw or become restrained. A creature can use its action to make a DC 12 Strength check, freeing itself or another entangled creature within reach on a success." }
        ]
    },
    "needle-blight": {
        name: "Needle Blight",
        source: "MM",
        size: "medium",
        type: "plant",
        alignment: "neutral evil",
        ac: 12,
        acType: "natural armor",
        hp: 11,
        hitDice: "2d8+2",
        speed: { walk: 30 },
        abilityScores: { str: 12, dex: 12, con: 13, int: 4, wis: 8, cha: 3 },
        conditionImmunities: ["blinded", "deafened"],
        senses: ["blindsight 60 ft. (blind beyond this radius)"],
        languages: "understands Common but can't speak",
        cr: "1/4",
        environment: ["forest"],
        role: "artillery",
        tags: ["plant", "blight"],
        actions: [
            { name: "Claws", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4+1) piercing damage." },
            { name: "Needles", description: "Ranged Weapon Attack: +3 to hit, range 30/60 ft., one target. Hit: 8 (2d6+1) piercing damage." }
        ]
    },
    "twig-blight": {
        name: "Twig Blight",
        source: "MM",
        size: "small",
        type: "plant",
        alignment: "neutral evil",
        ac: 13,
        acType: "natural armor",
        hp: 4,
        hitDice: "1d6+1",
        speed: { walk: 20 },
        abilityScores: { str: 6, dex: 13, con: 12, int: 4, wis: 8, cha: 3 },
        skills: { stealth: 3 },
        damageVulnerabilities: ["fire"],
        conditionImmunities: ["blinded", "deafened"],
        senses: ["blindsight 60 ft. (blind beyond this radius)"],
        languages: "understands Common but can't speak",
        cr: "1/8",
        environment: ["forest"],
        role: "minion",
        tags: ["plant", "blight"],
        traits: [
            { name: "False Appearance", description: "While the blight remains motionless, it is indistinguishable from a dead shrub." }
        ],
        actions: [
            { name: "Claws", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4+1) piercing damage." }
        ]
    },

    // ===== More Undead =====
    
    
    
};
