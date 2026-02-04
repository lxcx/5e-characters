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
    
    
    

    // ===== More Giants =====
    
    
};
