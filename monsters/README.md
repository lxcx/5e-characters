# D&D 5E Monster Generator

A web-based tool for creating custom monsters and creatures for Dungeons & Dragons 5th Edition campaigns.

## Features

- **Monster Type Selection**: Generate aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, humanoids, monstrosities, oozes, plants, and undead
- **Challenge Rating (CR 0-30)**: Full CR range support with appropriate stats, HP, AC, and damage output
- **Combat Roles**: Artillery, Brute, Controller, Lurker, Skirmisher, Soldier, and Support archetypes
- **Size Categories**: Tiny through Gargantuan with appropriate hit dice
- **Environment Selection**: Arctic, Coastal, Desert, Forest, Grassland, Hill, Mountain, Swamp, Underdark, Underwater, Urban
- **Legendary Creatures**: Optional legendary actions and lair actions for boss monsters
- **Innate Spellcasting**: Optional spellcasting abilities scaled to CR
- **Auto-Generated**:
  - Ability scores based on type and role
  - Saving throw and skill proficiencies
  - Damage resistances, immunities, and condition immunities
  - Senses, languages, and traits
  - Melee, ranged, and breath weapon attacks
  - Multiattack based on available actions
- **PDF Export**: Print-friendly stat block format
- **AI Portrait Prompts**: Generate prompts for AI image generators

## Usage

1. Open `index.html` in a web browser
2. Select monster options:
   - Type (or Random)
   - Size (or Random)
   - Challenge Rating (or Random)
   - Alignment
   - Environment
   - Combat Role
   - Legendary creature toggle
   - Spellcasting toggle
3. Click "Generate Monster"
4. Review and customize the generated stat block
5. Export to PDF or copy the AI portrait prompt

## CR Balance

The generator follows DMG guidelines for monster creation:
- HP ranges scaled to CR
- AC appropriate for defensive CR
- Attack bonuses and damage output balanced to CR
- Proficiency bonus by CR tier

## Combat Roles

| Role | Description | HP Mod | AC Mod |
|------|-------------|--------|--------|
| Artillery | Ranged damage dealer | 0.8x | -1 |
| Brute | High HP, high damage | 1.3x | -1 |
| Controller | Crowd control specialist | 0.9x | 0 |
| Lurker | Ambush predator | 0.7x | +1 |
| Skirmisher | Mobile striker | 0.9x | +1 |
| Soldier | Frontline tank | 1.1x | +2 |
| Support | Buff/debuff focus | 0.8x | 0 |

## Project Structure

```
dnd-monster-generator/
├── index.html          # Main HTML structure
├── css/
│   └── styles.css      # All styling
├── js/
│   ├── data.js         # Monster types, traits, spells, templates
│   ├── generator.js    # CR-based generation logic
│   ├── ui.js           # Display and interaction
│   ├── pdf.js          # PDF export functionality
│   ├── spells.js       # Spell selection for monsters
│   └── utils.js        # Utility functions
└── README.md
```

## Cloned From

This project was adapted from the [D&D 5E NPC Generator](../dnd-npc-generator), reusing the architecture and UI patterns while replacing character-based generation with CR-based monster generation.

## License

For personal use in D&D campaigns. D&D is a trademark of Wizards of the Coast.
