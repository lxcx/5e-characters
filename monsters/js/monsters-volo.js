// Volo's Guide to Monsters - Monster Data
// Source: VGtM (Volo's Guide to Monsters)

const MONSTERS_VOLO = {
    // ===== BEHOLDERS =====
    
    
    

    // ===== GIANTS =====
    
    
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
    
    
    

    // ===== MIND FLAYERS =====
    
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
