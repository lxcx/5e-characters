// Volo's Guide Extended - More creatures with categorization
// Source: VGtM

const MONSTERS_VOLO_EXTENDED = {
    // ===== Yuan-ti =====
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
        senses: ["darkvision 60 ft.", "blindsight 30 ft."],
        languages: "Abyssal, Common, Draconic",
        cr: 12,
        environment: ["jungle", "swamp", "underdark"],
        role: "brute",
        tags: ["yuan-ti", "shapechanger", "spellcaster"],
        traits: [
            { name: "Magic Resistance", description: "The anathema has advantage on saving throws against spells and other magical effects." },
            { name: "Ophidiophobia Aura", description: "Any creature of the anathema's choice, other than a snake or a yuan-ti, that starts its turn within 30 feet of the anathema and can see or hear it must succeed on a DC 17 Wisdom saving throw or become frightened of snakes and yuan-ti. A frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." },
            { name: "Shapechanger", description: "The anathema can use its action to polymorph into a Huge giant constrictor snake, or back into its true form." },
            { name: "Six Heads", description: "The anathema has advantage on Wisdom (Perception) checks and on saving throws against being blinded, charmed, deafened, frightened, stunned, or knocked unconscious." }
        ],
        actions: [
            { name: "Multiattack (Anathema Form Only)", description: "The anathema makes two claw attacks, one constrict attack, and one Flurry of Bites attack." },
            { name: "Claw (Anathema Form Only)", description: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 13 (2d6+6) slashing damage." },
            { name: "Constrict", description: "Melee Weapon Attack: +10 to hit, reach 15 ft., one Large or smaller creature. Hit: 16 (3d6+6) bludgeoning damage plus 7 (2d6) acid damage, and the target is grappled (escape DC 16). Until this grapple ends, the target is restrained and takes 16 (3d6+6) bludgeoning damage plus 7 (2d6) acid damage at the start of each of its turns, and the anathema can't constrict another target." },
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
        environment: ["jungle", "swamp", "urban"],
        role: "soldier",
        tags: ["yuan-ti", "humanoid"],
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
        environment: ["jungle", "swamp", "urban"],
        role: "controller",
        tags: ["yuan-ti", "shapechanger", "spellcaster", "psionic"],
        traits: [
            { name: "Magic Resistance", description: "The yuan-ti has advantage on saving throws against spells and other magical effects." },
            { name: "Mind Fangs (2/Day)", description: "The first time the yuan-ti hits with a melee attack on its turn, it can deal an extra 16 (3d10) psychic damage to the target." },
            { name: "Shapechanger", description: "The yuan-ti can use its action to polymorph into a Medium snake or back into its true form." },
            { name: "Sseth's Blessing", description: "When the yuan-ti reduces an enemy to 0 hit points, the yuan-ti gains 9 temporary hit points." }
        ],
        actions: [
            { name: "Multiattack (Yuan-ti Form Only)", description: "The yuan-ti makes one bite attack and one scimitar attack." },
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4+3) piercing damage plus 7 (2d6) poison damage." },
            { name: "Scimitar (Yuan-ti Form Only)", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6+3) slashing damage." }
        ],
        spellcasting: {
            ability: "cha",
            dc: 13,
            attack: 5,
            spells: {
                cantrips: ["eldritch blast (2 beams)", "friends", "message", "minor illusion", "poison spray", "prestidigitation"],
                "1st": { slots: 4, spells: ["charm person", "crown of madness", "detect thoughts", "expeditious retreat", "illusory script"] },
                "2nd": { slots: 3, spells: ["detect thoughts", "invisibility", "suggestion"] },
                "3rd": { slots: 2, spells: ["fear", "hypnotic pattern"] }
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
        environment: ["jungle", "swamp", "urban"],
        role: "controller",
        tags: ["yuan-ti", "shapechanger", "spellcaster"],
        traits: [
            { name: "Death Fangs (2/Day)", description: "The first time the yuan-ti hits with a melee attack on its turn, it can deal an extra 16 (3d10) necrotic damage to the target." },
            { name: "Magic Resistance", description: "The yuan-ti has advantage on saving throws against spells and other magical effects." },
            { name: "Shapechanger", description: "The yuan-ti can use its action to polymorph into a Medium snake or back into its true form." }
        ],
        actions: [
            { name: "Multiattack (Yuan-ti Form Only)", description: "The yuan-ti makes one bite attack and one scimitar attack." },
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4+3) piercing damage plus 7 (2d6) poison damage." },
            { name: "Scimitar (Yuan-ti Form Only)", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6+3) slashing damage." },
            { name: "Invoke Nightmare (Recharges after a Short or Long Rest)", description: "The yuan-ti taps into the nightmares of a creature it can see within 60 feet of it and creates an illusory, immobile manifestation of the creature's deepest fears, visible only to that creature." }
        ],
        spellcasting: {
            ability: "cha",
            dc: 13,
            attack: 5,
            spells: {
                cantrips: ["chill touch", "eldritch blast (2 beams)", "mage hand", "message", "poison spray", "prestidigitation"],
                "1st": { slots: 4, spells: ["arms of Hadar", "charm person", "expeditious retreat", "hex"] },
                "2nd": { slots: 3, spells: ["darkness", "enthrall", "hold person", "misty step"] },
                "3rd": { slots: 2, spells: ["fear", "hunger of Hadar"] }
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
        environment: ["jungle", "swamp", "urban"],
        role: "leader",
        tags: ["yuan-ti", "shapechanger", "spellcaster"],
        traits: [
            { name: "Magic Resistance", description: "The yuan-ti has advantage on saving throws against spells and other magical effects." },
            { name: "Shapechanger", description: "The yuan-ti can use its action to polymorph into a Medium snake or back into its true form." },
            { name: "Shed Skin (1/Day)", description: "The yuan-ti can shed its skin as a bonus action to free itself from a grapple, shackles, or other restraints. If the yuan-ti spends 1 minute eating its shed skin, it regains hit points equal to half its hit point maximum." }
        ],
        actions: [
            { name: "Multiattack (Yuan-ti Form Only)", description: "The yuan-ti makes two bite attacks using its snake arms." },
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 5 (1d4+3) piercing damage plus 7 (2d6) poison damage." },
            { name: "Merrshaulk's Slumber (1/Day)", description: "The yuan-ti targets up to five creatures that it can see within 60 feet of it. Each target must succeed on a DC 13 Constitution saving throw or fall into a magical sleep and be unconscious for 10 minutes." }
        ],
        spellcasting: {
            ability: "cha",
            dc: 14,
            attack: 6,
            spells: {
                cantrips: ["eldritch blast (2 beams)", "guidance", "mending", "message", "poison spray"],
                "1st": { slots: 4, spells: ["animal friendship (snakes only)", "speak with animals (snakes only)"] },
                "2nd": { slots: 3, spells: ["detect thoughts", "hold person", "suggestion"] },
                "3rd": { slots: 2, spells: ["fear", "hypnotic pattern"] }
            }
        }
    },

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
        environment: ["forest", "grassland", "hill", "underdark"],
        role: "controller",
        tags: ["goblinoid", "fey-touched", "trickster"],
        traits: [
            { name: "Innate Spellcasting", description: "The nilbog's innate spellcasting ability is Charisma (spell save DC 12). It can innately cast the following spells, requiring no material components: At will: mage hand, Tasha's hideous laughter, vicious mockery; 1/day: confusion." },
            { name: "Nilbogism", description: "Any creature that attempts to damage the nilbog must first succeed on a DC 12 Charisma saving throw or be charmed until the end of the creature's next turn. A creature charmed in this way must use its action praising the nilbog. The nilbog can't regain hit points, including through magical healing, except through its Reversal of Fortune reaction." },
            { name: "Nimble Escape", description: "The nilbog can take the Disengage or Hide action as a bonus action on each of its turns." }
        ],
        actions: [
            { name: "Fool's Scepter", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6+2) bludgeoning damage." },
            { name: "Shortbow", description: "Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 5 (1d6+2) piercing damage." }
        ],
        reactions: [
            { name: "Reversal of Fortune", description: "In response to another creature dealing damage to the nilbog, the nilbog reduces the damage to 0 and regains 1d6 hit points." }
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
        environment: ["forest", "hill", "mountain"],
        role: "brute",
        tags: ["hag", "fey"],
        traits: [
            { name: "Innate Spellcasting", description: "The hag's innate spellcasting ability is Charisma (spell save DC 13). She can innately cast the following spells, requiring no material components: 3/day each: disguise self (including the form of a Medium humanoid), fog cloud." }
        ],
        actions: [
            { name: "Multiattack", description: "The annis makes three attacks: one with her bite and two with her claws." },
            { name: "Bite", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 15 (3d6+5) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 15 (3d6+5) slashing damage." },
            { name: "Crushing Hug", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 36 (9d6+5) bludgeoning damage, and the target is grappled (escape DC 15) if it is a Large or smaller creature. Until the grapple ends, the target takes 36 (9d6+5) bludgeoning damage at the start of each of the hag's turns. The hag can't make attacks while grappling a creature in this way." }
        ]
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
        environment: ["arctic"],
        role: "controller",
        tags: ["hag", "fey", "cold"],
        traits: [
            { name: "Graystaff Magic", description: "The hag carries a graystaff, a length of gray wood that is a focus for her inner power. She can ride the staff as if it were a broom of flying. While holding the staff, she can cast additional spells with her innate spellcasting trait (these spells are marked with an asterisk). If the staff is lost or destroyed, the hag must craft another, which takes a year and a day." },
            { name: "Ice Walk", description: "The hag can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn't cost her extra movement." }
        ],
        actions: [
            { name: "Slam", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 10 (2d8+1) bludgeoning damage plus 3 (1d6) cold damage." },
            { name: "Maddening Feast", description: "The hag feasts on the corpse of one enemy within 5 feet of her that died within the past minute. Each creature of the hag's choice that is within 60 feet of her and able to see her must succeed on a DC 15 Wisdom saving throw or be frightened of her for 1 minute." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 14,
            attack: 6,
            spells: {
                atWill: ["hold person*", "ray of frost"],
                "3/day each": ["cone of cold*", "ice storm*", "wall of ice*"],
                "1/day each": ["control weather"]
            }
        }
    }
};
