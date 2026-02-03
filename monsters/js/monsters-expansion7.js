// Expansion Pack 7 - Breaking 1000!
// Final creatures

const MONSTERS_EXPANSION7 = {
    // ===== Mephits =====
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
        cr: 0.5,
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
        cr: 0.5,
        environment: ["arctic"],
        role: "minion",
        tags: ["elemental", "mephit", "cold"],
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
        cr: 0.5,
        environment: ["mountain", "underdark"],
        role: "minion",
        tags: ["elemental", "mephit", "fire"],
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
    },
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
        cr: 0.25,
        environment: ["swamp"],
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
        cr: 0.25,
        environment: ["desert", "mountain"],
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
        cr: 0.25,
        environment: ["underwater", "coastal"],
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

    // ===== More Classic Creatures =====
    "darkmantle": {
        name: "Darkmantle",
        source: "MM",
        size: "small",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 11,
        hp: 22,
        hitDice: "5d6+5",
        speed: { walk: 10, fly: 30 },
        abilityScores: { str: 16, dex: 12, con: 13, int: 2, wis: 10, cha: 5 },
        skills: { stealth: 3 },
        senses: ["blindsight 60 ft."],
        languages: "—",
        cr: 0.5,
        environment: ["underdark"],
        role: "lurker",
        tags: ["monstrosity"],
        traits: [
            { name: "Echolocation", description: "The darkmantle can't use its blindsight while deafened." },
            { name: "False Appearance", description: "While the darkmantle remains motionless, it is indistinguishable from a cave formation such as a stalactite or stalagmite." }
        ],
        actions: [
            { name: "Crush", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 6 (1d6+3) bludgeoning damage, and the darkmantle attaches to the target. If the target is Medium or smaller and the darkmantle has advantage on the attack roll, it attaches by engulfing the target's head, and the target is also blinded and unable to breathe while the darkmantle is attached in this way. While attached to the target, the darkmantle can attack no other creature except the target but has advantage on its attack rolls. The darkmantle's speed also becomes 0, it can't benefit from any bonus to its speed, and it moves with the target." },
            { name: "Darkness Aura (1/Day)", description: "A 15-foot radius of magical darkness extends out from the darkmantle, moves with it, and spreads around corners. The darkness lasts as long as the darkmantle maintains concentration, up to 10 minutes (as if concentrating on a spell). Darkvision can't penetrate this darkness, and no natural light can illuminate it. If any of the darkness overlaps with an area of light created by a spell of 2nd level or lower, the spell creating the light is dispelled." }
        ]
    },
    "cockatrice": {
        name: "Cockatrice",
        source: "MM",
        size: "small",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 11,
        hp: 27,
        hitDice: "6d6+6",
        speed: { walk: 20, fly: 40 },
        abilityScores: { str: 6, dex: 12, con: 12, int: 2, wis: 13, cha: 5 },
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 0.5,
        environment: ["grassland"],
        role: "lurker",
        tags: ["monstrosity"],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 3 (1d4+1) piercing damage, and the target must succeed on a DC 11 Constitution saving throw against being magically petrified. On a failed save, the creature begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified for 24 hours." }
        ]
    },
    "stirge": {
        name: "Stirge",
        source: "MM",
        size: "tiny",
        type: "beast",
        alignment: "unaligned",
        ac: 14,
        acType: "natural armor",
        hp: 2,
        hitDice: "1d4",
        speed: { walk: 10, fly: 40 },
        abilityScores: { str: 4, dex: 16, con: 11, int: 2, wis: 8, cha: 6 },
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 0.125,
        environment: ["forest", "swamp", "underdark", "urban"],
        role: "minion",
        tags: ["beast"],
        actions: [
            { name: "Blood Drain", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 5 (1d4+3) piercing damage, and the stirge attaches to the target. While attached, the stirge doesn't attack. Instead, at the start of each of the stirge's turns, the target loses 5 (1d4+3) hit points due to blood loss. The stirge can detach itself by spending 5 feet of its movement. It does so after it drains 10 hit points of blood from the target or the target dies. A creature, including the target, can use its action to detach the stirge." }
        ]
    },
    "violet-fungus": {
        name: "Violet Fungus",
        source: "MM",
        size: "medium",
        type: "plant",
        alignment: "unaligned",
        ac: 5,
        hp: 18,
        hitDice: "4d8",
        speed: { walk: 5 },
        abilityScores: { str: 3, dex: 1, con: 10, int: 1, wis: 3, cha: 1 },
        conditionImmunities: ["blinded", "deafened", "frightened"],
        senses: ["blindsight 30 ft. (blind beyond this radius)"],
        languages: "—",
        cr: 0.25,
        environment: ["underdark"],
        role: "lurker",
        tags: ["plant", "fungus"],
        traits: [
            { name: "False Appearance", description: "While the violet fungus remains motionless, it is indistinguishable from an ordinary fungus." }
        ],
        actions: [
            { name: "Multiattack", description: "The fungus makes 1d4 Rotting Touch attacks." },
            { name: "Rotting Touch", description: "Melee Weapon Attack: +2 to hit, reach 10 ft., one creature. Hit: 4 (1d8) necrotic damage." }
        ]
    },
    "shrieker": {
        name: "Shrieker",
        source: "MM",
        size: "medium",
        type: "plant",
        alignment: "unaligned",
        ac: 5,
        hp: 13,
        hitDice: "3d8",
        speed: { walk: 0 },
        abilityScores: { str: 1, dex: 1, con: 10, int: 1, wis: 3, cha: 1 },
        conditionImmunities: ["blinded", "deafened", "frightened"],
        senses: ["blindsight 30 ft. (blind beyond this radius)"],
        languages: "—",
        cr: 0,
        environment: ["underdark"],
        role: "minion",
        tags: ["plant", "fungus"],
        traits: [
            { name: "False Appearance", description: "While the shrieker remains motionless, it is indistinguishable from an ordinary fungus." }
        ],
        reactions: [
            { name: "Shriek", description: "When bright light or a creature is within 30 feet of the shrieker, it emits a shriek audible within 300 feet of it. The shrieker continues to shriek until the disturbance moves out of range and for 1d4 of the shrieker's turns afterward." }
        ]
    },
    "gas-spore": {
        name: "Gas Spore",
        source: "MM",
        size: "large",
        type: "plant",
        alignment: "unaligned",
        ac: 5,
        hp: 1,
        hitDice: "1d10-4",
        speed: { walk: 0, fly: 10 },
        abilityScores: { str: 5, dex: 1, con: 3, int: 1, wis: 1, cha: 1 },
        damageImmunities: ["poison"],
        conditionImmunities: ["blinded", "deafened", "frightened", "paralyzed", "poisoned", "prone"],
        senses: ["blindsight 30 ft. (blind beyond this radius)"],
        languages: "—",
        cr: 0.5,
        environment: ["underdark"],
        role: "minion",
        tags: ["plant", "fungus"],
        traits: [
            { name: "Death Burst", description: "The gas spore explodes when it drops to 0 hit points. Each creature within 20 feet of it must succeed on a DC 15 Constitution saving throw or take 10 (3d6) poison damage and become infected with a disease on a failed save. Creatures immune to the poisoned condition are immune to this disease. Spores invade an infected creature's system, killing the creature in a number of hours equal to 1d12 + the creature's Constitution score, unless the disease is removed. In half that time, the creature becomes poisoned for the rest of the duration. After the creature dies, it sprouts 2d4 Tiny gas spores that grow to full size in 7 days." },
            { name: "Eerie Resemblance", description: "The gas spore resembles a beholder. A creature that can see the gas spore can discern its true nature with a successful DC 15 Intelligence (Nature) check." }
        ],
        actions: [
            { name: "Touch", description: "Melee Weapon Attack: +0 to hit, reach 5 ft., one creature. Hit: 1 poison damage, and the creature must succeed on a DC 10 Constitution saving throw or become infected with the disease described in the Death Burst trait." }
        ]
    },

    // ===== More NPCs =====
    "acolyte": {
        name: "Acolyte",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 10,
        hp: 9,
        hitDice: "2d8",
        speed: { walk: 30 },
        abilityScores: { str: 10, dex: 10, con: 10, int: 10, wis: 14, cha: 11 },
        skills: { medicine: 4, religion: 2 },
        senses: [],
        languages: "any one language (usually Common)",
        cr: 0.25,
        environment: ["urban"],
        role: "leader",
        tags: ["humanoid", "spellcaster", "npc"],
        actions: [
            { name: "Club", description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage." }
        ],
        spellcasting: {
            ability: "wis",
            dc: 12,
            attack: 4,
            spells: {
                cantrips: ["light", "sacred flame", "thaumaturgy"],
                "1st": { slots: 3, spells: ["bless", "cure wounds", "sanctuary"] }
            }
        }
    },
    "noble": {
        name: "Noble",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 15,
        acType: "breastplate",
        hp: 9,
        hitDice: "2d8",
        speed: { walk: 30 },
        abilityScores: { str: 11, dex: 12, con: 11, int: 12, wis: 14, cha: 16 },
        skills: { deception: 5, insight: 4, persuasion: 5 },
        senses: [],
        languages: "any two languages",
        cr: 0.125,
        environment: ["urban"],
        role: "leader",
        tags: ["humanoid", "npc"],
        actions: [
            { name: "Rapier", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8+1) piercing damage." }
        ],
        reactions: [
            { name: "Parry", description: "The noble adds 2 to its AC against one melee attack that would hit it. To do so, the noble must see the attacker and be wielding a melee weapon." }
        ]
    },
    "tribal-warrior": {
        name: "Tribal Warrior",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 12,
        acType: "hide armor",
        hp: 11,
        hitDice: "2d8+2",
        speed: { walk: 30 },
        abilityScores: { str: 13, dex: 11, con: 12, int: 8, wis: 11, cha: 8 },
        senses: [],
        languages: "any one language",
        cr: 0.125,
        environment: ["forest", "grassland", "arctic", "desert", "jungle"],
        role: "soldier",
        tags: ["humanoid", "npc"],
        traits: [
            { name: "Pack Tactics", description: "The warrior has advantage on an attack roll against a creature if at least one of the warrior's allies is within 5 feet of the creature and the ally isn't incapacitated." }
        ],
        actions: [
            { name: "Spear", description: "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d6+1) piercing damage, or 5 (1d8+1) piercing damage if used with two hands to make a melee attack." }
        ]
    },
    "archer": {
        name: "Archer",
        source: "VGtM",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 16,
        acType: "studded leather",
        hp: 75,
        hitDice: "10d8+30",
        speed: { walk: 30 },
        abilityScores: { str: 11, dex: 18, con: 16, int: 11, wis: 13, cha: 10 },
        skills: { acrobatics: 6, perception: 5 },
        senses: [],
        languages: "any one language (usually Common)",
        cr: 3,
        environment: ["forest", "grassland", "urban"],
        role: "artillery",
        tags: ["humanoid", "npc"],
        traits: [
            { name: "Archer's Eye (3/Day)", description: "As a bonus action, the archer can add 1d10 to its next attack or damage roll with a longbow or shortbow." }
        ],
        actions: [
            { name: "Multiattack", description: "The archer makes two attacks with its longbow." },
            { name: "Shortsword", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6+4) piercing damage." },
            { name: "Longbow", description: "Ranged Weapon Attack: +6 to hit, range 150/600 ft., one target. Hit: 8 (1d8+4) piercing damage." }
        ]
    },
    "martial-arts-adept": {
        name: "Martial Arts Adept",
        source: "VGtM",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 16,
        hp: 60,
        hitDice: "11d8+11",
        speed: { walk: 40 },
        abilityScores: { str: 11, dex: 17, con: 13, int: 11, wis: 16, cha: 10 },
        skills: { acrobatics: 5, insight: 5, stealth: 5 },
        senses: [],
        languages: "any one language (usually Common)",
        cr: 3,
        environment: ["urban"],
        role: "skirmisher",
        tags: ["humanoid", "npc", "monk"],
        traits: [
            { name: "Unarmored Defense", description: "While the adept is wearing no armor and wielding no shield, its AC includes its Wisdom modifier." }
        ],
        actions: [
            { name: "Multiattack", description: "The adept makes three unarmed strikes or three dart attacks." },
            { name: "Unarmed Strike", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8+3) bludgeoning damage. If the target is a creature, the adept can choose one of the following additional effects: The target must succeed on a DC 13 Strength saving throw or drop one item it is holding (adept's choice); The target must succeed on a DC 13 Dexterity saving throw or be knocked prone; The target must succeed on a DC 13 Constitution saving throw or be stunned until the end of the adept's next turn." },
            { name: "Dart", description: "Ranged Weapon Attack: +5 to hit, range 20/60 ft., one target. Hit: 5 (1d4+3) piercing damage." }
        ],
        reactions: [
            { name: "Deflect Missile", description: "In response to being hit by a ranged weapon attack, the adept deflects the missile. The damage it takes from the attack is reduced by 1d10+3. If the damage is reduced to 0, the adept catches the missile if it's small enough to hold in one hand and the adept has a hand free." }
        ]
    },

    // ===== Final creatures to hit 1000! =====
    "swarm-of-rot-grubs": {
        name: "Swarm of Rot Grubs",
        source: "VGtM",
        size: "medium",
        type: "beast",
        subtype: "swarm of tiny beasts",
        alignment: "unaligned",
        ac: 8,
        hp: 22,
        hitDice: "5d8",
        speed: { walk: 5, climb: 5 },
        abilityScores: { str: 2, dex: 7, con: 10, int: 1, wis: 2, cha: 1 },
        damageResistances: ["piercing", "slashing"],
        conditionImmunities: ["charmed", "frightened", "grappled", "paralyzed", "petrified", "prone", "restrained"],
        senses: ["blindsight 10 ft."],
        languages: "—",
        cr: 0.5,
        environment: ["swamp", "underdark"],
        role: "minion",
        tags: ["beast", "swarm"],
        traits: [
            { name: "Swarm", description: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny maggot. The swarm can't regain hit points or gain temporary hit points." }
        ],
        actions: [
            { name: "Bites", description: "Melee Weapon Attack: +0 to hit, reach 0 ft., one creature in the swarm's space. Hit: The target is infested by 1d4 rot grubs. At the start of each of the target's turns, the target takes 1d6 piercing damage per rot grub infesting it. Applying fire to the bite wound before the end of the target's next turn deals 1 fire damage to the target and kills these rot grubs. After this time, these rot grubs are too far under the skin to be burned. If a target infested by rot grubs ends its turn with 0 hit points, it dies as the rot grubs burrow into its heart and kill it. Any effect that cures disease kills all rot grubs infesting the target." }
        ]
    },
    "flumph": {
        name: "Flumph",
        source: "MM",
        size: "small",
        type: "aberration",
        alignment: "lawful good",
        ac: 12,
        hp: 7,
        hitDice: "2d6",
        speed: { walk: 5, fly: 30 },
        abilityScores: { str: 6, dex: 15, con: 10, int: 14, wis: 14, cha: 11 },
        skills: { arcana: 4, history: 4, religion: 4 },
        damageVulnerabilities: ["psychic"],
        senses: ["darkvision 60 ft."],
        languages: "understands Undercommon but can't speak, telepathy 60 ft.",
        cr: 0.125,
        environment: ["underdark"],
        role: "controller",
        tags: ["aberration"],
        traits: [
            { name: "Advanced Telepathy", description: "The flumph can perceive the content of any telepathic communication used within 60 feet of it, and it can't be surprised by creatures with any form of telepathy." },
            { name: "Prone Deficiency", description: "If the flumph is knocked prone, roll a die. On an odd result, the flumph lands upside-down and is incapacitated. At the end of each of its turns, the flumph can make a DC 10 Dexterity saving throw, righting itself and ending the incapacitated condition if it succeeds." },
            { name: "Telepathic Shroud", description: "The flumph is immune to any effect that would sense its emotions or read its thoughts, as well as all divination spells." }
        ],
        actions: [
            { name: "Tendrils", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4+2) piercing damage plus 2 (1d4) acid damage. At the end of each of its turns, the target must make a DC 10 Constitution saving throw, taking 2 (1d4) acid damage on a failure or ending the recurring acid damage on a success. A lesser restoration spell cast on the target also ends the recurring acid damage." },
            { name: "Stench Spray (1/Day)", description: "Each creature in a 15-foot cone originating from the flumph must succeed on a DC 10 Dexterity saving throw or be coated in a foul-smelling liquid. A coated creature exudes a horrible stench for 1d4 hours. The coated creature is poisoned as long as the stench lasts, and other creatures are poisoned while with in 5 feet of the coated creature. A creature can remove the stench on itself by using a short rest to bathe in water, alcohol, or vinegar." }
        ]
    },
    "xorn": {
        name: "Xorn",
        source: "MM",
        size: "medium",
        type: "elemental",
        alignment: "neutral",
        ac: 19,
        acType: "natural armor",
        hp: 73,
        hitDice: "7d8+42",
        speed: { walk: 20, burrow: 20 },
        abilityScores: { str: 17, dex: 10, con: 22, int: 11, wis: 10, cha: 11 },
        skills: { perception: 6, stealth: 3 },
        damageResistances: ["piercing and slashing from nonmagical attacks that aren't adamantine"],
        senses: ["darkvision 60 ft.", "tremorsense 60 ft."],
        languages: "Terran",
        cr: 5,
        environment: ["underdark"],
        role: "brute",
        tags: ["elemental", "earth"],
        traits: [
            { name: "Earth Glide", description: "The xorn can burrow through nonmagical, unworked earth and stone. While doing so, the xorn doesn't disturb the material it moves through." },
            { name: "Stone Camouflage", description: "The xorn has advantage on Dexterity (Stealth) checks made to hide in rocky terrain." },
            { name: "Treasure Sense", description: "The xorn can pinpoint, by scent, the location of precious metals and stones, such as coins and gems, within 60 feet of it." }
        ],
        actions: [
            { name: "Multiattack", description: "The xorn makes three claw attacks and one bite attack." },
            { name: "Claw", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6+3) slashing damage." },
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (3d6+3) piercing damage." }
        ]
    }
};
