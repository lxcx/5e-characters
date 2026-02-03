// Expansion Pack 4 - Pushing past 900
// More diverse creatures

const MONSTERS_EXPANSION4 = {
    // ===== More Classic Beasts =====
    "dire-wolf": {
        name: "Dire Wolf",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 14,
        acType: "natural armor",
        hp: 37,
        hitDice: "5d10+10",
        speed: { walk: 50 },
        abilityScores: { str: 17, dex: 15, con: 15, int: 3, wis: 12, cha: 7 },
        skills: { perception: 3, stealth: 4 },
        senses: [],
        languages: "—",
        cr: 1,
        environment: ["forest", "hill", "arctic"],
        role: "skirmisher",
        tags: ["beast", "wolf", "pack"],
        traits: [
            { name: "Keen Hearing and Smell", description: "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell." },
            { name: "Pack Tactics", description: "The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 feet of the creature and the ally isn't incapacitated." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6+3) piercing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone." }
        ]
    },
    "giant-ape": {
        name: "Giant Ape",
        source: "MM",
        size: "huge",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        hp: 157,
        hitDice: "15d12+60",
        speed: { walk: 40, climb: 40 },
        abilityScores: { str: 23, dex: 14, con: 18, int: 7, wis: 12, cha: 7 },
        skills: { athletics: 9, perception: 4 },
        senses: [],
        languages: "—",
        cr: 7,
        environment: ["forest", "jungle"],
        role: "brute",
        tags: ["beast", "ape"],
        actions: [
            { name: "Multiattack", description: "The ape makes two fist attacks." },
            { name: "Fist", description: "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 22 (3d10+6) bludgeoning damage." },
            { name: "Rock", description: "Ranged Weapon Attack: +9 to hit, range 50/100 ft., one target. Hit: 30 (7d6+6) bludgeoning damage." }
        ]
    },
    "giant-crocodile": {
        name: "Giant Crocodile",
        source: "MM",
        size: "huge",
        type: "beast",
        alignment: "unaligned",
        ac: 14,
        acType: "natural armor",
        hp: 85,
        hitDice: "9d12+27",
        speed: { walk: 30, swim: 50 },
        abilityScores: { str: 21, dex: 9, con: 17, int: 2, wis: 10, cha: 7 },
        skills: { stealth: 5 },
        senses: [],
        languages: "—",
        cr: 5,
        environment: ["swamp", "coastal"],
        role: "brute",
        tags: ["beast", "reptile", "aquatic"],
        traits: [
            { name: "Hold Breath", description: "The crocodile can hold its breath for 30 minutes." }
        ],
        actions: [
            { name: "Multiattack", description: "The crocodile makes two attacks: one with its bite and one with its tail." },
            { name: "Bite", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 21 (3d10+5) piercing damage, and the target is grappled (escape DC 16). Until this grapple ends, the target is restrained, and the crocodile can't bite another target." },
            { name: "Tail", description: "Melee Weapon Attack: +8 to hit, reach 10 ft., one target not grappled by the crocodile. Hit: 14 (2d8+5) bludgeoning damage. If the target is a creature, it must succeed on a DC 16 Strength saving throw or be knocked prone." }
        ]
    },
    "giant-shark": {
        name: "Giant Shark",
        source: "MM",
        size: "huge",
        type: "beast",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 126,
        hitDice: "11d12+55",
        speed: { walk: 0, swim: 50 },
        abilityScores: { str: 23, dex: 11, con: 21, int: 1, wis: 10, cha: 5 },
        skills: { perception: 3 },
        senses: ["blindsight 60 ft."],
        languages: "—",
        cr: 5,
        environment: ["underwater", "coastal"],
        role: "brute",
        tags: ["beast", "shark", "aquatic"],
        traits: [
            { name: "Blood Frenzy", description: "The shark has advantage on melee attack rolls against any creature that doesn't have all its hit points." },
            { name: "Water Breathing", description: "The shark can breathe only underwater." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 22 (3d10+6) piercing damage." }
        ]
    },
    "giant-constrictor-snake": {
        name: "Giant Constrictor Snake",
        source: "MM",
        size: "huge",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        hp: 60,
        hitDice: "8d12+8",
        speed: { walk: 30, swim: 30 },
        abilityScores: { str: 19, dex: 14, con: 12, int: 1, wis: 10, cha: 3 },
        skills: { perception: 2 },
        senses: ["blindsight 10 ft."],
        languages: "—",
        cr: 2,
        environment: ["swamp", "jungle", "forest"],
        role: "brute",
        tags: ["beast", "snake"],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one creature. Hit: 11 (2d6+4) piercing damage." },
            { name: "Constrict", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 13 (2d8+4) bludgeoning damage, and the target is grappled (escape DC 16). Until this grapple ends, the creature is restrained, and the snake can't constrict another target." }
        ]
    },
    "giant-eagle": {
        name: "Giant Eagle",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "neutral good",
        ac: 13,
        hp: 26,
        hitDice: "4d10+4",
        speed: { walk: 10, fly: 80 },
        abilityScores: { str: 16, dex: 17, con: 13, int: 8, wis: 14, cha: 10 },
        skills: { perception: 4 },
        senses: [],
        languages: "Giant Eagle, understands Common and Auran but can't speak them",
        cr: 1,
        environment: ["mountain", "grassland"],
        role: "skirmisher",
        tags: ["beast", "eagle"],
        traits: [
            { name: "Keen Sight", description: "The eagle has advantage on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Multiattack", description: "The eagle makes two attacks: one with its beak and one with its talons." },
            { name: "Beak", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6+3) piercing damage." },
            { name: "Talons", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6+3) slashing damage." }
        ]
    },
    "giant-owl": {
        name: "Giant Owl",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "neutral",
        ac: 12,
        hp: 19,
        hitDice: "3d10+3",
        speed: { walk: 5, fly: 60 },
        abilityScores: { str: 13, dex: 15, con: 12, int: 8, wis: 13, cha: 10 },
        skills: { perception: 5, stealth: 4 },
        senses: ["darkvision 120 ft."],
        languages: "Giant Owl, understands Common, Elvish, and Sylvan but can't speak them",
        cr: 0.25,
        environment: ["forest"],
        role: "skirmisher",
        tags: ["beast", "owl"],
        traits: [
            { name: "Flyby", description: "The owl doesn't provoke opportunity attacks when it flies out of an enemy's reach." },
            { name: "Keen Hearing and Sight", description: "The owl has advantage on Wisdom (Perception) checks that rely on hearing or sight." }
        ],
        actions: [
            { name: "Talons", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 8 (2d6+1) slashing damage." }
        ]
    },
    "giant-boar": {
        name: "Giant Boar",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        acType: "natural armor",
        hp: 42,
        hitDice: "5d10+15",
        speed: { walk: 40 },
        abilityScores: { str: 17, dex: 10, con: 16, int: 2, wis: 7, cha: 5 },
        senses: [],
        languages: "—",
        cr: 2,
        environment: ["forest", "grassland", "hill"],
        role: "brute",
        tags: ["beast", "boar"],
        traits: [
            { name: "Charge", description: "If the boar moves at least 20 feet straight toward a target and then hits it with a tusk attack on the same turn, the target takes an extra 7 (2d6) slashing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone." },
            { name: "Relentless (Recharges after a Short or Long Rest)", description: "If the boar takes 10 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead." }
        ],
        actions: [
            { name: "Tusk", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6+3) slashing damage." }
        ]
    },
    "giant-elk": {
        name: "Giant Elk",
        source: "MM",
        size: "huge",
        type: "beast",
        alignment: "unaligned",
        ac: 14,
        acType: "natural armor",
        hp: 42,
        hitDice: "5d12+10",
        speed: { walk: 60 },
        abilityScores: { str: 19, dex: 16, con: 14, int: 7, wis: 14, cha: 10 },
        skills: { perception: 4 },
        senses: [],
        languages: "Giant Elk, understands Common, Elvish, and Sylvan but can't speak them",
        cr: 2,
        environment: ["forest", "grassland", "hill"],
        role: "brute",
        tags: ["beast", "elk"],
        traits: [
            { name: "Charge", description: "If the elk moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone." }
        ],
        actions: [
            { name: "Ram", description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 11 (2d6+4) bludgeoning damage." },
            { name: "Hooves", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one prone creature. Hit: 22 (4d8+4) bludgeoning damage." }
        ]
    },
    "mammoth": {
        name: "Mammoth",
        source: "MM",
        size: "huge",
        type: "beast",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 126,
        hitDice: "11d12+55",
        speed: { walk: 40 },
        abilityScores: { str: 24, dex: 9, con: 21, int: 3, wis: 11, cha: 6 },
        senses: [],
        languages: "—",
        cr: 6,
        environment: ["arctic", "grassland"],
        role: "brute",
        tags: ["beast", "elephant"],
        traits: [
            { name: "Trampling Charge", description: "If the mammoth moves at least 20 feet straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 18 Strength saving throw or be knocked prone. If the target is prone, the mammoth can make one stomp attack against it as a bonus action." }
        ],
        actions: [
            { name: "Gore", description: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 25 (4d8+7) piercing damage." },
            { name: "Stomp", description: "Melee Weapon Attack: +10 to hit, reach 5 ft., one prone creature. Hit: 29 (4d10+7) bludgeoning damage." }
        ]
    },
    "saber-toothed-tiger": {
        name: "Saber-Toothed Tiger",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        hp: 52,
        hitDice: "7d10+14",
        speed: { walk: 40 },
        abilityScores: { str: 18, dex: 14, con: 15, int: 3, wis: 12, cha: 8 },
        skills: { perception: 3, stealth: 6 },
        senses: [],
        languages: "—",
        cr: 2,
        environment: ["arctic", "forest", "grassland", "hill", "mountain"],
        role: "skirmisher",
        tags: ["beast", "cat"],
        traits: [
            { name: "Keen Smell", description: "The tiger has advantage on Wisdom (Perception) checks that rely on smell." },
            { name: "Pounce", description: "If the tiger moves at least 20 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the tiger can make one bite attack against it as a bonus action." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (1d10+5) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 12 (2d6+5) slashing damage." }
        ]
    },
    "rhinoceros": {
        name: "Rhinoceros",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 11,
        acType: "natural armor",
        hp: 45,
        hitDice: "6d10+12",
        speed: { walk: 40 },
        abilityScores: { str: 21, dex: 8, con: 15, int: 2, wis: 12, cha: 6 },
        senses: [],
        languages: "—",
        cr: 2,
        environment: ["grassland"],
        role: "brute",
        tags: ["beast"],
        traits: [
            { name: "Charge", description: "If the rhinoceros moves at least 20 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 (2d8) bludgeoning damage. If the target is a creature, it must succeed on a DC 15 Strength saving throw or be knocked prone." }
        ],
        actions: [
            { name: "Gore", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8+5) bludgeoning damage." }
        ]
    },

    // ===== More Humanoids =====
    "berserker": {
        name: "Berserker",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any chaotic alignment",
        ac: 13,
        acType: "hide armor",
        hp: 67,
        hitDice: "9d8+27",
        speed: { walk: 30 },
        abilityScores: { str: 16, dex: 12, con: 17, int: 9, wis: 11, cha: 9 },
        senses: [],
        languages: "any one language (usually Common)",
        cr: 2,
        environment: ["arctic", "forest", "hill", "mountain"],
        role: "brute",
        tags: ["humanoid", "npc"],
        traits: [
            { name: "Reckless", description: "At the start of its turn, the berserker can gain advantage on all melee weapon attack rolls during that turn, but attack rolls against it have advantage until the start of its next turn." }
        ],
        actions: [
            { name: "Greataxe", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 9 (1d12+3) slashing damage." }
        ]
    },
    "druid": {
        name: "Druid",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 11,
        acType: "16 with barkskin",
        hp: 27,
        hitDice: "5d8+5",
        speed: { walk: 30 },
        abilityScores: { str: 10, dex: 12, con: 13, int: 12, wis: 15, cha: 11 },
        skills: { medicine: 4, nature: 3, perception: 4 },
        senses: [],
        languages: "Druidic plus any two languages",
        cr: 2,
        environment: ["forest", "swamp", "mountain", "grassland"],
        role: "controller",
        tags: ["humanoid", "spellcaster", "npc"],
        actions: [
            { name: "Quarterstaff", description: "Melee Weapon Attack: +2 to hit (+4 to hit with shillelagh), reach 5 ft., one target. Hit: 3 (1d6) bludgeoning damage, 4 (1d8) bludgeoning damage if wielded with two hands, or 6 (1d8+2) bludgeoning damage with shillelagh." }
        ],
        spellcasting: {
            ability: "wis",
            dc: 12,
            attack: 4,
            spells: {
                cantrips: ["druidcraft", "produce flame", "shillelagh"],
                "1st": { slots: 4, spells: ["entangle", "longstrider", "speak with animals", "thunderwave"] },
                "2nd": { slots: 3, spells: ["animal messenger", "barkskin"] }
            }
        }
    },
    "cult-fanatic": {
        name: "Cult Fanatic",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any non-good alignment",
        ac: 13,
        acType: "leather armor",
        hp: 33,
        hitDice: "6d8+6",
        speed: { walk: 30 },
        abilityScores: { str: 11, dex: 14, con: 12, int: 10, wis: 13, cha: 14 },
        skills: { deception: 4, persuasion: 4, religion: 2 },
        senses: [],
        languages: "any one language (usually Common)",
        cr: 2,
        environment: ["urban", "underdark"],
        role: "leader",
        tags: ["humanoid", "spellcaster", "npc"],
        traits: [
            { name: "Dark Devotion", description: "The fanatic has advantage on saving throws against being charmed or frightened." }
        ],
        actions: [
            { name: "Multiattack", description: "The fanatic makes two melee attacks." },
            { name: "Dagger", description: "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one creature. Hit: 4 (1d4+2) piercing damage." }
        ],
        spellcasting: {
            ability: "wis",
            dc: 11,
            attack: 3,
            spells: {
                cantrips: ["light", "sacred flame", "thaumaturgy"],
                "1st": { slots: 4, spells: ["command", "inflict wounds", "shield of faith"] },
                "2nd": { slots: 3, spells: ["hold person", "spiritual weapon"] }
            }
        }
    },
    "cultist": {
        name: "Cultist",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any non-good alignment",
        ac: 12,
        acType: "leather armor",
        hp: 9,
        hitDice: "2d8",
        speed: { walk: 30 },
        abilityScores: { str: 11, dex: 12, con: 10, int: 10, wis: 11, cha: 10 },
        skills: { deception: 2, religion: 2 },
        senses: [],
        languages: "any one language (usually Common)",
        cr: 0.125,
        environment: ["urban", "underdark"],
        role: "minion",
        tags: ["humanoid", "npc"],
        traits: [
            { name: "Dark Devotion", description: "The cultist has advantage on saving throws against being charmed or frightened." }
        ],
        actions: [
            { name: "Scimitar", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 4 (1d6+1) slashing damage." }
        ]
    },
    "bandit-captain": {
        name: "Bandit Captain",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any non-lawful alignment",
        ac: 15,
        acType: "studded leather",
        hp: 65,
        hitDice: "10d8+20",
        speed: { walk: 30 },
        abilityScores: { str: 15, dex: 16, con: 14, int: 14, wis: 11, cha: 14 },
        savingThrows: { str: 4, dex: 5, wis: 2 },
        skills: { athletics: 4, deception: 4 },
        senses: [],
        languages: "any two languages",
        cr: 2,
        environment: ["urban", "forest", "grassland"],
        role: "leader",
        tags: ["humanoid", "npc"],
        actions: [
            { name: "Multiattack", description: "The captain makes three melee attacks: two with its scimitar and one with its dagger. Or the captain makes two ranged attacks with its daggers." },
            { name: "Scimitar", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6+3) slashing damage." },
            { name: "Dagger", description: "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 5 (1d4+3) piercing damage." }
        ],
        reactions: [
            { name: "Parry", description: "The captain adds 2 to its AC against one melee attack that would hit it. To do so, the captain must see the attacker and be wielding a melee weapon." }
        ]
    },
    "bandit": {
        name: "Bandit",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any non-lawful alignment",
        ac: 12,
        acType: "leather armor",
        hp: 11,
        hitDice: "2d8+2",
        speed: { walk: 30 },
        abilityScores: { str: 11, dex: 12, con: 12, int: 10, wis: 10, cha: 10 },
        senses: [],
        languages: "any one language (usually Common)",
        cr: 0.125,
        environment: ["urban", "forest", "grassland"],
        role: "minion",
        tags: ["humanoid", "npc"],
        actions: [
            { name: "Scimitar", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6+1) slashing damage." },
            { name: "Light Crossbow", description: "Ranged Weapon Attack: +3 to hit, range 80/320 ft., one target. Hit: 5 (1d8+1) piercing damage." }
        ]
    },
    "thug": {
        name: "Thug",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any non-good alignment",
        ac: 11,
        acType: "leather armor",
        hp: 32,
        hitDice: "5d8+10",
        speed: { walk: 30 },
        abilityScores: { str: 15, dex: 11, con: 14, int: 10, wis: 10, cha: 11 },
        skills: { intimidation: 2 },
        senses: [],
        languages: "any one language (usually Common)",
        cr: 0.5,
        environment: ["urban"],
        role: "brute",
        tags: ["humanoid", "npc"],
        traits: [
            { name: "Pack Tactics", description: "The thug has advantage on an attack roll against a creature if at least one of the thug's allies is within 5 feet of the creature and the ally isn't incapacitated." }
        ],
        actions: [
            { name: "Multiattack", description: "The thug makes two melee attacks." },
            { name: "Mace", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6+2) bludgeoning damage." },
            { name: "Heavy Crossbow", description: "Ranged Weapon Attack: +2 to hit, range 100/400 ft., one target. Hit: 5 (1d10) piercing damage." }
        ]
    },
    "spy": {
        name: "Spy",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 12,
        hp: 27,
        hitDice: "6d8",
        speed: { walk: 30 },
        abilityScores: { str: 10, dex: 15, con: 10, int: 12, wis: 14, cha: 16 },
        skills: { deception: 5, insight: 4, investigation: 5, perception: 6, persuasion: 5, sleight_of_hand: 4, stealth: 4 },
        senses: [],
        languages: "any two languages",
        cr: 1,
        environment: ["urban"],
        role: "lurker",
        tags: ["humanoid", "npc"],
        traits: [
            { name: "Cunning Action", description: "On each of its turns, the spy can use a bonus action to take the Dash, Disengage, or Hide action." },
            { name: "Sneak Attack (1/Turn)", description: "The spy deals an extra 7 (2d6) damage when it hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 feet of an ally of the spy that isn't incapacitated and the spy doesn't have disadvantage on the attack roll." }
        ],
        actions: [
            { name: "Multiattack", description: "The spy makes two melee attacks." },
            { name: "Shortsword", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6+2) piercing damage." },
            { name: "Hand Crossbow", description: "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 5 (1d6+2) piercing damage." }
        ]
    },
    "scout": {
        name: "Scout",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 13,
        acType: "leather armor",
        hp: 16,
        hitDice: "3d8+3",
        speed: { walk: 30 },
        abilityScores: { str: 11, dex: 14, con: 12, int: 11, wis: 13, cha: 11 },
        skills: { nature: 4, perception: 5, stealth: 6, survival: 5 },
        senses: [],
        languages: "any one language (usually Common)",
        cr: 0.5,
        environment: ["forest", "grassland", "hill", "mountain", "arctic"],
        role: "skirmisher",
        tags: ["humanoid", "npc"],
        traits: [
            { name: "Keen Hearing and Sight", description: "The scout has advantage on Wisdom (Perception) checks that rely on hearing or sight." }
        ],
        actions: [
            { name: "Multiattack", description: "The scout makes two melee attacks or two ranged attacks." },
            { name: "Shortsword", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6+2) piercing damage." },
            { name: "Longbow", description: "Ranged Weapon Attack: +4 to hit, ranged 150/600 ft., one target. Hit: 6 (1d8+2) piercing damage." }
        ]
    },
    "guard": {
        name: "Guard",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 16,
        acType: "chain shirt, shield",
        hp: 11,
        hitDice: "2d8+2",
        speed: { walk: 30 },
        abilityScores: { str: 13, dex: 12, con: 12, int: 10, wis: 11, cha: 10 },
        skills: { perception: 2 },
        senses: [],
        languages: "any one language (usually Common)",
        cr: 0.125,
        environment: ["urban"],
        role: "soldier",
        tags: ["humanoid", "npc"],
        actions: [
            { name: "Spear", description: "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d6+1) piercing damage, or 5 (1d8+1) piercing damage if used with two hands to make a melee attack." }
        ]
    },
    "commoner": {
        name: "Commoner",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 10,
        hp: 4,
        hitDice: "1d8",
        speed: { walk: 30 },
        abilityScores: { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 },
        senses: [],
        languages: "any one language (usually Common)",
        cr: 0,
        environment: ["urban", "any"],
        role: "minion",
        tags: ["humanoid", "npc"],
        actions: [
            { name: "Club", description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage." }
        ]
    }
};
