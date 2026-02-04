// ============================================
// ITEMS DATABASE - ARMOR (PHB)
// ============================================
// All armor from the Player's Handbook

const armorItems = {
    // ============================================
    // LIGHT ARMOR
    // ============================================
    
    'padded-armor': {
        name: 'Padded Armor',
        type: 'armor',
        subtype: 'light',
        rarity: null,
        weight: 8,
        cost: '5 gp',
        costValue: 500,
        ac: 11,
        acBonus: 0,
        strengthReq: 0,
        stealthDisadvantage: true,
        description: 'Padded armor consists of quilted layers of cloth and batting.',
        source: 'PHB'
    },
    'leather-armor': {
        name: 'Leather Armor',
        type: 'armor',
        subtype: 'light',
        rarity: null,
        weight: 10,
        cost: '10 gp',
        costValue: 1000,
        ac: 11,
        acBonus: 0,
        strengthReq: 0,
        stealthDisadvantage: false,
        description: 'The breastplate and shoulder protectors of this armor are made of leather that has been stiffened by being boiled in oil. The rest of the armor is made of softer and more flexible materials.',
        source: 'PHB'
    },
    'studded-leather-armor': {
        name: 'Studded Leather Armor',
        type: 'armor',
        subtype: 'light',
        rarity: null,
        weight: 13,
        cost: '45 gp',
        costValue: 4500,
        ac: 12,
        acBonus: 0,
        strengthReq: 0,
        stealthDisadvantage: false,
        description: 'Made from tough but flexible leather, studded leather is reinforced with close-set rivets or spikes.',
        source: 'PHB'
    },

    // ============================================
    // MEDIUM ARMOR
    // ============================================
    
    'hide-armor': {
        name: 'Hide Armor',
        type: 'armor',
        subtype: 'medium',
        rarity: null,
        weight: 12,
        cost: '10 gp',
        costValue: 1000,
        ac: 12,
        acBonus: 0,
        strengthReq: 0,
        stealthDisadvantage: false,
        maxDex: 2,
        description: 'This crude armor consists of thick furs and pelts. It is commonly worn by barbarian tribes, evil humanoids, and other folk who lack access to the tools and materials needed to create better armor.',
        source: 'PHB'
    },
    'chain-shirt': {
        name: 'Chain Shirt',
        type: 'armor',
        subtype: 'medium',
        rarity: null,
        weight: 20,
        cost: '50 gp',
        costValue: 5000,
        ac: 13,
        acBonus: 0,
        strengthReq: 0,
        stealthDisadvantage: false,
        maxDex: 2,
        description: 'Made of interlocking metal rings, a chain shirt is worn between layers of clothing or leather. This armor offers modest protection to the wearer\'s upper body and allows the sound of the rings rubbing against one another to be muffled by outer layers.',
        source: 'PHB'
    },
    'scale-mail': {
        name: 'Scale Mail',
        type: 'armor',
        subtype: 'medium',
        rarity: null,
        weight: 45,
        cost: '50 gp',
        costValue: 5000,
        ac: 14,
        acBonus: 0,
        strengthReq: 0,
        stealthDisadvantage: true,
        maxDex: 2,
        description: 'This armor consists of a coat and leggings (and perhaps a separate skirt) of leather covered with overlapping pieces of metal, much like the scales of a fish. The suit includes gauntlets.',
        source: 'PHB'
    },
    'breastplate': {
        name: 'Breastplate',
        type: 'armor',
        subtype: 'medium',
        rarity: null,
        weight: 20,
        cost: '400 gp',
        costValue: 40000,
        ac: 14,
        acBonus: 0,
        strengthReq: 0,
        stealthDisadvantage: false,
        maxDex: 2,
        description: 'This armor consists of a fitted metal chest piece worn with supple leather. Although it leaves the legs and arms relatively unprotected, this armor provides good protection for the wearer\'s vital organs while leaving the wearer relatively unencumbered.',
        source: 'PHB'
    },
    'half-plate': {
        name: 'Half Plate',
        type: 'armor',
        subtype: 'medium',
        rarity: null,
        weight: 40,
        cost: '750 gp',
        costValue: 75000,
        ac: 15,
        acBonus: 0,
        strengthReq: 0,
        stealthDisadvantage: true,
        maxDex: 2,
        description: 'Half plate consists of shaped metal plates that cover most of the wearer\'s body. It does not include leg protection beyond simple greaves that are attached with leather straps.',
        source: 'PHB'
    },

    // ============================================
    // HEAVY ARMOR
    // ============================================
    
    'ring-mail': {
        name: 'Ring Mail',
        type: 'armor',
        subtype: 'heavy',
        rarity: null,
        weight: 40,
        cost: '30 gp',
        costValue: 3000,
        ac: 14,
        acBonus: 0,
        strengthReq: 0,
        stealthDisadvantage: true,
        maxDex: 0,
        description: 'This armor is leather armor with heavy rings sewn into it. The rings help reinforce the armor against blows from swords and axes. Ring mail is inferior to chain mail, and it\'s usually worn only by those who can\'t afford better armor.',
        source: 'PHB'
    },
    'chain-mail': {
        name: 'Chain Mail',
        type: 'armor',
        subtype: 'heavy',
        rarity: null,
        weight: 55,
        cost: '75 gp',
        costValue: 7500,
        ac: 16,
        acBonus: 0,
        strengthReq: 13,
        stealthDisadvantage: true,
        maxDex: 0,
        description: 'Made of interlocking metal rings, chain mail includes a layer of quilted fabric worn underneath the mail to prevent chafing and to cushion the impact of blows. The suit includes gauntlets.',
        source: 'PHB'
    },
    'splint-armor': {
        name: 'Splint Armor',
        type: 'armor',
        subtype: 'heavy',
        rarity: null,
        weight: 60,
        cost: '200 gp',
        costValue: 20000,
        ac: 17,
        acBonus: 0,
        strengthReq: 15,
        stealthDisadvantage: true,
        maxDex: 0,
        description: 'This armor is made of narrow vertical strips of metal riveted to a backing of leather that is worn over cloth padding. Flexible chain mail protects the joints.',
        source: 'PHB'
    },
    'plate-armor': {
        name: 'Plate Armor',
        type: 'armor',
        subtype: 'heavy',
        rarity: null,
        weight: 65,
        cost: '1,500 gp',
        costValue: 150000,
        ac: 18,
        acBonus: 0,
        strengthReq: 15,
        stealthDisadvantage: true,
        maxDex: 0,
        description: 'Plate consists of shaped, interlocking metal plates to cover the entire body. A suit of plate includes gauntlets, heavy leather boots, a visored helmet, and thick layers of padding underneath the armor. Buckles and straps distribute the weight over the body.',
        source: 'PHB'
    },

    // ============================================
    // SHIELDS
    // ============================================
    
    'shield': {
        name: 'Shield',
        type: 'shield',
        subtype: 'shield',
        rarity: null,
        weight: 6,
        cost: '10 gp',
        costValue: 1000,
        ac: 0,
        acBonus: 2,
        strengthReq: 0,
        stealthDisadvantage: false,
        description: 'A shield is made from wood or metal and is carried in one hand. Wielding a shield increases your Armor Class by 2. You can benefit from only one shield at a time.',
        source: 'PHB'
    }
};

