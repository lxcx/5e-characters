// Expansion Pack 16 - More Creatures
// Continuing comprehensive coverage

const MONSTERS_EXPANSION16 = {
    // ===== More Fiends =====
    
    

    // ===== More Demons =====
    "manes": {
        name: "Manes",
        source: "MM",
        size: "small",
        type: "fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 9,
        hp: 9,
        hitDice: "2d6+2",
        speed: { walk: 20 },
        abilityScores: { str: 10, dex: 9, con: 13, int: 3, wis: 8, cha: 4 },
        damageResistances: ["cold", "fire", "lightning"],
        damageImmunities: ["poison"],
        conditionImmunities: ["charmed", "frightened", "poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "understands Abyssal but can't speak",
        cr: 0.125,
        environment: ["abyss"],
        role: "minion",
        tags: ["fiend", "demon"],
        actions: [
            { name: "Claws", description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 5 (2d4) slashing damage." }
        ]
    },
    
    

    // ===== More Undead =====
    "bodak": {
        name: "Bodak",
        source: "VGtM",
        size: "medium",
        type: "undead",
        alignment: "chaotic evil",
        ac: 15,
        acType: "natural armor",
        hp: 58,
        hitDice: "9d8+18",
        speed: { walk: 30 },
        abilityScores: { str: 15, dex: 16, con: 15, int: 7, wis: 12, cha: 12 },
        skills: { perception: 4, stealth: 6 },
        damageResistances: ["cold", "fire", "necrotic; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["lightning", "poison"],
        conditionImmunities: ["charmed", "frightened", "poisoned"],
        senses: ["darkvision 120 ft."],
        languages: "Abyssal, the languages it knew in life",
        cr: 6,
        environment: ["underdark", "swamp"],
        role: "lurker",
        tags: ["undead"],
        traits: [
            { name: "Aura of Annihilation", description: "The bodak can activate or deactivate this feature as a bonus action. While active, the aura deals 5 necrotic damage to any creature that ends its turn within 30 feet of the bodak. Undead and fiends ignore this effect." },
            { name: "Death Gaze", description: "When a creature that can see the bodak's eyes starts its turn within 30 feet of the bodak, the bodak can force it to make a DC 13 Constitution saving throw if the bodak isn't incapacitated and can see the creature. If the saving throw fails by 5 or more, the creature is reduced to 0 hit points, unless it is immune to the frightened condition. Otherwise, a creature takes 16 (3d10) psychic damage on a failed save." },
            { name: "Sunlight Hypersensitivity", description: "The bodak takes 5 radiant damage when it starts its turn in sunlight. While in sunlight, it has disadvantage on attack rolls and ability checks." }
        ],
        actions: [
            { name: "Fist", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 4 (1d4+2) bludgeoning damage plus 9 (2d8) necrotic damage." },
            { name: "Withering Gaze", description: "One creature that the bodak can see within 60 feet of it must make a DC 13 Constitution saving throw, taking 22 (4d10) necrotic damage on a failed save, or half as much damage on a successful one." }
        ]
    },
    "devourer": {
        name: "Devourer",
        source: "VGtM",
        size: "large",
        type: "fiend",
        alignment: "chaotic evil",
        ac: 16,
        acType: "natural armor",
        hp: 178,
        hitDice: "17d10+85",
        speed: { walk: 30 },
        abilityScores: { str: 20, dex: 12, con: 20, int: 13, wis: 10, cha: 16 },
        damageResistances: ["cold", "fire", "lightning"],
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 120 ft."],
        languages: "Abyssal, telepathy 120 ft.",
        cr: 13,
        environment: ["underdark"],
        role: "brute",
        tags: ["fiend"],
        traits: [
            { name: "Soul Eater", description: "A devourer can consume the soul of a creature that has been dead for no longer than 1 minute, provided that creature is neither a construct nor an undead. The devourer must be within 5 feet of the corpse. A consumed soul is trapped inside the devourer's skeletal chest. While the soul is trapped, the devourer can use it as a source of energy for its Imprison Soul action. The soul is freed if the devourer dies or when 24 hours have passed since the soul was consumed. While trapped, a soul can't be returned to life by any means. A devourer can only hold one soul at a time." }
        ],
        actions: [
            { name: "Multiattack", description: "The devourer makes two claw attacks and can use either Imprison Soul or Soul Rend." },
            { name: "Claw", description: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 12 (2d6+5) slashing damage plus 21 (6d6) necrotic damage." },
            { name: "Imprison Soul", description: "The devourer chooses a living humanoid with 0 hit points that it can see within 30 feet of it. That creature is teleported inside the devourer's ribcage and imprisoned there. A creature imprisoned in this manner has disadvantage on death saving throws. If it dies while imprisoned, the devourer regains 25 hit points, immediately recharges Soul Rend, and the creature's soul is trapped." },
            { name: "Soul Rend (Recharge 6)", description: "The devourer creates a vortex of life-draining energy in a 20-foot radius centered on itself. Each humanoid in that area must make a DC 18 Constitution saving throw, taking 44 (8d10) necrotic damage on a failed save, or half as much damage on a successful one." }
        ]
    },
    

    // ===== More Monstrosities =====
    
    "leucrotta": {
        name: "Leucrotta",
        source: "VGtM",
        size: "large",
        type: "monstrosity",
        alignment: "chaotic evil",
        ac: 14,
        acType: "natural armor",
        hp: 67,
        hitDice: "9d10+18",
        speed: { walk: 50 },
        abilityScores: { str: 18, dex: 14, con: 15, int: 9, wis: 12, cha: 6 },
        skills: { deception: 2, perception: 5 },
        senses: ["darkvision 60 ft."],
        languages: "Abyssal, Gnoll",
        cr: 3,
        environment: ["desert", "grassland"],
        role: "brute",
        tags: ["monstrosity"],
        traits: [
            { name: "Keen Smell", description: "The leucrotta has advantage on Wisdom (Perception) checks that rely on smell." },
            { name: "Kicking Retreat", description: "If the leucrotta attacks with its hooves, it can take the Disengage action as a bonus action." },
            { name: "Mimicry", description: "The leucrotta can mimic animal sounds and humanoid voices. A creature that hears the sounds can tell they are imitations with a successful DC 14 Wisdom (Insight) check." },
            { name: "Rampage", description: "When the leucrotta reduces a creature to 0 hit points with a melee attack on its turn, it can take a bonus action to move up to half its speed and make an attack with its hooves." }
        ],
        actions: [
            { name: "Multiattack", description: "The leucrotta makes two attacks: one with its bite and one with its hooves." },
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8+4) piercing damage. If the leucrotta scores a critical hit, it rolls the damage dice three times, instead of twice." },
            { name: "Hooves", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6+4) bludgeoning damage." }
        ]
    },

    // ===== More Beasts =====
    
    
    
    
};
