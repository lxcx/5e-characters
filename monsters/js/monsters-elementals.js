// Elementals, Oozes, and Constructs
// Source: MM (Monster Manual)

const MONSTERS_ELEMENTALS = {
    // ===== ELEMENTALS =====
    "air-elemental": {
        name: "Air Elemental",
        source: "MM",
        size: "large",
        type: "elemental",
        alignment: "neutral",
        ac: 15,
        hp: 90,
        hitDice: "12d10+24",
        speed: { walk: 0, fly: 90 },
        abilityScores: { str: 14, dex: 20, con: 14, int: 6, wis: 10, cha: 6 },
        damageResistances: ["lightning", "thunder; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["exhaustion", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained", "unconscious"],
        senses: ["darkvision 60 ft."],
        languages: "Auran",
        cr: 5,
        traits: [
            { name: "Air Form", description: "The elemental can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing." }
        ],
        actions: [
            { name: "Multiattack", description: "The elemental makes two slam attacks." },
            { name: "Slam", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 14 (2d8+5) bludgeoning damage." },
            { name: "Whirlwind (Recharge 4-6)", description: "Each creature in the elemental's space must make a DC 13 Strength saving throw. On a failure, a target takes 15 (3d8+2) bludgeoning damage and is flung up 20 feet away from the elemental in a random direction and knocked prone." }
        ]
    },
    "earth-elemental": {
        name: "Earth Elemental",
        source: "MM",
        size: "large",
        type: "elemental",
        alignment: "neutral",
        ac: 17,
        acType: "natural armor",
        hp: 126,
        hitDice: "12d10+60",
        speed: { walk: 30, burrow: 30 },
        abilityScores: { str: 20, dex: 8, con: 20, int: 5, wis: 10, cha: 5 },
        damageVulnerabilities: ["thunder"],
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["exhaustion", "paralyzed", "petrified", "poisoned", "unconscious"],
        senses: ["darkvision 60 ft.", "tremorsense 60 ft."],
        languages: "Terran",
        cr: 5,
        traits: [
            { name: "Earth Glide", description: "The elemental can burrow through nonmagical, unworked earth and stone. While doing so, the elemental doesn't disturb the material it moves through." },
            { name: "Siege Monster", description: "The elemental deals double damage to objects and structures." }
        ],
        actions: [
            { name: "Multiattack", description: "The elemental makes two slam attacks." },
            { name: "Slam", description: "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 14 (2d8+5) bludgeoning damage." }
        ]
    },
    "fire-elemental": {
        name: "Fire Elemental",
        source: "MM",
        size: "large",
        type: "elemental",
        alignment: "neutral",
        ac: 13,
        hp: 102,
        hitDice: "12d10+36",
        speed: { walk: 50 },
        abilityScores: { str: 10, dex: 17, con: 16, int: 6, wis: 10, cha: 7 },
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["exhaustion", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained", "unconscious"],
        senses: ["darkvision 60 ft."],
        languages: "Ignan",
        cr: 5,
        traits: [
            { name: "Fire Form", description: "The elemental can move through a space as narrow as 1 inch wide without squeezing. A creature that touches the elemental or hits it with a melee attack while within 5 feet of it takes 5 (1d10) fire damage. In addition, the elemental can enter a hostile creature's space and stop there. The first time it enters a creature's space on a turn, that creature takes 5 (1d10) fire damage and catches fire; until someone takes an action to douse the fire, the creature takes 5 (1d10) fire damage at the start of each of its turns." },
            { name: "Illumination", description: "The elemental sheds bright light in a 30-foot radius and dim light in an additional 30 feet." },
            { name: "Water Susceptibility", description: "For every 5 feet the elemental moves in water, or for every gallon of water splashed on it, it takes 1 cold damage." }
        ],
        actions: [
            { name: "Multiattack", description: "The elemental makes two touch attacks." },
            { name: "Touch", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6+3) fire damage. If the target is a creature or a flammable object, it ignites. Until a creature takes an action to douse the fire, the target takes 5 (1d10) fire damage at the start of each of its turns." }
        ]
    },
    "water-elemental": {
        name: "Water Elemental",
        source: "MM",
        size: "large",
        type: "elemental",
        alignment: "neutral",
        ac: 14,
        acType: "natural armor",
        hp: 114,
        hitDice: "12d10+48",
        speed: { walk: 30, swim: 90 },
        abilityScores: { str: 18, dex: 14, con: 18, int: 5, wis: 10, cha: 8 },
        damageResistances: ["acid; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["exhaustion", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained", "unconscious"],
        senses: ["darkvision 60 ft."],
        languages: "Aquan",
        cr: 5,
        traits: [
            { name: "Water Form", description: "The elemental can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing." },
            { name: "Freeze", description: "If the elemental takes cold damage, it partially freezes; its speed is reduced by 20 feet until the end of its next turn." }
        ],
        actions: [
            { name: "Multiattack", description: "The elemental makes two slam attacks." },
            { name: "Slam", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8+4) bludgeoning damage." },
            { name: "Whelm (Recharge 4-6)", description: "Each creature in the elemental's space must make a DC 15 Strength saving throw. On a failure, a target takes 13 (2d8+4) bludgeoning damage. If it is Large or smaller, it is also grappled (escape DC 14). Until this grapple ends, the target is restrained and unable to breathe unless it can breathe water. If the saving throw is successful, the target is pushed out of the elemental's space." }
        ]
    },
    "galeb-duhr": {
        name: "Galeb Duhr",
        source: "MM",
        size: "medium",
        type: "elemental",
        alignment: "neutral",
        ac: 16,
        acType: "natural armor",
        hp: 85,
        hitDice: "9d8+45",
        speed: { walk: 15, burrow: 15 },
        abilityScores: { str: 20, dex: 14, con: 20, int: 11, wis: 12, cha: 11 },
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["exhaustion", "paralyzed", "petrified", "poisoned"],
        senses: ["darkvision 60 ft.", "tremorsense 60 ft."],
        languages: "Terran",
        cr: 6,
        traits: [
            { name: "False Appearance", description: "While the galeb duhr remains motionless, it is indistinguishable from a normal boulder." },
            { name: "Rolling Charge", description: "If the galeb duhr rolls at least 20 feet straight toward a target and then hits it with a slam attack on the same turn, the target takes an extra 7 (2d6) bludgeoning damage. If the target is a creature, it must succeed on a DC 16 Strength saving throw or be knocked prone." }
        ],
        actions: [
            { name: "Slam", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 12 (2d6+5) bludgeoning damage." },
            { name: "Animate Boulders (1/Day)", description: "The galeb duhr magically animates up to two boulders it can see within 60 feet of it. A boulder has statistics like those of a galeb duhr, except it has Intelligence 1 and Charisma 1, it can't be charmed or frightened, and it lacks this action option. A boulder remains animated as long as the galeb duhr maintains concentration, up to 1 minute (as if concentrating on a spell)." }
        ]
    },
    "magmin": {
        name: "Magmin",
        source: "MM",
        size: "small",
        type: "elemental",
        alignment: "chaotic neutral",
        ac: 14,
        acType: "natural armor",
        hp: 9,
        hitDice: "2d6+2",
        speed: { walk: 30 },
        abilityScores: { str: 7, dex: 15, con: 12, int: 8, wis: 11, cha: 10 },
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["fire"],
        senses: ["darkvision 60 ft."],
        languages: "Ignan",
        cr: 0.5,
        traits: [
            { name: "Death Burst", description: "When the magmin dies, it explodes in a burst of fire and magma. Each creature within 10 feet of it must make a DC 11 Dexterity saving throw, taking 7 (2d6) fire damage on a failed save, or half as much damage on a successful one. Flammable objects that aren't being worn or carried in that area are ignited." },
            { name: "Ignited Illumination", description: "As a bonus action, the magmin can set itself ablaze or extinguish its flames. While ablaze, the magmin sheds bright light in a 10-foot radius and dim light for an additional 10 feet." }
        ],
        actions: [
            { name: "Touch", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d6) fire damage. If the target is a creature or a flammable object, it ignites. Until a creature takes an action to douse the fire, the target takes 3 (1d6) fire damage at the end of each of its turns." }
        ]
    },
    "mephit-dust": {
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
    "mephit-ice": {
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
    "mephit-magma": {
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
    "mephit-mud": {
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
        traits: [
            { name: "Death Burst", description: "When the mephit dies, it explodes in a burst of sticky mud. Each Medium or smaller creature within 5 feet of it must succeed on a DC 11 Dexterity saving throw or be restrained until the end of the creature's next turn." },
            { name: "False Appearance", description: "While the mephit remains motionless, it is indistinguishable from an ordinary mound of mud." }
        ],
        actions: [
            { name: "Fists", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 4 (1d6+1) bludgeoning damage." },
            { name: "Mud Breath (Recharge 6)", description: "The mephit belches viscid mud at one creature within 5 feet of it. If the target is Medium or smaller, it must succeed on a DC 11 Dexterity saving throw or be restrained for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." }
        ]
    },
    "mephit-smoke": {
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
    "mephit-steam": {
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
    "salamander": {
        name: "Salamander",
        source: "MM",
        size: "large",
        type: "elemental",
        alignment: "neutral evil",
        ac: 15,
        acType: "natural armor",
        hp: 90,
        hitDice: "12d10+24",
        speed: { walk: 30 },
        abilityScores: { str: 18, dex: 14, con: 15, int: 11, wis: 10, cha: 12 },
        damageVulnerabilities: ["cold"],
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["fire"],
        senses: ["darkvision 60 ft."],
        languages: "Ignan",
        cr: 5,
        traits: [
            { name: "Heated Body", description: "A creature that touches the salamander or hits it with a melee attack while within 5 feet of it takes 7 (2d6) fire damage." },
            { name: "Heated Weapons", description: "Any metal melee weapon the salamander wields deals an extra 3 (1d6) fire damage on a hit (included in the attack)." }
        ],
        actions: [
            { name: "Multiattack", description: "The salamander makes two attacks: one with its spear and one with its tail." },
            { name: "Spear", description: "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 11 (2d6+4) piercing damage, or 13 (2d8+4) piercing damage if used with two hands to make a melee attack, plus 3 (1d6) fire damage." },
            { name: "Tail", description: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 11 (2d6+4) bludgeoning damage plus 7 (2d6) fire damage, and the target is grappled (escape DC 14). Until this grapple ends, the target is restrained, the salamander can automatically hit the target with its tail, and the salamander can't make tail attacks against other targets." }
        ]
    },
    "fire-snake": {
        name: "Fire Snake",
        source: "MM",
        size: "medium",
        type: "elemental",
        alignment: "neutral evil",
        ac: 14,
        acType: "natural armor",
        hp: 22,
        hitDice: "5d8",
        speed: { walk: 30 },
        abilityScores: { str: 12, dex: 14, con: 11, int: 7, wis: 10, cha: 8 },
        damageVulnerabilities: ["cold"],
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["fire"],
        senses: ["darkvision 60 ft."],
        languages: "understands Ignan but can't speak",
        cr: 1,
        traits: [
            { name: "Heated Body", description: "A creature that touches the snake or hits it with a melee attack while within 5 feet of it takes 3 (1d6) fire damage." }
        ],
        actions: [
            { name: "Multiattack", description: "The snake makes two attacks: one with its bite and one with its tail." },
            { name: "Bite", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4+1) piercing damage plus 3 (1d6) fire damage." },
            { name: "Tail", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4+1) bludgeoning damage plus 3 (1d6) fire damage." }
        ]
    },
    "azer": {
        name: "Azer",
        source: "MM",
        size: "medium",
        type: "elemental",
        alignment: "lawful neutral",
        ac: 17,
        acType: "natural armor, shield",
        hp: 39,
        hitDice: "6d8+12",
        speed: { walk: 30 },
        abilityScores: { str: 17, dex: 12, con: 15, int: 12, wis: 13, cha: 10 },
        savingThrows: { con: 4 },
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["poisoned"],
        senses: [],
        languages: "Ignan",
        cr: 2,
        traits: [
            { name: "Heated Body", description: "A creature that touches the azer or hits it with a melee attack while within 5 feet of it takes 5 (1d10) fire damage." },
            { name: "Heated Weapons", description: "When the azer hits with a metal melee weapon, it deals an extra 3 (1d6) fire damage (included in the attack)." },
            { name: "Illumination", description: "The azer sheds bright light in a 10-foot radius and dim light for an additional 10 feet." }
        ],
        actions: [
            { name: "Warhammer", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8+3) bludgeoning damage, or 8 (1d10+3) bludgeoning damage if used with two hands to make a melee attack, plus 3 (1d6) fire damage." }
        ]
    },
    "invisible-stalker": {
        name: "Invisible Stalker",
        source: "MM",
        size: "medium",
        type: "elemental",
        alignment: "neutral",
        ac: 14,
        hp: 104,
        hitDice: "16d8+32",
        speed: { walk: 50, fly: 50 },
        abilityScores: { str: 16, dex: 19, con: 14, int: 10, wis: 15, cha: 11 },
        skills: { perception: 8, stealth: 10 },
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["exhaustion", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained", "unconscious"],
        senses: ["darkvision 60 ft."],
        languages: "Auran, understands Common but doesn't speak it",
        cr: 6,
        traits: [
            { name: "Invisibility", description: "The stalker is invisible." },
            { name: "Faultless Tracker", description: "The stalker is given a quarry by its summoner. The stalker knows the direction and distance to its quarry as long as the two of them are on the same plane of existence. The stalker also knows the location of its summoner." }
        ],
        actions: [
            { name: "Multiattack", description: "The stalker makes two slam attacks." },
            { name: "Slam", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6+3) bludgeoning damage." }
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
    },

    // ===== OOZES =====
    "black-pudding": {
        name: "Black Pudding",
        source: "MM",
        size: "large",
        type: "ooze",
        alignment: "unaligned",
        ac: 7,
        hp: 85,
        hitDice: "10d10+30",
        speed: { walk: 20, climb: 20 },
        abilityScores: { str: 16, dex: 5, con: 16, int: 1, wis: 6, cha: 1 },
        damageImmunities: ["acid", "cold", "lightning", "slashing"],
        conditionImmunities: ["blinded", "charmed", "deafened", "exhaustion", "frightened", "prone"],
        senses: ["blindsight 60 ft. (blind beyond this radius)"],
        languages: "—",
        cr: 4,
        traits: [
            { name: "Amorphous", description: "The pudding can move through a space as narrow as 1 inch wide without squeezing." },
            { name: "Corrosive Form", description: "A creature that touches the pudding or hits it with a melee attack while within 5 feet of it takes 4 (1d8) acid damage. Any nonmagical weapon made of metal or wood that hits the pudding corrodes. After dealing damage, the weapon takes a permanent and cumulative −1 penalty to damage rolls. If its penalty drops to −5, the weapon is destroyed. Nonmagical ammunition made of metal or wood that hits the pudding is destroyed after dealing damage. The pudding can eat through 2-inch-thick, nonmagical wood or metal in 1 round." },
            { name: "Spider Climb", description: "The pudding can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." }
        ],
        actions: [
            { name: "Pseudopod", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6+3) bludgeoning damage plus 18 (4d8) acid damage. In addition, nonmagical armor worn by the target is partly dissolved and takes a permanent and cumulative −1 penalty to the AC it offers. The armor is destroyed if the penalty reduces its AC to 10." }
        ],
        reactions: [
            { name: "Split", description: "When a pudding that is Medium or larger is subjected to lightning or slashing damage, it splits into two new puddings if it has at least 10 hit points. Each new pudding has hit points equal to half the original pudding's, rounded down. New puddings are one size smaller than the original pudding." }
        ]
    },
    "gelatinous-cube": {
        name: "Gelatinous Cube",
        source: "MM",
        size: "large",
        type: "ooze",
        alignment: "unaligned",
        ac: 6,
        hp: 84,
        hitDice: "8d10+40",
        speed: { walk: 15 },
        abilityScores: { str: 14, dex: 3, con: 20, int: 1, wis: 6, cha: 1 },
        conditionImmunities: ["blinded", "charmed", "deafened", "exhaustion", "frightened", "prone"],
        senses: ["blindsight 60 ft. (blind beyond this radius)"],
        languages: "—",
        cr: 2,
        traits: [
            { name: "Ooze Cube", description: "The cube takes up its entire space. Other creatures can enter the space, but a creature that does so is subjected to the cube's Engulf and has disadvantage on the saving throw. Creatures inside the cube can be seen but have total cover. A creature within 5 feet of the cube can take an action to pull a creature or object out of the cube. Doing so requires a successful DC 12 Strength check, and the creature making the attempt takes 10 (3d6) acid damage. The cube can hold only one Large creature or up to four Medium or smaller creatures inside it at a time." },
            { name: "Transparent", description: "Even when the cube is in plain sight, it takes a successful DC 15 Wisdom (Perception) check to spot a cube that has neither moved nor attacked. A creature that tries to enter the cube's space while unaware of the cube is surprised by the cube." }
        ],
        actions: [
            { name: "Pseudopod", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 10 (3d6) acid damage." },
            { name: "Engulf", description: "The cube moves up to its speed. While doing so, it can enter Large or smaller creatures' spaces. Whenever the cube enters a creature's space, the creature must make a DC 12 Dexterity saving throw. On a successful save, the creature can choose to be pushed 5 feet back or to the side of the cube. A creature that chooses not to be pushed suffers the consequences of a failed saving throw. On a failed save, the cube enters the creature's space, and the creature takes 10 (3d6) acid damage and is engulfed. The engulfed creature can't breathe, is restrained, and takes 21 (6d6) acid damage at the start of each of the cube's turns. When the cube moves, the engulfed creature moves with it. An engulfed creature can try to escape by taking an action to make a DC 12 Strength check. On a success, the creature escapes and enters a space of its choice within 5 feet of the cube." }
        ]
    },
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
        cr: 0.5,
        traits: [
            { name: "Amorphous", description: "The ooze can move through a space as narrow as 1 inch wide without squeezing." },
            { name: "Corrode Metal", description: "Any nonmagical weapon made of metal that hits the ooze corrodes. After dealing damage, the weapon takes a permanent and cumulative −1 penalty to damage rolls. If its penalty drops to −5, the weapon is destroyed. Nonmagical ammunition made of metal that hits the ooze is destroyed after dealing damage. The ooze can eat through 2-inch-thick, nonmagical metal in 1 round." },
            { name: "False Appearance", description: "While the ooze remains motionless, it is indistinguishable from an oily pool or wet rock." }
        ],
        actions: [
            { name: "Pseudopod", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6+1) bludgeoning damage plus 7 (2d6) acid damage, and if the target is wearing nonmagical metal armor, its armor is partly corroded and takes a permanent and cumulative −1 penalty to the AC it offers. The armor is destroyed if the penalty reduces its AC to 10." }
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
        traits: [
            { name: "Amorphous", description: "The jelly can move through a space as narrow as 1 inch wide without squeezing." },
            { name: "Spider Climb", description: "The jelly can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." }
        ],
        actions: [
            { name: "Pseudopod", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6+2) bludgeoning damage plus 3 (1d6) acid damage." }
        ],
        reactions: [
            { name: "Split", description: "When a jelly that is Medium or larger is subjected to lightning or slashing damage, it splits into two new jellies if it has at least 10 hit points. Each new jelly has hit points equal to half the original jelly's, rounded down. New jellies are one size smaller than the original jelly." }
        ]
    },

    // ===== CONSTRUCTS =====
    "animated-armor": {
        name: "Animated Armor",
        source: "MM",
        size: "medium",
        type: "construct",
        alignment: "unaligned",
        ac: 18,
        acType: "natural armor",
        hp: 33,
        hitDice: "6d8+6",
        speed: { walk: 25 },
        abilityScores: { str: 14, dex: 11, con: 13, int: 1, wis: 3, cha: 1 },
        damageImmunities: ["poison", "psychic"],
        conditionImmunities: ["blinded", "charmed", "deafened", "exhaustion", "frightened", "paralyzed", "petrified", "poisoned"],
        senses: ["blindsight 60 ft. (blind beyond this radius)"],
        languages: "—",
        cr: 1,
        traits: [
            { name: "Antimagic Susceptibility", description: "The armor is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the armor must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute." },
            { name: "False Appearance", description: "While the armor remains motionless, it is indistinguishable from a normal suit of armor." }
        ],
        actions: [
            { name: "Multiattack", description: "The armor makes two melee attacks." },
            { name: "Slam", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6+2) bludgeoning damage." }
        ]
    },
    "flying-sword": {
        name: "Flying Sword",
        source: "MM",
        size: "small",
        type: "construct",
        alignment: "unaligned",
        ac: 17,
        acType: "natural armor",
        hp: 17,
        hitDice: "5d6",
        speed: { walk: 0, fly: 50 },
        abilityScores: { str: 12, dex: 15, con: 11, int: 1, wis: 5, cha: 1 },
        savingThrows: { dex: 4 },
        damageImmunities: ["poison", "psychic"],
        conditionImmunities: ["blinded", "charmed", "deafened", "exhaustion", "frightened", "paralyzed", "petrified", "poisoned"],
        senses: ["blindsight 60 ft. (blind beyond this radius)"],
        languages: "—",
        cr: 0.25,
        traits: [
            { name: "Antimagic Susceptibility", description: "The sword is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the sword must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute." },
            { name: "False Appearance", description: "While the sword remains motionless and isn't flying, it is indistinguishable from a normal sword." }
        ],
        actions: [
            { name: "Longsword", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8+1) slashing damage." }
        ]
    },
    "rug-of-smothering": {
        name: "Rug of Smothering",
        source: "MM",
        size: "large",
        type: "construct",
        alignment: "unaligned",
        ac: 12,
        hp: 33,
        hitDice: "6d10",
        speed: { walk: 10 },
        abilityScores: { str: 17, dex: 14, con: 10, int: 1, wis: 3, cha: 1 },
        damageImmunities: ["poison", "psychic"],
        conditionImmunities: ["blinded", "charmed", "deafened", "exhaustion", "frightened", "paralyzed", "petrified", "poisoned"],
        senses: ["blindsight 60 ft. (blind beyond this radius)"],
        languages: "—",
        cr: 2,
        traits: [
            { name: "Antimagic Susceptibility", description: "The rug is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the rug must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute." },
            { name: "Damage Transfer", description: "While it is grappling a creature, the rug takes only half the damage dealt to it, and the creature grappled by the rug takes the other half." },
            { name: "False Appearance", description: "While the rug remains motionless, it is indistinguishable from a normal rug." }
        ],
        actions: [
            { name: "Smother", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one Medium or smaller creature. Hit: The creature is grappled (escape DC 13). Until this grapple ends, the target is restrained, blinded, and at risk of suffocating, and the rug can't smother another target. In addition, at the start of each of the target's turns, the target takes 10 (2d6+3) bludgeoning damage." }
        ]
    },
    "golem-clay": {
        name: "Clay Golem",
        source: "MM",
        size: "large",
        type: "construct",
        alignment: "unaligned",
        ac: 14,
        acType: "natural armor",
        hp: 133,
        hitDice: "14d10+56",
        speed: { walk: 20 },
        abilityScores: { str: 20, dex: 9, con: 18, int: 3, wis: 8, cha: 1 },
        damageImmunities: ["acid", "poison", "psychic; bludgeoning, piercing, and slashing from nonmagical attacks that aren't adamantine"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "petrified", "poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "understands the languages of its creator but can't speak",
        cr: 9,
        traits: [
            { name: "Acid Absorption", description: "Whenever the golem is subjected to acid damage, it takes no damage and instead regains a number of hit points equal to the acid damage dealt." },
            { name: "Berserk", description: "Whenever the golem starts its turn with 60 hit points or fewer, roll a d6. On a 6, the golem goes berserk. On each of its turns while berserk, the golem attacks the nearest creature it can see." },
            { name: "Immutable Form", description: "The golem is immune to any spell or effect that would alter its form." },
            { name: "Magic Resistance", description: "The golem has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "The golem's weapon attacks are magical." }
        ],
        actions: [
            { name: "Multiattack", description: "The golem makes two slam attacks." },
            { name: "Slam", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 16 (2d10+5) bludgeoning damage. If the target is a creature, it must succeed on a DC 15 Constitution saving throw or have its hit point maximum reduced by an amount equal to the damage taken. The target dies if this attack reduces its hit point maximum to 0. The reduction lasts until removed by the greater restoration spell or other magic." },
            { name: "Haste (Recharge 5-6)", description: "Until the end of its next turn, the golem magically gains a +2 bonus to its AC, has advantage on Dexterity saving throws, and can use its slam attack as a bonus action." }
        ]
    },
    "golem-flesh": {
        name: "Flesh Golem",
        source: "MM",
        size: "medium",
        type: "construct",
        alignment: "neutral",
        ac: 9,
        hp: 93,
        hitDice: "11d8+44",
        speed: { walk: 30 },
        abilityScores: { str: 19, dex: 9, con: 18, int: 6, wis: 10, cha: 5 },
        damageImmunities: ["lightning", "poison; bludgeoning, piercing, and slashing from nonmagical attacks that aren't adamantine"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "petrified", "poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "understands the languages of its creator but can't speak",
        cr: 5,
        traits: [
            { name: "Berserk", description: "Whenever the golem starts its turn with 40 hit points or fewer, roll a d6. On a 6, the golem goes berserk. On each of its turns while berserk, the golem attacks the nearest creature it can see." },
            { name: "Aversion of Fire", description: "If the golem takes fire damage, it has disadvantage on attack rolls and ability checks until the end of its next turn." },
            { name: "Immutable Form", description: "The golem is immune to any spell or effect that would alter its form." },
            { name: "Lightning Absorption", description: "Whenever the golem is subjected to lightning damage, it takes no damage and instead regains a number of hit points equal to the lightning damage dealt." },
            { name: "Magic Resistance", description: "The golem has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "The golem's weapon attacks are magical." }
        ],
        actions: [
            { name: "Multiattack", description: "The golem makes two slam attacks." },
            { name: "Slam", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8+4) bludgeoning damage." }
        ]
    },
    "golem-iron": {
        name: "Iron Golem",
        source: "MM",
        size: "large",
        type: "construct",
        alignment: "unaligned",
        ac: 20,
        acType: "natural armor",
        hp: 210,
        hitDice: "20d10+100",
        speed: { walk: 30 },
        abilityScores: { str: 24, dex: 9, con: 20, int: 3, wis: 11, cha: 1 },
        damageImmunities: ["fire", "poison", "psychic; bludgeoning, piercing, and slashing from nonmagical attacks that aren't adamantine"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "petrified", "poisoned"],
        senses: ["darkvision 120 ft."],
        languages: "understands the languages of its creator but can't speak",
        cr: 16,
        traits: [
            { name: "Fire Absorption", description: "Whenever the golem is subjected to fire damage, it takes no damage and instead regains a number of hit points equal to the fire damage dealt." },
            { name: "Immutable Form", description: "The golem is immune to any spell or effect that would alter its form." },
            { name: "Magic Resistance", description: "The golem has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "The golem's weapon attacks are magical." }
        ],
        actions: [
            { name: "Multiattack", description: "The golem makes two melee attacks." },
            { name: "Slam", description: "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 20 (3d8+7) bludgeoning damage." },
            { name: "Sword", description: "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 23 (3d10+7) slashing damage." },
            { name: "Poison Breath (Recharge 6)", description: "The golem exhales poisonous gas in a 15-foot cone. Each creature in that area must make a DC 19 Constitution saving throw, taking 45 (10d8) poison damage on a failed save, or half as much damage on a successful one." }
        ]
    },
    "golem-stone": {
        name: "Stone Golem",
        source: "MM",
        size: "large",
        type: "construct",
        alignment: "unaligned",
        ac: 17,
        acType: "natural armor",
        hp: 178,
        hitDice: "17d10+85",
        speed: { walk: 30 },
        abilityScores: { str: 22, dex: 9, con: 20, int: 3, wis: 11, cha: 1 },
        damageImmunities: ["poison", "psychic; bludgeoning, piercing, and slashing from nonmagical attacks that aren't adamantine"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "petrified", "poisoned"],
        senses: ["darkvision 120 ft."],
        languages: "understands the languages of its creator but can't speak",
        cr: 10,
        traits: [
            { name: "Immutable Form", description: "The golem is immune to any spell or effect that would alter its form." },
            { name: "Magic Resistance", description: "The golem has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "The golem's weapon attacks are magical." }
        ],
        actions: [
            { name: "Multiattack", description: "The golem makes two slam attacks." },
            { name: "Slam", description: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 19 (3d8+6) bludgeoning damage." },
            { name: "Slow (Recharge 5-6)", description: "The golem targets one or more creatures it can see within 10 feet of it. Each target must make a DC 17 Wisdom saving throw against this magic. On a failed save, a target can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the target can take either an action or a bonus action on its turn, not both. These effects last for 1 minute. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." }
        ]
    },
    "helmed-horror": {
        name: "Helmed Horror",
        source: "MM",
        size: "medium",
        type: "construct",
        alignment: "neutral",
        ac: 20,
        acType: "plate, shield",
        hp: 60,
        hitDice: "8d8+24",
        speed: { walk: 30, fly: 30 },
        abilityScores: { str: 18, dex: 13, con: 16, int: 10, wis: 10, cha: 10 },
        skills: { perception: 4 },
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks that aren't adamantine"],
        damageImmunities: ["force", "necrotic", "poison"],
        conditionImmunities: ["blinded", "charmed", "deafened", "frightened", "paralyzed", "petrified", "poisoned", "stunned"],
        senses: ["blindsight 60 ft. (blind beyond this radius)"],
        languages: "understands the languages of its creator but can't speak",
        cr: 4,
        traits: [
            { name: "Magic Resistance", description: "The helmed horror has advantage on saving throws against spells and other magical effects." },
            { name: "Spell Immunity", description: "The helmed horror is immune to three spells chosen by its creator. Typical immunities include fireball, heat metal, and lightning bolt." }
        ],
        actions: [
            { name: "Multiattack", description: "The helmed horror makes two longsword attacks." },
            { name: "Longsword", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8+4) slashing damage, or 9 (1d10+4) slashing damage if used with two hands." }
        ]
    },
    "shield-guardian": {
        name: "Shield Guardian",
        source: "MM",
        size: "large",
        type: "construct",
        alignment: "unaligned",
        ac: 17,
        acType: "natural armor",
        hp: 142,
        hitDice: "15d10+60",
        speed: { walk: 30 },
        abilityScores: { str: 18, dex: 8, con: 18, int: 7, wis: 10, cha: 3 },
        senses: ["blindsight 10 ft.", "darkvision 60 ft."],
        damageImmunities: ["poison"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "poisoned"],
        languages: "understands commands given in any language but can't speak",
        cr: 7,
        traits: [
            { name: "Bound", description: "The shield guardian is magically bound to an amulet. As long as the guardian and its amulet are on the same plane of existence, the amulet's wearer can telepathically call the guardian to travel to it, and the guardian knows the distance and direction to the amulet. If the guardian is within 60 feet of the amulet's wearer, half of any damage the wearer takes (rounded up) is transferred to the guardian." },
            { name: "Regeneration", description: "The shield guardian regains 10 hit points at the start of its turn if it has at least 1 hit point." },
            { name: "Spell Storing", description: "A spellcaster who wears the shield guardian's amulet can cause the guardian to store one spell of 4th level or lower. To do so, the wearer must cast the spell on the guardian. The spell has no effect but is stored within the guardian. When commanded to do so by the wearer or when a situation arises that was predefined by the spellcaster, the guardian casts the stored spell with any parameters set by the original caster, requiring no components. When the spell is cast or a new spell is stored, any previously stored spell is lost." }
        ],
        actions: [
            { name: "Multiattack", description: "The guardian makes two fist attacks." },
            { name: "Fist", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6+4) bludgeoning damage." }
        ],
        reactions: [
            { name: "Shield", description: "When a creature makes an attack against the wearer of the guardian's amulet, the guardian grants a +2 bonus to the wearer's AC if the guardian is within 5 feet of the wearer." }
        ]
    },
    "scarecrow": {
        name: "Scarecrow",
        source: "MM",
        size: "medium",
        type: "construct",
        alignment: "chaotic evil",
        ac: 11,
        hp: 36,
        hitDice: "8d8",
        speed: { walk: 30 },
        abilityScores: { str: 11, dex: 13, con: 11, int: 10, wis: 10, cha: 13 },
        damageVulnerabilities: ["fire"],
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "poisoned", "unconscious"],
        senses: ["darkvision 60 ft."],
        languages: "understands the languages of its creator but can't speak",
        cr: 1,
        traits: [
            { name: "False Appearance", description: "While the scarecrow remains motionless, it is indistinguishable from an ordinary, inanimate scarecrow." }
        ],
        actions: [
            { name: "Multiattack", description: "The scarecrow makes two claw attacks." },
            { name: "Claw", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4+1) slashing damage. If the target is a creature, it must succeed on a DC 11 Wisdom saving throw or be frightened until the end of the scarecrow's next turn." },
            { name: "Terrifying Glare", description: "The scarecrow targets one creature it can see within 30 feet of it. If the target can see the scarecrow, the target must succeed on a DC 11 Wisdom saving throw or be magically frightened until the end of the scarecrow's next turn. The frightened target is paralyzed." }
        ]
    },
    "homunculus": {
        name: "Homunculus",
        source: "MM",
        size: "tiny",
        type: "construct",
        alignment: "neutral",
        ac: 13,
        acType: "natural armor",
        hp: 5,
        hitDice: "2d4",
        speed: { walk: 20, fly: 40 },
        abilityScores: { str: 4, dex: 15, con: 11, int: 10, wis: 10, cha: 7 },
        damageImmunities: ["poison"],
        conditionImmunities: ["charmed", "poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "understands the languages of its creator but can't speak",
        cr: 0,
        traits: [
            { name: "Telepathic Bond", description: "While the homunculus is on the same plane of existence as its master, it can magically convey what it senses to its master, and the two can communicate telepathically." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 1 piercing damage, and the target must succeed on a DC 10 Constitution saving throw or be poisoned for 1 minute. If the saving throw fails by 5 or more, the target is instead poisoned for 5 (1d10) minutes and unconscious while poisoned in this way." }
        ]
    }
};
