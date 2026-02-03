// Expansion Pack 26 - More Creatures
// Final comprehensive additions

const MONSTERS_EXPANSION26 = {
    // ===== More Lycanthropes =====
    "werewolf": {
        name: "Werewolf",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "human, shapechanger",
        alignment: "chaotic evil",
        ac: 11,
        acType: "12 in wolf/hybrid form from natural armor",
        hp: 58,
        hitDice: "9d8+18",
        speed: { walk: 30 },
        abilityScores: { str: 15, dex: 13, con: 14, int: 10, wis: 11, cha: 10 },
        skills: { perception: 4, stealth: 3 },
        damageImmunities: ["bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        senses: [],
        languages: "Common (can't speak in wolf form)",
        cr: 3,
        environment: ["forest", "hill"],
        role: "brute",
        tags: ["humanoid", "shapechanger"],
        traits: [
            { name: "Shapechanger", description: "The werewolf can use its action to polymorph into a wolf-humanoid hybrid or into a wolf, or back into its true form, which is humanoid. Its statistics, other than its AC, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies." },
            { name: "Keen Hearing and Smell", description: "The werewolf has advantage on Wisdom (Perception) checks that rely on hearing or smell." }
        ],
        actions: [
            { name: "Multiattack (Humanoid or Hybrid Form Only)", description: "The werewolf makes two attacks: two with its spear (humanoid form) or one with its bite and one with its claws (hybrid form)." },
            { name: "Bite (Wolf or Hybrid Form Only)", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8+2) piercing damage. If the target is a humanoid, it must succeed on a DC 12 Constitution saving throw or be cursed with werewolf lycanthropy." },
            { name: "Claws (Hybrid Form Only)", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (2d4+2) slashing damage." },
            { name: "Spear (Humanoid Form Only)", description: "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one creature. Hit: 5 (1d6+2) piercing damage, or 6 (1d8+2) piercing damage if used with two hands to make a melee attack." }
        ]
    },
    "wererat": {
        name: "Wererat",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "human, shapechanger",
        alignment: "lawful evil",
        ac: 12,
        hp: 33,
        hitDice: "6d8+6",
        speed: { walk: 30 },
        abilityScores: { str: 10, dex: 15, con: 12, int: 11, wis: 10, cha: 8 },
        skills: { perception: 2, stealth: 4 },
        damageImmunities: ["bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        senses: ["darkvision 60 ft. (rat form only)"],
        languages: "Common (can't speak in rat form)",
        cr: 2,
        environment: ["forest", "urban"],
        role: "lurker",
        tags: ["humanoid", "shapechanger"],
        traits: [
            { name: "Shapechanger", description: "The wererat can use its action to polymorph into a rat-humanoid hybrid or into a giant rat, or back into its true form, which is humanoid. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies." },
            { name: "Keen Smell", description: "The wererat has advantage on Wisdom (Perception) checks that rely on smell." }
        ],
        actions: [
            { name: "Multiattack (Humanoid or Hybrid Form Only)", description: "The wererat makes two attacks, only one of which can be a bite." },
            { name: "Bite (Rat or Hybrid Form Only)", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4+2) piercing damage. If the target is a humanoid, it must succeed on a DC 11 Constitution saving throw or be cursed with wererat lycanthropy." },
            { name: "Shortsword (Humanoid or Hybrid Form Only)", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6+2) piercing damage." },
            { name: "Hand Crossbow (Humanoid or Hybrid Form Only)", description: "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 5 (1d6+2) piercing damage." }
        ]
    },
    "wereboar": {
        name: "Wereboar",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "human, shapechanger",
        alignment: "neutral evil",
        ac: 10,
        acType: "11 in boar/hybrid form from natural armor",
        hp: 78,
        hitDice: "12d8+24",
        speed: { walk: 30 },
        abilityScores: { str: 17, dex: 10, con: 15, int: 10, wis: 11, cha: 8 },
        skills: { perception: 2 },
        damageImmunities: ["bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        senses: [],
        languages: "Common (can't speak in boar form)",
        cr: 4,
        environment: ["forest", "grassland", "hill"],
        role: "brute",
        tags: ["humanoid", "shapechanger"],
        traits: [
            { name: "Shapechanger", description: "The wereboar can use its action to polymorph into a boar-humanoid hybrid or into a boar, or back into its true form, which is humanoid. Its statistics, other than its AC, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies." },
            { name: "Charge (Boar or Hybrid Form Only)", description: "If the wereboar moves at least 15 feet straight toward a target and then hits it with its tusks on the same turn, the target takes an extra 7 (2d6) slashing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone." },
            { name: "Relentless (Recharges after a Short or Long Rest)", description: "If the wereboar takes 14 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead." }
        ],
        actions: [
            { name: "Multiattack (Humanoid or Hybrid Form Only)", description: "The wereboar makes two attacks, only one of which can be with its tusks." },
            { name: "Maul (Humanoid or Hybrid Form Only)", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6+3) bludgeoning damage." },
            { name: "Tusks (Boar or Hybrid Form Only)", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6+3) slashing damage. If the target is a humanoid, it must succeed on a DC 12 Constitution saving throw or be cursed with wereboar lycanthropy." }
        ]
    },
    "weretiger": {
        name: "Weretiger",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "human, shapechanger",
        alignment: "neutral",
        ac: 12,
        hp: 120,
        hitDice: "16d8+48",
        speed: { walk: 30 },
        abilityScores: { str: 17, dex: 15, con: 16, int: 10, wis: 13, cha: 11 },
        skills: { perception: 5, stealth: 4 },
        damageImmunities: ["bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        senses: ["darkvision 60 ft."],
        languages: "Common (can't speak in tiger form)",
        cr: 4,
        environment: ["desert", "forest", "grassland"],
        role: "brute",
        tags: ["humanoid", "shapechanger"],
        traits: [
            { name: "Shapechanger", description: "The weretiger can use its action to polymorph into a tiger-humanoid hybrid or into a tiger, or back into its true form, which is humanoid. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies." },
            { name: "Keen Hearing and Smell", description: "The weretiger has advantage on Wisdom (Perception) checks that rely on hearing or smell." },
            { name: "Pounce (Tiger or Hybrid Form Only)", description: "If the weretiger moves at least 15 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the weretiger can make one bite attack against it as a bonus action." }
        ],
        actions: [
            { name: "Multiattack (Humanoid or Hybrid Form Only)", description: "In humanoid form, the weretiger makes two scimitar attacks or two longbow attacks. In hybrid form, it can attack like a humanoid or make two claw attacks." },
            { name: "Bite (Tiger or Hybrid Form Only)", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10+3) piercing damage. If the target is a humanoid, it must succeed on a DC 13 Constitution saving throw or be cursed with weretiger lycanthropy." },
            { name: "Claw (Tiger or Hybrid Form Only)", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8+3) slashing damage." },
            { name: "Scimitar (Humanoid or Hybrid Form Only)", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6+3) slashing damage." },
            { name: "Longbow (Humanoid or Hybrid Form Only)", description: "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit: 6 (1d8+2) piercing damage." }
        ]
    },
    "werebear": {
        name: "Werebear",
        source: "MM",
        size: "medium",
        type: "humanoid",
        subtype: "human, shapechanger",
        alignment: "neutral good",
        ac: 10,
        acType: "11 in bear/hybrid form from natural armor",
        hp: 135,
        hitDice: "18d8+54",
        speed: { walk: 30 },
        abilityScores: { str: 19, dex: 10, con: 17, int: 11, wis: 12, cha: 12 },
        skills: { perception: 7 },
        damageImmunities: ["bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        senses: [],
        languages: "Common (can't speak in bear form)",
        cr: 5,
        environment: ["arctic", "forest", "hill"],
        role: "brute",
        tags: ["humanoid", "shapechanger"],
        traits: [
            { name: "Shapechanger", description: "The werebear can use its action to polymorph into a Large bear-humanoid hybrid or into a Large bear, or back into its true form, which is humanoid. Its statistics, other than its size and AC, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies." },
            { name: "Keen Smell", description: "The werebear has advantage on Wisdom (Perception) checks that rely on smell." }
        ],
        actions: [
            { name: "Multiattack", description: "In bear form, the werebear makes two claw attacks. In humanoid form, it makes two greataxe attacks. In hybrid form, it can attack like a bear or a humanoid." },
            { name: "Bite (Bear or Hybrid Form Only)", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 15 (2d10+4) piercing damage. If the target is a humanoid, it must succeed on a DC 14 Constitution saving throw or be cursed with werebear lycanthropy." },
            { name: "Claw (Bear or Hybrid Form Only)", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8+4) slashing damage." },
            { name: "Greataxe (Humanoid or Hybrid Form Only)", description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 10 (1d12+4) slashing damage." }
        ]
    },

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