// ============================================
// BARDING (Armor for Mounts)
// ============================================

const bardingItems = {
    'barding-padded': {
        name: 'Padded Barding',
        type: 'armor',
        subtype: 'barding',
        rarity: null,
        weight: 32,
        cost: '20 gp',
        costValue: 2000,
        ac: 11,
        description: 'Barding is armor designed to protect an animal\'s head, neck, chest, and body. Any type of armor can be purchased as barding. The cost is four times the equivalent armor made for humanoids, and it weighs twice as much.',
        source: 'PHB'
    },
    'barding-leather': {
        name: 'Leather Barding',
        type: 'armor',
        subtype: 'barding',
        rarity: null,
        weight: 20,
        cost: '40 gp',
        costValue: 4000,
        ac: 11,
        description: 'Barding is armor designed to protect an animal\'s head, neck, chest, and body.',
        source: 'PHB'
    },
    'barding-studded-leather': {
        name: 'Studded Leather Barding',
        type: 'armor',
        subtype: 'barding',
        rarity: null,
        weight: 26,
        cost: '180 gp',
        costValue: 18000,
        ac: 12,
        description: 'Barding is armor designed to protect an animal\'s head, neck, chest, and body.',
        source: 'PHB'
    },
    'barding-hide': {
        name: 'Hide Barding',
        type: 'armor',
        subtype: 'barding',
        rarity: null,
        weight: 24,
        cost: '40 gp',
        costValue: 4000,
        ac: 12,
        description: 'Barding is armor designed to protect an animal\'s head, neck, chest, and body.',
        source: 'PHB'
    },
    'barding-chain-shirt': {
        name: 'Chain Shirt Barding',
        type: 'armor',
        subtype: 'barding',
        rarity: null,
        weight: 40,
        cost: '200 gp',
        costValue: 20000,
        ac: 13,
        description: 'Barding is armor designed to protect an animal\'s head, neck, chest, and body.',
        source: 'PHB'
    },
    'barding-scale-mail': {
        name: 'Scale Mail Barding',
        type: 'armor',
        subtype: 'barding',
        rarity: null,
        weight: 90,
        cost: '200 gp',
        costValue: 20000,
        ac: 14,
        description: 'Barding is armor designed to protect an animal\'s head, neck, chest, and body.',
        source: 'PHB'
    },
    'barding-breastplate': {
        name: 'Breastplate Barding',
        type: 'armor',
        subtype: 'barding',
        rarity: null,
        weight: 40,
        cost: '1,600 gp',
        costValue: 160000,
        ac: 14,
        description: 'Barding is armor designed to protect an animal\'s head, neck, chest, and body.',
        source: 'PHB'
    },
    'barding-half-plate': {
        name: 'Half Plate Barding',
        type: 'armor',
        subtype: 'barding',
        rarity: null,
        weight: 80,
        cost: '3,000 gp',
        costValue: 300000,
        ac: 15,
        description: 'Barding is armor designed to protect an animal\'s head, neck, chest, and body.',
        source: 'PHB'
    },
    'barding-ring-mail': {
        name: 'Ring Mail Barding',
        type: 'armor',
        subtype: 'barding',
        rarity: null,
        weight: 80,
        cost: '120 gp',
        costValue: 12000,
        ac: 14,
        description: 'Barding is armor designed to protect an animal\'s head, neck, chest, and body.',
        source: 'PHB'
    },
    'barding-chain-mail': {
        name: 'Chain Mail Barding',
        type: 'armor',
        subtype: 'barding',
        rarity: null,
        weight: 110,
        cost: '300 gp',
        costValue: 30000,
        ac: 16,
        description: 'Barding is armor designed to protect an animal\'s head, neck, chest, and body.',
        source: 'PHB'
    },
    'barding-splint': {
        name: 'Splint Barding',
        type: 'armor',
        subtype: 'barding',
        rarity: null,
        weight: 120,
        cost: '800 gp',
        costValue: 80000,
        ac: 17,
        description: 'Barding is armor designed to protect an animal\'s head, neck, chest, and body.',
        source: 'PHB'
    },
    'barding-plate': {
        name: 'Plate Barding',
        type: 'armor',
        subtype: 'barding',
        rarity: null,
        weight: 130,
        cost: '6,000 gp',
        costValue: 600000,
        ac: 18,
        description: 'Barding is armor designed to protect an animal\'s head, neck, chest, and body.',
        source: 'PHB'
    }
};

