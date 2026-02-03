// Expansion Pack 19 - Push to 1200
// Final creatures

const MONSTERS_EXPANSION19 = {
    // ===== More Misc Creatures =====
    "gray-render": {
        name: "Gray Render",
        source: "MToF",
        size: "large",
        type: "monstrosity",
        alignment: "chaotic neutral",
        ac: 19,
        acType: "natural armor",
        hp: 189,
        hitDice: "18d10+90",
        speed: { walk: 30 },
        abilityScores: { str: 19, dex: 13, con: 20, int: 3, wis: 6, cha: 8 },
        savingThrows: { str: 8, con: 9 },
        skills: { perception: 2 },
        senses: ["darkvision 60 ft."],
        languages: "—",
        cr: 12,
        environment: ["forest", "grassland", "hill"],
        role: "brute",
        tags: ["monstrosity"],
        traits: [
            { name: "Bonded Creature", description: "The gray render chooses a creature it can see when it completes a long rest. Until it completes another long rest, that creature is the render's bonded creature. The render protects its bonded creature and tries to stay within 100 feet of it." }
        ],
        actions: [
            { name: "Multiattack", description: "The gray render makes three attacks: one with its bite and two with its claws." },
            { name: "Bite", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 17 (2d12+4) piercing damage. If the target is Medium or smaller, the target must succeed on a DC 16 Strength saving throw or be knocked prone." },
            { name: "Claw", description: "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 13 (2d8+4) slashing damage. If the target is prone, the gray render can make one bite attack against it as a bonus action." }
        ],
        reactions: [
            { name: "Protective Rampage", description: "When the gray render's bonded creature is hit by an attack while within 100 feet of it, the render can move up to half its speed and make two claw attacks against the attacker. To use this ability, the render must be able to see the attacker." }
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
        environment: ["shadowfell"],
        role: "brute",
        tags: ["monstrosity"],
        traits: [
            { name: "Resonant Connection", description: "If the banderhobb has even a tiny piece of a creature or an object in its possession, such as a bit of blood or a hair, it knows the most direct route to that creature or object if it is within 1 mile of the banderhobb." },
            { name: "Shadow Stealth", description: "While in dim light or darkness, the banderhobb can take the Hide action as a bonus action." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 22 (5d6+5) piercing damage, and the target is grappled (escape DC 15) if it is a Large or smaller creature. Until this grapple ends, the target is restrained, and the banderhobb can't use its bite attack or tongue attack on another target." },
            { name: "Tongue", description: "Melee Weapon Attack: +8 to hit, reach 15 ft., one creature. Hit: 10 (3d6) necrotic damage, and the target must make a DC 15 Strength saving throw. On a failed save, the target is pulled to a space within 5 feet of the banderhobb, which can use a bonus action to make a bite attack against the target." },
            { name: "Swallow", description: "The banderhobb makes a bite attack against a Medium or smaller creature it is grappling. If the attack hits, the target is also swallowed, and the grapple ends. While swallowed, the target is blinded and restrained, it has total cover against attacks and other effects outside the banderhobb, and it takes 10 (3d6) necrotic damage at the start of each of the banderhobb's turns. A creature reduced to 0 hit points in this way stops taking necrotic damage and becomes stable. The banderhobb can have only one creature swallowed at a time. While the banderhobb isn't incapacitated, it can regurgitate the creature at any time (no action required) in a space within 5 feet of it. The creature exits prone. If the banderhobb dies, it likewise regurgitates a swallowed creature." },
            { name: "Shadow Step", description: "The banderhobb magically teleports up to 30 feet to an unoccupied space of dim light or darkness that it can see." }
        ]
    },
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
        environment: ["underdark"],
        role: "lurker",
        tags: ["fiend"],
        traits: [
            { name: "Stunning Shriek", description: "Once per day, if the vargouille isn't incapacitated, it can emit a shriek. Each humanoid and beast within 30 feet of the vargouille and able to hear it must succeed on a DC 12 Wisdom saving throw or be frightened until the end of the vargouille's next turn. While frightened in this way, a target is stunned. If a target's saving throw is successful or the effect ends for it, the target is immune to the Stunning Shriek of all vargouilles for 1 hour." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6+2) piercing damage plus 10 (3d6) poison damage." },
            { name: "Kiss", description: "The vargouille kisses one incapacitated humanoid within 5 feet of it. The target must succeed on a DC 12 Charisma saving throw or become cursed. The cursed target loses 1 point of Charisma after each hour, as its head takes on fiendish aspects. The curse doesn't advance while the target is in sunlight or the area of a daylight spell; otherwise, when the cursed target's Charisma becomes 2, it dies, and its head tears from its body and becomes a new vargouille. Casting remove curse, greater restoration, or a similar spell on the target before the transformation is complete can end the curse. Doing so undoes the changes made to the target by the curse." }
        ]
    },
    "cranium-rat": {
        name: "Cranium Rat",
        source: "VGtM",
        size: "tiny",
        type: "beast",
        alignment: "lawful evil",
        ac: 12,
        hp: 2,
        hitDice: "1d4",
        speed: { walk: 30 },
        abilityScores: { str: 2, dex: 14, con: 10, int: 4, wis: 11, cha: 8 },
        senses: ["darkvision 30 ft."],
        languages: "telepathy 30 ft.",
        cr: 0,
        environment: ["underdark", "urban"],
        role: "minion",
        tags: ["beast"],
        traits: [
            { name: "Illumination", description: "As a bonus action, the cranium rat can shed dim light from its brain in a 5-foot radius or extinguish the light." },
            { name: "Telepathic Shroud", description: "The cranium rat is immune to any effect that would sense its emotions or read its thoughts, as well as to all divination spells." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 1 piercing damage." }
        ]
    },
    "swarm-of-cranium-rats": {
        name: "Swarm of Cranium Rats",
        source: "VGtM",
        size: "medium",
        type: "beast",
        subtype: "swarm of tiny beasts",
        alignment: "lawful evil",
        ac: 12,
        hp: 36,
        hitDice: "8d8",
        speed: { walk: 30 },
        abilityScores: { str: 9, dex: 14, con: 10, int: 15, wis: 11, cha: 14 },
        damageResistances: ["bludgeoning", "piercing", "slashing"],
        conditionImmunities: ["charmed", "frightened", "grappled", "paralyzed", "petrified", "prone", "restrained", "stunned"],
        senses: ["darkvision 30 ft."],
        languages: "telepathy 30 ft.",
        cr: 5,
        environment: ["underdark", "urban"],
        role: "controller",
        tags: ["beast", "swarm"],
        traits: [
            { name: "Illumination", description: "As a bonus action, the swarm can shed dim light from its brains in a 5-foot radius, increase the illumination to bright light in a 5- to 20-foot radius (and dim light for an additional number of feet equal to the chosen radius), or extinguish the light." },
            { name: "Swarm", description: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny rat. The swarm can't regain hit points or gain temporary hit points." },
            { name: "Telepathic Shroud", description: "The swarm is immune to any effect that would sense its emotions or read its thoughts, as well as to all divination spells." }
        ],
        actions: [
            { name: "Bites", description: "Melee Weapon Attack: +5 to hit, reach 0 ft., one target in the swarm's space. Hit: 14 (4d6) piercing damage, or 7 (2d6) piercing damage if the swarm has half of its hit points or fewer." }
        ],
        spellcasting: {
            innate: true,
            ability: "int",
            dc: 13,
            spells: {
                atWill: ["command", "comprehend languages", "detect thoughts"],
                "1/day each": ["confusion", "dominate monster"]
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
        damageResistances: ["bludgeoning, piercing"],
        conditionImmunities: ["charmed", "frightened"],
        senses: ["darkvision 60 ft."],
        languages: "Sylvan",
        cr: 5,
        environment: ["forest"],
        role: "soldier",
        tags: ["plant"],
        traits: [
            { name: "Magic Club", description: "In the wood woad's hands, its club is magical and deals 7 (3d4) extra damage (included in the attack)." },
            { name: "Plant Camouflage", description: "The wood woad has advantage on Dexterity (Stealth) checks it makes in any terrain with ample obscuring plant life." },
            { name: "Regeneration", description: "The wood woad regains 10 hit points at the start of its turn if it is in contact with the ground. If the wood woad takes fire damage, this trait doesn't function at the start of the wood woad's next turn. The wood woad dies only if it starts its turn with 0 hit points and doesn't regenerate." },
            { name: "Tree Stride", description: "Once on each of its turns, the wood woad can use 10 feet of its movement to step magically into one living tree within 5 feet of it and emerge from a second living tree within 60 feet of it that it can see, appearing in an unoccupied space within 5 feet of the second tree. Both trees must be Large or bigger." }
        ],
        actions: [
            { name: "Multiattack", description: "The wood woad makes two attacks with its club." },
            { name: "Club", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (4d4+4) bludgeoning damage." }
        ]
    },
    "thorny": {
        name: "Thorny",
        source: "ToA",
        size: "medium",
        type: "plant",
        alignment: "unaligned",
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
        environment: ["forest", "swamp"],
        role: "lurker",
        tags: ["plant"],
        traits: [
            { name: "False Appearance", description: "While the thorny remains motionless, it is indistinguishable from a thorny bush or shrub." },
            { name: "Thorn Body", description: "A creature that touches the thorny or hits it with a melee attack while within 5 feet of it takes 2 (1d4) piercing damage." }
        ],
        actions: [
            { name: "Bite", description: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 8 (2d6+1) piercing damage." }
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
        skills: { acrobatics: 8, perception: 5, sleight: 8, stealth: 8 },
        senses: ["darkvision 60 ft."],
        languages: "Common, Sylvan",
        cr: 1,
        environment: ["forest"],
        role: "skirmisher",
        tags: ["fey"],
        traits: [
            { name: "Blurred Movement", description: "Attack rolls against the quickling have disadvantage unless the quickling is incapacitated or restrained." },
            { name: "Evasion", description: "If the quickling is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails." }
        ],
        actions: [
            { name: "Multiattack", description: "The quickling makes three dagger attacks." },
            { name: "Dagger", description: "Melee or Ranged Weapon Attack: +8 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 8 (1d4+6) piercing damage." }
        ]
    },

    // ===== More Giants =====
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
        skills: { perception: 1 },
        conditionImmunities: ["frightened"],
        senses: [],
        languages: "Giant",
        cr: 6,
        environment: ["hill"],
        role: "brute",
        tags: ["giant"],
        traits: [
            { name: "Mouth of Chaos", description: "The giant can use a bonus action to make one bite attack against a creature it is grappling." }
        ],
        actions: [
            { name: "Multiattack", description: "The giant makes two fist attacks." },
            { name: "Bite", description: "Melee Weapon Attack: +8 to hit, reach 5 ft., one creature. Hit: 15 (3d6+5) piercing damage, and the giant regains hit points equal to the damage dealt." },
            { name: "Fist", description: "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 18 (3d8+5) bludgeoning damage, and if the target is a Large or smaller creature, it must succeed on a DC 16 Strength saving throw or be knocked prone." }
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
        environment: ["underdark", "mountain"],
        role: "controller",
        tags: ["giant"],
        traits: [
            { name: "Dreamwalker's Charm", description: "An enemy that starts its turn within 30 feet of the giant must make a DC 13 Charisma saving throw, provided that the giant isn't incapacitated. On a failed save, the creature is charmed by the giant. A creature charmed in this way can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Once it succeeds on the saving throw, the creature is immune to this giant's Dreamwalker's Charm for 24 hours." }
        ],
        actions: [
            { name: "Multiattack", description: "The giant makes two attacks with its greatclub." },
            { name: "Greatclub", description: "Melee Weapon Attack: +10 to hit, reach 15 ft., one target. Hit: 19 (3d8+6) bludgeoning damage." },
            { name: "Rock", description: "Ranged Weapon Attack: +10 to hit, range 60/240 ft., one target. Hit: 28 (4d10+6) bludgeoning damage. If the target is a creature, it must succeed on a DC 17 Strength saving throw or be knocked prone." },
            { name: "Petrifying Touch", description: "The giant touches one Medium or smaller creature within 10 feet of it that is charmed by it. The target must make a DC 17 Constitution saving throw. On a failed save, the target becomes petrified, and the giant can adhere the target to its stony body. Greater restoration spells and other magic that can undo petrification have no effect on a petrified creature adhered to the giant unless the giant is dead, in which case the magic works normally, freeing the petrified creature as well as ending the petrified condition on it." }
        ]
    }
};
