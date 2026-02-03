// Volo's Guide to Monsters - Monster Data
// Source: VGtM (Volo's Guide to Monsters)

const MONSTERS_VOLO = {
    // ===== BEHOLDERS =====
    "death-kiss": {
        name: "Death Kiss",
        source: "VGtM",
        size: "large",
        type: "aberration",
        alignment: "neutral evil",
        ac: 16,
        acType: "natural armor",
        hp: 161,
        hitDice: "17d10+68",
        speed: { walk: 0, fly: 30 },
        abilityScores: { str: 18, dex: 14, con: 18, int: 10, wis: 12, cha: 10 },
        savingThrows: { con: 8, wis: 5 },
        skills: { perception: 5 },
        damageImmunities: ["lightning"],
        conditionImmunities: ["prone"],
        senses: ["darkvision 120 ft."],
        languages: "Deep Speech, Undercommon",
        cr: 10,
        traits: [
            { name: "Lightning Blood", description: "A creature within 5 feet of the death kiss takes 5 (1d10) lightning damage whenever it hits the death kiss with a melee attack that deals piercing or slashing damage." }
        ],
        actions: [
            { name: "Multiattack", description: "The death kiss makes three tentacle attacks. Up to three of these attacks can be replaced by Blood Drain." },
            { name: "Tentacle", description: "Melee Weapon Attack: +8 to hit, reach 20 ft., one target. Hit: 14 (3d6+4) piercing damage, and the target is grappled (escape DC 14)." },
            { name: "Blood Drain", description: "One creature grappled by a tentacle takes 22 (4d10) lightning damage, and the death kiss regains half as many hit points." }
        ]
    },
    "gazer": {
        name: "Gazer",
        source: "VGtM",
        size: "tiny",
        type: "aberration",
        alignment: "neutral evil",
        ac: 13,
        hp: 13,
        hitDice: "3d4+6",
        speed: { walk: 0, fly: 30 },
        abilityScores: { str: 3, dex: 17, con: 14, int: 3, wis: 10, cha: 7 },
        savingThrows: { wis: 2 },
        skills: { perception: 4, stealth: 5 },
        conditionImmunities: ["prone"],
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 0.5,
        traits: [
            { name: "Aggressive", description: "As a bonus action, the gazer can move up to its speed toward a hostile creature it can see." },
            { name: "Mimicry", description: "The gazer can mimic simple sounds of speech it has heard. A creature that hears the sounds can tell they are imitations with a successful DC 10 Wisdom (Insight) check." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 1 piercing damage." },
            { name: "Eye Rays", description: "The gazer shoots two of the following magical eye rays at random (reroll duplicates), choosing one or two targets it can see within 60 feet of it: 1. Dazing Ray (Wisdom save DC 10 or charmed until start of gazer's next turn), 2. Fear Ray (Wisdom save DC 10 or frightened until start of gazer's next turn), 3. Frost Ray (target takes 10 (3d6) cold damage), 4. Telekinetic Ray (move medium or smaller creature up to 30 feet)." }
        ]
    },
    "spectator": {
        name: "Spectator",
        source: "VGtM",
        size: "medium",
        type: "aberration",
        alignment: "lawful neutral",
        ac: 14,
        acType: "natural armor",
        hp: 39,
        hitDice: "6d8+12",
        speed: { walk: 0, fly: 30 },
        abilityScores: { str: 8, dex: 14, con: 14, int: 13, wis: 14, cha: 11 },
        skills: { perception: 6 },
        conditionImmunities: ["prone"],
        senses: ["darkvision 120 ft."],
        languages: "Deep Speech, Undercommon, telepathy 120 ft.",
        cr: 3,
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 2 (1d6-1) piercing damage." },
            { name: "Eye Rays", description: "The spectator shoots up to two eye rays at one or two creatures within 90 feet. Rays include Confusion Ray, Paralyzing Ray, Fear Ray, and Wounding Ray." },
            { name: "Create Food and Water", description: "The spectator magically creates enough food and water for itself for 24 hours." }
        ],
        reactions: [
            { name: "Spell Reflection", description: "If the spectator makes a successful saving throw against a spell, or a spell attack misses it, it can choose another creature it can see within 30 feet of it. The spell targets the chosen creature instead." }
        ]
    },

    // ===== GIANTS =====
    "mouth-of-grolantor": {
        name: "Mouth of Grolantor",
        source: "VGtM",
        size: "huge",
        type: "giant",
        alignment: "chaotic evil",
        ac: 14,
        acType: "natural armor",
        hp: 105,
        hitDice: "10d12+40",
        speed: { walk: 50 },
        abilityScores: { str: 21, dex: 10, con: 18, int: 5, wis: 7, cha: 5 },
        skills: { perception: 2 },
        conditionImmunities: ["frightened"],
        senses: [],
        languages: "Giant",
        cr: 6,
        traits: [
            { name: "Mouth of Madness", description: "The giant is immune to confusion spells and similar magic." }
        ],
        actions: [
            { name: "Multiattack", description: "The giant makes two bite attacks." },
            { name: "Bite", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 15 (3d6+5) piercing damage, and the target is swallowed if it is a Medium or smaller creature. A swallowed creature is blinded and restrained, has total cover against attacks outside the giant, and takes 10 (3d6) acid damage at the start of each of the giant's turns." }
        ]
    },
    "stone-giant-dreamwalker": {
        name: "Stone Giant Dreamwalker",
        source: "VGtM",
        size: "huge",
        type: "giant",
        alignment: "chaotic neutral",
        ac: 18,
        acType: "natural armor",
        hp: 161,
        hitDice: "14d12+70",
        speed: { walk: 40 },
        abilityScores: { str: 23, dex: 14, con: 21, int: 10, wis: 8, cha: 12 },
        savingThrows: { dex: 6, con: 9, wis: 3 },
        skills: { athletics: 14, perception: 3 },
        conditionImmunities: ["charmed", "frightened"],
        senses: ["darkvision 60 ft."],
        languages: "Common, Giant",
        cr: 10,
        traits: [
            { name: "Dreamwalker's Charm", description: "An enemy that starts its turn within 30 feet of the giant must make a DC 13 Charisma saving throw or be charmed until the start of its next turn." }
        ],
        actions: [
            { name: "Multiattack", description: "The giant makes two attacks with its greatclub." },
            { name: "Greatclub", description: "Melee Weapon Attack: +10 to hit, reach 15 ft., one target. Hit: 19 (3d8+6) bludgeoning damage." },
            { name: "Petrifying Touch", description: "The giant touches one Medium or smaller creature within 10 feet of it. The creature must succeed on a DC 17 Constitution saving throw or be petrified." }
        ]
    },
    "fire-giant-dreadnought": {
        name: "Fire Giant Dreadnought",
        source: "VGtM",
        size: "huge",
        type: "giant",
        alignment: "lawful evil",
        ac: 21,
        acType: "plate, shields",
        hp: 187,
        hitDice: "15d12+90",
        speed: { walk: 30 },
        abilityScores: { str: 27, dex: 9, con: 23, int: 8, wis: 10, cha: 11 },
        savingThrows: { dex: 4, con: 11, cha: 5 },
        skills: { athletics: 13, perception: 5 },
        damageImmunities: ["fire"],
        senses: [],
        languages: "Giant",
        cr: 14,
        traits: [
            { name: "Dual Shields", description: "The giant carries two shields, each of which is accounted for in the giant's AC. The giant must stow or drop one of its shields to hurl rocks." }
        ],
        actions: [
            { name: "Multiattack", description: "The giant makes two fireshield attacks." },
            { name: "Fireshield", description: "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 22 (4d6+8) bludgeoning damage plus 7 (2d6) fire damage plus 7 (2d6) piercing damage." },
            { name: "Rock", description: "Ranged Weapon Attack: +13 to hit, range 60/240 ft., one target. Hit: 30 (4d10+8) bludgeoning damage." },
            { name: "Shield Charge (Recharge 5-6)", description: "The giant moves up to 30 feet in a straight line and can move through the space of any creature smaller than Huge. The first time it enters a creature's space during this move, that creature must succeed on a DC 21 Strength saving throw or take 36 (8d6+8) bludgeoning damage plus 14 (4d6) fire damage and be pushed up to 30 feet and knocked prone." }
        ]
    },
    "frost-giant-everlasting-one": {
        name: "Frost Giant Everlasting One",
        source: "VGtM",
        size: "huge",
        type: "giant",
        alignment: "chaotic evil",
        ac: 15,
        acType: "patchwork armor",
        hp: 189,
        hitDice: "14d12+98",
        speed: { walk: 40 },
        abilityScores: { str: 25, dex: 9, con: 24, int: 9, wis: 10, cha: 12 },
        savingThrows: { str: 12, con: 12, wis: 5 },
        skills: { athletics: 12, perception: 5 },
        damageImmunities: ["cold"],
        senses: ["darkvision 60 ft."],
        languages: "Giant",
        cr: 12,
        traits: [
            { name: "Extra Heads", description: "The giant has a 25 percent chance of having more than one head. If it has more than one, it has advantage on Wisdom (Perception) checks and on saving throws against being blinded, charmed, deafened, frightened, stunned, or knocked unconscious." },
            { name: "Regeneration", description: "The giant regains 10 hit points at the start of its turn. If the giant takes acid or fire damage, this trait doesn't function at the start of its next turn." },
            { name: "Vaprak's Rage (Recharges after a Short or Long Rest)", description: "As a bonus action, the giant can enter a rage at the start of its turn. The rage lasts for 1 minute or until the giant is incapacitated. While raging, the giant gains +4 to damage with melee weapons and advantage on attack rolls and saving throws." }
        ],
        actions: [
            { name: "Multiattack", description: "The giant makes two greataxe attacks." },
            { name: "Greataxe", description: "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 26 (3d12+7) slashing damage, or 30 (3d12+11) slashing damage while raging." },
            { name: "Rock", description: "Ranged Weapon Attack: +12 to hit, range 60/240 ft., one target. Hit: 29 (4d10+7) bludgeoning damage." }
        ]
    },

    // ===== GNOLLS =====
    "gnoll-flesh-gnawer": {
        name: "Gnoll Flesh Gnawer",
        source: "VGtM",
        size: "medium",
        type: "humanoid",
        subtype: "gnoll",
        alignment: "chaotic evil",
        ac: 14,
        acType: "studded leather",
        hp: 22,
        hitDice: "4d8+4",
        speed: { walk: 30 },
        abilityScores: { str: 12, dex: 14, con: 12, int: 8, wis: 10, cha: 8 },
        savingThrows: { dex: 4 },
        senses: ["darkvision 60 ft."],
        languages: "Gnoll",
        cr: 1,
        traits: [
            { name: "Rampage", description: "When the gnoll reduces a creature to 0 hit points with a melee attack on its turn, the gnoll can take a bonus action to move up to half its speed and make a bite attack." }
        ],
        actions: [
            { name: "Multiattack", description: "The gnoll makes three attacks: one with its bite and two with its shortsword." },
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4+2) piercing damage." },
            { name: "Shortsword", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6+2) piercing damage." },
            { name: "Sudden Rush", description: "Until the end of the turn, the gnoll's speed increases by 60 feet and it doesn't provoke opportunity attacks." }
        ]
    },
    "gnoll-hunter": {
        name: "Gnoll Hunter",
        source: "VGtM",
        size: "medium",
        type: "humanoid",
        subtype: "gnoll",
        alignment: "chaotic evil",
        ac: 13,
        acType: "leather armor",
        hp: 22,
        hitDice: "4d8+4",
        speed: { walk: 30 },
        abilityScores: { str: 14, dex: 14, con: 12, int: 8, wis: 12, cha: 8 },
        skills: { perception: 3, stealth: 4 },
        senses: ["darkvision 60 ft."],
        languages: "Gnoll",
        cr: 0.5,
        traits: [
            { name: "Rampage", description: "When the gnoll reduces a creature to 0 hit points with a melee attack on its turn, the gnoll can take a bonus action to move up to half its speed and make a bite attack." }
        ],
        actions: [
            { name: "Multiattack", description: "The gnoll makes two attacks: one with its bite and one with its spear, or two with its longbow." },
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4+2) piercing damage." },
            { name: "Spear", description: "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 5 (1d6+2) piercing damage, or 6 (1d8+2) piercing damage if used with two hands." },
            { name: "Longbow", description: "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit: 6 (1d8+2) piercing damage." }
        ]
    },
    "gnoll-witherling": {
        name: "Gnoll Witherling",
        source: "VGtM",
        size: "medium",
        type: "undead",
        alignment: "chaotic evil",
        ac: 12,
        acType: "natural armor",
        hp: 11,
        hitDice: "2d8+2",
        speed: { walk: 30 },
        abilityScores: { str: 14, dex: 8, con: 12, int: 5, wis: 5, cha: 5 },
        damageImmunities: ["poison"],
        conditionImmunities: ["exhaustion", "poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "understands Gnoll but can't speak",
        cr: 0.25,
        traits: [
            { name: "Rampage", description: "When the witherling reduces a creature to 0 hit points with a melee attack on its turn, it can take a bonus action to move up to half its speed and make a bite attack." }
        ],
        actions: [
            { name: "Multiattack", description: "The witherling makes two attacks: one with its bite and one with its club, or two with its club." },
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4+2) piercing damage." },
            { name: "Club", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4+2) bludgeoning damage." }
        ],
        reactions: [
            { name: "Vengeful Strike", description: "In response to a gnoll being reduced to 0 hit points within 30 feet of it, the witherling makes a melee attack." }
        ]
    },
    "flind": {
        name: "Flind",
        source: "VGtM",
        size: "medium",
        type: "humanoid",
        subtype: "gnoll",
        alignment: "chaotic evil",
        ac: 16,
        acType: "chain mail",
        hp: 127,
        hitDice: "15d8+60",
        speed: { walk: 30 },
        abilityScores: { str: 20, dex: 10, con: 19, int: 11, wis: 13, cha: 12 },
        savingThrows: { con: 8, wis: 5 },
        skills: { intimidation: 5, perception: 5 },
        senses: ["darkvision 60 ft."],
        languages: "Gnoll, Abyssal",
        cr: 9,
        traits: [
            { name: "Aura of Blood Thirst", description: "If the flind isn't incapacitated, any creature with the Rampage trait can make a bite attack as a bonus action while within 10 feet of the flind." }
        ],
        actions: [
            { name: "Multiattack", description: "The flind makes three attacks: one with each of its different flail heads." },
            { name: "Flail of Madness", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 10 (1d10+5) bludgeoning damage, and the target must make a DC 16 Wisdom saving throw. On a failed save, the target must make a melee attack against a random target within its reach on its next turn." },
            { name: "Flail of Pain", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 10 (1d10+5) bludgeoning damage plus 22 (4d10) psychic damage." },
            { name: "Flail of Paralysis", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 10 (1d10+5) bludgeoning damage, and the target must succeed on a DC 16 Constitution saving throw or be paralyzed until the end of its next turn." }
        ]
    },

    // ===== GOBLINS & HOBGOBLINS =====
    "booyahg-booyahg-booyahg": {
        name: "Booyahg Booyahg Booyahg",
        source: "VGtM",
        size: "small",
        type: "humanoid",
        subtype: "goblinoid",
        alignment: "neutral evil",
        ac: 15,
        acType: "leather armor, shield",
        hp: 7,
        hitDice: "2d6",
        speed: { walk: 30 },
        abilityScores: { str: 8, dex: 14, con: 10, int: 10, wis: 8, cha: 8 },
        skills: { stealth: 6 },
        senses: ["darkvision 60 ft."],
        languages: "Common, Goblin",
        cr: 0.25,
        traits: [
            { name: "Nimble Escape", description: "The goblin can take the Disengage or Hide action as a bonus action on each of its turns." },
            { name: "Wild Magic", description: "Each time the goblin casts a spell other than a cantrip, roll on the Wild Magic Surge table." }
        ],
        actions: [
            { name: "Scimitar", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6+2) slashing damage." },
            { name: "Shortbow", description: "Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 5 (1d6+2) piercing damage." }
        ],
        spellcasting: {
            ability: "cha",
            dc: 9,
            attack: 1,
            spells: {
                cantrips: ["fire bolt", "mage hand", "prestidigitation"],
                "1st": { slots: 2, spells: ["chaos bolt", "color spray", "thunderwave"] }
            }
        }
    },
    "hobgoblin-devastator": {
        name: "Hobgoblin Devastator",
        source: "VGtM",
        size: "medium",
        type: "humanoid",
        subtype: "goblinoid",
        alignment: "lawful evil",
        ac: 13,
        acType: "studded leather",
        hp: 45,
        hitDice: "7d8+14",
        speed: { walk: 30 },
        abilityScores: { str: 13, dex: 12, con: 14, int: 16, wis: 13, cha: 11 },
        skills: { arcana: 5 },
        senses: ["darkvision 60 ft."],
        languages: "Common, Goblin",
        cr: 4,
        traits: [
            { name: "Arcane Advantage", description: "Once per turn, the hobgoblin can deal an extra 7 (2d6) damage to a creature it hits with a damaging spell attack if that target is within 5 feet of an ally of the hobgoblin and that ally isn't incapacitated." },
            { name: "Army Arcana", description: "When the hobgoblin casts a spell that causes damage or that forces other creatures to make a saving throw, it can choose itself and any number of allies to be immune to the damage caused by the spell and to succeed on the required saving throw." }
        ],
        actions: [
            { name: "Quarterstaff", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6+1) bludgeoning damage, or 5 (1d8+1) bludgeoning damage if used with two hands." }
        ],
        spellcasting: {
            ability: "int",
            dc: 13,
            attack: 5,
            spells: {
                cantrips: ["acid splash", "fire bolt", "ray of frost", "shocking grasp"],
                "1st": { slots: 4, spells: ["fog cloud", "magic missile", "thunderwave"] },
                "2nd": { slots: 3, spells: ["gust of wind", "Melf's acid arrow", "scorching ray"] },
                "3rd": { slots: 3, spells: ["fireball", "fly", "lightning bolt"] },
                "4th": { slots: 1, spells: ["ice storm"] }
            }
        }
    },
    "hobgoblin-iron-shadow": {
        name: "Hobgoblin Iron Shadow",
        source: "VGtM",
        size: "medium",
        type: "humanoid",
        subtype: "goblinoid",
        alignment: "lawful evil",
        ac: 15,
        hp: 32,
        hitDice: "5d8+10",
        speed: { walk: 40 },
        abilityScores: { str: 14, dex: 16, con: 15, int: 14, wis: 15, cha: 11 },
        skills: { acrobatics: 5, athletics: 4, stealth: 5 },
        senses: ["darkvision 60 ft."],
        languages: "Common, Goblin",
        cr: 2,
        traits: [
            { name: "Unarmored Defense", description: "While the hobgoblin is wearing no armor and wielding no shield, its AC includes its Wisdom modifier." }
        ],
        actions: [
            { name: "Multiattack", description: "The hobgoblin makes four attacks, each of which can be an unarmed strike or a dart attack. It can also use Shadow Jaunt once, either before or after one of the attacks." },
            { name: "Unarmed Strike", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4+3) bludgeoning damage." },
            { name: "Dart", description: "Ranged Weapon Attack: +5 to hit, range 20/60 ft., one target. Hit: 5 (1d4+3) piercing damage." },
            { name: "Shadow Jaunt", description: "The hobgoblin magically teleports, along with any equipment it is wearing or carrying, up to 30 feet to an unoccupied space it can see. Both the space it is leaving and its destination must be in dim light or darkness." }
        ],
        spellcasting: {
            innate: true,
            ability: "int",
            dc: 12,
            spells: {
                atWill: ["minor illusion", "prestidigitation"],
                "1/day": ["charm person", "disguise self", "silent image"]
            }
        }
    },
    "nilbog": {
        name: "Nilbog",
        source: "VGtM",
        size: "small",
        type: "humanoid",
        subtype: "goblinoid",
        alignment: "chaotic evil",
        ac: 13,
        acType: "leather armor",
        hp: 7,
        hitDice: "2d6",
        speed: { walk: 30 },
        abilityScores: { str: 8, dex: 14, con: 10, int: 10, wis: 8, cha: 15 },
        skills: { stealth: 6 },
        senses: ["darkvision 60 ft."],
        languages: "Common, Goblin",
        cr: 1,
        traits: [
            { name: "Nilbogism", description: "Any creature that attempts to damage the nilbog must first succeed on a DC 12 Charisma saving throw or be charmed until the end of the creature's next turn. A creature charmed in this way must use its action praising the nilbog." },
            { name: "Reversal of Fortune", description: "In response to another creature dealing damage to the nilbog, the nilbog reduces the damage to 0 and regains 1d6 hit points." }
        ],
        actions: [
            { name: "Fool's Scepter", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6+2) bludgeoning damage." },
            { name: "Mocking Word", description: "The nilbog targets one creature it can see within 60 feet of it. The target must succeed on a DC 12 Wisdom saving throw or take 5 (2d4) psychic damage and have disadvantage on its next attack roll before the end of its next turn." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 12,
            spells: {
                atWill: ["mage hand", "Tasha's hideous laughter", "vicious mockery"],
                "1/day": ["confusion"]
            }
        }
    },

    // ===== KOBOLDS =====
    "kobold-dragonshield": {
        name: "Kobold Dragonshield",
        source: "VGtM",
        size: "small",
        type: "humanoid",
        subtype: "kobold",
        alignment: "lawful evil",
        ac: 15,
        acType: "leather armor, shield",
        hp: 44,
        hitDice: "8d6+16",
        speed: { walk: 20 },
        abilityScores: { str: 12, dex: 15, con: 14, int: 8, wis: 9, cha: 10 },
        skills: { perception: 1 },
        damageResistances: ["see Dragon's Resistance"],
        senses: ["darkvision 60 ft."],
        languages: "Common, Draconic",
        cr: 1,
        traits: [
            { name: "Dragon's Resistance", description: "The kobold has resistance to a type of damage based on the color of dragon that invested it with power: acid (black, copper), cold (silver, white), fire (brass, gold, red), lightning (blue, bronze), or poison (green)." },
            { name: "Heart of the Dragon", description: "If the kobold is frightened or paralyzed by an effect that allows a saving throw, it can repeat the save at the start of its turn to end the effect on itself and all kobolds within 30 feet of it. Any kobold that benefits from this trait (including the dragonshield) has advantage on its next attack roll." },
            { name: "Pack Tactics", description: "The kobold has advantage on an attack roll against a creature if at least one of the kobold's allies is within 5 feet of the creature and the ally isn't incapacitated." },
            { name: "Sunlight Sensitivity", description: "While in sunlight, the kobold has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Multiattack", description: "The kobold makes two melee attacks." },
            { name: "Spear", description: "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d6+1) piercing damage, or 5 (1d8+1) piercing damage if used with two hands to make a melee attack." }
        ]
    },
    "kobold-inventor": {
        name: "Kobold Inventor",
        source: "VGtM",
        size: "small",
        type: "humanoid",
        subtype: "kobold",
        alignment: "lawful evil",
        ac: 12,
        hp: 13,
        hitDice: "3d6+3",
        speed: { walk: 30 },
        abilityScores: { str: 7, dex: 15, con: 12, int: 8, wis: 7, cha: 8 },
        skills: { perception: 0 },
        senses: ["darkvision 60 ft."],
        languages: "Common, Draconic",
        cr: 0.25,
        traits: [
            { name: "Pack Tactics", description: "The kobold has advantage on an attack roll against a creature if at least one of the kobold's allies is within 5 feet of the creature and the ally isn't incapacitated." },
            { name: "Sunlight Sensitivity", description: "While in sunlight, the kobold has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Dagger", description: "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d4+2) piercing damage." },
            { name: "Sling", description: "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 4 (1d4+2) bludgeoning damage." },
            { name: "Weapon Invention", description: "The kobold uses one of the following options (roll a d8 or choose one); the kobold can use each one no more than once per day: 1-Acid (10-ft. cone, DC 12 Dex save, 7 acid damage), 2-Alchemist's Fire (20 ft., DC 10 Dex save, 2d6 fire damage), 3-Basket of Centipedes (20 ft., DC 11 Con save, 4d6 poison damage, poisoned 1 minute), 4-Green Slime (5 ft., DC 10 Dex save, 5 acid damage per turn), 5-Rot Grub (5 ft., burrows into skin, 1d6 damage per turn), 6-Scorpion (melee, +2 to hit, 1 piercing, DC 9 Con save 4d6 poison), 7-Skunk (10 ft., DC 11 Con save, poisoned 1 minute), 8-Wasp Nest (20 ft., DC 11 Dex save, 5d6 piercing, 20 ft. swarm for 1 minute)." }
        ]
    },
    "kobold-scale-sorcerer": {
        name: "Kobold Scale Sorcerer",
        source: "VGtM",
        size: "small",
        type: "humanoid",
        subtype: "kobold",
        alignment: "lawful evil",
        ac: 15,
        acType: "natural armor",
        hp: 27,
        hitDice: "5d6+10",
        speed: { walk: 30 },
        abilityScores: { str: 7, dex: 15, con: 14, int: 10, wis: 9, cha: 14 },
        skills: { arcana: 2, medicine: 1 },
        senses: ["darkvision 60 ft."],
        languages: "Common, Draconic",
        cr: 1,
        traits: [
            { name: "Sorcery Points", description: "The kobold has 3 sorcery points. It can spend 1 or more sorcery points as a bonus action to gain one of the following benefits: Heightened Spell (2 points, disadvantage on first save), Subtle Spell (1 point, no verbal/somatic components)." },
            { name: "Pack Tactics", description: "The kobold has advantage on an attack roll against a creature if at least one of the kobold's allies is within 5 feet of the creature and the ally isn't incapacitated." },
            { name: "Sunlight Sensitivity", description: "While in sunlight, the kobold has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Dagger", description: "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d4+2) piercing damage." }
        ],
        spellcasting: {
            ability: "cha",
            dc: 12,
            attack: 4,
            spells: {
                cantrips: ["fire bolt", "mage hand", "mending", "poison spray"],
                "1st": { slots: 4, spells: ["charm person", "chromatic orb", "expeditious retreat"] },
                "2nd": { slots: 3, spells: ["scorching ray"] }
            }
        }
    },

    // ===== MIND FLAYERS =====
    "alhoon": {
        name: "Alhoon",
        source: "VGtM",
        size: "medium",
        type: "undead",
        alignment: "any evil alignment",
        ac: 15,
        acType: "natural armor",
        hp: 120,
        hitDice: "16d8+48",
        speed: { walk: 30 },
        abilityScores: { str: 11, dex: 12, con: 16, int: 19, wis: 17, cha: 17 },
        savingThrows: { con: 7, int: 8, wis: 7, cha: 7 },
        skills: { arcana: 8, deception: 7, history: 8, insight: 7, perception: 7, stealth: 5 },
        damageResistances: ["cold", "lightning", "necrotic"],
        damageImmunities: ["poison"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "poisoned"],
        senses: ["truesight 120 ft."],
        languages: "Deep Speech, Undercommon, telepathy 120 ft.",
        cr: 10,
        traits: [
            { name: "Magic Resistance", description: "The alhoon has advantage on saving throws against spells and other magical effects." },
            { name: "Turn Resistance", description: "The alhoon has advantage on saving throws against any effect that turns undead." }
        ],
        actions: [
            { name: "Chilling Grasp", description: "Melee Spell Attack: +8 to hit, reach 5 ft., one target. Hit: 10 (3d6) cold damage." },
            { name: "Mind Blast (Recharge 5-6)", description: "The alhoon magically emits psychic energy in a 60-foot cone. Each creature in that area must succeed on a DC 16 Intelligence saving throw or take 22 (4d8+4) psychic damage and be stunned for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." }
        ],
        spellcasting: {
            ability: "int",
            dc: 16,
            attack: 8,
            spells: {
                atWill: ["detect thoughts", "disguise self", "levitate"],
                cantrips: ["chill touch", "dancing lights", "mage hand", "prestidigitation", "shocking grasp"],
                "1st": { slots: 4, spells: ["detect magic", "dissonant whispers", "identify", "shield"] },
                "2nd": { slots: 3, spells: ["invisibility", "mirror image", "scorching ray"] },
                "3rd": { slots: 3, spells: ["counterspell", "fear", "lightning bolt"] },
                "4th": { slots: 3, spells: ["confusion", "Evard's black tentacles", "phantasmal killer"] },
                "5th": { slots: 2, spells: ["modify memory", "wall of force"] },
                "6th": { slots: 1, spells: ["globe of invulnerability", "mass suggestion"] }
            }
        }
    },
    "mind-flayer-arcanist": {
        name: "Mind Flayer Arcanist",
        source: "VGtM",
        size: "medium",
        type: "aberration",
        alignment: "lawful evil",
        ac: 15,
        acType: "breastplate",
        hp: 71,
        hitDice: "13d8+13",
        speed: { walk: 30 },
        abilityScores: { str: 11, dex: 12, con: 12, int: 19, wis: 17, cha: 17 },
        savingThrows: { int: 7, wis: 6, cha: 6 },
        skills: { arcana: 7, deception: 6, insight: 6, perception: 6, persuasion: 6, stealth: 4 },
        senses: ["darkvision 120 ft."],
        languages: "Deep Speech, Undercommon, telepathy 120 ft.",
        cr: 8,
        traits: [
            { name: "Magic Resistance", description: "The mind flayer has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Tentacles", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 15 (2d10+4) psychic damage. If the target is Medium or smaller, it is grappled (escape DC 15) and must succeed on a DC 15 Intelligence saving throw or be stunned until this grapple ends." },
            { name: "Extract Brain", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one incapacitated humanoid grappled by the mind flayer. Hit: 55 (10d10) piercing damage. If this damage reduces the target to 0 hit points, the mind flayer kills the target by extracting and devouring its brain." },
            { name: "Mind Blast (Recharge 5-6)", description: "The mind flayer magically emits psychic energy in a 60-foot cone. Each creature in that area must succeed on a DC 15 Intelligence saving throw or take 22 (4d8+4) psychic damage and be stunned for 1 minute." }
        ],
        spellcasting: {
            ability: "int",
            dc: 15,
            attack: 7,
            spells: {
                atWill: ["detect thoughts", "levitate"],
                "1/day each": ["dominate monster", "plane shift (self only)"],
                cantrips: ["dancing lights", "mage hand", "minor illusion"],
                "1st": { slots: 4, spells: ["charm person", "sleep", "witch bolt"] },
                "2nd": { slots: 3, spells: ["detect thoughts", "hold person", "invisibility"] },
                "3rd": { slots: 3, spells: ["clairvoyance", "fear", "slow"] },
                "4th": { slots: 3, spells: ["confusion", "Evard's black tentacles", "phantasmal killer"] },
                "5th": { slots: 1, spells: ["dominate person"] }
            }
        }
    },
    "ulitharid": {
        name: "Ulitharid",
        source: "VGtM",
        size: "large",
        type: "aberration",
        alignment: "lawful evil",
        ac: 15,
        acType: "breastplate",
        hp: 127,
        hitDice: "17d10+34",
        speed: { walk: 30 },
        abilityScores: { str: 15, dex: 12, con: 15, int: 21, wis: 19, cha: 21 },
        savingThrows: { int: 9, wis: 8, cha: 9 },
        skills: { arcana: 9, insight: 8, perception: 8, stealth: 5 },
        senses: ["darkvision 120 ft."],
        languages: "Deep Speech, Undercommon, telepathy 2 miles",
        cr: 9,
        traits: [
            { name: "Creature Sense", description: "The ulitharid is aware of the presence of creatures within 2 miles of it that have an Intelligence score of 4 or higher. It knows the distance and direction to each creature, as well as each creature's Intelligence score, but can't sense anything else about it." },
            { name: "Magic Resistance", description: "The ulitharid has advantage on saving throws against spells and other magical effects." },
            { name: "Psionic Hub", description: "If an elder brain establishes a psychic link with the ulitharid, the elder brain can form a psychic link with any other creature the ulitharid can detect using its Creature Sense." }
        ],
        actions: [
            { name: "Tentacles", description: "Melee Weapon Attack: +9 to hit, reach 10 ft., one creature. Hit: 27 (4d10+5) psychic damage. If the target is Large or smaller, it is grappled (escape DC 14) and must succeed on a DC 17 Intelligence saving throw or be stunned until this grapple ends." },
            { name: "Extract Brain", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one incapacitated humanoid grappled by the ulitharid. Hit: 55 (10d10) piercing damage. If this damage reduces the target to 0 hit points, the ulitharid kills the target by extracting and devouring its brain." },
            { name: "Mind Blast (Recharge 5-6)", description: "The ulitharid magically emits psychic energy in a 60-foot cone. Each creature in that area must succeed on a DC 17 Intelligence saving throw or take 31 (4d12+5) psychic damage and be stunned for 1 minute." }
        ],
        spellcasting: {
            innate: true,
            ability: "int",
            dc: 17,
            spells: {
                atWill: ["detect thoughts", "levitate"],
                "1/day each": ["confusion", "dominate monster", "eyebite", "feeblemind", "mass suggestion", "plane shift (self only)", "project image", "scrying", "telekinesis"]
            }
        }
    },
    "elder-brain": {
        name: "Elder Brain",
        source: "VGtM",
        size: "large",
        type: "aberration",
        alignment: "lawful evil",
        ac: 10,
        hp: 210,
        hitDice: "20d10+100",
        speed: { walk: 5, swim: 10 },
        abilityScores: { str: 15, dex: 10, con: 20, int: 21, wis: 19, cha: 20 },
        savingThrows: { int: 10, wis: 9, cha: 10 },
        skills: { arcana: 10, deception: 10, insight: 14, intimidation: 10, persuasion: 10 },
        senses: ["blindsight 120 ft."],
        languages: "understands Common, Deep Speech, and Undercommon but can't speak, telepathy 5 miles",
        cr: 14,
        traits: [
            { name: "Creature Sense", description: "The elder brain is aware of creatures within 5 miles of it that have an Intelligence score of 4 or higher. It knows the distance and direction to each creature, as well as each one's Intelligence score, but can't sense anything else about it." },
            { name: "Legendary Resistance (3/Day)", description: "If the elder brain fails a saving throw, it can choose to succeed instead." },
            { name: "Magic Resistance", description: "The elder brain has advantage on saving throws against spells and other magical effects." },
            { name: "Telepathic Hub", description: "The elder brain can use its telepathy to initiate and maintain telepathic conversations with up to ten creatures at a time. The elder brain can let those creatures telepathically hear each other while connected in this way." }
        ],
        actions: [
            { name: "Tentacle", description: "Melee Weapon Attack: +7 to hit, reach 30 ft., one target. Hit: 20 (4d8+2) bludgeoning damage. If the target is a Huge or smaller creature, it is grappled (escape DC 15) and takes 9 (1d8+5) psychic damage at the start of each of its turns until the grapple ends." },
            { name: "Mind Blast (Recharge 5-6)", description: "The elder brain magically emits psychic energy. Creatures of the elder brain's choice within 60 feet of it must succeed on a DC 18 Intelligence saving throw or take 32 (5d10+5) psychic damage and be stunned for 1 minute." },
            { name: "Psychic Link", description: "The elder brain targets one incapacitated creature it senses with its Creature Sense trait and establishes a psychic link with the target." },
            { name: "Sense Thoughts", description: "The elder brain targets a creature with which it has a psychic link. The elder brain gains insight into the target's emotional state and foremost thoughts." }
        ],
        legendaryActions: {
            perRound: 3,
            actions: [
                { name: "Tentacle", description: "The elder brain makes a tentacle attack." },
                { name: "Break Concentration", description: "The elder brain targets one creature within 120 feet of it with which it has a psychic link. The elder brain breaks the creature's concentration on a spell it has cast. The creature also takes 1d4 psychic damage per level of the spell." },
                { name: "Psychic Pulse", description: "The elder brain targets one creature within 120 feet of it with which it has a psychic link. Enemies of the elder brain within 10 feet of that creature take 10 (3d6) psychic damage." },
                { name: "Sever Psychic Link", description: "The elder brain targets one creature within 120 feet of it with which it has a psychic link. The elder brain ends the link, causing the creature to have disadvantage on all ability checks, attack rolls, and saving throws until the end of the creature's next turn." }
            ]
        }
    },

    // ===== ORCS =====
    "orc-blade-of-ilneval": {
        name: "Orc Blade of Ilneval",
        source: "VGtM",
        size: "medium",
        type: "humanoid",
        subtype: "orc",
        alignment: "chaotic evil",
        ac: 18,
        acType: "chain mail, shield",
        hp: 60,
        hitDice: "8d8+24",
        speed: { walk: 30 },
        abilityScores: { str: 17, dex: 11, con: 17, int: 10, wis: 12, cha: 14 },
        savingThrows: { wis: 3 },
        skills: { insight: 3, intimidation: 4, perception: 3 },
        senses: ["darkvision 60 ft."],
        languages: "Common, Orc",
        cr: 4,
        traits: [
            { name: "Aggressive", description: "As a bonus action, the orc can move up to its speed toward a hostile creature it can see." },
            { name: "Foe Smiter of Ilneval", description: "The orc deals an extra die of damage when it hits with a longsword attack (included in the attack)." }
        ],
        actions: [
            { name: "Multiattack", description: "The orc makes two melee attacks with its longsword or two ranged attacks with its javelins. If Ilneval's Command is available to use, the orc can use it after these attacks." },
            { name: "Longsword", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 12 (2d8+3) slashing damage, or 14 (2d10+3) slashing damage when used with two hands." },
            { name: "Javelin", description: "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 6 (1d6+3) piercing damage." },
            { name: "Ilneval's Command (Recharge 4-6)", description: "Up to three allied orcs within 120 feet of this orc that can hear it can use their reactions to each make one weapon attack." }
        ]
    },
    "orc-claw-of-luthic": {
        name: "Orc Claw of Luthic",
        source: "VGtM",
        size: "medium",
        type: "humanoid",
        subtype: "orc",
        alignment: "chaotic evil",
        ac: 14,
        acType: "hide armor",
        hp: 45,
        hitDice: "6d8+18",
        speed: { walk: 30 },
        abilityScores: { str: 14, dex: 15, con: 16, int: 10, wis: 15, cha: 11 },
        skills: { intimidation: 2, medicine: 4, survival: 4 },
        senses: ["darkvision 60 ft."],
        languages: "Common, Orc",
        cr: 2,
        traits: [
            { name: "Aggressive", description: "As a bonus action, the orc can move up to its speed toward a hostile creature it can see." }
        ],
        actions: [
            { name: "Multiattack", description: "The orc makes two claw attacks, or four claw attacks if it has fewer than half of its hit points remaining." },
            { name: "Claw", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8+2) slashing damage." }
        ],
        spellcasting: {
            ability: "wis",
            dc: 12,
            attack: 4,
            spells: {
                cantrips: ["guidance", "mending", "resistance", "thaumaturgy"],
                "1st": { slots: 4, spells: ["bane", "cure wounds", "guiding bolt"] },
                "2nd": { slots: 3, spells: ["augury", "warding bond"] }
            }
        }
    },
    "orc-hand-of-yurtrus": {
        name: "Orc Hand of Yurtrus",
        source: "VGtM",
        size: "medium",
        type: "humanoid",
        subtype: "orc",
        alignment: "chaotic evil",
        ac: 12,
        acType: "hide armor",
        hp: 30,
        hitDice: "4d8+12",
        speed: { walk: 30 },
        abilityScores: { str: 12, dex: 11, con: 16, int: 11, wis: 14, cha: 9 },
        skills: { arcana: 2, intimidation: 1, medicine: 4, religion: 2 },
        senses: ["darkvision 60 ft."],
        languages: "understands Common and Orc but can't speak",
        cr: 2,
        traits: [
            { name: "Aggressive", description: "As a bonus action, the orc can move up to its speed toward a hostile creature it can see." }
        ],
        actions: [
            { name: "Touch of the White Hand", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 9 (2d8) necrotic damage." }
        ],
        spellcasting: {
            ability: "wis",
            dc: 12,
            attack: 4,
            spells: {
                cantrips: ["guidance", "mending", "resistance", "thaumaturgy"],
                "1st": { slots: 4, spells: ["bane", "detect magic", "inflict wounds", "protection from evil and good"] },
                "2nd": { slots: 3, spells: ["blindness/deafness", "silence"] }
            }
        }
    },
    "orc-nurtured-one-of-yurtrus": {
        name: "Orc Nurtured One of Yurtrus",
        source: "VGtM",
        size: "medium",
        type: "humanoid",
        subtype: "orc",
        alignment: "chaotic evil",
        ac: 9,
        hp: 30,
        hitDice: "4d8+12",
        speed: { walk: 30 },
        abilityScores: { str: 15, dex: 8, con: 16, int: 7, wis: 11, cha: 7 },
        senses: ["darkvision 60 ft."],
        languages: "Common, Orc",
        cr: 0.5,
        traits: [
            { name: "Aggressive", description: "As a bonus action, the orc can move up to its speed toward a hostile creature it can see." },
            { name: "Corrupted Carrier", description: "When the orc is reduced to 0 hit points, it explodes, and any creature within 10 feet of it must make a DC 13 Constitution saving throw. On a failed save, the creature takes 14 (4d6) poison damage and becomes poisoned. On a success, the creature takes half as much damage and isn't poisoned. A creature poisoned by this effect can repeat the save at the end of each of its turn, ending the effect on itself on a success." },
            { name: "Nurtured One of Yurtrus", description: "The orc has advantage on saving throws against poison and disease." }
        ],
        actions: [
            { name: "Claws", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4+2) slashing damage plus 2 (1d4) necrotic damage." },
            { name: "Corrupted Vengeance", description: "The orc reduces itself to 0 hit points, triggering its Corrupted Carrier trait." }
        ]
    },
    "orc-red-fang-of-shargaas": {
        name: "Orc Red Fang of Shargaas",
        source: "VGtM",
        size: "medium",
        type: "humanoid",
        subtype: "orc",
        alignment: "chaotic evil",
        ac: 15,
        acType: "studded leather",
        hp: 52,
        hitDice: "8d8+16",
        speed: { walk: 30 },
        abilityScores: { str: 11, dex: 16, con: 15, int: 9, wis: 11, cha: 9 },
        skills: { intimidation: 1, perception: 2, stealth: 5 },
        senses: ["darkvision 60 ft."],
        languages: "Common, Orc",
        cr: 3,
        traits: [
            { name: "Cunning Action", description: "On each of its turns, the orc can use a bonus action to take the Dash, Disengage, or Hide action." },
            { name: "Hand of Shargaas", description: "The orc deals 2 extra dice of damage when it hits a target with a weapon attack (included in its attacks)." },
            { name: "Shargaas's Sight", description: "Magical darkness doesn't impede the orc's darkvision." },
            { name: "Slayer", description: "In the first round of a combat, the orc has advantage on attack rolls against any creature that hasn't taken a turn yet." }
        ],
        actions: [
            { name: "Multiattack", description: "The orc makes two scimitar or dart attacks." },
            { name: "Scimitar", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 13 (3d6+3) slashing damage." },
            { name: "Dart", description: "Ranged Weapon Attack: +5 to hit, range 20/60 ft., one target. Hit: 10 (3d4+3) piercing damage." },
            { name: "Veil of Shargaas (Recharges after a Short or Long Rest)", description: "The orc casts darkness without any components. Wisdom is its spellcasting ability." }
        ]
    },
    "tanarukk": {
        name: "Tanarukk",
        source: "VGtM",
        size: "medium",
        type: "fiend",
        subtype: "demon, orc",
        alignment: "chaotic evil",
        ac: 14,
        acType: "natural armor",
        hp: 95,
        hitDice: "10d8+50",
        speed: { walk: 30 },
        abilityScores: { str: 18, dex: 13, con: 20, int: 9, wis: 9, cha: 9 },
        skills: { intimidation: 2, perception: 2 },
        damageResistances: ["fire", "poison"],
        senses: ["darkvision 60 ft."],
        languages: "Abyssal, Common, Orc",
        cr: 5,
        traits: [
            { name: "Aggressive", description: "As a bonus action, the tanarukk can move up to its speed toward a hostile creature it can see." },
            { name: "Magic Resistance", description: "The tanarukk has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack", description: "The tanarukk makes two attacks: one with its bite and one with its greatsword." },
            { name: "Bite", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d8+4) piercing damage." },
            { name: "Greatsword", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6+4) slashing damage." }
        ],
        reactions: [
            { name: "Unbridled Fury", description: "In response to being hit by a melee attack, the tanarukk can make one melee weapon attack with advantage against the attacker." }
        ]
    },

    // ===== YUAN-TI =====
    "yuan-ti-anathema": {
        name: "Yuan-ti Anathema",
        source: "VGtM",
        size: "huge",
        type: "monstrosity",
        subtype: "shapechanger, yuan-ti",
        alignment: "neutral evil",
        ac: 16,
        acType: "natural armor",
        hp: 189,
        hitDice: "18d12+72",
        speed: { walk: 40, climb: 30, swim: 30 },
        abilityScores: { str: 23, dex: 13, con: 19, int: 19, wis: 17, cha: 20 },
        skills: { perception: 7, stealth: 5 },
        damageResistances: ["acid", "fire", "lightning"],
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 60 ft., blindsight 30 ft."],
        languages: "Abyssal, Common, Draconic",
        cr: 12,
        traits: [
            { name: "Magic Resistance", description: "The anathema has advantage on saving throws against spells and other magical effects." },
            { name: "Ophidiophobia Aura", description: "Any creature of the anathema's choice, other than a snake or a yuan-ti, that starts its turn within 30 feet of the anathema and can see or hear it must succeed on a DC 17 Wisdom saving throw or become frightened of snakes and yuan-ti. A frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." },
            { name: "Shapechanger", description: "The anathema can use its action to polymorph into a Huge giant constrictor snake, or back into its true form. Its statistics are the same in each form." },
            { name: "Six Heads", description: "The anathema has advantage on Wisdom (Perception) checks and on saving throws against being blinded, charmed, deafened, frightened, stunned, or knocked unconscious." }
        ],
        actions: [
            { name: "Multiattack (Anathema Form Only)", description: "The anathema makes two claw attacks, one constrict attack, and one Flurry of Bites attack." },
            { name: "Claw (Anathema Form Only)", description: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 13 (2d6+6) slashing damage." },
            { name: "Constrict", description: "Melee Weapon Attack: +10 to hit, reach 15 ft., one Large or smaller creature. Hit: 16 (3d6+6) bludgeoning damage plus 7 (2d6) acid damage, and the target is grappled (escape DC 16)." },
            { name: "Flurry of Bites", description: "Melee Weapon Attack: +10 to hit, reach 10 ft., one creature. Hit: 27 (6d6+6) piercing damage plus 14 (4d6) poison damage." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 17,
            spells: {
                atWill: ["animal friendship (snakes only)"],
                "3/day each": ["darkness", "entangle", "fear", "haste", "suggestion", "polymorph"],
                "1/day": ["divine word"]
            }
        }
    },
    "yuan-ti-broodguard": {
        name: "Yuan-ti Broodguard",
        source: "VGtM",
        size: "medium",
        type: "humanoid",
        subtype: "yuan-ti",
        alignment: "neutral evil",
        ac: 14,
        acType: "natural armor",
        hp: 45,
        hitDice: "7d8+14",
        speed: { walk: 30 },
        abilityScores: { str: 15, dex: 14, con: 14, int: 6, wis: 11, cha: 4 },
        savingThrows: { str: 4, dex: 4, wis: 2 },
        skills: { perception: 2 },
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "Abyssal, Common, Draconic",
        cr: 2,
        traits: [
            { name: "Mental Resistance", description: "The broodguard has advantage on saving throws against being charmed, and magic can't paralyze it." },
            { name: "Reckless", description: "At the start of its turn, the broodguard can gain advantage on all melee weapon attack rolls it makes during that turn, but attack rolls against it have advantage until the start of its next turn." }
        ],
        actions: [
            { name: "Multiattack", description: "The broodguard makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8+2) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6+2) slashing damage." }
        ]
    },
    "yuan-ti-mind-whisperer": {
        name: "Yuan-ti Mind Whisperer",
        source: "VGtM",
        size: "medium",
        type: "monstrosity",
        subtype: "shapechanger, yuan-ti",
        alignment: "neutral evil",
        ac: 14,
        acType: "natural armor",
        hp: 71,
        hitDice: "13d8+13",
        speed: { walk: 30 },
        abilityScores: { str: 16, dex: 14, con: 13, int: 14, wis: 14, cha: 16 },
        savingThrows: { wis: 4, cha: 5 },
        skills: { deception: 5, stealth: 4 },
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 120 ft."],
        languages: "Abyssal, Common, Draconic",
        cr: 4,
        traits: [
            { name: "Shapechanger", description: "The yuan-ti can use its action to polymorph into a Medium snake or back into its true form." },
            { name: "Magic Resistance", description: "The yuan-ti has advantage on saving throws against spells and other magical effects." },
            { name: "Mind Fangs (2/Day)", description: "The first time the yuan-ti hits with a melee attack on its turn, it can deal an extra 16 (3d10) psychic damage to the target." },
            { name: "Sseth's Blessing", description: "When the yuan-ti reduces an enemy to 0 hit points, the yuan-ti gains 9 temporary hit points." }
        ],
        actions: [
            { name: "Multiattack (Yuan-ti Form Only)", description: "The yuan-ti makes two bite attacks using its scimitar." },
            { name: "Bite (Snake Form Only)", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4+3) piercing damage plus 7 (2d6) poison damage." },
            { name: "Scimitar (Yuan-ti Form Only)", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6+3) slashing damage." }
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
    },
    "yuan-ti-nightmare-speaker": {
        name: "Yuan-ti Nightmare Speaker",
        source: "VGtM",
        size: "medium",
        type: "monstrosity",
        subtype: "shapechanger, yuan-ti",
        alignment: "neutral evil",
        ac: 14,
        acType: "natural armor",
        hp: 71,
        hitDice: "13d8+13",
        speed: { walk: 30 },
        abilityScores: { str: 16, dex: 14, con: 13, int: 14, wis: 12, cha: 16 },
        savingThrows: { wis: 3, cha: 5 },
        skills: { deception: 5, stealth: 4 },
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 120 ft."],
        languages: "Abyssal, Common, Draconic",
        cr: 4,
        traits: [
            { name: "Shapechanger", description: "The yuan-ti can use its action to polymorph into a Medium snake or back into its true form." },
            { name: "Death Fangs (2/Day)", description: "The first time the yuan-ti hits with a melee attack on its turn, it can deal an extra 16 (3d10) necrotic damage to the target." },
            { name: "Magic Resistance", description: "The yuan-ti has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack (Yuan-ti Form Only)", description: "The yuan-ti makes one constrict attack and one scimitar attack." },
            { name: "Bite (Snake Form Only)", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4+3) piercing damage plus 7 (2d6) poison damage." },
            { name: "Constrict", description: "Melee Weapon Attack: +5 to hit, reach 10 ft., one target. Hit: 10 (2d6+3) bludgeoning damage, and the target is grappled (escape DC 14)." },
            { name: "Scimitar (Yuan-ti Form Only)", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6+3) slashing damage." },
            { name: "Invoke Nightmare (Recharges after a Short or Long Rest)", description: "The yuan-ti taps into the nightmares of a creature it can see within 60 feet of it and creates an illusory, immobile manifestation of the creature's deepest fears, visible only to that creature. The target must make a DC 13 Intelligence saving throw. On a failed save, the target takes 11 (2d10) psychic damage and is frightened of the manifestation, believing it to be real. The yuan-ti must concentrate to maintain the illusion (as if concentrating on a spell), which lasts for up to 1 minute and can't be harmed." }
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
    },
    "yuan-ti-pit-master": {
        name: "Yuan-ti Pit Master",
        source: "VGtM",
        size: "medium",
        type: "monstrosity",
        subtype: "shapechanger, yuan-ti",
        alignment: "neutral evil",
        ac: 14,
        acType: "natural armor",
        hp: 88,
        hitDice: "16d8+16",
        speed: { walk: 30 },
        abilityScores: { str: 16, dex: 14, con: 13, int: 14, wis: 12, cha: 16 },
        savingThrows: { wis: 4, cha: 6 },
        skills: { deception: 6, stealth: 5 },
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 120 ft."],
        languages: "Abyssal, Common, Draconic",
        cr: 5,
        traits: [
            { name: "Shapechanger", description: "The yuan-ti can use its action to polymorph into a Medium snake or back into its true form." },
            { name: "Magic Resistance", description: "The yuan-ti has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack (Yuan-ti Form Only)", description: "The yuan-ti makes two bite attacks using its scimitar." },
            { name: "Bite (Snake Form Only)", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 5 (1d4+3) piercing damage plus 7 (2d6) poison damage." },
            { name: "Scimitar (Yuan-ti Form Only)", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6+3) slashing damage." },
            { name: "Merrshaulk's Slumber (1/Day)", description: "The yuan-ti targets up to five creatures that it can see within 60 feet of it. Each target must succeed on a DC 13 Constitution saving throw or fall into a magical sleep and be unconscious for 10 minutes. A sleeping target awakens if it takes damage or if someone uses an action to shake it awake. This magical sleep has no effect on a creature immune to being charmed." }
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
    },

    // ===== HAGS =====
    "annis-hag": {
        name: "Annis Hag",
        source: "VGtM",
        size: "large",
        type: "fey",
        alignment: "chaotic evil",
        ac: 17,
        acType: "natural armor",
        hp: 75,
        hitDice: "10d10+20",
        speed: { walk: 40 },
        abilityScores: { str: 21, dex: 12, con: 14, int: 13, wis: 14, cha: 15 },
        savingThrows: { con: 5 },
        skills: { deception: 5, perception: 5 },
        damageResistances: ["cold; bludgeoning, piercing, and slashing from nonmagical attacks"],
        senses: ["darkvision 60 ft."],
        languages: "Common, Giant, Sylvan",
        cr: 6,
        traits: [
            { name: "Hag Coven", description: "When hags must all be within 30 feet of one another. If one of the hags dies, the remaining hags can no longer cast these spells." }
        ],
        actions: [
            { name: "Multiattack", description: "The annis makes three attacks: one with her bite and two with her claws." },
            { name: "Bite", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 15 (3d6+5) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 15 (3d6+5) slashing damage." },
            { name: "Crushing Hug", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 36 (9d6+5) bludgeoning damage, and the target is grappled (escape DC 15) if it is a Large or smaller creature. Until the grapple ends, the target takes 36 (9d6+5) bludgeoning damage at the start of each of the hag's turns." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 13,
            spells: {
                "3/day each": ["disguise self (including the form of a Medium humanoid)", "fog cloud"]
            }
        }
    },
    "bheur-hag": {
        name: "Bheur Hag",
        source: "VGtM",
        size: "medium",
        type: "fey",
        alignment: "chaotic evil",
        ac: 17,
        acType: "natural armor",
        hp: 91,
        hitDice: "14d8+28",
        speed: { walk: 30, fly: 50 },
        abilityScores: { str: 13, dex: 16, con: 14, int: 12, wis: 13, cha: 16 },
        savingThrows: { wis: 4 },
        skills: { nature: 4, perception: 4, stealth: 6, survival: 4 },
        damageImmunities: ["cold"],
        senses: ["darkvision 60 ft."],
        languages: "Auran, Common, Giant",
        cr: 7,
        traits: [
            { name: "Graystaff Magic", description: "The hag carries a graystaff, a magic staff. The hag can use its flying speed only while astride the staff. If the staff is lost or destroyed, the hag must craft another, which takes a year and a day." },
            { name: "Ice Walk", description: "The hag can move across and climb icy surfaces without needing to make an ability check." }
        ],
        actions: [
            { name: "Slam", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 10 (2d8+1) bludgeoning damage plus 3 (1d6) cold damage." },
            { name: "Maddening Feast", description: "The hag feasts on the corpse of one enemy within reach that died within the past minute. Each creature of the hag's choice that is within 60 feet of it and able to see it must succeed on a DC 15 Wisdom saving throw or be frightened of it for 1 minute. While frightened, a creature is incapacitated, can't understand what others say, can't read, and speaks only in gibberish." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 14,
            spells: {
                atWill: ["hold person", "ray of frost"],
                "3/day each": ["cone of cold", "ice storm", "wall of ice"],
                "1/day each": ["control weather"]
            }
        }
    },

    // ===== MISC CREATURES =====
    "vargouille": {
        name: "Vargouille",
        source: "VGtM",
        size: "tiny",
        type: "fiend",
        alignment: "chaotic evil",
        ac: 12,
        hp: 13,
        hitDice: "3d4+6",
        speed: { walk: 5, fly: 40 },
        abilityScores: { str: 6, dex: 14, con: 14, int: 4, wis: 7, cha: 2 },
        damageResistances: ["cold", "fire", "lightning"],
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "understands Abyssal, Infernal, and any languages it knew before becoming a vargouille but can't speak",
        cr: 1,
        traits: [],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6+2) piercing damage plus 10 (3d6) poison damage." },
            { name: "Kiss", description: "The vargouille kisses one incapacitated humanoid within 5 feet of it. The target must succeed on a DC 12 Charisma saving throw or become cursed. The cursed target loses 1 point of Charisma after each hour, as its head takes on fiendish aspects. The curse doesn't advance while the target is in sunlight or in the area of a daylight spell; otherwise, when the cursed target's Charisma becomes 2, it dies, and its head tears from its body and becomes a new vargouille." },
            { name: "Stunning Shriek", description: "The vargouille shrieks. Each humanoid and beast within 30 feet of the vargouille and able to hear it must succeed on a DC 12 Wisdom saving throw or be frightened until the end of the vargouille's next turn. While frightened in this way, a target is stunned." }
        ]
    },
    "catoblepas": {
        name: "Catoblepas",
        source: "VGtM",
        size: "large",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 14,
        acType: "natural armor",
        hp: 84,
        hitDice: "8d10+40",
        speed: { walk: 30 },
        abilityScores: { str: 19, dex: 12, con: 21, int: 3, wis: 14, cha: 8 },
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 5,
        traits: [
            { name: "Keen Smell", description: "The catoblepas has advantage on Wisdom (Perception) checks that rely on smell." },
            { name: "Stench", description: "Any creature other than a catoblepas that starts its turn within 10 feet of the catoblepas must succeed on a DC 16 Constitution saving throw or be poisoned until the start of the creature's next turn. On a successful saving throw, the creature is immune to the stench of any catoblepas for 1 hour." }
        ],
        actions: [
            { name: "Tail", description: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 21 (5d6+4) bludgeoning damage, and the target must succeed on a DC 16 Constitution saving throw or be stunned until the start of the catoblepas's next turn." },
            { name: "Death Ray (Recharge 5-6)", description: "The catoblepas targets one creature it can see within 30 feet of it. The target must make a DC 16 Constitution saving throw, taking 36 (8d8) necrotic damage on a failed save, or half as much damage on a successful one. If the saving throw fails by 5 or more, the target instead takes 64 necrotic damage. The target dies if reduced to 0 hit points by this ray." }
        ]
    },
    "banderhobb": {
        name: "Banderhobb",
        source: "VGtM",
        size: "large",
        type: "monstrosity",
        alignment: "neutral evil",
        ac: 15,
        acType: "natural armor",
        hp: 84,
        hitDice: "8d10+40",
        speed: { walk: 30 },
        abilityScores: { str: 20, dex: 12, con: 20, int: 11, wis: 14, cha: 8 },
        skills: { athletics: 8, stealth: 7 },
        conditionImmunities: ["charmed", "frightened"],
        senses: ["darkvision 120 ft."],
        languages: "understands Common and the languages of its creator but can't speak",
        cr: 5,
        traits: [
            { name: "Resonant Connection", description: "If the banderhobb has even a tiny piece of a creature or an object in its possession, such as a lock of hair or a splinter of wood, it knows the most direct route to that creature or object if it is within 1 mile of the banderhobb." },
            { name: "Shadow Stealth", description: "While in dim light or darkness, the banderhobb can take the Hide action as a bonus action." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 22 (5d6+5) piercing damage, and the target is grappled (escape DC 15) if it is a Large or smaller creature. Until this grapple ends, the target is restrained, and the banderhobb can't use its bite attack or tongue attack on another target." },
            { name: "Tongue", description: "Melee Weapon Attack: +8 to hit, reach 15 ft., one creature. Hit: 10 (3d6) necrotic damage, and the target must make a DC 15 Strength saving throw. On a failed save, the target is pulled to a space within 5 feet of the banderhobb, which can use a bonus action to make a bite attack against the target." },
            { name: "Swallow", description: "The banderhobb makes a bite attack against a Medium or smaller creature it is grappling. If the attack hits, the target is also swallowed, and the grapple ends. A swallowed creature is blinded and restrained, has total cover against attacks and other effects outside the banderhobb, and takes 10 (3d6) necrotic damage at the start of each of the banderhobb's turns." },
            { name: "Shadow Step", description: "The banderhobb magically teleports up to 30 feet to an unoccupied space of dim light or darkness that it can see." }
        ]
    },
    "shadow-mastiff": {
        name: "Shadow Mastiff",
        source: "VGtM",
        size: "medium",
        type: "monstrosity",
        alignment: "neutral evil",
        ac: 12,
        hp: 33,
        hitDice: "6d8+6",
        speed: { walk: 40 },
        abilityScores: { str: 16, dex: 14, con: 13, int: 5, wis: 12, cha: 5 },
        skills: { perception: 5, stealth: 6 },
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks while in dim light or darkness"],
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 2,
        traits: [
            { name: "Ethereal Awareness", description: "The shadow mastiff can see ethereal creatures and objects." },
            { name: "Keen Hearing and Smell", description: "The shadow mastiff has advantage on Wisdom (Perception) checks that rely on hearing or smell." },
            { name: "Shadow Blend", description: "While in dim light or darkness, the shadow mastiff can use a bonus action to become invisible, along with anything it is wearing or carrying. The invisibility lasts until the shadow mastiff uses a bonus action to end it or until the shadow mastiff attacks, is in bright light, or is incapacitated." },
            { name: "Sunlight Weakness", description: "While in bright light created by sunlight, the shadow mastiff has disadvantage on attack rolls, ability checks, and saving throws." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6+3) piercing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone." }
        ]
    },
    "shadow-mastiff-alpha": {
        name: "Shadow Mastiff Alpha",
        source: "VGtM",
        size: "medium",
        type: "monstrosity",
        alignment: "neutral evil",
        ac: 12,
        hp: 44,
        hitDice: "8d8+8",
        speed: { walk: 40 },
        abilityScores: { str: 16, dex: 14, con: 13, int: 6, wis: 12, cha: 5 },
        skills: { perception: 5, stealth: 6 },
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks while in dim light or darkness"],
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 3,
        traits: [
            { name: "Ethereal Awareness", description: "The shadow mastiff can see ethereal creatures and objects." },
            { name: "Keen Hearing and Smell", description: "The shadow mastiff has advantage on Wisdom (Perception) checks that rely on hearing or smell." },
            { name: "Shadow Blend", description: "While in dim light or darkness, the shadow mastiff can use a bonus action to become invisible, along with anything it is wearing or carrying. The invisibility lasts until the shadow mastiff uses a bonus action to end it or until the shadow mastiff attacks, is in bright light, or is incapacitated." },
            { name: "Sunlight Weakness", description: "While in bright light created by sunlight, the shadow mastiff has disadvantage on attack rolls, ability checks, and saving throws." },
            { name: "Terrifying Howl", description: "As a bonus action, the shadow mastiff howls. Any beast or humanoid within 300 feet of the mastiff and able to hear its howl must succeed on a DC 11 Wisdom saving throw or be frightened for 1 minute." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6+3) piercing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone." }
        ]
    },
    "quickling": {
        name: "Quickling",
        source: "VGtM",
        size: "tiny",
        type: "fey",
        alignment: "chaotic evil",
        ac: 16,
        hp: 10,
        hitDice: "3d4+3",
        speed: { walk: 120 },
        abilityScores: { str: 4, dex: 23, con: 13, int: 10, wis: 12, cha: 7 },
        skills: { acrobatics: 8, perception: 5, sleight_of_hand: 8, stealth: 8 },
        senses: ["darkvision 60 ft."],
        languages: "Common, Sylvan",
        cr: 1,
        traits: [
            { name: "Blurred Movement", description: "Attack rolls against the quickling have disadvantage unless the quickling is incapacitated or restrained." },
            { name: "Evasion", description: "If the quickling is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails." }
        ],
        actions: [
            { name: "Multiattack", description: "The quickling makes three dagger attacks." },
            { name: "Dagger", description: "Melee or Ranged Weapon Attack: +8 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 8 (1d4+6) piercing damage." }
        ]
    },
    "redcap": {
        name: "Redcap",
        source: "VGtM",
        size: "small",
        type: "fey",
        alignment: "chaotic evil",
        ac: 13,
        acType: "natural armor",
        hp: 45,
        hitDice: "6d6+24",
        speed: { walk: 25 },
        abilityScores: { str: 18, dex: 13, con: 18, int: 10, wis: 12, cha: 9 },
        skills: { athletics: 6, perception: 3 },
        senses: ["darkvision 60 ft."],
        languages: "Common, Sylvan",
        cr: 3,
        traits: [
            { name: "Iron Boots", description: "While moving, the redcap has disadvantage on Dexterity (Stealth) checks." },
            { name: "Outsize Strength", description: "While grappling, the redcap is considered to be Medium. Also, wielding a heavy weapon doesn't impose disadvantage on its attack rolls." }
        ],
        actions: [
            { name: "Multiattack", description: "The redcap makes three attacks with its wicked sickle." },
            { name: "Wicked Sickle", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (2d4+4) slashing damage." },
            { name: "Ironbound Pursuit", description: "The redcap moves up to its speed to a creature it can see and kicks with its iron boots. The target must succeed on a DC 14 Dexterity saving throw or take 20 (3d10+4) bludgeoning damage and be knocked prone." }
        ]
    },
    "morkoth": {
        name: "Morkoth",
        source: "VGtM",
        size: "medium",
        type: "aberration",
        alignment: "chaotic evil",
        ac: 17,
        acType: "natural armor",
        hp: 130,
        hitDice: "20d8+40",
        speed: { walk: 25, swim: 50 },
        abilityScores: { str: 14, dex: 14, con: 14, int: 20, wis: 15, cha: 13 },
        savingThrows: { dex: 6, int: 9, wis: 6 },
        skills: { arcana: 9, history: 9, perception: 10, stealth: 6 },
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        senses: ["blindsight 30 ft., darkvision 120 ft."],
        languages: "telepathy 120 ft.",
        cr: 11,
        traits: [
            { name: "Amphibious", description: "The morkoth can breathe air and water." },
            { name: "Spell Reflection", description: "If the morkoth makes a successful saving throw against a spell, or a spell attack misses it, the morkoth can choose another creature (including the spellcaster) it can see within 120 feet of it. The spell targets the chosen creature instead of the morkoth." }
        ],
        actions: [
            { name: "Multiattack", description: "The morkoth makes three attacks: two with its bite and one with its tentacles or three with its bite." },
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (2d6+2) slashing damage." },
            { name: "Tentacles", description: "Melee Weapon Attack: +6 to hit, reach 15 ft., one target. Hit: 15 (3d8+2) bludgeoning damage, and the target is grappled (escape DC 14) if it is a Large or smaller creature." },
            { name: "Hypnosis", description: "The morkoth projects a 30-foot cone of magical energy. Each creature in that area must make a DC 17 Wisdom saving throw. On a failed save, the creature is charmed by the morkoth for 1 minute." }
        ],
        reactions: [
            { name: "Spell Reflection", description: "If the morkoth makes a successful saving throw against a spell, or a spell attack misses it, it can choose another creature it can see within 120 feet of it. The spell targets the chosen creature instead." }
        ],
        spellcasting: {
            ability: "int",
            dc: 17,
            attack: 9,
            spells: {
                atWill: ["detect magic", "mage hand"],
                "3/day each": ["darkness", "dimension door", "dispel magic", "lightning bolt", "sending"],
                "1/day each": ["chain lightning", "reverse gravity"]
            }
        }
    },
    "neogi": {
        name: "Neogi",
        source: "VGtM",
        size: "small",
        type: "aberration",
        alignment: "lawful evil",
        ac: 15,
        acType: "natural armor",
        hp: 33,
        hitDice: "6d6+12",
        speed: { walk: 30, climb: 30 },
        abilityScores: { str: 6, dex: 16, con: 14, int: 13, wis: 12, cha: 15 },
        skills: { intimidation: 4, perception: 3 },
        senses: ["darkvision 60 ft."],
        languages: "Common, Deep Speech, Undercommon",
        cr: 3,
        traits: [
            { name: "Mental Fortitude", description: "The neogi has advantage on saving throws against being charmed or frightened, and magic can't put the neogi to sleep." },
            { name: "Spider Climb", description: "The neogi can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." }
        ],
        actions: [
            { name: "Multiattack", description: "The neogi makes two attacks: one with its bite and one with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6+3) piercing damage plus 14 (4d6) poison damage, and the target must succeed on a DC 12 Constitution saving throw or become poisoned for 1 minute." },
            { name: "Claws", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (2d4+3) slashing damage." },
            { name: "Enslave (Recharges after a Short or Long Rest)", description: "The neogi targets one creature it can see within 30 feet of it. The target must succeed on a DC 14 Wisdom saving throw or be magically charmed by the neogi for 1 day, or until the neogi dies or is more than 1 mile from the target." }
        ]
    },
    "neogi-master": {
        name: "Neogi Master",
        source: "VGtM",
        size: "medium",
        type: "aberration",
        alignment: "lawful evil",
        ac: 15,
        acType: "natural armor",
        hp: 71,
        hitDice: "11d8+22",
        speed: { walk: 30, climb: 30 },
        abilityScores: { str: 6, dex: 16, con: 14, int: 16, wis: 12, cha: 18 },
        savingThrows: { wis: 4 },
        skills: { arcana: 6, deception: 7, intimidation: 7, perception: 4, persuasion: 7 },
        senses: ["darkvision 120 ft. (penetrates magical darkness)"],
        languages: "Common, Deep Speech, Undercommon, telepathy 30 ft.",
        cr: 4,
        traits: [
            { name: "Mental Fortitude", description: "The neogi has advantage on saving throws against being charmed or frightened, and magic can't put the neogi to sleep." },
            { name: "Spider Climb", description: "The neogi can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." }
        ],
        actions: [
            { name: "Multiattack", description: "The neogi makes two attacks: one with its bite and one with its claws, or it makes two tentacle attacks." },
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6+3) piercing damage plus 14 (4d6) poison damage, and the target must succeed on a DC 12 Constitution saving throw or become poisoned for 1 minute." },
            { name: "Claws", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (2d4+3) slashing damage." },
            { name: "Enslave (Recharges after a Short or Long Rest)", description: "The neogi targets one creature it can see within 30 feet of it. The target must succeed on a DC 14 Wisdom saving throw or be magically charmed by the neogi for 1 day, or until the neogi dies or is more than 1 mile from the target." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 14,
            spells: {
                atWill: ["guidance", "mage hand", "minor illusion", "prestidigitation"],
                "1/day each": ["dimension door", "hold person", "hunger of Hadar"]
            }
        }
    },
    "vegepygmy": {
        name: "Vegepygmy",
        source: "VGtM",
        size: "small",
        type: "plant",
        alignment: "neutral",
        ac: 13,
        acType: "natural armor",
        hp: 9,
        hitDice: "2d6+2",
        speed: { walk: 30 },
        abilityScores: { str: 7, dex: 14, con: 13, int: 6, wis: 11, cha: 7 },
        skills: { perception: 2, stealth: 4 },
        damageResistances: ["lightning", "piercing"],
        senses: ["darkvision 60 ft."],
        languages: "Vegepygmy",
        cr: 0.25,
        traits: [
            { name: "Plant Camouflage", description: "The vegepygmy has advantage on Dexterity (Stealth) checks it makes in any terrain with ample obscuring vegetation." },
            { name: "Regeneration", description: "The vegepygmy regains 3 hit points at the start of its turn. If it takes cold, fire, or necrotic damage, this trait doesn't function at the start of the vegepygmy's next turn. The vegepygmy dies only if it starts its turn with 0 hit points and doesn't regenerate." }
        ],
        actions: [
            { name: "Claws", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6+2) slashing damage." },
            { name: "Sling", description: "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 4 (1d4+2) bludgeoning damage." }
        ]
    },
    "vegepygmy-chief": {
        name: "Vegepygmy Chief",
        source: "VGtM",
        size: "small",
        type: "plant",
        alignment: "neutral",
        ac: 14,
        acType: "natural armor",
        hp: 33,
        hitDice: "6d6+12",
        speed: { walk: 30 },
        abilityScores: { str: 14, dex: 14, con: 14, int: 7, wis: 12, cha: 9 },
        skills: { perception: 3, stealth: 4 },
        damageResistances: ["lightning", "piercing"],
        senses: ["darkvision 60 ft."],
        languages: "Vegepygmy",
        cr: 2,
        traits: [
            { name: "Plant Camouflage", description: "The vegepygmy has advantage on Dexterity (Stealth) checks it makes in any terrain with ample obscuring vegetation." },
            { name: "Regeneration", description: "The vegepygmy regains 5 hit points at the start of its turn. If it takes cold, fire, or necrotic damage, this trait doesn't function at the start of the vegepygmy's next turn. The vegepygmy dies only if it starts its turn with 0 hit points and doesn't regenerate." }
        ],
        actions: [
            { name: "Multiattack", description: "The vegepygmy makes two attacks with its claws or two melee attacks with its spear." },
            { name: "Claws", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6+2) slashing damage." },
            { name: "Spear", description: "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 5 (1d6+2) piercing damage, or 6 (1d8+2) piercing damage if used with two hands to make a melee attack." },
            { name: "Spores (1/Day)", description: "A 15-foot-radius cloud of toxic spores extends out from the vegepygmy. The spores spread around corners. Each creature in that area that isn't a plant must succeed on a DC 12 Constitution saving throw or be poisoned. While poisoned in this way, a target takes 9 (2d8) poison damage at the start of each of its turns. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." }
        ]
    },
    "thorny": {
        name: "Thorny",
        source: "VGtM",
        size: "medium",
        type: "plant",
        alignment: "neutral",
        ac: 14,
        acType: "natural armor",
        hp: 27,
        hitDice: "5d8+5",
        speed: { walk: 30 },
        abilityScores: { str: 13, dex: 12, con: 13, int: 2, wis: 10, cha: 6 },
        skills: { perception: 4, stealth: 3 },
        damageResistances: ["lightning", "piercing"],
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 1,
        traits: [
            { name: "Plant Camouflage", description: "The thorny has advantage on Dexterity (Stealth) checks it makes in any terrain with ample obscuring vegetation." },
            { name: "Regeneration", description: "The thorny regains 5 hit points at the start of its turn. If it takes cold, fire, or necrotic damage, this trait doesn't function at the start of the thorny's next turn. The thorny dies only if it starts its turn with 0 hit points and doesn't regenerate." },
            { name: "Thorny Body", description: "At the start of its turn, the thorny deals 2 (1d4) piercing damage to any creature grappling it." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 8 (2d6+1) piercing damage." }
        ]
    },
    "froghemoth": {
        name: "Froghemoth",
        source: "VGtM",
        size: "huge",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 14,
        acType: "natural armor",
        hp: 184,
        hitDice: "16d12+80",
        speed: { walk: 30, swim: 30 },
        abilityScores: { str: 23, dex: 13, con: 20, int: 2, wis: 12, cha: 5 },
        savingThrows: { con: 9, wis: 5 },
        skills: { perception: 9, stealth: 5 },
        damageResistances: ["fire", "lightning"],
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 10,
        traits: [
            { name: "Amphibious", description: "The froghemoth can breathe air and water." },
            { name: "Shock Susceptibility", description: "If the froghemoth takes lightning damage, it suffers several effects until the end of its next turn: its speed is halved, it takes a -2 penalty to AC and Dexterity saving throws, it can't use reactions or Multiattack, and on its turn, it can use either an action or a bonus action, not both." }
        ],
        actions: [
            { name: "Multiattack", description: "The froghemoth makes two attacks with its tentacles. It can also use its tongue or bite." },
            { name: "Tentacle", description: "Melee Weapon Attack: +10 to hit, reach 20 ft., one target. Hit: 19 (3d8+6) bludgeoning damage, and the target is grappled (escape DC 16) if it is a Huge or smaller creature. Until the grapple ends, the froghemoth can't use this tentacle on another target. The froghemoth has four tentacles." },
            { name: "Bite", description: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 22 (3d10+6) piercing damage, and the target is swallowed if it is a Medium or smaller creature. A swallowed creature is blinded and restrained, has total cover against attacks outside the froghemoth, and takes 10 (3d6) acid damage at the start of each of the froghemoth's turns." },
            { name: "Tongue", description: "The froghemoth targets one Medium or smaller creature that it can see within 20 feet of it. The target must make a DC 18 Strength saving throw. On a failed save, the target is pulled into an unoccupied space within 5 feet of the froghemoth, and the froghemoth can make a bite attack against it as a bonus action." }
        ]
    },
    "wood-woad": {
        name: "Wood Woad",
        source: "VGtM",
        size: "medium",
        type: "plant",
        alignment: "lawful neutral",
        ac: 18,
        acType: "natural armor, shield",
        hp: 75,
        hitDice: "10d8+30",
        speed: { walk: 30, climb: 30 },
        abilityScores: { str: 18, dex: 12, con: 16, int: 10, wis: 13, cha: 8 },
        skills: { athletics: 7, perception: 4, stealth: 4 },
        damageVulnerabilities: ["fire"],
        damageResistances: ["bludgeoning", "piercing"],
        conditionImmunities: ["charmed", "frightened"],
        senses: ["darkvision 60 ft."],
        languages: "Sylvan",
        cr: 5,
        traits: [
            { name: "Magic Club", description: "In the wood woad's hand, its club is magical and deals 7 (3d4) extra damage (included in its Club attack)." },
            { name: "Plant Camouflage", description: "The wood woad has advantage on Dexterity (Stealth) checks it makes in any terrain with ample obscuring vegetation." },
            { name: "Regeneration", description: "The wood woad regains 10 hit points at the start of its turn if it is in contact with the ground. If the wood woad takes fire damage, this trait doesn't function at the start of the wood woad's next turn. The wood woad dies only if it starts its turn with 0 hit points and doesn't regenerate." },
            { name: "Tree Stride", description: "Once on each of its turns, the wood woad can use 10 feet of its movement to step magically into one living tree within 5 feet of it and emerge from a second living tree within 60 feet of it that it can see, appearing in an unoccupied space within 5 feet of the second tree." }
        ],
        actions: [
            { name: "Multiattack", description: "The wood woad makes two attacks with its club." },
            { name: "Club", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (4d4+4) bludgeoning damage." }
        ]
    }
};
