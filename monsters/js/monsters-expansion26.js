// Expansion Pack 26 - More Creatures
// Final comprehensive additions

const MONSTERS_EXPANSION26 = {
    // ===== More Lycanthropes =====
    
    
    
    
    

    // ===== More Misc =====
    "adult-oblex": {
        name: "Adult Oblex",
        source: "MToF",
        size: "medium",
        type: "ooze",
        alignment: "lawful evil",
        ac: 14,
        hp: 75,
        hitDice: "10d8+30",
        speed: { walk: 20 },
        abilityScores: { str: 8, dex: 19, con: 16, int: 19, wis: 12, cha: 15 },
        savingThrows: { int: 7, cha: 5 },
        skills: { deception: 5, perception: 4 },
        conditionImmunities: ["blinded", "charmed", "deafened", "exhaustion", "prone"],
        senses: ["blindsight 60 ft."],
        languages: "Common plus two more languages",
        cr: 5,
        environment: ["underdark", "urban"],
        role: "lurker",
        tags: ["ooze"],
        traits: [
            { name: "Amorphous", description: "The oblex can move through a space as narrow as 1 inch wide without squeezing." },
            { name: "Aversion to Fire", description: "If the oblex takes fire damage, it has disadvantage on attack rolls and ability checks until the end of its next turn." },
            { name: "Sulfurous Impersonation", description: "As a bonus action, the oblex can extrude a piece of itself that assumes the appearance of one Medium or smaller creature whose memories it has stolen. This simulacrum appears, feels, and sounds exactly like the creature it impersonates, though it smells faintly of sulfur. The oblex can impersonate 1d4+1 different creatures, each one tethered to its body by a strand of slime that can extend up to 120 feet away. For all practical purposes, the simulacrum is the oblex, meaning the oblex occupies its space and the simulacrum's space simultaneously. The slimy tether is immune to damage, but it is severed if there is no opening at least 1 inch wide between the oblex's main body and the simulacrum. The simulacrum disappears if the tether is severed." }
        ],
        actions: [
            { name: "Multiattack", description: "The oblex makes one pseudopod attack and uses Eat Memories." },
            { name: "Pseudopod", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d6+4) bludgeoning damage plus 5 (2d4) psychic damage." },
            { name: "Eat Memories", description: "The oblex targets one creature it can see within 5 feet of it. The target must succeed on a DC 15 Wisdom saving throw or take 18 (4d8) psychic damage and become memory drained until it finishes a short or long rest or until it benefits from the greater restoration or heal spell. Constructs, oozes, plants, and undead succeed on the save automatically. While memory drained, the target must roll a d4 and subtract the number rolled from any ability check or attack roll it makes. Each time the target is memory drained beyond the first, the die size increases by one: the d4 becomes a d6, the d6 becomes a d8, and so on until the die becomes a d20, at which point the target becomes unconscious for 1 hour. The effect then ends. When an oblex causes a target to become memory drained, the oblex learns all the languages the target knows and gains all its proficiencies, except for any saving throw proficiencies." }
        ],
        spellcasting: {
            innate: true,
            ability: "int",
            dc: 15,
            spells: {
                "3/day each": ["charm person (as 5th-level spell)", "color spray", "detect thoughts", "hold person (as 3rd-level spell)"]
            }
        }
    },
    "elder-oblex": {
        name: "Elder Oblex",
        source: "MToF",
        size: "huge",
        type: "ooze",
        alignment: "lawful evil",
        ac: 16,
        hp: 115,
        hitDice: "10d12+50",
        speed: { walk: 20 },
        abilityScores: { str: 15, dex: 16, con: 21, int: 22, wis: 13, cha: 18 },
        savingThrows: { int: 10, cha: 8 },
        skills: { arcana: 10, deception: 8, history: 10, nature: 10, perception: 5, religion: 10 },
        conditionImmunities: ["blinded", "charmed", "deafened", "exhaustion", "prone"],
        senses: ["blindsight 60 ft."],
        languages: "Common plus six more languages",
        cr: 10,
        environment: ["underdark", "urban"],
        role: "controller",
        tags: ["ooze"],
        traits: [
            { name: "Amorphous", description: "The oblex can move through a space as narrow as 1 inch wide without squeezing." },
            { name: "Aversion to Fire", description: "If the oblex takes fire damage, it has disadvantage on attack rolls and ability checks until the end of its next turn." },
            { name: "Sulfurous Impersonation", description: "As a bonus action, the oblex can extrude a piece of itself that assumes the appearance of one Medium or smaller creature whose memories it has stolen. This simulacrum appears, feels, and sounds exactly like the creature it impersonates, though it smells faintly of sulfur. The oblex can impersonate 2d6+1 different creatures, each one tethered to its body by a strand of slime that can extend up to 120 feet away." }
        ],
        actions: [
            { name: "Multiattack", description: "The elder oblex makes two pseudopod attacks and uses Eat Memories." },
            { name: "Pseudopod", description: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 17 (4d6+3) bludgeoning damage plus 7 (2d6) psychic damage." },
            { name: "Eat Memories", description: "The oblex targets one creature it can see within 5 feet of it. The target must succeed on a DC 18 Wisdom saving throw or take 44 (8d10) psychic damage and become memory drained until it finishes a short or long rest or until it benefits from the greater restoration or heal spell." }
        ],
        spellcasting: {
            innate: true,
            ability: "int",
            dc: 18,
            spells: {
                atWill: ["charm person (as 5th-level spell)", "detect thoughts"],
                "3/day each": ["dimension door", "dominate person", "fear", "hallucinatory terrain", "hold person", "hypnotic pattern", "telekinesis"]
            }
        }
    }
};
