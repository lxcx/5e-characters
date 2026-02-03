// Expansion Pack 10 - Even More Coverage
// Filling remaining gaps

const MONSTERS_EXPANSION10 = {
    // ===== More Undead =====
    "wight": {
        name: "Wight",
        source: "MM",
        size: "medium",
        type: "undead",
        alignment: "neutral evil",
        ac: 14,
        acType: "studded leather",
        hp: 45,
        hitDice: "6d8+18",
        speed: { walk: 30 },
        abilityScores: { str: 15, dex: 14, con: 16, int: 10, wis: 13, cha: 15 },
        skills: { perception: 3, stealth: 4 },
        damageResistances: ["necrotic; bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        damageImmunities: ["poison"],
        conditionImmunities: ["exhaustion", "poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "the languages it knew in life",
        cr: 3,
        environment: ["underdark", "urban", "swamp"],
        role: "soldier",
        tags: ["undead"],
        traits: [
            { name: "Sunlight Sensitivity", description: "While in sunlight, the wight has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Multiattack", description: "The wight makes two longsword attacks or two longbow attacks. It can use its Life Drain in place of one longsword attack." },
            { name: "Life Drain", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6+2) necrotic damage. The target must succeed on a DC 13 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0." },
            { name: "Longsword", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8+2) slashing damage, or 7 (1d10+2) slashing damage if used with two hands." },
            { name: "Longbow", description: "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit: 6 (1d8+2) piercing damage." }
        ]
    },
    "vampire-spawn": {
        name: "Vampire Spawn",
        source: "MM",
        size: "medium",
        type: "undead",
        alignment: "neutral evil",
        ac: 15,
        acType: "natural armor",
        hp: 82,
        hitDice: "11d8+33",
        speed: { walk: 30 },
        abilityScores: { str: 16, dex: 16, con: 16, int: 11, wis: 10, cha: 12 },
        savingThrows: { dex: 6, wis: 3 },
        skills: { perception: 3, stealth: 6 },
        damageResistances: ["necrotic; bludgeoning, piercing, and slashing from nonmagical attacks"],
        senses: ["darkvision 60 ft."],
        languages: "the languages it knew in life",
        cr: 5,
        environment: ["urban", "underdark"],
        role: "skirmisher",
        tags: ["undead", "vampire"],
        traits: [
            { name: "Regeneration", description: "The vampire regains 10 hit points at the start of its turn if it has at least 1 hit point and isn't in sunlight or running water. If the vampire takes radiant damage or damage from holy water, this trait doesn't function at the start of the vampire's next turn." },
            { name: "Spider Climb", description: "The vampire can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." },
            { name: "Vampire Weaknesses", description: "The vampire has the following flaws: Forbiddance, Harmed by Running Water, Stake to the Heart, Sunlight Hypersensitivity." }
        ],
        actions: [
            { name: "Multiattack", description: "The vampire makes two attacks, only one of which can be a bite attack." },
            { name: "Claws", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 8 (2d4+3) slashing damage. Instead of dealing damage, the vampire can grapple the target (escape DC 13)." },
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one willing creature, or a creature that is grappled by the vampire, incapacitated, or restrained. Hit: 6 (1d6+3) piercing damage plus 7 (2d6) necrotic damage. The target's hit point maximum is reduced by an amount equal to the necrotic damage taken, and the vampire regains hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0." }
        ]
    },
    "flameskull": {
        name: "Flameskull",
        source: "MM",
        size: "tiny",
        type: "undead",
        alignment: "neutral evil",
        ac: 13,
        hp: 40,
        hitDice: "9d4+18",
        speed: { walk: 0, fly: 40 },
        abilityScores: { str: 1, dex: 17, con: 14, int: 16, wis: 10, cha: 11 },
        skills: { arcana: 5, perception: 2 },
        damageResistances: ["lightning", "necrotic", "piercing"],
        damageImmunities: ["cold", "fire", "poison"],
        conditionImmunities: ["charmed", "frightened", "paralyzed", "poisoned", "prone"],
        senses: ["darkvision 60 ft."],
        languages: "Common",
        cr: 4,
        environment: ["dungeon"],
        role: "artillery",
        tags: ["undead"],
        traits: [
            { name: "Illumination", description: "The flameskull sheds either dim light in a 15-foot radius, or bright light in a 15-foot radius and dim light for an additional 15 feet. It can switch between the options as an action." },
            { name: "Magic Resistance", description: "The flameskull has advantage on saving throws against spells and other magical effects." },
            { name: "Rejuvenation", description: "If the flameskull is destroyed, it regains all its hit points in 1 hour unless holy water is sprinkled on its remains or a dispel magic or remove curse spell is cast on them." }
        ],
        actions: [
            { name: "Multiattack", description: "The flameskull uses Fire Ray twice." },
            { name: "Fire Ray", description: "Ranged Spell Attack: +5 to hit, range 30 ft., one target. Hit: 10 (3d6) fire damage." }
        ],
        spellcasting: {
            ability: "int",
            dc: 13,
            attack: 5,
            spells: {
                cantrips: ["mage hand"],
                "1st": { slots: 3, spells: ["magic missile", "shield"] },
                "2nd": { slots: 2, spells: ["blur", "flaming sphere"] },
                "3rd": { slots: 1, spells: ["fireball"] }
            }
        }
    },
    "revenant": {
        name: "Revenant",
        source: "MM",
        size: "medium",
        type: "undead",
        alignment: "neutral",
        ac: 13,
        acType: "leather armor",
        hp: 136,
        hitDice: "16d8+64",
        speed: { walk: 30 },
        abilityScores: { str: 18, dex: 14, con: 18, int: 13, wis: 16, cha: 18 },
        savingThrows: { str: 7, con: 7, wis: 6, cha: 7 },
        damageResistances: ["necrotic", "psychic"],
        damageImmunities: ["poison"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "poisoned", "stunned"],
        senses: ["darkvision 60 ft."],
        languages: "the languages it knew in life",
        cr: 5,
        environment: ["any"],
        role: "brute",
        tags: ["undead"],
        traits: [
            { name: "Regeneration", description: "The revenant regains 10 hit points at the start of its turn. If the revenant takes fire or radiant damage, this trait doesn't function at the start of the revenant's next turn. The revenant's body is destroyed only if it starts its turn with 0 hit points and doesn't regenerate." },
            { name: "Rejuvenation", description: "When the revenant's body is destroyed, its soul lingers. After 24 hours, the soul inhabits and animates another humanoid corpse on the same plane of existence and regains all its hit points. While the soul is bodiless, a wish spell can be used to force the soul to go to the afterlife and not return." },
            { name: "Turn Immunity", description: "The revenant is immune to effects that turn undead." },
            { name: "Vengeful Tracker", description: "The revenant knows the distance to and direction of any creature against which it seeks revenge, even if the creature and the revenant are on different planes of existence." }
        ],
        actions: [
            { name: "Multiattack", description: "The revenant makes two fist attacks." },
            { name: "Fist", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6+4) bludgeoning damage. If the target is a creature against which the revenant has sworn vengeance, the target takes an extra 14 (4d6) bludgeoning damage. Instead of dealing damage, the revenant can grapple the target (escape DC 14) provided the target is Large or smaller." },
            { name: "Vengeful Glare", description: "The revenant targets one creature it can see within 30 feet of it and against which it has sworn vengeance. The target must make a DC 15 Wisdom saving throw. On a failure, the target is paralyzed until the revenant deals damage to it, or until the end of the revenant's next turn." }
        ]
    },

    // ===== More Classic Monsters =====
    "owlbear": {
        name: "Owlbear",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 59,
        hitDice: "7d10+21",
        speed: { walk: 40 },
        abilityScores: { str: 20, dex: 12, con: 17, int: 3, wis: 12, cha: 7 },
        skills: { perception: 3 },
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 3,
        environment: ["forest"],
        role: "brute",
        tags: ["monstrosity"],
        traits: [
            { name: "Keen Sight and Smell", description: "The owlbear has advantage on Wisdom (Perception) checks that rely on sight or smell." }
        ],
        actions: [
            { name: "Multiattack", description: "The owlbear makes two attacks: one with its beak and one with its claws." },
            { name: "Beak", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 10 (1d10+5) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8+5) slashing damage." }
        ]
    },
    "griffon": {
        name: "Griffon",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 12,
        hp: 59,
        hitDice: "7d10+21",
        speed: { walk: 30, fly: 80 },
        abilityScores: { str: 18, dex: 15, con: 16, int: 2, wis: 13, cha: 8 },
        skills: { perception: 5 },
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 2,
        environment: ["grassland", "hill", "mountain", "coastal"],
        role: "skirmisher",
        tags: ["monstrosity", "mount"],
        traits: [
            { name: "Keen Sight", description: "The griffon has advantage on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Multiattack", description: "The griffon makes two attacks: one with its beak and one with its claws." },
            { name: "Beak", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8+4) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6+4) slashing damage." }
        ]
    },
    "hippogriff": {
        name: "Hippogriff",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 11,
        hp: 19,
        hitDice: "3d10+3",
        speed: { walk: 40, fly: 60 },
        abilityScores: { str: 17, dex: 13, con: 13, int: 2, wis: 12, cha: 8 },
        skills: { perception: 5 },
        senses: [],
        languages: "—",
        cr: 1,
        environment: ["grassland", "hill", "mountain"],
        role: "skirmisher",
        tags: ["monstrosity", "mount"],
        traits: [
            { name: "Keen Sight", description: "The hippogriff has advantage on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Multiattack", description: "The hippogriff makes two attacks: one with its beak and one with its claws." },
            { name: "Beak", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10+3) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6+3) slashing damage." }
        ]
    },
    "peryton": {
        name: "Peryton",
        source: "MM",
        size: "medium",
        type: "monstrosity",
        alignment: "chaotic evil",
        ac: 13,
        acType: "natural armor",
        hp: 33,
        hitDice: "6d8+6",
        speed: { walk: 20, fly: 60 },
        abilityScores: { str: 16, dex: 12, con: 13, int: 9, wis: 12, cha: 10 },
        skills: { perception: 5 },
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        senses: [],
        languages: "understands Common and Elvish but can't speak",
        cr: 2,
        environment: ["hill", "mountain"],
        role: "skirmisher",
        tags: ["monstrosity"],
        traits: [
            { name: "Dive Attack", description: "If the peryton is flying and dives at least 30 feet straight toward a target and then hits it with a melee weapon attack, the attack deals an extra 9 (2d8) damage to the target." },
            { name: "Flyby", description: "The peryton doesn't provoke an opportunity attack when it flies out of an enemy's reach." },
            { name: "Keen Sight and Smell", description: "The peryton has advantage on Wisdom (Perception) checks that rely on sight or smell." }
        ],
        actions: [
            { name: "Multiattack", description: "The peryton makes one gore attack and one talon attack." },
            { name: "Gore", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8+3) piercing damage." },
            { name: "Talons", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (2d4+3) piercing damage." }
        ]
    },
    "chimera": {
        name: "Chimera",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "chaotic evil",
        ac: 14,
        acType: "natural armor",
        hp: 114,
        hitDice: "12d10+48",
        speed: { walk: 30, fly: 60 },
        abilityScores: { str: 19, dex: 11, con: 19, int: 3, wis: 14, cha: 10 },
        skills: { perception: 8 },
        senses: ["darkvision 60 ft."],
        languages: "understands Draconic but can't speak",
        cr: 6,
        environment: ["hill", "mountain"],
        role: "brute",
        tags: ["monstrosity"],
        actions: [
            { name: "Multiattack", description: "The chimera makes three attacks: one with its bite, one with its horns, and one with its claws. When its fire breath is available, it can use the breath in place of its bite or horns." },
            { name: "Bite", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6+4) piercing damage." },
            { name: "Horns", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 10 (1d12+4) bludgeoning damage." },
            { name: "Claws", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6+4) slashing damage." },
            { name: "Fire Breath (Recharge 5-6)", description: "The dragon head exhales fire in a 15-foot cone. Each creature in that area must make a DC 15 Dexterity saving throw, taking 31 (7d8) fire damage on a failed save, or half as much damage on a successful one." }
        ]
    },
    "hydra": {
        name: "Hydra",
        source: "MM",
        size: "huge",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 15,
        acType: "natural armor",
        hp: 172,
        hitDice: "15d12+75",
        speed: { walk: 30, swim: 30 },
        abilityScores: { str: 20, dex: 12, con: 20, int: 2, wis: 10, cha: 7 },
        skills: { perception: 6 },
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 8,
        environment: ["swamp"],
        role: "brute",
        tags: ["monstrosity"],
        traits: [
            { name: "Hold Breath", description: "The hydra can hold its breath for 1 hour." },
            { name: "Multiple Heads", description: "The hydra has five heads. While it has more than one head, the hydra has advantage on saving throws against being blinded, charmed, deafened, frightened, stunned, and knocked unconscious." },
            { name: "Reactive Heads", description: "For each head the hydra has beyond one, it gets an extra reaction that can be used only for opportunity attacks." },
            { name: "Wakeful", description: "While the hydra sleeps, at least one of its heads is awake." }
        ],
        actions: [
            { name: "Multiattack", description: "The hydra makes as many bite attacks as it has heads." },
            { name: "Bite", description: "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 10 (1d10+5) piercing damage." }
        ]
    },
    "lamia": {
        name: "Lamia",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "chaotic evil",
        ac: 13,
        acType: "natural armor",
        hp: 97,
        hitDice: "13d10+26",
        speed: { walk: 30 },
        abilityScores: { str: 16, dex: 13, con: 15, int: 14, wis: 15, cha: 16 },
        skills: { deception: 7, insight: 4, stealth: 3 },
        senses: ["darkvision 60 ft."],
        languages: "Abyssal, Common",
        cr: 4,
        environment: ["desert"],
        role: "controller",
        tags: ["monstrosity"],
        traits: [
            { name: "Intoxicating Touch", description: "The lamia can magically touch a willing creature or a creature the lamia has grappled. The target must succeed on a DC 13 Wisdom saving throw against this magic or be charmed for 1 hour. The charmed target is under the lamia's control, obeying the lamia's verbal commands, and has disadvantage on saving throws against spells the lamia casts. If the lamia or the lamia's companions do anything harmful to the target, it can repeat the saving throw." }
        ],
        actions: [
            { name: "Multiattack", description: "The lamia makes two attacks: one with its claws and one with its dagger or Intoxicating Touch." },
            { name: "Claws", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 14 (2d10+3) slashing damage." },
            { name: "Dagger", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4+3) piercing damage." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 13,
            spells: {
                atWill: ["disguise self (any humanoid form)", "major image"],
                "3/day each": ["charm person", "mirror image", "scrying", "suggestion"],
                "1/day": ["geas"]
            }
        }
    },
    "harpy": {
        name: "Harpy",
        source: "MM",
        size: "medium",
        type: "monstrosity",
        alignment: "chaotic evil",
        ac: 11,
        hp: 38,
        hitDice: "7d8+7",
        speed: { walk: 20, fly: 40 },
        abilityScores: { str: 12, dex: 13, con: 12, int: 7, wis: 10, cha: 13 },
        senses: [],
        languages: "Common",
        cr: 1,
        environment: ["coastal", "forest", "hill", "mountain"],
        role: "controller",
        tags: ["monstrosity"],
        actions: [
            { name: "Multiattack", description: "The harpy makes two attacks: one with its claws and one with its club." },
            { name: "Claws", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4+1) slashing damage." },
            { name: "Club", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4+1) bludgeoning damage." },
            { name: "Luring Song", description: "The harpy sings a magical melody. Every humanoid and giant within 300 feet of the harpy that can hear the song must succeed on a DC 11 Wisdom saving throw or be charmed until the song ends. The harpy must take a bonus action on its subsequent turns to continue singing. It can stop singing at any time. The song ends if the harpy is incapacitated." }
        ]
    },

    // ===== Yugoloths =====
    "mezzoloth": {
        name: "Mezzoloth",
        source: "MM",
        size: "medium",
        type: "fiend",
        subtype: "yugoloth",
        alignment: "neutral evil",
        ac: 18,
        acType: "natural armor",
        hp: 75,
        hitDice: "10d8+30",
        speed: { walk: 40 },
        abilityScores: { str: 18, dex: 11, con: 16, int: 7, wis: 10, cha: 11 },
        skills: { perception: 3 },
        damageResistances: ["cold", "fire", "lightning; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["acid", "poison"],
        conditionImmunities: ["poisoned"],
        senses: ["blindsight 60 ft.", "darkvision 60 ft."],
        languages: "Abyssal, Infernal, telepathy 60 ft.",
        cr: 5,
        environment: ["lower planes"],
        role: "soldier",
        tags: ["fiend", "yugoloth"],
        traits: [
            { name: "Magic Resistance", description: "The mezzoloth has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "The mezzoloth's weapon attacks are magical." }
        ],
        actions: [
            { name: "Multiattack", description: "The mezzoloth makes two attacks: one with its claws and one with its trident." },
            { name: "Claws", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (2d4+4) slashing damage." },
            { name: "Trident", description: "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 7 (1d6+4) piercing damage, or 8 (1d8+4) piercing damage when held with two claws and used to make a melee attack." },
            { name: "Teleport", description: "The mezzoloth magically teleports, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 11,
            spells: {
                "2/day each": ["darkness", "dispel magic"],
                "1/day": ["cloudkill"]
            }
        }
    },
    "nycaloth": {
        name: "Nycaloth",
        source: "MM",
        size: "large",
        type: "fiend",
        subtype: "yugoloth",
        alignment: "neutral evil",
        ac: 18,
        acType: "natural armor",
        hp: 123,
        hitDice: "13d10+52",
        speed: { walk: 40, fly: 60 },
        abilityScores: { str: 20, dex: 11, con: 19, int: 12, wis: 10, cha: 15 },
        skills: { intimidation: 6, perception: 4, stealth: 4 },
        damageResistances: ["cold", "fire", "lightning; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["acid", "poison"],
        conditionImmunities: ["poisoned"],
        senses: ["blindsight 60 ft.", "darkvision 60 ft."],
        languages: "Abyssal, Infernal, telepathy 60 ft.",
        cr: 9,
        environment: ["lower planes"],
        role: "skirmisher",
        tags: ["fiend", "yugoloth"],
        traits: [
            { name: "Magic Resistance", description: "The nycaloth has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "The nycaloth's weapon attacks are magical." }
        ],
        actions: [
            { name: "Multiattack", description: "The nycaloth makes two melee attacks, or it makes one melee attack and teleports before or after the attack." },
            { name: "Claw", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6+5) slashing damage. If the target is a creature, it must succeed on a DC 16 Constitution saving throw or take 5 (2d4) slashing damage at the start of each of its turns due to a fiendish wound. Each time the nycaloth hits the wounded target with this attack, the damage dealt by the wound increases by 5 (2d4)." },
            { name: "Greataxe", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 18 (2d12+5) slashing damage." },
            { name: "Teleport", description: "The nycaloth magically teleports, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 14,
            spells: {
                atWill: ["darkness", "detect magic", "dispel magic", "invisibility (self only)", "mirror image"]
            }
        }
    },
    "arcanaloth": {
        name: "Arcanaloth",
        source: "MM",
        size: "medium",
        type: "fiend",
        subtype: "yugoloth",
        alignment: "neutral evil",
        ac: 17,
        acType: "natural armor",
        hp: 104,
        hitDice: "16d8+32",
        speed: { walk: 30, fly: 30 },
        abilityScores: { str: 17, dex: 12, con: 14, int: 20, wis: 16, cha: 17 },
        savingThrows: { dex: 5, int: 9, wis: 7, cha: 7 },
        skills: { arcana: 13, deception: 9, insight: 9, perception: 7 },
        damageResistances: ["cold", "fire", "lightning; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["acid", "poison"],
        conditionImmunities: ["charmed", "poisoned"],
        senses: ["truesight 120 ft."],
        languages: "all, telepathy 120 ft.",
        cr: 12,
        environment: ["lower planes"],
        role: "controller",
        tags: ["fiend", "yugoloth", "spellcaster"],
        traits: [
            { name: "Magic Resistance", description: "The arcanaloth has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "The arcanaloth's weapon attacks are magical." }
        ],
        actions: [
            { name: "Claws", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (2d4+3) slashing damage. The target must make a DC 14 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one." },
            { name: "Teleport", description: "The arcanaloth magically teleports, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see." }
        ],
        spellcasting: {
            ability: "int",
            dc: 17,
            attack: 9,
            spells: {
                cantrips: ["fire bolt", "mage hand", "minor illusion", "prestidigitation"],
                "1st": { slots: 4, spells: ["detect magic", "identify", "shield", "Tenser's floating disk"] },
                "2nd": { slots: 3, spells: ["detect thoughts", "mirror image", "phantasmal force", "suggestion"] },
                "3rd": { slots: 3, spells: ["counterspell", "fear", "fireball"] },
                "4th": { slots: 3, spells: ["banishment", "dimension door"] },
                "5th": { slots: 2, spells: ["contact other plane", "hold monster"] },
                "6th": { slots: 1, spells: ["chain lightning"] },
                "7th": { slots: 1, spells: ["finger of death"] },
                "8th": { slots: 1, spells: ["mind blank"] }
            }
        }
    },
    "ultroloth": {
        name: "Ultroloth",
        source: "MM",
        size: "medium",
        type: "fiend",
        subtype: "yugoloth",
        alignment: "neutral evil",
        ac: 19,
        acType: "natural armor",
        hp: 153,
        hitDice: "18d8+72",
        speed: { walk: 30, fly: 60 },
        abilityScores: { str: 16, dex: 16, con: 18, int: 18, wis: 15, cha: 19 },
        savingThrows: { int: 9, wis: 7, cha: 9 },
        skills: { intimidation: 9, perception: 7, stealth: 8 },
        damageResistances: ["cold", "fire", "lightning; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["acid", "poison"],
        conditionImmunities: ["charmed", "frightened", "poisoned"],
        senses: ["truesight 120 ft."],
        languages: "Abyssal, Infernal, telepathy 120 ft.",
        cr: 13,
        environment: ["lower planes"],
        role: "leader",
        tags: ["fiend", "yugoloth"],
        traits: [
            { name: "Magic Resistance", description: "The ultroloth has advantage on saving throws against spells and other magical effects." },
            { name: "Magic Weapons", description: "The ultroloth's weapon attacks are magical." }
        ],
        actions: [
            { name: "Multiattack", description: "The ultroloth can use its Hypnotic Gaze and makes three melee attacks." },
            { name: "Longsword", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 7 (1d8+3) slashing damage, or 8 (1d10+3) slashing damage if used with two hands." },
            { name: "Hypnotic Gaze", description: "The ultroloth's eyes sparkle with opalescent light as it targets one creature it can see within 30 feet of it. If the target can see the ultroloth, the target must succeed on a DC 17 Wisdom saving throw against this magic or be charmed until the end of the ultroloth's next turn. The charmed target is stunned. If the target's saving throw is successful, the target is immune to the ultroloth's gaze for the next 24 hours." },
            { name: "Teleport", description: "The ultroloth magically teleports, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 17,
            spells: {
                atWill: ["alter self", "clairvoyance", "darkness", "detect magic", "detect thoughts", "dispel magic", "invisibility (self only)", "suggestion"],
                "3/day each": ["dimension door", "fear", "wall of fire"],
                "1/day each": ["fire storm", "mass suggestion"]
            }
        }
    }
};
