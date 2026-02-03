// Expansion Pack 15 - Final Comprehensive Push
// Filling remaining gaps

const MONSTERS_EXPANSION15 = {
    // ===== More Classic Creatures =====
    "rust-monster": {
        name: "Rust Monster",
        source: "MM",
        size: "medium",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 14,
        acType: "natural armor",
        hp: 27,
        hitDice: "5d8+5",
        speed: { walk: 40 },
        abilityScores: { str: 13, dex: 12, con: 13, int: 2, wis: 13, cha: 6 },
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 0.5,
        environment: ["underdark"],
        role: "lurker",
        tags: ["monstrosity"],
        traits: [
            { name: "Iron Scent", description: "The rust monster can pinpoint, by scent, the location of ferrous metal within 30 feet of it." },
            { name: "Rust Metal", description: "Any nonmagical weapon made of metal that hits the rust monster corrodes. After dealing damage, the weapon takes a permanent and cumulative −1 penalty to damage rolls. If its penalty drops to −5, the weapon is destroyed. Nonmagical ammunition made of metal that hits the rust monster is destroyed after dealing damage." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8+1) piercing damage." },
            { name: "Antennae", description: "The rust monster corrodes a nonmagical ferrous metal object it can see within 5 feet of it. If the object isn't being worn or carried, the touch destroys a 1-foot cube of it. If the object is being worn or carried by a creature, the creature can make a DC 11 Dexterity saving throw to avoid the rust monster's touch. If the object touched is either metal armor or a metal shield being worn or carried, its takes a permanent and cumulative −1 penalty to the AC it offers. Armor reduced to an AC of 10 or a shield that drops to a +0 bonus is destroyed. If the object touched is a held metal weapon, it rusts as described in the Rust Metal trait." }
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
        environment: ["underdark"],
        role: "brute",
        tags: ["ooze"],
        traits: [
            { name: "Ooze Cube", description: "The cube takes up its entire space. Other creatures can enter the space, but a creature that does so is subjected to the cube's Engulf and has disadvantage on the saving throw. Creatures inside the cube can be seen but have total cover. A creature within 5 feet of the cube can take an action to pull a creature or object out of the cube. Doing so requires a successful DC 12 Strength check, and the creature making the attempt takes 10 (3d6) acid damage. The cube can hold only one Large creature or up to four Medium or smaller creatures inside it at a time." },
            { name: "Transparent", description: "Even when the cube is in plain sight, it takes a successful DC 15 Wisdom (Perception) check to spot a cube that has neither moved nor attacked. A creature that tries to enter the cube's space while unaware of the cube is surprised by the cube." }
        ],
        actions: [
            { name: "Pseudopod", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 10 (3d6) acid damage." },
            { name: "Engulf", description: "The cube moves up to its speed. While doing so, it can enter Large or smaller creatures' spaces. Whenever the cube enters a creature's space, the creature must make a DC 12 Dexterity saving throw. On a successful save, the creature can choose to be pushed 5 feet back or to the side of the cube. A creature that chooses not to be pushed suffers the consequences of a failed saving throw. On a failed save, the cube enters the creature's space, and the creature takes 10 (3d6) acid damage and is engulfed. The engulfed creature can't breathe, is restrained, and takes 21 (6d6) acid damage at the start of each of the cube's turns. When the cube moves, the engulfed creature moves with it. An engulfed creature can try to escape by taking an action to make a DC 12 Strength check. On a success, the creature escapes and enters a space of its choice within 5 feet of the cube." }
        ]
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
        environment: ["underdark", "desert"],
        role: "brute",
        tags: ["monstrosity"],
        traits: [
            { name: "Tunneler", description: "The worm can burrow through solid rock at half its burrow speed and leaves a 10-foot-diameter tunnel in its wake." }
        ],
        actions: [
            { name: "Multiattack", description: "The worm makes two attacks: one with its bite and one with its stinger." },
            { name: "Bite", description: "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 22 (3d8+9) piercing damage. If the target is a Large or smaller creature, it must succeed on a DC 19 Dexterity saving throw or be swallowed by the worm. A swallowed creature is blinded and restrained, it has total cover against attacks and other effects outside the worm, and it takes 21 (6d6) acid damage at the start of each of the worm's turns. If the worm takes 30 damage or more on a single turn from a creature inside it, the worm must succeed on a DC 21 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the worm. If the worm dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 20 feet of movement, exiting prone." },
            { name: "Tail Stinger", description: "Melee Weapon Attack: +14 to hit, reach 10 ft., one creature. Hit: 19 (3d6+9) piercing damage, and the target must make a DC 19 Constitution saving throw, taking 42 (12d6) poison damage on a failed save, or half as much damage on a successful one." }
        ]
    },
    "remorhaz": {
        name: "Remorhaz",
        source: "MM",
        size: "huge",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 17,
        acType: "natural armor",
        hp: 195,
        hitDice: "17d12+85",
        speed: { walk: 30, burrow: 20 },
        abilityScores: { str: 24, dex: 13, con: 21, int: 4, wis: 10, cha: 5 },
        damageImmunities: ["cold", "fire"],
        senses: ["darkvision 60 ft.", "tremorsense 60 ft."],
        languages: "—",
        cr: 11,
        environment: ["arctic"],
        role: "brute",
        tags: ["monstrosity"],
        traits: [
            { name: "Heated Body", description: "A creature that touches the remorhaz or hits it with a melee attack while within 5 feet of it takes 10 (3d6) fire damage." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 40 (6d10+7) piercing damage plus 10 (3d6) fire damage. If the target is a creature, it is grappled (escape DC 17). Until this grapple ends, the target is restrained, and the remorhaz can't bite another target." },
            { name: "Swallow", description: "The remorhaz makes one bite attack against a Medium or smaller creature it is grappling. If the attack hits, the target takes the bite's damage, the target is swallowed, and the grapple ends. While swallowed, the creature is blinded and restrained, it has total cover against attacks and other effects outside the remorhaz, and it takes 21 (6d6) acid damage at the start of each of the remorhaz's turns. If the remorhaz takes 30 damage or more on a single turn from a creature inside it, the remorhaz must succeed on a DC 15 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the remorhaz. If the remorhaz dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 15 feet of movement, exiting prone." }
        ]
    },
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
    "umber-hulk": {
        name: "Umber Hulk",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "chaotic evil",
        ac: 18,
        acType: "natural armor",
        hp: 93,
        hitDice: "11d10+33",
        speed: { walk: 30, burrow: 20 },
        abilityScores: { str: 20, dex: 13, con: 16, int: 9, wis: 10, cha: 10 },
        senses: ["darkvision 120 ft.", "tremorsense 60 ft."],
        languages: "Umber Hulk",
        cr: 5,
        environment: ["underdark"],
        role: "brute",
        tags: ["monstrosity"],
        traits: [
            { name: "Confusing Gaze", description: "When a creature starts its turn within 30 feet of the umber hulk and is able to see the umber hulk's eyes, the umber hulk can magically force it to make a DC 15 Charisma saving throw, unless the umber hulk is incapacitated. On a failed saving throw, the creature can't take reactions until the start of its next turn and rolls a d8 to determine what it does during that turn." },
            { name: "Tunneler", description: "The umber hulk can burrow through solid rock at half its burrowing speed and leaves a 5 foot-wide, 8-foot-high tunnel in its wake." }
        ],
        actions: [
            { name: "Multiattack", description: "The umber hulk makes three attacks: two with its claws and one with its mandibles." },
            { name: "Claw", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 9 (1d8+5) slashing damage." },
            { name: "Mandibles", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 14 (2d8+5) slashing damage." }
        ]
    },
    "ankheg": {
        name: "Ankheg",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 14,
        acType: "natural armor",
        hp: 39,
        hitDice: "6d10+6",
        speed: { walk: 30, burrow: 10 },
        abilityScores: { str: 17, dex: 11, con: 13, int: 1, wis: 13, cha: 6 },
        senses: ["darkvision 60 ft.", "tremorsense 60 ft."],
        languages: "—",
        cr: 2,
        environment: ["forest", "grassland"],
        role: "brute",
        tags: ["monstrosity"],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6+3) slashing damage plus 3 (1d6) acid damage. If the target is a Large or smaller creature, it is grappled (escape DC 13). Until this grapple ends, the ankheg can bite only the grappled creature and has advantage on attack rolls to do so." },
            { name: "Acid Spray (Recharge 6)", description: "The ankheg spits acid in a line that is 30 feet long and 5 feet wide, provided that it has no creature grappled. Each creature in that line must make a DC 13 Dexterity saving throw, taking 10 (3d6) acid damage on a failed save, or half as much damage on a successful one." }
        ]
    },

    // ===== More Golems =====
    "clay-golem": {
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
        environment: ["dungeon", "urban"],
        role: "brute",
        tags: ["construct", "golem"],
        traits: [
            { name: "Acid Absorption", description: "Whenever the golem is subjected to acid damage, it takes no damage and instead regains a number of hit points equal to the acid damage dealt." },
            { name: "Berserk", description: "Whenever the golem starts its turn with 60 hit points or fewer, roll a d6. On a 6, the golem goes berserk. On each of its turns while berserk, the golem attacks the nearest creature it can see. If no creature is near enough to move to and attack, the golem attacks an object, with preference for an object smaller than itself. Once the golem goes berserk, it continues to do so until it is destroyed or regains all its hit points." },
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
    "stone-golem": {
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
        environment: ["dungeon", "urban"],
        role: "brute",
        tags: ["construct", "golem"],
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
    "iron-golem": {
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
        environment: ["dungeon", "urban"],
        role: "brute",
        tags: ["construct", "golem"],
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

    // ===== More Misc =====
    "doppelganger": {
        name: "Doppelganger",
        source: "MM",
        size: "medium",
        type: "monstrosity",
        subtype: "shapechanger",
        alignment: "neutral",
        ac: 14,
        hp: 52,
        hitDice: "8d8+16",
        speed: { walk: 30 },
        abilityScores: { str: 11, dex: 18, con: 14, int: 11, wis: 12, cha: 14 },
        skills: { deception: 6, insight: 3 },
        conditionImmunities: ["charmed"],
        senses: ["darkvision 60 ft."],
        languages: "Common",
        cr: 3,
        environment: ["underdark", "urban"],
        role: "lurker",
        tags: ["monstrosity", "shapechanger"],
        traits: [
            { name: "Shapechanger", description: "The doppelganger can use its action to polymorph into a Small or Medium humanoid it has seen, or back into its true form. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies." },
            { name: "Ambusher", description: "In the first round of a combat, the doppelganger has advantage on attack rolls against any creature it has surprised." },
            { name: "Surprise Attack", description: "If the doppelganger surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 10 (3d6) damage from the attack." }
        ],
        actions: [
            { name: "Multiattack", description: "The doppelganger makes two melee attacks." },
            { name: "Slam", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6+4) bludgeoning damage." },
            { name: "Read Thoughts", description: "The doppelganger magically reads the surface thoughts of one creature within 60 feet of it. The effect can penetrate barriers, but 3 feet of wood or dirt, 2 feet of stone, 2 inches of metal, or a thin sheet of lead blocks it. While the target is in range, the doppelganger can continue reading its thoughts, as long as the doppelganger's concentration isn't broken (as if concentrating on a spell). While reading the target's mind, the doppelganger has advantage on Wisdom (Insight) and Charisma (Deception, Intimidation, and Persuasion) checks against the target." }
        ]
    },
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
    },
    "yuan-ti-pureblood": {
        name: "Yuan-ti Pureblood",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "yuan-ti",
        alignment: "neutral evil",
        ac: 11,
        hp: 40,
        hitDice: "9d8",
        speed: { walk: 30 },
        abilityScores: { str: 11, dex: 12, con: 11, int: 13, wis: 12, cha: 14 },
        skills: { deception: 6, perception: 3, stealth: 3 },
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "Abyssal, Common, Draconic",
        cr: 1,
        environment: ["desert", "forest", "swamp"],
        role: "skirmisher",
        tags: ["humanoid", "yuan-ti"],
        traits: [
            { name: "Magic Resistance", description: "The yuan-ti has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack", description: "The yuan-ti makes two melee attacks." },
            { name: "Scimitar", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6+1) slashing damage." },
            { name: "Shortbow", description: "Ranged Weapon Attack: +3 to hit, range 80/320 ft., one target. Hit: 4 (1d6+1) piercing damage plus 7 (2d6) poison damage." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 12,
            spells: {
                atWill: ["animal friendship (snakes only)"],
                "3/day each": ["poison spray", "suggestion"]
            }
        }
    },
    "yuan-ti-malison": {
        name: "Yuan-ti Malison",
        source: "MM",
        size: "medium",
        type: "monstrosity",
        subtype: "shapechanger, yuan-ti",
        alignment: "neutral evil",
        ac: 12,
        hp: 66,
        hitDice: "12d8+12",
        speed: { walk: 30 },
        abilityScores: { str: 16, dex: 14, con: 13, int: 14, wis: 12, cha: 16 },
        skills: { deception: 5, stealth: 4 },
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "Abyssal, Common, Draconic",
        cr: 3,
        environment: ["desert", "forest", "swamp"],
        role: "skirmisher",
        tags: ["monstrosity", "yuan-ti", "shapechanger"],
        traits: [
            { name: "Shapechanger", description: "The yuan-ti can use its action to polymorph into a Medium snake, or back into its true form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It doesn't change form if it dies." },
            { name: "Magic Resistance", description: "The yuan-ti has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack (Yuan-ti Form Only)", description: "The yuan-ti makes two ranged attacks or two melee attacks, but can use its bite and constrict attacks only once each." },
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 5 (1d4+3) piercing damage plus 7 (2d6) poison damage." },
            { name: "Constrict", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6+3) bludgeoning damage, and the target is grappled (escape DC 13). Until this grapple ends, the target is restrained, and the yuan-ti can't constrict another target." },
            { name: "Scimitar (Yuan-ti Form Only)", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6+3) slashing damage." },
            { name: "Longbow (Yuan-ti Form Only)", description: "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit: 6 (1d8+2) piercing damage plus 7 (2d6) poison damage." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 13,
            spells: {
                atWill: ["animal friendship (snakes only)"],
                "3/day": ["suggestion"]
            }
        }
    }
};
