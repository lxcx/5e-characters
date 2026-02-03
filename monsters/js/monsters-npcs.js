// Humanoid NPCs, Cultists, and Common Enemies
// Source: MM (Monster Manual)

const MONSTERS_NPCS = {
    // ===== MAGES & SPELLCASTERS =====
    "archmage": {
        name: "Archmage",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 12,
        acType: "15 with mage armor",
        hp: 99,
        hitDice: "18d8+18",
        speed: { walk: 30 },
        abilityScores: { str: 10, dex: 14, con: 12, int: 20, wis: 15, cha: 16 },
        savingThrows: { int: 9, wis: 6 },
        skills: { arcana: 13, history: 13 },
        damageResistances: ["damage from spells; nonmagical bludgeoning, piercing, and slashing (from stoneskin)"],
        senses: [],
        languages: "any six languages",
        cr: 12,
        traits: [
            { name: "Magic Resistance", description: "The archmage has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Dagger", description: "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d4+2) piercing damage." }
        ],
        spellcasting: {
            ability: "int",
            dc: 17,
            attack: 9,
            spells: {
                cantrips: ["fire bolt", "light", "mage hand", "prestidigitation", "shocking grasp"],
                "1st": { slots: 4, spells: ["detect magic", "identify", "mage armor*", "magic missile"] },
                "2nd": { slots: 3, spells: ["detect thoughts", "mirror image", "misty step"] },
                "3rd": { slots: 3, spells: ["counterspell", "fly", "lightning bolt"] },
                "4th": { slots: 3, spells: ["banishment", "fire shield", "stoneskin*"] },
                "5th": { slots: 3, spells: ["cone of cold", "scrying", "wall of force"] },
                "6th": { slots: 1, spells: ["globe of invulnerability"] },
                "7th": { slots: 1, spells: ["teleport"] },
                "8th": { slots: 1, spells: ["mind blank*"] },
                "9th": { slots: 1, spells: ["time stop"] }
            }
        }
    },
    "mage": {
        name: "Mage",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 12,
        acType: "15 with mage armor",
        hp: 40,
        hitDice: "9d8",
        speed: { walk: 30 },
        abilityScores: { str: 9, dex: 14, con: 11, int: 17, wis: 12, cha: 11 },
        savingThrows: { int: 6, wis: 4 },
        skills: { arcana: 6, history: 6 },
        senses: [],
        languages: "any four languages",
        cr: 6,
        actions: [
            { name: "Dagger", description: "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d4+2) piercing damage." }
        ],
        spellcasting: {
            ability: "int",
            dc: 14,
            attack: 6,
            spells: {
                cantrips: ["fire bolt", "light", "mage hand", "prestidigitation"],
                "1st": { slots: 4, spells: ["detect magic", "mage armor", "magic missile", "shield"] },
                "2nd": { slots: 3, spells: ["misty step", "suggestion"] },
                "3rd": { slots: 3, spells: ["counterspell", "fireball", "fly"] },
                "4th": { slots: 3, spells: ["greater invisibility", "ice storm"] },
                "5th": { slots: 1, spells: ["cone of cold"] }
            }
        }
    },
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
    "priest": {
        name: "Priest",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 13,
        acType: "chain shirt",
        hp: 27,
        hitDice: "5d8+5",
        speed: { walk: 25 },
        abilityScores: { str: 10, dex: 10, con: 12, int: 13, wis: 16, cha: 13 },
        skills: { medicine: 7, persuasion: 3, religion: 5 },
        senses: [],
        languages: "any two languages",
        cr: 2,
        traits: [
            { name: "Divine Eminence", description: "As a bonus action, the priest can expend a spell slot to cause its melee weapon attacks to magically deal an extra 10 (3d6) radiant damage to a target on a hit. This benefit lasts until the end of the turn. If the priest expends a spell slot of 2nd level or higher, the extra damage increases by 1d6 for each level above 1st." }
        ],
        actions: [
            { name: "Mace", description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6) bludgeoning damage." }
        ],
        spellcasting: {
            ability: "wis",
            dc: 13,
            attack: 5,
            spells: {
                cantrips: ["light", "sacred flame", "thaumaturgy"],
                "1st": { slots: 4, spells: ["cure wounds", "guiding bolt", "sanctuary"] },
                "2nd": { slots: 3, spells: ["lesser restoration", "spiritual weapon"] },
                "3rd": { slots: 2, spells: ["dispel magic", "spirit guardians"] }
            }
        }
    },

    // ===== WARRIORS =====
    "knight": {
        name: "Knight",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 18,
        acType: "plate",
        hp: 52,
        hitDice: "8d8+16",
        speed: { walk: 30 },
        abilityScores: { str: 16, dex: 11, con: 14, int: 11, wis: 11, cha: 15 },
        savingThrows: { con: 4, wis: 2 },
        senses: [],
        languages: "any one language (usually Common)",
        cr: 3,
        traits: [
            { name: "Brave", description: "The knight has advantage on saving throws against being frightened." }
        ],
        actions: [
            { name: "Multiattack", description: "The knight makes two melee attacks." },
            { name: "Greatsword", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6+3) slashing damage." },
            { name: "Heavy Crossbow", description: "Ranged Weapon Attack: +2 to hit, range 100/400 ft., one target. Hit: 5 (1d10) piercing damage." },
            { name: "Leadership (Recharges after a Short or Long Rest)", description: "For 1 minute, the knight can utter a special command or warning whenever a nonhostile creature that it can see within 30 feet of it makes an attack roll or a saving throw. The creature can add a d4 to its roll provided it can hear and understand the knight. A creature can benefit from only one Leadership die at a time. This effect ends if the knight is incapacitated." }
        ],
        reactions: [
            { name: "Parry", description: "The knight adds 2 to its AC against one melee attack that would hit it. To do so, the knight must see the attacker and be wielding a melee weapon." }
        ]
    },
    "veteran": {
        name: "Veteran",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 17,
        acType: "splint",
        hp: 58,
        hitDice: "9d8+18",
        speed: { walk: 30 },
        abilityScores: { str: 16, dex: 13, con: 14, int: 10, wis: 11, cha: 10 },
        skills: { athletics: 5, perception: 2 },
        senses: [],
        languages: "any one language (usually Common)",
        cr: 3,
        actions: [
            { name: "Multiattack", description: "The veteran makes two longsword attacks. If it has a shortsword drawn, it can also make a shortsword attack." },
            { name: "Longsword", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8+3) slashing damage, or 8 (1d10+3) slashing damage if used with two hands." },
            { name: "Shortsword", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6+3) piercing damage." },
            { name: "Heavy Crossbow", description: "Ranged Weapon Attack: +3 to hit, range 100/400 ft., one target. Hit: 6 (1d10+1) piercing damage." }
        ]
    },
    "gladiator": {
        name: "Gladiator",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 16,
        acType: "studded leather, shield",
        hp: 112,
        hitDice: "15d8+45",
        speed: { walk: 30 },
        abilityScores: { str: 18, dex: 15, con: 16, int: 10, wis: 12, cha: 15 },
        savingThrows: { str: 7, dex: 5, con: 6 },
        skills: { athletics: 10, intimidation: 5 },
        senses: [],
        languages: "any one language (usually Common)",
        cr: 5,
        traits: [
            { name: "Brave", description: "The gladiator has advantage on saving throws against being frightened." },
            { name: "Brute", description: "A melee weapon deals one extra die of its damage when the gladiator hits with it (included in the attack)." }
        ],
        actions: [
            { name: "Multiattack", description: "The gladiator makes three melee attacks or two ranged attacks." },
            { name: "Spear", description: "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. and range 20/60 ft., one target. Hit: 11 (2d6+4) piercing damage, or 13 (2d8+4) piercing damage if used with two hands to make a melee attack." },
            { name: "Shield Bash", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 9 (2d4+4) bludgeoning damage. If the target is a Medium or smaller creature, it must succeed on a DC 15 Strength saving throw or be knocked prone." }
        ],
        reactions: [
            { name: "Parry", description: "The gladiator adds 3 to its AC against one melee attack that would hit it. To do so, the gladiator must see the attacker and be wielding a melee weapon." }
        ]
    },
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
        traits: [
            { name: "Reckless", description: "At the start of its turn, the berserker can gain advantage on all melee weapon attack rolls during that turn, but attack rolls against it have advantage until the start of its next turn." }
        ],
        actions: [
            { name: "Greataxe", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 9 (1d12+3) slashing damage." }
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
        traits: [
            { name: "Pack Tactics", description: "The thug has advantage on an attack roll against a creature if at least one of the thug's allies is within 5 feet of the creature and the ally isn't incapacitated." }
        ],
        actions: [
            { name: "Multiattack", description: "The thug makes two melee attacks." },
            { name: "Mace", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6+2) bludgeoning damage." },
            { name: "Heavy Crossbow", description: "Ranged Weapon Attack: +2 to hit, range 100/400 ft., one target. Hit: 5 (1d10) piercing damage." }
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
        actions: [
            { name: "Spear", description: "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d6+1) piercing damage, or 5 (1d8+1) piercing damage if used with two hands to make a melee attack." }
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
        traits: [
            { name: "Keen Hearing and Sight", description: "The scout has advantage on Wisdom (Perception) checks that rely on hearing or sight." }
        ],
        actions: [
            { name: "Multiattack", description: "The scout makes two melee attacks or two ranged attacks." },
            { name: "Shortsword", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6+2) piercing damage." },
            { name: "Longbow", description: "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit: 6 (1d8+2) piercing damage." }
        ]
    },

    // ===== ROGUES & ASSASSINS =====
    "assassin": {
        name: "Assassin",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any non-good alignment",
        ac: 15,
        acType: "studded leather",
        hp: 78,
        hitDice: "12d8+24",
        speed: { walk: 30 },
        abilityScores: { str: 11, dex: 16, con: 14, int: 13, wis: 11, cha: 10 },
        savingThrows: { dex: 6, int: 4 },
        skills: { acrobatics: 6, deception: 3, perception: 3, stealth: 9 },
        damageResistances: ["poison"],
        senses: [],
        languages: "Thieves' cant plus any two languages",
        cr: 8,
        traits: [
            { name: "Assassinate", description: "During its first turn, the assassin has advantage on attack rolls against any creature that hasn't taken a turn. Any hit the assassin scores against a surprised creature is a critical hit." },
            { name: "Evasion", description: "If the assassin is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, the assassin instead takes no damage if it succeeds on the saving throw, and only half damage if it fails." },
            { name: "Sneak Attack", description: "Once per turn, the assassin deals an extra 14 (4d6) damage when it hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 feet of an ally of the assassin that isn't incapacitated and the assassin doesn't have disadvantage on the attack roll." }
        ],
        actions: [
            { name: "Multiattack", description: "The assassin makes two shortsword attacks." },
            { name: "Shortsword", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6+3) piercing damage, and the target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one." },
            { name: "Light Crossbow", description: "Ranged Weapon Attack: +6 to hit, range 80/320 ft., one target. Hit: 7 (1d8+3) piercing damage, and the target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one." }
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
        traits: [
            { name: "Cunning Action", description: "On each of its turns, the spy can use a bonus action to take the Dash, Disengage, or Hide action." },
            { name: "Sneak Attack", description: "Once per turn, the spy deals an extra 7 (2d6) damage when it hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 feet of an ally of the spy that isn't incapacitated and the spy doesn't have disadvantage on the attack roll." }
        ],
        actions: [
            { name: "Multiattack", description: "The spy makes two melee attacks." },
            { name: "Shortsword", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6+2) piercing damage." },
            { name: "Hand Crossbow", description: "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 5 (1d6+2) piercing damage." }
        ]
    },

    // ===== CULTISTS =====
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
        traits: [
            { name: "Dark Devotion", description: "The cultist has advantage on saving throws against being charmed or frightened." }
        ],
        actions: [
            { name: "Scimitar", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 4 (1d6+1) slashing damage." }
        ]
    },

    // ===== NOBLES & COMMONERS =====
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
        actions: [
            { name: "Rapier", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8+1) piercing damage." }
        ],
        reactions: [
            { name: "Parry", description: "The noble adds 2 to its AC against one melee attack that would hit it. To do so, the noble must see the attacker and be wielding a melee weapon." }
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
        actions: [
            { name: "Club", description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage." }
        ]
    },

    // ===== TRIBAL & WILD =====
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
        traits: [
            { name: "Pack Tactics", description: "The warrior has advantage on an attack roll against a creature if at least one of the warrior's allies is within 5 feet of the creature and the ally isn't incapacitated." }
        ],
        actions: [
            { name: "Spear", description: "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d6+1) piercing damage, or 5 (1d8+1) piercing damage if used with two hands to make a melee attack." }
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
        actions: [
            { name: "Quarterstaff", description: "Melee Weapon Attack: +2 to hit (+4 to hit with shillelagh), reach 5 ft., one target. Hit: 3 (1d6) bludgeoning damage, or 6 (1d8+2) bludgeoning damage with shillelagh or if wielded with two hands." }
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

    // ===== PIRATES =====
    "pirate-captain": {
        name: "Pirate Captain",
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
        actions: [
            { name: "Multiattack", description: "The captain makes three melee attacks: two with its scimitar and one with its dagger. Or the captain makes two ranged attacks with its daggers." },
            { name: "Scimitar", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6+3) slashing damage." },
            { name: "Dagger", description: "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 5 (1d4+3) piercing damage." }
        ],
        reactions: [
            { name: "Parry", description: "The captain adds 2 to its AC against one melee attack that would hit it. To do so, the captain must see the attacker and be wielding a melee weapon." }
        ]
    },

    // ===== WARLOCKS & DARK MAGES =====
    "warlock-of-the-fiend": {
        name: "Warlock of the Fiend",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 12,
        acType: "15 with mage armor",
        hp: 78,
        hitDice: "12d8+24",
        speed: { walk: 30 },
        abilityScores: { str: 10, dex: 14, con: 15, int: 12, wis: 12, cha: 18 },
        savingThrows: { wis: 4, cha: 7 },
        skills: { arcana: 4, deception: 7, persuasion: 7, religion: 4 },
        damageResistances: ["fire"],
        senses: ["darkvision 60 ft."],
        languages: "any two languages (usually Abyssal or Infernal)",
        cr: 7,
        traits: [
            { name: "Dark One's Own Luck (Recharges after a Short or Long Rest)", description: "When the warlock makes an ability check or saving throw, it can add a d10 to the roll. It can do this after the roll is made but before any of the roll's effects occur." }
        ],
        actions: [
            { name: "Multiattack", description: "The warlock makes two attacks with its mace." },
            { name: "Mace", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d6) bludgeoning damage plus 10 (3d6) fire damage." }
        ],
        spellcasting: {
            ability: "cha",
            dc: 15,
            attack: 7,
            spells: {
                atWill: ["alter self", "false life", "levitate", "mage armor", "silent image"],
                cantrips: ["eldritch blast", "fire bolt", "friends", "mage hand", "minor illusion", "prestidigitation", "shocking grasp"],
                "1st-5th": { slots: "3 5th-level slots", spells: ["burning hands", "command", "counterspell", "darkness", "dimension door", "fireball", "flame strike", "hellish rebuke", "scorching ray", "stinking cloud", "suggestion", "wall of fire"] }
            }
        }
    }
};
