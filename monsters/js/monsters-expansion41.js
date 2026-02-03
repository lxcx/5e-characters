// Expansion Pack 41 - More Creatures
// Additional monsters

const MONSTERS_EXPANSION41 = {
    // ===== More Fey =====
    "dryad": {
        name: "Dryad",
        source: "MM",
        size: "medium",
        type: "fey",
        alignment: "neutral",
        ac: 11,
        acType: "16 with barkskin",
        hp: 22,
        hitDice: "5d8",
        speed: { walk: 30 },
        abilityScores: { str: 10, dex: 12, con: 11, int: 14, wis: 15, cha: 18 },
        skills: { perception: 4, stealth: 5 },
        senses: ["darkvision 60 ft."],
        languages: "Elvish, Sylvan",
        cr: 1,
        environment: ["forest"],
        role: "controller",
        tags: ["fey", "spellcaster"],
        traits: [
            { name: "Magic Resistance", description: "The dryad has advantage on saving throws against spells and other magical effects." },
            { name: "Speak with Beasts and Plants", description: "The dryad can communicate with beasts and plants as if they shared a language." },
            { name: "Tree Stride", description: "Once on her turn, the dryad can use 10 feet of her movement to step magically into one living tree within her reach and emerge from a second living tree within 60 feet of the first tree, appearing in an unoccupied space within 5 feet of the second tree. Both trees must be Large or bigger." }
        ],
        actions: [
            { name: "Club", description: "Melee Weapon Attack: +2 to hit (+6 to hit with shillelagh), reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage, or 8 (1d8+4) bludgeoning damage with shillelagh." },
            { name: "Fey Charm", description: "The dryad targets one humanoid or beast that she can see within 30 feet of her. If the target can see the dryad, it must succeed on a DC 14 Wisdom saving throw or be magically charmed. The charmed creature regards the dryad as a trusted friend to be heeded and protected. Although the target isn't under the dryad's control, it takes the dryad's requests or actions in the most favorable way it can." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 14,
            spells: {
                atWill: ["druidcraft"],
                "3/day each": ["entangle", "goodberry"],
                "1/day each": ["barkskin", "pass without trace", "shillelagh"]
            }
        }
    },
    "satyr": {
        name: "Satyr",
        source: "MM",
        size: "medium",
        type: "fey",
        alignment: "chaotic neutral",
        ac: 14,
        acType: "leather armor",
        hp: 31,
        hitDice: "7d8",
        speed: { walk: 40 },
        abilityScores: { str: 12, dex: 16, con: 11, int: 12, wis: 10, cha: 14 },
        skills: { perception: 2, performance: 6, stealth: 5 },
        senses: [],
        languages: "Common, Elvish, Sylvan",
        cr: "1/2",
        environment: ["forest"],
        role: "skirmisher",
        tags: ["fey"],
        traits: [
            { name: "Magic Resistance", description: "The satyr has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Ram", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4+1) bludgeoning damage." },
            { name: "Shortsword", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6+3) piercing damage." },
            { name: "Shortbow", description: "Ranged Weapon Attack: +5 to hit, range 80/320 ft., one target. Hit: 6 (1d6+3) piercing damage." }
        ]
    },
    "pixie": {
        name: "Pixie",
        source: "MM",
        size: "tiny",
        type: "fey",
        alignment: "neutral good",
        ac: 15,
        hp: 1,
        hitDice: "1d4-1",
        speed: { walk: 10, fly: 30 },
        abilityScores: { str: 2, dex: 20, con: 8, int: 10, wis: 14, cha: 15 },
        skills: { perception: 4, stealth: 7 },
        senses: [],
        languages: "Sylvan",
        cr: "1/4",
        environment: ["forest"],
        role: "controller",
        tags: ["fey", "spellcaster"],
        traits: [
            { name: "Magic Resistance", description: "The pixie has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Superior Invisibility", description: "The pixie magically turns invisible until its concentration ends (as if concentrating on a spell). Any equipment the pixie wears or carries is invisible with it." }
        ],
        spellcasting: {
            innate: true,
            ability: "cha",
            dc: 12,
            spells: {
                atWill: ["druidcraft"],
                "1/day each": ["confusion", "dancing lights", "detect evil and good", "detect thoughts", "dispel magic", "entangle", "fly", "phantasmal force", "polymorph", "sleep"]
            }
        }
    },
    "sprite": {
        name: "Sprite",
        source: "MM",
        size: "tiny",
        type: "fey",
        alignment: "neutral good",
        ac: 15,
        acType: "leather armor",
        hp: 2,
        hitDice: "1d4",
        speed: { walk: 10, fly: 40 },
        abilityScores: { str: 3, dex: 18, con: 10, int: 14, wis: 13, cha: 11 },
        skills: { perception: 3, stealth: 8 },
        senses: [],
        languages: "Common, Elvish, Sylvan",
        cr: "1/4",
        environment: ["forest"],
        role: "lurker",
        tags: ["fey"],
        actions: [
            { name: "Longsword", description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 1 slashing damage." },
            { name: "Shortbow", description: "Ranged Weapon Attack: +6 to hit, range 40/160 ft., one target. Hit: 1 piercing damage, and the target must succeed on a DC 10 Constitution saving throw or become poisoned for 1 minute. If its saving throw result is 5 or lower, the poisoned target falls unconscious for the same duration, or until it takes damage or another creature takes an action to shake it awake." },
            { name: "Heart Sight", description: "The sprite touches a creature and magically knows the creature's current emotional state. If the target fails a DC 10 Charisma saving throw, the sprite also knows the creature's alignment. Celestials, fiends, and undead automatically fail the saving throw." },
            { name: "Invisibility", description: "The sprite magically turns invisible until it attacks or casts a spell, or until its concentration ends (as if concentrating on a spell). Any equipment the sprite wears or carries is invisible with it." }
        ]
    },
    "blink-dog": {
        name: "Blink Dog",
        source: "MM",
        size: "medium",
        type: "fey",
        alignment: "lawful good",
        ac: 13,
        hp: 22,
        hitDice: "4d8+4",
        speed: { walk: 40 },
        abilityScores: { str: 12, dex: 17, con: 12, int: 10, wis: 13, cha: 11 },
        skills: { perception: 3, stealth: 5 },
        senses: [],
        languages: "Blink Dog, understands Sylvan but can't speak it",
        cr: "1/4",
        environment: ["forest"],
        role: "skirmisher",
        tags: ["fey"],
        traits: [
            { name: "Keen Hearing and Smell", description: "The dog has advantage on Wisdom (Perception) checks that rely on hearing or smell." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6+1) piercing damage." },
            { name: "Teleport (Recharge 4-6)", description: "The dog magically teleports, along with any equipment it is wearing or carrying, up to 40 feet to an unoccupied space it can see. Before or after teleporting, the dog can make one bite attack." }
        ]
    },

    // ===== More Aberrations =====
    "grick": {
        name: "Grick",
        source: "MM",
        size: "medium",
        type: "monstrosity",
        alignment: "neutral",
        ac: 14,
        acType: "natural armor",
        hp: 27,
        hitDice: "6d8",
        speed: { walk: 30, climb: 30 },
        abilityScores: { str: 14, dex: 14, con: 11, int: 3, wis: 14, cha: 5 },
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 2,
        environment: ["underdark"],
        role: "ambusher",
        tags: ["monstrosity"],
        traits: [
            { name: "Stone Camouflage", description: "The grick has advantage on Dexterity (Stealth) checks made to hide in rocky terrain." }
        ],
        actions: [
            { name: "Multiattack", description: "The grick makes one attack with its tentacles. If that attack hits, the grick can make one beak attack against the same target." },
            { name: "Tentacles", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6+2) slashing damage." },
            { name: "Beak", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6+2) piercing damage." }
        ]
    },
    "grick-alpha": {
        name: "Grick Alpha",
        source: "MM",
        size: "large",
        type: "monstrosity",
        alignment: "neutral",
        ac: 18,
        acType: "natural armor",
        hp: 75,
        hitDice: "10d10+20",
        speed: { walk: 30, climb: 30 },
        abilityScores: { str: 18, dex: 16, con: 15, int: 4, wis: 14, cha: 9 },
        damageResistances: ["bludgeoning, piercing, and slashing from nonmagical attacks"],
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 7,
        environment: ["underdark"],
        role: "ambusher",
        tags: ["monstrosity"],
        traits: [
            { name: "Stone Camouflage", description: "The grick has advantage on Dexterity (Stealth) checks made to hide in rocky terrain." }
        ],
        actions: [
            { name: "Multiattack", description: "The grick makes two attacks: one with its tail and one with its tentacles. If it hits with its tentacles, the grick can make one beak attack against the same target." },
            { name: "Tail", description: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 11 (2d6+4) bludgeoning damage." },
            { name: "Tentacles", description: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 22 (4d8+4) slashing damage." },
            { name: "Beak", description: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 13 (2d8+4) piercing damage." }
        ]
    },
    "otyugh": {
        name: "Otyugh",
        source: "MM",
        size: "large",
        type: "aberration",
        alignment: "neutral",
        ac: 14,
        acType: "natural armor",
        hp: 114,
        hitDice: "12d10+48",
        speed: { walk: 30 },
        abilityScores: { str: 16, dex: 11, con: 19, int: 6, wis: 13, cha: 6 },
        savingThrows: { con: 7 },
        senses: ["darkvision 120 ft."],
        languages: "Otyugh",
        cr: 5,
        environment: ["underdark", "urban"],
        role: "brute",
        tags: ["aberration"],
        traits: [
            { name: "Limited Telepathy", description: "The otyugh can magically transmit simple messages and images to any creature within 120 feet of it that can understand a language. This form of telepathy doesn't allow the receiving creature to telepathically respond." }
        ],
        actions: [
            { name: "Multiattack", description: "The otyugh makes three attacks: one with its bite and two with its tentacles." },
            { name: "Bite", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 12 (2d8+3) piercing damage. If the target is a creature, it must succeed on a DC 15 Constitution saving throw against disease or become poisoned until the disease is cured. Every 24 hours that elapse, the target must repeat the saving throw, reducing its hit point maximum by 5 (1d10) on a failure. The disease is cured on a success. The target dies if the disease reduces its hit point maximum to 0. This reduction to the target's hit point maximum lasts until the disease is cured." },
            { name: "Tentacle", description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 7 (1d8+3) bludgeoning damage plus 4 (1d8) piercing damage. If the target is Medium or smaller, it is grappled (escape DC 13) and restrained until the grapple ends. The otyugh has two tentacles, each of which can grapple one target." },
            { name: "Tentacle Slam", description: "The otyugh slams creatures grappled by it into each other or a solid surface. Each creature must succeed on a DC 14 Constitution saving throw or take 10 (2d6+3) bludgeoning damage and be stunned until the end of the otyugh's next turn. On a successful save, the target takes half the bludgeoning damage and isn't stunned." }
        ]
    },
    "chuul": {
        name: "Chuul",
        source: "MM",
        size: "large",
        type: "aberration",
        alignment: "chaotic evil",
        ac: 16,
        acType: "natural armor",
        hp: 93,
        hitDice: "11d10+33",
        speed: { walk: 30, swim: 30 },
        abilityScores: { str: 19, dex: 10, con: 16, int: 5, wis: 11, cha: 5 },
        skills: { perception: 4 },
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 60 ft."],
        languages: "understands Deep Speech but can't speak",
        cr: 4,
        environment: ["underwater", "swamp"],
        role: "brute",
        tags: ["aberration"],
        traits: [
            { name: "Amphibious", description: "The chuul can breathe air and water." },
            { name: "Sense Magic", description: "The chuul senses magic within 120 feet of it at will. This trait otherwise works like the detect magic spell but isn't itself magical." }
        ],
        actions: [
            { name: "Multiattack", description: "The chuul makes two pincer attacks. If the chuul is grappling a creature, the chuul can also use its tentacles once." },
            { name: "Pincer", description: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 11 (2d6+4) bludgeoning damage. The target is grappled (escape DC 14) if it is a Large or smaller creature and the chuul doesn't have two other creatures grappled." },
            { name: "Tentacles", description: "One creature grappled by the chuul must succeed on a DC 13 Constitution saving throw or be poisoned for 1 minute. Until this poison ends, the target is paralyzed. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." }
        ]
    }
};
