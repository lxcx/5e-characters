// ============================================
// ITEMS DATABASE - TOOLS (PHB)
// ============================================
// All tools from the Player's Handbook

const toolItems = {
    // ============================================
    // ARTISAN'S TOOLS
    // ============================================
    
    'alchemists-supplies': {
        name: 'Alchemist\'s Supplies',
        type: 'artisan-tools',
        rarity: null,
        weight: 8,
        cost: '50 gp',
        costValue: 5000,
        description: 'These special tools include the items needed to pursue a craft or trade. Proficiency with a set of artisan\'s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan\'s tools requires a separate proficiency. Alchemist\'s supplies enable a character to produce useful concoctions, such as acid or alchemist\'s fire.',
        source: 'PHB'
    },
    'brewers-supplies': {
        name: 'Brewer\'s Supplies',
        type: 'artisan-tools',
        rarity: null,
        weight: 9,
        cost: '20 gp',
        costValue: 2000,
        description: 'These special tools include the items needed to pursue a craft or trade. Brewer\'s supplies include a large glass jug, a quantity of hops, a siphon, and several feet of tubing.',
        source: 'PHB'
    },
    'calligraphers-supplies': {
        name: 'Calligrapher\'s Supplies',
        type: 'artisan-tools',
        rarity: null,
        weight: 5,
        cost: '10 gp',
        costValue: 1000,
        description: 'These special tools include the items needed to pursue a craft or trade. Calligrapher\'s supplies include ink, a dozen sheets of parchment, and three quills.',
        source: 'PHB'
    },
    'carpenters-tools': {
        name: 'Carpenter\'s Tools',
        type: 'artisan-tools',
        rarity: null,
        weight: 6,
        cost: '8 gp',
        costValue: 800,
        description: 'These special tools include the items needed to pursue a craft or trade. Carpenter\'s tools include a saw, a hammer, nails, a hatchet, a square, a ruler, an adze, a plane, and a chisel.',
        source: 'PHB'
    },
    'cartographers-tools': {
        name: 'Cartographer\'s Tools',
        type: 'artisan-tools',
        rarity: null,
        weight: 6,
        cost: '15 gp',
        costValue: 1500,
        description: 'These special tools include the items needed to pursue a craft or trade. Cartographer\'s tools consist of a quill, ink, parchment, a pair of compasses, calipers, and a ruler.',
        source: 'PHB'
    },
    'cobblers-tools': {
        name: 'Cobbler\'s Tools',
        type: 'artisan-tools',
        rarity: null,
        weight: 5,
        cost: '5 gp',
        costValue: 500,
        description: 'These special tools include the items needed to pursue a craft or trade. Cobbler\'s tools consist of a hammer, an awl, a knife, a shoe stand, a cutter, spare leather, and thread.',
        source: 'PHB'
    },
    'cooks-utensils': {
        name: 'Cook\'s Utensils',
        type: 'artisan-tools',
        rarity: null,
        weight: 8,
        cost: '1 gp',
        costValue: 100,
        description: 'These special tools include the items needed to pursue a craft or trade. Cook\'s utensils include a metal pot, knives, forks, a stirring spoon, and a ladle.',
        source: 'PHB'
    },
    'glassblowers-tools': {
        name: 'Glassblower\'s Tools',
        type: 'artisan-tools',
        rarity: null,
        weight: 5,
        cost: '30 gp',
        costValue: 3000,
        description: 'These special tools include the items needed to pursue a craft or trade. Glassblower\'s tools include a blowpipe, a marver, blocks, and tweezers.',
        source: 'PHB'
    },
    'jewelers-tools': {
        name: 'Jeweler\'s Tools',
        type: 'artisan-tools',
        rarity: null,
        weight: 2,
        cost: '25 gp',
        costValue: 2500,
        description: 'These special tools include the items needed to pursue a craft or trade. Jeweler\'s tools consist of a small saw and hammer, files, pliers, and tweezers.',
        source: 'PHB'
    },
    'leatherworkers-tools': {
        name: 'Leatherworker\'s Tools',
        type: 'artisan-tools',
        rarity: null,
        weight: 5,
        cost: '5 gp',
        costValue: 500,
        description: 'These special tools include the items needed to pursue a craft or trade. Leatherworker\'s tools include a knife, a small mallet, an edger, a hole punch, thread, and leather scraps.',
        source: 'PHB'
    },
    'masons-tools': {
        name: 'Mason\'s Tools',
        type: 'artisan-tools',
        rarity: null,
        weight: 8,
        cost: '10 gp',
        costValue: 1000,
        description: 'These special tools include the items needed to pursue a craft or trade. Mason\'s tools consist of a trowel, a hammer, a chisel, brushes, and a square.',
        source: 'PHB'
    },
    'painters-supplies': {
        name: 'Painter\'s Supplies',
        type: 'artisan-tools',
        rarity: null,
        weight: 5,
        cost: '10 gp',
        costValue: 1000,
        description: 'These special tools include the items needed to pursue a craft or trade. Painter\'s supplies include an easel, canvas, paints, brushes, charcoal sticks, and a palette.',
        source: 'PHB'
    },
    'potters-tools': {
        name: 'Potter\'s Tools',
        type: 'artisan-tools',
        rarity: null,
        weight: 3,
        cost: '10 gp',
        costValue: 1000,
        description: 'These special tools include the items needed to pursue a craft or trade. Potter\'s tools include potter\'s needles, ribs, scrapers, a knife, and calipers.',
        source: 'PHB'
    },
    'smiths-tools': {
        name: 'Smith\'s Tools',
        type: 'artisan-tools',
        rarity: null,
        weight: 8,
        cost: '20 gp',
        costValue: 2000,
        description: 'These special tools include the items needed to pursue a craft or trade. Smith\'s tools include hammers, tongs, charcoal, rags, and a whetstone.',
        source: 'PHB'
    },
    'tinkers-tools': {
        name: 'Tinker\'s Tools',
        type: 'artisan-tools',
        rarity: null,
        weight: 10,
        cost: '50 gp',
        costValue: 5000,
        description: 'These special tools include the items needed to pursue a craft or trade. Tinker\'s tools include a variety of hand tools, thread, needles, a whetstone, scraps of cloth and leather, and a small pot of glue.',
        source: 'PHB'
    },
    'weavers-tools': {
        name: 'Weaver\'s Tools',
        type: 'artisan-tools',
        rarity: null,
        weight: 5,
        cost: '1 gp',
        costValue: 100,
        description: 'These special tools include the items needed to pursue a craft or trade. Weaver\'s tools include thread, needles, and scraps of cloth.',
        source: 'PHB'
    },
    'woodcarvers-tools': {
        name: 'Woodcarver\'s Tools',
        type: 'artisan-tools',
        rarity: null,
        weight: 5,
        cost: '1 gp',
        costValue: 100,
        description: 'These special tools include the items needed to pursue a craft or trade. Woodcarver\'s tools consist of a knife, a gouge, and a small saw.',
        source: 'PHB'
    },

    // ============================================
    // OTHER TOOLS
    // ============================================
    
    'disguise-kit': {
        name: 'Disguise Kit',
        type: 'tool',
        rarity: null,
        weight: 3,
        cost: '25 gp',
        costValue: 2500,
        description: 'This pouch of cosmetics, hair dye, and small props lets you create disguises that change your physical appearance. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to create a visual disguise.',
        source: 'PHB'
    },
    'forgery-kit': {
        name: 'Forgery Kit',
        type: 'tool',
        rarity: null,
        weight: 5,
        cost: '15 gp',
        costValue: 1500,
        description: 'This small box contains a variety of papers and parchments, pens and inks, seals and sealing wax, gold and silver leaf, and other supplies necessary to create convincing forgeries of physical documents. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to create a physical forgery of a document.',
        source: 'PHB'
    },
    'herbalism-kit': {
        name: 'Herbalism Kit',
        type: 'tool',
        rarity: null,
        weight: 3,
        cost: '5 gp',
        costValue: 500,
        description: 'This kit contains a variety of instruments such as clippers, mortar and pestle, and pouches and vials used by herbalists to create remedies and potions. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to identify or apply herbs. Also, proficiency with this kit is required to create antitoxin and potions of healing.',
        source: 'PHB'
    },
    'navigators-tools': {
        name: 'Navigator\'s Tools',
        type: 'tool',
        rarity: null,
        weight: 2,
        cost: '25 gp',
        costValue: 2500,
        description: 'This set of instruments is used for navigation at sea. Proficiency with navigator\'s tools lets you chart a ship\'s course and follow navigation charts. In addition, these tools allow you to add your proficiency bonus to any ability check you make to avoid getting lost at sea.',
        source: 'PHB'
    },
    'poisoners-kit': {
        name: 'Poisoner\'s Kit',
        type: 'tool',
        rarity: null,
        weight: 2,
        cost: '50 gp',
        costValue: 5000,
        description: 'A poisoner\'s kit includes the vials, chemicals, and other equipment necessary for the creation of poisons. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to craft or use poisons.',
        source: 'PHB'
    },
    'thieves-tools': {
        name: 'Thieves\' Tools',
        type: 'tool',
        rarity: null,
        weight: 1,
        cost: '25 gp',
        costValue: 2500,
        description: 'This set of tools includes a small file, a set of lock picks, a small mirror mounted on a metal handle, a set of narrow-bladed scissors, and a pair of pliers. Proficiency with these tools lets you add your proficiency bonus to any ability checks you make to disarm traps or open locks.',
        source: 'PHB'
    },

    // ============================================
    // GAMING SETS
    // ============================================
    
    'dice-set': {
        name: 'Dice Set',
        type: 'gaming-set',
        rarity: null,
        weight: 0,
        cost: '1 sp',
        costValue: 10,
        description: 'A set of dice for playing games of chance. Proficiency with a gaming set applies to one type of game.',
        source: 'PHB'
    },
    'dragonchess-set': {
        name: 'Dragonchess Set',
        type: 'gaming-set',
        rarity: null,
        weight: 0.5,
        cost: '1 gp',
        costValue: 100,
        description: 'A complex three-tiered board game popular among nobles and strategists. Proficiency with a gaming set applies to one type of game.',
        source: 'PHB'
    },
    'playing-card-set': {
        name: 'Playing Card Set',
        type: 'gaming-set',
        rarity: null,
        weight: 0,
        cost: '5 sp',
        costValue: 50,
        description: 'A deck of playing cards for various games. Proficiency with a gaming set applies to one type of game.',
        source: 'PHB'
    },
    'three-dragon-ante-set': {
        name: 'Three-Dragon Ante Set',
        type: 'gaming-set',
        rarity: null,
        weight: 0,
        cost: '1 gp',
        costValue: 100,
        description: 'A popular card game played throughout the realms. Proficiency with a gaming set applies to one type of game.',
        source: 'PHB'
    },

    // ============================================
    // MUSICAL INSTRUMENTS
    // ============================================
    
    'bagpipes': {
        name: 'Bagpipes',
        type: 'instrument',
        rarity: null,
        weight: 6,
        cost: '30 gp',
        costValue: 3000,
        description: 'A wind instrument with an airbag and multiple pipes. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus.',
        source: 'PHB'
    },
    'drum': {
        name: 'Drum',
        type: 'instrument',
        rarity: null,
        weight: 3,
        cost: '6 gp',
        costValue: 600,
        description: 'A percussion instrument played by striking with hands or sticks. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus.',
        source: 'PHB'
    },
    'dulcimer': {
        name: 'Dulcimer',
        type: 'instrument',
        rarity: null,
        weight: 10,
        cost: '25 gp',
        costValue: 2500,
        description: 'A stringed instrument played by striking strings with small hammers. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus.',
        source: 'PHB'
    },
    'flute': {
        name: 'Flute',
        type: 'instrument',
        rarity: null,
        weight: 1,
        cost: '2 gp',
        costValue: 200,
        description: 'A wind instrument played by blowing across an opening. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus.',
        source: 'PHB'
    },
    'horn': {
        name: 'Horn',
        type: 'instrument',
        rarity: null,
        weight: 2,
        cost: '3 gp',
        costValue: 300,
        description: 'A brass wind instrument. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus.',
        source: 'PHB'
    },
    'lute': {
        name: 'Lute',
        type: 'instrument',
        rarity: null,
        weight: 2,
        cost: '35 gp',
        costValue: 3500,
        description: 'A stringed instrument with a rounded body. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus.',
        source: 'PHB'
    },
    'lyre': {
        name: 'Lyre',
        type: 'instrument',
        rarity: null,
        weight: 2,
        cost: '30 gp',
        costValue: 3000,
        description: 'A stringed instrument with a U-shaped frame. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus.',
        source: 'PHB'
    },
    'pan-flute': {
        name: 'Pan Flute',
        type: 'instrument',
        rarity: null,
        weight: 2,
        cost: '12 gp',
        costValue: 1200,
        description: 'A wind instrument made of several pipes of varying length. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus.',
        source: 'PHB'
    },
    'shawm': {
        name: 'Shawm',
        type: 'instrument',
        rarity: null,
        weight: 1,
        cost: '2 gp',
        costValue: 200,
        description: 'A double-reed wind instrument with a flared bell. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus.',
        source: 'PHB'
    },
    'viol': {
        name: 'Viol',
        type: 'instrument',
        rarity: null,
        weight: 1,
        cost: '30 gp',
        costValue: 3000,
        description: 'A bowed stringed instrument similar to a violin. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus.',
        source: 'PHB'
    },

    // ============================================
    // VEHICLES (Land and Water)
    // ============================================
    
    'vehicles-land': {
        name: 'Vehicles (Land)',
        type: 'tool',
        rarity: null,
        weight: 0,
        cost: '0 gp',
        costValue: 0,
        description: 'Proficiency with land vehicles covers a wide range of options, from chariots and howdahs to wagons and carts.',
        source: 'PHB'
    },
    'vehicles-water': {
        name: 'Vehicles (Water)',
        type: 'tool',
        rarity: null,
        weight: 0,
        cost: '0 gp',
        costValue: 0,
        description: 'Proficiency with water vehicles covers a wide range of options, from keelboats and rowboats to galleys and longships.',
        source: 'PHB'
    }
};

