// Expansion Pack 49 - More Creatures
// Additional monsters

const MONSTERS_EXPANSION49 = {
    // ===== More Fiends =====
    "quasit": {
        name: "Quasit",
        source: "MM",
        size: "tiny",
        type: "fiend",
        subtype: "demon, shapechanger",
        alignment: "chaotic evil",
        ac: 13,
        hp: 7,
        hitDice: "3d4",
        speed: { walk: 40 },
        abilityScores: { str: 5, dex: 17, con: 10, int: 7, wis: 10, cha: 10 },
        skills: { stealth: 5 },
        damageResistances: ["cold", "fire", "lightning; bludgeoning, piercing, and slashing from nonmagical attacks"],
        damageImmunities: ["poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 120 ft."],
        languages: "Abyssal, Common",
        cr: 1,
        environment: ["abyss"],
        role: "lurker",
        tags: ["fiend", "demon", "shapechanger"],
        traits: [
            { name: "Shapechanger", description: "The quasit can use its action to polymorph into a beast form that resembles a bat (speed 10 ft., fly 40 ft.), a centipede (40 ft., climb 40 ft.), or a toad (40 ft., swim 40 ft.), or back into its true form. Its statistics are the same in each form, except for the speed changes noted. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies." },
            { name: "Magic Resistance", description: "The quasit has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Claws (Bite in Beast Form)", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d4+3) piercing damage, and the target must succeed on a DC 10 Constitution saving throw or take 5 (2d4) poison damage and become poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." },
            { name: "Scare (1/Day)", description: "One creature of the quasit's choice within 20 feet of it must succeed on a DC 10 Wisdom saving throw or be frightened for 1 minute. The target can repeat the saving throw at the end of each of its turns, with disadvantage if the quasit is within line of sight, ending the effect on itself on a success." },
            { name: "Invisibility", description: "The quasit magically turns invisible until it attacks or uses Scare, or until its concentration ends (as if concentrating on a spell). Any equipment the quasit wears or carries is invisible with it." }
        ]
    },
    "imp": {
        name: "Imp",
        source: "MM",
        size: "tiny",
        type: "fiend",
        subtype: "devil, shapechanger",
        alignment: "lawful evil",
        ac: 13,
        hp: 10,
        hitDice: "3d4+3",
        speed: { walk: 20, fly: 40 },
        abilityScores: { str: 6, dex: 17, con: 13, int: 11, wis: 12, cha: 14 },
        skills: { deception: 4, insight: 3, persuasion: 4, stealth: 5 },
        damageResistances: ["cold; bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 120 ft."],
        languages: "Infernal, Common",
        cr: 1,
        environment: ["nine hells"],
        role: "lurker",
        tags: ["fiend", "devil", "shapechanger"],
        traits: [
            { name: "Shapechanger", description: "The imp can use its action to polymorph into a beast form that resembles a rat (speed 20 ft.), a raven (20 ft., fly 60 ft.), or a spider (20 ft., climb 20 ft.), or back into its true form. Its statistics are the same in each form, except for the speed changes noted. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies." },
            { name: "Devil's Sight", description: "Magical darkness doesn't impede the imp's darkvision." },
            { name: "Magic Resistance", description: "The imp has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Sting (Bite in Beast Form)", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4+3) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one." },
            { name: "Invisibility", description: "The imp magically turns invisible until it attacks or until its concentration ends (as if concentrating on a spell). Any equipment the imp wears or carries is invisible with it." }
        ]
    },
    "spined-devil": {
        name: "Spined Devil",
        source: "MM",
        size: "small",
        type: "fiend",
        subtype: "devil",
        alignment: "lawful evil",
        ac: 13,
        acType: "natural armor",
        hp: 22,
        hitDice: "5d6+5",
        speed: { walk: 20, fly: 40 },
        abilityScores: { str: 10, dex: 15, con: 12, int: 11, wis: 14, cha: 8 },
        damageResistances: ["cold; bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 120 ft."],
        languages: "Infernal, telepathy 120 ft.",
        cr: 2,
        environment: ["nine hells"],
        role: "artillery",
        tags: ["fiend", "devil"],
        traits: [
            { name: "Devil's Sight", description: "Magical darkness doesn't impede the devil's darkvision." },
            { name: "Flyby", description: "The devil doesn't provoke an opportunity attack when it flies out of an enemy's reach." },
            { name: "Limited Spines", description: "The devil has twelve tail spines. Used spines regrow by the time the devil finishes a long rest." },
            { name: "Magic Resistance", description: "The devil has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack", description: "The devil makes two attacks: one with its bite and one with its fork or two with its tail spines." },
            { name: "Bite", description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 5 (2d4) slashing damage." },
            { name: "Fork", description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6) piercing damage." },
            { name: "Tail Spine", description: "Ranged Weapon Attack: +4 to hit, range 20/80 ft., one target. Hit: 4 (1d4+2) piercing damage plus 3 (1d6) fire damage." }
        ]
    },
    "bearded-devil": {
        name: "Bearded Devil",
        source: "MM",
        size: "medium",
        type: "fiend",
        subtype: "devil",
        alignment: "lawful evil",
        ac: 13,
        acType: "natural armor",
        hp: 52,
        hitDice: "8d8+16",
        speed: { walk: 30 },
        abilityScores: { str: 16, dex: 15, con: 15, int: 9, wis: 11, cha: 11 },
        savingThrows: { str: 5, con: 4, wis: 2 },
        damageResistances: ["cold; bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 120 ft."],
        languages: "Infernal, telepathy 120 ft.",
        cr: 3,
        environment: ["nine hells"],
        role: "soldier",
        tags: ["fiend", "devil"],
        traits: [
            { name: "Devil's Sight", description: "Magical darkness doesn't impede the devil's darkvision." },
            { name: "Magic Resistance", description: "The devil has advantage on saving throws against spells and other magical effects." },
            { name: "Steadfast", description: "The devil can't be frightened while it can see an allied creature within 30 feet of it." }
        ],
        actions: [
            { name: "Multiattack", description: "The devil makes two attacks: one with its beard and one with its glaive." },
            { name: "Beard", description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 6 (1d8+2) piercing damage, and the target must succeed on a DC 12 Constitution saving throw or be poisoned for 1 minute. While poisoned in this way, the target can't regain hit points. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." },
            { name: "Glaive", description: "Melee Weapon Attack: +5 to hit, reach 10 ft., one target. Hit: 8 (1d10+3) slashing damage. If the target is a creature other than an undead or a construct, it must succeed on a DC 12 Constitution saving throw or lose 5 (1d10) hit points at the start of each of its turns due to an infernal wound. Each time the devil hits the wounded target with this attack, the damage dealt by the wound increases by 5 (1d10). Any creature can take an action to stanch the wound with a successful DC 12 Wisdom (Medicine) check. The wound also closes if the target receives magical healing." }
        ]
    },
    "barbed-devil": {
        name: "Barbed Devil",
        source: "MM",
        size: "medium",
        type: "fiend",
        subtype: "devil",
        alignment: "lawful evil",
        ac: 15,
        acType: "natural armor",
        hp: 110,
        hitDice: "13d8+52",
        speed: { walk: 30 },
        abilityScores: { str: 16, dex: 17, con: 18, int: 12, wis: 14, cha: 14 },
        savingThrows: { str: 6, con: 7, wis: 5, cha: 5 },
        skills: { deception: 5, insight: 5, perception: 8 },
        damageResistances: ["cold; bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 120 ft."],
        languages: "Infernal, telepathy 120 ft.",
        cr: 5,
        environment: ["nine hells"],
        role: "soldier",
        tags: ["fiend", "devil"],
        traits: [
            { name: "Barbed Hide", description: "At the start of each of its turns, the barbed devil deals 5 (1d10) piercing damage to any creature grappling it." },
            { name: "Devil's Sight", description: "Magical darkness doesn't impede the devil's darkvision." },
            { name: "Magic Resistance", description: "The devil has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack", description: "The devil makes three melee attacks: one with its tail and two with its claws. Alternatively, it can use Hurl Flame twice." },
            { name: "Claw", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6+3) piercing damage." },
            { name: "Tail", description: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6+3) piercing damage." },
            { name: "Hurl Flame", description: "Ranged Spell Attack: +5 to hit, range 150 ft., one target. Hit: 10 (3d6) fire damage. If the target is a flammable object that isn't being worn or carried, it also catches fire." }
        ]
    },
    "chain-devil": {
        name: "Chain Devil",
        source: "MM",
        size: "medium",
        type: "fiend",
        subtype: "devil",
        alignment: "lawful evil",
        ac: 16,
        acType: "natural armor",
        hp: 85,
        hitDice: "10d8+40",
        speed: { walk: 30 },
        abilityScores: { str: 18, dex: 15, con: 18, int: 11, wis: 12, cha: 14 },
        savingThrows: { con: 7, wis: 4, cha: 5 },
        damageResistances: ["cold; bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 120 ft."],
        languages: "Infernal, telepathy 120 ft.",
        cr: 8,
        environment: ["nine hells"],
        role: "controller",
        tags: ["fiend", "devil"],
        traits: [
            { name: "Devil's Sight", description: "Magical darkness doesn't impede the devil's darkvision." },
            { name: "Magic Resistance", description: "The devil has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack", description: "The devil makes two attacks with its chains." },
            { name: "Chain", description: "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 11 (2d6+4) slashing damage. The target is grappled (escape DC 14) if the devil isn't already grappling a creature. Until this grapple ends, the target is restrained and takes 7 (2d6) piercing damage at the start of each of its turns." },
            { name: "Animate Chains (Recharges after a Short or Long Rest)", description: "Up to four chains the devil can see within 60 feet of it magically sprout razor-edged barbs and animate under the devil's control, provided that the chains aren't being worn or carried. Each animated chain is an object with AC 20, 20 hit points, resistance to piercing damage, and immunity to psychic and thunder damage. When the devil uses Multiattack on its turn, it can use each animated chain to make one additional chain attack. An animated chain can grapple one creature of its own but can't make attacks while grappling. An animated chain reverts to its inanimate state if reduced to 0 hit points or if the devil is incapacitated or dies." }
        ],
        reactions: [
            { name: "Unnerving Mask", description: "When a creature the devil can see starts its turn within 30 feet of the devil, the devil can create the illusion that it looks like one of the creature's departed loved ones or bitter enemies. If the creature can see the devil, it must succeed on a DC 14 Wisdom saving throw or be frightened until the end of its turn." }
        ]
    },
    "bone-devil": {
        name: "Bone Devil",
        source: "MM",
        size: "large",
        type: "fiend",
        subtype: "devil",
        alignment: "lawful evil",
        ac: 19,
        acType: "natural armor",
        hp: 142,
        hitDice: "15d10+60",
        speed: { walk: 40, fly: 40 },
        abilityScores: { str: 18, dex: 16, con: 18, int: 13, wis: 14, cha: 16 },
        savingThrows: { int: 5, wis: 6, cha: 7 },
        skills: { deception: 7, insight: 6 },
        damageResistances: ["cold; bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 120 ft."],
        languages: "Infernal, telepathy 120 ft.",
        cr: 9,
        environment: ["nine hells"],
        role: "controller",
        tags: ["fiend", "devil"],
        traits: [
            { name: "Devil's Sight", description: "Magical darkness doesn't impede the devil's darkvision." },
            { name: "Magic Resistance", description: "The devil has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack", description: "The devil makes three attacks: two with its claws and one with its sting." },
            { name: "Claw", description: "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 8 (1d8+4) slashing damage." },
            { name: "Sting", description: "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 13 (2d8+4) piercing damage plus 17 (5d6) poison damage, and the target must succeed on a DC 14 Constitution saving throw or become poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." }
        ]
    },
    "horned-devil": {
        name: "Horned Devil",
        source: "MM",
        size: "large",
        type: "fiend",
        subtype: "devil",
        alignment: "lawful evil",
        ac: 18,
        acType: "natural armor",
        hp: 178,
        hitDice: "17d10+85",
        speed: { walk: 20, fly: 60 },
        abilityScores: { str: 22, dex: 17, con: 21, int: 12, wis: 16, cha: 17 },
        savingThrows: { str: 10, dex: 7, wis: 7, cha: 7 },
        damageResistances: ["cold; bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"],
        damageImmunities: ["fire", "poison"],
        conditionImmunities: ["poisoned"],
        senses: ["darkvision 120 ft."],
        languages: "Infernal, telepathy 120 ft.",
        cr: 11,
        environment: ["nine hells"],
        role: "brute",
        tags: ["fiend", "devil"],
        traits: [
            { name: "Devil's Sight", description: "Magical darkness doesn't impede the devil's darkvision." },
            { name: "Magic Resistance", description: "The devil has advantage on saving throws against spells and other magical effects." }
        ],
        actions: [
            { name: "Multiattack", description: "The devil makes three melee attacks: two with its fork and one with its tail. It can use Hurl Flame in place of any melee attack." },
            { name: "Fork", description: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 15 (2d8+6) piercing damage." },
            { name: "Tail", description: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 10 (1d8+6) piercing damage. If the target is a creature other than an undead or a construct, it must succeed on a DC 17 Constitution saving throw or lose 10 (3d6) hit points at the start of each of its turns due to an infernal wound. Each time the devil hits the wounded target with this attack, the damage dealt by the wound increases by 10 (3d6). Any creature can take an action to stanch the wound with a successful DC 12 Wisdom (Medicine) check. The wound also closes if the target receives magical healing." },
            { name: "Hurl Flame", description: "Ranged Spell Attack: +7 to hit, range 150 ft., one target. Hit: 14 (4d6) fire damage. If the target is a flammable object that isn't being worn or carried, it also catches fire." }
        ]
    }
};
