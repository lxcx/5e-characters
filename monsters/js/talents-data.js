// D&D 5E Monster Generator - Monster Talents Data
// Based on Dragonix DM Options: Monster Talents I & II

// ============================================
// MONSTER TALENTS BY CREATURE TYPE
// ============================================
// Talents are organized by the creature type they apply to.
// Each talent has: name, type (Trait/Action/Reaction/Legendary Action), 
// description, and optionally a cost (defaults to 1)

const monsterTalents = {
    // ========================================
    // ABERRATIONS - Mind Flayers, Beholders, Aboleths
    // ========================================
    aberration: [
        {
            name: "Psychic Defense",
            type: "Trait",
            description: "Has advantage on Intelligence, Wisdom, and Charisma saving throws against paralysis and illusions, as well as to resist being charmed, frightened, or stunned."
        },
        {
            name: "Mind Blast",
            type: "Action",
            description: "The creature magically emits psychic energy in a 30-foot cone. Each creature in that area must succeed on an Intelligence saving throw (DC = 8 + proficiency + Int modifier) or take 3d8+2 psychic damage and be stunned for 1 minute.",
            recharge: "short rest"
        },
        {
            name: "Telepathic Lure",
            type: "Action",
            description: "The creature can take a bonus action to make a Psychic Lure attack. Ranged Spell Attack: reach 30ft., one target. On hit: 3d6 psychic damage and the target must succeed on a Strength saving throw (DC = 8 + proficiency + Cha modifier) or be pulled up to 25 feet toward the creature.",
            recharge: "5-6"
        },
        {
            name: "Extra Eye Ray Attack",
            type: "Trait",
            description: "When the creature uses eye ray attacks, it can shoot one additional magical eye ray at random.",
            cost: 2
        },
        {
            name: "Focusing Eye Rays",
            type: "Trait",
            description: "If a creature is hit by an eye ray attack, it has disadvantage on all saving throws against any succeeding eye ray attacks until the end of the turn.",
            cost: 2
        },
        {
            name: "Improved Enslave",
            type: "Trait",
            description: "Can target up to two creatures it can see within 30 feet with its Enslave or charm feature."
        },
        {
            name: "Slime Sphere",
            type: "Action",
            description: "The creature conjures a ball of acidic slime that explodes at a point it can see within 120 feet. Each creature in a 20-foot-radius sphere centered on that point must make a Strength saving throw (DC = 8 + proficiency + Con modifier). On a failed save, the target takes 4d6 acid damage and is restrained, or half damage and isn't restrained on a success.",
            cost: 2
        },
        {
            name: "Hypnotic Moan",
            type: "Action",
            description: "The creature emits a psychic-charged moan. Each creature within 60 feet that can hear its moan and isn't an aberration must make a Wisdom saving throw (DC = 8 + proficiency + Cha modifier). On a failed save, the target takes 3d6 psychic damage and is stunned until the end of the creature's next turn.",
            recharge: "5-6",
            cost: 2
        },
        {
            name: "Envelop",
            type: "Trait",
            description: "When the creature attaches itself to a target, it enwraps itself fully around the creature's body, restraining it. When the creature takes damage while attached, the attack deals half as much damage to it and half to the attached creature."
        },
        {
            name: "Redirect Central Eye",
            type: "Reaction",
            description: "When a creature it can see casts a spell or uses a magical item but before it takes effect, the creature can use its reaction to turn its central eye or antimagic cone facing towards that creature.",
            cost: 2
        }
    ],

    // ========================================
    // BEASTS - Natural creatures
    // ========================================
    beast: [
        {
            name: "Pack Tactics",
            type: "Trait",
            description: "Has advantage on an attack roll against a creature if at least one of its allies is within 5 feet of the creature and the ally isn't incapacitated."
        },
        {
            name: "Keen Senses",
            type: "Trait",
            description: "Has advantage on Wisdom (Perception) checks that rely on hearing, sight, or smell."
        },
        {
            name: "Pounce",
            type: "Trait",
            description: "If the creature moves at least 20 feet straight toward a creature and then hits it with a melee attack on the same turn, that target must succeed on a Strength saving throw (DC = 8 + proficiency + Str modifier) or be knocked prone."
        },
        {
            name: "Relentless",
            type: "Trait",
            description: "If the creature takes damage that would reduce it to 0 hit points, it is reduced to 1 hit point instead.",
            recharge: "short rest"
        },
        {
            name: "Rampage",
            type: "Trait",
            description: "When the creature reduces a creature to 0 hit points with a melee attack on its turn, it can take a bonus action to move up to half its speed and make a bite attack."
        },
        {
            name: "Blood Frenzy",
            type: "Trait",
            description: "Has advantage on melee attack rolls against any creature that doesn't have all its hit points."
        },
        {
            name: "Go for the Throat",
            type: "Trait",
            description: "If the creature hits a prone target with its bite attack, it is treated as a critical hit."
        },
        {
            name: "Flyby",
            type: "Trait",
            description: "Doesn't provoke opportunity attacks when it flies out of an enemy's reach."
        },
        {
            name: "Dive Attack",
            type: "Trait",
            description: "If the creature is flying and dives at least 30 feet straight toward a target and then hits it with a melee weapon attack, the attack deals an extra 2d6 damage to the target."
        },
        {
            name: "Swoop",
            type: "Trait",
            description: "If it flies at least 30 feet and hits a Medium or smaller creature with a claw attack, the creature is grappled and restrained while it flies upward with it at half its speed."
        }
    ],

    // ========================================
    // CELESTIALS - Angels, Couatl, Pegasus
    // ========================================
    celestial: [
        {
            name: "Angelic Presence",
            type: "Trait",
            description: "While the creature has more than half of its hit points, all melee and ranged attacks made against it have disadvantage.",
            cost: 2
        },
        {
            name: "Aura of Radiance",
            type: "Trait",
            description: "A hostile creature that starts its turn within 5 feet of the creature takes 1d8 radiant damage."
        },
        {
            name: "Guardian Angel",
            type: "Reaction",
            description: "The creature designates an ally as its ward. It can use its reaction to move up to half its speed and add 6 to the AC of the ward against one attack that would hit it."
        },
        {
            name: "Burst of Healing",
            type: "Action",
            description: "The creature expends three uses of its Healing Touch and each creature within 20 feet regains hit points and is freed of any curse, disease, poison, blindness, or deafness."
        },
        {
            name: "Regeneration",
            type: "Trait",
            description: "Regains 10 hit points at the start of its turn if it has at least 1 hit point. If the creature takes necrotic damage, this trait doesn't function at the start of its next turn."
        },
        {
            name: "Spell Reflection",
            type: "Reaction",
            description: "If the creature makes a successful saving throw against a spell, or a spell attack misses it, it can use its reaction to choose another creature it can see within 30 feet. The spell targets the chosen creature instead.",
            cost: 2,
            uses: "3/day"
        },
        {
            name: "Celestial Resistance",
            type: "Trait",
            description: "Has advantage on saving throws against being charmed and frightened, and resistance to radiant damage and bludgeoning, piercing, and slashing damage from nonmagical weapons."
        },
        {
            name: "Improved Angelic Weapons",
            type: "Trait",
            description: "The radiant damage dealt by the creature's weapon attacks is increased by 2d8."
        },
        {
            name: "Flyby",
            type: "Trait",
            description: "Doesn't provoke opportunity attacks when it flies out of an enemy's reach."
        },
        {
            name: "Divine Smite",
            type: "Trait",
            description: "When the creature hits with a melee weapon attack, it can deal an extra 2d8 radiant damage to the target."
        }
    ],

    // ========================================
    // CONSTRUCTS - Golems, Animated Objects
    // ========================================
    construct: [
        {
            name: "Magic Weapons",
            type: "Trait",
            description: "The creature's weapon attacks are magical."
        },
        {
            name: "Ever Vigilant",
            type: "Trait",
            description: "Has advantage on Initiative rolls and Wisdom (Perception) checks."
        },
        {
            name: "Bash",
            type: "Trait",
            description: "If the creature's slam attack roll against a target succeeds by 5 or more, the target must make a Constitution saving throw (DC = 8 + proficiency + Str modifier) or be stunned until the end of the creature's next turn."
        },
        {
            name: "Unstoppable",
            type: "Trait",
            description: "Deals double damage against objects and structures. In addition, can move through the space of a Large or smaller hostile creature. All opportunity attacks against it have disadvantage."
        },
        {
            name: "Juggernaut",
            type: "Action",
            description: "When the creature performs a Dash action and enters the space of a Large or smaller hostile creature during this turn, that creature must make a Dexterity saving throw (DC = 8 + proficiency + Str modifier). On a failed save, the target takes damage equal to the creature's slam attack.",
            recharge: "5-6",
            cost: 2
        },
        {
            name: "Reinforced Armor Plating",
            type: "Trait",
            description: "The creature is resistant to bludgeoning, piercing, and slashing damage from all weapons that aren't adamantine.",
            cost: 2
        },
        {
            name: "Magic Immunity I",
            type: "Trait",
            description: "The creature is immune to 1st level spells, but not to cantrips.",
            cost: 2
        },
        {
            name: "Trembling Slam",
            type: "Action",
            description: "The creature pounds the ground, triggering a short earth tremor. All other creatures on the ground within 10 feet that are Medium or smaller must succeed on a Strength saving throw (DC = 8 + proficiency + Str modifier) or be knocked prone."
        },
        {
            name: "Squeeze",
            type: "Trait",
            description: "When the creature hits a Medium or smaller creature with its slam attack, the target is grappled and restrained. The creature can automatically hit the target with its slam but can't use one of its slam attacks against other targets.",
            cost: 2
        },
        {
            name: "Elemental Weapon",
            type: "Trait",
            description: "Select one element (cold, fire, lightning, or thunder). The creature's weapon attacks deal an extra 1d8 damage of that type."
        }
    ],

    // ========================================
    // DRAGONS - True Dragons, Dragon Turtle
    // ========================================
    dragon: [
        {
            name: "Dive Attack",
            type: "Trait",
            description: "If the dragon is flying and dives at least 30 feet straight toward a target and then hits it with a melee weapon attack, the attack deals an additional two dice of its damage."
        },
        {
            name: "Tail Bash",
            type: "Trait",
            description: "If the dragon's tail attack roll against a target succeeds by 5 or more, the target must make a Constitution saving throw (DC = 8 + proficiency + Str modifier) or be stunned until the end of the dragon's next turn."
        },
        {
            name: "Claw Hold",
            type: "Trait",
            description: "If the dragon's claw attack roll against a target succeeds by 5 or more, and the target is smaller than the dragon, the target must make a Strength saving throw (DC = 8 + proficiency + Str modifier) or be knocked prone, grappled, and restrained until the grapple ends."
        },
        {
            name: "Improved Frightful Presence",
            type: "Trait",
            description: "If a creature fails its saving throw against the dragon's Frightful Presence by 5 or more, the target is also paralyzed while frightened.",
            cost: 2
        },
        {
            name: "Burning Breath",
            type: "Trait",
            description: "A creature that fails its saving throw against the dragon's fire breath by 5 or more catches fire; until someone takes an action to douse the fire, the creature takes 2d6 fire damage at the start of each of its turns.",
            cost: 2
        },
        {
            name: "Shocking Breath",
            type: "Trait",
            description: "A creature that fails its saving throw against the dragon's lightning breath by 5 or more is stunned until the end of the dragon's next turn.",
            cost: 2
        },
        {
            name: "Numbing Breath",
            type: "Trait",
            description: "A creature that fails its saving throw against the dragon's cold breath by 5 or more can't use reactions, its speed is halved, and it can't make more than one attack on its turn for 1 minute.",
            cost: 2
        },
        {
            name: "Noxious Breath",
            type: "Trait",
            description: "A creature that fails its saving throw against the dragon's poison breath by 5 or more is also poisoned for one minute.",
            cost: 2
        },
        {
            name: "Crush",
            type: "Action",
            description: "The dragon flies at least 30 feet and violently lands on the ground with its full weight. Each creature within a space equal to its size must make a Dexterity saving throw (DC = 8 + proficiency + Str modifier). On a failed save, the target takes 4d10 + Str modifier bludgeoning damage, is knocked prone, grappled, and restrained.",
            cost: 2
        },
        {
            name: "Tail Sweep",
            type: "Legendary Action",
            description: "The dragon attempts to knock multiple targets prone with one swing of its tail. Each creature within 15 feet must make a Strength saving throw. On a failed save, the target takes tail damage and is pushed up to 10 feet away and knocked prone.",
            cost: 2
        }
    ],

    // ========================================
    // ELEMENTALS - Air, Earth, Fire, Water, Genies
    // ========================================
    elemental: [
        {
            name: "Aura of Fire",
            type: "Trait",
            description: "A creature that starts its turn within 5 feet of the creature takes 1d10 fire damage."
        },
        {
            name: "Blast Wave",
            type: "Action",
            description: "The creature emits a searing wave of elemental energy. Each creature within 20 feet must succeed on a Dexterity saving throw (DC = 8 + proficiency + Con modifier), taking 6d6 damage of its elemental type on a failed save, or half on a success.",
            recharge: "5-6",
            cost: 2
        },
        {
            name: "Ground Mastery",
            type: "Trait",
            description: "Has advantage on all melee weapon attacks against a creature if both it and the target are touching the ground.",
            cost: 2
        },
        {
            name: "Air Mastery",
            type: "Trait",
            description: "Airborne creatures have disadvantage on their melee weapon attacks against this creature."
        },
        {
            name: "Water Mastery",
            type: "Trait",
            description: "Has advantage on all melee weapon attacks against a creature if both it and the target are touching water. While submerged in water, the creature is invisible."
        },
        {
            name: "Engulfing Winds",
            type: "Trait",
            description: "When a creature fails its saving throw against the creature's whirlwind attack, the creature can choose not to fling the target. Instead, the target is grappled and restrained, taking 3d6 slashing damage at the start of each turn.",
            cost: 2
        },
        {
            name: "Surging Waves",
            type: "Action",
            description: "The creature unleashes a violent rush of water. Each creature within 15 feet must succeed on a Strength saving throw (DC = 8 + proficiency + Str modifier), taking 2d8+4 bludgeoning damage and being pushed 10 feet and knocked prone on a failed save.",
            recharge: "5-6",
            cost: 2
        },
        {
            name: "Quake Slam",
            type: "Action",
            description: "The creature violently slams the ground, triggering an earth tremor. All other creatures on the ground within 20 feet must succeed on a Strength saving throw (DC = 8 + proficiency + Str modifier), taking 2d8+5 bludgeoning damage and being knocked prone on a failed save.",
            recharge: "5-6",
            cost: 2
        },
        {
            name: "Stone Skin",
            type: "Trait",
            description: "The creature has resistance to bludgeoning, piercing, and slashing damage from nonmagical weapons that aren't adamantine.",
            cost: 2
        },
        {
            name: "Zephyr",
            type: "Reaction",
            description: "When a creature it can see targets it with a melee attack, it can use its reaction to perform a Disengage action and move up to half its speed."
        }
    ],

    // ========================================
    // FEY - Dryads, Pixies, Satyrs
    // ========================================
    fey: [
        {
            name: "Hide in Plain Sight",
            type: "Action",
            description: "While within 5 feet of any plant, tree, or vegetation, the creature can take a bonus action to perform a Hide action and gains advantage on all Dexterity (Stealth) checks."
        },
        {
            name: "Improved Fey Charm",
            type: "Trait",
            description: "The creature can have a number of charmed creatures equal to its Charisma modifier, instead of the normal limit."
        },
        {
            name: "Penetrating Fey Charm",
            type: "Trait",
            description: "The creature can take a bonus action to impose disadvantage to a target's saving throw when it uses its Fey Charm against it.",
            uses: "1/day"
        },
        {
            name: "Wink Out",
            type: "Reaction",
            description: "The creature can use its reaction to become invisible until the start of its next turn.",
            uses: "1/day"
        },
        {
            name: "Evasive",
            type: "Trait",
            description: "When the creature is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, it instead takes no damage if it succeeds, and only half damage if it fails."
        },
        {
            name: "Superior Resistance",
            type: "Trait",
            description: "If the creature fails a saving throw, it can choose to succeed instead.",
            uses: "1/day"
        },
        {
            name: "Jeer",
            type: "Reaction",
            description: "When a creature it can see within 60 feet makes an attack roll or ability check, it can use its reaction to distract the creature. The creature must make a Wisdom saving throw (DC = 8 + proficiency + Cha modifier). On a failed save, it has disadvantage on the roll.",
            uses: "3/day"
        },
        {
            name: "Slippery",
            type: "Trait",
            description: "The creature can take a bonus action on each of its turns to take the Disengage or Hide action."
        },
        {
            name: "Sylvan Stalker",
            type: "Trait",
            description: "Has advantage on Wisdom (Perception), Wisdom (Survival), and Dexterity (Stealth) checks while in natural forest, bog, or swamp terrain."
        },
        {
            name: "Innate Spellcaster (Fey)",
            type: "Trait",
            description: "The creature's spellcasting ability is Charisma (DC = 8 + proficiency + Cha modifier). It can innately cast: 3/day each: misty step, sleep; 1/day: suggestion."
        }
    ],

    // ========================================
    // FIENDS - Demons and Devils
    // ========================================
    fiend: [
        {
            name: "Naturally Insidious",
            type: "Trait",
            description: "Has advantage on all Charisma checks when lying, intimidating, and manipulating others to further its agenda or for self-preservation."
        },
        {
            name: "Summon Demon",
            type: "Action",
            description: "The fiend summons lesser demons (1d4 CR 1 or lower fiends). A summoned demon appears in an unoccupied space within 60 feet, acts as an ally, has no talents, and can't summon other demons. It remains for one minute, until it or the summoner dies, or until dismissed.",
            cost: 2,
            uses: "1/day"
        },
        {
            name: "Fear Aura",
            type: "Trait",
            description: "A creature hostile to the fiend that starts its turn within 20 feet must make a Wisdom saving throw (DC = 8 + proficiency + Cha modifier), unless the fiend is incapacitated. On a failed save, the target is frightened until the start of its next turn."
        },
        {
            name: "Meteor Strike",
            type: "Action",
            description: "The fiend flies at least 40 feet and dives into a target space, creating a massive explosion of fire. Each creature within 40 feet must make a Dexterity saving throw (DC = 8 + proficiency + Str modifier). A creature takes 10d6 fire and 10d6 bludgeoning damage on a failed save, or half on a success.",
            recharge: "6",
            cost: 2
        },
        {
            name: "Constricting Whip",
            type: "Trait",
            description: "A creature that fails its Strength saving throw after getting hit by the fiend's whip attack is also grappled and restrained. The target takes 2d6+8 bludgeoning plus 3d6 fire damage at the start of each of the fiend's turns."
        },
        {
            name: "Soul Scorch",
            type: "Action",
            description: "The fiend summons a 15-foot cube of hellfire to erupt within 60 feet. Each creature in that area must make a Dexterity saving throw (DC = 8 + proficiency + Cha modifier), taking 3d6 fire and 3d6 necrotic damage on a failed save, or half on a success.",
            recharge: "5-6",
            cost: 2
        },
        {
            name: "Barbed Defense",
            type: "Trait",
            description: "A creature that hits the fiend with a melee attack while within 5 feet takes 1d10 piercing damage."
        },
        {
            name: "Impale",
            type: "Trait",
            description: "If a creature is hit twice by the fiend's claws in the same turn, it is grappled, restrained, and impaled, taking an extra 2d10 piercing damage."
        },
        {
            name: "Innate Spellcaster (Fiend)",
            type: "Trait",
            description: "The fiend's spellcasting ability is Charisma (DC = 8 + proficiency + Cha modifier). It can innately cast: 3/day each: darkness, detect magic; 1/day: telekinesis."
        },
        {
            name: "Magic Resistance",
            type: "Trait",
            description: "Has advantage on saving throws against spells and other magical effects."
        }
    ],

    // ========================================
    // GIANTS - Giants, Ogres, Trolls
    // ========================================
    giant: [
        {
            name: "Boulder",
            type: "Trait",
            description: "The missile from the giant's rock attack shatters into many pieces when it lands. Any creature within 5 feet of the target must succeed on a Dexterity saving throw (DC = 8 + proficiency + Str modifier), even if the giant misses. On a failed save, the creature takes half as much damage."
        },
        {
            name: "Cleaving Swing",
            type: "Action",
            description: "The giant swings its weapon in a wide arc. It makes one attack roll and checks the result against the AC of each target within range. It deals its melee weapon damage to each creature it hits.",
            cost: 2
        },
        {
            name: "Stomp",
            type: "Action",
            description: "The giant can take a bonus action to make a Stomp attack. It can only target prone creatures smaller than itself. Melee Weapon Attack: +Str to hit, reach 5 ft., one prone target. Hit: 2d8 + Str modifier bludgeoning damage."
        },
        {
            name: "Crushing Stomp",
            type: "Trait",
            description: "A creature hit by the giant's Stomp attack is grappled. Until this grapple ends, the target is restrained and the giant can automatically hit the target with its Stomp."
        },
        {
            name: "Fling",
            type: "Action",
            description: "One creature smaller than the giant that is grappled is thrown up to 60 feet and knocked prone. If the target strikes a solid surface, it takes 1d6 bludgeoning damage for every 10 feet it was thrown."
        },
        {
            name: "Power Attack",
            type: "Trait",
            description: "Before the giant makes a melee weapon attack, it can choose to take a -5 penalty to the attack roll. If the attack hits, it adds +10 to the attack's damage."
        },
        {
            name: "Trembling Slam",
            type: "Action",
            description: "The giant strikes the ground, triggering an earth tremor. All creatures within 10 feet that are smaller than the giant must succeed on a Strength saving throw (DC = 8 + proficiency + Str modifier) or be knocked prone."
        },
        {
            name: "Rip Earth",
            type: "Trait",
            description: "The giant can rip a huge chunk off the ground and use it as its rock attack, shattering into many pieces upon impact. Any creature within 10 feet of the target must succeed on a Dexterity saving throw."
        },
        {
            name: "Frenzied Berserker",
            type: "Trait",
            description: "While the giant has less than full hit points, it gains advantage on all melee weapon attack rolls and all Intelligence, Wisdom, and Charisma saving throws, but attack rolls against it have advantage."
        },
        {
            name: "Regeneration",
            type: "Trait",
            description: "Regains 10 hit points at the start of its turn if it has at least 1 hit point. If the creature takes acid or fire damage, this trait doesn't function at the start of its next turn."
        }
    ],

    // ========================================
    // HUMANOIDS - Orcs, Goblins, etc.
    // ========================================
    humanoid: [
        {
            name: "Combat Advantage",
            type: "Trait",
            description: "Once during its turn, the creature deals an extra 2d6 damage when it hits a target with a weapon attack and has advantage on the attack roll."
        },
        {
            name: "Gang Up",
            type: "Trait",
            description: "Has advantage on an attack roll against a creature if at least two of its allies are within 5 feet of the target and the allies aren't incapacitated."
        },
        {
            name: "Cunning Action",
            type: "Trait",
            description: "Can take a bonus action on each of its turns in combat. This action can be used only to take the Dash, Disengage, or Hide action."
        },
        {
            name: "Pack Attack",
            type: "Trait",
            description: "Deals an extra 1d6 damage with its melee weapon attacks against a creature if at least two of its allies are within 5 feet of the target."
        },
        {
            name: "Rusher",
            type: "Trait",
            description: "Can take a bonus action to move up to its speed toward a hostile creature that it can see. If it ends its movement within 5 feet of the target, it can make a melee weapon attack against it."
        },
        {
            name: "Second Wind",
            type: "Action",
            description: "Can take a bonus action to regain hit points equal to 1d10 plus its number of Hit Dice.",
            uses: "1/day"
        },
        {
            name: "Power Attack",
            type: "Trait",
            description: "Before making a melee weapon attack, it can choose to take a -5 penalty to the attack roll. If the attack hits, it adds +10 to the attack's damage."
        },
        {
            name: "Skirmisher",
            type: "Trait",
            description: "If the creature hits a target with a weapon attack, it can use a bonus action to perform a Dash or Disengage action this turn."
        },
        {
            name: "Frenzied Berserker",
            type: "Trait",
            description: "While it has less than full hit points, it gains advantage on all melee weapon attack rolls and all Intelligence, Wisdom, and Charisma saving throws, but attack rolls against it have advantage."
        },
        {
            name: "Inspire Ferocity",
            type: "Reaction",
            description: "If an ally drops to 0 hit points within 30 feet and the creature can see that ally, it can use its reaction to target any number of allies within 30 feet. The targets deal maximum damage with their melee weapon attacks until the end of its next turn.",
            uses: "1/day"
        }
    ],

    // ========================================
    // MONSTROSITIES - Owlbear, Manticore, etc.
    // ========================================
    monstrosity: [
        {
            name: "Flyby",
            type: "Trait",
            description: "Doesn't provoke opportunity attacks when it flies out of an enemy's reach."
        },
        {
            name: "Dive Attack",
            type: "Trait",
            description: "If the creature is flying and dives at least 30 feet straight toward a target and then hits it with a melee weapon attack, the attack deals an extra 1d6 damage and the target must succeed on a Strength saving throw (DC = 8 + proficiency + Str modifier) or be knocked prone."
        },
        {
            name: "Pounce",
            type: "Trait",
            description: "If the creature moves at least 30 feet straight toward a target and then hits it with a melee attack on the same turn, that target must succeed on a Strength saving throw (DC = 8 + proficiency + Str modifier) or be knocked prone."
        },
        {
            name: "Maul",
            type: "Trait",
            description: "A Large or smaller creature that is hit by a claw attack is grappled. Until this grapple ends, the target is restrained and the creature can automatically hit the target with its claw but can't use that attack against other targets.",
            cost: 2
        },
        {
            name: "Stunning Screech",
            type: "Action",
            description: "The creature emits a shrill, mind-wracking screech. Each creature within 20 feet must succeed on a Constitution saving throw (DC = 8 + proficiency + Con modifier) or become deafened until the end of its next turn. If a target fails by 5 or more, it is also stunned.",
            recharge: "5-6",
            cost: 2
        },
        {
            name: "Hardened Carapace",
            type: "Trait",
            description: "The creature is resistant to piercing and slashing damage from nonmagical weapons that aren't adamantine."
        },
        {
            name: "Rising Burst",
            type: "Action",
            description: "The creature bursts out from underneath its victims. Each creature within a 20-foot cube must make a Strength saving throw (DC = 8 + proficiency + Str modifier). A creature takes 2d10 bludgeoning damage and is knocked prone on a failed save, or half damage and isn't knocked prone on a success.",
            recharge: "6"
        },
        {
            name: "Spike Volley",
            type: "Action",
            description: "The creature makes a ranged attack against any number of creatures within 10 feet of a point it can see within 100 feet. It makes a separate attack roll for each target.",
            cost: 2
        },
        {
            name: "Poisonous Attacks",
            type: "Trait",
            description: "A creature that takes damage from the creature's attacks must succeed on a Constitution saving throw (DC = 8 + proficiency + Con modifier) or become poisoned for 1 minute."
        },
        {
            name: "Iron Hide",
            type: "Trait",
            description: "The creature is resistant to bludgeoning, piercing, and slashing damage from nonmagical weapons that aren't adamantine."
        }
    ],

    // ========================================
    // OOZES - Gelatinous Cube, Black Pudding
    // ========================================
    ooze: [
        {
            name: "Extended Pseudopod",
            type: "Trait",
            description: "The reach of the ooze's pseudopod attack is increased to 10 feet."
        },
        {
            name: "Adhere",
            type: "Trait",
            description: "A creature hit by the ooze's pseudopod is also grappled. While grappled, it is restrained. If the ooze begins its turn grappled with a creature, it can take a bonus action to engulf it."
        },
        {
            name: "Constrict",
            type: "Trait",
            description: "A creature hit by the ooze's pseudopod is also grappled. Until this grapple ends, the target is restrained and the ooze can automatically hit the target with its pseudopod but can't make attacks against other targets."
        },
        {
            name: "Flowing Form",
            type: "Trait",
            description: "The ooze can take a bonus action to perform the Dash action. When it does so, it does not provoke opportunity attacks if it leaves a hostile creature's reach."
        },
        {
            name: "Noxious Acid",
            type: "Trait",
            description: "The acid of the ooze is highly toxic. A creature that takes acid damage from the ooze must succeed on a Constitution saving throw (DC = 8 + proficiency + Con modifier) or become poisoned until the end of the ooze's next turn."
        },
        {
            name: "Multiattack",
            type: "Trait",
            description: "The ooze makes two pseudopod attacks."
        },
        {
            name: "Corrosive Form",
            type: "Trait",
            description: "A creature that touches the ooze or hits it with a melee attack while within 5 feet takes 1d8 acid damage. Any nonmagical weapon that hits the ooze corrodes, taking a permanent -1 penalty to damage rolls. If its penalty drops to -5, the weapon is destroyed."
        },
        {
            name: "Split",
            type: "Trait",
            description: "When a Medium or larger ooze is subjected to slashing or lightning damage, it splits into two new oozes if it has at least 10 hit points. Each new ooze has hit points equal to half the original, rounded down."
        },
        {
            name: "Engulf",
            type: "Action",
            description: "The ooze moves up to its speed. While doing so, it can enter Large or smaller creatures' spaces. Whenever the ooze enters a creature's space, the creature must make a Dexterity saving throw (DC = 8 + proficiency + Dex modifier). On a success, it can choose to be pushed 5 feet. On a failure, the ooze enters the creature's space, and the creature takes acid damage and is engulfed."
        },
        {
            name: "Transparent",
            type: "Trait",
            description: "Even when the ooze is in plain sight, it takes a successful DC 15 Wisdom (Perception) check to spot an ooze that has neither moved nor attacked. A creature that tries to enter the ooze's space while unaware of it is surprised by the ooze."
        }
    ],

    // ========================================
    // PLANTS - Shambling Mound, Treant, Blights
    // ========================================
    plant: [
        {
            name: "Poisonous Touch",
            type: "Trait",
            description: "The creature's melee weapon attacks deal an extra 1d6 poison damage."
        },
        {
            name: "Thorny Bark",
            type: "Trait",
            description: "A creature that hits the plant with a melee attack while within 5 feet takes 1d4 piercing damage."
        },
        {
            name: "Regeneration",
            type: "Trait",
            description: "Regains 10 hit points at the start of its turn if it has at least 1 hit point and is touching the earth. If the creature takes fire damage, this trait doesn't function at the start of its next turn."
        },
        {
            name: "Extended Slam",
            type: "Trait",
            description: "The reach of the creature's slam attack is increased to 10 feet."
        },
        {
            name: "Malleable Hide",
            type: "Trait",
            description: "The creature is resistant to bludgeoning damage."
        },
        {
            name: "Poisonous Spores",
            type: "Trait",
            description: "A creature hostile to the plant that starts its turn within 20 feet must make a Constitution saving throw (DC = 8 + proficiency + Con modifier) or become poisoned for 1 minute."
        },
        {
            name: "Strangling Plants",
            type: "Trait",
            description: "A creature restrained by the plant's entangling attack takes 1d6 bludgeoning damage at the start of its turn and is unable to breathe."
        },
        {
            name: "Swift Creeper",
            type: "Trait",
            description: "The creature's speed is increased by 10 feet."
        },
        {
            name: "Animate Trees",
            type: "Action",
            description: "The creature magically animates one or two trees it can see within 60 feet. These trees have the same statistics as a treant, except they have Intelligence and Charisma scores of 1, can't speak, and have only the Slam action. An animated tree acts as an ally of the creature and remains animated for 1 day or until it dies.",
            uses: "1/day"
        },
        {
            name: "Lightning Absorption",
            type: "Trait",
            description: "Whenever the creature is subjected to lightning damage, it takes no damage and regains a number of hit points equal to the lightning damage dealt."
        }
    ],

    // ========================================
    // UNDEAD - Zombies, Vampires, Liches
    // ========================================
    undead: [
        {
            name: "Undead Fortitude",
            type: "Trait",
            description: "If damage reduces the creature to 0 hit points, it must make a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is radiant or from a critical hit. On a success, the creature drops to 1 hit point instead."
        },
        {
            name: "Aura of Decay",
            type: "Trait",
            description: "A creature that starts its turn within 5 feet of the undead takes 1d10 necrotic damage."
        },
        {
            name: "Life Drain",
            type: "Trait",
            description: "The creature's melee attacks deal an extra 2d6 necrotic damage. The target's hit point maximum is reduced by an amount equal to the necrotic damage taken. The reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0."
        },
        {
            name: "Chill Touch",
            type: "Trait",
            description: "The creature's melee weapon attacks deal an extra 2d6 cold damage."
        },
        {
            name: "Dreadful Glare",
            type: "Action",
            description: "The creature targets one creature it can see within 30 feet. The target must succeed on a Wisdom saving throw (DC = 8 + proficiency + Cha modifier) or become frightened for 1 minute. If the target fails by 5 or more, it is also paralyzed while frightened."
        },
        {
            name: "Command Undead",
            type: "Action",
            description: "The creature targets an allied undead with CR 5 or less it can see within 60 feet and telepathically gives it a command to move or attack. The target uses its reaction to move up to its speed and make one attack.",
            cost: 2
        },
        {
            name: "Regeneration",
            type: "Trait",
            description: "Regains 10 hit points at the start of its turn if it has at least 1 hit point and isn't in sunlight. If the creature takes radiant damage or damage from holy water, this trait doesn't function at the start of its next turn."
        },
        {
            name: "Fade into Shadow",
            type: "Reaction",
            description: "When in dim light or darkness and a creature it can see targets it with an attack, it can use its reaction to take the Hide action.",
            uses: "3/day"
        },
        {
            name: "Shadow Shift",
            type: "Action",
            description: "When in dim light or darkness, the creature can take a bonus action to teleport up to 60 feet to an unoccupied space it can see that is also in dim light or darkness. After doing so, it has advantage on the first melee attack it makes before the end of the turn.",
            uses: "3/day"
        },
        {
            name: "Summon Lesser Undead",
            type: "Action",
            description: "The creature summons 2d6 skeletons, 1d8 zombies, or 1d4 ghouls. A summoned undead appears in an unoccupied space within 60 feet and acts as an ally. It remains for one minute, until it or the summoner is destroyed, or until dismissed.",
            cost: 2,
            uses: "1/day"
        }
    ]
};