// ============================================
// EQUIPMENT PACKS
// ============================================

const equipmentPacks = {
    'burglar-pack': {
        name: 'Burglar\'s Pack',
        type: 'equipment-pack',
        rarity: null,
        weight: 44.5,
        cost: '16 gp',
        costValue: 1600,
        contents: ['backpack', 'ball-bearings', 'string-10ft', 'bell', 'candle', 'candle', 'candle', 'candle', 'candle', 'crowbar', 'hammer', 'piton', 'piton', 'piton', 'piton', 'piton', 'piton', 'piton', 'piton', 'piton', 'piton', 'lantern-hooded', 'oil-flask', 'oil-flask', 'rations', 'rations', 'rations', 'rations', 'rations', 'tinderbox', 'waterskin', 'rope-hempen'],
        description: 'Includes a backpack, a bag of 1,000 ball bearings, 10 feet of string, a bell, 5 candles, a crowbar, a hammer, 10 pitons, a hooded lantern, 2 flasks of oil, 5 days rations, a tinderbox, and a waterskin. The pack also has 50 feet of hempen rope strapped to the side of it.',
        source: 'PHB'
    },
    'diplomats-pack': {
        name: 'Diplomat\'s Pack',
        type: 'equipment-pack',
        rarity: null,
        weight: 36,
        cost: '39 gp',
        costValue: 3900,
        contents: ['chest', 'case-map-scroll', 'case-map-scroll', 'clothes-fine', 'ink', 'ink-pen', 'lamp', 'oil-flask', 'oil-flask', 'paper', 'paper', 'paper', 'paper', 'paper', 'perfume-vial', 'sealing-wax', 'soap'],
        description: 'Includes a chest, 2 cases for maps and scrolls, a set of fine clothes, a bottle of ink, an ink pen, a lamp, 2 flasks of oil, 5 sheets of paper, a vial of perfume, sealing wax, and soap.',
        source: 'PHB'
    },
    'dungeoneers-pack': {
        name: 'Dungeoneer\'s Pack',
        type: 'equipment-pack',
        rarity: null,
        weight: 61.5,
        cost: '12 gp',
        costValue: 1200,
        contents: ['backpack', 'crowbar', 'hammer', 'piton', 'piton', 'piton', 'piton', 'piton', 'piton', 'piton', 'piton', 'piton', 'piton', 'torch', 'torch', 'torch', 'torch', 'torch', 'torch', 'torch', 'torch', 'torch', 'torch', 'tinderbox', 'rations', 'rations', 'rations', 'rations', 'rations', 'rations', 'rations', 'rations', 'rations', 'rations', 'waterskin', 'rope-hempen'],
        description: 'Includes a backpack, a crowbar, a hammer, 10 pitons, 10 torches, a tinderbox, 10 days of rations, and a waterskin. The pack also has 50 feet of hempen rope strapped to the side of it.',
        source: 'PHB'
    },
    'entertainers-pack': {
        name: 'Entertainer\'s Pack',
        type: 'equipment-pack',
        rarity: null,
        weight: 38,
        cost: '40 gp',
        costValue: 4000,
        contents: ['backpack', 'bedroll', 'clothes-costume', 'clothes-costume', 'candle', 'candle', 'candle', 'candle', 'candle', 'rations', 'rations', 'rations', 'rations', 'rations', 'waterskin', 'disguise-kit'],
        description: 'Includes a backpack, a bedroll, 2 costumes, 5 candles, 5 days of rations, a waterskin, and a disguise kit.',
        source: 'PHB'
    },
    'explorers-pack': {
        name: 'Explorer\'s Pack',
        type: 'equipment-pack',
        rarity: null,
        weight: 59,
        cost: '10 gp',
        costValue: 1000,
        contents: ['backpack', 'bedroll', 'mess-kit', 'tinderbox', 'torch', 'torch', 'torch', 'torch', 'torch', 'torch', 'torch', 'torch', 'torch', 'torch', 'rations', 'rations', 'rations', 'rations', 'rations', 'rations', 'rations', 'rations', 'rations', 'rations', 'waterskin', 'rope-hempen'],
        description: 'Includes a backpack, a bedroll, a mess kit, a tinderbox, 10 torches, 10 days of rations, and a waterskin. The pack also has 50 feet of hempen rope strapped to the side of it.',
        source: 'PHB'
    },
    'priests-pack': {
        name: 'Priest\'s Pack',
        type: 'equipment-pack',
        rarity: null,
        weight: 24,
        cost: '19 gp',
        costValue: 1900,
        contents: ['backpack', 'blanket', 'candle', 'candle', 'candle', 'candle', 'candle', 'candle', 'candle', 'candle', 'candle', 'candle', 'tinderbox', 'alms-box', 'incense-block', 'incense-block', 'censer', 'vestments', 'rations', 'rations', 'waterskin'],
        description: 'Includes a backpack, a blanket, 10 candles, a tinderbox, an alms box, 2 blocks of incense, a censer, vestments, 2 days of rations, and a waterskin.',
        source: 'PHB'
    },
    'scholars-pack': {
        name: 'Scholar\'s Pack',
        type: 'equipment-pack',
        rarity: null,
        weight: 10,
        cost: '40 gp',
        costValue: 4000,
        contents: ['backpack', 'book', 'ink', 'ink-pen', 'parchment', 'parchment', 'parchment', 'parchment', 'parchment', 'parchment', 'parchment', 'parchment', 'parchment', 'parchment', 'small-knife'],
        description: 'Includes a backpack, a book of lore, a bottle of ink, an ink pen, 10 sheets of parchment, a little bag of sand, and a small knife.',
        source: 'PHB'
    }
};

