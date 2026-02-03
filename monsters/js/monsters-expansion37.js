// Expansion Pack 37 - More Creatures
// Additional monsters for comprehensive coverage

const MONSTERS_EXPANSION37 = {
    // ===== More NPCs =====
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
        environment: ["urban"],
        role: "lurker",
        tags: ["humanoid", "npc"],
        traits: [
            { name: "Assassinate", description: "During its first turn, the assassin has advantage on attack rolls against any creature that hasn't taken a turn. Any hit the assassin scores against a surprised creature is a critical hit." },
            { name: "Evasion", description: "If the assassin is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, the assassin instead takes no damage if it succeeds on the saving throw, and only half damage if it fails." },
            { name: "Sneak Attack (1/Turn)", description: "The assassin deals an extra 14 (4d6) damage when it hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 feet of an ally of the assassin that isn't incapacitated and the assassin doesn't have disadvantage on the attack roll." }
        ],
        actions: [
            { name: "Multiattack", description: "The assassin makes two shortsword attacks." },
            { name: "Shortsword", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6+3) piercing damage, and the target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one." },
            { name: "Light Crossbow", description: "Ranged Weapon Attack: +6 to hit, range 80/320 ft., one target. Hit: 7 (1d8+3) piercing damage, and the target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one." }
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
        environment: ["urban"],
        role: "soldier",
        tags: ["humanoid", "npc"],
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
        environment: ["urban"],
        role: "artillery",
        tags: ["humanoid", "npc", "spellcaster"],
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
        skills: { medicine: 7, persuasion: 3, religion: 4 },
        senses: [],
        languages: "any two languages",
        cr: 2,
        environment: ["urban"],
        role: "leader",
        tags: ["humanoid", "npc", "spellcaster"],
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
        skills: { deception: 5, insight: 4, investigation: 5, perception: 6, persuasion: 5, sleight: 4, stealth: 4 },
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
        environment: ["urban"],
        role: "soldier",
        tags: ["humanoid", "npc"],
        actions: [
            { name: "Multiattack", description: "The veteran makes two longsword attacks. If it has a shortsword drawn, it can also make a shortsword attack." },
            { name: "Longsword", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8+3) slashing damage, or 8 (1d10+3) slashing damage if used with two hands." },
            { name: "Shortsword", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6+3) piercing damage." },
            { name: "Heavy Crossbow", description: "Ranged Weapon Attack: +3 to hit, range 100/400 ft., one target. Hit: 6 (1d10+1) piercing damage." }
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
        environment: ["urban", "forest"],
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
        environment: ["urban"],
        role: "controller",
        tags: ["humanoid", "npc", "spellcaster"],
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
    }
};
