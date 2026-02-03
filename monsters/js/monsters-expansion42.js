// Expansion Pack 42 - More Creatures
// Additional monsters

const MONSTERS_EXPANSION42 = {
    // ===== More Oozes =====
    "gray-ooze": {
        name: "Gray Ooze",
        source: "MM",
        size: "medium",
        type: "ooze",
        alignment: "unaligned",
        ac: 8,
        hp: 22,
        hitDice: "3d8+9",
        speed: { walk: 10, climb: 10 },
        abilityScores: { str: 12, dex: 6, con: 16, int: 1, wis: 6, cha: 2 },
        skills: { stealth: 2 },
        damageResistances: ["acid", "cold", "fire"],
        conditionImmunities: ["blinded", "charmed", "deafened", "exhaustion", "frightened", "prone"],
        senses: ["blindsight 60 ft. (blind beyond this radius)"],
        languages: "—",
        cr: "1/2",
        environment: ["underdark", "swamp"],
        role: "lurker",
        tags: ["ooze"],
        traits: [
            { name: "Amorphous", description: "The ooze can move through a space as narrow as 1 inch wide without squeezing." },
            { name: "Corrode Metal", description: "Any nonmagical weapon made of metal that hits the ooze corrodes. After dealing damage, the weapon takes a permanent and cumulative -1 penalty to damage rolls. If its penalty drops to -5, the weapon is destroyed. Nonmagical ammunition made of metal that hits the ooze is destroyed after dealing damage. The ooze can eat through 2-inch-thick, nonmagical metal in 1 round." },
            { name: "False Appearance", description: "While the ooze remains motionless, it is indistinguishable from an oily pool or wet rock." }
        ],
        actions: [
            { name: "Pseudopod", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6+1) bludgeoning damage plus 7 (2d6) acid damage, and if the target is wearing nonmagical metal armor, its armor is partly corroded and takes a permanent and cumulative -1 penalty to the AC it offers. The armor is destroyed if the penalty reduces its AC to 10." }
        ]
    },
    "ochre-jelly": {
        name: "Ochre Jelly",
        source: "MM",
        size: "large",
        type: "ooze",
        alignment: "unaligned",
        ac: 8,
        hp: 45,
        hitDice: "6d10+12",
        speed: { walk: 10, climb: 10 },
        abilityScores: { str: 15, dex: 6, con: 14, int: 2, wis: 6, cha: 1 },
        damageResistances: ["acid"],
        damageImmunities: ["lightning", "slashing"],
        conditionImmunities: ["blinded", "charmed", "deafened", "exhaustion", "frightened", "prone"],
        senses: ["blindsight 60 ft. (blind beyond this radius)"],
        languages: "—",
        cr: 2,
        environment: ["underdark", "swamp"],
        role: "brute",
        tags: ["ooze"],
        traits: [
            { name: "Amorphous", description: "The jelly can move through a space as narrow as 1 inch wide without squeezing." },
            { name: "Spider Climb", description: "The jelly can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." },
            { name: "Split", description: "When a jelly that is Medium or larger is subjected to lightning or slashing damage, it splits into two new jellies if it has at least 10 hit points. Each new jelly has hit points equal to half the original jelly's, rounded down. New jellies are one size smaller than the original jelly." }
        ],
        actions: [
            { name: "Pseudopod", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6+2) bludgeoning damage plus 3 (1d6) acid damage." }
        ]
    },

    // ===== More Elementals =====
    "mud-mephit": {
        name: "Mud Mephit",
        source: "MM",
        size: "small",
        type: "elemental",
        alignment: "neutral evil",
        ac: 11,
        hp: 27,
        hitDice: "6d6+6",
        speed: { walk: 20, fly: 20, swim: 20 },
        abilityScores: { str: 8, dex: 12, con: 12, int: 9, wis: 11, cha: 7 },
        skills: { stealth: 3 },
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "Aquan, Terran",
        cr: "1/4",
        environment: ["swamp", "underwater"],
        role: "minion",
        tags: ["elemental", "mephit"],
        traits: [
            { name: "Death Burst", description: "When the mephit dies, it explodes in a burst of sticky mud. Each Medium or smaller creature within 5 feet of it must succeed on a DC 11 Dexterity saving throw or be restrained until the end of the creature's next turn." },
            { name: "False Appearance", description: "While the mephit remains motionless, it is indistinguishable from an ordinary mound of mud." }
        ],
        actions: [
            { name: "Fists", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 4 (1d6+1) bludgeoning damage." },
            { name: "Mud Breath (Recharge 6)", description: "The mephit belches viscid mud at one creature within 5 feet of it. If the target is Medium or smaller, it must succeed on a DC 11 Dexterity saving throw or be restrained for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." }
        ]
    },
    "smoke-mephit": {
        name: "Smoke Mephit",
        source: "MM",
        size: "small",
        type: "elemental",
        alignment: "neutral evil",
        ac: 12,
        hp: 22,
        hitDice: "5d6+5",
        speed: { walk: 30, fly: 30 },
        abilityScores: { str: 6, dex: 14, con: 12, int: 10, wis: 10, cha: 11 },
        skills: { perception: 2, stealth: 4 },
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "Auran, Ignan",
        cr: "1/4",
        environment: ["nine hells"],
        role: "minion",
        tags: ["elemental", "mephit"],
        traits: [
            { name: "Death Burst", description: "When the mephit dies, it leaves behind a cloud of smoke that fills a 5-foot-radius sphere centered on its space. The sphere is heavily obscured. Wind disperses the cloud, which otherwise lasts for 1 minute." }
        ],
        actions: [
            { name: "Claws", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4+2) slashing damage." },
            { name: "Cinder Breath (Recharge 6)", description: "The mephit exhales a 15-foot cone of smoldering ash. Each creature in that area must succeed on a DC 10 Dexterity saving throw or be blinded until the end of the mephit's next turn." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 10,
            spells: {
                "1/day": ["dancing lights"]
            }
        }
    },
    "steam-mephit": {
        name: "Steam Mephit",
        source: "MM",
        size: "small",
        type: "elemental",
        alignment: "neutral evil",
        ac: 10,
        hp: 21,
        hitDice: "6d6",
        speed: { walk: 30, fly: 30 },
        abilityScores: { str: 5, dex: 11, con: 10, int: 11, wis: 10, cha: 12 },
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "Aquan, Ignan",
        cr: "1/4",
        environment: ["underwater"],
        role: "minion",
        tags: ["elemental", "mephit"],
        traits: [
            { name: "Death Burst", description: "When the mephit dies, it explodes in a cloud of steam. Each creature within 5 feet of the mephit must succeed on a DC 10 Dexterity saving throw or take 4 (1d8) fire damage." }
        ],
        actions: [
            { name: "Claws", description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 2 (1d4) slashing damage plus 2 (1d4) fire damage." },
            { name: "Steam Breath (Recharge 6)", description: "The mephit exhales a 15-foot cone of scalding steam. Each creature in that area must succeed on a DC 10 Dexterity saving throw, taking 4 (1d8) fire damage on a failed save, or half as much damage on a successful one." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 11,
            spells: {
                "1/day": ["blur"]
            }
        }
    },
    "dust-mephit": {
        name: "Dust Mephit",
        source: "MM",
        size: "small",
        type: "elemental",
        alignment: "neutral evil",
        ac: 12,
        hp: 17,
        hitDice: "5d6",
        speed: { walk: 30, fly: 30 },
        abilityScores: { str: 5, dex: 14, con: 10, int: 9, wis: 11, cha: 10 },
        skills: { perception: 2, stealth: 4 },
        damageVulnerabilities: ["fire"],
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "Auran, Terran",
        cr: "1/2",
        environment: ["desert"],
        role: "minion",
        tags: ["elemental", "mephit"],
        traits: [
            { name: "Death Burst", description: "When the mephit dies, it explodes in a burst of dust. Each creature within 5 feet of it must then succeed on a DC 10 Constitution saving throw or be blinded for 1 minute. A blinded creature can repeat the saving throw on each of its turns, ending the effect on itself on a success." }
        ],
        actions: [
            { name: "Claws", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4+2) slashing damage." },
            { name: "Blinding Breath (Recharge 6)", description: "The mephit exhales a 15-foot cone of blinding dust. Each creature in that area must succeed on a DC 10 Dexterity saving throw or be blinded for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 10,
            spells: {
                "1/day": ["sleep"]
            }
        }
    },
    "ice-mephit": {
        name: "Ice Mephit",
        source: "MM",
        size: "small",
        type: "elemental",
        alignment: "neutral evil",
        ac: 11,
        hp: 21,
        hitDice: "6d6",
        speed: { walk: 30, fly: 30 },
        abilityScores: { str: 7, dex: 13, con: 10, int: 9, wis: 11, cha: 12 },
        skills: { perception: 2, stealth: 3 },
        damageVulnerabilities: ["bludgeoning", "fire"],
        damageImmunities: ["cold", "poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "Aquan, Auran",
        cr: "1/2",
        environment: ["arctic"],
        role: "minion",
        tags: ["elemental", "mephit"],
        traits: [
            { name: "Death Burst", description: "When the mephit dies, it explodes in a burst of jagged ice. Each creature within 5 feet of it must make a DC 10 Dexterity saving throw, taking 4 (1d8) slashing damage on a failed save, or half as much damage on a successful one." },
            { name: "False Appearance", description: "While the mephit remains motionless, it is indistinguishable from an ordinary shard of ice." }
        ],
        actions: [
            { name: "Claws", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 3 (1d4+1) slashing damage plus 2 (1d4) cold damage." },
            { name: "Frost Breath (Recharge 6)", description: "The mephit exhales a 15-foot cone of cold air. Each creature in that area must succeed on a DC 10 Dexterity saving throw, taking 5 (2d4) cold damage on a failed save, or half as much damage on a successful one." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 11,
            spells: {
                "1/day": ["fog cloud"]
            }
        }
    },
    "magma-mephit": {
        name: "Magma Mephit",
        source: "MM",
        size: "small",
        type: "elemental",
        alignment: "neutral evil",
        ac: 11,
        hp: 22,
        hitDice: "5d6+5",
        speed: { walk: 30, fly: 30 },
        abilityScores: { str: 8, dex: 12, con: 12, int: 7, wis: 10, cha: 10 },
        skills: { stealth: 3 },
        damageVulnerabilities: ["cold"],
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "Ignan, Terran",
        cr: "1/2",
        environment: ["underdark"],
        role: "minion",
        tags: ["elemental", "mephit"],
        traits: [
            { name: "Death Burst", description: "When the mephit dies, it explodes in a burst of lava. Each creature within 5 feet of it must make a DC 11 Dexterity saving throw, taking 7 (2d6) fire damage on a failed save, or half as much damage on a successful one." },
            { name: "False Appearance", description: "While the mephit remains motionless, it is indistinguishable from an ordinary mound of magma." }
        ],
        actions: [
            { name: "Claws", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 3 (1d4+1) slashing damage plus 2 (1d4) fire damage." },
            { name: "Fire Breath (Recharge 6)", description: "The mephit exhales a 15-foot cone of fire. Each creature in that area must make a DC 11 Dexterity saving throw, taking 7 (2d6) fire damage on a failed save, or half as much damage on a successful one." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 10,
            spells: {
                "1/day": ["heat metal"]
            }
        }
    }
};
