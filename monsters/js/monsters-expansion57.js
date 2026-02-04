// ============================================
// ICONIC MONSTERS EXPANSION
// ============================================
// Missing legendary creatures, demon lords, archdevils, and iconic monsters

const monstersExpansion57 = {
    // ============================================
    // THE TARRASQUE - CR 30
    // ============================================
    

    // ============================================
    // DEMON LORDS
    // ============================================
    

    

    // ============================================
    // ARCHDEVILS
    // ============================================
    'asmodeus': {
        name: 'Asmodeus',
        source: 'MTF',
        size: 'large',
        type: 'fiend',
        subtype: 'devil',
        alignment: 'lawful evil',
        ac: 22,
        acType: 'natural armor',
        hp: 725,
        hitDice: '50d10+450',
        speed: { walk: '30 ft.', fly: '120 ft.' },
        abilityScores: { str: 30, dex: 21, con: 28, int: 30, wis: 28, cha: 30 },
        savingThrows: { str: 19, dex: 14, int: 19, wis: 18, cha: 19 },
        skills: { arcana: 19, deception: 19, history: 19, insight: 18, intimidation: 19, perception: 18, persuasion: 19, religion: 19 },
        damageResistances: ['cold'],
        damageImmunities: ['fire', 'poison', 'bludgeoning, piercing, and slashing from nonmagical attacks that aren\'t silvered'],
        conditionImmunities: ['charmed', 'exhaustion', 'frightened', 'poisoned'],
        senses: ['truesight 120 ft.', 'passive Perception 28'],
        languages: 'all, telepathy 120 ft.',
        cr: 30,
        environment: ['nine hells'],
        tags: ['archdevil', 'legendary'],
        traits: [
            { name: 'Legendary Resistance (5/Day)', description: 'If Asmodeus fails a saving throw, he can choose to succeed instead.' },
            { name: 'Magic Resistance', description: 'Asmodeus has advantage on saving throws against spells and other magical effects.' },
            { name: 'Magic Weapons', description: 'Asmodeus\'s weapon attacks are magical.' },
            { name: 'Regeneration', description: 'Asmodeus regains 40 hit points at the start of his turn. If he takes radiant damage, this trait doesn\'t function at the start of his next turn. Asmodeus dies only if he starts his turn with 0 hit points and doesn\'t regenerate.' },
            { name: 'Lord of the Nine', description: 'Asmodeus can\'t be surprised, and no creature can read his thoughts or determine if he is lying unless he allows it.' }
        ],
        actions: [
            { name: 'Multiattack', description: 'Asmodeus uses his Frightful Presence, then makes three attacks with his Ruby Rod.' },
            { name: 'Ruby Rod', description: 'Melee Weapon Attack: +19 to hit, reach 10 ft., one target. Hit: 24 (4d6 + 10) bludgeoning damage plus 36 (8d8) fire damage.' },
            { name: 'Frightful Presence', description: 'Each creature of Asmodeus\'s choice within 120 feet of him and aware of him must succeed on a DC 27 Wisdom saving throw or become frightened for 1 minute. A frightened creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature\'s saving throw is successful or the effect ends for it, the creature is immune to Asmodeus\'s Frightful Presence for the next 24 hours.' },
            { name: 'Hellfire', description: 'Asmodeus creates a 40-foot-radius sphere of hellfire centered on a point he can see within 300 feet of him. Each creature in that area must make a DC 27 Dexterity saving throw, taking 63 (18d6) fire damage plus 63 (18d6) necrotic damage on a failed save, or half as much damage on a successful one. The fire spreads around corners and ignores resistance and immunity to fire damage.' }
        ],
        legendaryActions: {
            perRound: 3,
            actions: [
                { name: 'Attack', cost: 1, description: 'Asmodeus makes one Ruby Rod attack.' },
                { name: 'Teleport', cost: 1, description: 'Asmodeus teleports up to 120 feet to an unoccupied space he can see.' },
                { name: 'Call Underling (Costs 3 Actions)', cost: 3, description: 'Asmodeus summons a pit fiend in an unoccupied space he can see within 60 feet of him. The pit fiend acts as his ally and remains for 1 minute or until Asmodeus dismisses it.' }
            ]
        },
        spellcasting: {
            innate: true,
            ability: 'cha',
            dc: 27,
            spells: {
                atWill: ['alter self', 'detect magic', 'detect thoughts', 'invisibility (self only)'],
                '3/day': ['dominate monster', 'mass suggestion', 'wall of fire'],
                '1/day': ['divine word', 'symbol (hopelessness only)', 'wish']
            }
        },
        visualDescription: 'An impossibly handsome humanoid with red skin, standing thirteen feet tall with the bearing of absolute authority. His eyes burn with infernal fire, and small horns crown his brow. He wears regal vestments of black and red, and carries the Ruby Rod, a staff topped with a massive glowing ruby.'
    },

    

    // ============================================
    // MORE LOW-CR COMMON MONSTERS
    // ============================================
    

    

    

    

    

    

    

    
};

// Merge with allMonsters
if (typeof allMonsters !== 'undefined') {
    Object.assign(allMonsters, monstersExpansion57);
}
