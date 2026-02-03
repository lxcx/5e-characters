// Expansion Pack 8 - Comprehensive Coverage
// More creatures from all sources

const MONSTERS_EXPANSION8 = {
    // ===== More Giants =====
    "ettin": {
        name: "Ettin",
        source: "MM",
        size: "large",
        type: "giant",
        alignment: "chaotic evil",
        ac: 12,
        acType: "natural armor",
        hp: 85,
        hitDice: "10d10+30",
        speed: { walk: 40 },
        abilityScores: { str: 21, dex: 8, con: 17, int: 6, wis: 10, cha: 8 },
        skills: { perception: 4 },
        senses: ["darkvision 60 ft."],
        languages: "Giant, Orc",
        cr: 4,
        environment: ["hill", "mountain"],
        role: "brute",
        tags: ["giant"],
        traits: [
            { name: "Two Heads", description: "The ettin has advantage on Wisdom (Perception) checks and on saving throws against being blinded, charmed, deafened, frightened, stunned, and knocked unconscious." },
            { name: "Wakeful", description: "When one of the ettin's heads is asleep, its other head is awake." }
        ],
        actions: [
            { name: "Multiattack", description: "The ettin makes two attacks: one with its battleaxe and one with its morningstar." },
            { name: "Battleaxe", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8+5) slashing damage." },
            { name: "Morningstar", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8+5) piercing damage." }
        ]
    },
    "cyclops": {
        name: "Cyclops",
        source: "MM",
        size: "huge",
        type: "giant",
        alignment: "chaotic neutral",
        ac: 14,
        acType: "natural armor",
        hp: 138,
        hitDice: "12d12+60",
        speed: { walk: 30 },
        abilityScores: { str: 22, dex: 11, con: 20, int: 8, wis: 6, cha: 10 },
        senses: [],
        languages: "Giant",
        cr: 6,
        environment: ["coastal", "desert", "grassland", "hill", "mountain"],
        role: "brute",
        tags: ["giant"],
        traits: [
            { name: "Poor Depth Perception", description: "The cyclops has disadvantage on any attack roll against a target more than 30 feet away." }
        ],
        actions: [
            { name: "Multiattack", description: "The cyclops makes two greatclub attacks." },
            { name: "Greatclub", description: "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 19 (3d8+6) bludgeoning damage." },
            { name: "Rock", description: "Ranged Weapon Attack: +9 to hit, range 30/120 ft., one target. Hit: 28 (4d10+6) bludgeoning damage." }
        ]
    },
    "fomorian": {
        name: "Fomorian",
        source: "MM",
        size: "huge",
        type: "giant",
        alignment: "chaotic evil",
        ac: 14,
        acType: "natural armor",
        hp: 149,
        hitDice: "13d12+65",
        speed: { walk: 30 },
        abilityScores: { str: 23, dex: 10, con: 20, int: 9, wis: 14, cha: 6 },
        skills: { perception: 8, stealth: 3 },
        senses: ["darkvision 120 ft."],
        languages: "Giant, Undercommon",
        cr: 8,
        environment: ["underdark"],
        role: "brute",
        tags: ["giant", "fey"],
        actions: [
            { name: "Multiattack", description: "The fomorian attacks twice with its greatclub or makes one greatclub attack and uses Evil Eye once." },
            { name: "Greatclub", description: "Melee Weapon Attack: +9 to hit, reach 15 ft., one target. Hit: 19 (3d8+6) bludgeoning damage." },
            { name: "Evil Eye", description: "The fomorian magically forces a creature it can see within 60 feet of it to make a DC 14 Charisma saving throw. The creature takes 27 (6d8) psychic damage on a failed save, or half as much damage on a successful one." },
            { name: "Curse of the Evil Eye (Recharges after a Short or Long Rest)", description: "With a stare, the fomorian uses Evil Eye, but on a failed save, the creature is also cursed with magical deformities. While cursed, the creature's speed is halved, and its hit point maximum is reduced by 3 (1d6) every 24 hours. The curse doesn't end until removed by the remove curse spell or similar magic." }
        ]
    },

    // ===== More Humanoids =====
    "lizardfolk": {
        name: "Lizardfolk",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "lizardfolk",
        alignment: "neutral",
        ac: 15,
        acType: "natural armor, shield",
        hp: 22,
        hitDice: "4d8+4",
        speed: { walk: 30, swim: 30 },
        abilityScores: { str: 15, dex: 10, con: 13, int: 7, wis: 12, cha: 7 },
        skills: { perception: 3, stealth: 4, survival: 5 },
        senses: [],
        languages: "Draconic",
        cr: 0.5,
        environment: ["swamp", "forest"],
        role: "soldier",
        tags: ["humanoid", "lizardfolk"],
        traits: [
            { name: "Hold Breath", description: "The lizardfolk can hold its breath for 15 minutes." }
        ],
        actions: [
            { name: "Multiattack", description: "The lizardfolk makes two melee attacks, each one with a different weapon." },
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6+2) piercing damage." },
            { name: "Heavy Club", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6+2) bludgeoning damage." },
            { name: "Javelin", description: "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 5 (1d6+2) piercing damage." },
            { name: "Spiked Shield", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6+2) piercing damage." }
        ]
    },
    "lizardfolk-shaman": {
        name: "Lizardfolk Shaman",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "lizardfolk",
        alignment: "neutral",
        ac: 13,
        acType: "natural armor",
        hp: 27,
        hitDice: "5d8+5",
        speed: { walk: 30, swim: 30 },
        abilityScores: { str: 15, dex: 10, con: 13, int: 10, wis: 15, cha: 8 },
        skills: { perception: 4, stealth: 4, survival: 6 },
        senses: [],
        languages: "Draconic",
        cr: 2,
        environment: ["swamp", "forest"],
        role: "leader",
        tags: ["humanoid", "lizardfolk", "spellcaster"],
        traits: [
            { name: "Hold Breath", description: "The lizardfolk can hold its breath for 15 minutes." }
        ],
        actions: [
            { name: "Multiattack (Lizardfolk Form Only)", description: "The lizardfolk makes two attacks: one with its bite and one with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6+2) piercing damage, or 7 (1d10+2) piercing damage in crocodile form." },
            { name: "Claws (Lizardfolk Form Only)", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4+2) slashing damage." },
            { name: "Change Shape (Recharges after a Short or Long Rest)", description: "The lizardfolk magically polymorphs into a crocodile, remaining in that form for up to 1 hour. It can revert to its true form as a bonus action." }
        ],
        spellcasting: {
            ability: "wis",
            dc: 12,
            attack: 4,
            spells: {
                cantrips: ["druidcraft", "produce flame", "thorn whip"],
                "1st": { slots: 4, spells: ["entangle", "fog cloud"] },
                "2nd": { slots: 3, spells: ["heat metal", "spike growth"] },
                "3rd": { slots: 2, spells: ["conjure animals (crocodiles only)", "plant growth"] }
            }
        }
    },
    "kenku": {
        name: "Kenku",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "kenku",
        alignment: "chaotic neutral",
        ac: 13,
        hp: 13,
        hitDice: "3d8",
        speed: { walk: 30 },
        abilityScores: { str: 10, dex: 16, con: 10, int: 11, wis: 10, cha: 10 },
        skills: { deception: 4, perception: 2, stealth: 5 },
        senses: [],
        languages: "understands Auran and Common but speaks only through the use of its Mimicry trait",
        cr: 0.25,
        environment: ["forest", "urban"],
        role: "skirmisher",
        tags: ["humanoid", "kenku"],
        traits: [
            { name: "Ambusher", description: "In the first round of a combat, the kenku has advantage on attack rolls against any creature it surprised." },
            { name: "Mimicry", description: "The kenku can mimic any sounds it has heard, including voices. A creature that hears the sounds can tell they are imitations with a successful DC 14 Wisdom (Insight) check." }
        ],
        actions: [
            { name: "Shortsword", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6+3) piercing damage." },
            { name: "Shortbow", description: "Ranged Weapon Attack: +5 to hit, range 80/320 ft., one target. Hit: 6 (1d6+3) piercing damage." }
        ]
    },
    "bullywug": {
        name: "Bullywug",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "bullywug",
        alignment: "neutral evil",
        ac: 15,
        acType: "hide armor, shield",
        hp: 11,
        hitDice: "2d8+2",
        speed: { walk: 20, swim: 40 },
        abilityScores: { str: 12, dex: 12, con: 13, int: 7, wis: 10, cha: 7 },
        skills: { stealth: 3 },
        senses: [],
        languages: "Bullywug",
        cr: 0.25,
        environment: ["swamp"],
        role: "minion",
        tags: ["humanoid", "bullywug", "aquatic"],
        traits: [
            { name: "Amphibious", description: "The bullywug can breathe air and water." },
            { name: "Speak with Frogs and Toads", description: "The bullywug can communicate simple concepts to frogs and toads when it speaks in Bullywug." },
            { name: "Swamp Camouflage", description: "The bullywug has advantage on Dexterity (Stealth) checks made to hide in swampy terrain." },
            { name: "Standing Leap", description: "The bullywug's long jump is up to 20 feet and its high jump is up to 10 feet, with or without a running start." }
        ],
        actions: [
            { name: "Multiattack", description: "The bullywug makes two melee attacks: one with its bite and one with its spear." },
            { name: "Bite", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4+1) bludgeoning damage." },
            { name: "Spear", description: "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d6+1) piercing damage, or 5 (1d8+1) piercing damage if used with two hands to make a melee attack." }
        ]
    },
    "thri-kreen": {
        name: "Thri-kreen",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "thri-kreen",
        alignment: "chaotic neutral",
        ac: 15,
        acType: "natural armor",
        hp: 33,
        hitDice: "6d8+6",
        speed: { walk: 40 },
        abilityScores: { str: 12, dex: 15, con: 13, int: 8, wis: 12, cha: 7 },
        skills: { perception: 3, stealth: 4, survival: 3 },
        senses: ["darkvision 60 ft."],
        languages: "Thri-kreen",
        cr: 1,
        environment: ["desert", "grassland"],
        role: "skirmisher",
        tags: ["humanoid", "thri-kreen"],
        traits: [
            { name: "Chameleon Carapace", description: "The thri-kreen can change the color of its carapace to match the color and texture of its surroundings. As a result, it has advantage on Dexterity (Stealth) checks made to hide." },
            { name: "Standing Leap", description: "The thri-kreen's long jump is up to 30 feet and its high jump is up to 15 feet, with or without a running start." }
        ],
        actions: [
            { name: "Multiattack", description: "The thri-kreen makes two attacks: one with its bite and one with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 4 (1d6+1) piercing damage, and the target must succeed on a DC 11 Constitution saving throw or be poisoned for 1 minute. If the saving throw fails by 5 or more, the target is also paralyzed while poisoned in this way." },
            { name: "Claws", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4+1) slashing damage." }
        ]
    },

    // ===== More Aberrations =====
    "nothic": {
        name: "Nothic",
        source: "MM",
        size: "medium",
        type: "aberration",
        alignment: "neutral evil",
        ac: 15,
        acType: "natural armor",
        hp: 45,
        hitDice: "6d8+18",
        speed: { walk: 30 },
        abilityScores: { str: 14, dex: 16, con: 16, int: 13, wis: 10, cha: 8 },
        skills: { arcana: 3, insight: 4, perception: 2, stealth: 5 },
        senses: ["truesight 120 ft."],
        languages: "Undercommon",
        cr: 2,
        environment: ["underdark"],
        role: "lurker",
        tags: ["aberration"],
        traits: [
            { name: "Keen Sight", description: "The nothic has advantage on Wisdom (Perception) checks that rely on sight." }
        ],
        actions: [
            { name: "Multiattack", description: "The nothic makes two claw attacks." },
            { name: "Claw", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d6+3) slashing damage." },
            { name: "Rotting Gaze", description: "The nothic targets one creature it can see within 30 feet of it. The target must succeed on a DC 12 Constitution saving throw against this magic or take 10 (3d6) necrotic damage." },
            { name: "Weird Insight", description: "The nothic targets one creature it can see within 30 feet of it. The target must contest its Charisma (Deception) check against the nothic's Wisdom (Insight) check. If the nothic wins, it magically learns one fact or secret about the target." }
        ]
    },
    "spectator": {
        name: "Spectator",
        source: "MM",
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
        environment: ["underdark"],
        role: "artillery",
        tags: ["aberration", "beholder-kin"],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 2 (1d6-1) piercing damage." },
            { name: "Eye Rays", description: "The spectator shoots up to two of the following magical eye rays at one or two creatures it can see within 90 feet of it. It can use each ray only once on a turn. 1. Confusion Ray, 2. Paralyzing Ray, 3. Fear Ray, 4. Wounding Ray." },
            { name: "Create Food and Water", description: "The spectator magically creates enough food and water to sustain itself for 24 hours." }
        ],
        reactions: [
            { name: "Spell Reflection", description: "If the spectator makes a successful saving throw against a spell, or a spell attack misses it, the spectator can choose another creature (including the spellcaster) it can see within 30 feet of it. The spell targets the chosen creature instead of the spectator." }
        ]
    },
    "grell": {
        name: "Grell",
        source: "MM",
        size: "medium",
        type: "aberration",
        alignment: "neutral evil",
        ac: 12,
        hp: 55,
        hitDice: "10d8+10",
        speed: { walk: 10, fly: 30 },
        abilityScores: { str: 15, dex: 14, con: 13, int: 12, wis: 11, cha: 9 },
        skills: { perception: 4, stealth: 6 },
        damageImmunities: ["lightning"],
        conditionImmunities: ["blinded", "prone"],
        senses: ["blindsight 60 ft. (blind beyond this radius)"],
        languages: "Grell",
        cr: 3,
        environment: ["underdark"],
        role: "lurker",
        tags: ["aberration"],
        actions: [
            { name: "Multiattack", description: "The grell makes two attacks: one with its tentacles and one with its beak." },
            { name: "Tentacles", description: "Melee Weapon Attack: +4 to hit, reach 10 ft., one creature. Hit: 7 (1d10+2) piercing damage, and the target must succeed on a DC 11 Constitution saving throw or be poisoned for 1 minute. The poisoned target is paralyzed, and it can repeat the saving throw at the end of each of its turns, ending the effect on a success. The target is also grappled (escape DC 15). If the target is Medium or smaller, it is also restrained until this grapple ends." },
            { name: "Beak", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (2d4+2) piercing damage." }
        ]
    },

    // ===== More Constructs =====
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
        damageVulnerabilities: ["fire"],
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "poisoned", "unconscious"],
        senses: ["darkvision 60 ft."],
        languages: "understands the languages of its creator but can't speak",
        cr: 1,
        environment: ["grassland", "forest"],
        role: "lurker",
        tags: ["construct"],
        traits: [
            { name: "False Appearance", description: "While the scarecrow remains motionless, it is indistinguishable from an ordinary, inanimate scarecrow." }
        ],
        actions: [
            { name: "Multiattack", description: "The scarecrow makes two claw attacks." },
            { name: "Claw", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4+1) slashing damage. If the target is a creature, it must succeed on a DC 11 Wisdom saving throw or be frightened until the end of the scarecrow's next turn." },
            { name: "Terrifying Glare", description: "The scarecrow targets one creature it can see within 30 feet of it. If the target can see the scarecrow, the target must succeed on a DC 11 Wisdom saving throw or be magically frightened until the end of the scarecrow's next turn. The frightened target is paralyzed." }
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
        environment: ["dungeon", "urban"],
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
    "shield-guardian": {
        name: "Shield Guardian",
        source: "MM",
        size: "large",
        type: "construct",
        alignment: "unaligned",
        ac: 17,
        acType: "natural armor",
        hp: 142,
        hitDice: "15d10+60",
        speed: { walk: 30 },
        abilityScores: { str: 18, dex: 8, con: 18, int: 7, wis: 10, cha: 3 },
        damageImmunities: ["poison"],
        conditionImmunities: ["charmed", "exhaustion", "frightened", "paralyzed", "poisoned"],
        senses: ["blindsight 10 ft.", "darkvision 60 ft."],
        languages: "understands commands given in any language but can't speak",
        cr: 7,
        environment: ["urban"],
        role: "soldier",
        tags: ["construct"],
        traits: [
            { name: "Bound", description: "The shield guardian is magically bound to an amulet. As long as the guardian and its amulet are on the same plane of existence, the amulet's wearer can telepathically call the guardian to travel to it, and the guardian knows the distance and direction to the amulet." },
            { name: "Regeneration", description: "The shield guardian regains 10 hit points at the start of its turn if it has at least 1 hit point." },
            { name: "Spell Storing", description: "A spellcaster who wears the shield guardian's amulet can cause the guardian to store one spell of 4th level or lower. The spell has no effect when cast. The guardian then casts the stored spell when commanded to do so by the wearer or when a situation arises that was predefined by the spellcaster." }
        ],
        actions: [
            { name: "Multiattack", description: "The guardian makes two fist attacks." },
            { name: "Fist", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6+4) bludgeoning damage." }
        ],
        reactions: [
            { name: "Shield", description: "When a creature makes an attack against the wearer of the guardian's amulet, the guardian grants a +2 bonus to the wearer's AC if the guardian is within 5 feet of the wearer." }
        ]
    },

    // ===== More Beasts =====
    "giant-spider": {
        name: "Giant Spider",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 14,
        acType: "natural armor",
        hp: 26,
        hitDice: "4d10+4",
        speed: { walk: 30, climb: 30 },
        abilityScores: { str: 14, dex: 16, con: 12, int: 2, wis: 11, cha: 4 },
        skills: { stealth: 7 },
        senses: ["blindsight 10 ft.", "darkvision 60 ft."],
        languages: "—",
        cr: 1,
        environment: ["forest", "underdark", "urban"],
        role: "lurker",
        tags: ["beast", "spider"],
        traits: [
            { name: "Spider Climb", description: "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." },
            { name: "Web Sense", description: "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web." },
            { name: "Web Walker", description: "The spider ignores movement restrictions caused by webbing." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 7 (1d8+3) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 9 (2d8) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way." },
            { name: "Web (Recharge 5-6)", description: "Ranged Weapon Attack: +5 to hit, range 30/60 ft., one creature. Hit: The target is restrained by webbing. As an action, the restrained target can make a DC 12 Strength check, bursting the webbing on a success. The webbing can also be attacked and destroyed (AC 10; hp 5; vulnerability to fire damage; immunity to bludgeoning, poison, and psychic damage)." }
        ]
    },
    "giant-scorpion": {
        name: "Giant Scorpion",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 15,
        acType: "natural armor",
        hp: 52,
        hitDice: "7d10+14",
        speed: { walk: 40 },
        abilityScores: { str: 15, dex: 13, con: 15, int: 1, wis: 9, cha: 3 },
        senses: ["blindsight 60 ft."],
        languages: "—",
        cr: 3,
        environment: ["desert"],
        role: "brute",
        tags: ["beast"],
        actions: [
            { name: "Multiattack", description: "The scorpion makes three attacks: two with its claws and one with its sting." },
            { name: "Claw", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8+2) bludgeoning damage, and the target is grappled (escape DC 12). The scorpion has two claws, each of which can grapple only one target." },
            { name: "Sting", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (1d10+2) piercing damage, and the target must make a DC 12 Constitution saving throw, taking 22 (4d10) poison damage on a failed save, or half as much damage on a successful one." }
        ]
    },
    "giant-centipede": {
        name: "Giant Centipede",
        source: "MM",
        size: "small",
        type: "beast",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 4,
        hitDice: "1d6+1",
        speed: { walk: 30, climb: 30 },
        abilityScores: { str: 5, dex: 14, con: 12, int: 1, wis: 7, cha: 3 },
        senses: ["blindsight 30 ft."],
        languages: "—",
        cr: 0.25,
        environment: ["forest", "underdark"],
        role: "minion",
        tags: ["beast"],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4+2) piercing damage, and the target must succeed on a DC 11 Constitution saving throw or take 10 (3d6) poison damage. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way." }
        ]
    },
    "giant-wasp": {
        name: "Giant Wasp",
        source: "MM",
        size: "medium",
        type: "beast",
        alignment: "unaligned",
        ac: 12,
        hp: 13,
        hitDice: "3d8",
        speed: { walk: 10, fly: 50 },
        abilityScores: { str: 10, dex: 14, con: 10, int: 1, wis: 10, cha: 3 },
        senses: [],
        languages: "—",
        cr: 0.5,
        environment: ["forest", "grassland", "urban"],
        role: "skirmisher",
        tags: ["beast"],
        actions: [
            { name: "Sting", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6+2) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way." }
        ]
    },
    "giant-bat": {
        name: "Giant Bat",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 13,
        hp: 22,
        hitDice: "4d10",
        speed: { walk: 10, fly: 60 },
        abilityScores: { str: 15, dex: 16, con: 11, int: 2, wis: 12, cha: 6 },
        senses: ["blindsight 60 ft."],
        languages: "—",
        cr: 0.25,
        environment: ["forest", "underdark"],
        role: "skirmisher",
        tags: ["beast"],
        traits: [
            { name: "Echolocation", description: "The bat can't use its blindsight while deafened." },
            { name: "Keen Hearing", description: "The bat has advantage on Wisdom (Perception) checks that rely on hearing." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6+2) piercing damage." }
        ]
    },
    "giant-frog": {
        name: "Giant Frog",
        source: "MM",
        size: "medium",
        type: "beast",
        alignment: "unaligned",
        ac: 11,
        hp: 18,
        hitDice: "4d8",
        speed: { walk: 30, swim: 30 },
        abilityScores: { str: 12, dex: 13, con: 11, int: 2, wis: 10, cha: 3 },
        skills: { perception: 2, stealth: 3 },
        senses: ["darkvision 30 ft."],
        languages: "—",
        cr: 0.25,
        environment: ["forest", "swamp"],
        role: "lurker",
        tags: ["beast", "aquatic"],
        traits: [
            { name: "Amphibious", description: "The frog can breathe air and water." },
            { name: "Standing Leap", description: "The frog's long jump is up to 20 feet and its high jump is up to 10 feet, with or without a running start." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6+1) piercing damage, and the target is grappled (escape DC 11). Until this grapple ends, the target is restrained, and the frog can't bite another target." },
            { name: "Swallow", description: "The frog makes one bite attack against a Small or smaller target it is grappling. If the attack hits, the target is swallowed, and the grapple ends. The swallowed target is blinded and restrained, it has total cover against attacks and other effects outside the frog, and it takes 5 (2d4) acid damage at the start of each of the frog's turns. The frog can have only one target swallowed at a time." }
        ]
    },
    "giant-toad": {
        name: "Giant Toad",
        source: "MM",
        size: "large",
        type: "beast",
        alignment: "unaligned",
        ac: 11,
        hp: 39,
        hitDice: "6d10+6",
        speed: { walk: 20, swim: 40 },
        abilityScores: { str: 15, dex: 13, con: 13, int: 2, wis: 10, cha: 3 },
        senses: ["darkvision 30 ft."],
        languages: "—",
        cr: 1,
        environment: ["coastal", "desert", "forest", "swamp", "underdark"],
        role: "brute",
        tags: ["beast", "aquatic"],
        traits: [
            { name: "Amphibious", description: "The toad can breathe air and water." },
            { name: "Standing Leap", description: "The toad's long jump is up to 20 feet and its high jump is up to 10 feet, with or without a running start." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10+2) piercing damage plus 5 (1d10) poison damage, and the target is grappled (escape DC 13). Until this grapple ends, the target is restrained, and the toad can't bite another target." },
            { name: "Swallow", description: "The toad makes one bite attack against a Medium or smaller target it is grappling. If the attack hits, the target is swallowed, and the grapple ends. The swallowed target is blinded and restrained, it has total cover against attacks and other effects outside the toad, and it takes 10 (3d6) acid damage at the start of each of the toad's turns." }
        ]
    }
};
