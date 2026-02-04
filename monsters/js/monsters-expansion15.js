// Expansion Pack 15 - Final Comprehensive Push
// Filling remaining gaps

const MONSTERS_EXPANSION15 = {
    // ===== More Classic Creatures =====
    
    
    
    
    "young-remorhaz": {
        name: "Young Remorhaz",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 14,
        acType: "natural armor",
        hp: 93,
        hitDice: "11d10+33",
        speed: { walk: 30, burrow: 20 },
        abilityScores: { str: 18, dex: 13, con: 17, int: 3, wis: 10, cha: 4 },
        damageImmunities: ["cold", "fire"],
        senses: ["darkvision 60 ft.", "tremorsense 60 ft."],
        languages: "—",
        cr: 5,
        environment: ["arctic"],
        role: "brute",
        tags: ["monstrosity"],
        traits: [
            { name: "Heated Body", description: "A creature that touches the remorhaz or hits it with a melee attack while within 5 feet of it takes 7 (2d6) fire damage." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 20 (3d10+4) piercing damage plus 7 (2d6) fire damage." }
        ]
    },
    
    

    // ===== More Golems =====
    
    
    

    // ===== More Misc =====
    
    "jackalwere": {
        name: "Jackalwere",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "shapechanger",
        alignment: "chaotic evil",
        ac: 12,
        hp: 18,
        hitDice: "4d8",
        speed: { walk: 40 },
        abilityScores: { str: 11, dex: 15, con: 11, int: 13, wis: 11, cha: 10 },
        skills: { deception: 4, perception: 2, stealth: 4 },
        damageImmunities: ["bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        senses: [],
        languages: "Common (can't speak in jackal form)",
        cr: 0.5,
        environment: ["desert", "grassland"],
        role: "lurker",
        tags: ["humanoid", "shapechanger"],
        traits: [
            { name: "Shapechanger", description: "The jackalwere can use its action to polymorph into a specific Medium human or a jackal-humanoid hybrid, or back into its true form (that of a Small jackal). Other than its size, its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies." },
            { name: "Keen Hearing and Smell", description: "The jackalwere has advantage on Wisdom (Perception) checks that rely on hearing or smell." },
            { name: "Pack Tactics", description: "The jackalwere has advantage on an attack roll against a creature if at least one of the jackalwere's allies is within 5 feet of the creature and the ally isn't incapacitated." }
        ],
        actions: [
            { name: "Bite (Jackal or Hybrid Form Only)", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4+2) piercing damage." },
            { name: "Scimitar (Human or Hybrid Form Only)", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6+2) slashing damage." },
            { name: "Sleep Gaze", description: "The jackalwere gazes at one creature it can see within 30 feet of it. The target must make a DC 10 Wisdom saving throw. On a failed save, the target succumbs to a magical slumber, falling unconscious for 10 minutes or until someone uses an action to shake the target awake. A creature that successfully saves against the effect is immune to this jackalwere's gaze for the next 24 hours. Undead and creatures immune to being charmed aren't affected by it." }
        ]
    }};
