// Expansion Pack 12 - More Coverage
// Various creatures to fill gaps

const MONSTERS_EXPANSION12 = {
    // ===== More Classic D&D Monsters =====
    "intellect-devourer": {
        name: "Intellect Devourer",
        source: "MM",
        size: "tiny",
        type: "aberration",
        alignment: "lawful evil",
        ac: 12,
        hp: 21,
        hitDice: "6d4+6",
        speed: { walk: 40 },
        abilityScores: { str: 6, dex: 14, con: 13, int: 12, wis: 11, cha: 10 },
        skills: { perception: 2, stealth: 4 },
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        conditionImmunities: ["blinded"],
        senses: ["blindsight 60 ft. (blind beyond this radius)"],
        languages: "understands Deep Speech but can't speak, telepathy 60 ft.",
        cr: 2,
        environment: ["underdark"],
        role: "lurker",
        tags: ["aberration", "mind flayer"],
        traits: [
            { name: "Detect Sentience", description: "The intellect devourer can sense the presence and location of any creature within 300 feet of it that has an Intelligence of 3 or higher, regardless of interposing barriers, unless the creature is protected by a mind blank spell." }
        ],
        actions: [
            { name: "Multiattack", description: "The intellect devourer makes one attack with its claws and uses Devour Intellect." },
            { name: "Claws", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4+2) slashing damage." },
            { name: "Devour Intellect", description: "The intellect devourer targets one creature it can see within 10 feet of it that has a brain. The target must succeed on a DC 12 Intelligence saving throw against this magic or take 11 (2d10) psychic damage. Also on a failure, roll 3d6: If the total equals or exceeds the target's Intelligence score, that score is reduced to 0. The target is stunned until it regains at least one point of Intelligence." },
            { name: "Body Thief", description: "The intellect devourer initiates an Intelligence contest with an incapacitated humanoid within 5 feet of it that isn't protected by protection from evil and good. If it wins the contest, the intellect devourer magically consumes the target's brain, teleports into the target's skull, and takes control of the target's body." }
        ]
    },
    "flail-snail": {
        name: "Flail Snail",
        source: "VGtM",
        size: "large",
        type: "elemental",
        alignment: "unaligned",
        ac: 16,
        acType: "natural armor",
        hp: 52,
        hitDice: "5d10+25",
        speed: { walk: 10 },
        abilityScores: { str: 17, dex: 5, con: 20, int: 3, wis: 10, cha: 5 },
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 60 ft.", "tremorsense 60 ft."],
        languages: "—",
        cr: 3,
        environment: ["underdark"],
        role: "brute",
        tags: ["elemental"],
        traits: [
            { name: "Antimagic Shell", description: "The snail has advantage on saving throws against spells, and any creature making a spell attack against the snail has disadvantage on the attack roll. If the snail succeeds on its saving throw against a spell or a spell attack misses it, the snail's shell converts some of the spell's energy into a burst of destructive force if the spell is of 1st level or higher; each creature within 30 feet of the snail must make a DC 15 Constitution saving throw, taking 1d6 force damage per level of the spell on a failed save, or half as much damage on a successful one." },
            { name: "Flail Tentacles", description: "The snail has five flail tentacles. Whenever the snail takes 10 damage or more on a single turn, one of its tentacles dies. If even one tentacle remains, the snail regrows all dead ones within 1d4 days. If all its tentacles die, the snail retracts into its shell, gaining total cover, and it begins wailing, a sound that can be heard for 600 feet, stopping only when it dies 5d6 minutes later. Healing magic that restores limbs, such as the regenerate spell, can halt this dying process." }
        ],
        actions: [
            { name: "Multiattack", description: "The flail snail makes as many flail tentacle attacks as it has flail tentacles, all against the same target." },
            { name: "Flail Tentacle", description: "Melee Weapon Attack: +5 to hit, reach 10 ft., one target. Hit: 6 (1d6+3) bludgeoning damage." },
            { name: "Shell Defense", description: "The flail snail withdraws into its shell, gaining a +4 bonus to AC until it emerges. It can emerge from its shell as a bonus action on its turn." }
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
        environment: ["swamp"],
        role: "brute",
        tags: ["monstrosity"],
        traits: [
            { name: "Amphibious", description: "The froghemoth can breathe air and water." },
            { name: "Shock Susceptibility", description: "If the froghemoth takes lightning damage, it suffers several adverse effects until the end of its next turn: its speed is halved, it takes a −2 penalty to AC and Dexterity saving throws, it can't use reactions or Multiattack, and on its turn, it can use either an action or a bonus action, not both." }
        ],
        actions: [
            { name: "Multiattack", description: "The froghemoth makes two attacks with its tentacles. It can also use its tongue or bite." },
            { name: "Tentacle", description: "Melee Weapon Attack: +10 to hit, reach 20 ft., one target. Hit: 19 (3d8+6) bludgeoning damage, and the target is grappled (escape DC 16) if it is a Huge or smaller creature. Until the grapple ends, the froghemoth can't use this tentacle on another target. The froghemoth has four tentacles." },
            { name: "Bite", description: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 22 (3d10+6) piercing damage, and the target is swallowed if it is a Medium or smaller creature. A swallowed creature is blinded and restrained, has total cover against attacks and other effects outside the froghemoth, and takes 10 (3d6) acid damage at the start of each of the froghemoth's turns." },
            { name: "Tongue", description: "The froghemoth targets one Medium or smaller creature that it can see within 20 feet of it. The target must make a DC 18 Strength saving throw. On a failed save, the target is pulled into an unoccupied space within 5 feet of the froghemoth." }
        ]
    },

    // ===== Beholder Variants =====
    "death-tyrant": {
        name: "Death Tyrant",
        source: "MM",
        size: "large",
        type: "undead",
        alignment: "lawful evil",
        ac: 19,
        acType: "natural armor",
        hp: 187,
        hitDice: "25d10+50",
        speed: { walk: 0, fly: 20 },
        abilityScores: { str: 10, dex: 14, con: 14, int: 19, wis: 15, cha: 19 },
        savingThrows: { str: 5, con: 7, int: 9, wis: 7, cha: 9 },
        skills: { perception: 12 },
        damageImmunities: ["poison"],
        conditionImmunities: ["charmed", "exhaustion", "paralyzed", "petrified", "poisoned", "prone"],
        senses: ["darkvision 120 ft."],
        languages: "Deep Speech, Undercommon",
        cr: 14,
        environment: ["underdark"],
        role: "controller",
        tags: ["undead", "beholder"],
        traits: [
            { name: "Negative Energy Cone", description: "The death tyrant's central eye emits an invisible, magical 150-foot cone of negative energy. At the start of each of its turns, the tyrant decides which way the cone faces and whether the cone is active. Any creature in that area can't regain hit points. Any humanoid that dies there becomes a zombie under the tyrant's command." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 14 (4d6) piercing damage." },
            { name: "Eye Rays", description: "The death tyrant shoots three of the following magical eye rays at random (reroll duplicates), choosing one to three targets it can see within 120 feet of it." }
        ],
        legendaryActions: [
            { name: "Eye Ray", description: "The death tyrant uses one random eye ray." }
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
        environment: ["underdark"],
        role: "minion",
        tags: ["aberration", "beholder-kin"],
        traits: [
            { name: "Aggressive", description: "As a bonus action, the gazer can move up to its speed toward a hostile creature that it can see." },
            { name: "Mimicry", description: "The gazer can mimic simple sounds of speech it has heard, in any language. A creature that hears the sounds can tell they are imitations with a successful DC 10 Wisdom (Insight) check." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 1 piercing damage." },
            { name: "Eye Rays", description: "The gazer shoots two of the following magical eye rays at random (reroll duplicates), choosing one or two targets it can see within 60 feet of it: 1. Dazing Ray, 2. Fear Ray, 3. Frost Ray, 4. Telekinetic Ray." }
        ]
    },

    // ===== More NPCs =====
    "champion": {
        name: "Champion",
        source: "VGtM",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 18,
        acType: "plate",
        hp: 143,
        hitDice: "22d8+44",
        speed: { walk: 30 },
        abilityScores: { str: 20, dex: 15, con: 14, int: 10, wis: 14, cha: 12 },
        savingThrows: { str: 9, con: 6 },
        skills: { athletics: 9, intimidation: 5, perception: 6 },
        senses: [],
        languages: "any one language (usually Common)",
        cr: 9,
        environment: ["urban"],
        role: "soldier",
        tags: ["humanoid", "npc"],
        traits: [
            { name: "Indomitable (2/Day)", description: "The champion rerolls a failed saving throw." },
            { name: "Second Wind (Recharges after a Short or Long Rest)", description: "As a bonus action, the champion can regain 20 hit points." }
        ],
        actions: [
            { name: "Multiattack", description: "The champion makes three attacks with its greatsword or its shortbow." },
            { name: "Greatsword", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6+5) slashing damage, plus 7 (2d6) slashing damage if the champion has more than half of its total hit points remaining." },
            { name: "Shortbow", description: "Ranged Weapon Attack: +6 to hit, range 80/320 ft., one target. Hit: 5 (1d6+2) piercing damage, plus 7 (2d6) piercing damage if the champion has more than half of its total hit points remaining." }
        ]
    },
    "war-priest": {
        name: "War Priest",
        source: "VGtM",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 18,
        acType: "plate",
        hp: 117,
        hitDice: "18d8+36",
        speed: { walk: 30 },
        abilityScores: { str: 16, dex: 10, con: 14, int: 11, wis: 17, cha: 13 },
        savingThrows: { con: 6, wis: 7 },
        skills: { intimidation: 5, religion: 4 },
        senses: [],
        languages: "any two languages",
        cr: 9,
        environment: ["urban"],
        role: "leader",
        tags: ["humanoid", "npc", "spellcaster"],
        traits: [
            { name: "War God's Blessing (Recharges after a Short or Long Rest)", description: "The war priest can make one melee weapon attack as a bonus action." }
        ],
        actions: [
            { name: "Multiattack", description: "The war priest makes two melee attacks." },
            { name: "Maul", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 10 (2d6+3) bludgeoning damage." }
        ],
        spellcasting: {
            ability: "wis",
            dc: 15,
            attack: 7,
            spells: {
                cantrips: ["light", "mending", "sacred flame", "spare the dying"],
                "1st": { slots: 4, spells: ["divine favor", "guiding bolt", "healing word", "shield of faith"] },
                "2nd": { slots: 3, spells: ["lesser restoration", "magic weapon", "prayer of healing", "silence", "spiritual weapon"] },
                "3rd": { slots: 3, spells: ["beacon of hope", "crusader's mantle", "dispel magic", "revivify", "spirit guardians", "water walk"] },
                "4th": { slots: 3, spells: ["banishment", "freedom of movement", "guardian of faith", "stoneskin"] },
                "5th": { slots: 1, spells: ["flame strike", "mass cure wounds", "hold monster"] }
            }
        }
    },
    "warlord": {
        name: "Warlord",
        source: "VGtM",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 18,
        acType: "plate",
        hp: 229,
        hitDice: "27d8+108",
        speed: { walk: 30 },
        abilityScores: { str: 20, dex: 16, con: 18, int: 12, wis: 12, cha: 18 },
        savingThrows: { str: 9, dex: 7, con: 8 },
        skills: { athletics: 9, intimidation: 8, perception: 5, persuasion: 8 },
        senses: [],
        languages: "any two languages",
        cr: 12,
        environment: ["urban"],
        role: "leader",
        tags: ["humanoid", "npc"],
        traits: [
            { name: "Indomitable (3/Day)", description: "The warlord can reroll a failed saving throw." },
            { name: "Survivor", description: "The warlord regains 10 hit points at the start of its turn if it has at least 1 hit point but fewer hit points than half its hit point maximum." }
        ],
        actions: [
            { name: "Multiattack", description: "The warlord makes two weapon attacks." },
            { name: "Greatsword", description: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6+5) slashing damage." },
            { name: "Shortbow", description: "Ranged Weapon Attack: +7 to hit, range 80/320 ft., one target. Hit: 6 (1d6+3) piercing damage." }
        ],
        legendaryActions: [
            { name: "Weapon Attack", description: "The warlord makes a weapon attack." },
            { name: "Command Ally", description: "The warlord targets one ally it can see within 30 feet of it. If the target can see and hear the warlord, the target can make one weapon attack as a reaction and gains advantage on the attack roll." },
            { name: "Frighten Foe (Costs 2 Actions)", description: "The warlord targets one enemy it can see within 30 feet of it. If the target can see and hear it, the target must succeed on a DC 16 Wisdom saving throw or be frightened until the end of the warlord's next turn." }
        ],
        reactions: [
            { name: "Parry", description: "The warlord adds 4 to its AC against one melee attack that would hit it. To do so, the warlord must see the attacker and be wielding a melee weapon." }
        ]
    },
    "blackguard": {
        name: "Blackguard",
        source: "VGtM",
        size: "medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any non-good alignment",
        ac: 18,
        acType: "plate",
        hp: 153,
        hitDice: "18d8+72",
        speed: { walk: 30 },
        abilityScores: { str: 18, dex: 11, con: 18, int: 11, wis: 14, cha: 15 },
        savingThrows: { wis: 5, cha: 5 },
        skills: { athletics: 7, deception: 5, intimidation: 5 },
        senses: [],
        languages: "any one language (usually Common)",
        cr: 8,
        environment: ["urban"],
        role: "soldier",
        tags: ["humanoid", "npc", "spellcaster"],
        actions: [
            { name: "Multiattack", description: "The blackguard makes three attacks with its glaive or its shortbow." },
            { name: "Glaive", description: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 9 (1d10+4) slashing damage plus 9 (2d8) necrotic damage." },
            { name: "Shortbow", description: "Ranged Weapon Attack: +3 to hit, range 80/320 ft., one target. Hit: 5 (1d6+2) piercing damage." },
            { name: "Dreadful Aspect (Recharges after a Short or Long Rest)", description: "The blackguard exudes magical menace. Each enemy within 30 feet of the blackguard must succeed on a DC 13 Wisdom saving throw or be frightened for 1 minute. If a frightened target ends its turn more than 30 feet away from the blackguard, the target can repeat the saving throw, ending the effect on itself on a success." }
        ],
        spellcasting: {
            ability: "cha",
            dc: 13,
            attack: 5,
            spells: {
                "1st": { slots: 4, spells: ["command", "protection from evil and good", "thunderous smite"] },
                "2nd": { slots: 3, spells: ["branding smite", "find steed"] },
                "3rd": { slots: 2, spells: ["blinding smite", "dispel magic"] }
            }
        }
    },

    // ===== More Misc =====
    "girallon": {
        name: "Girallon",
        source: "VGtM",
        size: "large",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 13,
        hp: 59,
        hitDice: "7d10+21",
        speed: { walk: 40, climb: 40 },
        abilityScores: { str: 18, dex: 16, con: 16, int: 5, wis: 12, cha: 7 },
        skills: { perception: 3, stealth: 5 },
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 4,
        environment: ["forest"],
        role: "brute",
        tags: ["monstrosity"],
        traits: [
            { name: "Aggressive", description: "As a bonus action, the girallon can move up to its speed toward a hostile creature that it can see." },
            { name: "Keen Smell", description: "The girallon has advantage on Wisdom (Perception) checks that rely on smell." }
        ],
        actions: [
            { name: "Multiattack", description: "The girallon makes five attacks: one with its bite and four with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 7 (1d6+4) piercing damage." },
            { name: "Claw", description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 7 (1d6+4) slashing damage." }
        ]
    },
    "tlincalli": {
        name: "Tlincalli",
        source: "VGtM",
        size: "large",
        type: "monstrosity",
        alignment: "neutral evil",
        ac: 15,
        acType: "natural armor",
        hp: 85,
        hitDice: "10d10+30",
        speed: { walk: 40 },
        abilityScores: { str: 16, dex: 13, con: 16, int: 8, wis: 12, cha: 8 },
        skills: { perception: 4, stealth: 4, survival: 4 },
        senses: ["darkvision 60 ft."],
        languages: "Tlincalli",
        cr: 5,
        environment: ["desert"],
        role: "brute",
        tags: ["monstrosity"],
        actions: [
            { name: "Multiattack", description: "The tlincalli makes two attacks: one with its longsword or spiked chain, and one with its sting." },
            { name: "Longsword", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d8+3) slashing damage, or 8 (1d10+3) slashing damage if used with two hands." },
            { name: "Spiked Chain", description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 6 (1d6+3) piercing damage, and the target is grappled (escape DC 11) if it is a Large or smaller creature. Until this grapple ends, the target is restrained, and the tlincalli can't use the spiked chain against another target." },
            { name: "Sting", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 6 (1d6+3) piercing damage plus 14 (4d6) poison damage, and the target must succeed on a DC 14 Constitution saving throw or be poisoned for 1 minute. If it fails the saving throw by 5 or more, the target is also paralyzed while poisoned. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." }
        ]
    },
    "yuan-ti-abomination": {
        name: "Yuan-ti Abomination",
        source: "MM",
        size: "large",
        type: "monstrosity",
        subtype: "shapechanger, yuan-ti",
        alignment: "neutral evil",
        ac: 15,
        acType: "natural armor",
        hp: 127,
        hitDice: "15d10+45",
        speed: { walk: 40 },
        abilityScores: { str: 19, dex: 16, con: 17, int: 17, wis: 15, cha: 18 },
        skills: { perception: 5, stealth: 6 },
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "Abyssal, Common, Draconic",
        cr: 7,
        environment: ["forest", "swamp", "desert"],
        role: "skirmisher",
        tags: ["monstrosity", "yuan-ti", "shapechanger"],
        traits: [
            { name: "Shapechanger", description: "The yuan-ti can use its action to polymorph into a Large snake, or back into its true form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed." },
            { name: "Magic Resistance", description: "The yuan-ti has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack (Abomination Form Only)", description: "The yuan-ti makes two ranged attacks or three melee attacks, but can use its bite and constrict attacks only once each." },
            { name: "Bite", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 7 (1d6+4) piercing damage plus 10 (3d6) poison damage." },
            { name: "Constrict", description: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 11 (2d6+4) bludgeoning damage, and the target is grappled (escape DC 14). Until this grapple ends, the target is restrained, and the yuan-ti can't constrict another target." },
            { name: "Scimitar (Abomination Form Only)", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6+4) slashing damage." },
            { name: "Longbow (Abomination Form Only)", description: "Ranged Weapon Attack: +6 to hit, range 150/600 ft., one target. Hit: 12 (2d8+3) piercing damage plus 10 (3d6) poison damage." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 15,
            spells: {
                atWill: ["animal friendship (snakes only)"],
                "3/day": ["suggestion"],
                "1/day": ["fear"]
            }
        }
    }
};
