// Expansion Pack 47 - More Creatures
// Additional monsters

const MONSTERS_EXPANSION47 = {
    // ===== More Humanoids =====
    "kenku": {
        name: "Kenku",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "kenku",
        alignment: "chaotic neutral",
        ac: 13,
        hp: 13,
        hitDice: "3d8",
        speed: { walk: 30 },
        abilityScores: { str: 10, dex: 16, con: 10, int: 11, wis: 10, cha: 10 },
        skills: { deception: 4, perception: 2, stealth: 5 },
        senses: [],
        languages: "understands Auran and Common but speaks only through the use of its Mimicry trait",
        cr: "1/4",
        environment: ["urban", "forest"],
        role: "lurker",
        tags: ["humanoid", "kenku"],
        traits: [
            { name: "Ambusher", description: "In the first round of a combat, the kenku has advantage on attack rolls against any creature it surprised." },
            { name: "Mimicry", description: "The kenku can mimic any sounds it has heard, including voices. A creature that hears the sounds can tell they are imitations with a successful DC 14 Wisdom (Insight) check." }
        ],
        actions: [
            { name: "Shortsword", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6+3) piercing damage." },
            { name: "Shortbow", description: "Ranged Weapon Attack: +5 to hit, range 80/320 ft., one target. Hit: 6 (1d6+3) piercing damage." }
        ]
    }};
