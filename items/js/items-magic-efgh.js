// ============================================
// MAGIC ITEMS DATABASE - E, F, G, H
// ============================================
// DMG and other sourcebook magic items starting with E through H

const magicItemsEFGH = {
    // ============================================
    // E ITEMS
    // ============================================
    
    'efreeti-bottle': {
        name: 'Efreeti Bottle',
        type: 'wondrous-item',
        rarity: 'very-rare',
        weight: 1,
        cost: '15,000 gp',
        costValue: 1500000,
        attunement: 'none',
        description: 'This painted brass bottle weighs 1 pound. When you use an action to remove the stopper, a cloud of thick smoke flows out of the bottle. At the end of your turn, the smoke disappears with a flash of harmless fire, and an efreeti appears in an unoccupied space within 30 feet of you. The first time the bottle is opened, the DM rolls to determine what happens (d100).',
        source: 'DMG'
    },
    'efreeti-chain': {
        name: 'Efreeti Chain',
        type: 'armor',
        subtype: 'heavy',
        rarity: 'legendary',
        weight: 55,
        cost: '50,000 gp',
        costValue: 5000000,
        attunement: 'none',
        ac: 16,
        strengthReq: 13,
        stealthDisadvantage: true,
        properties: ['+3 AC', 'fire immunity'],
        description: 'While wearing this armor, you gain a +3 bonus to AC, you are immune to fire damage, and you can understand and speak Primordial. In addition, you can stand on and walk across molten rock as if it were solid ground.',
        source: 'DMG'
    },
    'elemental-gem': {
        name: 'Elemental Gem',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 0,
        cost: '960 gp',
        costValue: 96000,
        attunement: 'none',
        consumable: true,
        description: 'This gem contains a mote of elemental energy. When you use an action to break the gem, an elemental is summoned as if you had cast the Conjure Elemental spell, and the gem\'s magic is lost. The type of gem determines the elemental summoned by the spell.',
        source: 'DMG'
    },
    'elven-chain': {
        name: 'Elven Chain',
        type: 'armor',
        subtype: 'medium',
        rarity: 'rare',
        weight: 20,
        cost: '4,500 gp',
        costValue: 450000,
        attunement: 'none',
        ac: 14,
        maxDex: 2,
        properties: ['+1 AC', 'proficiency not required'],
        description: 'You gain a +1 bonus to AC while you wear this armor. You are considered proficient with this armor even if you lack proficiency with medium armor.',
        source: 'DMG'
    },
    'eversmoking-bottle': {
        name: 'Eversmoking Bottle',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 1,
        cost: '500 gp',
        costValue: 50000,
        attunement: 'none',
        description: 'Smoke leaks from the lead-stoppered mouth of this brass bottle, which weighs 1 pound. When you use an action to remove the stopper, a cloud of thick smoke pours out in a 60-foot radius from the bottle. The cloud\'s area is heavily obscured. Each minute the bottle remains open and within the cloud, the radius increases by 10 feet until it reaches its maximum radius of 120 feet. The cloud persists as long as the bottle is open. Closing the bottle requires you to speak its command word as an action. Once the bottle is closed, the cloud disperses after 10 minutes. A moderate wind (11 to 20 miles per hour) can also disperse the smoke after 1 minute, and a strong wind (21 or more miles per hour) can do so after 1 round.',
        source: 'DMG'
    },
    'eyes-of-charming': {
        name: 'Eyes of Charming',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 0,
        cost: '500 gp',
        costValue: 50000,
        attunement: 'any',
        charges: 3,
        recharge: '1d3 at dawn',
        description: 'These crystal lenses fit over the eyes. They have 3 charges. While wearing them, you can expend 1 charge as an action to cast the Charm Person spell (save DC 13) on a humanoid within 30 feet of you, provided that you and the target can see each other. The lenses regain all expended charges daily at dawn.',
        source: 'DMG'
    },
    'eyes-of-minute-seeing': {
        name: 'Eyes of Minute Seeing',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 0,
        cost: '500 gp',
        costValue: 50000,
        attunement: 'none',
        description: 'These crystal lenses fit over the eyes. While wearing them, you can see much better than normal out to a range of 1 foot. You have advantage on Intelligence (Investigation) checks that rely on sight while searching an area or studying an object within that range.',
        source: 'DMG'
    },
    'eyes-of-the-eagle': {
        name: 'Eyes of the Eagle',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 0,
        cost: '500 gp',
        costValue: 50000,
        attunement: 'any',
        description: 'These crystal lenses fit over the eyes. While wearing them, you have advantage on Wisdom (Perception) checks that rely on sight. In conditions of clear visibility, you can make out details of even extremely distant creatures and objects as small as 2 feet across.',
        source: 'DMG'
    },

    // ============================================
    // F ITEMS
    // ============================================
    
    'feather-token': {
        name: 'Feather Token (Anchor)',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 0,
        cost: '50 gp',
        costValue: 5000,
        attunement: 'none',
        consumable: true,
        description: 'This tiny object looks like a feather. You can use an action to touch the token to a boat or ship. For the next 24 hours, the vessel can\'t be moved by any means. Touching the token to the vessel again ends the effect. When the effect ends, the token disappears.',
        source: 'DMG'
    },
    'feather-token-bird': {
        name: 'Feather Token (Bird)',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 0,
        cost: '3,000 gp',
        costValue: 300000,
        attunement: 'none',
        consumable: true,
        description: 'You can use an action to toss the token 5 feet into the air. The token disappears and an enormous, multicolored bird takes its place. The bird has the statistics of a roc, but it obeys your simple commands and can\'t attack. It can carry up to 500 pounds while flying at its maximum speed (16 miles an hour for a maximum of 144 miles per day, with a one-hour rest for every 3 hours of flying), or 1,000 pounds at half that speed. The bird disappears after flying its maximum distance for a day or if it drops to 0 hit points. You can dismiss the bird as an action.',
        source: 'DMG'
    },
    'feather-token-fan': {
        name: 'Feather Token (Fan)',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 0,
        cost: '250 gp',
        costValue: 25000,
        attunement: 'none',
        consumable: true,
        description: 'If you are on a boat or ship, you can use an action to toss the token up to 10 feet in the air. The token disappears, and a giant flapping fan takes its place. The fan floats and creates a wind strong enough to fill the sails of one ship, increasing its speed by 5 miles per hour for 8 hours. You can dismiss the fan as an action.',
        source: 'DMG'
    },
    'feather-token-swan-boat': {
        name: 'Feather Token (Swan Boat)',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 0,
        cost: '3,000 gp',
        costValue: 300000,
        attunement: 'none',
        consumable: true,
        description: 'You can use an action to touch the token to a body of water at least 60 feet in diameter. The token disappears, and a 50-foot-long, 20-foot-wide boat shaped like a swan takes its place. The boat is self-propelled and moves across water at a speed of 6 miles per hour. You can use an action while on the boat to command it to move or to turn up to 90 degrees. The boat can carry up to thirty-two Medium or smaller creatures. A Large creature counts as four Medium creatures, while a Huge creature counts as nine. The boat remains for 24 hours and then disappears. You can dismiss the boat as an action.',
        source: 'DMG'
    },
    'feather-token-tree': {
        name: 'Feather Token (Tree)',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 0,
        cost: '250 gp',
        costValue: 25000,
        attunement: 'none',
        consumable: true,
        description: 'You must be outdoors to use this token. You can use an action to touch it to an unoccupied space on the ground. The token disappears, and in its place a nonmagical oak tree springs into existence. The tree is 60 feet tall and has a 5-foot-diameter trunk, and its branches at the top spread out in a 20-foot radius.',
        source: 'DMG'
    },
    'feather-token-whip': {
        name: 'Feather Token (Whip)',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 0,
        cost: '250 gp',
        costValue: 25000,
        attunement: 'none',
        consumable: true,
        description: 'You can use an action to throw the token to a point within 10 feet of you. The token disappears, and a floating whip takes its place. You can then use a bonus action to make a melee spell attack against a creature within 10 feet of the whip, with an attack bonus of +9. On a hit, the target takes 1d6 + 5 force damage. As a bonus action on your turn, you can direct the whip to fly up to 20 feet and repeat the attack against a creature within 10 feet of it. The whip disappears after 1 hour, when you use an action to dismiss it, or when you are incapacitated or die.',
        source: 'DMG'
    },
    'figurine-of-wondrous-power-bronze-griffon': {
        name: 'Figurine of Wondrous Power (Bronze Griffon)',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 0,
        cost: '6,000 gp',
        costValue: 600000,
        attunement: 'none',
        description: 'A figurine of wondrous power is a statuette of a beast small enough to fit in a pocket. If you use an action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living creature. If the space where the creature would appear is occupied by other creatures or objects, or if there isn\'t enough space for the creature, the figurine doesn\'t become a creature. The creature is friendly to you and your companions. Bronze Griffon: When you speak the command word, the figurine becomes a griffon for up to 6 hours. Once it has been used, it can\'t be used again until 5 days have passed.',
        source: 'DMG'
    },
    'figurine-of-wondrous-power-ebony-fly': {
        name: 'Figurine of Wondrous Power (Ebony Fly)',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 0,
        cost: '6,000 gp',
        costValue: 600000,
        attunement: 'none',
        description: 'When you speak the command word, the figurine becomes a giant fly for up to 12 hours and can be ridden as a mount. Once it has been used, it can\'t be used again until 2 days have passed.',
        source: 'DMG'
    },
    'figurine-of-wondrous-power-golden-lions': {
        name: 'Figurine of Wondrous Power (Golden Lions)',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 0,
        cost: '6,000 gp',
        costValue: 600000,
        attunement: 'none',
        description: 'When you speak the command word, the figurine becomes a lion. If you speak the command word while there are two figurines within 5 feet of each other, each figurine becomes a lion for up to 1 hour. Once a lion has been used, it can\'t be used again until 7 days have passed.',
        source: 'DMG'
    },
    'figurine-of-wondrous-power-ivory-goats': {
        name: 'Figurine of Wondrous Power (Ivory Goats)',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 0,
        cost: '12,000 gp',
        costValue: 1200000,
        attunement: 'none',
        description: 'These ivory statuettes of goats are always created in sets of three. Each goat looks unique and functions differently from the others. The Goat of Traveling can become a Large goat with the same statistics as a riding horse. It can be ridden as a mount and can be used for up to 24 hours (once used, can\'t be used again for 7 days). The Goat of Travail becomes a giant goat for up to 3 hours (once used, can\'t be used again for 30 days). The Goat of Terror becomes a giant goat for up to 3 hours, with a special charge attack (once used, can\'t be used again for 15 days).',
        source: 'DMG'
    },
    'figurine-of-wondrous-power-marble-elephant': {
        name: 'Figurine of Wondrous Power (Marble Elephant)',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 0,
        cost: '6,000 gp',
        costValue: 600000,
        attunement: 'none',
        description: 'When you speak the command word, the figurine becomes an elephant for up to 24 hours. Once it has been used, it can\'t be used again until 7 days have passed.',
        source: 'DMG'
    },
    'figurine-of-wondrous-power-obsidian-steed': {
        name: 'Figurine of Wondrous Power (Obsidian Steed)',
        type: 'wondrous-item',
        rarity: 'very-rare',
        weight: 0,
        cost: '15,000 gp',
        costValue: 1500000,
        attunement: 'none',
        description: 'When you speak the command word, the figurine becomes a nightmare for up to 24 hours. The nightmare fights only to defend itself. If you have a good alignment, the figurine has a 10 percent chance each time you use it to ignore your orders, including a command to revert to figurine form. If you mount the nightmare while it is ignoring your orders, you and the nightmare are instantly transported to a random location on the plane of Hades. Once it has been used, it can\'t be used again until 5 days have passed.',
        source: 'DMG'
    },
    'figurine-of-wondrous-power-onyx-dog': {
        name: 'Figurine of Wondrous Power (Onyx Dog)',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 0,
        cost: '3,000 gp',
        costValue: 300000,
        attunement: 'none',
        description: 'When you speak the command word, the figurine becomes a mastiff for up to 6 hours. The mastiff has an Intelligence of 8 and can speak Common. It also has darkvision out to a range of 60 feet and can see invisible creatures and objects within that range. Once it has been used, it can\'t be used again until 7 days have passed.',
        source: 'DMG'
    },
    'figurine-of-wondrous-power-serpentine-owl': {
        name: 'Figurine of Wondrous Power (Serpentine Owl)',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 0,
        cost: '3,000 gp',
        costValue: 300000,
        attunement: 'none',
        description: 'When you speak the command word, the figurine becomes a giant owl for up to 8 hours. Once it has been used, it can\'t be used again until 2 days have passed. The owl can telepathically communicate with you at any range if you and it are on the same plane of existence.',
        source: 'DMG'
    },
    'figurine-of-wondrous-power-silver-raven': {
        name: 'Figurine of Wondrous Power (Silver Raven)',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 0,
        cost: '600 gp',
        costValue: 60000,
        attunement: 'none',
        description: 'When you speak the command word, the figurine becomes a raven for up to 12 hours. Once it has been used, it can\'t be used again until 2 days have passed. While in raven form, the figurine allows you to cast the Animal Messenger spell on it at will.',
        source: 'DMG'
    },
    'flame-tongue': {
        name: 'Flame Tongue',
        type: 'weapon',
        subtype: 'any sword',
        rarity: 'rare',
        weight: 3,
        cost: '5,000 gp',
        costValue: 500000,
        attunement: 'any',
        properties: ['flaming'],
        description: 'You can use a bonus action to speak this magic sword\'s command word, causing flames to erupt from the blade. These flames shed bright light in a 40-foot radius and dim light for an additional 40 feet. While the sword is ablaze, it deals an extra 2d6 fire damage to any target it hits. The flames last until you use a bonus action to speak the command word again or until you drop or sheathe the sword.',
        source: 'DMG'
    },
    'folding-boat': {
        name: 'Folding Boat',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 4,
        cost: '10,000 gp',
        costValue: 1000000,
        attunement: 'none',
        description: 'This object appears as a wooden box that measures 12 inches long, 6 inches wide, and 6 inches deep. It weighs 4 pounds and floats. It can be opened to store items inside. This item also has three command words, each requiring you to use an action to speak it. One command word causes the box to unfold into a boat 10 feet long, 4 feet wide, and 2 feet deep (holds up to 4 Medium creatures). A second command word causes the box to unfold into a ship 24 feet long, 8 feet wide, and 6 feet deep (holds up to 15 Medium creatures). When the box becomes a vessel, its weight becomes that of a normal vessel its size. The third command word causes the folding boat to fold back into a box.',
        source: 'DMG'
    },
    'frost-brand': {
        name: 'Frost Brand',
        type: 'weapon',
        subtype: 'any sword',
        rarity: 'very-rare',
        weight: 3,
        cost: '8,000 gp',
        costValue: 800000,
        attunement: 'any',
        properties: ['cold damage', 'fire resistance'],
        description: 'When you hit with an attack using this magic sword, the target takes an extra 1d6 cold damage. In addition, while you hold the sword, you have resistance to fire damage. In freezing temperatures, the blade sheds bright light in a 10-foot radius and dim light for an additional 10 feet. When you draw this weapon, you can extinguish all nonmagical flames within 30 feet of you. This property can be used no more than once per hour.',
        source: 'DMG'
    },

    // ============================================
    // G ITEMS
    // ============================================
    
    'gauntlets-of-ogre-power': {
        name: 'Gauntlets of Ogre Power',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 1,
        cost: '500 gp',
        costValue: 50000,
        attunement: 'any',
        description: 'Your Strength score is 19 while you wear these gauntlets. They have no effect on you if your Strength is already 19 or higher.',
        source: 'DMG'
    },
    'gem-of-brightness': {
        name: 'Gem of Brightness',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 0,
        cost: '600 gp',
        costValue: 60000,
        attunement: 'none',
        charges: 50,
        description: 'This prism has 50 charges. While you are holding it, you can use an action to speak one of three command words to cause one of the following effects: The first command word causes the gem to shed bright light in a 30-foot radius and dim light for an additional 30 feet. This effect doesn\'t expend a charge. It lasts until you use a bonus action to repeat the command word or until you use another function of the gem. The second command word expends 1 charge and causes the gem to fire a brilliant beam of light at one creature you can see within 60 feet of you. The creature must succeed on a DC 15 Constitution saving throw or become blinded for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. The third command word expends 5 charges and causes the gem to flare with blinding light in a 30-foot cone originating from it. Each creature in the cone must make a saving throw as if struck by the beam created with the second command word.',
        source: 'DMG'
    },
    'gem-of-seeing': {
        name: 'Gem of Seeing',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 0,
        cost: '10,000 gp',
        costValue: 1000000,
        attunement: 'any',
        charges: 3,
        recharge: '1d3 at dawn',
        description: 'This gem has 3 charges. As an action, you can speak the gem\'s command word and expend 1 charge. For the next 10 minutes, you have truesight out to 120 feet when you peer through the gem. The gem regains 1d3 expended charges daily at dawn.',
        source: 'DMG'
    },
    'giant-slayer': {
        name: 'Giant Slayer',
        type: 'weapon',
        subtype: 'any axe or sword',
        rarity: 'rare',
        weight: 4,
        cost: '7,000 gp',
        costValue: 700000,
        attunement: 'none',
        properties: ['+1 to attack and damage'],
        description: 'You gain a +1 bonus to attack and damage rolls made with this magic weapon. When you hit a giant with it, the giant takes an extra 2d6 damage of the weapon\'s type and must succeed on a DC 15 Strength saving throw or fall prone. For the purpose of this weapon, "giant" refers to any creature with the giant type, including ettins and trolls.',
        source: 'DMG'
    },
    'glamoured-studded-leather': {
        name: 'Glamoured Studded Leather',
        type: 'armor',
        subtype: 'light',
        rarity: 'rare',
        weight: 13,
        cost: '2,000 gp',
        costValue: 200000,
        attunement: 'none',
        ac: 13,
        properties: ['+1 AC', 'glamour'],
        description: 'While wearing this armor, you gain a +1 bonus to AC. You can also use a bonus action to speak the armor\'s command word and cause the armor to assume the appearance of a normal set of clothing or some other kind of armor. You decide what it looks like, including color, style, and accessories, but the armor retains its normal bulk and weight. The illusory appearance lasts until you use this property again or remove the armor.',
        source: 'DMG'
    },
    'gloves-of-missile-snaring': {
        name: 'Gloves of Missile Snaring',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 0,
        cost: '500 gp',
        costValue: 50000,
        attunement: 'any',
        description: 'These gloves seem to almost meld into your hands when you don them. When a ranged weapon attack hits you while you\'re wearing them, you can use your reaction to reduce the damage by 1d10 + your Dexterity modifier, provided that you have a free hand. If you reduce the damage to 0, you can catch the missile if it is small enough for you to hold in that hand.',
        source: 'DMG'
    },
    'gloves-of-swimming-and-climbing': {
        name: 'Gloves of Swimming and Climbing',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 0,
        cost: '500 gp',
        costValue: 50000,
        attunement: 'any',
        description: 'While wearing these gloves, climbing and swimming don\'t cost you extra movement, and you gain a +5 bonus to Strength (Athletics) checks made to climb or swim.',
        source: 'DMG'
    },
    'gloves-of-thievery': {
        name: 'Gloves of Thievery',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 0,
        cost: '500 gp',
        costValue: 50000,
        attunement: 'none',
        description: 'These gloves are invisible while worn. While wearing them, you gain a +5 bonus to Dexterity (Sleight of Hand) checks and Dexterity checks made to pick locks.',
        source: 'DMG'
    },
    'goggles-of-night': {
        name: 'Goggles of Night',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 0,
        cost: '500 gp',
        costValue: 50000,
        attunement: 'none',
        description: 'While wearing these dark lenses, you have darkvision out to a range of 60 feet. If you already have darkvision, wearing the goggles increases its range by 60 feet.',
        source: 'DMG'
    },

    // ============================================
    // H ITEMS
    // ============================================
    
    'hammer-of-thunderbolts': {
        name: 'Hammer of Thunderbolts',
        type: 'weapon',
        subtype: 'maul',
        rarity: 'legendary',
        weight: 10,
        cost: '16,000 gp',
        costValue: 1600000,
        attunement: 'any',
        damage: '2d6',
        damageType: 'bludgeoning',
        properties: ['+1 to attack and damage'],
        description: 'You gain a +1 bonus to attack and damage rolls made with this magic weapon. Giant\'s Bane: You must be wearing a belt of giant strength (any variety) and gauntlets of ogre power to attune to this weapon. The attunement ends if you take off either of those items. While you are attuned to this weapon and holding it, your Strength score increases by 4 and can exceed 20, but not 30. When you roll a 20 on an attack roll made with this weapon against a giant, the giant must succeed on a DC 17 Constitution saving throw or die. The hammer also has 5 charges. While attuned to it, you can expend 1 charge and make a ranged weapon attack with the hammer, hurling it as if it had the thrown property with a normal range of 20 feet and a long range of 60 feet. If the attack hits, the hammer unleashes a thunderclap audible out to 300 feet. The target and every creature within 30 feet of it must succeed on a DC 17 Constitution saving throw or be stunned until the end of your next turn.',
        source: 'DMG'
    },
    'handy-haversack': {
        name: 'Handy Haversack',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 5,
        cost: '2,000 gp',
        costValue: 200000,
        attunement: 'none',
        capacity: '120 lbs total',
        description: 'This backpack has a central pouch and two side pouches, each of which is an extradimensional space. Each side pouch can hold up to 20 pounds of material, not exceeding a volume of 2 cubic feet. The large central pouch can hold up to 8 cubic feet or 80 pounds of material. The backpack always weighs 5 pounds, regardless of its contents. Placing an object in the haversack follows the normal rules for interacting with objects. Retrieving an item from the haversack requires you to use an action. When you reach into the haversack for a specific item, the item is always magically on top.',
        source: 'DMG'
    },
    'hat-of-disguise': {
        name: 'Hat of Disguise',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 0,
        cost: '500 gp',
        costValue: 50000,
        attunement: 'any',
        description: 'While wearing this hat, you can use an action to cast the Disguise Self spell from it at will. The spell ends if the hat is removed.',
        source: 'DMG'
    },
    'headband-of-intellect': {
        name: 'Headband of Intellect',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 0,
        cost: '500 gp',
        costValue: 50000,
        attunement: 'any',
        description: 'Your Intelligence score is 19 while you wear this headband. It has no effect on you if your Intelligence is already 19 or higher.',
        source: 'DMG'
    },
    'helm-of-brilliance': {
        name: 'Helm of Brilliance',
        type: 'wondrous-item',
        rarity: 'very-rare',
        weight: 3,
        cost: '17,000 gp',
        costValue: 1700000,
        attunement: 'any',
        description: 'This dazzling helm is set with 1d10 diamonds, 2d10 rubies, 3d10 fire opals, and 4d10 opals. Any gem pried from the helm crumbles to dust. When all the gems are removed or destroyed, the helm loses its magic. You gain the following benefits while wearing it: You can use an action to cast one of the following spells (save DC 18), using one of the helm\'s gems of the specified type as a component: Daylight (opal), Fireball (fire opal), Prismatic Spray (diamond), or Wall of Fire (ruby). The gem is destroyed when the spell is cast and disappears from the helm. As long as it has at least one diamond, the helm emits dim light in a 30-foot radius when at least one undead is within that area. As long as it has at least one ruby, you have resistance to fire damage. As long as it has at least one fire opal, you can use an action and speak a command word to cause one weapon you are holding to burst into flames. The flames emit bright light in a 10-foot radius and dim light for an additional 10 feet. The flames are harmless to you and the weapon. When you hit with an attack using the blazing weapon, the target takes an extra 1d6 fire damage. The flames last until you use a bonus action to speak the command word again or until you drop or stow the weapon.',
        source: 'DMG'
    },
    'helm-of-comprehending-languages': {
        name: 'Helm of Comprehending Languages',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 3,
        cost: '500 gp',
        costValue: 50000,
        attunement: 'none',
        description: 'While wearing this helm, you can use an action to cast the Comprehend Languages spell from it at will.',
        source: 'DMG'
    },
    'helm-of-telepathy': {
        name: 'Helm of Telepathy',
        type: 'wondrous-item',
        rarity: 'uncommon',
        weight: 3,
        cost: '500 gp',
        costValue: 50000,
        attunement: 'any',
        description: 'While wearing this helm, you can use an action to cast the Detect Thoughts spell (save DC 13) from it. As long as you maintain concentration on the spell, you can use a bonus action to send a telepathic message to a creature you are focused on. It can reply — using a bonus action to do so — while your focus on it continues. While focusing on a creature with Detect Thoughts, you can use an action to cast the Suggestion spell (save DC 13) from the helm on that creature. Once used, the suggestion property can\'t be used again until the next dawn.',
        source: 'DMG'
    },
    'helm-of-teleportation': {
        name: 'Helm of Teleportation',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 3,
        cost: '64,000 gp',
        costValue: 6400000,
        attunement: 'any',
        charges: 3,
        recharge: '1d3 at dawn',
        description: 'This helm has 3 charges. While wearing it, you can use an action and expend 1 charge to cast the Teleport spell from it. The helm regains 1d3 expended charges daily at dawn.',
        source: 'DMG'
    },
    'holy-avenger': {
        name: 'Holy Avenger',
        type: 'weapon',
        subtype: 'any sword',
        rarity: 'legendary',
        weight: 3,
        cost: '165,000 gp',
        costValue: 16500000,
        attunement: 'paladin',
        properties: ['+3 to attack and damage'],
        description: 'You gain a +3 bonus to attack and damage rolls made with this magic weapon. When you hit a fiend or an undead with it, that creature takes an extra 2d10 radiant damage. While you hold the drawn sword, it creates an aura in a 10-foot radius around you. You and all creatures friendly to you in the aura have advantage on saving throws against spells and other magical effects. If you have 17 or more levels in the paladin class, the radius of the aura increases to 30 feet.',
        source: 'DMG'
    },
    'horn-of-blasting': {
        name: 'Horn of Blasting',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 2,
        cost: '450 gp',
        costValue: 45000,
        attunement: 'none',
        description: 'You can use an action to speak the horn\'s command word and then blow the horn, which emits a thunderous blast in a 30-foot cone that is audible 600 feet away. Each creature in the cone must make a DC 15 Constitution saving throw. On a failed save, a creature takes 5d6 thunder damage and is deafened for 1 minute. On a successful save, a creature takes half as much damage and isn\'t deafened. Creatures and objects made of glass or crystal have disadvantage on the saving throw and take 10d6 thunder damage instead of 5d6. Each use of the horn\'s magic has a 20 percent chance of causing the horn to explode. The explosion deals 10d6 fire damage to the blower and destroys the horn.',
        source: 'DMG'
    },
    'horn-of-valhalla-silver': {
        name: 'Horn of Valhalla (Silver)',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 2,
        cost: '5,600 gp',
        costValue: 560000,
        attunement: 'none',
        description: 'You can use an action to blow this horn. In response, warrior spirits from the plane of Ysgard appear within 60 feet of you. They use the statistics of a berserker. They return to Ysgard after 1 hour or when they drop to 0 hit points. Once you use the horn, it can\'t be used again until 7 days have passed. Silver: 2d4+2 berserkers. If you aren\'t proficient with all simple weapons, the berserkers attack you.',
        source: 'DMG'
    },
    'horn-of-valhalla-brass': {
        name: 'Horn of Valhalla (Brass)',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 2,
        cost: '8,400 gp',
        costValue: 840000,
        attunement: 'none',
        description: 'Brass: 3d4+3 berserkers. To use the brass horn, you must be proficient with all simple weapons.',
        source: 'DMG'
    },
    'horn-of-valhalla-bronze': {
        name: 'Horn of Valhalla (Bronze)',
        type: 'wondrous-item',
        rarity: 'very-rare',
        weight: 2,
        cost: '11,200 gp',
        costValue: 1120000,
        attunement: 'none',
        description: 'Bronze: 4d4+4 berserkers. To use the bronze horn, you must be proficient with medium armor.',
        source: 'DMG'
    },
    'horn-of-valhalla-iron': {
        name: 'Horn of Valhalla (Iron)',
        type: 'wondrous-item',
        rarity: 'legendary',
        weight: 2,
        cost: '14,000 gp',
        costValue: 1400000,
        attunement: 'none',
        description: 'Iron: 5d4+5 berserkers. To use the iron horn, you must be proficient with all martial weapons.',
        source: 'DMG'
    },
    'horseshoes-of-a-zephyr': {
        name: 'Horseshoes of a Zephyr',
        type: 'wondrous-item',
        rarity: 'very-rare',
        weight: 4,
        cost: '1,500 gp',
        costValue: 150000,
        attunement: 'none',
        description: 'These iron horseshoes come in a set of four. While all four shoes are affixed to the hooves of a horse or similar creature, they allow the creature to move normally while floating 4 inches above the ground. This effect means the creature can cross or stand above nonsolid or unstable surfaces, such as water or lava. The creature leaves no tracks and ignores difficult terrain. In addition, the creature can move at normal speed for up to 12 hours a day without suffering exhaustion from a forced march.',
        source: 'DMG'
    },
    'horseshoes-of-speed': {
        name: 'Horseshoes of Speed',
        type: 'wondrous-item',
        rarity: 'rare',
        weight: 4,
        cost: '5,000 gp',
        costValue: 500000,
        attunement: 'none',
        description: 'These iron horseshoes come in a set of four. While all four shoes are affixed to the hooves of a horse or similar creature, they increase the creature\'s walking speed by 30 feet.',
        source: 'DMG'
    }
};