// ============================================
// MOUNTS AND VEHICLES
// ============================================

const mountsAndVehicles = {
    // Mounts
    'camel': {
        name: 'Camel',
        type: 'mount-gear',
        subtype: 'mount',
        rarity: null,
        weight: 0,
        cost: '50 gp',
        costValue: 5000,
        speed: '50 ft.',
        carryingCapacity: '480 lb.',
        description: 'A camel is a desert mount with great endurance.',
        source: 'PHB'
    },
    'donkey': {
        name: 'Donkey or Mule',
        type: 'mount-gear',
        subtype: 'mount',
        rarity: null,
        weight: 0,
        cost: '8 gp',
        costValue: 800,
        speed: '40 ft.',
        carryingCapacity: '420 lb.',
        description: 'A sturdy pack animal.',
        source: 'PHB'
    },
    'elephant': {
        name: 'Elephant',
        type: 'mount-gear',
        subtype: 'mount',
        rarity: null,
        weight: 0,
        cost: '200 gp',
        costValue: 20000,
        speed: '40 ft.',
        carryingCapacity: '1,320 lb.',
        description: 'A massive beast of burden and war mount.',
        source: 'PHB'
    },
    'horse-draft': {
        name: 'Horse, draft',
        type: 'mount-gear',
        subtype: 'mount',
        rarity: null,
        weight: 0,
        cost: '50 gp',
        costValue: 5000,
        speed: '40 ft.',
        carryingCapacity: '540 lb.',
        description: 'A large horse bred for pulling wagons and plows.',
        source: 'PHB'
    },
    'horse-riding': {
        name: 'Horse, riding',
        type: 'mount-gear',
        subtype: 'mount',
        rarity: null,
        weight: 0,
        cost: '75 gp',
        costValue: 7500,
        speed: '60 ft.',
        carryingCapacity: '480 lb.',
        description: 'A horse bred for riding and travel.',
        source: 'PHB'
    },
    'mastiff': {
        name: 'Mastiff',
        type: 'mount-gear',
        subtype: 'mount',
        rarity: null,
        weight: 0,
        cost: '25 gp',
        costValue: 2500,
        speed: '40 ft.',
        carryingCapacity: '195 lb.',
        description: 'A large dog that can serve as a mount for Small creatures.',
        source: 'PHB'
    },
    'pony': {
        name: 'Pony',
        type: 'mount-gear',
        subtype: 'mount',
        rarity: null,
        weight: 0,
        cost: '30 gp',
        costValue: 3000,
        speed: '40 ft.',
        carryingCapacity: '225 lb.',
        description: 'A small horse suitable for Medium or smaller riders.',
        source: 'PHB'
    },
    'warhorse': {
        name: 'Warhorse',
        type: 'mount-gear',
        subtype: 'mount',
        rarity: null,
        weight: 0,
        cost: '400 gp',
        costValue: 40000,
        speed: '60 ft.',
        carryingCapacity: '540 lb.',
        description: 'A horse trained for combat and war.',
        source: 'PHB'
    },

    // Tack, Harness, and Drawn Vehicles
    'bit-and-bridle': {
        name: 'Bit and Bridle',
        type: 'mount-gear',
        subtype: 'tack',
        rarity: null,
        weight: 1,
        cost: '2 gp',
        costValue: 200,
        description: 'Equipment for controlling a mount.',
        source: 'PHB'
    },
    'carriage': {
        name: 'Carriage',
        type: 'vehicle',
        subtype: 'land',
        rarity: null,
        weight: 600,
        cost: '100 gp',
        costValue: 10000,
        description: 'An enclosed vehicle for passengers.',
        source: 'PHB'
    },
    'cart': {
        name: 'Cart',
        type: 'vehicle',
        subtype: 'land',
        rarity: null,
        weight: 200,
        cost: '15 gp',
        costValue: 1500,
        description: 'A simple two-wheeled vehicle.',
        source: 'PHB'
    },
    'chariot': {
        name: 'Chariot',
        type: 'vehicle',
        subtype: 'land',
        rarity: null,
        weight: 100,
        cost: '250 gp',
        costValue: 25000,
        description: 'A two-wheeled vehicle pulled by horses, used for racing or war.',
        source: 'PHB'
    },
    'feed-per-day': {
        name: 'Feed (per day)',
        type: 'mount-gear',
        subtype: 'supplies',
        rarity: null,
        weight: 10,
        cost: '5 cp',
        costValue: 5,
        description: 'A day\'s feed for a mount.',
        source: 'PHB'
    },
    'saddle-exotic': {
        name: 'Saddle, Exotic',
        type: 'mount-gear',
        subtype: 'tack',
        rarity: null,
        weight: 40,
        cost: '60 gp',
        costValue: 6000,
        description: 'An exotic saddle is required for riding any aquatic or flying mount.',
        source: 'PHB'
    },
    'saddle-military': {
        name: 'Saddle, Military',
        type: 'mount-gear',
        subtype: 'tack',
        rarity: null,
        weight: 30,
        cost: '20 gp',
        costValue: 2000,
        description: 'A military saddle braces the rider, helping you keep your seat on an active mount in battle. It gives you advantage on any check you make to remain mounted.',
        source: 'PHB'
    },
    'saddle-pack': {
        name: 'Saddle, Pack',
        type: 'mount-gear',
        subtype: 'tack',
        rarity: null,
        weight: 15,
        cost: '5 gp',
        costValue: 500,
        description: 'A pack saddle holds gear and supplies, but not a rider.',
        source: 'PHB'
    },
    'saddle-riding': {
        name: 'Saddle, Riding',
        type: 'mount-gear',
        subtype: 'tack',
        rarity: null,
        weight: 25,
        cost: '10 gp',
        costValue: 1000,
        description: 'A standard saddle for riding.',
        source: 'PHB'
    },
    'saddlebags': {
        name: 'Saddlebags',
        type: 'mount-gear',
        subtype: 'tack',
        rarity: null,
        weight: 8,
        cost: '4 gp',
        costValue: 400,
        capacity: '8 cubic feet',
        description: 'Bags that hang across a mount\'s back for carrying gear.',
        source: 'PHB'
    },
    'sled': {
        name: 'Sled',
        type: 'vehicle',
        subtype: 'land',
        rarity: null,
        weight: 300,
        cost: '20 gp',
        costValue: 2000,
        description: 'A vehicle for traveling over snow and ice.',
        source: 'PHB'
    },
    'stabling-per-day': {
        name: 'Stabling (per day)',
        type: 'mount-gear',
        subtype: 'services',
        rarity: null,
        weight: 0,
        cost: '5 sp',
        costValue: 50,
        description: 'The cost of stabling a mount for one day.',
        source: 'PHB'
    },
    'wagon': {
        name: 'Wagon',
        type: 'vehicle',
        subtype: 'land',
        rarity: null,
        weight: 400,
        cost: '35 gp',
        costValue: 3500,
        description: 'A four-wheeled vehicle for hauling goods.',
        source: 'PHB'
    },

    // Waterborne Vehicles
    'galley': {
        name: 'Galley',
        type: 'vehicle',
        subtype: 'water',
        rarity: null,
        weight: 0,
        cost: '30,000 gp',
        costValue: 3000000,
        speed: '4 mph',
        description: 'A large ship propelled by oars and sails, capable of carrying cargo and soldiers.',
        source: 'PHB'
    },
    'keelboat': {
        name: 'Keelboat',
        type: 'vehicle',
        subtype: 'water',
        rarity: null,
        weight: 0,
        cost: '3,000 gp',
        costValue: 300000,
        speed: '1 mph',
        description: 'A small boat used on rivers and coastal waters.',
        source: 'PHB'
    },
    'longship': {
        name: 'Longship',
        type: 'vehicle',
        subtype: 'water',
        rarity: null,
        weight: 0,
        cost: '10,000 gp',
        costValue: 1000000,
        speed: '3 mph',
        description: 'A long, narrow ship used by seafaring raiders.',
        source: 'PHB'
    },
    'rowboat': {
        name: 'Rowboat',
        type: 'vehicle',
        subtype: 'water',
        rarity: null,
        weight: 100,
        cost: '50 gp',
        costValue: 5000,
        speed: '1.5 mph',
        description: 'A small boat propelled by oars.',
        source: 'PHB'
    },
    'sailing-ship': {
        name: 'Sailing Ship',
        type: 'vehicle',
        subtype: 'water',
        rarity: null,
        weight: 0,
        cost: '10,000 gp',
        costValue: 1000000,
        speed: '2 mph',
        description: 'A large ship propelled by sails.',
        source: 'PHB'
    },
    'warship': {
        name: 'Warship',
        type: 'vehicle',
        subtype: 'water',
        rarity: null,
        weight: 0,
        cost: '25,000 gp',
        costValue: 2500000,
        speed: '2.5 mph',
        description: 'A large ship designed for naval warfare.',
        source: 'PHB'
    }
};

