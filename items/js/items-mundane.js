// ============================================
// ITEMS DATABASE - MUNDANE ITEMS (PHB)
// ============================================
// All standard adventuring gear from the Player's Handbook

const mundaneItems = {
    // ============================================
    // ADVENTURING GEAR
    // ============================================
    
    'abacus': {
        name: 'Abacus',
        type: 'adventuring-gear',
        rarity: null,
        weight: 2,
        cost: '2 gp',
        costValue: 200,
        description: 'A calculating tool used for arithmetic.',
        source: 'PHB'
    },
    'acid-vial': {
        name: 'Acid (vial)',
        type: 'adventuring-gear',
        rarity: null,
        weight: 1,
        cost: '25 gp',
        costValue: 2500,
        description: 'As an action, you can splash the contents of this vial onto a creature within 5 feet of you or throw the vial up to 20 feet, shattering it on impact. In either case, make a ranged attack against a creature or object, treating the acid as an improvised weapon. On a hit, the target takes 2d6 acid damage.',
        source: 'PHB'
    },
    'alchemists-fire': {
        name: 'Alchemist\'s Fire (flask)',
        type: 'adventuring-gear',
        rarity: null,
        weight: 1,
        cost: '50 gp',
        costValue: 5000,
        description: 'This sticky, adhesive fluid ignites when exposed to air. As an action, you can throw this flask up to 20 feet, shattering it on impact. Make a ranged attack against a creature or object, treating the alchemist\'s fire as an improvised weapon. On a hit, the target takes 1d4 fire damage at the start of each of its turns. A creature can end this damage by using its action to make a DC 10 Dexterity check to extinguish the flames.',
        source: 'PHB'
    },
    'antitoxin': {
        name: 'Antitoxin (vial)',
        type: 'adventuring-gear',
        rarity: null,
        weight: 0,
        cost: '50 gp',
        costValue: 5000,
        description: 'A creature that drinks this vial of liquid gains advantage on saving throws against poison for 1 hour. It confers no benefit to undead or constructs.',
        source: 'PHB'
    },
    'backpack': {
        name: 'Backpack',
        type: 'container',
        rarity: null,
        weight: 5,
        cost: '2 gp',
        costValue: 200,
        capacity: '1 cubic foot/30 pounds of gear',
        description: 'A backpack can hold one cubic foot or 30 pounds of gear. You can also strap items, such as a bedroll or a coil of rope, to the outside of a backpack.',
        source: 'PHB'
    },
    'ball-bearings': {
        name: 'Ball Bearings (bag of 1,000)',
        type: 'adventuring-gear',
        rarity: null,
        weight: 2,
        cost: '1 gp',
        costValue: 100,
        description: 'As an action, you can spill these tiny metal balls from their pouch to cover a level, square area that is 10 feet on a side. A creature moving across the covered area must succeed on a DC 10 Dexterity saving throw or fall prone. A creature moving through the area at half speed doesn\'t need to make the save.',
        source: 'PHB'
    },
    'barrel': {
        name: 'Barrel',
        type: 'container',
        rarity: null,
        weight: 70,
        cost: '2 gp',
        costValue: 200,
        capacity: '40 gallons liquid, 4 cubic feet solid',
        description: 'A barrel can hold 40 gallons of liquid or 4 cubic feet of solid material.',
        source: 'PHB'
    },
    'basket': {
        name: 'Basket',
        type: 'container',
        rarity: null,
        weight: 2,
        cost: '4 sp',
        costValue: 40,
        capacity: '2 cubic feet/40 pounds of gear',
        description: 'A woven basket for carrying goods.',
        source: 'PHB'
    },
    'bedroll': {
        name: 'Bedroll',
        type: 'adventuring-gear',
        rarity: null,
        weight: 7,
        cost: '1 gp',
        costValue: 100,
        description: 'A portable sleeping bag and pad for camping.',
        source: 'PHB'
    },
    'bell': {
        name: 'Bell',
        type: 'adventuring-gear',
        rarity: null,
        weight: 0,
        cost: '1 gp',
        costValue: 100,
        description: 'A small metal bell that produces a clear tone when rung.',
        source: 'PHB'
    },
    'blanket': {
        name: 'Blanket',
        type: 'adventuring-gear',
        rarity: null,
        weight: 3,
        cost: '5 sp',
        costValue: 50,
        description: 'A thick cloth blanket for warmth.',
        source: 'PHB'
    },
    'block-and-tackle': {
        name: 'Block and Tackle',
        type: 'adventuring-gear',
        rarity: null,
        weight: 5,
        cost: '1 gp',
        costValue: 100,
        description: 'A set of pulleys with a cable threaded through them and a hook to attach to objects. A block and tackle allows you to hoist up to four times the weight you can normally lift.',
        source: 'PHB'
    },
    'book': {
        name: 'Book',
        type: 'adventuring-gear',
        rarity: null,
        weight: 5,
        cost: '25 gp',
        costValue: 2500,
        description: 'A book might contain poetry, historical accounts, information pertaining to a particular field of lore, diagrams and notes on gnomish contraptions, or just about anything else that can be represented using text or pictures.',
        source: 'PHB'
    },
    'bottle-glass': {
        name: 'Bottle, glass',
        type: 'container',
        rarity: null,
        weight: 2,
        cost: '2 gp',
        costValue: 200,
        capacity: '1.5 pints',
        description: 'A glass bottle for holding liquids.',
        source: 'PHB'
    },
    'bucket': {
        name: 'Bucket',
        type: 'container',
        rarity: null,
        weight: 2,
        cost: '5 cp',
        costValue: 5,
        capacity: '3 gallons liquid, 1/2 cubic foot solid',
        description: 'A simple bucket for carrying water or other materials.',
        source: 'PHB'
    },
    'caltrops': {
        name: 'Caltrops (bag of 20)',
        type: 'adventuring-gear',
        rarity: null,
        weight: 2,
        cost: '1 gp',
        costValue: 100,
        description: 'As an action, you can spread a bag of caltrops to cover a square area that is 5 feet on a side. Any creature that enters the area must succeed on a DC 15 Dexterity saving throw or stop moving this turn and take 1 piercing damage. Taking this damage reduces the creature\'s walking speed by 10 feet until the creature regains at least 1 hit point. A creature moving through the area at half speed doesn\'t need to make the save.',
        source: 'PHB'
    },
    'candle': {
        name: 'Candle',
        type: 'adventuring-gear',
        rarity: null,
        weight: 0,
        cost: '1 cp',
        costValue: 1,
        description: 'For 1 hour, a candle sheds bright light in a 5-foot radius and dim light for an additional 5 feet.',
        source: 'PHB'
    },
    'case-crossbow-bolt': {
        name: 'Case, crossbow bolt',
        type: 'container',
        rarity: null,
        weight: 1,
        cost: '1 gp',
        costValue: 100,
        capacity: '20 crossbow bolts',
        description: 'This wooden case can hold up to twenty crossbow bolts.',
        source: 'PHB'
    },
    'case-map-scroll': {
        name: 'Case, map or scroll',
        type: 'container',
        rarity: null,
        weight: 1,
        cost: '1 gp',
        costValue: 100,
        capacity: '10 rolled-up sheets of paper or 5 rolled-up sheets of parchment',
        description: 'This cylindrical leather case can hold up to ten rolled-up sheets of paper or five rolled-up sheets of parchment.',
        source: 'PHB'
    },
    'chain-10ft': {
        name: 'Chain (10 feet)',
        type: 'adventuring-gear',
        rarity: null,
        weight: 10,
        cost: '5 gp',
        costValue: 500,
        description: 'A chain has 10 hit points. It can be burst with a successful DC 20 Strength check.',
        source: 'PHB'
    },
    'chalk': {
        name: 'Chalk (1 piece)',
        type: 'adventuring-gear',
        rarity: null,
        weight: 0,
        cost: '1 cp',
        costValue: 1,
        description: 'A piece of chalk for marking surfaces.',
        source: 'PHB'
    },
    'chest': {
        name: 'Chest',
        type: 'container',
        rarity: null,
        weight: 25,
        cost: '5 gp',
        costValue: 500,
        capacity: '12 cubic feet/300 pounds of gear',
        description: 'A wooden chest for storing valuables and equipment.',
        source: 'PHB'
    },
    'climbers-kit': {
        name: 'Climber\'s Kit',
        type: 'adventuring-gear',
        rarity: null,
        weight: 12,
        cost: '25 gp',
        costValue: 2500,
        description: 'A climber\'s kit includes special pitons, boot tips, gloves, and a harness. You can use the climber\'s kit as an action to anchor yourself; when you do, you can\'t fall more than 25 feet from the point where you anchored yourself, and you can\'t climb more than 25 feet away from that point without undoing the anchor.',
        source: 'PHB'
    },
    'clothes-common': {
        name: 'Clothes, common',
        type: 'clothing',
        rarity: null,
        weight: 3,
        cost: '5 sp',
        costValue: 50,
        description: 'Simple, functional clothing worn by commoners.',
        source: 'PHB'
    },
    'clothes-costume': {
        name: 'Clothes, costume',
        type: 'clothing',
        rarity: null,
        weight: 4,
        cost: '5 gp',
        costValue: 500,
        description: 'Clothing for disguise or performance purposes.',
        source: 'PHB'
    },
    'clothes-fine': {
        name: 'Clothes, fine',
        type: 'clothing',
        rarity: null,
        weight: 6,
        cost: '15 gp',
        costValue: 1500,
        description: 'Elegant clothing suitable for nobility or formal occasions.',
        source: 'PHB'
    },
    'clothes-travelers': {
        name: 'Clothes, traveler\'s',
        type: 'clothing',
        rarity: null,
        weight: 4,
        cost: '2 gp',
        costValue: 200,
        description: 'Durable clothing designed for travel and outdoor conditions.',
        source: 'PHB'
    },
    'component-pouch': {
        name: 'Component Pouch',
        type: 'adventuring-gear',
        rarity: null,
        weight: 2,
        cost: '25 gp',
        costValue: 2500,
        description: 'A component pouch is a small, watertight leather belt pouch that has compartments to hold all the material components and other special items you need to cast your spells, except for those components that have a specific cost (as indicated in a spell\'s description).',
        source: 'PHB'
    },
    'crowbar': {
        name: 'Crowbar',
        type: 'adventuring-gear',
        rarity: null,
        weight: 5,
        cost: '2 gp',
        costValue: 200,
        description: 'Using a crowbar grants advantage to Strength checks where the crowbar\'s leverage can be applied.',
        source: 'PHB'
    },
    'fishing-tackle': {
        name: 'Fishing Tackle',
        type: 'adventuring-gear',
        rarity: null,
        weight: 4,
        cost: '1 gp',
        costValue: 100,
        description: 'This kit includes a wooden rod, silken line, corkwood bobbers, steel hooks, lead sinkers, velvet lures, and narrow netting.',
        source: 'PHB'
    },
    'flask': {
        name: 'Flask or Tankard',
        type: 'container',
        rarity: null,
        weight: 1,
        cost: '2 cp',
        costValue: 2,
        capacity: '1 pint',
        description: 'A simple flask or drinking vessel.',
        source: 'PHB'
    },
    'grappling-hook': {
        name: 'Grappling Hook',
        type: 'adventuring-gear',
        rarity: null,
        weight: 4,
        cost: '2 gp',
        costValue: 200,
        description: 'A metal hook with multiple prongs, used with rope for climbing.',
        source: 'PHB'
    },
    'hammer': {
        name: 'Hammer',
        type: 'adventuring-gear',
        rarity: null,
        weight: 3,
        cost: '1 gp',
        costValue: 100,
        description: 'A basic hammer for driving pitons and other tasks.',
        source: 'PHB'
    },
    'hammer-sledge': {
        name: 'Hammer, sledge',
        type: 'adventuring-gear',
        rarity: null,
        weight: 10,
        cost: '2 gp',
        costValue: 200,
        description: 'A heavy hammer used for breaking objects.',
        source: 'PHB'
    },
    'healers-kit': {
        name: 'Healer\'s Kit',
        type: 'adventuring-gear',
        rarity: null,
        weight: 3,
        cost: '5 gp',
        costValue: 500,
        description: 'This kit is a leather pouch containing bandages, salves, and splints. The kit has ten uses. As an action, you can expend one use of the kit to stabilize a creature that has 0 hit points, without needing to make a Wisdom (Medicine) check.',
        source: 'PHB'
    },
    'holy-water': {
        name: 'Holy Water (flask)',
        type: 'adventuring-gear',
        rarity: null,
        weight: 1,
        cost: '25 gp',
        costValue: 2500,
        description: 'As an action, you can splash the contents of this flask onto a creature within 5 feet of you or throw it up to 20 feet, shattering it on impact. In either case, make a ranged attack against a target creature, treating the holy water as an improvised weapon. If the target is a fiend or undead, it takes 2d6 radiant damage.',
        source: 'PHB'
    },
    'hourglass': {
        name: 'Hourglass',
        type: 'adventuring-gear',
        rarity: null,
        weight: 1,
        cost: '25 gp',
        costValue: 2500,
        description: 'A glass device for measuring time.',
        source: 'PHB'
    },
    'hunting-trap': {
        name: 'Hunting Trap',
        type: 'adventuring-gear',
        rarity: null,
        weight: 25,
        cost: '5 gp',
        costValue: 500,
        description: 'When you use your action to set it, this trap forms a saw-toothed steel ring that snaps shut when a creature steps on a pressure plate in the center. The trap is affixed by a heavy chain to an immobile object, such as a tree or a spike driven into the ground. A creature that steps on the plate must succeed on a DC 13 Dexterity saving throw or take 1d4 piercing damage and stop moving. Thereafter, until the creature breaks free of the trap, its movement is limited by the length of the chain (typically 3 feet long). A creature can use its action to make a DC 13 Strength check, freeing itself or another creature within its reach on a success. Each failed check deals 1 piercing damage to the trapped creature.',
        source: 'PHB'
    },
    'ink': {
        name: 'Ink (1 ounce bottle)',
        type: 'adventuring-gear',
        rarity: null,
        weight: 0,
        cost: '10 gp',
        costValue: 1000,
        description: 'A small bottle of writing ink.',
        source: 'PHB'
    },
    'ink-pen': {
        name: 'Ink Pen',
        type: 'adventuring-gear',
        rarity: null,
        weight: 0,
        cost: '2 cp',
        costValue: 2,
        description: 'A quill pen for writing.',
        source: 'PHB'
    },
    'jug': {
        name: 'Jug or Pitcher',
        type: 'container',
        rarity: null,
        weight: 4,
        cost: '2 cp',
        costValue: 2,
        capacity: '1 gallon',
        description: 'A ceramic jug for holding liquids.',
        source: 'PHB'
    },
    'ladder-10ft': {
        name: 'Ladder (10-foot)',
        type: 'adventuring-gear',
        rarity: null,
        weight: 25,
        cost: '1 sp',
        costValue: 10,
        description: 'A wooden ladder 10 feet in length.',
        source: 'PHB'
    },
    'lamp': {
        name: 'Lamp',
        type: 'adventuring-gear',
        rarity: null,
        weight: 1,
        cost: '5 sp',
        costValue: 50,
        description: 'A lamp casts bright light in a 15-foot radius and dim light for an additional 30 feet. Once lit, it burns for 6 hours on a flask (1 pint) of oil.',
        source: 'PHB'
    },
    'lantern-bullseye': {
        name: 'Lantern, bullseye',
        type: 'adventuring-gear',
        rarity: null,
        weight: 2,
        cost: '10 gp',
        costValue: 1000,
        description: 'A bullseye lantern casts bright light in a 60-foot cone and dim light for an additional 60 feet. Once lit, it burns for 6 hours on a flask (1 pint) of oil.',
        source: 'PHB'
    },
    'lantern-hooded': {
        name: 'Lantern, hooded',
        type: 'adventuring-gear',
        rarity: null,
        weight: 2,
        cost: '5 gp',
        costValue: 500,
        description: 'A hooded lantern casts bright light in a 30-foot radius and dim light for an additional 30 feet. Once lit, it burns for 6 hours on a flask (1 pint) of oil. As an action, you can lower the hood, reducing the light to dim light in a 5-foot radius.',
        source: 'PHB'
    },
    'lock': {
        name: 'Lock',
        type: 'adventuring-gear',
        rarity: null,
        weight: 1,
        cost: '10 gp',
        costValue: 1000,
        description: 'A key is provided with the lock. Without the key, a creature proficient with thieves\' tools can pick this lock with a successful DC 15 Dexterity check. Your DM may decide that better locks are available for higher prices.',
        source: 'PHB'
    },
    'magnifying-glass': {
        name: 'Magnifying Glass',
        type: 'adventuring-gear',
        rarity: null,
        weight: 0,
        cost: '100 gp',
        costValue: 10000,
        description: 'This lens allows a closer look at small objects. It is also useful as a substitute for flint and steel when starting fires. Lighting a fire with a magnifying glass requires light as bright as sunlight to focus, tinder to ignite, and about 5 minutes for the fire to ignite. A magnifying glass grants advantage on any ability check made to appraise or inspect an item that is small or highly detailed.',
        source: 'PHB'
    },
    'manacles': {
        name: 'Manacles',
        type: 'adventuring-gear',
        rarity: null,
        weight: 6,
        cost: '2 gp',
        costValue: 200,
        description: 'These metal restraints can bind a Small or Medium creature. Escaping the manacles requires a successful DC 20 Dexterity check. Breaking them requires a successful DC 20 Strength check. Each set of manacles comes with one key. Without the key, a creature proficient with thieves\' tools can pick the manacles\' lock with a successful DC 15 Dexterity check. Manacles have 15 hit points.',
        source: 'PHB'
    },
    'mess-kit': {
        name: 'Mess Kit',
        type: 'adventuring-gear',
        rarity: null,
        weight: 1,
        cost: '2 sp',
        costValue: 20,
        description: 'This tin box contains a cup and simple cutlery. The box clamps together, and one side can be used as a cooking pan and the other as a plate or shallow bowl.',
        source: 'PHB'
    },
    'mirror-steel': {
        name: 'Mirror, steel',
        type: 'adventuring-gear',
        rarity: null,
        weight: 0.5,
        cost: '5 gp',
        costValue: 500,
        description: 'A small, polished steel mirror.',
        source: 'PHB'
    },
    'oil-flask': {
        name: 'Oil (flask)',
        type: 'adventuring-gear',
        rarity: null,
        weight: 1,
        cost: '1 sp',
        costValue: 10,
        description: 'Oil usually comes in a clay flask that holds 1 pint. As an action, you can splash the oil in this flask onto a creature within 5 feet of you or throw it up to 20 feet, shattering it on impact. Make a ranged attack against a target creature or object, treating the oil as an improvised weapon. On a hit, the target is covered in oil. If the target takes any fire damage before the oil dries (after 1 minute), the target takes an additional 5 fire damage from the burning oil. You can also pour a flask of oil on the ground to cover a 5-foot-square area, provided that the surface is level. If lit, the oil burns for 2 rounds and deals 5 fire damage to any creature that enters the area or ends its turn in the area. A creature can take this damage only once per turn.',
        source: 'PHB'
    },
    'paper': {
        name: 'Paper (one sheet)',
        type: 'adventuring-gear',
        rarity: null,
        weight: 0,
        cost: '2 sp',
        costValue: 20,
        description: 'A single sheet of paper for writing.',
        source: 'PHB'
    },
    'parchment': {
        name: 'Parchment (one sheet)',
        type: 'adventuring-gear',
        rarity: null,
        weight: 0,
        cost: '1 sp',
        costValue: 10,
        description: 'A single sheet of parchment made from animal skin.',
        source: 'PHB'
    },
    'perfume-vial': {
        name: 'Perfume (vial)',
        type: 'adventuring-gear',
        rarity: null,
        weight: 0,
        cost: '5 gp',
        costValue: 500,
        description: 'A small vial of fragrant liquid.',
        source: 'PHB'
    },
    'pick-miners': {
        name: 'Pick, miner\'s',
        type: 'adventuring-gear',
        rarity: null,
        weight: 10,
        cost: '2 gp',
        costValue: 200,
        description: 'A pick used for mining and breaking rock.',
        source: 'PHB'
    },
    'piton': {
        name: 'Piton',
        type: 'adventuring-gear',
        rarity: null,
        weight: 0.25,
        cost: '5 cp',
        costValue: 5,
        description: 'A metal spike for climbing.',
        source: 'PHB'
    },
    'poison-basic': {
        name: 'Poison, basic (vial)',
        type: 'adventuring-gear',
        rarity: null,
        weight: 0,
        cost: '100 gp',
        costValue: 10000,
        description: 'You can use the poison in this vial to coat one slashing or piercing weapon or up to three pieces of ammunition. Applying the poison takes an action. A creature hit by the poisoned weapon or ammunition must make a DC 10 Constitution saving throw or take 1d4 poison damage. Once applied, the poison retains potency for 1 minute before drying.',
        source: 'PHB'
    },
    'pole-10ft': {
        name: 'Pole (10-foot)',
        type: 'adventuring-gear',
        rarity: null,
        weight: 7,
        cost: '5 cp',
        costValue: 5,
        description: 'A 10-foot wooden pole useful for probing ahead or various tasks.',
        source: 'PHB'
    },
    'pot-iron': {
        name: 'Pot, iron',
        type: 'container',
        rarity: null,
        weight: 10,
        cost: '2 gp',
        costValue: 200,
        capacity: '1 gallon',
        description: 'A heavy iron pot for cooking.',
        source: 'PHB'
    },
    'potion-healing': {
        name: 'Potion of Healing',
        type: 'potion',
        rarity: 'common',
        weight: 0.5,
        cost: '50 gp',
        costValue: 5000,
        consumable: true,
        effect: 'You regain 2d4 + 2 hit points when you drink this potion.',
        description: 'You regain 2d4 + 2 hit points when you drink this potion. The potion\'s red liquid glimmers when agitated.',
        source: 'PHB'
    },
    'pouch': {
        name: 'Pouch',
        type: 'container',
        rarity: null,
        weight: 1,
        cost: '5 sp',
        costValue: 50,
        capacity: '1/5 cubic foot/6 pounds of gear',
        description: 'A cloth or leather pouch can hold up to 20 sling bullets or 50 blowgun needles, among other things. A compartmentalized pouch for holding spell components is called a component pouch.',
        source: 'PHB'
    },
    'quiver': {
        name: 'Quiver',
        type: 'container',
        rarity: null,
        weight: 1,
        cost: '1 gp',
        costValue: 100,
        capacity: '20 arrows',
        description: 'A quiver can hold up to 20 arrows.',
        source: 'PHB'
    },
    'ram-portable': {
        name: 'Ram, portable',
        type: 'adventuring-gear',
        rarity: null,
        weight: 35,
        cost: '4 gp',
        costValue: 400,
        description: 'You can use a portable ram to break down doors. When doing so, you gain a +4 bonus on the Strength check. One other character can help you use the ram, giving you advantage on this check.',
        source: 'PHB'
    },
    'rations': {
        name: 'Rations (1 day)',
        type: 'food-drink',
        rarity: null,
        weight: 2,
        cost: '5 sp',
        costValue: 50,
        description: 'Rations consist of dry foods suitable for extended travel, including jerky, dried fruit, hardtack, and nuts.',
        source: 'PHB'
    },
    'robes': {
        name: 'Robes',
        type: 'clothing',
        rarity: null,
        weight: 4,
        cost: '1 gp',
        costValue: 100,
        description: 'A simple robe, often worn by scholars and spellcasters.',
        source: 'PHB'
    },
    'rope-hempen': {
        name: 'Rope, hempen (50 feet)',
        type: 'adventuring-gear',
        rarity: null,
        weight: 10,
        cost: '1 gp',
        costValue: 100,
        description: 'Rope, whether made of hemp or silk, has 2 hit points and can be burst with a DC 17 Strength check.',
        source: 'PHB'
    },
    'rope-silk': {
        name: 'Rope, silk (50 feet)',
        type: 'adventuring-gear',
        rarity: null,
        weight: 5,
        cost: '10 gp',
        costValue: 1000,
        description: 'Rope, whether made of hemp or silk, has 2 hit points and can be burst with a DC 17 Strength check.',
        source: 'PHB'
    },
    'sack': {
        name: 'Sack',
        type: 'container',
        rarity: null,
        weight: 0.5,
        cost: '1 cp',
        costValue: 1,
        capacity: '1 cubic foot/30 pounds of gear',
        description: 'A simple cloth sack.',
        source: 'PHB'
    },
    'scale-merchants': {
        name: 'Scale, merchant\'s',
        type: 'adventuring-gear',
        rarity: null,
        weight: 3,
        cost: '5 gp',
        costValue: 500,
        description: 'A scale includes a small balance, pans, and a suitable assortment of weights up to 2 pounds. With it, you can measure the exact weight of small objects, such as raw precious metals or trade goods, to help determine their worth.',
        source: 'PHB'
    },
    'sealing-wax': {
        name: 'Sealing Wax',
        type: 'adventuring-gear',
        rarity: null,
        weight: 0,
        cost: '5 sp',
        costValue: 50,
        description: 'A stick of wax for sealing letters and documents.',
        source: 'PHB'
    },
    'shovel': {
        name: 'Shovel',
        type: 'adventuring-gear',
        rarity: null,
        weight: 5,
        cost: '2 gp',
        costValue: 200,
        description: 'A basic shovel for digging.',
        source: 'PHB'
    },
    'signal-whistle': {
        name: 'Signal Whistle',
        type: 'adventuring-gear',
        rarity: null,
        weight: 0,
        cost: '5 cp',
        costValue: 5,
        description: 'A small whistle that produces a loud, clear tone.',
        source: 'PHB'
    },
    'signet-ring': {
        name: 'Signet Ring',
        type: 'adventuring-gear',
        rarity: null,
        weight: 0,
        cost: '5 gp',
        costValue: 500,
        description: 'A ring bearing a personal seal or emblem.',
        source: 'PHB'
    },
    'soap': {
        name: 'Soap',
        type: 'adventuring-gear',
        rarity: null,
        weight: 0,
        cost: '2 cp',
        costValue: 2,
        description: 'A bar of soap for cleaning.',
        source: 'PHB'
    },
    'spellbook': {
        name: 'Spellbook',
        type: 'adventuring-gear',
        rarity: null,
        weight: 3,
        cost: '50 gp',
        costValue: 5000,
        description: 'Essential for wizards, a spellbook is a leather-bound tome with 100 blank vellum pages suitable for recording spells.',
        source: 'PHB'
    },
    'spike-iron': {
        name: 'Spikes, iron (10)',
        type: 'adventuring-gear',
        rarity: null,
        weight: 5,
        cost: '1 gp',
        costValue: 100,
        description: 'Iron spikes that can be driven into wood or stone.',
        source: 'PHB'
    },
    'spyglass': {
        name: 'Spyglass',
        type: 'adventuring-gear',
        rarity: null,
        weight: 1,
        cost: '1,000 gp',
        costValue: 100000,
        description: 'Objects viewed through a spyglass are magnified to twice their size.',
        source: 'PHB'
    },
    'tent-two-person': {
        name: 'Tent, two-person',
        type: 'adventuring-gear',
        rarity: null,
        weight: 20,
        cost: '2 gp',
        costValue: 200,
        description: 'A simple and portable canvas shelter.',
        source: 'PHB'
    },
    'tinderbox': {
        name: 'Tinderbox',
        type: 'adventuring-gear',
        rarity: null,
        weight: 1,
        cost: '5 sp',
        costValue: 50,
        description: 'This small container holds flint, fire steel, and tinder (usually dry cloth soaked in light oil) used to kindle a fire. Using it to light a torch—or anything else with abundant, exposed fuel—takes an action. Lighting any other fire takes 1 minute.',
        source: 'PHB'
    },
    'torch': {
        name: 'Torch',
        type: 'adventuring-gear',
        rarity: null,
        weight: 1,
        cost: '1 cp',
        costValue: 1,
        description: 'A torch burns for 1 hour, providing bright light in a 20-foot radius and dim light for an additional 20 feet. If you make a melee attack with a burning torch and hit, it deals 1 fire damage.',
        source: 'PHB'
    },
    'vial': {
        name: 'Vial',
        type: 'container',
        rarity: null,
        weight: 0,
        cost: '1 gp',
        costValue: 100,
        capacity: '4 ounces liquid',
        description: 'A small glass container for liquids.',
        source: 'PHB'
    },
    'waterskin': {
        name: 'Waterskin',
        type: 'container',
        rarity: null,
        weight: 5,
        cost: '2 sp',
        costValue: 20,
        capacity: '4 pints liquid',
        description: 'A leather pouch for carrying water. Full weight is 5 lbs.',
        source: 'PHB'
    },
    'whetstone': {
        name: 'Whetstone',
        type: 'adventuring-gear',
        rarity: null,
        weight: 1,
        cost: '1 cp',
        costValue: 1,
        description: 'A stone used for sharpening blades.',
        source: 'PHB'
    },

    // ============================================
    // AMMUNITION
    // ============================================
    
    'arrows': {
        name: 'Arrows (20)',
        type: 'ammunition',
        rarity: null,
        weight: 1,
        cost: '1 gp',
        costValue: 100,
        description: 'A bundle of twenty arrows for bows.',
        source: 'PHB'
    },
    'blowgun-needles': {
        name: 'Blowgun Needles (50)',
        type: 'ammunition',
        rarity: null,
        weight: 1,
        cost: '1 gp',
        costValue: 100,
        description: 'Fifty small needles for a blowgun.',
        source: 'PHB'
    },
    'crossbow-bolts': {
        name: 'Crossbow Bolts (20)',
        type: 'ammunition',
        rarity: null,
        weight: 1.5,
        cost: '1 gp',
        costValue: 100,
        description: 'A bundle of twenty bolts for crossbows.',
        source: 'PHB'
    },
    'sling-bullets': {
        name: 'Sling Bullets (20)',
        type: 'ammunition',
        rarity: null,
        weight: 1.5,
        cost: '4 cp',
        costValue: 4,
        description: 'Twenty small bullets for a sling.',
        source: 'PHB'
    },

    // ============================================
    // ARCANE FOCI
    // ============================================
    
    'crystal-arcane': {
        name: 'Crystal',
        type: 'arcane-focus',
        rarity: null,
        weight: 1,
        cost: '10 gp',
        costValue: 1000,
        description: 'An arcane focus is a special item designed to channel the power of arcane spells. A sorcerer, warlock, or wizard can use such an item as a spellcasting focus.',
        source: 'PHB'
    },
    'orb-arcane': {
        name: 'Orb',
        type: 'arcane-focus',
        rarity: null,
        weight: 3,
        cost: '20 gp',
        costValue: 2000,
        description: 'An arcane focus is a special item designed to channel the power of arcane spells. A sorcerer, warlock, or wizard can use such an item as a spellcasting focus.',
        source: 'PHB'
    },
    'rod-arcane': {
        name: 'Rod',
        type: 'arcane-focus',
        rarity: null,
        weight: 2,
        cost: '10 gp',
        costValue: 1000,
        description: 'An arcane focus is a special item designed to channel the power of arcane spells. A sorcerer, warlock, or wizard can use such an item as a spellcasting focus.',
        source: 'PHB'
    },
    'staff-arcane': {
        name: 'Staff',
        type: 'arcane-focus',
        rarity: null,
        weight: 4,
        cost: '5 gp',
        costValue: 500,
        description: 'An arcane focus is a special item designed to channel the power of arcane spells. A sorcerer, warlock, or wizard can use such an item as a spellcasting focus.',
        source: 'PHB'
    },
    'wand-arcane': {
        name: 'Wand',
        type: 'arcane-focus',
        rarity: null,
        weight: 1,
        cost: '10 gp',
        costValue: 1000,
        description: 'An arcane focus is a special item designed to channel the power of arcane spells. A sorcerer, warlock, or wizard can use such an item as a spellcasting focus.',
        source: 'PHB'
    },

    // ============================================
    // DRUIDIC FOCI
    // ============================================
    
    'sprig-of-mistletoe': {
        name: 'Sprig of Mistletoe',
        type: 'druidic-focus',
        rarity: null,
        weight: 0,
        cost: '1 gp',
        costValue: 100,
        description: 'A druidic focus might be a sprig of mistletoe or holly, a wand or scepter made of yew or another special wood, a staff drawn whole out of a living tree, or a totem object incorporating feathers, fur, bones, and teeth from sacred animals. A druid can use such an object as a spellcasting focus.',
        source: 'PHB'
    },
    'totem': {
        name: 'Totem',
        type: 'druidic-focus',
        rarity: null,
        weight: 0,
        cost: '1 gp',
        costValue: 100,
        description: 'A totem object incorporating feathers, fur, bones, and teeth from sacred animals. A druid can use such an object as a spellcasting focus.',
        source: 'PHB'
    },
    'wooden-staff': {
        name: 'Wooden Staff',
        type: 'druidic-focus',
        rarity: null,
        weight: 4,
        cost: '5 gp',
        costValue: 500,
        description: 'A staff drawn whole out of a living tree. A druid can use such an object as a spellcasting focus.',
        source: 'PHB'
    },
    'yew-wand': {
        name: 'Yew Wand',
        type: 'druidic-focus',
        rarity: null,
        weight: 1,
        cost: '10 gp',
        costValue: 1000,
        description: 'A wand made of yew or another special wood. A druid can use such an object as a spellcasting focus.',
        source: 'PHB'
    },

    // ============================================
    // HOLY SYMBOLS
    // ============================================
    
    'amulet-holy': {
        name: 'Amulet (holy symbol)',
        type: 'holy-symbol',
        rarity: null,
        weight: 1,
        cost: '5 gp',
        costValue: 500,
        description: 'A holy symbol is a representation of a god or pantheon. A cleric or paladin can use a holy symbol as a spellcasting focus. To use the symbol in this way, the caster must hold it in hand, wear it visibly, or bear it on a shield.',
        source: 'PHB'
    },
    'emblem-holy': {
        name: 'Emblem (holy symbol)',
        type: 'holy-symbol',
        rarity: null,
        weight: 0,
        cost: '5 gp',
        costValue: 500,
        description: 'A holy symbol is a representation of a god or pantheon. An emblem might be worn on clothing or armor, or borne on a shield.',
        source: 'PHB'
    },
    'reliquary-holy': {
        name: 'Reliquary (holy symbol)',
        type: 'holy-symbol',
        rarity: null,
        weight: 2,
        cost: '5 gp',
        costValue: 500,
        description: 'A holy symbol is a representation of a god or pantheon. A reliquary is a tiny box that holds a fragment of a sacred relic.',
        source: 'PHB'
    }
};
