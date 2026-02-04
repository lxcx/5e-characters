// Final Push - Breaking 1000!
// The last 20+ creatures

const MONSTERS_FINAL_PUSH = {
    // ===== Zombies & Skeletons =====
    
    
    "minotaur-skeleton": {
        name: "Minotaur Skeleton",
        source: "MM",
        size: "large",
        type: "undead",
        alignment: "lawful evil",
        ac: 12,
        acType: "natural armor",
        hp: 67,
        hitDice: "9d10+18",
        speed: { walk: 40 },
        abilityScores: { str: 18, dex: 11, con: 15, int: 6, wis: 8, cha: 5 },
        damageVulnerabilities: ["bludgeoning"],
        damageImmunities: ["poison"],
        conditionImmunities: ["exhaustion", "poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "understands Abyssal but can't speak",
        cr: 2,
        environment: ["underdark", "dungeon"],
        role: "brute",
        tags: ["undead", "skeleton", "minotaur"],
        traits: [
            { name: "Charge", description: "If the skeleton moves at least 10 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 (2d8) piercing damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be pushed up to 10 feet away and knocked prone." }
        ],
        actions: [
            { name: "Greataxe", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 17 (2d12+4) slashing damage." },
            { name: "Gore", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8+4) piercing damage." }
        ]
    },
    
    

    // ===== Mummies & Misc Undead =====
    

    // ===== Devils & Demons =====
    "imp": {
        name: "Imp",
        source: "MM",
        size: "tiny",
        type: "fiend",
        subtype: "devil, shapechanger",
        alignment: "lawful evil",
        ac: 13,
        hp: 10,
        hitDice: "3d4+3",
        speed: { walk: 20, fly: 40 },
        abilityScores: { str: 6, dex: 17, con: 13, int: 11, wis: 12, cha: 14 },
        skills: { deception: 4, insight: 3, persuasion: 4, stealth: 5 },
        damageResistances: ["cold; bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 120 ft."],
        languages: "Infernal, Common",
        cr: 1,
        environment: ["urban", "nine hells"],
        role: "lurker",
        tags: ["fiend", "devil", "shapechanger"],
        traits: [
            { name: "Shapechanger", description: "The imp can use its action to polymorph into a beast form that resembles a rat (speed 20 ft.), a raven (20 ft., fly 60 ft.), or a spider (20 ft., climb 20 ft.), or back into its true form. Its statistics are the same in each form, except for the speed changes noted. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies." },
            { name: "Devil's Sight", description: "Magical darkness doesn't impede the imp's darkvision." },
            { name: "Magic Resistance", description: "The imp has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Sting (Bite in Beast Form)", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4+3) piercing damage, and the target must make on a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one." },
            { name: "Invisibility", description: "The imp magically turns invisible until it attacks, or until its concentration ends (as if concentrating on a spell). Any equipment the imp wears or carries is invisible with it." }
        ]
    },
    
    
    

    // ===== Final few to break 1000 =====
    "dust-devil": {
        name: "Dust Devil",
        source: "MM",
        size: "medium",
        type: "elemental",
        alignment: "neutral",
        ac: 13,
        hp: 26,
        hitDice: "4d8+8",
        speed: { walk: 30, fly: 30 },
        abilityScores: { str: 14, dex: 16, con: 14, int: 3, wis: 8, cha: 5 },
        damageImmunities: ["poison"],
        conditionImmunities: ["exhaustion", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained", "unconscious"],
        senses: ["darkvision 60 ft.", "tremorsense 30 ft."],
        languages: "—",
        cr: 0.5,
        environment: ["desert"],
        role: "skirmisher",
        tags: ["elemental"],
        traits: [
            { name: "Elemental Nature", description: "A dust devil doesn't require air, food, drink, or sleep." }
        ],
        actions: [
            { name: "Dust Devil Aura", description: "The dust devil can engulf Small or smaller creatures. Each creature in the dust devil's space must make a DC 12 Strength saving throw. On a failure, the creature takes 3 (1d6) slashing damage and is blinded until the end of its next turn. On a success, it takes half as much damage and isn't blinded." },
            { name: "Slam", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6+2) bludgeoning damage." }
        ]
    },
    
    
    
    

    // ===== BREAKING 1000! =====
    
    
    
    
    
    
};
