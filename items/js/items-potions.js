// ============================================
// ITEMS DATABASE - POTIONS
// ============================================
// All potions from D&D 5e sourcebooks (pre-2024)

const potionItems = {
    // ============================================
    // HEALING POTIONS (PHB/DMG)
    // ============================================
    
    'potion-of-healing': {
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
    'potion-of-greater-healing': {
        name: 'Potion of Greater Healing',
        type: 'potion',
        rarity: 'uncommon',
        weight: 0.5,
        cost: '150 gp',
        costValue: 15000,
        consumable: true,
        effect: 'You regain 4d4 + 4 hit points when you drink this potion.',
        description: 'You regain 4d4 + 4 hit points when you drink this potion. The potion\'s red liquid glimmers when agitated.',
        source: 'DMG'
    },
    'potion-of-superior-healing': {
        name: 'Potion of Superior Healing',
        type: 'potion',
        rarity: 'rare',
        weight: 0.5,
        cost: '450 gp',
        costValue: 45000,
        consumable: true,
        effect: 'You regain 8d4 + 8 hit points when you drink this potion.',
        description: 'You regain 8d4 + 8 hit points when you drink this potion. The potion\'s red liquid glimmers when agitated.',
        source: 'DMG'
    },
    'potion-of-supreme-healing': {
        name: 'Potion of Supreme Healing',
        type: 'potion',
        rarity: 'very-rare',
        weight: 0.5,
        cost: '1,350 gp',
        costValue: 135000,
        consumable: true,
        effect: 'You regain 10d4 + 20 hit points when you drink this potion.',
        description: 'You regain 10d4 + 20 hit points when you drink this potion. The potion\'s red liquid glimmers when agitated.',
        source: 'DMG'
    },

    // ============================================
    // GIANT STRENGTH POTIONS (DMG)
    // ============================================
    
    'potion-of-hill-giant-strength': {
        name: 'Potion of Hill Giant Strength',
        type: 'potion',
        rarity: 'uncommon',
        weight: 0.5,
        cost: '180 gp',
        costValue: 18000,
        consumable: true,
        effect: 'Your Strength score changes to 21 for 1 hour.',
        description: 'When you drink this potion, your Strength score changes to 21 for 1 hour. The potion has no effect on you if your Strength is equal to or greater than that score. This potion\'s transparent liquid has floating in it a sliver of fingernail from a hill giant.',
        source: 'DMG'
    },
    'potion-of-frost-giant-strength': {
        name: 'Potion of Frost Giant Strength',
        type: 'potion',
        rarity: 'rare',
        weight: 0.5,
        cost: '450 gp',
        costValue: 45000,
        consumable: true,
        effect: 'Your Strength score changes to 23 for 1 hour.',
        description: 'When you drink this potion, your Strength score changes to 23 for 1 hour. The potion has no effect on you if your Strength is equal to or greater than that score. This potion\'s transparent liquid has floating in it a sliver of fingernail from a frost giant.',
        source: 'DMG'
    },
    'potion-of-stone-giant-strength': {
        name: 'Potion of Stone Giant Strength',
        type: 'potion',
        rarity: 'rare',
        weight: 0.5,
        cost: '450 gp',
        costValue: 45000,
        consumable: true,
        effect: 'Your Strength score changes to 23 for 1 hour.',
        description: 'When you drink this potion, your Strength score changes to 23 for 1 hour. The potion has no effect on you if your Strength is equal to or greater than that score. This potion\'s transparent liquid has floating in it a sliver of fingernail from a stone giant.',
        source: 'DMG'
    },
    'potion-of-fire-giant-strength': {
        name: 'Potion of Fire Giant Strength',
        type: 'potion',
        rarity: 'rare',
        weight: 0.5,
        cost: '450 gp',
        costValue: 45000,
        consumable: true,
        effect: 'Your Strength score changes to 25 for 1 hour.',
        description: 'When you drink this potion, your Strength score changes to 25 for 1 hour. The potion has no effect on you if your Strength is equal to or greater than that score. This potion\'s transparent liquid has floating in it a sliver of fingernail from a fire giant.',
        source: 'DMG'
    },
    'potion-of-cloud-giant-strength': {
        name: 'Potion of Cloud Giant Strength',
        type: 'potion',
        rarity: 'very-rare',
        weight: 0.5,
        cost: '1,500 gp',
        costValue: 150000,
        consumable: true,
        effect: 'Your Strength score changes to 27 for 1 hour.',
        description: 'When you drink this potion, your Strength score changes to 27 for 1 hour. The potion has no effect on you if your Strength is equal to or greater than that score. This potion\'s transparent liquid has floating in it a sliver of fingernail from a cloud giant.',
        source: 'DMG'
    },
    'potion-of-storm-giant-strength': {
        name: 'Potion of Storm Giant Strength',
        type: 'potion',
        rarity: 'legendary',
        weight: 0.5,
        cost: '5,000 gp',
        costValue: 500000,
        consumable: true,
        effect: 'Your Strength score changes to 29 for 1 hour.',
        description: 'When you drink this potion, your Strength score changes to 29 for 1 hour. The potion has no effect on you if your Strength is equal to or greater than that score. This potion\'s transparent liquid has floating in it a sliver of fingernail from a storm giant.',
        source: 'DMG'
    },

    // ============================================
    // RESISTANCE POTIONS (DMG)
    // ============================================
    
    'potion-of-resistance-acid': {
        name: 'Potion of Acid Resistance',
        type: 'potion',
        rarity: 'uncommon',
        weight: 0.5,
        cost: '300 gp',
        costValue: 30000,
        consumable: true,
        effect: 'You have resistance to acid damage for 1 hour.',
        description: 'When you drink this potion, you gain resistance to acid damage for 1 hour.',
        source: 'DMG'
    },
    'potion-of-resistance-cold': {
        name: 'Potion of Cold Resistance',
        type: 'potion',
        rarity: 'uncommon',
        weight: 0.5,
        cost: '300 gp',
        costValue: 30000,
        consumable: true,
        effect: 'You have resistance to cold damage for 1 hour.',
        description: 'When you drink this potion, you gain resistance to cold damage for 1 hour.',
        source: 'DMG'
    },
    'potion-of-resistance-fire': {
        name: 'Potion of Fire Resistance',
        type: 'potion',
        rarity: 'uncommon',
        weight: 0.5,
        cost: '300 gp',
        costValue: 30000,
        consumable: true,
        effect: 'You have resistance to fire damage for 1 hour.',
        description: 'When you drink this potion, you gain resistance to fire damage for 1 hour.',
        source: 'DMG'
    },
    'potion-of-resistance-force': {
        name: 'Potion of Force Resistance',
        type: 'potion',
        rarity: 'uncommon',
        weight: 0.5,
        cost: '300 gp',
        costValue: 30000,
        consumable: true,
        effect: 'You have resistance to force damage for 1 hour.',
        description: 'When you drink this potion, you gain resistance to force damage for 1 hour.',
        source: 'DMG'
    },
    'potion-of-resistance-lightning': {
        name: 'Potion of Lightning Resistance',
        type: 'potion',
        rarity: 'uncommon',
        weight: 0.5,
        cost: '300 gp',
        costValue: 30000,
        consumable: true,
        effect: 'You have resistance to lightning damage for 1 hour.',
        description: 'When you drink this potion, you gain resistance to lightning damage for 1 hour.',
        source: 'DMG'
    },
    'potion-of-resistance-necrotic': {
        name: 'Potion of Necrotic Resistance',
        type: 'potion',
        rarity: 'uncommon',
        weight: 0.5,
        cost: '300 gp',
        costValue: 30000,
        consumable: true,
        effect: 'You have resistance to necrotic damage for 1 hour.',
        description: 'When you drink this potion, you gain resistance to necrotic damage for 1 hour.',
        source: 'DMG'
    },
    'potion-of-resistance-poison': {
        name: 'Potion of Poison Resistance',
        type: 'potion',
        rarity: 'uncommon',
        weight: 0.5,
        cost: '300 gp',
        costValue: 30000,
        consumable: true,
        effect: 'You have resistance to poison damage for 1 hour.',
        description: 'When you drink this potion, you gain resistance to poison damage for 1 hour.',
        source: 'DMG'
    },
    'potion-of-resistance-psychic': {
        name: 'Potion of Psychic Resistance',
        type: 'potion',
        rarity: 'uncommon',
        weight: 0.5,
        cost: '300 gp',
        costValue: 30000,
        consumable: true,
        effect: 'You have resistance to psychic damage for 1 hour.',
        description: 'When you drink this potion, you gain resistance to psychic damage for 1 hour.',
        source: 'DMG'
    },
    'potion-of-resistance-radiant': {
        name: 'Potion of Radiant Resistance',
        type: 'potion',
        rarity: 'uncommon',
        weight: 0.5,
        cost: '300 gp',
        costValue: 30000,
        consumable: true,
        effect: 'You have resistance to radiant damage for 1 hour.',
        description: 'When you drink this potion, you gain resistance to radiant damage for 1 hour.',
        source: 'DMG'
    },
    'potion-of-resistance-thunder': {
        name: 'Potion of Thunder Resistance',
        type: 'potion',
        rarity: 'uncommon',
        weight: 0.5,
        cost: '300 gp',
        costValue: 30000,
        consumable: true,
        effect: 'You have resistance to thunder damage for 1 hour.',
        description: 'When you drink this potion, you gain resistance to thunder damage for 1 hour.',
        source: 'DMG'
    },

    // ============================================
    // OTHER DMG POTIONS
    // ============================================
    
    'potion-of-animal-friendship': {
        name: 'Potion of Animal Friendship',
        type: 'potion',
        rarity: 'uncommon',
        weight: 0.5,
        cost: '200 gp',
        costValue: 20000,
        consumable: true,
        effect: 'Cast Animal Friendship (DC 13) for 1 hour after drinking.',
        description: 'When you drink this potion, you can cast the Animal Friendship spell (save DC 13) for 1 hour at will. Agitating this muddy liquid brings little bits into view: a fish scale, a hummingbird tongue, a cat claw, or a squirrel hair.',
        source: 'DMG'
    },
    'potion-of-clairvoyance': {
        name: 'Potion of Clairvoyance',
        type: 'potion',
        rarity: 'rare',
        weight: 0.5,
        cost: '960 gp',
        costValue: 96000,
        consumable: true,
        effect: 'Gain the effect of the Clairvoyance spell.',
        description: 'When you drink this potion, you gain the effect of the Clairvoyance spell. An eyeball bobs in this yellowish liquid but vanishes when the potion is opened.',
        source: 'DMG'
    },
    'potion-of-climbing': {
        name: 'Potion of Climbing',
        type: 'potion',
        rarity: 'common',
        weight: 0.5,
        cost: '75 gp',
        costValue: 7500,
        consumable: true,
        effect: 'Gain climbing speed equal to walking speed for 1 hour. Advantage on Strength (Athletics) checks to climb.',
        description: 'When you drink this potion, you gain a climbing speed equal to your walking speed for 1 hour. During this time, you have advantage on Strength (Athletics) checks you make to climb. The potion is separated into brown, silver, and gray layers resembling bands of stone. Shaking the bottle fails to mix the colors.',
        source: 'DMG'
    },
    'potion-of-diminution': {
        name: 'Potion of Diminution',
        type: 'potion',
        rarity: 'rare',
        weight: 0.5,
        cost: '900 gp',
        costValue: 90000,
        consumable: true,
        effect: 'Gain the "reduce" effect of Enlarge/Reduce for 1d4 hours.',
        description: 'When you drink this potion, you gain the "reduce" effect of the Enlarge/Reduce spell for 1d4 hours (no concentration required). The red in the potion\'s liquid continuously contracts to a tiny bead and then expands to color the clear liquid around it. Shaking the bottle fails to interrupt this process.',
        source: 'DMG'
    },
    'potion-of-flying': {
        name: 'Potion of Flying',
        type: 'potion',
        rarity: 'very-rare',
        weight: 0.5,
        cost: '2,500 gp',
        costValue: 250000,
        consumable: true,
        effect: 'Gain flying speed equal to walking speed for 1 hour. Hover.',
        description: 'When you drink this potion, you gain a flying speed equal to your walking speed for 1 hour and can hover. If you\'re in the air when the potion wears off, you fall unless you have some other means of staying aloft. This potion\'s clear liquid floats at the top of its container and has cloudy white impurities drifting in it.',
        source: 'DMG'
    },
    'potion-of-gaseous-form': {
        name: 'Potion of Gaseous Form',
        type: 'potion',
        rarity: 'rare',
        weight: 0.5,
        cost: '400 gp',
        costValue: 40000,
        consumable: true,
        effect: 'Gain the effect of Gaseous Form for 1 hour or until you end it as a bonus action.',
        description: 'When you drink this potion, you gain the effect of the Gaseous Form spell for 1 hour (no concentration required) or until you end the effect as a bonus action. This potion\'s container seems to hold fog that moves and pours like water.',
        source: 'DMG'
    },
    'potion-of-growth': {
        name: 'Potion of Growth',
        type: 'potion',
        rarity: 'uncommon',
        weight: 0.5,
        cost: '270 gp',
        costValue: 27000,
        consumable: true,
        effect: 'Gain the "enlarge" effect of Enlarge/Reduce for 1d4 hours.',
        description: 'When you drink this potion, you gain the "enlarge" effect of the Enlarge/Reduce spell for 1d4 hours (no concentration required). The red in the potion\'s liquid continuously expands from a tiny bead to color the clear liquid around it and then contracts. Shaking the bottle fails to interrupt this process.',
        source: 'DMG'
    },
    'potion-of-heroism': {
        name: 'Potion of Heroism',
        type: 'potion',
        rarity: 'rare',
        weight: 0.5,
        cost: '360 gp',
        costValue: 36000,
        consumable: true,
        effect: 'Gain 10 temporary hit points and effects of Bless spell for 1 hour.',
        description: 'For 1 hour after drinking it, you gain 10 temporary hit points that last for 1 hour. For the same duration, you are under the effect of the Bless spell (no concentration required). This blue potion bubbles and steams as if boiling.',
        source: 'DMG'
    },
    'potion-of-invisibility': {
        name: 'Potion of Invisibility',
        type: 'potion',
        rarity: 'very-rare',
        weight: 0.5,
        cost: '2,500 gp',
        costValue: 250000,
        consumable: true,
        effect: 'Become invisible for 1 hour. Ends if you attack or cast a spell.',
        description: 'This potion\'s container looks empty but feels as though it holds liquid. When you drink it, you become invisible for 1 hour. Anything you wear or carry is invisible with you. The effect ends early if you attack or cast a spell.',
        source: 'DMG'
    },
    'potion-of-mind-reading': {
        name: 'Potion of Mind Reading',
        type: 'potion',
        rarity: 'rare',
        weight: 0.5,
        cost: '500 gp',
        costValue: 50000,
        consumable: true,
        effect: 'Gain the effect of Detect Thoughts (DC 13) for 1 minute.',
        description: 'When you drink this potion, you gain the effect of the Detect Thoughts spell (save DC 13). The potion\'s dense, purple liquid has an ovoid cloud of pink floating in it.',
        source: 'DMG'
    },
    'potion-of-poison': {
        name: 'Potion of Poison',
        type: 'potion',
        rarity: 'uncommon',
        weight: 0.5,
        cost: '100 gp',
        costValue: 10000,
        consumable: true,
        effect: 'Take 3d6 poison damage and poisoned condition. DC 13 Con save for half and no condition.',
        description: 'This concoction looks, smells, and tastes like a Potion of Healing or other beneficial potion. However, it is actually poison masked by illusion magic. An Identify spell reveals its true nature. If you drink it, you take 3d6 poison damage, and you must succeed on a DC 13 Constitution saving throw or be poisoned. At the start of each of your turns while you are poisoned in this way, you take 3d6 poison damage. At the end of each of your turns, you can repeat the saving throw. On a successful save, the poison damage you take on your subsequent turns decreases by 1d6. The poison ends when the damage decreases to 0.',
        source: 'DMG'
    },
    'potion-of-speed': {
        name: 'Potion of Speed',
        type: 'potion',
        rarity: 'very-rare',
        weight: 0.5,
        cost: '2,000 gp',
        costValue: 200000,
        consumable: true,
        effect: 'Gain the effect of Haste for 1 minute (no concentration).',
        description: 'When you drink this potion, you gain the effect of the Haste spell for 1 minute (no concentration required). The potion\'s yellow fluid is streaked with black and swirls on its own.',
        source: 'DMG'
    },
    'potion-of-vitality': {
        name: 'Potion of Vitality',
        type: 'potion',
        rarity: 'very-rare',
        weight: 0.5,
        cost: '1,500 gp',
        costValue: 150000,
        consumable: true,
        effect: 'Remove exhaustion, cure disease and poison, maximize healing dice for 24 hours.',
        description: 'When you drink this potion, it removes any exhaustion you are suffering and cures any disease or poison affecting you. For the next 24 hours, you regain the maximum number of hit points for any Hit Die you spend. The potion\'s crimson liquid regularly pulses with dull light, calling to mind a heartbeat.',
        source: 'DMG'
    },
    'potion-of-water-breathing': {
        name: 'Potion of Water Breathing',
        type: 'potion',
        rarity: 'uncommon',
        weight: 0.5,
        cost: '180 gp',
        costValue: 18000,
        consumable: true,
        effect: 'Breathe underwater for 1 hour.',
        description: 'You can breathe underwater for 1 hour after drinking this potion. Its cloudy green fluid smells of the sea and has a jellyfish-like bubble floating in it.',
        source: 'DMG'
    },
    'philter-of-love': {
        name: 'Philter of Love',
        type: 'potion',
        rarity: 'uncommon',
        weight: 0.5,
        cost: '200 gp',
        costValue: 20000,
        consumable: true,
        effect: 'Charmed by first creature you see for 1 hour (DC 14 Wis save).',
        description: 'The next time you see a creature within 10 minutes after drinking this philter, you become charmed by that creature for 1 hour. If the creature is of a species and gender you are normally attracted to, you regard it as your true love while you are charmed. This potion\'s rose-hued, effervescent liquid contains one easy-to-miss bubble shaped like a heart.',
        source: 'DMG'
    },
    'elixir-of-health': {
        name: 'Elixir of Health',
        type: 'potion',
        rarity: 'rare',
        weight: 0.5,
        cost: '500 gp',
        costValue: 50000,
        consumable: true,
        effect: 'Cure disease, blindness, deafness, paralysis, and poison.',
        description: 'When you drink this potion, it cures any disease afflicting you, and it removes the blinded, deafened, paralyzed, and poisoned conditions. The clear red liquid has tiny bubbles of light in it.',
        source: 'DMG'
    },
    'oil-of-etherealness': {
        name: 'Oil of Etherealness',
        type: 'potion',
        rarity: 'rare',
        weight: 0.5,
        cost: '1,920 gp',
        costValue: 192000,
        consumable: true,
        effect: 'Gain Etherealness effect for 1 hour when applied.',
        description: 'Beads of this cloudy gray oil form on the outside of its container and quickly evaporate. The oil can cover a Medium or smaller creature, along with the equipment it\'s wearing and carrying (one additional vial is required for each size category above Medium). Applying the oil takes 10 minutes. The affected creature then gains the effect of the Etherealness spell for 1 hour.',
        source: 'DMG'
    },
    'oil-of-sharpness': {
        name: 'Oil of Sharpness',
        type: 'potion',
        rarity: 'very-rare',
        weight: 0.5,
        cost: '3,200 gp',
        costValue: 320000,
        consumable: true,
        effect: 'Weapon becomes +3 weapon for 1 hour.',
        description: 'This clear, gelatinous oil sparkles with tiny, ultrathin silver shards. The oil can coat one slashing or piercing weapon or up to 5 pieces of slashing or piercing ammunition. Applying the oil takes 1 minute. For 1 hour, the coated item is magical and has a +3 bonus to attack and damage rolls.',
        source: 'DMG'
    },
    'oil-of-slipperiness': {
        name: 'Oil of Slipperiness',
        type: 'potion',
        rarity: 'uncommon',
        weight: 0.5,
        cost: '480 gp',
        costValue: 48000,
        consumable: true,
        effect: 'Freedom of Movement effect for 8 hours, or cover 10-ft square.',
        description: 'This sticky black unguent is thick and heavy in the container, but it flows quickly when poured. The oil can cover a Medium or smaller creature, along with the equipment it\'s wearing and carrying (one additional vial is required for each size category above Medium). Applying the oil takes 10 minutes. The affected creature then gains the effect of a Freedom of Movement spell for 8 hours. Alternatively, the oil can be poured on the ground as an action, where it covers a 10-foot square, duplicating the effect of the Grease spell in that area for 8 hours.',
        source: 'DMG'
    },
    'potion-of-longevity': {
        name: 'Potion of Longevity',
        type: 'potion',
        rarity: 'very-rare',
        weight: 0.5,
        cost: '9,000 gp',
        costValue: 900000,
        consumable: true,
        effect: 'Reduce physical age by 1d6+6 years. 10% cumulative chance to age instead.',
        description: 'When you drink this potion, your physical age is reduced by 1d6 + 6 years, to a minimum of 13 years. Each time you subsequently drink a Potion of Longevity, there is 10 percent cumulative chance that you instead age by 1d6 + 6 years. Suspended in this amber liquid are a scorpion\'s tail, an adder\'s fang, a dead spider, and a tiny heart that, against all reason, is still beating. These ingredients vanish when the potion is opened.',
        source: 'DMG'
    },

    // ============================================
    // XANATHAR'S GUIDE POTIONS
    // ============================================
    
    'potion-of-watchful-rest': {
        name: 'Potion of Watchful Rest',
        type: 'potion',
        rarity: 'common',
        weight: 0.5,
        cost: '50 gp',
        costValue: 5000,
        consumable: true,
        effect: 'Long rest in 4 hours while remaining semiconscious.',
        description: 'When you drink this potion, you gain the following benefits for the next 8 hours: magic can\'t put you to sleep, and you can remain awake during a long rest and still gain its benefits.',
        source: 'XGE'
    },

    // ============================================
    // TASHA'S CAULDRON POTIONS
    // ============================================
    
    'potion-of-advantage': {
        name: 'Potion of Advantage',
        type: 'potion',
        rarity: 'uncommon',
        weight: 0.5,
        cost: '300 gp',
        costValue: 30000,
        consumable: true,
        effect: 'Gain advantage on one ability check, attack roll, or saving throw within 1 hour.',
        description: 'When you drink this potion, you can choose to gain advantage on one ability check, attack roll, or saving throw of your choice that you make within the next hour. The potion\'s golden liquid sparkles with small motes of light.',
        source: 'TCE'
    },
    'potion-of-possibility': {
        name: 'Potion of Possibility',
        type: 'potion',
        rarity: 'very-rare',
        weight: 0.5,
        cost: '2,000 gp',
        costValue: 200000,
        consumable: true,
        effect: 'Gain 2d4 luck points to add to d20 rolls.',
        description: 'When you drink this potion, roll 2d4 and record the total. For the next hour, you can add one or more of these dice to one ability check, attack roll, or saving throw you make, or to the result of another creature\'s attack roll against you. You must choose to do so before you know if the roll is a success or failure, and once you use the luck, the die is expended. You can use multiple dice on the same roll. The potion\'s clear liquid shimmers, revealing a window into alternate realities.',
        source: 'TCE'
    }
};

// ============================================
// POISONS (DMG)
// ============================================

const poisonItems = {
    'assassins-blood': {
        name: 'Assassin\'s Blood',
        type: 'potion',
        subtype: 'poison-ingested',
        rarity: 'uncommon',
        weight: 0,
        cost: '150 gp',
        costValue: 15000,
        consumable: true,
        effect: 'DC 10 Con save or 6 (1d12) poison damage and poisoned for 24 hours.',
        description: 'A creature subjected to this poison must make a DC 10 Constitution saving throw. On a failed save, it takes 6 (1d12) poison damage and is poisoned for 24 hours. On a successful save, the creature takes half damage and isn\'t poisoned.',
        source: 'DMG'
    },
    'burnt-othur-fumes': {
        name: 'Burnt Othur Fumes',
        type: 'potion',
        subtype: 'poison-inhaled',
        rarity: 'rare',
        weight: 0,
        cost: '500 gp',
        costValue: 50000,
        consumable: true,
        effect: 'DC 13 Con save or 10 (3d6) poison damage and repeat save each turn.',
        description: 'A creature subjected to this poison must succeed on a DC 13 Constitution saving throw or take 10 (3d6) poison damage, and must repeat the saving throw at the start of each of its turns. On each successive failed save, the character takes 3 (1d6) poison damage. After three successful saves, the poison ends.',
        source: 'DMG'
    },
    'carrion-crawler-mucus': {
        name: 'Carrion Crawler Mucus',
        type: 'potion',
        subtype: 'poison-contact',
        rarity: 'uncommon',
        weight: 0,
        cost: '200 gp',
        costValue: 20000,
        consumable: true,
        effect: 'DC 13 Con save or poisoned and paralyzed for 1 minute.',
        description: 'This poison must be harvested from a dead or incapacitated carrion crawler. A creature subjected to this poison must succeed on a DC 13 Constitution saving throw or be poisoned for 1 minute. The poisoned creature is paralyzed. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.',
        source: 'DMG'
    },
    'drow-poison': {
        name: 'Drow Poison',
        type: 'potion',
        subtype: 'poison-injury',
        rarity: 'uncommon',
        weight: 0,
        cost: '200 gp',
        costValue: 20000,
        consumable: true,
        effect: 'DC 13 Con save or poisoned and unconscious for 1 hour.',
        description: 'This poison is typically made only by the drow, and only in a place far removed from sunlight. A creature subjected to this poison must succeed on a DC 13 Constitution saving throw or be poisoned for 1 hour. If the saving throw fails by 5 or more, the creature is also unconscious while poisoned in this way. The creature wakes up if it takes damage or if another creature takes an action to shake it awake.',
        source: 'DMG'
    },
    'essence-of-ether': {
        name: 'Essence of Ether',
        type: 'potion',
        subtype: 'poison-inhaled',
        rarity: 'rare',
        weight: 0,
        cost: '300 gp',
        costValue: 30000,
        consumable: true,
        effect: 'DC 15 Con save or poisoned and unconscious for 8 hours.',
        description: 'A creature subjected to this poison must succeed on a DC 15 Constitution saving throw or become poisoned for 8 hours. The poisoned creature is unconscious. The creature wakes up if it takes damage or if another creature takes an action to shake it awake.',
        source: 'DMG'
    },
    'malice': {
        name: 'Malice',
        type: 'potion',
        subtype: 'poison-inhaled',
        rarity: 'uncommon',
        weight: 0,
        cost: '250 gp',
        costValue: 25000,
        consumable: true,
        effect: 'DC 15 Con save or poisoned and blinded.',
        description: 'A creature subjected to this poison must succeed on a DC 15 Constitution saving throw or become poisoned for 1 hour. The poisoned creature is blinded.',
        source: 'DMG'
    },
    'midnight-tears': {
        name: 'Midnight Tears',
        type: 'potion',
        subtype: 'poison-ingested',
        rarity: 'very-rare',
        weight: 0,
        cost: '1,500 gp',
        costValue: 150000,
        consumable: true,
        effect: 'At midnight, DC 17 Con save or 31 (9d6) poison damage.',
        description: 'A creature that ingests this poison suffers no effect until the stroke of midnight. If the poison has not been neutralized before then, the creature must succeed on a DC 17 Constitution saving throw, taking 31 (9d6) poison damage on a failed save, or half as much damage on a successful one.',
        source: 'DMG'
    },
    'oil-of-taggit': {
        name: 'Oil of Taggit',
        type: 'potion',
        subtype: 'poison-contact',
        rarity: 'uncommon',
        weight: 0,
        cost: '400 gp',
        costValue: 40000,
        consumable: true,
        effect: 'DC 13 Con save or poisoned and unconscious for 24 hours.',
        description: 'A creature subjected to this poison must succeed on a DC 13 Constitution saving throw or become poisoned for 24 hours. The poisoned creature is unconscious. The creature wakes up if it takes damage.',
        source: 'DMG'
    },
    'pale-tincture': {
        name: 'Pale Tincture',
        type: 'potion',
        subtype: 'poison-ingested',
        rarity: 'uncommon',
        weight: 0,
        cost: '250 gp',
        costValue: 25000,
        consumable: true,
        effect: 'DC 16 Con save or 3 (1d6) poison damage and poisoned, repeat each 24 hours.',
        description: 'A creature subjected to this poison must succeed on a DC 16 Constitution saving throw or take 3 (1d6) poison damage and become poisoned. The poisoned creature must repeat the saving throw every 24 hours, taking 3 (1d6) poison damage on a failed save. Until this poison ends, the damage the poison deals can\'t be healed by any means. After seven successful saving throws, the effect ends and the creature can heal normally.',
        source: 'DMG'
    },
    'purple-worm-poison': {
        name: 'Purple Worm Poison',
        type: 'potion',
        subtype: 'poison-injury',
        rarity: 'very-rare',
        weight: 0,
        cost: '2,000 gp',
        costValue: 200000,
        consumable: true,
        effect: 'DC 19 Con save or 42 (12d6) poison damage.',
        description: 'This poison must be harvested from a dead or incapacitated purple worm. A creature subjected to this poison must make a DC 19 Constitution saving throw, taking 42 (12d6) poison damage on a failed save, or half as much damage on a successful one.',
        source: 'DMG'
    },
    'serpent-venom': {
        name: 'Serpent Venom',
        type: 'potion',
        subtype: 'poison-injury',
        rarity: 'uncommon',
        weight: 0,
        cost: '200 gp',
        costValue: 20000,
        consumable: true,
        effect: 'DC 11 Con save or 10 (3d6) poison damage.',
        description: 'This poison must be harvested from a dead or incapacitated giant poisonous snake. A creature subjected to this poison must succeed on a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one.',
        source: 'DMG'
    },
    'torpor': {
        name: 'Torpor',
        type: 'potion',
        subtype: 'poison-ingested',
        rarity: 'rare',
        weight: 0,
        cost: '600 gp',
        costValue: 60000,
        consumable: true,
        effect: 'DC 15 Con save or poisoned and incapacitated for 4d6 hours.',
        description: 'A creature subjected to this poison must succeed on a DC 15 Constitution saving throw or become poisoned for 4d6 hours. The poisoned creature is incapacitated.',
        source: 'DMG'
    },
    'truth-serum': {
        name: 'Truth Serum',
        type: 'potion',
        subtype: 'poison-ingested',
        rarity: 'uncommon',
        weight: 0,
        cost: '150 gp',
        costValue: 15000,
        consumable: true,
        effect: 'DC 11 Con save or poisoned and can\'t knowingly lie for 1 hour.',
        description: 'A creature subjected to this poison must succeed on a DC 11 Constitution saving throw or become poisoned for 1 hour. The poisoned creature can\'t knowingly speak a lie, as if under the effect of a Zone of Truth spell.',
        source: 'DMG'
    },
    'wyvern-poison': {
        name: 'Wyvern Poison',
        type: 'potion',
        subtype: 'poison-injury',
        rarity: 'very-rare',
        weight: 0,
        cost: '1,200 gp',
        costValue: 120000,
        consumable: true,
        effect: 'DC 15 Con save or 24 (7d6) poison damage.',
        description: 'This poison must be harvested from a dead or incapacitated wyvern. A creature subjected to this poison must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one.',
        source: 'DMG'
    }
};
