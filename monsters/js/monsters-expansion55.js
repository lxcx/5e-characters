// Expansion Pack 55 - More Missing Creatures
// Additional creatures from VGtM and MToF

const MONSTERS_EXPANSION55 = {
    // ===== From Volo's Guide =====
    "barghest": {
        name: "Barghest",
        source: "VGM",
        size: "large",
        type: "fiend",
        alignment: "neutral evil",
        ac: 17,
        acType: "natural armor",
        hp: 90,
        hitDice: "12d10+24",
        speed: { walk: 60 },
        abilityScores: { str: 19, dex: 15, con: 14, int: 13, wis: 12, cha: 14 },
        skills: { deception: 4, intimidation: 4, perception: 5, stealth: 4 },
        damageResistances: ["cold", "fire", "lightning; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["acid", "poison"],
        conditionImmunities: ["poisoned"],
        senses: ["blindsight 60 ft.", "darkvision 60 ft."],
        languages: "Abyssal, Common, Goblin, Infernal, telepathy 60 ft.",
        cr: 4,
        environment: ["underdark"],
        role: "brute",
        tags: ["fiend", "shapechanger"],
        traits: [
            { name: "Shapechanger", description: "The barghest can use its action to polymorph into a Small goblin or back into its true form. Other than its size and speed, its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies." },
            { name: "Fire Banishment", description: "When the barghest starts its turn engulfed in flames that are at least 10 feet high or wide, it must succeed on a DC 15 Charisma saving throw or be instantly banished to Gehenna." },
            { name: "Keen Smell", description: "The barghest has advantage on Wisdom (Perception) checks that rely on smell." },
            { name: "Soul Feeding", description: "The barghest can feed on the corpse of a humanoid that it killed within the past 10 minutes. This feeding takes at least 1 minute, and it destroys the corpse. For every 3 Hit Dice the humanoid had, the barghest gains 1 Hit Die, and its hit point maximum increases by 5. If the barghest kills and feeds on 10 humanoids this way, it transforms into a greater barghest." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8+4) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8+4) slashing damage." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 12,
            spells: {
                atWill: ["levitate", "minor illusion", "pass without trace"],
                "1/day each": ["charm person", "dimension door", "suggestion"]
            }
        }
    },
    "draegloth": {
        name: "Draegloth",
        source: "VGM",
        size: "large",
        type: "fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 15,
        acType: "natural armor",
        hp: 123,
        hitDice: "13d10+52",
        speed: { walk: 30 },
        abilityScores: { str: 20, dex: 15, con: 18, int: 13, wis: 11, cha: 11 },
        skills: { perception: 3, stealth: 5 },
        damageResistances: ["cold", "fire", "lightning"],
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 120 ft."],
        languages: "Abyssal, Elvish, Undercommon",
        cr: 7,
        environment: ["underdark"],
        role: "brute",
        tags: ["fiend", "demon", "drow"],
        traits: [
            { name: "Fey Ancestry", description: "The draegloth has advantage on saving throws against being charmed, and magic can't put it to sleep." }
        ],
        actions: [
            { name: "Multiattack", description: "The draegloth makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one creature. Hit: 16 (2d10+5) piercing damage." },
            { name: "Claws", description: "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 16 (2d10+5) slashing damage." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 11,
            spells: {
                atWill: ["darkness"],
                "1/day each": ["confusion", "dancing lights", "faerie fire"]
            }
        }
    },
    "firenewt-warrior": {
        name: "Firenewt Warrior",
        source: "VGM",
        size: "medium",
        type: "humanoid",
        subtype: "firenewt",
        alignment: "neutral evil",
        ac: 13,
        acType: "shield",
        hp: 22,
        hitDice: "4d8+4",
        speed: { walk: 30 },
        abilityScores: { str: 10, dex: 13, con: 12, int: 7, wis: 11, cha: 8 },
        damageImmunities: ["fire"],
        senses: [],
        languages: "Draconic, Ignan",
        cr: "1/2",
        environment: ["underdark", "mountain"],
        role: "soldier",
        tags: ["humanoid", "firenewt"],
        traits: [
            { name: "Amphibious", description: "The firenewt can breathe air and water." }
        ],
        actions: [
            { name: "Multiattack", description: "The firenewt makes two attacks with its scimitar." },
            { name: "Scimitar", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6+1) slashing damage." },
            { name: "Spit Fire (Recharge 6)", description: "The firenewt spits fire at a creature within 10 feet of it. The creature must make a DC 11 Dexterity saving throw, taking 9 (2d8) fire damage on a failed save, or half as much damage on a successful one." }
        ]
    },
    "firenewt-warlock-of-imix": {
        name: "Firenewt Warlock of Imix",
        source: "VGM",
        size: "medium",
        type: "humanoid",
        subtype: "firenewt",
        alignment: "neutral evil",
        ac: 10,
        hp: 33,
        hitDice: "6d8+6",
        speed: { walk: 30 },
        abilityScores: { str: 13, dex: 11, con: 12, int: 9, wis: 11, cha: 14 },
        damageImmunities: ["fire"],
        senses: ["darkvision 120 ft."],
        languages: "Draconic, Ignan",
        cr: 1,
        environment: ["underdark", "mountain"],
        role: "controller",
        tags: ["humanoid", "firenewt", "spellcaster"],
        traits: [
            { name: "Amphibious", description: "The firenewt can breathe air and water." },
            { name: "Imix's Blessing", description: "When the firenewt reduces an enemy to 0 hit points, the firenewt gains 5 temporary hit points." }
        ],
        actions: [
            { name: "Morningstar", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8+1) piercing damage." },
            { name: "Fire Ray", description: "Ranged Spell Attack: +4 to hit, range 120 ft., one target. Hit: 5 (1d10) fire damage." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 12,
            spells: {
                atWill: ["fire bolt", "guidance", "mage armor", "mage hand", "prestidigitation"]
            }
        }
    },
    "maw-demon": {
        name: "Maw Demon",
        source: "VGM",
        size: "medium",
        type: "fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 13,
        acType: "natural armor",
        hp: 33,
        hitDice: "6d8+6",
        speed: { walk: 30 },
        abilityScores: { str: 14, dex: 8, con: 13, int: 5, wis: 8, cha: 5 },
        damageResistances: ["cold", "fire", "lightning"],
        damageImmunities: ["poison"],
        conditionImmunities: ["charmed", "frightened", "poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "understands Abyssal but can't speak",
        cr: 1,
        environment: ["abyss"],
        role: "brute",
        tags: ["fiend", "demon"],
        traits: [
            { name: "Rampage", description: "When the maw demon reduces a creature to 0 hit points with a melee attack on its turn, the maw demon can take a bonus action to move up to half its speed and make a bite attack." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 11 (2d8+2) piercing damage." }
        ]
    },
    "shoosuva": {
        name: "Shoosuva",
        source: "VGM",
        size: "large",
        type: "fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 14,
        acType: "natural armor",
        hp: 110,
        hitDice: "13d10+39",
        speed: { walk: 40 },
        abilityScores: { str: 18, dex: 13, con: 17, int: 7, wis: 14, cha: 9 },
        savingThrows: { dex: 4, con: 6, wis: 5 },
        damageResistances: ["cold", "fire", "lightning; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["charmed", "frightened", "poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "Abyssal, Gnoll, telepathy 120 ft.",
        cr: 8,
        environment: ["abyss"],
        role: "brute",
        tags: ["fiend", "demon", "gnoll"],
        traits: [
            { name: "Rampage", description: "When the shoosuva reduces a creature to 0 hit points with a melee attack on its turn, it can take a bonus action to move up to half its speed and make a bite attack." }
        ],
        actions: [
            { name: "Multiattack", description: "The shoosuva makes two attacks: one with its bite and one with its tail stinger." },
            { name: "Bite", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 26 (4d10+4) piercing damage." },
            { name: "Tail Stinger", description: "Melee Weapon Attack: +7 to hit, reach 15 ft., one creature. Hit: 13 (2d8+4) piercing damage, and the target must succeed on a DC 14 Constitution saving throw or become poisoned. While poisoned, the target is also paralyzed. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." }
        ]
    },
    "slithering-tracker": {
        name: "Slithering Tracker",
        source: "VGM",
        size: "medium",
        type: "ooze",
        alignment: "chaotic evil",
        ac: 14,
        hp: 32,
        hitDice: "5d8+10",
        speed: { walk: 30, climb: 30, swim: 30 },
        abilityScores: { str: 16, dex: 19, con: 15, int: 10, wis: 14, cha: 11 },
        skills: { stealth: 8 },
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageVulnerabilities: ["fire", "radiant"],
        conditionImmunities: ["blinded", "deafened", "exhaustion", "grappled", "paralyzed", "petrified", "prone", "restrained", "unconscious"],
        senses: ["blindsight 120 ft."],
        languages: "understands languages it knew in its previous form but can't speak",
        cr: 3,
        environment: ["underdark", "urban"],
        role: "lurker",
        tags: ["ooze"],
        traits: [
            { name: "Ambusher", description: "In the first round of a combat, the tracker has advantage on attack rolls against any creature it surprised." },
            { name: "Damage Transfer", description: "While grappling a creature, the tracker takes only half the damage dealt to it, and the creature it is grappling takes the other half." },
            { name: "False Appearance", description: "While the tracker remains motionless, it is indistinguishable from a pool of oily water or wet stone." },
            { name: "Keen Tracker", description: "The tracker has advantage on Wisdom checks to track prey." },
            { name: "Liquid Form", description: "The tracker can enter a hostile creature's space and stop there. It can also move through a space as narrow as 1 inch wide without squeezing." },
            { name: "Spider Climb", description: "The tracker can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." },
            { name: "Watery Stealth", description: "While underwater, the tracker has advantage on Dexterity (Stealth) checks made to hide, and it can take the Hide action as a bonus action." }
        ],
        actions: [
            { name: "Slam", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10+3) bludgeoning damage." },
            { name: "Life Leech", description: "One Large or smaller creature that the tracker can see within 5 feet of it must succeed on a DC 13 Dexterity saving throw or be grappled (escape DC 13). Until this grapple ends, the target is restrained. In addition, at the start of each of the target's turns, the target loses 10 (3d6) hit points due to blood loss, and the tracker regains hit points equal to that amount. The tracker can grapple only one target at a time." }
        ]
    },
    "trapper": {
        name: "Trapper",
        source: "VGM",
        size: "large",
        type: "monstrosity",
        alignment: "unaligned",
        ac: 13,
        acType: "natural armor",
        hp: 85,
        hitDice: "10d10+30",
        speed: { walk: 10, climb: 10 },
        abilityScores: { str: 17, dex: 10, con: 17, int: 2, wis: 13, cha: 4 },
        skills: { stealth: 2 },
        senses: ["blindsight 30 ft.", "darkvision 60 ft."],
        languages: "—",
        cr: 3,
        environment: ["underdark"],
        role: "ambusher",
        tags: ["monstrosity"],
        traits: [
            { name: "False Appearance", description: "While the trapper is attached to a ceiling, floor, or wall and remains motionless, it is almost indistinguishable from an ordinary section of ceiling, floor, or wall. A creature that can see it and succeeds on a DC 20 Intelligence (Investigation) or Intelligence (Nature) check can discern its presence." },
            { name: "Spider Climb", description: "The trapper can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check." }
        ],
        actions: [
            { name: "Smother", description: "One Large or smaller creature within 5 feet of the trapper must succeed on a DC 14 Dexterity saving throw or be grappled (escape DC 14). Until the grapple ends, the target takes 17 (4d6+3) bludgeoning damage plus 3 (1d6) acid damage at the start of each of its turns. While grappled in this way, the target is restrained, blinded, and at risk of suffocating. The trapper can smother only one creature at a time." }
        ]
    },
    "xvart": {
        name: "Xvart",
        source: "VGM",
        size: "small",
        type: "humanoid",
        subtype: "xvart",
        alignment: "chaotic evil",
        ac: 13,
        acType: "leather armor",
        hp: 7,
        hitDice: "2d6",
        speed: { walk: 30 },
        abilityScores: { str: 8, dex: 14, con: 10, int: 8, wis: 7, cha: 7 },
        skills: { stealth: 4 },
        senses: ["darkvision 30 ft."],
        languages: "Abyssal",
        cr: "1/8",
        environment: ["underdark", "forest", "hill"],
        role: "minion",
        tags: ["humanoid", "xvart"],
        traits: [
            { name: "Low Cunning", description: "The xvart can take the Disengage action as a bonus action on each of its turns." },
            { name: "Overbearing Pack", description: "The xvart has advantage on Strength (Athletics) checks to shove a creature if at least one of the xvart's allies is within 5 feet of the target and the ally isn't incapacitated." },
            { name: "Raxivort's Tongue", description: "The xvart can communicate with ordinary bats and rats, as well as giant bats and giant rats." }
        ],
        actions: [
            { name: "Shortsword", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6+2) piercing damage." },
            { name: "Sling", description: "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 4 (1d4+2) bludgeoning damage." }
        ]
    }
};
