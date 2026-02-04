// Volo's Guide Extended - More creatures with categorization
// Source: VGtM

const MONSTERS_VOLO_EXTENDED = {
    // ===== Yuan-ti =====
    
    
    
    
    

    // ===== Goblinoids =====
    "hobgoblin-warlord": {
        name: "Hobgoblin Warlord",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "goblinoid",
        alignment: "lawful evil",
        ac: 20,
        acType: "plate, shield",
        hp: 97,
        hitDice: "13d8+39",
        speed: { walk: 30 },
        abilityScores: { str: 16, dex: 14, con: 16, int: 14, wis: 11, cha: 15 },
        savingThrows: { int: 5, wis: 3, cha: 5 },
        senses: ["darkvision 60 ft."],
        languages: "Common, Goblin",
        cr: 6,
        environment: ["forest", "grassland", "hill", "underdark"],
        role: "leader",
        tags: ["goblinoid", "commander"],
        traits: [
            { name: "Martial Advantage", description: "Once per turn, the hobgoblin can deal an extra 14 (4d6) damage to a creature it hits with a weapon attack if that creature is within 5 feet of an ally of the hobgoblin that isn't incapacitated." }
        ],
        actions: [
            { name: "Multiattack", description: "The hobgoblin makes three melee attacks. Alternatively, it can make two ranged attacks with its javelins." },
            { name: "Longsword", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 7 (1d8+3) slashing damage, or 8 (1d10+3) slashing damage if used with two hands." },
            { name: "Shield Bash", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one creature. Hit: 5 (1d4+3) bludgeoning damage. If the target is Large or smaller, it must succeed on a DC 14 Strength saving throw or be knocked prone." },
            { name: "Javelin", description: "Melee or Ranged Weapon Attack: +9 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 6 (1d6+3) piercing damage." },
            { name: "Leadership (Recharges after a Short or Long Rest)", description: "For 1 minute, the hobgoblin can utter a special command or warning whenever a nonhostile creature that it can see within 30 feet of it makes an attack roll or a saving throw." }
        ],
        reactions: [
            { name: "Parry", description: "The hobgoblin adds 3 to its AC against one melee attack that would hit it. To do so, the hobgoblin must see the attacker and be wielding a melee weapon." }
        ]
    },
    "goblin-boss": {
        name: "Goblin Boss",
        source: "MM",
        size: "small",
        type: "humanoid",
        subtype: "goblinoid",
        alignment: "neutral evil",
        ac: 17,
        acType: "chain shirt, shield",
        hp: 21,
        hitDice: "6d6",
        speed: { walk: 30 },
        abilityScores: { str: 10, dex: 14, con: 10, int: 10, wis: 8, cha: 10 },
        skills: { stealth: 6 },
        senses: ["darkvision 60 ft."],
        languages: "Common, Goblin",
        cr: 1,
        environment: ["forest", "grassland", "hill", "underdark", "urban"],
        role: "leader",
        tags: ["goblinoid", "commander"],
        traits: [
            { name: "Nimble Escape", description: "The goblin can take the Disengage or Hide action as a bonus action on each of its turns." }
        ],
        actions: [
            { name: "Multiattack", description: "The goblin makes two attacks with its scimitar. The second attack has disadvantage." },
            { name: "Scimitar", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6+2) slashing damage." },
            { name: "Javelin", description: "Melee or Ranged Weapon Attack: +2 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 3 (1d6) piercing damage." }
        ],
        reactions: [
            { name: "Redirect Attack", description: "When a creature the goblin can see targets it with an attack, the goblin chooses another goblin within 5 feet of it. The two goblins swap places, and the chosen goblin becomes the target instead." }
        ]
    },
    
    "bugbear-chief": {
        name: "Bugbear Chief",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "goblinoid",
        alignment: "chaotic evil",
        ac: 17,
        acType: "chain shirt, shield",
        hp: 65,
        hitDice: "10d8+20",
        speed: { walk: 30 },
        abilityScores: { str: 17, dex: 14, con: 14, int: 11, wis: 12, cha: 11 },
        skills: { intimidation: 2, stealth: 6, survival: 3 },
        senses: ["darkvision 60 ft."],
        languages: "Common, Goblin",
        cr: 3,
        environment: ["forest", "grassland", "underdark"],
        role: "brute",
        tags: ["goblinoid", "commander"],
        traits: [
            { name: "Brute", description: "A melee weapon deals one extra die of its damage when the bugbear hits with it (included in the attack)." },
            { name: "Heart of Hruggek", description: "The bugbear has advantage on saving throws against being charmed, frightened, paralyzed, poisoned, stunned, or put to sleep." },
            { name: "Surprise Attack", description: "If the bugbear surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 7 (2d6) damage from the attack." }
        ],
        actions: [
            { name: "Multiattack", description: "The bugbear makes two melee attacks." },
            { name: "Morningstar", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 11 (2d8+3) piercing damage." },
            { name: "Javelin", description: "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 9 (2d6+3) piercing damage in melee or 5 (1d6+3) piercing damage at range." }
        ]
    },

    // ===== Mind Flayer Creations =====
    "mindwitness": {
        name: "Mindwitness",
        source: "VGtM",
        size: "large",
        type: "aberration",
        alignment: "lawful evil",
        ac: 15,
        acType: "natural armor",
        hp: 75,
        hitDice: "10d10+20",
        speed: { walk: 0, fly: 20 },
        abilityScores: { str: 10, dex: 14, con: 14, int: 15, wis: 15, cha: 10 },
        savingThrows: { int: 5, wis: 5 },
        skills: { perception: 8 },
        conditionImmunities: ["prone"],
        senses: ["darkvision 120 ft."],
        languages: "Deep Speech, Undercommon, telepathy 600 ft.",
        cr: 5,
        environment: ["underdark"],
        role: "controller",
        tags: ["mind flayer", "aberration", "beholder"],
        traits: [
            { name: "Telepathic Hub", description: "When the mindwitness receives a telepathic message, it can telepathically share that message with up to seven other creatures within 600 feet of it that it can see." }
        ],
        actions: [
            { name: "Multiattack", description: "The mindwitness makes two attacks: one with its tentacles and one with its bite." },
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 16 (4d6+2) piercing damage." },
            { name: "Tentacles", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 20 (4d8+2) psychic damage. If the target is Large or smaller, it is grappled (escape DC 13) and must succeed on a DC 13 Intelligence saving throw or be stunned until this grapple ends." },
            { name: "Eye Rays", description: "The mindwitness shoots three of the following magical eye rays at random (reroll duplicates), choosing one to three targets it can see within 120 feet of it." }
        ]
    },
    "neothelid": {
        name: "Neothelid",
        source: "VGtM",
        size: "gargantuan",
        type: "aberration",
        alignment: "chaotic evil",
        ac: 16,
        acType: "natural armor",
        hp: 325,
        hitDice: "21d20+105",
        speed: { walk: 30 },
        abilityScores: { str: 27, dex: 7, con: 21, int: 3, wis: 16, cha: 12 },
        savingThrows: { int: 1, wis: 8, cha: 6 },
        senses: ["blindsight 120 ft."],
        languages: "—",
        cr: 13,
        environment: ["underdark"],
        role: "brute",
        tags: ["mind flayer", "aberration"],
        traits: [
            { name: "Creature Sense", description: "The neothelid is aware of the presence of creatures within 1 mile of it that have an Intelligence score of 4 or higher. It knows the distance and direction to each creature, as well as each creature's Intelligence score, but can't sense anything else about it." },
            { name: "Magic Resistance", description: "The neothelid has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Tentacles", description: "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 21 (3d8+8) bludgeoning damage plus 13 (3d8) psychic damage. If the target is a Large or smaller creature, it must succeed on a DC 18 Strength saving throw or be swallowed by the neothelid. A swallowed creature is blinded and restrained, it has total cover against attacks and other effects outside the neothelid, and it takes 35 (10d6) acid damage at the start of each of the neothelid's turns." },
            { name: "Acid Breath (Recharge 5-6)", description: "The neothelid exhales acid in a 60-foot cone. Each creature in that area must make a DC 18 Dexterity saving throw, taking 35 (10d6) acid damage on a failed save, or half as much damage on a successful one." }
        ],
        spellcasting: {
            innate: true,
            ability: "wis",
            dc: 16,
            spells: {
                atWill: ["levitate"],
                "1/day each": ["confusion", "feeblemind", "telekinesis"]
            }
        }
    },

    // ===== Hags =====
    
    
};