// ============================================
// TRADE GOODS
// ============================================

const tradeGoods = {
    'wheat-1lb': {
        name: 'Wheat (1 lb.)',
        type: 'trade-goods',
        rarity: null,
        weight: 1,
        cost: '1 cp',
        costValue: 1,
        description: 'A pound of wheat grain.',
        source: 'PHB'
    },
    'flour-1lb': {
        name: 'Flour (1 lb.)',
        type: 'trade-goods',
        rarity: null,
        weight: 1,
        cost: '2 cp',
        costValue: 2,
        description: 'A pound of flour.',
        source: 'PHB'
    },
    'salt-1lb': {
        name: 'Salt (1 lb.)',
        type: 'trade-goods',
        rarity: null,
        weight: 1,
        cost: '5 cp',
        costValue: 5,
        description: 'A pound of salt.',
        source: 'PHB'
    },
    'iron-1lb': {
        name: 'Iron (1 lb.)',
        type: 'trade-goods',
        rarity: null,
        weight: 1,
        cost: '1 sp',
        costValue: 10,
        description: 'A pound of iron ore or ingot.',
        source: 'PHB'
    },
    'canvas-1sqyd': {
        name: 'Canvas (1 sq. yd.)',
        type: 'trade-goods',
        rarity: null,
        weight: 1,
        cost: '1 sp',
        costValue: 10,
        description: 'A square yard of canvas fabric.',
        source: 'PHB'
    },
    'copper-1lb': {
        name: 'Copper (1 lb.)',
        type: 'trade-goods',
        rarity: null,
        weight: 1,
        cost: '5 sp',
        costValue: 50,
        description: 'A pound of copper ore or ingot.',
        source: 'PHB'
    },
    'cotton-cloth-1sqyd': {
        name: 'Cotton Cloth (1 sq. yd.)',
        type: 'trade-goods',
        rarity: null,
        weight: 1,
        cost: '5 sp',
        costValue: 50,
        description: 'A square yard of cotton cloth.',
        source: 'PHB'
    },
    'ginger-1lb': {
        name: 'Ginger (1 lb.)',
        type: 'trade-goods',
        rarity: null,
        weight: 1,
        cost: '1 gp',
        costValue: 100,
        description: 'A pound of ginger root.',
        source: 'PHB'
    },
    'goat': {
        name: 'Goat',
        type: 'trade-goods',
        rarity: null,
        weight: 0,
        cost: '1 gp',
        costValue: 100,
        description: 'A live goat.',
        source: 'PHB'
    },
    'cinnamon-1lb': {
        name: 'Cinnamon (1 lb.)',
        type: 'trade-goods',
        rarity: null,
        weight: 1,
        cost: '2 gp',
        costValue: 200,
        description: 'A pound of cinnamon.',
        source: 'PHB'
    },
    'pepper-1lb': {
        name: 'Pepper (1 lb.)',
        type: 'trade-goods',
        rarity: null,
        weight: 1,
        cost: '2 gp',
        costValue: 200,
        description: 'A pound of pepper.',
        source: 'PHB'
    },
    'sheep': {
        name: 'Sheep',
        type: 'trade-goods',
        rarity: null,
        weight: 0,
        cost: '2 gp',
        costValue: 200,
        description: 'A live sheep.',
        source: 'PHB'
    },
    'pig': {
        name: 'Pig',
        type: 'trade-goods',
        rarity: null,
        weight: 0,
        cost: '3 gp',
        costValue: 300,
        description: 'A live pig.',
        source: 'PHB'
    },
    'cloves-1lb': {
        name: 'Cloves (1 lb.)',
        type: 'trade-goods',
        rarity: null,
        weight: 1,
        cost: '3 gp',
        costValue: 300,
        description: 'A pound of cloves.',
        source: 'PHB'
    },
    'silver-1lb': {
        name: 'Silver (1 lb.)',
        type: 'trade-goods',
        rarity: null,
        weight: 1,
        cost: '5 gp',
        costValue: 500,
        description: 'A pound of silver ore or ingot.',
        source: 'PHB'
    },
    'linen-1sqyd': {
        name: 'Linen (1 sq. yd.)',
        type: 'trade-goods',
        rarity: null,
        weight: 1,
        cost: '5 gp',
        costValue: 500,
        description: 'A square yard of linen fabric.',
        source: 'PHB'
    },
    'silk-1sqyd': {
        name: 'Silk (1 sq. yd.)',
        type: 'trade-goods',
        rarity: null,
        weight: 1,
        cost: '10 gp',
        costValue: 1000,
        description: 'A square yard of silk fabric.',
        source: 'PHB'
    },
    'cow': {
        name: 'Cow',
        type: 'trade-goods',
        rarity: null,
        weight: 0,
        cost: '10 gp',
        costValue: 1000,
        description: 'A live cow.',
        source: 'PHB'
    },
    'saffron-1lb': {
        name: 'Saffron (1 lb.)',
        type: 'trade-goods',
        rarity: null,
        weight: 1,
        cost: '15 gp',
        costValue: 1500,
        description: 'A pound of saffron, the most expensive spice.',
        source: 'PHB'
    },
    'ox': {
        name: 'Ox',
        type: 'trade-goods',
        rarity: null,
        weight: 0,
        cost: '15 gp',
        costValue: 1500,
        description: 'A live ox.',
        source: 'PHB'
    },
    'gold-1lb': {
        name: 'Gold (1 lb.)',
        type: 'trade-goods',
        rarity: null,
        weight: 1,
        cost: '50 gp',
        costValue: 5000,
        description: 'A pound of gold ore or ingot.',
        source: 'PHB'
    },
    'platinum-1lb': {
        name: 'Platinum (1 lb.)',
        type: 'trade-goods',
        rarity: null,
        weight: 1,
        cost: '500 gp',
        costValue: 50000,
        description: 'A pound of platinum ore or ingot.',
        source: 'PHB'
    }
};