// ============================================
// TALENT UTILITY FUNCTIONS
// ============================================

// Get the number of talents a creature can have based on CR
function getTalentCountByCR(cr) {
    if (cr <= 1) return 1;
    if (cr <= 2) return 1;
    if (cr <= 5) return 2;
    if (cr <= 8) return 3;
    if (cr <= 12) return 4;
    if (cr <= 15) return 5;
    if (cr <= 20) return 6;
    if (cr <= 24) return 8;
    return Math.floor(cr / 3) + 1;
}

// Get random talents for a creature type
function getRandomTalents(creatureType, cr, count = null) {
    const availableTalents = monsterTalents[creatureType] || monsterTalents.monstrosity;
    const maxTalents = count || getTalentCountByCR(cr);
    
    // Shuffle and pick talents
    const shuffled = [...availableTalents].sort(() => 0.5 - Math.random());
    const selected = [];
    let totalCost = 0;
    
    for (const talent of shuffled) {
        const cost = talent.cost || 1;
        if (totalCost + cost <= maxTalents) {
            selected.push({...talent});
            totalCost += cost;
        }
        if (totalCost >= maxTalents) break;
    }
    
    return selected;
}

// Get a single random talent for a creature type
function getRandomTalent(creatureType) {
    const availableTalents = monsterTalents[creatureType] || monsterTalents.monstrosity;
    return availableTalents[Math.floor(Math.random() * availableTalents.length)];
}

// Format talent for display
function formatTalentDescription(talent) {
    let desc = talent.description;
    
    // Add recharge info if present
    if (talent.recharge) {
        desc = `(Recharge ${talent.recharge}). ${desc}`;
    }
    
    // Add uses info if present
    if (talent.uses) {
        desc = `(${talent.uses}). ${desc}`;
    }
    
    return desc;
}
