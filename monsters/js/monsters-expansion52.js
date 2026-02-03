// Expansion Pack 52 - Final Creatures
// Additional monsters for comprehensive coverage

const MONSTERS_EXPANSION52 = {
    // ===== More Misc Creatures =====
    "pseudodragon": {
        name: "Pseudodragon",
        source: "MM",
        size: "tiny",
        type: "dragon",
        alignment: "neutral good",
        ac: 13,
        acType: "natural armor",
        hp: 7,
        hitDice: "2d4+2",
        speed: { walk: 15, fly: 60 },
        abilityScores: { str: 6, dex: 15, con: 13, int: 10, wis: 12, cha: 10 },
        skills: { perception: 3, stealth: 4 },
        senses: ["blindsight 10 ft.", "darkvision 60 ft."],
        languages: "understands Common and Draconic but can't speak",
        cr: "1/4",
        environment: ["forest", "mountain", "coastal", "urban"],
        role: "lurker",
        tags: ["dragon"],
        traits: [
            { name: "Keen Senses", description: "The pseudodragon has advantage on Wisdom (Perception) checks that rely on sight, hearing, or smell." },
            { name: "Magic Resistance", description: "The pseudodragon has advantage on saving throws against spells and other magical effects." },
            { name: "Limited Telepathy", description: "The pseudodragon can magically communicate simple ideas, emotions, and images telepathically with any creature within 100 feet of it that can understand a language." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4+2) piercing damage." },
            { name: "Sting", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4+2) piercing damage, and the target must succeed on a DC 11 Constitution saving throw or become poisoned for 1 hour. If the saving throw fails by 5 or more, the target falls unconscious for the same duration, or until it takes damage or another creature uses an action to shake it awake." }
        ]
    },
    "faerie-dragon": {
        name: "Faerie Dragon (Violet)",
        source: "MM",
        size: "tiny",
        type: "dragon",
        alignment: "chaotic good",
        ac: 15,
        hp: 14,
        hitDice: "4d4+4",
        speed: { walk: 10, fly: 60 },
        abilityScores: { str: 3, dex: 20, con: 13, int: 14, wis: 12, cha: 16 },
        skills: { arcana: 4, perception: 3, stealth: 7 },
        senses: ["darkvision 60 ft."],
        languages: "Draconic, Sylvan",
        cr: 2,
        environment: ["forest"],
        role: "controller",
        tags: ["dragon", "spellcaster"],
        traits: [
            { name: "Superior Invisibility", description: "As a bonus action, the dragon can magically turn invisible until its concentration ends (as if concentrating on a spell). Any equipment the dragon wears or carries is invisible with it." },
            { name: "Limited Telepathy", description: "Using telepathy, the dragon can magically communicate with any other faerie dragon within 60 feet of it." },
            { name: "Magic Resistance", description: "The dragon has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 1 piercing damage." },
            { name: "Euphoria Breath (Recharge 5-6)", description: "The dragon exhales a puff of euphoria gas at one creature within 5 feet of it. The target must succeed on a DC 11 Wisdom saving throw, or for 1 minute, the target can't take reactions and must roll a d6 at the start of each of its turns to determine its behavior during the turn." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 13,
            spells: {
                "1/day each": ["color spray", "dancing lights", "hallucinatory terrain", "mage hand", "major image", "minor illusion", "mirror image", "polymorph", "suggestion"]
            }
        }
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
        environment: ["urban"],
        role: "minion",
        tags: ["construct"],
        traits: [
            { name: "Telepathic Bond", description: "While the homunculus is on the same plane of existence as its master, it can magically convey what it senses to its master, and the two can communicate telepathically." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 1 piercing damage, and the target must succeed on a DC 10 Constitution saving throw or be poisoned for 1 minute. If the saving throw fails by 5 or more, the target is instead poisoned for 5 (1d10) minutes and unconscious while poisoned in this way." }
        ]
    },
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
        environment: ["urban"],
        role: "soldier",
        tags: ["construct"],
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
        conditionImmunities: ["blinded", "charmed", "deafened", "frightened", "paralyzed", "petrified", "poisoned"],
        senses: ["blindsight 60 ft. (blind beyond this radius)"],
        languages: "—",
        cr: "1/4",
        environment: ["urban"],
        role: "skirmisher",
        tags: ["construct"],
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
        conditionImmunities: ["blinded", "charmed", "deafened", "frightened", "paralyzed", "petrified", "poisoned"],
        senses: ["blindsight 60 ft. (blind beyond this radius)"],
        languages: "—",
        cr: 2,
        environment: ["urban"],
        role: "ambusher",
        tags: ["construct"],
        traits: [
            { name: "Antimagic Susceptibility", description: "The rug is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the rug must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute." },
            { name: "Damage Transfer", description: "While it is grappling a creature, the rug takes only half the damage dealt to it, and the creature grappled by the rug takes the other half." },
            { name: "False Appearance", description: "While the rug remains motionless, it is indistinguishable from a normal rug." }
        ],
        actions: [
            { name: "Smother", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one Medium or smaller creature. Hit: The creature is grappled (escape DC 13). Until this grapple ends, the target is restrained, blinded, and at risk of suffocating, and the rug can't smother another target. In addition, at the start of each of the target's turns, the target takes 10 (2d6+3) bludgeoning damage." }
        ]
    },
    "helmed-horror": {
        name: "Helmed Horror",
        source: "MM",
        size: "medium",
        type: "construct",
        alignment: "unaligned",
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
        environment: ["urban"],
        role: "soldier",
        tags: ["construct"],
        traits: [
            { name: "Magic Resistance", description: "The helmed horror has advantage on saving throws against spells and other magical effects." },
            { name: "Spell Immunity", description: "The helmed horror is immune to three spells chosen by its creator. Typical immunities include fireball, heat metal, and lightning bolt." }
        ],
        actions: [
            { name: "Multiattack", description: "The helmed horror makes two longsword attacks." },
            { name: "Longsword", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8+4) slashing damage, or 9 (1d10+4) slashing damage if used with two hands." }
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
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageVulnerabilities: ["fire"],
        damageImmunities: ["poison"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "poisoned", "unconscious"],
        senses: ["darkvision 60 ft."],
        languages: "understands the languages of its creator but can't speak",
        cr: 1,
        environment: ["grassland", "forest"],
        role: "controller",
        tags: ["construct"],
        traits: [
            { name: "False Appearance", description: "While the scarecrow remains motionless, it is indistinguishable from an ordinary, inanimate scarecrow." }
        ],
        actions: [
            { name: "Multiattack", description: "The scarecrow makes two claw attacks." },
            { name: "Claw", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4+1) slashing damage. If the target is a creature, it must succeed on a DC 11 Wisdom saving throw or be frightened until the end of the scarecrow's next turn." },
            { name: "Terrifying Glare", description: "The scarecrow targets one creature it can see within 30 feet of it. If the target can see the scarecrow, the target must succeed on a DC 11 Wisdom saving throw or be magically frightened until the end of the scarecrow's next turn. The frightened target is paralyzed." }
        ]
    }
};