// ============================================
// FOOD, DRINK & LODGING
// ============================================

const foodAndLodging = {
    'ale-gallon': {
        name: 'Ale (gallon)',
        type: 'food-drink',
        rarity: null,
        weight: 8,
        cost: '2 sp',
        costValue: 20,
        description: 'A gallon of ale.',
        source: 'PHB'
    },
    'ale-mug': {
        name: 'Ale (mug)',
        type: 'food-drink',
        rarity: null,
        weight: 1,
        cost: '4 cp',
        costValue: 4,
        description: 'A mug of ale.',
        source: 'PHB'
    },
    'banquet-per-person': {
        name: 'Banquet (per person)',
        type: 'food-drink',
        rarity: null,
        weight: 0,
        cost: '10 gp',
        costValue: 1000,
        description: 'A lavish feast.',
        source: 'PHB'
    },
    'bread-loaf': {
        name: 'Bread, loaf',
        type: 'food-drink',
        rarity: null,
        weight: 0.5,
        cost: '2 cp',
        costValue: 2,
        description: 'A loaf of bread.',
        source: 'PHB'
    },
    'cheese-hunk': {
        name: 'Cheese, hunk',
        type: 'food-drink',
        rarity: null,
        weight: 0.5,
        cost: '1 sp',
        costValue: 10,
        description: 'A hunk of cheese.',
        source: 'PHB'
    },
    'inn-stay-squalid': {
        name: 'Inn stay (per day) - Squalid',
        type: 'food-drink',
        rarity: null,
        weight: 0,
        cost: '7 cp',
        costValue: 7,
        description: 'A night\'s stay in squalid conditions at an inn.',
        source: 'PHB'
    },
    'inn-stay-poor': {
        name: 'Inn stay (per day) - Poor',
        type: 'food-drink',
        rarity: null,
        weight: 0,
        cost: '1 sp',
        costValue: 10,
        description: 'A night\'s stay in poor conditions at an inn.',
        source: 'PHB'
    },
    'inn-stay-modest': {
        name: 'Inn stay (per day) - Modest',
        type: 'food-drink',
        rarity: null,
        weight: 0,
        cost: '5 sp',
        costValue: 50,
        description: 'A night\'s stay in modest conditions at an inn.',
        source: 'PHB'
    },
    'inn-stay-comfortable': {
        name: 'Inn stay (per day) - Comfortable',
        type: 'food-drink',
        rarity: null,
        weight: 0,
        cost: '8 sp',
        costValue: 80,
        description: 'A night\'s stay in comfortable conditions at an inn.',
        source: 'PHB'
    },
    'inn-stay-wealthy': {
        name: 'Inn stay (per day) - Wealthy',
        type: 'food-drink',
        rarity: null,
        weight: 0,
        cost: '2 gp',
        costValue: 200,
        description: 'A night\'s stay in wealthy conditions at an inn.',
        source: 'PHB'
    },
    'inn-stay-aristocratic': {
        name: 'Inn stay (per day) - Aristocratic',
        type: 'food-drink',
        rarity: null,
        weight: 0,
        cost: '4 gp',
        costValue: 400,
        description: 'A night\'s stay in aristocratic conditions at an inn.',
        source: 'PHB'
    },
    'meals-squalid': {
        name: 'Meals (per day) - Squalid',
        type: 'food-drink',
        rarity: null,
        weight: 0,
        cost: '3 cp',
        costValue: 3,
        description: 'A day\'s worth of squalid meals.',
        source: 'PHB'
    },
    'meals-poor': {
        name: 'Meals (per day) - Poor',
        type: 'food-drink',
        rarity: null,
        weight: 0,
        cost: '6 cp',
        costValue: 6,
        description: 'A day\'s worth of poor meals.',
        source: 'PHB'
    },
    'meals-modest': {
        name: 'Meals (per day) - Modest',
        type: 'food-drink',
        rarity: null,
        weight: 0,
        cost: '3 sp',
        costValue: 30,
        description: 'A day\'s worth of modest meals.',
        source: 'PHB'
    },
    'meals-comfortable': {
        name: 'Meals (per day) - Comfortable',
        type: 'food-drink',
        rarity: null,
        weight: 0,
        cost: '5 sp',
        costValue: 50,
        description: 'A day\'s worth of comfortable meals.',
        source: 'PHB'
    },
    'meals-wealthy': {
        name: 'Meals (per day) - Wealthy',
        type: 'food-drink',
        rarity: null,
        weight: 0,
        cost: '8 sp',
        costValue: 80,
        description: 'A day\'s worth of wealthy meals.',
        source: 'PHB'
    },
    'meals-aristocratic': {
        name: 'Meals (per day) - Aristocratic',
        type: 'food-drink',
        rarity: null,
        weight: 0,
        cost: '2 gp',
        costValue: 200,
        description: 'A day\'s worth of aristocratic meals.',
        source: 'PHB'
    },
    'meat-chunk': {
        name: 'Meat, chunk',
        type: 'food-drink',
        rarity: null,
        weight: 0.5,
        cost: '3 sp',
        costValue: 30,
        description: 'A chunk of meat.',
        source: 'PHB'
    },
    'wine-common-pitcher': {
        name: 'Wine, common (pitcher)',
        type: 'food-drink',
        rarity: null,
        weight: 4,
        cost: '2 sp',
        costValue: 20,
        description: 'A pitcher of common wine.',
        source: 'PHB'
    },
    'wine-fine-bottle': {
        name: 'Wine, fine (bottle)',
        type: 'food-drink',
        rarity: null,
        weight: 1.5,
        cost: '10 gp',
        costValue: 1000,
        description: 'A bottle of fine wine.',
        source: 'PHB'
    }
};
