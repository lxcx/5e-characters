// Expansion Pack 29 - More iconic creatures
// Comprehensive additions

const MONSTERS_EXPANSION29 = {
    // ===== More Iconic D&D Creatures =====
    
    
    
    
    

    // ===== More Misc =====
    
    "succubus-incubus": {
        name: "Succubus/Incubus",
        source: "MM",
        size: "medium",
        type: "fiend",
        subtype: "shapechanger",
        alignment: "neutral evil",
        ac: 15,
        acType: "natural armor",
        hp: 66,
        hitDice: "12d8+12",
        speed: { walk: 30, fly: 60 },
        abilityScores: { str: 8, dex: 17, con: 13, int: 15, wis: 12, cha: 20 },
        skills: { deception: 9, insight: 5, perception: 5, persuasion: 9, stealth: 7 },
        damageResistances: ["cold", "fire", "lightning", "poison; bludgeoning, piercing, and slashing from nonmagical attacks"],
        senses: ["darkvision 60 ft."],
        languages: "Abyssal, Common, Infernal, telepathy 60 ft.",
        cr: 4,
        environment: ["urban"],
        role: "lurker",
        tags: ["fiend", "shapechanger"],
        traits: [
            { name: "Telepathic Bond", description: "The fiend ignores the range restriction on its telepathy when communicating with a creature it has charmed. The two don't even need to be on the same plane of existence." },
            { name: "Shapechanger", description: "The fiend can use its action to polymorph into a Small or Medium humanoid, or back into its true form. Without wings, the fiend loses its flying speed. Other than its size and speed, its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies." }
        ],
        actions: [
            { name: "Claw (Fiend Form Only)", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6+3) slashing damage." },
            { name: "Charm", description: "One humanoid the fiend can see within 30 feet of it must succeed on a DC 15 Wisdom saving throw or be magically charmed for 1 day. The charmed target obeys the fiend's verbal or telepathic commands. If the target suffers any harm or receives a suicidal command, it can repeat the saving throw, ending the effect on a success. If the target successfully saves against the effect, or if the effect on it ends, the target is immune to this fiend's Charm for the next 24 hours. The fiend can have only one target charmed at a time. If it charms another, the effect on the previous target ends." },
            { name: "Draining Kiss", description: "The fiend kisses a creature charmed by it or a willing creature. The target must make a DC 15 Constitution saving throw against this magic, taking 32 (5d10+5) psychic damage on a failed save, or half as much damage on a successful one. The target's hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0." },
            { name: "Etherealness", description: "The fiend magically enters the Ethereal Plane from the Material Plane, or vice versa." }
        ]
    }
};
