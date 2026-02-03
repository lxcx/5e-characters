// Expansion Pack 47 - More Creatures
// Additional monsters

const MONSTERS_EXPANSION47 = {
    // ===== More Humanoids =====
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
        cr: "1/4",
        environment: ["urban", "forest"],
        role: "lurker",
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
        languages: "Thri-kreen, telepathy 60 ft.",
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
            { name: "Bite", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 4 (1d6+1) piercing damage, and the target must succeed on a DC 11 Constitution saving throw or be poisoned for 1 minute. If the saving throw fails by 5 or more, the target is also paralyzed while poisoned in this way. The poisoned target can repeat the saving throw on each of its turns, ending the effect on itself on a success." },
            { name: "Claws", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4+1) slashing damage." }
        ]
    },
    "aarakocra": {
        name: "Aarakocra",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "aarakocra",
        alignment: "neutral good",
        ac: 12,
        hp: 13,
        hitDice: "3d8",
        speed: { walk: 20, fly: 50 },
        abilityScores: { str: 10, dex: 14, con: 10, int: 11, wis: 12, cha: 11 },
        skills: { perception: 5 },
        senses: [],
        languages: "Auran, Aarakocra",
        cr: "1/4",
        environment: ["mountain"],
        role: "skirmisher",
        tags: ["humanoid", "aarakocra"],
        traits: [
            { name: "Dive Attack", description: "If the aarakocra is flying and dives at least 30 feet straight toward a target and then hits it with a melee weapon attack, the attack deals an extra 3 (1d6) damage to the target." }
        ],
        actions: [
            { name: "Talon", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4+2) slashing damage." },
            { name: "Javelin", description: "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 5 (1d6+2) piercing damage." },
            { name: "Summon Air Elemental", description: "Five aarakocra within 30 feet of each other can magically summon an air elemental. Each of the five must use its action and movement on three consecutive turns to perform an aerial dance and must maintain concentration while doing so (as if concentrating on a spell). When all five have finished their third turn of the dance, the elemental appears in an unoccupied space within 60 feet of them. It is friendly toward them and obeys their spoken commands. It remains for 1 hour, until it or all its summoners die, or until any of its summoners dismisses it as a bonus action. A summoner can't perform the dance again until it finishes a short rest. When the elemental returns to the Elemental Plane of Air, any aarakocra within 5 feet of it can return with it." }
        ]
    },
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
        cr: "1/2",
        environment: ["swamp"],
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
        environment: ["swamp"],
        role: "controller",
        tags: ["humanoid", "lizardfolk", "spellcaster"],
        traits: [
            { name: "Hold Breath", description: "The lizardfolk can hold its breath for 15 minutes." }
        ],
        actions: [
            { name: "Multiattack (Lizardfolk Form Only)", description: "The lizardfolk makes two attacks: one with its bite and one with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6+2) piercing damage, or 7 (1d10+2) piercing damage in crocodile form. If the lizardfolk is in crocodile form and the target is a Large or smaller creature, the target is grappled (escape DC 12). Until this grapple ends, the target is restrained, and the lizardfolk can't bite another target. If the lizardfolk reverts to its true form, the grapple ends." },
            { name: "Claws (Lizardfolk Form Only)", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4+2) slashing damage." },
            { name: "Change Shape (Recharges after a Short or Long Rest)", description: "The lizardfolk magically polymorphs into a crocodile, remaining in that form for up to 1 hour. It can revert to its true form as a bonus action. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies." }
        ],
        spellcasting: {
            ability: "wis",
            dc: 12,
            attack: 4,
            spells: {
                cantrips: ["druidcraft", "produce flame", "thorn whip"],
                "1st": { slots: 4, spells: ["entangle", "fog cloud"] },
                "2nd": { slots: 3, spells: ["heat metal", "spike growth"] },
                "3rd": { slots: 2, spells: ["conjure animals (reptiles only)", "plant growth"] }
            }
        }
    },
    "sahuagin": {
        name: "Sahuagin",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "sahuagin",
        alignment: "lawful evil",
        ac: 12,
        acType: "natural armor",
        hp: 22,
        hitDice: "4d8+4",
        speed: { walk: 30, swim: 40 },
        abilityScores: { str: 13, dex: 11, con: 12, int: 12, wis: 13, cha: 9 },
        skills: { perception: 5 },
        senses: ["darkvision 120 ft."],
        languages: "Sahuagin",
        cr: "1/2",
        environment: ["underwater", "coastal"],
        role: "soldier",
        tags: ["humanoid", "sahuagin"],
        traits: [
            { name: "Blood Frenzy", description: "The sahuagin has advantage on melee attack rolls against any creature that doesn't have all its hit points." },
            { name: "Limited Amphibiousness", description: "The sahuagin can breathe air and water, but it needs to be submerged at least once every 4 hours to avoid suffocating." },
            { name: "Shark Telepathy", description: "The sahuagin can magically command any shark within 120 feet of it, using a limited telepathy." }
        ],
        actions: [
            { name: "Multiattack", description: "The sahuagin makes two melee attacks: one with its bite and one with its claws or spear." },
            { name: "Bite", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4+1) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4+1) slashing damage." },
            { name: "Spear", description: "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d6+1) piercing damage, or 5 (1d8+1) piercing damage if used with two hands to make a melee attack." }
        ]
    },
    "sahuagin-priestess": {
        name: "Sahuagin Priestess",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "sahuagin",
        alignment: "lawful evil",
        ac: 12,
        acType: "natural armor",
        hp: 33,
        hitDice: "6d8+6",
        speed: { walk: 30, swim: 40 },
        abilityScores: { str: 13, dex: 11, con: 12, int: 12, wis: 14, cha: 13 },
        skills: { perception: 6, religion: 3 },
        senses: ["darkvision 120 ft."],
        languages: "Sahuagin",
        cr: 2,
        environment: ["underwater", "coastal"],
        role: "controller",
        tags: ["humanoid", "sahuagin", "spellcaster"],
        traits: [
            { name: "Blood Frenzy", description: "The sahuagin has advantage on melee attack rolls against any creature that doesn't have all its hit points." },
            { name: "Limited Amphibiousness", description: "The sahuagin can breathe air and water, but it needs to be submerged at least once every 4 hours to avoid suffocating." },
            { name: "Shark Telepathy", description: "The sahuagin can magically command any shark within 120 feet of it, using a limited telepathy." }
        ],
        actions: [
            { name: "Multiattack", description: "The sahuagin makes two melee attacks: one with its bite and one with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4+1) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4+1) slashing damage." }
        ],
        spellcasting: {
            ability: "wis",
            dc: 12,
            attack: 4,
            spells: {
                cantrips: ["guidance", "thaumaturgy"],
                "1st": { slots: 4, spells: ["bless", "detect magic", "guiding bolt"] },
                "2nd": { slots: 3, spells: ["hold person", "spiritual weapon (trident)"] },
                "3rd": { slots: 2, spells: ["mass healing word", "tongues"] }
            }
        }
    },
    "sahuagin-baron": {
        name: "Sahuagin Baron",
        source: "MM",
        size: "large",
        type: "humanoid",
        subtype: "sahuagin",
        alignment: "lawful evil",
        ac: 16,
        acType: "breastplate",
        hp: 76,
        hitDice: "9d10+27",
        speed: { walk: 30, swim: 50 },
        abilityScores: { str: 19, dex: 15, con: 16, int: 14, wis: 13, cha: 17 },
        savingThrows: { dex: 5, con: 6, int: 5, wis: 4 },
        skills: { perception: 7 },
        senses: ["darkvision 120 ft."],
        languages: "Sahuagin",
        cr: 5,
        environment: ["underwater", "coastal"],
        role: "leader",
        tags: ["humanoid", "sahuagin"],
        traits: [
            { name: "Blood Frenzy", description: "The sahuagin has advantage on melee attack rolls against any creature that doesn't have all its hit points." },
            { name: "Limited Amphibiousness", description: "The sahuagin can breathe air and water, but it needs to be submerged at least once every 4 hours to avoid suffocating." },
            { name: "Shark Telepathy", description: "The sahuagin can magically command any shark within 120 feet of it, using a limited telepathy." }
        ],
        actions: [
            { name: "Multiattack", description: "The sahuagin makes three attacks: one with its bite and two with its claws or trident." },
            { name: "Bite", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (2d4+4) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6+4) slashing damage." },
            { name: "Trident", description: "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 11 (2d6+4) piercing damage, or 13 (2d8+4) piercing damage if used with two hands to make a melee attack." }
        ]
    }
};