// Additional mundane items that were missing
const additionalMundaneItems = {
    'string-10ft': {
        name: 'String (10 feet)',
        type: 'adventuring-gear',
        rarity: null,
        weight: 0,
        cost: '1 cp',
        costValue: 1,
        description: 'A 10-foot length of string.',
        source: 'PHB'
    },
    'alms-box': {
        name: 'Alms Box',
        type: 'adventuring-gear',
        rarity: null,
        weight: 0,
        cost: '0 gp',
        costValue: 0,
        description: 'A small box for collecting donations.',
        source: 'PHB'
    },
    'incense-block': {
        name: 'Block of Incense',
        type: 'adventuring-gear',
        rarity: null,
        weight: 0,
        cost: '1 cp',
        costValue: 1,
        description: 'A block of fragrant incense.',
        source: 'PHB'
    },
    'censer': {
        name: 'Censer',
        type: 'adventuring-gear',
        rarity: null,
        weight: 1,
        cost: '5 sp',
        costValue: 50,
        description: 'A metal container in which incense is burned.',
        source: 'PHB'
    },
    'vestments': {
        name: 'Vestments',
        type: 'clothing',
        rarity: null,
        weight: 4,
        cost: '1 gp',
        costValue: 100,
        description: 'Religious garments worn by clergy.',
        source: 'PHB'
    },
    'small-knife': {
        name: 'Small Knife',
        type: 'adventuring-gear',
        rarity: null,
        weight: 0.25,
        cost: '5 cp',
        costValue: 5,
        description: 'A small knife useful for various tasks.',
        source: 'PHB'
    }
};
