// Giants and Iconic Large Creatures
// Source: MM (Monster Manual)

const MONSTERS_GIANTS = {
    // ===== TRUE GIANTS =====
    "storm-giant": {
        name: "Storm Giant",
        source: "MM",
        size: "huge",
        type: "giant",
        alignment: "chaotic good",
        ac: 16,
        acType: "scale mail",
        hp: 230,
        hitDice: "20d12+100",
        speed: { walk: 50, swim: 50 },
        abilityScores: { str: 29, dex: 14, con: 20, int: 16, wis: 18, cha: 18 },
        savingThrows: { str: 14, con: 10, wis: 9, cha: 9 },
        skills: { arcana: 8, athletics: 14, history: 8, perception: 9 },
        damageResistances: ["cold"],
        damageImmunities: ["lightning", "thunder"],
        senses: [],
        languages: "Common, Giant",
        cr: 13,
        traits: [
            { name: "Amphibious", description: "The giant can breathe air and water." }
        ],
        actions: [
            { name: "Multiattack", description: "The giant makes two greatsword attacks." },
            { name: "Greatsword", description: "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 30 (6d6+9) slashing damage." },
            { name: "Rock", description: "Ranged Weapon Attack: +14 to hit, range 60/240 ft., one target. Hit: 35 (4d12+9) bludgeoning damage." },
            { name: "Lightning Strike (Recharge 5-6)", description: "The giant hurls a magical lightning bolt at a point it can see within 500 feet of it. Each creature within 10 feet of that point must make a DC 17 Dexterity saving throw, taking 54 (12d8) lightning damage on a failed save, or half as much damage on a successful one." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 17,
            spells: {
                atWill: ["detect magic", "feather fall", "levitate", "light"],
                "3/day each": ["control weather", "water breathing"]
            }
        }
    },
    "cloud-giant": {
        name: "Cloud Giant",
        source: "MM",
        size: "huge",
        type: "giant",
        alignment: "neutral good (50%) or neutral evil (50%)",
        ac: 14,
        acType: "natural armor",
        hp: 200,
        hitDice: "16d12+96",
        speed: { walk: 40 },
        abilityScores: { str: 27, dex: 10, con: 22, int: 12, wis: 16, cha: 16 },
        savingThrows: { con: 10, wis: 7, cha: 7 },
        skills: { insight: 7, perception: 7 },
        senses: [],
        languages: "Common, Giant",
        cr: 9,
        traits: [
            { name: "Keen Smell", description: "The giant has advantage on Wisdom (Perception) checks that rely on smell." }
        ],
        actions: [
            { name: "Multiattack", description: "The giant makes two morningstar attacks." },
            { name: "Morningstar", description: "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 21 (3d8+8) piercing damage." },
            { name: "Rock", description: "Ranged Weapon Attack: +12 to hit, range 60/240 ft., one target. Hit: 30 (4d10+8) bludgeoning damage." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 15,
            spells: {
                atWill: ["detect magic", "fog cloud", "light"],
                "3/day each": ["feather fall", "fly", "misty step", "telekinesis"],
                "1/day each": ["control weather", "gaseous form"]
            }
        }
    },
    "fire-giant": {
        name: "Fire Giant",
        source: "MM",
        size: "huge",
        type: "giant",
        alignment: "lawful evil",
        ac: 18,
        acType: "plate",
        hp: 162,
        hitDice: "13d12+78",
        speed: { walk: 30 },
        abilityScores: { str: 25, dex: 9, con: 23, int: 10, wis: 14, cha: 13 },
        savingThrows: { dex: 3, con: 10, cha: 5 },
        skills: { athletics: 11, perception: 6 },
        damageImmunities: ["fire"],
        senses: [],
        languages: "Giant",
        cr: 9,
        actions: [
            { name: "Multiattack", description: "The giant makes two greatsword attacks." },
            { name: "Greatsword", description: "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 28 (6d6+7) slashing damage." },
            { name: "Rock", description: "Ranged Weapon Attack: +11 to hit, range 60/240 ft., one target. Hit: 29 (4d10+7) bludgeoning damage." }
        ]
    },
    "frost-giant": {
        name: "Frost Giant",
        source: "MM",
        size: "huge",
        type: "giant",
        alignment: "neutral evil",
        ac: 15,
        acType: "patchwork armor",
        hp: 138,
        hitDice: "12d12+60",
        speed: { walk: 40 },
        abilityScores: { str: 23, dex: 9, con: 21, int: 9, wis: 10, cha: 12 },
        savingThrows: { con: 8, wis: 3, cha: 4 },
        skills: { athletics: 9, perception: 3 },
        damageImmunities: ["cold"],
        senses: [],
        languages: "Giant",
        cr: 8,
        actions: [
            { name: "Multiattack", description: "The giant makes two greataxe attacks." },
            { name: "Greataxe", description: "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 25 (3d12+6) slashing damage." },
            { name: "Rock", description: "Ranged Weapon Attack: +9 to hit, range 60/240 ft., one target. Hit: 28 (4d10+6) bludgeoning damage." }
        ]
    },
    "stone-giant": {
        name: "Stone Giant",
        source: "MM",
        size: "huge",
        type: "giant",
        alignment: "neutral",
        ac: 17,
        acType: "natural armor",
        hp: 126,
        hitDice: "11d12+55",
        speed: { walk: 40 },
        abilityScores: { str: 23, dex: 15, con: 20, int: 10, wis: 12, cha: 9 },
        savingThrows: { dex: 5, con: 8, wis: 4 },
        skills: { athletics: 12, perception: 4 },
        senses: ["darkvision 60 ft."],
        languages: "Giant",
        cr: 7,
        traits: [
            { name: "Stone Camouflage", description: "The giant has advantage on Dexterity (Stealth) checks made to hide in rocky terrain." }
        ],
        actions: [
            { name: "Multiattack", description: "The giant makes two greatclub attacks." },
            { name: "Greatclub", description: "Melee Weapon Attack: +9 to hit, reach 15 ft., one target. Hit: 19 (3d8+6) bludgeoning damage." },
            { name: "Rock", description: "Ranged Weapon Attack: +9 to hit, range 60/240 ft., one target. Hit: 28 (4d10+6) bludgeoning damage. If the target is a creature, it must succeed on a DC 17 Strength saving throw or be knocked prone." }
        ],
        reactions: [
            { name: "Rock Catching", description: "If a rock or similar object is hurled at the giant, the giant can, with a successful DC 10 Dexterity saving throw, catch the missile and take no bludgeoning damage from it." }
        ]
    },
    "hill-giant": {
        name: "Hill Giant",
        source: "MM",
        size: "huge",
        type: "giant",
        alignment: "chaotic evil",
        ac: 13,
        acType: "natural armor",
        hp: 105,
        hitDice: "10d12+40",
        speed: { walk: 40 },
        abilityScores: { str: 21, dex: 8, con: 19, int: 5, wis: 9, cha: 6 },
        skills: { perception: 2 },
        senses: [],
        languages: "Giant",
        cr: 5,
        actions: [
            { name: "Multiattack", description: "The giant makes two greatclub attacks." },
            { name: "Greatclub", description: "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 18 (3d8+5) bludgeoning damage." },
            { name: "Rock", description: "Ranged Weapon Attack: +8 to hit, range 60/240 ft., one target. Hit: 21 (3d10+5) bludgeoning damage." }
        ]
    },

    // ===== ICONIC LARGE CREATURES =====
    "tarrasque": {
        name: "Tarrasque",
        source: "MM",
        size: "gargantuan",
        type: "monstrosity",
        subtype: "titan",
        alignment: "unaligned",
        ac: 25,
        acType: "natural armor",
        hp: 676,
        hitDice: "33d20+330",
        speed: { walk: 40 },
        abilityScores: { str: 30, dex: 11, con: 30, int: 3, wis: 11, cha: 11 },
        savingThrows: { int: 5, wis: 9, cha: 9 },
        damageImmunities: ["fire", "poison; bludgeoning, piercing, and slashing from nonmagical attacks"],
        conditionImmunities: ["charmed", "frightened", "paralyzed", "poisoned"],
        senses: ["blindsight 120 ft."],
        languages: "—",
        cr: 30,
        traits: [
            { name: "Legendary Resistance (3/Day)", description: "If the tarrasque fails a saving throw, it can choose to succeed instead." },
            { name: "Magic Resistance", description: "The tarrasque has advantage on saving throws against spells and other magical effects." },
            { name: "Reflective Carapace", description: "Any time the tarrasque is targeted by a magic missile spell, a line spell, or a spell that requires a ranged attack roll, roll a d6. On a 1 to 5, the tarrasque is unaffected. On a 6, the tarrasque is unaffected, and the effect is reflected back at the caster as though it originated from the tarrasque, turning the caster into the target." },
            { name: "Siege Monster", description: "The tarrasque deals double damage to objects and structures." }
        ],
        actions: [
            { name: "Multiattack", description: "The tarrasque can use its Frightful Presence. It then makes five attacks: one with its bite, two with its claws, one with its horns, and one with its tail. It can use its Swallow instead of its bite." },
            { name: "Bite", description: "Melee Weapon Attack: +19 to hit, reach 10 ft., one target. Hit: 36 (4d12+10) piercing damage. If the target is a creature, it is grappled (escape DC 20). Until this grapple ends, the target is restrained, and the tarrasque can't bite another target." },
            { name: "Claw", description: "Melee Weapon Attack: +19 to hit, reach 15 ft., one target. Hit: 28 (4d8+10) slashing damage." },
            { name: "Horns", description: "Melee Weapon Attack: +19 to hit, reach 10 ft., one target. Hit: 32 (4d10+10) piercing damage." },
            { name: "Tail", description: "Melee Weapon Attack: +19 to hit, reach 20 ft., one target. Hit: 24 (4d6+10) bludgeoning damage. If the target is a creature, it must succeed on a DC 20 Strength saving throw or be knocked prone." },
            { name: "Frightful Presence", description: "Each creature of the tarrasque's choice within 120 feet of it and aware of it must succeed on a DC 17 Wisdom saving throw or become frightened for 1 minute." },
            { name: "Swallow", description: "The tarrasque makes one bite attack against a Large or smaller creature it is grappling. If the attack hits, the target takes the bite's damage, the target is swallowed, and the grapple ends. While swallowed, the creature is blinded and restrained, it has total cover against attacks and other effects outside the tarrasque, and it takes 56 (16d6) acid damage at the start of each of the tarrasque's turns." }
        ],
        legendaryActions: {
            perRound: 3,
            actions: [
                { name: "Attack", description: "The tarrasque makes one claw attack or tail attack." },
                { name: "Move", description: "The tarrasque moves up to half its speed." },
                { name: "Chomp (Costs 2 Actions)", description: "The tarrasque makes one bite attack or uses its Swallow." }
            ]
        }
    },
    "kraken": {
        name: "Kraken",
        source: "MM",
        size: "gargantuan",
        type: "monstrosity",
        subtype: "titan",
        alignment: "chaotic evil",
        ac: 18,
        acType: "natural armor",
        hp: 472,
        hitDice: "27d20+189",
        speed: { walk: 20, swim: 60 },
        abilityScores: { str: 30, dex: 11, con: 25, int: 22, wis: 18, cha: 20 },
        savingThrows: { str: 17, dex: 7, con: 14, int: 13, wis: 11 },
        damageImmunities: ["lightning; bludgeoning, piercing, and slashing from nonmagical attacks"],
        conditionImmunities: ["frightened", "paralyzed"],
        senses: ["truesight 120 ft."],
        languages: "Abyssal, Celestial, Infernal, Primordial, telepathy 120 ft. but can't speak",
        cr: 23,
        traits: [
            { name: "Amphibious", description: "The kraken can breathe air and water." },
            { name: "Freedom of Movement", description: "The kraken ignores difficult terrain, and magical effects can't reduce its speed or cause it to be restrained." },
            { name: "Siege Monster", description: "The kraken deals double damage to objects and structures." }
        ],
        actions: [
            { name: "Multiattack", description: "The kraken makes three tentacle attacks, each of which it can replace with one use of Fling." },
            { name: "Bite", description: "Melee Weapon Attack: +17 to hit, reach 5 ft., one target. Hit: 23 (3d8+10) piercing damage. If the target is a Large or smaller creature grappled by the kraken, that creature is swallowed, and the grapple ends." },
            { name: "Tentacle", description: "Melee Weapon Attack: +17 to hit, reach 30 ft., one target. Hit: 20 (3d6+10) bludgeoning damage, and the target is grappled (escape DC 18). Until this grapple ends, the target is restrained. The kraken has ten tentacles, each of which can grapple one target." },
            { name: "Fling", description: "One Large or smaller object held or creature grappled by the kraken is thrown up to 60 feet in a random direction and knocked prone. If a thrown target strikes a solid surface, the target takes 3 (1d6) bludgeoning damage for every 10 feet it was thrown." },
            { name: "Lightning Storm", description: "The kraken magically creates three bolts of lightning, each of which can strike a target the kraken can see within 120 feet of it. A target must make a DC 23 Dexterity saving throw, taking 22 (4d10) lightning damage on a failed save, or half as much damage on a successful one." }
        ],
        legendaryActions: {
            perRound: 3,
            actions: [
                { name: "Tentacle Attack or Fling", description: "The kraken makes one tentacle attack or uses its Fling." },
                { name: "Lightning Storm (Costs 2 Actions)", description: "The kraken uses Lightning Storm." },
                { name: "Ink Cloud (Costs 3 Actions)", description: "While underwater, the kraken expels an ink cloud in a 60-foot radius. The cloud spreads around corners, and that area is heavily obscured to creatures other than the kraken. Each creature other than the kraken that ends its turn there must succeed on a DC 23 Constitution saving throw, taking 16 (3d10) poison damage on a failed save, or half as much damage on a successful one." }
            ]
        }
    },
    "purple-worm": {
        name: "Purple Worm",
        source: "MM",
        size: "gargantuan",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 18,
        acType: "natural armor",
        hp: 247,
        hitDice: "15d20+90",
        speed: { walk: 50, burrow: 30 },
        abilityScores: { str: 28, dex: 7, con: 22, int: 1, wis: 8, cha: 4 },
        savingThrows: { con: 11, wis: 4 },
        senses: ["blindsight 30 ft.", "tremorsense 60 ft."],
        languages: "—",
        cr: 15,
        traits: [
            { name: "Tunneler", description: "The worm can burrow through solid rock at half its burrow speed and leaves a 10-foot-diameter tunnel in its wake." }
        ],
        actions: [
            { name: "Multiattack", description: "The worm makes two attacks: one with its bite and one with its stinger." },
            { name: "Bite", description: "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 22 (3d8+9) piercing damage. If the target is a Large or smaller creature, it must succeed on a DC 19 Dexterity saving throw or be swallowed by the worm. A swallowed creature is blinded and restrained, it has total cover against attacks and other effects outside the worm, and it takes 21 (6d6) acid damage at the start of each of the worm's turns." },
            { name: "Tail Stinger", description: "Melee Weapon Attack: +14 to hit, reach 10 ft., one creature. Hit: 19 (3d6+9) piercing damage, and the target must make a DC 19 Constitution saving throw, taking 42 (12d6) poison damage on a failed save, or half as much damage on a successful one." }
        ]
    },
    "roc": {
        name: "Roc",
        source: "MM",
        size: "gargantuan",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 15,
        acType: "natural armor",
        hp: 248,
        hitDice: "16d20+80",
        speed: { walk: 20, fly: 120 },
        abilityScores: { str: 28, dex: 10, con: 20, int: 3, wis: 10, cha: 9 },
        savingThrows: { dex: 4, con: 9, wis: 4, cha: 3 },
        skills: { perception: 4 },
        senses: [],
        languages: "—",
        cr: 11,
        traits: [
            { name: "Keen Sight", description: "The roc has advantage on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Multiattack", description: "The roc makes two attacks: one with its beak and one with its talons." },
            { name: "Beak", description: "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 27 (4d8+9) piercing damage." },
            { name: "Talons", description: "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 23 (4d6+9) slashing damage, and the target is grappled (escape DC 19). Until this grapple ends, the target is restrained, and the roc can't use its talons on another target." }
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
        traits: [
            { name: "Hold Breath", description: "The hydra can hold its breath for 1 hour." },
            { name: "Multiple Heads", description: "The hydra has five heads. While it has more than one head, the hydra has advantage on saving throws against being blinded, charmed, deafened, frightened, stunned, and knocked unconscious. Whenever the hydra takes 25 or more damage in a single turn, one of its heads dies. If all its heads die, the hydra dies. At the end of its turn, it grows two heads for each of its heads that died since its last turn, unless it has taken fire damage since its last turn. The hydra regains 10 hit points for each head regrown in this way." },
            { name: "Reactive Heads", description: "For each head the hydra has beyond one, it gets an extra reaction that can be used only for opportunity attacks." },
            { name: "Wakeful", description: "While the hydra sleeps, at least one of its heads is awake." }
        ],
        actions: [
            { name: "Multiattack", description: "The hydra makes as many bite attacks as it has heads." },
            { name: "Bite", description: "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 10 (1d10+5) piercing damage." }
        ]
    },
    "treant": {
        name: "Treant",
        source: "MM",
        size: "huge",
        type: "plant",
        alignment: "chaotic good",
        ac: 16,
        acType: "natural armor",
        hp: 138,
        hitDice: "12d12+60",
        speed: { walk: 30 },
        abilityScores: { str: 23, dex: 8, con: 21, int: 12, wis: 16, cha: 12 },
        damageResistances: ["bludgeoning", "piercing"],
        damageVulnerabilities: ["fire"],
        senses: [],
        languages: "Common, Druidic, Elvish, Sylvan",
        cr: 9,
        traits: [
            { name: "False Appearance", description: "While the treant remains motionless, it is indistinguishable from a normal tree." },
            { name: "Siege Monster", description: "The treant deals double damage to objects and structures." }
        ],
        actions: [
            { name: "Multiattack", description: "The treant makes two slam attacks." },
            { name: "Slam", description: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 16 (3d6+6) bludgeoning damage." },
            { name: "Rock", description: "Ranged Weapon Attack: +10 to hit, range 60/180 ft., one target. Hit: 28 (4d10+6) bludgeoning damage." },
            { name: "Animate Trees (1/Day)", description: "The treant magically animates one or two trees it can see within 60 feet of it. These trees have the same statistics as a treant, except they have Intelligence and Charisma scores of 1, they can't speak, and they have only the Slam action option. An animated tree acts as an ally of the treant. The tree remains animate for 1 day or until it dies; until the treant dies or is more than 120 feet from the tree; or until the treant takes a bonus action to turn it back into an inanimate tree." }
        ]
    },
    "cyclops": {
        name: "Cyclops",
        source: "MM",
        size: "huge",
        type: "giant",
        alignment: "chaotic neutral",
        ac: 14,
        acType: "natural armor",
        hp: 138,
        hitDice: "12d12+60",
        speed: { walk: 30 },
        abilityScores: { str: 22, dex: 11, con: 20, int: 8, wis: 6, cha: 10 },
        senses: [],
        languages: "Giant",
        cr: 6,
        traits: [
            { name: "Poor Depth Perception", description: "The cyclops has disadvantage on any attack roll against a target more than 30 feet away." }
        ],
        actions: [
            { name: "Multiattack", description: "The cyclops makes two greatclub attacks." },
            { name: "Greatclub", description: "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 19 (3d8+6) bludgeoning damage." },
            { name: "Rock", description: "Ranged Weapon Attack: +9 to hit, range 30/120 ft., one target. Hit: 28 (4d10+6) bludgeoning damage." }
        ]
    },
    "ettin": {
        name: "Ettin",
        source: "MM",
        size: "large",
        type: "giant",
        alignment: "chaotic evil",
        ac: 12,
        acType: "natural armor",
        hp: 85,
        hitDice: "10d10+30",
        speed: { walk: 40 },
        abilityScores: { str: 21, dex: 8, con: 17, int: 6, wis: 10, cha: 8 },
        skills: { perception: 4 },
        senses: ["darkvision 60 ft."],
        languages: "Giant, Orc",
        cr: 4,
        traits: [
            { name: "Two Heads", description: "The ettin has advantage on Wisdom (Perception) checks and on saving throws against being blinded, charmed, deafened, frightened, stunned, and knocked unconscious." },
            { name: "Wakeful", description: "When one of the ettin's heads is asleep, its other head is awake." }
        ],
        actions: [
            { name: "Multiattack", description: "The ettin makes two attacks: one with its battleaxe and one with its morningstar." },
            { name: "Battleaxe", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8+5) slashing damage." },
            { name: "Morningstar", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8+5) piercing damage." }
        ]
    },
    "ogre": {
        name: "Ogre",
        source: "MM",
        size: "large",
        type: "giant",
        alignment: "chaotic evil",
        ac: 11,
        acType: "hide armor",
        hp: 59,
        hitDice: "7d10+21",
        speed: { walk: 40 },
        abilityScores: { str: 19, dex: 8, con: 16, int: 5, wis: 7, cha: 7 },
        senses: ["darkvision 60 ft."],
        languages: "Common, Giant",
        cr: 2,
        actions: [
            { name: "Greatclub", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8+4) bludgeoning damage." },
            { name: "Javelin", description: "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 11 (2d6+4) piercing damage." }
        ]
    },
    "troll": {
        name: "Troll",
        source: "MM",
        size: "large",
        type: "giant",
        alignment: "chaotic evil",
        ac: 15,
        acType: "natural armor",
        hp: 84,
        hitDice: "8d10+40",
        speed: { walk: 30 },
        abilityScores: { str: 18, dex: 13, con: 20, int: 7, wis: 9, cha: 7 },
        skills: { perception: 2 },
        senses: ["darkvision 60 ft."],
        languages: "Giant",
        cr: 5,
        traits: [
            { name: "Keen Smell", description: "The troll has advantage on Wisdom (Perception) checks that rely on smell." },
            { name: "Regeneration", description: "The troll regains 10 hit points at the start of its turn. If the troll takes acid or fire damage, this trait doesn't function at the start of the troll's next turn. The troll dies only if it starts its turn with 0 hit points and doesn't regenerate." }
        ],
        actions: [
            { name: "Multiattack", description: "The troll makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d6+4) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6+4) slashing damage." }
        ]
    }
};
