// D&D 5E Puzzle & Trap Generator - Comprehensive Data
// Based on pre-2024 WotC books, Grimtooth's Ultimate Traps, Book of Challenges,
// Game Master's Book of Traps/Puzzles/Dungeons, and Puzzles, Predicaments & Perplexities I & II

// ============================================
// TRAP DATA
// ============================================

const trapDangerLevels = {
    setback: { name: "Setback", dcRange: [10, 11], attackBonus: [3, 5], damage: { "1-4": "1d10", "5-10": "2d10", "11-16": "4d10", "17+": "10d10" } },
    dangerous: { name: "Dangerous", dcRange: [12, 15], attackBonus: [6, 8], damage: { "1-4": "2d10", "5-10": "4d10", "11-16": "10d10", "17+": "18d10" } },
    deadly: { name: "Deadly", dcRange: [16, 20], attackBonus: [9, 12], damage: { "1-4": "4d10", "5-10": "10d10", "11-16": "18d10", "17+": "24d10" } }
};

const trapTriggers = [
    "Pressure plate on the floor",
    "Tripwire stretched across the passage",
    "Opening or touching a door, chest, or object",
    "Stepping on a specific floor tile or pattern",
    "Breaking a magical ward or seal",
    "Speaking a specific word or phrase",
    "Moving through a doorway or archway",
    "Disturbing treasure or valuable objects",
    "Looking into a mirror or reflective surface",
    "Reading inscriptions or runes",
    "Removing an item from a pedestal",
    "Stepping on a false floor section",
    "Pulling a lever or handle",
    "Breaking a beam of light",
    "Weight threshold exceeded on a surface",
    "Proximity to a magical sensor",
    "Touching water or liquid",
    "Casting a spell in the area"
];

const trapEffects = {
    damage: [
        { name: "Poison Darts", type: "piercing", secondary: "poison", description: "Darts shoot from hidden holes in the walls." },
        { name: "Poison Needle", type: "piercing", secondary: "poison", description: "A needle springs from a lock or handle." },
        { name: "Falling Block", type: "bludgeoning", description: "A heavy stone block drops from the ceiling." },
        { name: "Swinging Blade", type: "slashing", description: "A massive blade swings across the area." },
        { name: "Spear Trap", type: "piercing", description: "Spears thrust from the walls or floor." },
        { name: "Falling Net", type: "bludgeoning", description: "A weighted net drops, entangling targets." },
        { name: "Crossbow Trap", type: "piercing", description: "Concealed crossbows fire automatically." },
        { name: "Flame Jet", type: "fire", description: "Jets of flame erupt from hidden nozzles." },
        { name: "Lightning Arc", type: "lightning", description: "Electrical discharge arcs between conductors." },
        { name: "Acid Spray", type: "acid", description: "Corrosive acid sprays from hidden reservoirs." },
        { name: "Freezing Blast", type: "cold", description: "A blast of supernatural cold fills the area." },
        { name: "Crushing Walls", type: "bludgeoning", description: "The walls slowly close together." },
        { name: "Spiked Pit", type: "piercing", description: "The floor gives way to a pit lined with spikes." },
        { name: "Rolling Boulder", type: "bludgeoning", description: "A massive boulder rolls toward the party." },
        { name: "Scything Blades", type: "slashing", description: "Multiple blades sweep through the corridor." }
    ],
    magical: [
        { name: "Sleep Gas", save: "Constitution", description: "Sleeping gas fills the room. Creatures that fail the save fall unconscious for 1 minute." },
        { name: "Fear Rune", save: "Wisdom", description: "A glowing rune triggers overwhelming fear. Creatures that fail must flee for 1 minute." },
        { name: "Teleportation Circle", save: "Charisma", description: "A hidden teleportation circle sends creatures to a dangerous location." },
        { name: "Petrification Ray", save: "Constitution", description: "A beam of petrifying energy shoots from a statue. Failed save results in petrification." },
        { name: "Dispel Magic Field", save: "None", description: "All magical effects on creatures and items in the area are dispelled." },
        { name: "Curse of Weakness", save: "Constitution", description: "A curse causes disadvantage on Strength checks and saves until removed." },
        { name: "Memory Wipe", save: "Intelligence", description: "Creatures forget the last hour. Failed save by 5+ erases the last day." },
        { name: "Phantasmal Killer", save: "Wisdom", description: "Illusory horrors assault the mind, dealing psychic damage on failed saves." },
        { name: "Reverse Gravity", save: "Dexterity", description: "Gravity reverses in the area, sending creatures crashing into the ceiling." },
        { name: "Banishment", save: "Charisma", description: "Creatures are banished to a harmless demiplane for 1 minute." },
        { name: "Antimagic Zone", save: "None", description: "An antimagic field suppresses all magic in the area." },
        { name: "Polymorph Trap", save: "Wisdom", description: "Creatures are polymorphed into harmless animals for 1 hour." }
    ],
    environmental: [
        { name: "Flooding Chamber", description: "Water rapidly fills the room. Creatures must escape or risk drowning." },
        { name: "Collapsing Ceiling", description: "The ceiling begins to collapse, blocking exits and dealing damage." },
        { name: "Quicksand Floor", description: "The floor becomes quicksand, restraining creatures that enter." },
        { name: "Darkness", description: "Magical darkness fills the area, blinding all without darkvision or truesight." },
        { name: "Silence", description: "A zone of silence prevents all spellcasting with verbal components." },
        { name: "Extreme Heat", description: "The room temperature rises dangerously, causing heat exhaustion." },
        { name: "Extreme Cold", description: "Supernatural cold fills the area, causing frostbite and exhaustion." },
        { name: "Poison Gas", description: "Toxic gas seeps into the room from hidden vents." },
        { name: "Vacuum", description: "Air is rapidly sucked from the chamber, suffocating creatures." },
        { name: "Magnetic Field", description: "A powerful magnetic field pulls metal objects and armored creatures." }
    ]
};

const trapCategories = {
    mechanical: {
        name: "Mechanical Trap",
        description: "Physical, mundane traps that use mechanics and engineering.",
        icon: "fa-gears",
        examples: ["Pit traps", "Dart launchers", "Swinging blades", "Falling blocks", "Pressure plates"]
    },
    magical: {
        name: "Magical Trap",
        description: "Traps powered by arcane or divine magic.",
        icon: "fa-wand-sparkles",
        examples: ["Glyphs of warding", "Symbol spells", "Cursed objects", "Teleportation traps"]
    },
    hybrid: {
        name: "Hybrid Trap",
        description: "Combines mechanical triggers with magical effects.",
        icon: "fa-atom",
        examples: ["Mechanical trigger with fireball", "Pit trap with illusion floor", "Poison with magical enhancement"]
    },
    complex: {
        name: "Complex Trap",
        description: "Multi-stage traps that escalate or have multiple components.",
        icon: "fa-sitemap",
        examples: ["Room with multiple hazards", "Escalating danger", "Traps that reset", "Interconnected systems"]
    }
};

// ============================================
// TRAP TEMPLATES - Comprehensive Collection
// ============================================

const trapTemplates = [
    // === DMG TRAPS ===
    {
        name: "Collapsing Roof",
        category: "mechanical",
        danger: "setback",
        trigger: "Disturbing a support beam or pulling a lever",
        effect: "The ceiling collapses in a 10-foot square area.",
        detection: { dc: 10, skill: "Perception", clue: "Cracks in the ceiling and loose stones" },
        disarm: { dc: 15, skill: "Athletics", method: "Shoring up the weak points with props" },
        damage: "2d10 bludgeoning",
        save: { type: "Dexterity", dc: 13 },
        countermeasures: ["Avoiding the triggering mechanism", "Using poles to test suspicious areas", "Crawling to distribute weight"],
        source: "DMG"
    },
    {
        name: "Falling Net",
        category: "mechanical",
        danger: "setback",
        trigger: "Tripwire at ankle height",
        effect: "A net falls, restraining creatures in a 10-foot square.",
        detection: { dc: 10, skill: "Perception", clue: "Thin wire stretched across the passage" },
        disarm: { dc: 15, skill: "Thieves' Tools", method: "Cutting the tripwire carefully" },
        damage: "None (restrains target)",
        save: { type: "Dexterity", dc: 10 },
        countermeasures: ["DC 10 Strength check to escape", "Slashing the net (AC 10, 20 HP)", "Flying over the trigger"],
        source: "DMG"
    },
    {
        name: "Fire-Breathing Statue",
        category: "magical",
        danger: "dangerous",
        trigger: "Stepping on a pressure plate or approaching within 5 feet",
        effect: "A dragon statue breathes a 30-foot cone of fire.",
        detection: { dc: 15, skill: "Investigation", clue: "Soot marks on the floor and walls, slight warmth" },
        disarm: { dc: 13, skill: "Thieves' Tools", method: "Jamming the mechanism in the statue's mouth" },
        damage: "4d10 fire",
        save: { type: "Dexterity", dc: 13 },
        countermeasures: ["Blocking or destroying the statue", "Fire resistance", "Triggering from a safe distance"],
        source: "DMG"
    },
    {
        name: "Simple Pit",
        category: "mechanical",
        danger: "setback",
        trigger: "Walking over a covered pit",
        effect: "The covering gives way, dropping creatures into a 10-foot deep pit.",
        detection: { dc: 10, skill: "Perception", clue: "Slightly discolored or sagging floor covering" },
        disarm: { dc: 10, skill: "Investigation", method: "Probing the floor with a pole" },
        damage: "1d6 bludgeoning per 10 feet fallen",
        save: { type: "Dexterity", dc: 10 },
        countermeasures: ["Testing the floor ahead", "Jumping over", "Flying or levitating"],
        source: "DMG"
    },
    {
        name: "Hidden Pit",
        category: "mechanical",
        danger: "setback",
        trigger: "Walking over a pit covered by material identical to the surrounding floor",
        effect: "The covering gives way, dropping creatures into a 10-foot deep pit. Cover material is designed to give way under 100+ pounds of weight.",
        detection: { dc: 15, skill: "Perception", clue: "A successful check notices absence of foot traffic over the section" },
        disarm: { dc: 15, skill: "Investigation", method: "Probing the floor with a pole or testing with weight" },
        damage: "1d6 bludgeoning per 10 feet fallen",
        save: { type: "Dexterity", dc: 15 },
        countermeasures: ["Testing floor with a 10-foot pole", "Avoiding areas with no dust or wear", "Flying or levitating"],
        source: "DMG"
    },
    {
        name: "Locking Pit",
        category: "mechanical",
        danger: "dangerous",
        trigger: "Walking over a pit with a spring-loaded lid",
        effect: "Creatures fall into the pit and the lid snaps shut, trapping them inside.",
        detection: { dc: 15, skill: "Perception", clue: "Seams in the floor around the pit edges" },
        disarm: { dc: 15, skill: "Thieves' Tools", method: "Jamming the lid mechanism from outside" },
        damage: "1d6 bludgeoning per 10 feet fallen",
        save: { type: "Dexterity", dc: 15 },
        countermeasures: ["Opening the lid from inside requires DC 20 Athletics or Thieves' Tools DC 15", "Jumping the pit", "Wedging lid open"],
        source: "DMG"
    },
    {
        name: "Spiked Pit",
        category: "mechanical",
        danger: "dangerous",
        trigger: "Walking over a hidden pit lined with spikes",
        effect: "Creatures fall 20 feet onto iron spikes at the bottom.",
        detection: { dc: 15, skill: "Perception", clue: "Subtle differences in floor covering" },
        disarm: { dc: 15, skill: "Thieves' Tools", method: "Reinforcing the cover or jamming it in place" },
        damage: "2d6 bludgeoning plus 2d10 piercing from spikes",
        save: { type: "Dexterity", dc: 15 },
        countermeasures: ["Testing floor with poles", "Jumping the pit", "Using feather fall when falling"],
        source: "DMG"
    },
    {
        name: "Poison Darts",
        category: "mechanical",
        danger: "setback",
        trigger: "Pressure plate",
        effect: "1d4 darts fire from spring-loaded tubes in the walls.",
        detection: { dc: 15, skill: "Perception", clue: "Small holes in the walls at chest height" },
        disarm: { dc: 15, skill: "Thieves' Tools", method: "Blocking or plugging the dart tubes" },
        damage: "1d4 piercing each plus DC 10 Con save or 2d10 poison",
        save: { type: "Dexterity", dc: 13 },
        countermeasures: ["Shield to block darts", "Triggering from distance", "Poison immunity"],
        source: "DMG"
    },
    {
        name: "Poison Needle",
        category: "mechanical",
        danger: "setback",
        trigger: "Opening a lock without the proper key",
        effect: "A spring-loaded needle jabs the creature attempting to pick the lock.",
        detection: { dc: 20, skill: "Investigation", clue: "Tiny hole in the keyhole mechanism" },
        disarm: { dc: 15, skill: "Thieves' Tools", method: "Extracting or breaking the needle" },
        damage: "1 piercing plus DC 15 Con save or 2d10 poison",
        save: { type: "None (automatic hit)", dc: 15 },
        countermeasures: ["Using the proper key", "Mage hand to manipulate lock", "Poison immunity"],
        source: "DMG"
    },
    {
        name: "Rolling Sphere",
        category: "mechanical",
        danger: "dangerous",
        trigger: "Stepping on a pressure plate",
        effect: "A 10-foot-diameter stone sphere rolls down the corridor.",
        detection: { dc: 15, skill: "Perception", clue: "Groove in the floor where the sphere rolls" },
        disarm: { dc: 20, skill: "Athletics", method: "Jamming the sphere's path with spikes or obstacles" },
        damage: "4d10 bludgeoning",
        save: { type: "Dexterity", dc: 15 },
        countermeasures: ["Running into a side passage", "Climbing to avoid", "Destroying the sphere (AC 17, 100 HP)"],
        source: "DMG"
    },
    {
        name: "Sphere of Annihilation Trap",
        category: "magical",
        danger: "deadly",
        trigger: "Contact with the sphere",
        effect: "Creatures or objects touching the sphere are obliterated.",
        detection: { dc: 20, skill: "Arcana", clue: "A 2-foot-diameter black sphere that absorbs all light" },
        disarm: { dc: 25, skill: "Arcana", method: "Using a talisman of the sphere or gate spell" },
        damage: "4d10 force (partial), or instant destruction (full contact)",
        save: { type: "Dexterity", dc: 20 },
        countermeasures: ["Avoiding the sphere entirely", "Controlling it with proper magic item", "Sealing it away"],
        source: "DMG"
    },
    
    // === GRIMTOOTH'S TRAPS ===
    {
        name: "The Delver Dicer",
        category: "mechanical",
        danger: "deadly",
        trigger: "Stepping on the third floor tile in a hallway",
        effect: "Razor-sharp blades swing from hidden slots in the walls, slicing through anything in their path at multiple heights.",
        detection: { dc: 18, skill: "Perception", clue: "Thin seams in the walls at various heights, faint mechanical clicking" },
        disarm: { dc: 20, skill: "Thieves' Tools", method: "Jamming the blade mechanisms or cutting the trigger cables" },
        damage: "6d10 slashing",
        save: { type: "Dexterity", dc: 17 },
        countermeasures: ["Crawling under the blade level", "Flying over", "Triggering remotely and waiting"],
        source: "Grimtooth's"
    },
    {
        name: "The Greased Slide",
        category: "mechanical",
        danger: "dangerous",
        trigger: "Stepping onto a sloped floor section",
        effect: "The floor tilts and becomes extremely slippery, sliding creatures into a pit or hazard at the bottom.",
        detection: { dc: 15, skill: "Investigation", clue: "Floor has an unusual sheen, slight downward slope" },
        disarm: { dc: 18, skill: "Athletics", method: "Cleaning the grease or jamming the tilt mechanism" },
        damage: "3d10 bludgeoning (from fall)",
        save: { type: "Dexterity", dc: 15 },
        countermeasures: ["Rope to anchor yourself", "Flying or spider climb", "Throwing sand for traction"],
        source: "Grimtooth's"
    },
    {
        name: "The Impaler",
        category: "mechanical",
        danger: "deadly",
        trigger: "Opening a door without checking for traps",
        effect: "A massive spike mounted behind the door thrusts forward at chest height when the door opens.",
        detection: { dc: 17, skill: "Perception", clue: "Door hinges are unusually thick, gap under door is larger than normal" },
        disarm: { dc: 18, skill: "Thieves' Tools", method: "Disconnecting the spring mechanism from the door" },
        damage: "8d10 piercing",
        save: { type: "Dexterity", dc: 18 },
        countermeasures: ["Standing to the side when opening", "Using mage hand", "Removing door from hinges"],
        source: "Grimtooth's"
    },
    {
        name: "The Drowning Pool",
        category: "hybrid",
        danger: "deadly",
        trigger: "Stepping into a room with a seemingly shallow pool",
        effect: "The pool is an illusion over deep water. Iron grates seal the exits and the room begins flooding.",
        detection: { dc: 18, skill: "Arcana", clue: "Water doesn't ripple naturally, slight magical aura" },
        disarm: { dc: 20, skill: "Thieves' Tools", method: "Finding the hidden mechanism to open the grates" },
        damage: "Drowning (see suffocation rules)",
        save: { type: "Intelligence", dc: 15 },
        countermeasures: ["Dispel magic on the illusion", "Water breathing", "Bending the grate bars (DC 25 Athletics)"],
        source: "Grimtooth's"
    },
    {
        name: "The False Floor Furnace",
        category: "hybrid",
        danger: "deadly",
        trigger: "Walking across the center of a room",
        effect: "The floor drops away, revealing a furnace of magical fire below.",
        detection: { dc: 17, skill: "Perception", clue: "Floor tiles are warmer in the center, faint orange glow from seams" },
        disarm: { dc: 22, skill: "Arcana", method: "Suppressing the magical fire or locking the floor panels" },
        damage: "10d10 fire",
        save: { type: "Dexterity", dc: 18 },
        countermeasures: ["Walking along the edges only", "Fire immunity or resistance", "Flying across"],
        source: "Grimtooth's"
    },
    {
        name: "The Overkill Boulder Room",
        category: "complex",
        danger: "deadly",
        trigger: "Taking treasure from a pedestal",
        effect: "A series of escalating hazards: boulder drops, spikes emerge, room fills with water, then electricity.",
        detection: { dc: 20, skill: "Investigation", clue: "Multiple mechanisms visible on walls, groove marks on floor" },
        disarm: { dc: 25, skill: "Thieves' Tools", method: "Requires disabling four separate mechanisms in sequence" },
        damage: "Variable - each phase deals 4d10 damage of different types",
        save: { type: "Various", dc: 18 },
        countermeasures: ["Replacing treasure with equal weight", "Teleportation", "Destroying mechanisms"],
        complexPhases: [
            { initiative: 20, effect: "Boulder drops from ceiling - 4d10 bludgeoning" },
            { initiative: 15, effect: "Spikes emerge from floor - 4d10 piercing" },
            { initiative: 10, effect: "Room begins flooding - drowning hazard" },
            { initiative: 5, effect: "Electricity arcs through water - 4d10 lightning" }
        ],
        source: "Grimtooth's"
    },
    {
        name: "Delver-Powered Escalator",
        category: "mechanical",
        danger: "deadly",
        trigger: "Stepping onto what appears to be stairs",
        effect: "The 'stairs' are actually a treadmill that accelerates, carrying victims toward spinning blades at the bottom.",
        detection: { dc: 16, skill: "Perception", clue: "Steps have unusual give, mechanical noise from below" },
        disarm: { dc: 18, skill: "Athletics", method: "Jamming the treadmill mechanism or destroying the blades" },
        damage: "6d10 slashing",
        save: { type: "Strength", dc: 16 },
        countermeasures: ["Jumping off the sides", "Running faster than the belt", "Flying or levitating"],
        source: "Grimtooth's"
    },
    {
        name: "The Dust Explosion Room",
        category: "mechanical",
        danger: "deadly",
        trigger: "Entering a room with a torch or flame",
        effect: "The room is filled with fine coal dust. Any flame ignites a massive explosion.",
        detection: { dc: 15, skill: "Perception", clue: "Fine dark powder coating everything, musty smell" },
        disarm: { dc: 15, skill: "Nature", method: "Wetting down the dust before entering" },
        damage: "10d10 fire (all creatures in room)",
        save: { type: "Dexterity", dc: 18 },
        countermeasures: ["Using light spells instead of fire", "Wetting the dust", "Creating a breeze to disperse it"],
        source: "Grimtooth's"
    },
    {
        name: "One Orc's Sauna",
        category: "mechanical",
        danger: "deadly",
        trigger: "Falling into a concealed tube",
        effect: "Victims slide down a superheated tube, partially liquefying before depositing into a collection pool.",
        detection: { dc: 18, skill: "Perception", clue: "Floor section feels unusually warm, faint steam rising" },
        disarm: { dc: 22, skill: "Thieves' Tools", method: "Jamming the tube opening or cooling the mechanism" },
        damage: "12d10 fire",
        save: { type: "Dexterity", dc: 20 },
        countermeasures: ["Fire immunity", "Feather fall to slow descent", "Gaseous form"],
        source: "Grimtooth's"
    },
    
    // === GRIMTOOTH'S TRAPS (Book 1) - Room Traps ===
    {
        name: "Infamous Wheel Trap",
        category: "mechanical",
        danger: "deadly",
        trigger: "Stepping onto the center platform of a circular room",
        effect: "The floor rotates like a wheel. Razor-sharp blades extend from slots in the walls, slicing anything at floor level as the wheel spins.",
        detection: { dc: 17, skill: "Perception", clue: "Circular scuff marks on floor, thin slots visible in walls" },
        disarm: { dc: 20, skill: "Thieves' Tools", method: "Jamming the rotation mechanism from below" },
        damage: "8d10 slashing",
        save: { type: "Dexterity", dc: 18 },
        countermeasures: ["Jumping to avoid blades", "Levitation", "Destroying the blade mechanism"],
        source: "Grimtooth's"
    },
    {
        name: "Roman Amphitheatre Trap",
        category: "mechanical",
        danger: "deadly",
        trigger: "Entering a coliseum-style room",
        effect: "Gates release wild beasts while gladiator skeletons animate. Crowd illusions cheer for blood.",
        detection: { dc: 15, skill: "Investigation", clue: "Bones scattered in sand, gates on multiple walls" },
        disarm: { dc: 18, skill: "Athletics", method: "Blocking the gates before they fully open" },
        damage: "Variable (beast attacks)",
        save: { type: "Initiative", dc: 15 },
        countermeasures: ["Animal friendship", "Fighting through", "Finding hidden exit under stands"],
        source: "Grimtooth's"
    },
    {
        name: "Slider Spiker",
        category: "mechanical",
        danger: "dangerous",
        trigger: "Stepping on a pressure plate near the room's center",
        effect: "Floor tiles slide apart revealing spike-filled gaps. Walls begin closing together.",
        detection: { dc: 16, skill: "Perception", clue: "Floor tiles have thin gaps between them" },
        disarm: { dc: 17, skill: "Thieves' Tools", method: "Wedging tiles in place or disabling wall mechanism" },
        damage: "4d10 piercing + 4d10 bludgeoning",
        save: { type: "Dexterity", dc: 16 },
        countermeasures: ["Jumping to solid sections", "Bracing walls apart", "Flying over"],
        source: "Grimtooth's"
    },
    {
        name: "Lobster Trap",
        category: "mechanical",
        danger: "dangerous",
        trigger: "Entering a room through a one-way door",
        effect: "The entry mechanism only works from outside. Door locks behind, leaving no visible exit.",
        detection: { dc: 14, skill: "Investigation", clue: "Door hinges are on the outside only" },
        disarm: { dc: 16, skill: "Thieves' Tools", method: "Picking the lock from inside or finding hidden exit" },
        damage: "None (traps party)",
        save: { type: "Intelligence", dc: 14 },
        countermeasures: ["Wedging door open before entering", "Dimension door", "Searching for secret exit"],
        source: "Grimtooth's"
    },
    {
        name: "The Dastardly Lava Room",
        category: "hybrid",
        danger: "deadly",
        trigger: "Stepping on specific floor tiles",
        effect: "Sections of floor drop away revealing molten lava beneath. Safe path changes periodically.",
        detection: { dc: 18, skill: "Investigation", clue: "Some tiles radiate heat, pattern visible in flickering light" },
        disarm: { dc: 22, skill: "Arcana", method: "Dispelling the illusion revealing the true safe path" },
        damage: "10d10 fire",
        save: { type: "Dexterity", dc: 18 },
        countermeasures: ["Flying across", "Following the cool tiles", "Fire immunity"],
        source: "Grimtooth's"
    },
    {
        name: "Hoovermatic Trap",
        category: "mechanical",
        danger: "dangerous",
        trigger: "Opening a treasure chest in the room",
        effect: "Powerful suction pulls everything toward a grinding disposal in the floor.",
        detection: { dc: 15, skill: "Perception", clue: "Grating in floor center, dust patterns flowing toward it" },
        disarm: { dc: 18, skill: "Athletics", method: "Blocking or destroying the suction mechanism" },
        damage: "6d10 bludgeoning (grinder)",
        save: { type: "Strength", dc: 16 },
        countermeasures: ["Anchoring yourself", "Closing the chest", "Destroying the grate"],
        source: "Grimtooth's"
    },
    {
        name: "The Atlas Affair",
        category: "mechanical",
        danger: "deadly",
        trigger: "Removing a pillar or support from a room",
        effect: "The ceiling is actually precariously balanced. Removing support causes total collapse.",
        detection: { dc: 16, skill: "Investigation", clue: "Cracks in ceiling, pillar shows no tool marks" },
        disarm: { dc: 20, skill: "Athletics", method: "Bracing ceiling before removing pillar" },
        damage: "10d10 bludgeoning",
        save: { type: "Dexterity", dc: 18 },
        countermeasures: ["Leaving pillar alone", "Reinforcing ceiling first", "Teleporting out"],
        source: "Grimtooth's"
    },
    
    // === GRIMTOOTH'S TRAPS (Book 1) - Corridor Traps ===
    {
        name: "The Gas Passage",
        category: "mechanical",
        danger: "dangerous",
        trigger: "Proceeding more than 30 feet into a corridor",
        effect: "Doors seal at both ends. Poison gas fills the corridor from hidden vents.",
        detection: { dc: 15, skill: "Perception", clue: "Small holes in walls, faint chemical smell" },
        disarm: { dc: 17, skill: "Thieves' Tools", method: "Blocking gas vents or forcing doors" },
        damage: "4d10 poison per round",
        save: { type: "Constitution", dc: 15 },
        countermeasures: ["Holding breath and running", "Poison immunity", "Breaking through door"],
        source: "Grimtooth's"
    },
    {
        name: "Ball Bearing Corridor",
        category: "mechanical",
        danger: "setback",
        trigger: "Walking on the corridor floor",
        effect: "Floor is covered with ball bearings. Anyone moving must save or fall prone.",
        detection: { dc: 10, skill: "Perception", clue: "Metallic clicking sounds, rolling objects visible" },
        disarm: { dc: 12, skill: "Dexterity", method: "Clearing a path or moving slowly" },
        damage: "1d6 bludgeoning (falling)",
        save: { type: "Dexterity", dc: 12 },
        countermeasures: ["Crawling", "Flying", "Clearing bearings aside"],
        source: "Grimtooth's"
    },
    {
        name: "The Rolling Stone",
        category: "mechanical",
        danger: "deadly",
        trigger: "Removing treasure from a pedestal",
        effect: "A massive boulder releases from a hidden alcove and rolls down the corridor.",
        detection: { dc: 15, skill: "Perception", clue: "Groove in floor, large alcove blocked by thin wall" },
        disarm: { dc: 18, skill: "Investigation", method: "Triggering remotely or jamming the release" },
        damage: "10d10 bludgeoning",
        save: { type: "Dexterity", dc: 17 },
        countermeasures: ["Outrunning it", "Side alcoves", "Destroying the boulder"],
        source: "Grimtooth's"
    },
    {
        name: "The Piano Floor",
        category: "mechanical",
        danger: "dangerous",
        trigger: "Stepping on certain floor tiles",
        effect: "Floor tiles are like piano keys - wrong sequence causes blades, darts, or pits.",
        detection: { dc: 14, skill: "Investigation", clue: "Musical notes scratched near tiles, worn patterns" },
        disarm: { dc: 16, skill: "Performance", method: "Playing the correct tune on the tiles" },
        damage: "4d10 (varies by trap type)",
        save: { type: "Dexterity", dc: 15 },
        countermeasures: ["Following worn path", "Flying over", "Playing correct sequence"],
        source: "Grimtooth's"
    },
    {
        name: "Whirling Blade Boot Bloodier",
        category: "mechanical",
        danger: "dangerous",
        trigger: "Stepping on a pressure plate",
        effect: "Blades emerge from floor slots and spin at ankle height, shredding feet.",
        detection: { dc: 15, skill: "Perception", clue: "Thin slots in floor, old bloodstains" },
        disarm: { dc: 16, skill: "Thieves' Tools", method: "Jamming blade mechanism" },
        damage: "4d10 slashing",
        save: { type: "Dexterity", dc: 15 },
        countermeasures: ["Jumping over trigger area", "Heavy boots (reduces damage)", "Flying"],
        source: "Grimtooth's"
    },
    {
        name: "Von Hindenburg Chamber",
        category: "mechanical",
        danger: "deadly",
        trigger: "Bringing an open flame into a gas-filled room",
        effect: "Room is filled with flammable hydrogen gas. Any spark causes massive explosion.",
        detection: { dc: 13, skill: "Nature", clue: "High-pitched voice effect, balloons float unnaturally" },
        disarm: { dc: 15, skill: "Survival", method: "Venting the gas before entering with flame" },
        damage: "12d10 fire (all in room)",
        save: { type: "Dexterity", dc: 18 },
        countermeasures: ["Light spells instead of torches", "Venting gas", "Fire immunity"],
        source: "Grimtooth's"
    },
    {
        name: "Step and Die",
        category: "mechanical",
        danger: "deadly",
        trigger: "Stepping on the second stair of a staircase",
        effect: "The entire staircase flattens into a slide with spinning blades at the bottom.",
        detection: { dc: 16, skill: "Investigation", clue: "Stairs have unusual seams, blade housing visible" },
        disarm: { dc: 18, skill: "Thieves' Tools", method: "Locking stairs in place or disabling blades" },
        damage: "8d10 slashing",
        save: { type: "Dexterity", dc: 17 },
        countermeasures: ["Skipping the trigger stair", "Flying up", "Jumping over blades"],
        source: "Grimtooth's"
    },
    
    // === GRIMTOOTH'S TRAPS (Book 1) - Door Traps ===
    {
        name: "Giant's Razor",
        category: "mechanical",
        danger: "deadly",
        trigger: "Opening a door normally",
        effect: "A massive blade sweeps horizontally across the doorframe at neck height.",
        detection: { dc: 17, skill: "Perception", clue: "Thin slot above door frame, nick marks on walls" },
        disarm: { dc: 18, skill: "Thieves' Tools", method: "Disconnecting blade mechanism" },
        damage: "8d10 slashing (instant kill on crit)",
        save: { type: "Dexterity", dc: 18 },
        countermeasures: ["Ducking through", "Opening door remotely", "Blocking the slot"],
        source: "Grimtooth's"
    },
    {
        name: "The Guillotine Door",
        category: "mechanical",
        danger: "deadly",
        trigger: "Stepping through a doorway",
        effect: "A heavy blade drops from above the doorframe, bisecting anyone in the threshold.",
        detection: { dc: 16, skill: "Perception", clue: "Slot in door frame top, counterweight visible above" },
        disarm: { dc: 17, skill: "Thieves' Tools", method: "Jamming the blade or cutting the release" },
        damage: "10d10 slashing",
        save: { type: "Dexterity", dc: 17 },
        countermeasures: ["Rolling through quickly", "Triggering remotely", "Jamming blade channel"],
        source: "Grimtooth's"
    },
    {
        name: "Poison Door",
        category: "mechanical",
        danger: "dangerous",
        trigger: "Touching the door handle",
        effect: "Door handle is coated with contact poison. Mechanism also sprays poison mist.",
        detection: { dc: 15, skill: "Investigation", clue: "Slight discoloration on handle, sweet smell" },
        disarm: { dc: 14, skill: "Medicine", method: "Cleaning handle or using gloves" },
        damage: "4d10 poison",
        save: { type: "Constitution", dc: 15 },
        countermeasures: ["Using mage hand", "Wearing gloves", "Opening with tool"],
        source: "Grimtooth's"
    },
    {
        name: "Double Door Doom",
        category: "mechanical",
        danger: "deadly",
        trigger: "Opening both doors of a double door simultaneously",
        effect: "Crossbow bolts fire from hidden panels on both sides, creating a deadly crossfire.",
        detection: { dc: 16, skill: "Perception", clue: "Small holes in walls beside doors, both doors slightly ajar" },
        disarm: { dc: 18, skill: "Thieves' Tools", method: "Opening one door at a time or disabling bolts" },
        damage: "6d10 piercing (multiple bolts)",
        save: { type: "Dexterity", dc: 16 },
        countermeasures: ["Opening only one door", "Shield wall", "Triggering from safe distance"],
        source: "Grimtooth's"
    },
    
    // === GRIMTOOTH'S TRAPS TOO - Room Traps ===
    {
        name: "The Teeter-Totter Room",
        category: "mechanical",
        danger: "setback",
        trigger: "Enough weight crossing the room's midpoint",
        effect: "The floor pivots, dumping everyone toward one end and possibly into a pit below.",
        detection: { dc: 12, skill: "Investigation", clue: "Floor has slight give, pivot point visible beneath" },
        disarm: { dc: 14, skill: "Athletics", method: "Distributing weight evenly or jamming pivot" },
        damage: "2d10 bludgeoning",
        save: { type: "Dexterity", dc: 12 },
        countermeasures: ["Careful weight distribution", "Jumping off", "Flying across"],
        source: "Grimtooth's"
    },
    {
        name: "See-Saw Room",
        category: "mechanical",
        danger: "deadly",
        trigger: "Moving identical statues at opposite ends of the room",
        effect: "Moving a statue releases floor bolts. Room pivots, spilling glass globes of deadly substances.",
        detection: { dc: 15, skill: "Investigation", clue: "Bolts connecting statues to floor, precarious glass globes" },
        disarm: { dc: 17, skill: "Thieves' Tools", method: "Carefully removing globes first" },
        damage: "8d10 (varies: acid/fire/poison)",
        save: { type: "Dexterity", dc: 16 },
        countermeasures: ["Not moving the statues", "Securing globes first", "Fire/poison resistance"],
        source: "Grimtooth's"
    },
    {
        name: "Hall of the Memorial Carpet",
        category: "mechanical",
        danger: "deadly",
        trigger: "Moving the lantern or chest from their niches",
        effect: "Ceiling descends, doors seal. Pressure holds ceiling up; opening doors releases it.",
        detection: { dc: 18, skill: "Investigation", clue: "Ceiling has unusual seams, items seem suspiciously placed" },
        disarm: { dc: 20, skill: "Thieves' Tools", method: "Finding the hidden alcove escape route" },
        damage: "20d10 bludgeoning (crushing)",
        save: { type: "Dexterity", dc: 18 },
        countermeasures: ["Not disturbing items", "Finding alcove", "Teleportation"],
        source: "Grimtooth's"
    },
    {
        name: "Death of 1000 Slices",
        category: "mechanical",
        danger: "deadly",
        trigger: "Stepping on the center floor tile",
        effect: "Thousands of razor-thin blades extend from walls, floor, and ceiling, creating a deadly cage.",
        detection: { dc: 17, skill: "Perception", clue: "Countless thin slots in all surfaces, faint clicking" },
        disarm: { dc: 22, skill: "Thieves' Tools", method: "Deactivating the central mechanism below" },
        damage: "12d10 slashing",
        save: { type: "Dexterity", dc: 19 },
        countermeasures: ["Avoiding center tile", "Ethereal movement", "Becoming tiny"],
        source: "Grimtooth's"
    },
    {
        name: "Burial at Sea",
        category: "mechanical",
        danger: "setback",
        trigger: "Opening a trapdoor in the floor",
        effect: "Pressurized seawater erupts, flooding the room. Ceiling is domed allowing breathing room.",
        detection: { dc: 12, skill: "Perception", clue: "Briny smell, water stains, pressure marks on trapdoor" },
        disarm: { dc: 15, skill: "Strength", method: "Forcing trapdoor closed against pressure" },
        damage: "Equipment loss (washed away)",
        save: { type: "Strength", dc: 13 },
        countermeasures: ["Water breathing", "Floating", "Dropping heavy equipment"],
        source: "Grimtooth's"
    },
    {
        name: "Archimedes' Revenge",
        category: "mechanical",
        danger: "dangerous",
        trigger: "Diving into a well filled with treasure",
        effect: "Displaced water triggers release of piranhas (or lava) into the well.",
        detection: { dc: 15, skill: "Investigation", clue: "Small drainage holes at water line, secondary reservoir" },
        disarm: { dc: 18, skill: "Thieves' Tools", method: "Blocking the drainage before diving" },
        damage: "6d10 piercing (piranhas) or 12d10 fire (lava)",
        save: { type: "Dexterity", dc: 16 },
        countermeasures: ["Mage hand to retrieve treasure", "Blocking drains", "Not entering water"],
        source: "Grimtooth's"
    },
    
    // === GRIMTOOTH'S TRAPS TOO - Corridor Traps ===
    {
        name: "Shower of Gold",
        category: "mechanical",
        danger: "deadly",
        trigger: "Pulling a lever marked 'Treasure Vault Release'",
        effect: "Pit opens below, vault opens above. 4.6 million pounds of gold coins pour down, crushing all.",
        detection: { dc: 10, skill: "Insight", clue: "Too good to be true, lever is suspiciously obvious" },
        disarm: { dc: 20, skill: "Thieves' Tools", method: "Bypassing the lever mechanism entirely" },
        damage: "20d10 bludgeoning (tons of gold)",
        save: { type: "Dexterity", dc: 20 },
        countermeasures: ["Not pulling obvious levers", "Standing aside", "Teleportation"],
        source: "Grimtooth's"
    },
    {
        name: "Whipped Cream Trap",
        category: "mechanical",
        danger: "deadly",
        trigger: "Falling into a pit trap",
        effect: "Pit is filled with whipped cream - too thick to breathe, too airy to float, too slippery to climb.",
        detection: { dc: 14, skill: "Perception", clue: "Sweet smell, pit seems unusually white at bottom" },
        disarm: { dc: 15, skill: "Athletics", method: "Avoiding the pit entirely" },
        damage: "Suffocation",
        save: { type: "Strength", dc: 16 },
        countermeasures: ["Not falling in", "Rope to pull out", "Eating way out (not recommended)"],
        source: "Grimtooth's"
    },
    {
        name: "Moebius Hallway",
        category: "magical",
        danger: "setback",
        trigger: "Walking down the twisted magical corridor",
        effect: "The path loops infinitely like a Moebius strip. Walking never reaches the end.",
        detection: { dc: 15, skill: "Arcana", clue: "Path seems to subtly twist, landmarks repeat" },
        disarm: { dc: 14, skill: "Arcana", method: "Dispelling the magic or stepping off the path" },
        damage: "None (traps in loop)",
        save: { type: "Wisdom", dc: 14 },
        countermeasures: ["Stepping off the path", "Flying above", "Dispel magic"],
        source: "Grimtooth's"
    },
    {
        name: "Oil's Well That Ends Well",
        category: "mechanical",
        danger: "deadly",
        trigger: "Attempting to cross a room with a central fire pit",
        effect: "Everything is a trap - doors filled with oil, walls filled with oil, invisible wall over pit.",
        detection: { dc: 18, skill: "Investigation", clue: "Doors feel hollow, walls sound unusual when tapped" },
        disarm: { dc: 20, skill: "Investigation", method: "Walking slowly across activates safe invisible bridge" },
        damage: "12d10 fire",
        save: { type: "Dexterity", dc: 18 },
        countermeasures: ["Walking slowly (triggers bridge)", "Flying", "Fire immunity"],
        source: "Grimtooth's"
    },
    {
        name: "Bee-Hive Trap",
        category: "mechanical",
        danger: "deadly",
        trigger: "Stepping on pressure plate near a steel bee hive",
        effect: "Hive fires 100+ half-inch steel darts down the corridor at tremendous speed.",
        detection: { dc: 14, skill: "Perception", clue: "Unusual metallic hive structure, pressure plate nearby" },
        disarm: { dc: 18, skill: "Thieves' Tools", method: "Jamming the firing mechanism" },
        damage: "10d10 piercing",
        save: { type: "Dexterity", dc: 18 },
        countermeasures: ["Avoiding pressure plate", "Shield wall", "Lying flat on floor"],
        source: "Grimtooth's"
    },
    {
        name: "The Pendulum",
        category: "mechanical",
        danger: "dangerous",
        trigger: "Walking through a corridor with low ceiling",
        effect: "Giant bladed pendulums swing through the corridor at various heights.",
        detection: { dc: 13, skill: "Perception", clue: "Rope or chain visible above, groove marks on floor" },
        disarm: { dc: 17, skill: "Athletics", method: "Stopping or cutting the pendulum chains" },
        damage: "6d10 slashing",
        save: { type: "Dexterity", dc: 15 },
        countermeasures: ["Timing movement between swings", "Crawling under", "Stopping the pendulums"],
        source: "Grimtooth's"
    },
    {
        name: "Pyromaniac's Comet",
        category: "mechanical",
        danger: "dangerous",
        trigger: "Entering a corridor with sparkling gems in the floor",
        effect: "Corridor fills with natural gas. Wall seals behind. Torchlight ignites a fiery comet.",
        detection: { dc: 15, skill: "Nature", clue: "Chemical smell, gems seem like distractions" },
        disarm: { dc: 16, skill: "Survival", method: "Extinguishing flames before entering" },
        damage: "8d10 fire",
        save: { type: "Dexterity", dc: 16 },
        countermeasures: ["Light spells instead of flame", "Holding breath and running", "Fire resistance"],
        source: "Grimtooth's"
    },
    {
        name: "Too Many Tentacles",
        category: "mechanical",
        danger: "dangerous",
        trigger: "Walking through a narrow wet corridor",
        effect: "Mechanical tentacles extend from walls, grabbing and constricting targets.",
        detection: { dc: 15, skill: "Perception", clue: "Rubbery appendages visible in walls, wet environment" },
        disarm: { dc: 17, skill: "Thieves' Tools", method: "Cutting the hydraulic lines powering tentacles" },
        damage: "4d10 bludgeoning + restrained",
        save: { type: "Strength", dc: 16 },
        countermeasures: ["Slashing free", "Slippery coating", "Fire to damage tentacles"],
        source: "Grimtooth's"
    },
    {
        name: "Amazing Ginsu Chute",
        category: "mechanical",
        danger: "deadly",
        trigger: "Sliding down what appears to be a regular chute",
        effect: "Blades extend from chute walls, slicing anything sliding through.",
        detection: { dc: 16, skill: "Perception", clue: "Blade slots visible in chute walls, old bloodstains" },
        disarm: { dc: 18, skill: "Thieves' Tools", method: "Jamming blades before sliding" },
        damage: "10d10 slashing",
        save: { type: "Dexterity", dc: 17 },
        countermeasures: ["Feather fall to slow descent", "Levitation", "Not using the chute"],
        source: "Grimtooth's"
    },
    
    // === GRIMTOOTH'S NEW TRAPS ===
    {
        name: "Gas Door of Many Locks",
        category: "mechanical",
        danger: "dangerous",
        trigger: "Kicking down a door with many padlocks (locks are fake)",
        effect: "The fragile door shatters, releasing nerve gas that disables random senses.",
        detection: { dc: 14, skill: "Investigation", clue: "Padlocks connect to frame, not door. Door is unlocked." },
        disarm: { dc: 12, skill: "Perception", method: "Simply turning the doorknob" },
        damage: "Random sense disabled for 3 hours (roll d6: 1-blind, 2-deaf, 3-no taste, 4-arm paralyzed, 5-leg paralyzed, 6-nauseous)",
        save: { type: "Constitution", dc: 14 },
        countermeasures: ["Using the doorknob", "Poison immunity", "Holding breath"],
        source: "Grimtooth's"
    },
    {
        name: "Madame Curie's Fountain",
        category: "hybrid",
        danger: "deadly",
        trigger: "Using radioactive water to clean equipment or drink",
        effect: "Water is contaminated with radioactive isotopes. Effects appear weeks later.",
        detection: { dc: 18, skill: "Arcana", clue: "Silvery metal lining (radium), water glows faintly" },
        disarm: { dc: 20, skill: "Medicine", method: "Avoiding the water entirely" },
        damage: "Radiation sickness (delayed), death if metal taken",
        save: { type: "Constitution", dc: 16 },
        countermeasures: ["Not using the water", "Detecting radiation", "Purification magic"],
        source: "Grimtooth's"
    },
    {
        name: "Portals to Change",
        category: "magical",
        danger: "setback",
        trigger: "Using teleportation portals throughout a dungeon",
        effect: "Each portal has a subtle effect: eye color change, handedness swap, or gender change.",
        detection: { dc: 16, skill: "Arcana", clue: "Different symbols on each portal, faint transformation aura" },
        disarm: { dc: 15, skill: "Arcana", method: "Identifying portal effects before use" },
        damage: "Physical alterations (temporary, 1 month)",
        save: { type: "Constitution", dc: 14 },
        countermeasures: ["Not using portals", "Dispel magic", "Remove curse"],
        source: "Grimtooth's"
    },
    {
        name: "Row Row Sink Your Boat",
        category: "mechanical",
        danger: "deadly",
        trigger: "Using a conveniently placed rowboat",
        effect: "Boat has holes filled with rock salt. Salt dissolves, boat sinks into piranha-infested water.",
        detection: { dc: 15, skill: "Investigation", clue: "White patches on boat hull, salty smell" },
        disarm: { dc: 14, skill: "Survival", method: "Patching holes before launch" },
        damage: "8d10 piercing (piranhas) + drowning",
        save: { type: "Dexterity", dc: 15 },
        countermeasures: ["Swimming to shore quickly", "Patching boat", "Not using the boat"],
        source: "Grimtooth's"
    },
    {
        name: "The Baron's Banquet",
        category: "hybrid",
        danger: "dangerous",
        trigger: "Eating food at a seemingly friendly banquet",
        effect: "Local bacteria in food makes outsiders violently ill for days.",
        detection: { dc: 16, skill: "Medicine", clue: "Locals seem immune, food preparation is unusual" },
        disarm: { dc: 14, skill: "Medicine", method: "Purifying food before eating" },
        damage: "Illness (disadvantage on all rolls for 3 days)",
        save: { type: "Constitution", dc: 15 },
        countermeasures: ["Purify food and drink spell", "Not eating offered food", "Disease immunity"],
        source: "Grimtooth's"
    },
    {
        name: "Dupli-Cats",
        category: "magical",
        danger: "dangerous",
        trigger: "A cat rubs against a lone party member",
        effect: "Flash of light creates exact duplicate. Both claim to be original. Stats halved.",
        detection: { dc: 15, skill: "Arcana", clue: "Cats have faint transmutation aura, avoid groups" },
        disarm: { dc: 16, skill: "Animal Handling", method: "Keeping cats away from party" },
        damage: "Identity confusion, halved stats",
        save: { type: "Charisma", dc: 15 },
        countermeasures: ["Avoiding cats", "Combat to determine original", "Detecting cat-like behavior"],
        source: "Grimtooth's"
    },
    {
        name: "Gimme A Light (Laser Trap)",
        category: "hybrid",
        danger: "deadly",
        trigger: "Bringing light into a parabolic mirror corridor",
        effect: "Light reflects to gem that stores energy. When full, releases focused laser beam.",
        detection: { dc: 17, skill: "Investigation", clue: "Corridor is highly polished, gem visible at end" },
        disarm: { dc: 19, skill: "Arcana", method: "Blocking light from reaching the gem" },
        damage: "12d10 radiant (first 3 in line)",
        save: { type: "Dexterity", dc: 18 },
        countermeasures: ["No light sources", "Standing against walls", "Approaching slowly"],
        source: "Grimtooth's"
    },
    {
        name: "Blew Suede Boots",
        category: "mechanical",
        danger: "deadly",
        trigger: "Kicking anything while wearing trapped boots",
        effect: "Boots contain explosive. Any kick impact detonates, destroying the foot.",
        detection: { dc: 16, skill: "Investigation", clue: "Metal toe is actually two pieces, unusual weight" },
        disarm: { dc: 18, skill: "Thieves' Tools", method: "Carefully removing the explosive filling" },
        damage: "8d10 fire (wearer's leg destroyed)",
        save: { type: "Dexterity", dc: 18 },
        countermeasures: ["Not kicking anything", "Detecting trap before wearing", "Removing carefully"],
        source: "Grimtooth's"
    },
    {
        name: "Breathless Escape Corridor",
        category: "mechanical",
        danger: "deadly",
        trigger: "Disturbing urns filled with oxygen-absorbing substance",
        effect: "Gold coins on top lure looting. Substance absorbs oxygen. Party suffocates.",
        detection: { dc: 16, skill: "Nature", clue: "Brown powder beneath gold, torches dim" },
        disarm: { dc: 15, skill: "Survival", method: "Not disturbing the urns" },
        damage: "Suffocation",
        save: { type: "Constitution", dc: 16 },
        countermeasures: ["Not disturbing urns", "Moving quickly through", "Not needing to breathe"],
        source: "Grimtooth's"
    },
    {
        name: "The Blender",
        category: "mechanical",
        danger: "deadly",
        trigger: "Pulling a door handle near a concealed pit",
        effect: "Trapdoor opens, victim falls into spinning grinder blades.",
        detection: { dc: 15, skill: "Perception", clue: "Floor feels slightly springy, mechanical noise below" },
        disarm: { dc: 18, skill: "Thieves' Tools", method: "Jamming the trapdoor or disabling blades" },
        damage: "12d10 slashing",
        save: { type: "Dexterity", dc: 17 },
        countermeasures: ["Approaching door from side", "Testing floor first", "Feather fall"],
        source: "Grimtooth's"
    },
    {
        name: "Chest of Revenge",
        category: "mechanical",
        danger: "dangerous",
        trigger: "Reaching into an open chest",
        effect: "Lid slams down with incredible force, severing the arm.",
        detection: { dc: 14, skill: "Perception", clue: "Lid has unusual hinge mechanism, springs visible" },
        disarm: { dc: 16, skill: "Thieves' Tools", method: "Jamming the lid open" },
        damage: "6d10 slashing + arm loss",
        save: { type: "Dexterity", dc: 15 },
        countermeasures: ["Propping lid open", "Using mage hand", "Triggering from distance"],
        source: "Grimtooth's"
    },
    {
        name: "Serum of Dorian Grey",
        category: "magical",
        danger: "dangerous",
        trigger: "Drinking a potion labeled 'Immortality'",
        effect: "Grants 1000-year lifespan but instantly ages drinker to appear ancient. Stats halved.",
        detection: { dc: 16, skill: "Arcana", clue: "Detects as true - the catch isn't in the magic" },
        disarm: { dc: 20, skill: "Medicine", method: "Identifying the aging effect before drinking" },
        damage: "All physical stats halved, Constitution increased",
        save: { type: "Constitution", dc: 18 },
        countermeasures: ["Not drinking unknown potions", "Greater restoration", "Wish"],
        source: "Grimtooth's"
    },
    {
        name: "The Exit (Ken St. Andre)",
        category: "hybrid",
        danger: "deadly",
        trigger: "Opening a door marked 'EXIT' and stepping through",
        effect: "Door opens to illusion of a room. Actually a 100-foot pit starting 2 feet from door.",
        detection: { dc: 17, skill: "Investigation", clue: "Functional magic detected, too convenient location" },
        disarm: { dc: 18, skill: "Arcana", method: "Dispelling illusion before entering" },
        damage: "10d10 bludgeoning (100-foot fall)",
        save: { type: "Dexterity", dc: 17 },
        countermeasures: ["Testing floor before stepping", "Flying", "Dispel magic"],
        source: "Grimtooth's"
    },
    {
        name: "Dead End (Ken St. Andre)",
        category: "hybrid",
        danger: "deadly",
        trigger: "Attempting to jump over a spiked pit",
        effect: "Far side is actually invisible stone wall. Jumper impacts wall and falls onto spikes.",
        detection: { dc: 17, skill: "Investigation", clue: "Far corridor seems to shimmer slightly" },
        disarm: { dc: 16, skill: "Investigation", method: "Throwing objects to reveal wall" },
        damage: "3d10 bludgeoning + 6d10 piercing",
        save: { type: "Dexterity", dc: 16 },
        countermeasures: ["Testing with thrown objects", "See invisibility", "Not jumping"],
        source: "Grimtooth's"
    },
    {
        name: "Goblin Wishing Well",
        category: "mechanical",
        danger: "deadly",
        trigger: "Throwing coins into a wishing well",
        effect: "Splash disturbs giant cave squid hiding in murky water, which attacks.",
        detection: { dc: 15, skill: "Nature", clue: "Murky water bubbles occasionally, crude goblin sign" },
        disarm: { dc: 16, skill: "Animal Handling", method: "Not disturbing the water" },
        damage: "8d10 bludgeoning (squid attacks)",
        save: { type: "Strength", dc: 17 },
        countermeasures: ["Not throwing things in water", "Fighting the squid", "Running away"],
        source: "Grimtooth's"
    },
    {
        name: "Calcium Carbide Water Park",
        category: "complex",
        danger: "deadly",
        trigger: "Breaking a crystal pillar containing water over carbide gravel",
        effect: "Water + carbide creates acetylene gas. Torches ignite it. Fan spreads flames.",
        detection: { dc: 19, skill: "Nature", clue: "Gravel is unusual gray color, pillar is water-filled glass" },
        disarm: { dc: 22, skill: "Investigation", method: "Removing torches before breaking pillar" },
        damage: "15d10 fire (entire room)",
        save: { type: "Dexterity", dc: 20 },
        countermeasures: ["Extinguishing all flames first", "Fire immunity", "Not breaking pillar"],
        complexPhases: [
            { trigger: "Pillar broken", effect: "Water spills on gravel, acetylene gas forms" },
            { trigger: "Gas + flame", effect: "Explosion, 15d10 fire to all in room" },
            { trigger: "Fan activates", effect: "Spreads flames throughout, additional 5d10" }
        ],
        source: "Grimtooth's"
    },
    {
        name: "Grimtina's Petting Zoo (101st Trap)",
        category: "hybrid",
        danger: "deadly",
        trigger: "Trusting someone who directs you to an 'exit'",
        effect: "The friendly guide leads victims to a monster menagerie where they become the main course.",
        detection: { dc: 16, skill: "Insight", clue: "Guide seems too helpful, avoids questions about destination" },
        disarm: { dc: 15, skill: "Insight", method: "Not following suspicious guides" },
        damage: "Variable (monster attacks)",
        save: { type: "Wisdom", dc: 15 },
        countermeasures: ["Not trusting strangers", "Verifying exit independently", "Detecting evil"],
        source: "Grimtooth's"
    },
    
    // === BOOK OF CHALLENGES ===
    {
        name: "Capstan Water Trap",
        category: "mechanical",
        danger: "dangerous",
        trigger: "Turning a capstan to open a door",
        effect: "The capstan releases water that floods the room while the door remains locked.",
        detection: { dc: 14, skill: "Investigation", clue: "Water stains on walls, rust on capstan" },
        disarm: { dc: 16, skill: "Thieves' Tools", method: "Bypassing the capstan to open door directly" },
        damage: "Drowning + pressure damage",
        save: { type: "Strength", dc: 14 },
        countermeasures: ["Water breathing", "Finding alternate door mechanism", "Breaking through wall"],
        source: "Book of Challenges"
    },
    {
        name: "Mimic Madness",
        category: "mechanical",
        danger: "dangerous",
        trigger: "Opening one of several chests in a room",
        effect: "One chest is a mimic, others contain treasure or traps. Choosing wrong alerts the mimic.",
        detection: { dc: 13, skill: "Investigation", clue: "One chest has slight moisture, temperature difference" },
        disarm: { dc: 15, skill: "Nature", method: "Identifying the mimic before opening" },
        damage: "Mimic attack + possible trap damage",
        save: { type: "Wisdom", dc: 13 },
        countermeasures: ["Attacking all chests from range", "Using detect magic", "Forcing open remotely"],
        source: "Book of Challenges"
    },
    {
        name: "Dark Water Trap",
        category: "hybrid",
        danger: "dangerous",
        trigger: "Entering an underwater passage",
        effect: "Magical darkness fills the water, combined with currents that disorient swimmers.",
        detection: { dc: 15, skill: "Arcana", clue: "Water is unnaturally dark, magical aura detectable" },
        disarm: { dc: 17, skill: "Arcana", method: "Dispelling the darkness" },
        damage: "Drowning + collision damage",
        save: { type: "Constitution", dc: 15 },
        countermeasures: ["Darkvision (doesn't work)", "Rope tied to guide", "Water breathing + blindsight"],
        source: "Book of Challenges"
    },
    {
        name: "Displacer Beast Maze",
        category: "complex",
        danger: "dangerous",
        trigger: "Entering a hedge maze",
        effect: "A displacer beast hunts the party in a maze where mirrors create illusory duplicates.",
        detection: { dc: 16, skill: "Survival", clue: "Claw marks at unusual heights, displaced tracks" },
        disarm: { dc: 18, skill: "Investigation", method: "Mapping the maze and identifying mirror illusions" },
        damage: "Displacer beast attacks",
        save: { type: "Wisdom", dc: 14 },
        countermeasures: ["True seeing", "Destroying mirrors", "Flying above the maze"],
        source: "Book of Challenges"
    },
    {
        name: "Fire and Water",
        category: "complex",
        danger: "dangerous",
        trigger: "Entering a room with both fire and water hazards",
        effect: "Fire jets and flooding water alternate, creating steam and drowning/burning hazards.",
        detection: { dc: 15, skill: "Perception", clue: "Scorch marks and water stains in alternating patterns" },
        disarm: { dc: 18, skill: "Thieves' Tools", method: "Disabling the alternating mechanism" },
        damage: "3d10 fire or drowning",
        save: { type: "Dexterity", dc: 15 },
        countermeasures: ["Fire and cold resistance", "Water breathing", "Teleportation"],
        complexPhases: [
            { round: 1, effect: "Fire jets activate - 3d10 fire" },
            { round: 2, effect: "Water floods 2 feet" },
            { round: 3, effect: "Fire creates steam - heavily obscured" },
            { round: 4, effect: "Water drains, cycle repeats" }
        ],
        source: "Book of Challenges"
    },
    
    // === GAME MASTER'S BOOK TRAPS ===
    {
        name: "The Pendulum Pit",
        category: "complex",
        danger: "deadly",
        trigger: "Attempting to cross a rope bridge over a pit",
        effect: "Massive pendulum blades swing across the pit while the rope bridges fray.",
        detection: { dc: 16, skill: "Perception", clue: "Scars on walls from blade impacts, frayed rope sections" },
        disarm: { dc: 20, skill: "Thieves' Tools", method: "Jamming the pendulum mechanism from below" },
        damage: "6d10 slashing (blades) + 6d10 bludgeoning (fall)",
        save: { type: "Dexterity", dc: 16 },
        countermeasures: ["Timing movement", "Flying across", "Using a different route"],
        complexPhases: [
            { initiative: 20, effect: "First pendulum swings through left bridge" },
            { initiative: 15, effect: "Second pendulum swings through right bridge" },
            { initiative: 10, effect: "Rope frays - DC 12 Dex save or fall" }
        ],
        source: "Game Master's Book"
    },
    {
        name: "The Piston Palace",
        category: "mechanical",
        danger: "deadly",
        trigger: "Entering a room with rhythmically moving pistons",
        effect: "Giant stone pistons crush anything caught between them on a regular timer.",
        detection: { dc: 14, skill: "Perception", clue: "Rhythmic grinding sound, movement of stone columns" },
        disarm: { dc: 20, skill: "Thieves' Tools", method: "Jamming the piston mechanism" },
        damage: "8d10 bludgeoning",
        save: { type: "Dexterity", dc: 17 },
        countermeasures: ["Timing movement between pistons", "Gaseous form", "Teleportation"],
        source: "Game Master's Book"
    },
    {
        name: "The Lava Floor",
        category: "environmental",
        danger: "deadly",
        trigger: "The floor of the room is actual lava",
        effect: "Platforms provide the only safe passage across a room filled with molten rock.",
        detection: { dc: 10, skill: "Perception", clue: "Extreme heat, glowing orange light, burning smell" },
        disarm: { dc: 25, skill: "Arcana", method: "Cooling the lava magically" },
        damage: "10d10 fire per round in lava",
        save: { type: "Constitution", dc: 18 },
        countermeasures: ["Fire immunity", "Flying", "Jumping between platforms"],
        source: "Game Master's Book"
    },
    {
        name: "The Gear Box",
        category: "mechanical",
        danger: "dangerous",
        trigger: "Entering a room filled with interlocking gears",
        effect: "Characters must navigate through moving gears that can crush or trap them.",
        detection: { dc: 12, skill: "Perception", clue: "Loud mechanical grinding, visible gears in motion" },
        disarm: { dc: 18, skill: "Thieves' Tools", method: "Stopping the central mechanism" },
        damage: "4d10 bludgeoning",
        save: { type: "Dexterity", dc: 15 },
        countermeasures: ["Timing movement", "Becoming small (reduce)", "Gaseous form"],
        source: "Game Master's Book"
    },
    {
        name: "The Cursed Treasury",
        category: "magical",
        danger: "dangerous",
        trigger: "Taking any treasure from the room",
        effect: "A curse afflicts anyone who takes treasure without properly appeasing the guardian spirit.",
        detection: { dc: 15, skill: "Arcana", clue: "Ghostly presence, cold spots, ancient warnings" },
        disarm: { dc: 18, skill: "Religion", method: "Performing the proper ritual of appeasement" },
        damage: "Curse effects (disadvantage, reduced HP, haunting)",
        save: { type: "Charisma", dc: 16 },
        countermeasures: ["Remove curse spell", "Returning the treasure", "Completing the guardian's request"],
        source: "Game Master's Book"
    },
    
    // === XANATHAR'S GUIDE COMPLEX TRAPS ===
    {
        name: "Path of Blades",
        category: "complex",
        danger: "deadly",
        trigger: "Entering a 60-foot corridor",
        effect: "Multiple scything blades sweep through the corridor at intervals. Initiative count 20 and 10 each round.",
        detection: { dc: 15, skill: "Perception", clue: "Slots in the walls, dried blood on the floor" },
        disarm: { dc: 20, skill: "Thieves' Tools", method: "Disabling the mechanism requires 3 successful checks while avoiding blades" },
        damage: "4d10 slashing per blade (two attacks per round)",
        save: { type: "Dexterity", dc: 15 },
        countermeasures: ["Timing movement between blade sweeps", "Gaseous form", "Teleportation"],
        complexPhases: [
            { initiative: 20, effect: "First set of blades sweep from north wall" },
            { initiative: 10, effect: "Second set of blades sweep from south wall" }
        ],
        source: "XGE"
    },
    {
        name: "Poisoned Tempest",
        category: "complex",
        danger: "deadly",
        trigger: "Prying a ruby from a serpent statue opens pipes in the serpents' mouths",
        effect: "A yuan-ti temple trap in a 60-foot square room. Four serpent statues release poison gas and elemental effects.",
        detection: { dc: 18, skill: "Investigation", clue: "Serpent statues with open mouths, faint hissing sound" },
        disarm: { dc: 20, skill: "Arcana", method: "Sealing the pipes or dispelling the magical effects. Multiple checks required." },
        damage: "6d10 poison (increasing by 2d10 each round, max 10d10)",
        save: { type: "Constitution", dc: 20 },
        countermeasures: ["Poison immunity", "Dispel magic on doors", "Destroying poison source", "Wind spells to disperse gas"],
        complexPhases: [
            { initiative: 20, effect: "Doors slam shut (magically locked). Poison gas deals 6d10 poison damage." },
            { initiative: 10, effect: "Tempest effect (roll d6): 1-Hallucinatory gas, 2-Explosive gas, 3-Weakening gas, 4-Knockdown winds, 5-Smoke, 6-Extra poison" }
        ],
        source: "XGE"
    },
    {
        name: "Falling Portcullis",
        category: "mechanical",
        danger: "dangerous",
        trigger: "Stepping on a pressure plate or tripwire in a corridor",
        effect: "Heavy iron portcullises drop from the ceiling, trapping creatures between them.",
        detection: { dc: 15, skill: "Perception", clue: "Grooves in ceiling, thin wire at ankle height" },
        disarm: { dc: 17, skill: "Thieves' Tools", method: "Jamming the portcullis mechanism or cutting the wire" },
        damage: "3d10 bludgeoning if caught under falling gate",
        save: { type: "Dexterity", dc: 15 },
        countermeasures: ["Lifting portcullis (DC 20 Strength)", "Bending bars (DC 25)", "Teleportation"],
        source: "XGE"
    },
    {
        name: "Crushing Ceiling",
        category: "complex",
        danger: "deadly",
        trigger: "Removing treasure from pedestal or disturbing the room",
        effect: "The ceiling begins descending, crushing everything in the room over several rounds.",
        detection: { dc: 16, skill: "Investigation", clue: "Ceiling has unusual seams, mechanism visible if inspected" },
        disarm: { dc: 22, skill: "Thieves' Tools", method: "Jamming the mechanism (requires 3 successes before ceiling reaches floor)" },
        damage: "10d10 bludgeoning when ceiling reaches floor",
        save: { type: "Dexterity", dc: 18 },
        countermeasures: ["Finding hidden exit", "Destroying mechanism", "Holding ceiling (DC 25 Athletics, temporary)"],
        complexPhases: [
            { round: 1, effect: "Ceiling begins descending - 10 feet down" },
            { round: 2, effect: "Ceiling 20 feet down - Medium creatures must crouch" },
            { round: 3, effect: "Ceiling 30 feet down - crawling only" },
            { round: 4, effect: "Ceiling reaches floor - crushing damage" }
        ],
        source: "XGE"
    },
    {
        name: "Sphere of Crushing Doom",
        category: "complex",
        danger: "deadly",
        trigger: "Taking the golden idol from its pedestal",
        effect: "A massive stone sphere drops from the ceiling and rolls toward the exit. The door begins closing.",
        detection: { dc: 18, skill: "Investigation", clue: "Groove in the floor, counterweight mechanism visible if searched" },
        disarm: { dc: 22, skill: "Athletics", method: "Jamming the sphere or holding the door open" },
        damage: "10d10 bludgeoning",
        save: { type: "Dexterity", dc: 17 },
        countermeasures: ["Replacing the idol with equal weight", "Outrunning the sphere", "Destroying it (AC 17, 150 HP)"],
        complexPhases: [
            { initiative: 20, effect: "Sphere drops and begins rolling (60 ft/round)" },
            { initiative: 10, effect: "Exit door closes 1 foot per round (starts 10 feet open)" }
        ],
        source: "Classic/XGE"
    },
    {
        name: "Flooding Room",
        category: "complex",
        danger: "dangerous",
        trigger: "Pulling a lever or opening a chest",
        effect: "Water begins pouring in from hidden spouts. Room fills in 10 rounds.",
        detection: { dc: 15, skill: "Perception", clue: "Water stains on the walls, moisture in the air" },
        disarm: { dc: 18, skill: "Investigation", method: "Finding and blocking the water source or drain mechanism" },
        damage: "Drowning after room fills",
        save: { type: "Constitution", dc: 13 },
        countermeasures: ["Water breathing", "Finding the hidden exit", "Blocking the water spouts"],
        complexPhases: [
            { round: 1, effect: "Water begins filling - ankle deep" },
            { round: 3, effect: "Water waist deep - difficult terrain" },
            { round: 5, effect: "Water chest deep - swimming required for Small creatures" },
            { round: 7, effect: "Water reaches ceiling - all must swim" },
            { round: 10, effect: "Room completely filled - drowning begins" }
        ],
        source: "Book of Challenges"
    },
    
    // === TOMB OF ANNIHILATION - Tomb of the Nine Gods ===
    {
        name: "Puzzle Cubes Entrance",
        category: "mechanical",
        danger: "dangerous",
        trigger: "Placing puzzle cubes in wrong configuration",
        effect: "Nine puzzle cubes must be placed correctly to open the tomb. Wrong placement releases poison and acid gas.",
        detection: { dc: 15, skill: "Investigation", clue: "Cube shapes match certain indentations, symbols provide hints" },
        disarm: { dc: 16, skill: "Intelligence", method: "Solving the cube puzzle correctly" },
        damage: "4d10 poison + 4d10 acid",
        save: { type: "Constitution", dc: 15 },
        countermeasures: ["Studying the symbols", "Trial cubes from safe distance", "Poison resistance"],
        source: "Tomb of Annihilation"
    },
    {
        name: "Wind Tunnel Propeller",
        category: "mechanical",
        danger: "deadly",
        trigger: "Stepping on pressure plates in a corridor",
        effect: "A spinning adamantine propeller with five blades fills the corridor.",
        detection: { dc: 16, skill: "Perception", clue: "Wind sound, pressure plates on floor" },
        disarm: { dc: 20, skill: "Acrobatics", method: "Timing movement between blade rotations" },
        damage: "6d10 slashing (66 at high speed)",
        save: { type: "Dexterity", dc: 20 },
        countermeasures: ["Gaseous form", "Teleportation", "Timing the blades precisely"],
        source: "Tomb of Annihilation"
    },
    {
        name: "Wongo's Tomb Pit",
        category: "mechanical",
        danger: "dangerous",
        trigger: "Entering the tomb of the trickster god Wongo",
        effect: "20-foot pit with three treasure chests. Keys inside chests must be turned from within to unlock sarcophagus.",
        detection: { dc: 14, skill: "Investigation", clue: "Chests have no external keyholes, sarcophagus has three locks" },
        disarm: { dc: 15, skill: "Thieves' Tools", method: "Reaching inside chests to turn keys (trap triggers)" },
        damage: "2d10 bludgeoning (fall) + chest traps",
        save: { type: "Dexterity", dc: 14 },
        countermeasures: ["Mage hand inside chests", "Flying down", "Detecting chest traps first"],
        source: "Tomb of Annihilation"
    },
    {
        name: "Obo'laka's Shrine (Chamber of Greed)",
        category: "magical",
        danger: "setback",
        trigger: "Taking illusory treasure from the shrine",
        effect: "Treasure appears real but reverts to worthless junk when removed. 'Tread warily and stay in the light.'",
        detection: { dc: 14, skill: "Arcana", clue: "Treasure glows faintly, inscription warns of greed" },
        disarm: { dc: 12, skill: "Wisdom", method: "Leaving the treasure alone" },
        damage: "Lost time and false hope",
        save: { type: "Wisdom", dc: 13 },
        countermeasures: ["Detect magic", "Reading inscriptions", "Resisting greed"],
        source: "Tomb of Annihilation"
    },
    {
        name: "Mimic Shell Game",
        category: "mechanical",
        danger: "dangerous",
        trigger: "Choosing the wrong container in a shell game",
        effect: "Three mimics rapidly exchange a glowing purple skull. Must track correct mimic.",
        detection: { dc: 16, skill: "Perception", clue: "Containers move unnaturally, slight adhesive residue" },
        disarm: { dc: 15, skill: "Perception", method: "Successfully tracking skull location" },
        damage: "Mimic attacks (4d10 bludgeoning + adhesive)",
        save: { type: "Wisdom", dc: 15 },
        countermeasures: ["Attacking all containers", "True seeing", "Refusing to play"],
        source: "Tomb of Annihilation"
    },
    
    // === TALES FROM THE YAWNING PORTAL - Tomb of Horrors ===
    {
        name: "Green Devil Face",
        category: "magical",
        danger: "deadly",
        trigger: "Entering the mouth of a carved green devil face",
        effect: "The mouth contains a sphere of annihilation. Anything entering is instantly destroyed.",
        detection: { dc: 18, skill: "Arcana", clue: "Absolute darkness in mouth, no sound returns from within" },
        disarm: { dc: 25, skill: "Arcana", method: "Cannot be disarmed - must be avoided" },
        damage: "Instant destruction (no save)",
        save: { type: "None", dc: 0 },
        countermeasures: ["Not entering the mouth", "Detecting the sphere", "Using expendable objects to test"],
        source: "Tomb of Horrors"
    },
    {
        name: "False Entrance Collapse",
        category: "mechanical",
        danger: "deadly",
        trigger: "Entering the wrong entrance to the tomb",
        effect: "The tunnel collapses, burying and crushing all within.",
        detection: { dc: 16, skill: "Investigation", clue: "Stone is newer, supports seem intentionally weakened" },
        disarm: { dc: 18, skill: "Athletics", method: "Shoring up the tunnel before entering" },
        damage: "10d10 bludgeoning + buried",
        save: { type: "Dexterity", dc: 17 },
        countermeasures: ["Testing with summoned creatures", "Earth glide", "Careful structural analysis"],
        source: "Tomb of Horrors"
    },
    {
        name: "Gargoyle Ambush",
        category: "mechanical",
        danger: "dangerous",
        trigger: "Taking the gems from the four-armed gargoyle statue",
        effect: "The gargoyle animates and attacks. Its four arms make it especially dangerous.",
        detection: { dc: 15, skill: "Arcana", clue: "Statue has unusual joints, gems seem too easy to take" },
        disarm: { dc: 16, skill: "Sleight of Hand", method: "Replacing gems with equal weight" },
        damage: "4d10 slashing (multi-attack)",
        save: { type: "Initiative", dc: 15 },
        countermeasures: ["Attacking statue first", "Leaving gems alone", "Fighting the gargoyle"],
        source: "Tomb of Horrors"
    },
    {
        name: "Crushing Corridor Juggernaut",
        category: "mechanical",
        danger: "deadly",
        trigger: "Triggering poison gas that knocks party unconscious",
        effect: "A giant stone elephant on wheels rolls down the corridor, crushing unconscious victims.",
        detection: { dc: 15, skill: "Perception", clue: "Wheel tracks on floor, chemical smell in air" },
        disarm: { dc: 18, skill: "Constitution", method: "Resisting the poison gas and fleeing" },
        damage: "12d10 bludgeoning",
        save: { type: "Constitution", dc: 16 },
        countermeasures: ["Poison immunity", "Holding breath", "Side alcoves"],
        source: "Tomb of Horrors"
    },
    {
        name: "Chapel of Evil",
        category: "magical",
        danger: "deadly",
        trigger: "Disturbing the evil altar",
        effect: "Undead rise, curses activate, and the room seals. Orange and blue mists have varying effects.",
        detection: { dc: 16, skill: "Religion", clue: "Altar radiates evil, mists have distinct smells" },
        disarm: { dc: 18, skill: "Religion", method: "Proper desecration ritual or avoiding altar" },
        damage: "Various (undead attacks + curses)",
        save: { type: "Wisdom", dc: 16 },
        countermeasures: ["Turn undead", "Protection from evil", "Not disturbing altar"],
        source: "Tomb of Horrors"
    },
    {
        name: "200-Spike Pit",
        category: "mechanical",
        danger: "deadly",
        trigger: "Falling into a concealed pit trap",
        effect: "A massive pit filled with 200 poisoned spikes. Multiple spikes hit any falling creature.",
        detection: { dc: 16, skill: "Perception", clue: "Floor sounds hollow, thin seams visible" },
        disarm: { dc: 17, skill: "Thieves' Tools", method: "Jamming the pit cover in place" },
        damage: "2d10 bludgeoning + 4d10 piercing + 4d10 poison",
        save: { type: "Dexterity", dc: 16 },
        countermeasures: ["Feather fall", "Flying", "Testing floor with pole"],
        source: "Tomb of Horrors"
    },
    
    // === TALES FROM THE YAWNING PORTAL - White Plume Mountain ===
    {
        name: "Sphinx's Riddle Gate",
        category: "magical",
        danger: "dangerous",
        trigger: "Approaching the sphinx behind a wall of force",
        effect: "Must answer the sphinx's riddle to pass. Wrong answer triggers attack.",
        detection: { dc: 12, skill: "Arcana", clue: "Wall of force visible, sphinx clearly waiting" },
        disarm: { dc: 15, skill: "Intelligence", method: "Answering the riddle correctly" },
        damage: "Sphinx attack (8d10 mixed)",
        save: { type: "Intelligence", dc: 15 },
        countermeasures: ["Answering correctly", "Fighting the sphinx", "Finding alternate route"],
        source: "White Plume Mountain"
    },
    {
        name: "Boiling Lake Stepping Discs",
        category: "mechanical",
        danger: "dangerous",
        trigger: "Attempting to cross a cavern over boiling water",
        effect: "Wooden discs on chains swing and tilt. Falling means landing in boiling water.",
        detection: { dc: 12, skill: "Perception", clue: "Steam rising, discs visibly swaying" },
        disarm: { dc: 10, skill: "Athletics/Acrobatics", method: "Carefully timing jumps between discs" },
        damage: "6d10 fire (boiling water)",
        save: { type: "Dexterity", dc: 10 },
        countermeasures: ["Flying across", "Grappling hooks to stabilize", "Freezing the water"],
        source: "White Plume Mountain"
    },
    {
        name: "Frictionless Room",
        category: "magical",
        danger: "dangerous",
        trigger: "Entering a room coated with oil of slipperiness",
        effect: "Floor, walls, and ceiling are completely frictionless. Movement is nearly impossible.",
        detection: { dc: 14, skill: "Perception", clue: "Everything glistens, no dust or debris" },
        disarm: { dc: 18, skill: "Arcana", method: "Dispelling the magic or finding mundane solution" },
        damage: "None (traps party)",
        save: { type: "Dexterity", dc: 15 },
        countermeasures: ["Spider climb", "Flying", "Rope and piton from outside room"],
        source: "White Plume Mountain"
    },
    {
        name: "Copper Plate Heat Corridor",
        category: "mechanical",
        danger: "dangerous",
        trigger: "Walking through corridor with copper plates on walls",
        effect: "Plates rapidly heat metal. Anyone in metal armor takes fire damage every 10 feet.",
        detection: { dc: 13, skill: "Perception", clue: "Walls are copper, slight warmth, discolored metal" },
        disarm: { dc: 15, skill: "Investigation", method: "Removing metal armor or finding insulation" },
        damage: "2d10 fire per 10 feet",
        save: { type: "Constitution", dc: 14 },
        countermeasures: ["Removing metal armor", "Fire resistance", "Moving quickly"],
        source: "White Plume Mountain"
    },
    {
        name: "Room of Glass Globes",
        category: "mechanical",
        danger: "dangerous",
        trigger: "Breaking or opening any of the glass globes",
        effect: "Each globe releases different creatures: shadows, air elemental, gray ooze.",
        detection: { dc: 14, skill: "Perception", clue: "Movement visible inside some globes" },
        disarm: { dc: 16, skill: "Sleight of Hand", method: "Carefully extracting treasure without breaking globes" },
        damage: "Variable (creature attacks)",
        save: { type: "Dexterity", dc: 14 },
        countermeasures: ["Blasting from outside room", "Targeting only treasure globes", "Fighting released creatures"],
        source: "White Plume Mountain"
    },
    
    // === TALES FROM THE YAWNING PORTAL - Hidden Shrine of Tamoachan ===
    {
        name: "Poison Gas Shrine",
        category: "hybrid",
        danger: "dangerous",
        trigger: "Entering the lower levels of the shrine",
        effect: "Entire area filled with poisonous gas. 1d6 damage per hour. Long rests nearly impossible.",
        detection: { dc: 10, skill: "Perception", clue: "Green haze, chemical smell, difficulty breathing" },
        disarm: { dc: 20, skill: "Survival", method: "Finding ventilation or reaching upper levels" },
        damage: "1d6 poison per hour",
        save: { type: "Constitution", dc: 13 },
        countermeasures: ["Moving quickly upward", "Poison immunity", "Wet cloths over face"],
        source: "Hidden Shrine of Tamoachan"
    },
    {
        name: "Calendar Stone Trap",
        category: "hybrid",
        danger: "deadly",
        trigger: "Interacting with the Olman calendar stone incorrectly",
        effect: "The massive stone activates various effects based on position: fire, lightning, or summoned creatures.",
        detection: { dc: 16, skill: "History", clue: "Olman symbols indicate different positions/effects" },
        disarm: { dc: 18, skill: "History", method: "Setting the calendar to the correct date" },
        damage: "6d10 (type varies by position)",
        save: { type: "Various", dc: 16 },
        countermeasures: ["Researching Olman calendar", "Not touching the stone", "Resistance to fire/lightning"],
        source: "Hidden Shrine of Tamoachan"
    },
    {
        name: "Nereid's Pool",
        category: "magical",
        danger: "dangerous",
        trigger: "Approaching the beautiful woman in the pool",
        effect: "A nereid attempts to drown victims with her supernatural beauty and water control.",
        detection: { dc: 15, skill: "Nature", clue: "Water moves unnaturally, woman has no reflection" },
        disarm: { dc: 14, skill: "Persuasion", method: "Negotiating with the nereid" },
        damage: "Drowning + charm effects",
        save: { type: "Wisdom", dc: 15 },
        countermeasures: ["Water breathing", "Resisting charm", "Attacking from range"],
        source: "Hidden Shrine of Tamoachan"
    },
    
    // === CURSE OF STRAHD - Castle Ravenloft ===
    {
        name: "Elevator Trap",
        category: "mechanical",
        danger: "dangerous",
        trigger: "Using the elevator in Castle Ravenloft",
        effect: "The elevator plummets, then stops suddenly. Alternatively, rises into blade traps.",
        detection: { dc: 14, skill: "Investigation", clue: "Frayed cables, rust on mechanisms" },
        disarm: { dc: 16, skill: "Thieves' Tools", method: "Securing the elevator cables" },
        damage: "6d10 bludgeoning or slashing",
        save: { type: "Dexterity", dc: 15 },
        countermeasures: ["Feather fall", "Flying", "Taking the stairs"],
        source: "Curse of Strahd"
    },
    {
        name: "Teleportation Trap",
        category: "magical",
        danger: "setback",
        trigger: "Stepping through certain doorways in Castle Ravenloft",
        effect: "Party members are teleported to random locations throughout the castle, separating them.",
        detection: { dc: 16, skill: "Arcana", clue: "Faint shimmer in doorway, slight magical hum" },
        disarm: { dc: 17, skill: "Arcana", method: "Dispel magic or avoiding the trapped doorways" },
        damage: "None (separates party)",
        save: { type: "Charisma", dc: 15 },
        countermeasures: ["Detect magic", "Rope to stay connected", "Dispel magic"],
        source: "Curse of Strahd"
    },
    {
        name: "Brazier of Sleep",
        category: "magical",
        danger: "dangerous",
        trigger: "Inhaling smoke from an enchanted brazier",
        effect: "Magical sleep affects all who breathe the smoke. Strahd's servants then capture sleepers.",
        detection: { dc: 14, skill: "Arcana", clue: "Smoke has unusual blue tinge, sweet smell" },
        disarm: { dc: 15, skill: "Athletics", method: "Extinguishing or covering the brazier" },
        damage: "Magical sleep (captured if not rescued)",
        save: { type: "Wisdom", dc: 15 },
        countermeasures: ["Holding breath", "Elf immunity to sleep", "Extinguishing brazier quickly"],
        source: "Curse of Strahd"
    },
    
    // === KEYS FROM THE GOLDEN VAULT ===
    {
        name: "Clockwork Security System",
        category: "mechanical",
        danger: "dangerous",
        trigger: "Triggering any alarm in a clockwork-protected vault",
        effect: "Clockwork sentinels activate, doors lock, and alarm bells ring throughout the facility.",
        detection: { dc: 15, skill: "Investigation", clue: "Tiny gears in walls, pressure-sensitive floors" },
        disarm: { dc: 17, skill: "Thieves' Tools", method: "Disabling the central clockwork mechanism" },
        damage: "4d10 bludgeoning (sentinel attacks)",
        save: { type: "Dexterity", dc: 15 },
        countermeasures: ["Avoiding triggers", "Silence spell on alarms", "Fighting through"],
        source: "Keys from the Golden Vault"
    },
    {
        name: "Arcane Lock Maze",
        category: "magical",
        danger: "setback",
        trigger: "Attempting to navigate a magically warded vault",
        effect: "Multiple arcane locks require specific keys, passwords, or dispelling in sequence.",
        detection: { dc: 14, skill: "Arcana", clue: "Glowing runes on doors, magical auras visible" },
        disarm: { dc: 16, skill: "Arcana", method: "Dispelling locks in correct order or finding passwords" },
        damage: "2d10 force (touching wrong lock)",
        save: { type: "Intelligence", dc: 14 },
        countermeasures: ["Knock spell", "Finding key items", "Dispel magic"],
        source: "Keys from the Golden Vault"
    },
    {
        name: "Pressure Plate Gallery",
        category: "mechanical",
        danger: "dangerous",
        trigger: "Stepping on wrong tiles while stealing art",
        effect: "Floor tiles trigger various defenses: darts, gas, alarms, or locking doors.",
        detection: { dc: 14, skill: "Perception", clue: "Some tiles sit slightly higher, worn patterns on floor" },
        disarm: { dc: 15, skill: "Thieves' Tools", method: "Mapping safe path or disabling triggers" },
        damage: "3d10 (varies by trap triggered)",
        save: { type: "Dexterity", dc: 14 },
        countermeasures: ["Flying over tiles", "Following safe pattern", "Tanking the damage"],
        source: "Keys from the Golden Vault"
    },
    {
        name: "Vault Door Time Lock",
        category: "mechanical",
        danger: "setback",
        trigger: "Attempting to open a time-locked vault door early",
        effect: "Door only opens at specific times. Early attempts trigger alarms and reinforced locks.",
        detection: { dc: 12, skill: "Investigation", clue: "Clock mechanism visible, schedule posted nearby" },
        disarm: { dc: 18, skill: "Thieves' Tools", method: "Manipulating the clock mechanism" },
        damage: "Alarm triggered (guards arrive in 1d4 rounds)",
        save: { type: "Dexterity", dc: 16 },
        countermeasures: ["Waiting for correct time", "Disabling clock", "Alternative entry"],
        source: "Keys from the Golden Vault"
    },
    
    // === DMG ADDITIONAL SAMPLE TRAPS ===
    {
        name: "Collapsing Roof",
        category: "mechanical",
        danger: "dangerous",
        trigger: "Trip wire or disturbing a support beam",
        effect: "The ceiling collapses in a 10-foot radius. Creatures in the area are buried under rubble.",
        detection: { dc: 10, skill: "Perception", clue: "Sagging ceiling, cracked supports, trip wire visible" },
        disarm: { dc: 15, skill: "Thieves' Tools", method: "Cutting trip wire or shoring up supports" },
        damage: "4d10 bludgeoning",
        save: { type: "Dexterity", dc: 13 },
        countermeasures: ["Avoiding the area", "Triggering from a distance", "Stone shape to reinforce"],
        source: "DMG"
    },
    {
        name: "Falling Net",
        category: "mechanical",
        danger: "setback",
        trigger: "Trip wire 3 inches off the ground",
        effect: "A net drops from the ceiling, restraining creatures in a 10-foot square area.",
        detection: { dc: 10, skill: "Perception", clue: "Trip wire between columns, net visible above" },
        disarm: { dc: 10, skill: "Thieves' Tools", method: "Cutting the trip wire or removing the net" },
        damage: "None (restrains only)",
        save: { type: "Dexterity", dc: 10 },
        countermeasures: ["Stepping over wire", "Cutting net from below", "Strength DC 10 to escape"],
        source: "DMG"
    },
    {
        name: "Fire-Breathing Statue",
        category: "magical",
        danger: "dangerous",
        trigger: "Stepping on a pressure plate or trip wire",
        effect: "A dragon statue breathes fire in a 30-foot cone.",
        detection: { dc: 15, skill: "Perception", clue: "Pressure plate, statue's mouth is blackened" },
        disarm: { dc: 13, skill: "Thieves' Tools", method: "Jamming the pressure plate or blocking the mouth" },
        damage: "4d10 fire",
        save: { type: "Dexterity", dc: 13 },
        countermeasures: ["Avoiding pressure plate", "Fire resistance", "Covering statue's mouth"],
        source: "DMG"
    },
    {
        name: "Poison Darts",
        category: "mechanical",
        danger: "setback",
        trigger: "Pressure plate or trip wire",
        effect: "Darts shoot from hidden tubes in the walls, striking creatures in the area.",
        detection: { dc: 15, skill: "Perception", clue: "Tiny holes in walls, pressure plate slightly raised" },
        disarm: { dc: 15, skill: "Thieves' Tools", method: "Blocking the dart tubes or disabling trigger" },
        damage: "1d10 piercing + 2d10 poison",
        save: { type: "Dexterity", dc: 13 },
        countermeasures: ["Stepping around plate", "Shield to block darts", "Poison resistance"],
        source: "DMG"
    },
    {
        name: "Poison Needle",
        category: "mechanical",
        danger: "setback",
        trigger: "Opening a lock without disarming the trap",
        effect: "A poisoned needle springs from the lock, pricking the creature attempting to pick it.",
        detection: { dc: 20, skill: "Investigation", clue: "Tiny hole near keyhole, discoloration on mechanism" },
        disarm: { dc: 15, skill: "Thieves' Tools", method: "Blocking the needle with a thin object" },
        damage: "1 piercing + 2d10 poison",
        save: { type: "Constitution", dc: 15 },
        countermeasures: ["Using the actual key", "Wearing thick gloves", "Knock spell"],
        source: "DMG"
    },
    {
        name: "Rolling Sphere",
        category: "mechanical",
        danger: "dangerous",
        trigger: "Pressure plate activates when 20+ pounds applied",
        effect: "A 10-foot diameter stone sphere rolls down the corridor at 60 feet per round.",
        detection: { dc: 15, skill: "Perception", clue: "Slot in ceiling, groove marks on floor" },
        disarm: { dc: 15, skill: "Thieves' Tools", method: "Jamming the release mechanism" },
        damage: "10d10 bludgeoning",
        save: { type: "Dexterity", dc: 15 },
        countermeasures: ["Running faster", "Side alcoves", "Destroying the sphere (AC 17, 100 HP)"],
        source: "DMG"
    },
    
    // === XGE ADDITIONAL COMPLEX TRAPS ===
    {
        name: "Path of Blades",
        category: "complex",
        danger: "deadly",
        trigger: "Stepping on the pressure plate at the corridor entrance",
        effect: "Scything blades sweep across a 10-foot-wide, 100-foot-long corridor. Walls push inward.",
        detection: { dc: 15, skill: "Perception", clue: "Slots in walls, pressure plate at entrance" },
        disarm: { dc: 20, skill: "Thieves' Tools", method: "Disabling blade mechanisms one at a time" },
        damage: "4d10 slashing per set of blades",
        save: { type: "Dexterity", dc: 15 },
        countermeasures: ["Timing blade sweeps", "Teleportation", "Gaseous form"],
        complexPhases: [
            { initiative: 20, effect: "First set of blades sweeps (nearest entrance)" },
            { initiative: 15, effect: "Second set of blades sweeps (middle)" },
            { initiative: 10, effect: "Third set of blades sweeps (far end)" },
            { initiative: 5, effect: "Walls push 5 feet closer (corridor narrows)" }
        ],
        source: "XGE"
    },
    
    // === VAN RICHTEN'S GUIDE TO RAVENLOFT - HAUNTED TRAPS ===
    {
        name: "Weeping Walls",
        category: "magical",
        danger: "dangerous",
        trigger: "Entering a room marked by past tragedy",
        effect: "Walls weep blood or ectoplasm. Creatures feel overwhelming despair and may be paralyzed.",
        detection: { dc: 15, skill: "Arcana", clue: "Cold spots, faint sobbing sounds, bloodstains that reappear" },
        disarm: { dc: 17, skill: "Religion", method: "Laying the spirits to rest or consecrating the area" },
        damage: "3d10 psychic",
        save: { type: "Wisdom", dc: 15 },
        countermeasures: ["Protection from evil", "High Wisdom saves", "Quickly leaving the area"],
        source: "Van Richten's Guide"
    },
    {
        name: "Grasping Grave",
        category: "magical",
        danger: "dangerous",
        trigger: "Walking over buried remains or defiled ground",
        effect: "Spectral hands reach up from the ground, grasping and pulling creatures down.",
        detection: { dc: 14, skill: "Perception", clue: "Disturbed earth, cold emanating from ground" },
        disarm: { dc: 16, skill: "Religion", method: "Blessing the ground or removing the remains" },
        damage: "2d10 necrotic + restrained",
        save: { type: "Strength", dc: 14 },
        countermeasures: ["Flying over area", "Turn Undead", "Consecrate spell"],
        source: "Van Richten's Guide"
    },
    {
        name: "Mirror of Souls",
        category: "magical",
        danger: "deadly",
        trigger: "Looking into a cursed mirror",
        effect: "The mirror attempts to trap the viewer's soul, replacing them with a malevolent reflection.",
        detection: { dc: 16, skill: "Arcana", clue: "Mirror reflects things incorrectly, cold touch" },
        disarm: { dc: 18, skill: "Arcana", method: "Breaking the mirror (releases trapped souls) or dispel magic" },
        damage: "Soul trapped (as Magic Jar)",
        save: { type: "Charisma", dc: 16 },
        countermeasures: ["Not looking at mirror", "Covering it", "High Charisma"],
        source: "Van Richten's Guide"
    },
    {
        name: "Echoes of Violence",
        category: "magical",
        danger: "dangerous",
        trigger: "Entering a site of past massacre or murder",
        effect: "Phantom images of past violence manifest. Creatures take damage as if struck by ghostly weapons.",
        detection: { dc: 13, skill: "History", clue: "Bloodstains, lingering screams, temperature drops" },
        disarm: { dc: 15, skill: "Religion", method: "Performing rites for the dead or solving the murder" },
        damage: "4d8 psychic + 2d8 necrotic",
        save: { type: "Wisdom", dc: 14 },
        countermeasures: ["Protection from evil", "Speed through area", "Speak with Dead to resolve"],
        source: "Van Richten's Guide"
    },
    {
        name: "Creeping Dread",
        category: "magical",
        danger: "setback",
        trigger: "Prolonged presence in a haunted location",
        effect: "Paranoia and fear build over time. Creatures become frightened and may attack allies.",
        detection: { dc: 12, skill: "Insight", clue: "Growing unease, shadows seem to move" },
        disarm: { dc: 14, skill: "Performance", method: "Bolstering morale, leaving the area, or exorcism" },
        damage: "2d6 psychic per hour + frightened condition",
        save: { type: "Wisdom", dc: 13 },
        countermeasures: ["Calm Emotions", "Heroes' Feast", "Short stays only"],
        source: "Van Richten's Guide"
    },
    
    // === FIZBAN'S TREASURY OF DRAGONS - DRAGON LAIR HAZARDS ===
    {
        name: "Crystallized Lightning Field",
        category: "magical",
        danger: "dangerous",
        trigger: "Entering a blue dragon's lair",
        effect: "Glass-like formations crackle with stored lightning. Movement shatters crystals, releasing electricity.",
        detection: { dc: 14, skill: "Nature", clue: "Crackling sounds, hair stands on end, blue glow" },
        disarm: { dc: 16, skill: "Arcana", method: "Grounding the electrical charge or careful navigation" },
        damage: "4d10 lightning",
        save: { type: "Dexterity", dc: 15 },
        countermeasures: ["Lightning resistance", "Flying carefully", "Insulated gear"],
        source: "Fizban's Treasury"
    },
    {
        name: "Acid Pools",
        category: "magical",
        danger: "dangerous",
        trigger: "Falling into or touching pools in a black dragon's lair",
        effect: "Pools of concentrated acid dot the lair floor, some disguised by murky water.",
        detection: { dc: 13, skill: "Nature", clue: "Bubbling, discolored water, dissolved bones nearby" },
        disarm: { dc: 15, skill: "Nature", method: "Neutralizing with base substances or avoiding" },
        damage: "6d10 acid (immersion) or 3d10 (splash)",
        save: { type: "Dexterity", dc: 14 },
        countermeasures: ["Acid resistance", "Careful movement", "Detect magic reveals hidden pools"],
        source: "Fizban's Treasury"
    },
    {
        name: "Hypnotic Treasure Hoard",
        category: "magical",
        danger: "setback",
        trigger: "Viewing a dragon's treasure hoard",
        effect: "The glittering gold and gems entrance viewers, compelling them to touch and take treasure.",
        detection: { dc: 15, skill: "Arcana", clue: "Unnaturally bright glitter, compulsion to look" },
        disarm: { dc: 14, skill: "Wisdom", method: "Averting gaze or covering the hoard" },
        damage: "Charmed (moves toward hoard, triggering other traps)",
        save: { type: "Wisdom", dc: 14 },
        countermeasures: ["Blindfolds", "Elves (advantage)", "Calm Emotions"],
        source: "Fizban's Treasury"
    },
    {
        name: "Toxic Spore Cloud",
        category: "magical",
        danger: "dangerous",
        trigger: "Disturbing fungi in a green dragon's lair",
        effect: "Poisonous spores fill a 20-foot radius. The cloud persists and spreads.",
        detection: { dc: 12, skill: "Nature", clue: "Unusual mushrooms, greenish haze, dead animals" },
        disarm: { dc: 14, skill: "Nature", method: "Burning the fungi or using Gust of Wind" },
        damage: "3d10 poison + poisoned condition",
        save: { type: "Constitution", dc: 15 },
        countermeasures: ["Poison immunity", "Wind spells", "Holding breath"],
        source: "Fizban's Treasury"
    },
    {
        name: "Volcanic Vents",
        category: "mechanical",
        danger: "deadly",
        trigger: "Weight on unstable ground in a red dragon's lair",
        effect: "Geysers of magma and superheated gas erupt from fissures in the floor.",
        detection: { dc: 14, skill: "Nature", clue: "Heat shimmer, sulfur smell, discolored stone" },
        disarm: { dc: 18, skill: "Nature", method: "Identifying stable paths or cooling with magic" },
        damage: "8d10 fire",
        save: { type: "Dexterity", dc: 16 },
        countermeasures: ["Fire immunity", "Flying", "Stone shape to seal vents"],
        source: "Fizban's Treasury"
    },
    
    // === LOST MINE OF PHANDELVER ===
    {
        name: "Cragmaw Hideout Snare",
        category: "mechanical",
        danger: "setback",
        trigger: "Stepping into concealed loop on forest path",
        effect: "A snare yanks the creature 10 feet into the air, leaving them dangling.",
        detection: { dc: 12, skill: "Perception", clue: "Disturbed leaves, rope partially visible" },
        disarm: { dc: 10, skill: "Thieves' Tools", method: "Cutting the rope or avoiding the trigger" },
        damage: "None (restrained, hanging)",
        save: { type: "Dexterity", dc: 10 },
        countermeasures: ["Careful movement", "Cutting rope", "AC 5 to escape"],
        source: "Lost Mine of Phandelver"
    },
    {
        name: "Goblin Blind",
        category: "mechanical",
        danger: "setback",
        trigger: "Approaching the Cragmaw Hideout entrance",
        effect: "Goblins release a flood of water from a dammed stream, sweeping away intruders.",
        detection: { dc: 15, skill: "Perception", clue: "Dam visible upstream, wet rocks, goblin signals" },
        disarm: { dc: 14, skill: "Athletics", method: "Bracing against rocks or climbing to safety" },
        damage: "1d6 bludgeoning + prone + 30 feet swept",
        save: { type: "Strength", dc: 10 },
        countermeasures: ["High ground", "Anchoring to rocks", "Destroying dam first"],
        source: "Lost Mine of Phandelver"
    },
    {
        name: "Wave Echo Cave Flameskull",
        category: "magical",
        danger: "dangerous",
        trigger: "Entering the chamber containing the Flameskull",
        effect: "An undead flameskull attacks with Fireball and Fire Ray, reforming after destruction.",
        detection: { dc: 14, skill: "Arcana", clue: "Green flames, cackling, floating skull" },
        disarm: { dc: 16, skill: "Religion", method: "Holy water on remains prevents reformation" },
        damage: "8d6 fire (Fireball)",
        save: { type: "Dexterity", dc: 13 },
        countermeasures: ["Fire resistance", "Dispel Magic", "Holy water after defeat"],
        source: "Lost Mine of Phandelver"
    },
    
    // === HOARD OF THE DRAGON QUEEN / RISE OF TIAMAT ===
    {
        name: "Dragon Hatchery Traps",
        category: "mechanical",
        danger: "dangerous",
        trigger: "Disturbing dragon eggs in the hatchery",
        effect: "Guard drakes attack and kobolds trigger acid splash traps defending the precious eggs.",
        detection: { dc: 13, skill: "Perception", clue: "Tripwires near eggs, hidden kobolds" },
        disarm: { dc: 14, skill: "Thieves' Tools", method: "Carefully avoiding tripwires" },
        damage: "3d10 acid",
        save: { type: "Dexterity", dc: 13 },
        countermeasures: ["Not touching eggs", "Distracting guards", "Acid resistance"],
        source: "Hoard of the Dragon Queen"
    },
    {
        name: "Skyreach Castle Defenses",
        category: "hybrid",
        danger: "deadly",
        trigger: "Infiltrating the flying castle",
        effect: "Ogres throw boulders, cultists man ballistae, and ice formations create difficult terrain.",
        detection: { dc: 12, skill: "Perception", clue: "Guard posts visible, ice sheets, weapon emplacements" },
        disarm: { dc: 15, skill: "Stealth", method: "Avoiding detection or eliminating guards quietly" },
        damage: "4d10 bludgeoning (boulders) or 3d10 piercing (ballistae)",
        save: { type: "Dexterity", dc: 15 },
        countermeasures: ["Stealth approach", "Darkness spell", "Taking out sentries"],
        source: "Hoard of the Dragon Queen"
    },
    {
        name: "Xonthal's Tower Maze",
        category: "magical",
        danger: "dangerous",
        trigger: "Entering the hedge maze surrounding Xonthal's Tower",
        effect: "A magical maze that shifts and changes. Incorrect paths loop back or lead to monster encounters.",
        detection: { dc: 16, skill: "Arcana", clue: "Hedges shift slightly, déjà vu, magical aura" },
        disarm: { dc: 18, skill: "Intelligence", method: "Solving the maze puzzle (sundial directions)" },
        damage: "Varies (maze monsters)",
        save: { type: "Intelligence", dc: 15 },
        countermeasures: ["Marking paths", "Flying over (triggers other defenses)", "Solving sundial puzzle"],
        source: "Rise of Tiamat"
    },
    {
        name: "Well of Dragons Pit Traps",
        category: "mechanical",
        danger: "deadly",
        trigger: "Approaching the Well of Dragons caldera",
        effect: "Concealed pit traps drop intruders into dragon bone-lined pits patrolled by undead.",
        detection: { dc: 16, skill: "Perception", clue: "Disturbed earth, bone fragments, unusual depressions" },
        disarm: { dc: 15, skill: "Thieves' Tools", method: "Mapping and marking the pits" },
        damage: "4d10 bludgeoning + undead attacks",
        save: { type: "Dexterity", dc: 15 },
        countermeasures: ["Probing ground", "Flying", "Turn Undead ready"],
        source: "Rise of Tiamat"
    },
    
    // === PRINCES OF THE APOCALYPSE ===
    {
        name: "Howling Hatred Chasm",
        category: "magical",
        danger: "dangerous",
        trigger: "Crossing a bridge in the Temple of Howling Hatred",
        effect: "Powerful winds attempt to blow creatures off narrow bridges into bottomless chasms.",
        detection: { dc: 12, skill: "Nature", clue: "Constant wind, howling sounds, unstable bridge" },
        disarm: { dc: 15, skill: "Athletics", method: "Roping together or crawling across" },
        damage: "10d6 bludgeoning (falling)",
        save: { type: "Strength", dc: 15 },
        countermeasures: ["Rope anchoring", "Flying", "Freedom of Movement"],
        source: "Princes of the Apocalypse"
    },
    {
        name: "Black Earth Crushing Walls",
        category: "mechanical",
        danger: "deadly",
        trigger: "Pressure plate in the Temple of Black Earth corridor",
        effect: "Stone walls slowly close in, crushing everything in the corridor.",
        detection: { dc: 14, skill: "Perception", clue: "Fresh cracks in walls, pressure plate" },
        disarm: { dc: 16, skill: "Thieves' Tools", method: "Jamming the mechanism or stone shape" },
        damage: "10d10 bludgeoning",
        save: { type: "Strength", dc: 17 },
        countermeasures: ["Gaseous form", "Stone shape", "Bracing with immovable rod"],
        source: "Princes of the Apocalypse"
    },
    {
        name: "Eternal Flame Fire Jets",
        category: "magical",
        danger: "dangerous",
        trigger: "Walking through Temple of Eternal Flame corridors",
        effect: "Jets of fire erupt from the floor at irregular intervals along the passageway.",
        detection: { dc: 13, skill: "Perception", clue: "Scorch marks, heat, small holes in floor" },
        disarm: { dc: 15, skill: "Thieves' Tools", method: "Blocking the vents or timing passage" },
        damage: "4d10 fire",
        save: { type: "Dexterity", dc: 14 },
        countermeasures: ["Fire resistance", "Timing the jets", "Create Water"],
        source: "Princes of the Apocalypse"
    },
    {
        name: "Crushing Wave Flood",
        category: "mechanical",
        danger: "deadly",
        trigger: "Alarm in Temple of the Crushing Wave",
        effect: "Cultists open sluice gates, flooding chambers with crushing water and aquatic monsters.",
        detection: { dc: 14, skill: "Perception", clue: "Water stains at various heights, gate mechanisms" },
        disarm: { dc: 16, skill: "Athletics", method: "Jamming gates or destroying mechanisms" },
        damage: "4d10 bludgeoning + drowning + monster attacks",
        save: { type: "Strength", dc: 15 },
        countermeasures: ["Water breathing", "Swimming proficiency", "Blocking gates"],
        source: "Princes of the Apocalypse"
    },
    
    // === OUT OF THE ABYSS ===
    {
        name: "Drow Poison Gas Trap",
        category: "mechanical",
        danger: "dangerous",
        trigger: "Opening a trapped chest or door in Velkynvelve",
        effect: "Drow sleeping poison gas fills the area, rendering creatures unconscious.",
        detection: { dc: 14, skill: "Investigation", clue: "Tiny vents, slight discoloration" },
        disarm: { dc: 15, skill: "Thieves' Tools", method: "Plugging the vents or triggering from distance" },
        damage: "Unconscious for 1 hour (fail) or 1 minute (success)",
        save: { type: "Constitution", dc: 13 },
        countermeasures: ["Poison immunity", "Holding breath", "Elf resistance"],
        source: "Out of the Abyss"
    },
    {
        name: "Faerzress Zone",
        category: "magical",
        danger: "setback",
        trigger: "Entering an area of faerzress radiation in the Underdark",
        effect: "Wild magic surges, teleportation fails, and divination magic goes haywire.",
        detection: { dc: 10, skill: "Arcana", clue: "Glowing fungi, tingling sensation, magic feels 'wrong'" },
        disarm: { dc: 20, skill: "Arcana", method: "Cannot be disabled - must be navigated carefully" },
        damage: "Wild magic surge effects (varies)",
        save: { type: "Varies", dc: 15 },
        countermeasures: ["Avoiding spellcasting", "Moving quickly through", "Wild Magic sorcerer benefits"],
        source: "Out of the Abyss"
    },
    {
        name: "Ooze Pit",
        category: "mechanical",
        danger: "dangerous",
        trigger: "Falling into a pit in Juiblex's domain",
        effect: "Pit contains acid and oozes that attack and dissolve creatures.",
        detection: { dc: 13, skill: "Perception", clue: "Glistening surface, dissolved remains, chemical smell" },
        disarm: { dc: 15, skill: "Survival", method: "Identifying and avoiding the pit" },
        damage: "2d10 acid + ooze attacks",
        save: { type: "Dexterity", dc: 14 },
        countermeasures: ["Acid resistance", "Flying", "Killing oozes from range"],
        source: "Out of the Abyss"
    },
    {
        name: "Demonic Madness Zone",
        category: "magical",
        danger: "dangerous",
        trigger: "Extended exposure to demon lord influence",
        effect: "Creatures must save against madness effects tied to nearby demon lords.",
        detection: { dc: 14, skill: "Arcana", clue: "Unsettling whispers, hallucinations begin" },
        disarm: { dc: 16, skill: "Religion", method: "Protection from Evil or leaving the area" },
        damage: "Short or long-term madness",
        save: { type: "Wisdom", dc: 15 },
        countermeasures: ["Protection from Evil", "Calm Emotions", "Quick transit"],
        source: "Out of the Abyss"
    },
    
    // === STORM KING'S THUNDER ===
    {
        name: "Giant Boulder Trap",
        category: "mechanical",
        danger: "deadly",
        trigger: "Trip wire or pressure plate in giant lair",
        effect: "A massive boulder rolls through the corridor, sized for giants.",
        detection: { dc: 14, skill: "Perception", clue: "Giant-sized mechanisms, boulder slot above" },
        disarm: { dc: 17, skill: "Thieves' Tools", method: "Giant-sized tools needed or magic" },
        damage: "12d10 bludgeoning",
        save: { type: "Dexterity", dc: 17 },
        countermeasures: ["Small size (easier to dodge)", "Flying", "Side passages"],
        source: "Storm King's Thunder"
    },
    {
        name: "Frost Giant Ice Slick",
        category: "mechanical",
        danger: "setback",
        trigger: "Walking through frost giant fortress",
        effect: "Floors are intentionally iced over. Small creatures have extreme difficulty with movement.",
        detection: { dc: 10, skill: "Perception", clue: "Obvious ice, giants walking normally" },
        disarm: { dc: 14, skill: "Nature", method: "Melting ice or using climbing gear" },
        damage: "Falls prone, difficult terrain",
        save: { type: "Dexterity", dc: 12 },
        countermeasures: ["Ice spikes on boots", "Fire magic", "Spider Climb"],
        source: "Storm King's Thunder"
    },
    {
        name: "Fire Giant Forge Hazard",
        category: "mechanical",
        danger: "dangerous",
        trigger: "Moving through Ironslag's forge areas",
        effect: "Extreme heat, molten metal, and active forges create environmental hazards.",
        detection: { dc: 10, skill: "Perception", clue: "Obvious forge equipment, extreme heat" },
        disarm: { dc: 15, skill: "Athletics", method: "Careful navigation or fire resistance" },
        damage: "4d10 fire (contact with molten metal)",
        save: { type: "Constitution", dc: 15 },
        countermeasures: ["Fire resistance", "Cold magic", "Avoiding forge areas"],
        source: "Storm King's Thunder"
    },
    {
        name: "Cloud Giant Illusion Maze",
        category: "magical",
        danger: "setback",
        trigger: "Entering cloud giant castle without permission",
        effect: "Illusory walls and floors confuse intruders. Some 'floors' are actually open air.",
        detection: { dc: 15, skill: "Investigation", clue: "Walls don't feel solid, inconsistent shadows" },
        disarm: { dc: 14, skill: "Arcana", method: "True Seeing or physical testing" },
        damage: "10d6 falling (through illusory floor)",
        save: { type: "Intelligence", dc: 14 },
        countermeasures: ["True Seeing", "Probing with pole", "Slow movement"],
        source: "Storm King's Thunder"
    },
    
    // === DUNGEON OF THE MAD MAGE - UNDERMOUNTAIN ===
    {
        name: "Halaster's Teleport Trap",
        category: "magical",
        danger: "setback",
        trigger: "Stepping on hidden teleportation circles throughout Undermountain",
        effect: "Creatures are teleported to random locations, often separating the party.",
        detection: { dc: 17, skill: "Arcana", clue: "Faint magical residue, arcane symbols" },
        disarm: { dc: 18, skill: "Arcana", method: "Dispel Magic or avoiding the circles" },
        damage: "None (teleportation, possible separation)",
        save: { type: "Charisma", dc: 17 },
        countermeasures: ["Detect Magic", "Dispel Magic", "Rope tethering"],
        source: "Dungeon of the Mad Mage"
    },
    {
        name: "Undermountain Pit Trap",
        category: "mechanical",
        danger: "dangerous",
        trigger: "Weight on false floor sections",
        effect: "Pit opens to lower dungeon levels, often filled with spikes or monsters.",
        detection: { dc: 15, skill: "Perception", clue: "Slightly different floor color, hollow sound" },
        disarm: { dc: 14, skill: "Thieves' Tools", method: "Jamming the mechanism" },
        damage: "4d10 bludgeoning + 2d10 piercing (spikes)",
        save: { type: "Dexterity", dc: 14 },
        countermeasures: ["Probing floor", "Flying", "Feather Fall"],
        source: "Dungeon of the Mad Mage"
    },
    {
        name: "Mirror Gate Trap",
        category: "magical",
        danger: "dangerous",
        trigger: "Approaching certain mirrors in Undermountain",
        effect: "Mirror creates hostile duplicates of creatures that step before it.",
        detection: { dc: 16, skill: "Arcana", clue: "Reflection moves independently, cold emanation" },
        disarm: { dc: 17, skill: "Arcana", method: "Breaking the mirror or Dispel Magic" },
        damage: "Duplicate attacks (uses victim's statistics)",
        save: { type: "Charisma", dc: 15 },
        countermeasures: ["Avoiding mirrors", "Approaching covered", "Breaking from distance"],
        source: "Dungeon of the Mad Mage"
    },
    {
        name: "Dweomercore Magic Feedback",
        category: "magical",
        danger: "dangerous",
        trigger: "Casting spells in the Dweomercore academy level",
        effect: "Unstable magic causes spells to backfire or have unintended effects.",
        detection: { dc: 14, skill: "Arcana", clue: "Sparks in air, static feeling, failed cantrips" },
        disarm: { dc: 18, skill: "Arcana", method: "Stabilizing the area's magic (complex ritual)" },
        damage: "Spell reflects back or wild magic surge",
        save: { type: "Intelligence", dc: 15 },
        countermeasures: ["Non-magical solutions", "Careful casting", "Wild Magic expertise"],
        source: "Dungeon of the Mad Mage"
    },
    {
        name: "Trobriand's Mechanical Guardian",
        category: "mechanical",
        danger: "deadly",
        trigger: "Entering Trobriand's Graveyard (Level 13)",
        effect: "Animated constructs and mechanical traps activate throughout the level.",
        detection: { dc: 15, skill: "Investigation", clue: "Mechanical sounds, construct parts, oil stains" },
        disarm: { dc: 18, skill: "Thieves' Tools", method: "Disabling individual constructs" },
        damage: "6d10 (construct attacks vary)",
        save: { type: "Dexterity", dc: 16 },
        countermeasures: ["Lightning damage", "Dispel Magic on constructs", "Stealth"],
        source: "Dungeon of the Mad Mage"
    },
    {
        name: "Shadowdusk Hold Soul Trap",
        category: "magical",
        danger: "deadly",
        trigger: "Death in certain areas of Level 22",
        effect: "Souls of the dead are trapped and cannot be resurrected by normal means.",
        detection: { dc: 18, skill: "Religion", clue: "Oppressive feeling, spirits visible, dark altar" },
        disarm: { dc: 20, skill: "Religion", method: "Destroying the soul-trapping focus" },
        damage: "Prevents resurrection",
        save: { type: "Charisma", dc: 18 },
        countermeasures: ["Wish spell", "Destroying focus first", "Not dying"],
        source: "Dungeon of the Mad Mage"
    },
    
    // === GHOSTS OF SALTMARSH ===
    {
        name: "Haunted House Rot Grub Nest",
        category: "mechanical",
        danger: "dangerous",
        trigger: "Disturbing debris in the haunted house",
        effect: "Rot grubs swarm, burrowing into exposed flesh.",
        detection: { dc: 12, skill: "Perception", clue: "Squirming in debris, small holes in wood" },
        disarm: { dc: 14, skill: "Medicine", method: "Fire or applying flame to kill grubs" },
        damage: "1d6 piercing per grub + burrowing (death in minutes)",
        save: { type: "Constitution", dc: 10 },
        countermeasures: ["Fire immediately", "Heavy clothing", "Avoiding debris piles"],
        source: "Ghosts of Saltmarsh"
    },
    {
        name: "Smuggler's Cave Tripwire Alarm",
        category: "mechanical",
        danger: "setback",
        trigger: "Trip wire near smuggler hideout entrances",
        effect: "Bells ring alerting smugglers. Reinforcements arrive in 1d4 rounds.",
        detection: { dc: 13, skill: "Perception", clue: "Thin wire at ankle height, bells visible" },
        disarm: { dc: 11, skill: "Thieves' Tools", method: "Cutting the wire carefully" },
        damage: "None (alerts enemies)",
        save: { type: "Dexterity", dc: 12 },
        countermeasures: ["Stepping over", "Silencing bells", "Fast assault"],
        source: "Ghosts of Saltmarsh"
    },
    {
        name: "Salvage Operation Pressure Trap",
        category: "mechanical",
        danger: "dangerous",
        trigger: "Opening certain containers in the sunken ship",
        effect: "Water pressure causes containers to explode, sending debris everywhere.",
        detection: { dc: 14, skill: "Investigation", clue: "Swollen containers, pressure build-up visible" },
        disarm: { dc: 13, skill: "Thieves' Tools", method: "Slowly releasing pressure first" },
        damage: "3d10 bludgeoning",
        save: { type: "Dexterity", dc: 13 },
        countermeasures: ["Opening from distance", "Reinforced diving gear", "Shield"],
        source: "Ghosts of Saltmarsh"
    },
    
    // === BALDUR'S GATE: DESCENT INTO AVERNUS ===
    {
        name: "Dungeon of the Dead Three - Corpse Pit",
        category: "mechanical",
        danger: "dangerous",
        trigger: "Walking on concealed pit in the cultist dungeon",
        effect: "Pit filled with animated corpses that grapple and bite fallen creatures.",
        detection: { dc: 14, skill: "Perception", clue: "Smell of rot, slightly sunken floor" },
        disarm: { dc: 13, skill: "Thieves' Tools", method: "Jamming pit cover or killing corpses" },
        damage: "2d10 bludgeoning + zombie attacks",
        save: { type: "Dexterity", dc: 13 },
        countermeasures: ["Testing floor", "Turn Undead ready", "Flying"],
        source: "Descent into Avernus"
    },
    {
        name: "Infernal Warmachine Pursuit",
        category: "mechanical",
        danger: "deadly",
        trigger: "Traveling across Avernus without a vehicle",
        effect: "Demonic warmachines pursue and attack on sight. Must outrun or fight.",
        detection: { dc: 12, skill: "Perception", clue: "Engine sounds, dust clouds, infernal horns" },
        disarm: { dc: 18, skill: "Vehicles", method: "Outrunning or destroying the vehicles" },
        damage: "8d10 bludgeoning (ramming) + weapons",
        save: { type: "Dexterity", dc: 16 },
        countermeasures: ["Own warmachine", "Flying", "Hiding in terrain"],
        source: "Descent into Avernus"
    },
    {
        name: "Soul Coin Temptation",
        category: "magical",
        danger: "setback",
        trigger: "Finding and handling soul coins",
        effect: "Soul coins tempt users to spend them, each use damning the trapped soul forever.",
        detection: { dc: 12, skill: "Religion", clue: "Faint screaming from coin, evil aura" },
        disarm: { dc: 15, skill: "Religion", method: "Freeing the soul requires destroying the coin" },
        damage: "Moral damage (using coins has story consequences)",
        save: { type: "Wisdom", dc: 13 },
        countermeasures: ["Not using coins", "Freeing souls", "Protection from Evil"],
        source: "Descent into Avernus"
    },
    
    // === ICEWIND DALE: RIME OF THE FROSTMAIDEN ===
    {
        name: "Blizzard Hazard",
        category: "mechanical",
        danger: "dangerous",
        trigger: "Traveling during Auril's eternal winter storms",
        effect: "Extreme cold, visibility reduced to zero, Constitution saves or exhaustion.",
        detection: { dc: 10, skill: "Survival", clue: "Darkening sky, dropping temperature, wind increase" },
        disarm: { dc: 15, skill: "Survival", method: "Finding shelter or magical protection" },
        damage: "Cold damage + exhaustion levels",
        save: { type: "Constitution", dc: 15 },
        countermeasures: ["Cold resistance", "Shelter", "Tiny Hut"],
        source: "Rime of the Frostmaiden"
    },
    {
        name: "Chardalyn Corruption",
        category: "magical",
        danger: "deadly",
        trigger: "Prolonged contact with chardalyn crystal",
        effect: "The corrupted crystal slowly drives creatures mad, eventually turning them evil.",
        detection: { dc: 14, skill: "Arcana", clue: "Black crystal, unsettling whispers, cold touch" },
        disarm: { dc: 16, skill: "Religion", method: "Destroying or purifying the chardalyn" },
        damage: "Madness + alignment shift over time",
        save: { type: "Wisdom", dc: 14 },
        countermeasures: ["Limited exposure", "Protection from Evil", "Disposing quickly"],
        source: "Rime of the Frostmaiden"
    },
    {
        name: "Ythryn Mythallar Defenses",
        category: "magical",
        danger: "deadly",
        trigger: "Approaching the Netherese mythallar without proper approach",
        effect: "Powerful magical defenses activate, including force fields and disintegration rays.",
        detection: { dc: 17, skill: "Arcana", clue: "Glowing wards, floating symbols, magical tension" },
        disarm: { dc: 20, skill: "Arcana", method: "Solving the Netherese access puzzle" },
        damage: "10d10 force (disintegration)",
        save: { type: "Dexterity", dc: 18 },
        countermeasures: ["Proper access keys", "Dispel Magic (high level)", "Puzzle solution"],
        source: "Rime of the Frostmaiden"
    },
    {
        name: "Auril's Test of Cruelty",
        category: "magical",
        danger: "dangerous",
        trigger: "Entering Grimskalle fortress",
        effect: "Must make a cruel choice to pass - abandon a companion, sacrifice warmth, etc.",
        detection: { dc: 15, skill: "Religion", clue: "Auril's symbols, ice forming words" },
        disarm: { dc: 16, skill: "Deception", method: "Tricking the test or finding alternate path" },
        damage: "Varies (test-dependent)",
        save: { type: "Wisdom", dc: 15 },
        countermeasures: ["Clever deception", "Accepting consequences", "Finding loopholes"],
        source: "Rime of the Frostmaiden"
    },
    
    // === THE WILD BEYOND THE WITCHLIGHT ===
    {
        name: "Carnival Dragonfly Ride Malfunction",
        category: "mechanical",
        danger: "setback",
        trigger: "Riding the giant dragonfly carousel during bad carnival mood",
        effect: "The ride spins out of control, flinging riders in random directions.",
        detection: { dc: 12, skill: "Insight", clue: "Carnival staff seem nervous, ride creaks" },
        disarm: { dc: 13, skill: "Athletics", method: "Holding on tight or jumping off safely" },
        damage: "2d6 bludgeoning",
        save: { type: "Strength", dc: 12 },
        countermeasures: ["Checking carnival mood", "Not riding", "Feather Fall"],
        source: "Wild Beyond the Witchlight"
    },
    {
        name: "Hag's Bargain Trap",
        category: "magical",
        danger: "dangerous",
        trigger: "Making a deal with any member of the Hourglass Coven",
        effect: "Fey contracts have hidden clauses that trap the unwary in terrible obligations.",
        detection: { dc: 16, skill: "Insight", clue: "Overly generous offers, careful wording" },
        disarm: { dc: 18, skill: "Persuasion", method: "Negotiating carefully or finding loopholes" },
        damage: "Loss of memories, emotions, or other intangibles",
        save: { type: "Wisdom", dc: 16 },
        countermeasures: ["Refusing deals", "Careful contract review", "Zone of Truth"],
        source: "Wild Beyond the Witchlight"
    },
    {
        name: "Prismeer Time Distortion",
        category: "magical",
        danger: "setback",
        trigger: "Traveling between Prismeer's splinter realms",
        effect: "Time passes differently in each realm. Hours might be days or vice versa.",
        detection: { dc: 14, skill: "Arcana", clue: "Sun moves strangely, clocks disagree" },
        disarm: { dc: 15, skill: "Arcana", method: "Understanding the time flow patterns" },
        damage: "Lost time (story consequences)",
        save: { type: "Wisdom", dc: 13 },
        countermeasures: ["Tracking time carefully", "Urgent return planning", "Hag guidance"],
        source: "Wild Beyond the Witchlight"
    },
    
    // === CANDLEKEEP MYSTERIES ===
    {
        name: "Extradimensional Space Navigation",
        category: "magical",
        danger: "setback",
        trigger: "Exploring the mansion in 'Joy of Extradimensional Spaces'",
        effect: "Rooms shift and rearrange. Doors lead to unexpected locations.",
        detection: { dc: 14, skill: "Arcana", clue: "Doors change destination, rooms feel wrong" },
        disarm: { dc: 15, skill: "Investigation", method: "Understanding the organizational system" },
        damage: "None (lost time, possible separation)",
        save: { type: "Intelligence", dc: 13 },
        countermeasures: ["Mapping carefully", "Following the system", "Rope tethering"],
        source: "Candlekeep Mysteries"
    },
    {
        name: "Shemshime's Rhyme Curse",
        category: "magical",
        danger: "dangerous",
        trigger: "Hearing or reading Shemshime's bedtime rhyme",
        effect: "Compelled to repeat the rhyme. Spreads virally. Eventually fatal if not stopped.",
        detection: { dc: 12, skill: "Arcana", clue: "People humming the same tune, glazed eyes" },
        disarm: { dc: 16, skill: "Religion", method: "Destroying the source or exorcism" },
        damage: "Exhaustion levels + compulsion",
        save: { type: "Wisdom", dc: 14 },
        countermeasures: ["Silence spell", "Deafening", "Quick exorcism"],
        source: "Candlekeep Mysteries"
    },
    {
        name: "Book Mimic",
        category: "mechanical",
        danger: "dangerous",
        trigger: "Picking up or reading a disguised mimic in Candlekeep",
        effect: "The 'book' is actually a mimic that attacks and adheres to victims.",
        detection: { dc: 15, skill: "Investigation", clue: "Book feels slightly warm, pages sticky" },
        disarm: { dc: 14, skill: "Perception", method: "Identifying before touching" },
        damage: "4d8 bludgeoning + grappled",
        save: { type: "Strength", dc: 13 },
        countermeasures: ["Detect Magic (no aura on fake books)", "Mage Hand", "Attacking first"],
        source: "Candlekeep Mysteries"
    },
    {
        name: "Canopic Being Awakening",
        category: "magical",
        danger: "deadly",
        trigger: "Disturbing certain preserved organs in 'The Canopic Being'",
        effect: "An ancient evil awakens, possessing nearby creatures through preserved organs.",
        detection: { dc: 16, skill: "Religion", clue: "Canopic jars radiate evil, mummified organs" },
        disarm: { dc: 18, skill: "Religion", method: "Proper burial rites or destruction" },
        damage: "Possession + 6d10 necrotic",
        save: { type: "Charisma", dc: 16 },
        countermeasures: ["Protection from Evil", "Not disturbing jars", "Dispel Evil"],
        source: "Candlekeep Mysteries"
    },
    
    // === JOURNEYS THROUGH THE RADIANT CITADEL ===
    {
        name: "Hollow Mine Gas Pocket",
        category: "mechanical",
        danger: "dangerous",
        trigger: "Striking stone in the Fiend-haunted mine",
        effect: "Pockets of poisonous gas release, filling the mine tunnels.",
        detection: { dc: 13, skill: "Nature", clue: "Discolored rock, dead vermin, chemical smell" },
        disarm: { dc: 14, skill: "Nature", method: "Ventilating the area or avoiding strikes" },
        damage: "4d10 poison + poisoned condition",
        save: { type: "Constitution", dc: 14 },
        countermeasures: ["Poison immunity", "Gust of Wind", "Careful mining"],
        source: "Journeys through Radiant Citadel"
    },
    {
        name: "Night Market Pickpocket Swarm",
        category: "mechanical",
        danger: "setback",
        trigger: "Walking through crowded night market",
        effect: "Skilled pickpockets work in teams, distracting while stealing valuables.",
        detection: { dc: 14, skill: "Perception", clue: "Bumping strangers, intentional distraction" },
        disarm: { dc: 13, skill: "Insight", method: "Keeping hands on valuables, catching thieves" },
        damage: "Loss of gold and small items",
        save: { type: "Wisdom", dc: 13 },
        countermeasures: ["Secured pouches", "Awareness", "Alarm spell on valuables"],
        source: "Journeys through Radiant Citadel"
    },
    {
        name: "Cursed Dynasty Tomb Guardian",
        category: "magical",
        danger: "deadly",
        trigger: "Entering the Buried Dynasty tombs without proper offerings",
        effect: "Ancestor spirits rise to defend the tombs, attacking intruders mercilessly.",
        detection: { dc: 15, skill: "Religion", clue: "Offering bowls, ancestor shrines, spiritual pressure" },
        disarm: { dc: 16, skill: "Religion", method: "Proper offerings or ancestor appeasement" },
        damage: "6d10 necrotic + frightened",
        save: { type: "Charisma", dc: 15 },
        countermeasures: ["Proper respect", "Offerings", "Speaking to ancestors"],
        source: "Journeys through Radiant Citadel"
    },
    
    // === TALES FROM THE YAWNING PORTAL - SUNLESS CITADEL ===
    {
        name: "Kobold Caltrops",
        category: "mechanical",
        danger: "setback",
        trigger: "Walking through kobold-defended corridors",
        effect: "Scattered caltrops slow movement and cause bleeding wounds.",
        detection: { dc: 12, skill: "Perception", clue: "Glinting metal on floor, kobold laughter" },
        disarm: { dc: 10, skill: "Survival", method: "Sweeping clear or careful stepping" },
        damage: "1d4 piercing + speed reduced",
        save: { type: "Dexterity", dc: 10 },
        countermeasures: ["Thick boots", "Flying", "Clearing path"],
        source: "Sunless Citadel"
    },
    {
        name: "Gulthias Tree Corruption",
        category: "magical",
        danger: "dangerous",
        trigger: "Proximity to the Gulthias Tree",
        effect: "The evil tree's influence spreads corruption, creating blights and influencing minds.",
        detection: { dc: 14, skill: "Nature", clue: "Twisted plants, unnatural growth, evil aura" },
        disarm: { dc: 16, skill: "Religion", method: "Destroying the tree with fire or radiant damage" },
        damage: "Corruption over time + blight attacks",
        save: { type: "Wisdom", dc: 14 },
        countermeasures: ["Fire damage to tree", "Avoiding area", "Protection from Evil"],
        source: "Sunless Citadel"
    },
    
    // === TALES FROM THE YAWNING PORTAL - FORGE OF FURY ===
    {
        name: "Orc Arrow Slits",
        category: "mechanical",
        danger: "dangerous",
        trigger: "Entering corridors covered by arrow slits",
        effect: "Orcs fire arrows through murder holes with three-quarters cover.",
        detection: { dc: 12, skill: "Perception", clue: "Narrow slits in walls, movement behind" },
        disarm: { dc: 14, skill: "Stealth", method: "Eliminating archers or using smoke" },
        damage: "1d8+2 piercing per archer per round",
        save: { type: "None", dc: 0 },
        countermeasures: ["Smoke", "Shield", "Rushing through", "Counterspells"],
        source: "Forge of Fury"
    },
    {
        name: "Dwarven Roper Colony",
        category: "mechanical",
        danger: "deadly",
        trigger: "Entering the underground lake cavern",
        effect: "Ropers disguised as stalagmites attack with tentacles, pulling victims to their maws.",
        detection: { dc: 15, skill: "Nature", clue: "Too many stalagmites, slight movement" },
        disarm: { dc: 16, skill: "Nature", method: "Identifying and avoiding or killing from range" },
        damage: "4d8 bludgeoning + 2d6 piercing (bite)",
        save: { type: "Strength", dc: 15 },
        countermeasures: ["Ranged attacks", "Flight", "Careful identification"],
        source: "Forge of Fury"
    },
    
    // === TALES FROM THE YAWNING PORTAL - DEAD IN THAY ===
    {
        name: "Doomvault Glyph of Warding",
        category: "magical",
        danger: "dangerous",
        trigger: "Opening doors or containers without proper authorization",
        effect: "Explosive or spell-storing glyphs activate throughout the Doomvault.",
        detection: { dc: 15, skill: "Arcana", clue: "Arcane symbols, magical aura on surfaces" },
        disarm: { dc: 16, skill: "Arcana", method: "Dispel Magic or finding glyph keys" },
        damage: "5d8 (varies by glyph type)",
        save: { type: "Dexterity", dc: 15 },
        countermeasures: ["Dispel Magic", "Finding keys", "Triggering from distance"],
        source: "Dead in Thay"
    },
    {
        name: "Black Gate Transport",
        category: "magical",
        danger: "setback",
        trigger: "Using Black Gates to move between Doomvault sectors",
        effect: "Gates may malfunction, sending travelers to wrong sectors or alerting Thayans.",
        detection: { dc: 14, skill: "Arcana", clue: "Gate color seems wrong, arcane fluctuations" },
        disarm: { dc: 15, skill: "Arcana", method: "Stabilizing the gate before use" },
        damage: "None (misdirection + potential combat)",
        save: { type: "Intelligence", dc: 14 },
        countermeasures: ["Gate keys", "Careful timing", "Backup plans"],
        source: "Dead in Thay"
    },
    {
        name: "Phylactery Vault Defenses",
        category: "magical",
        danger: "deadly",
        trigger: "Approaching the phylactery vault without proper access",
        effect: "The most powerful defenses protect the Red Wizards' phylacteries - undead, magic, and traps.",
        detection: { dc: 18, skill: "Arcana", clue: "Overwhelming magical aura, spectral guardians" },
        disarm: { dc: 20, skill: "Arcana", method: "Complex ritual or overwhelming force" },
        damage: "10d10 (varies)",
        save: { type: "Various", dc: 18 },
        countermeasures: ["Proper access codes", "Stealth infiltration", "Massive assault"],
        source: "Dead in Thay"
    },
    
    // === TALES FROM THE YAWNING PORTAL - AGAINST THE GIANTS ===
    {
        name: "Steading Giant Patrols",
        category: "mechanical",
        danger: "dangerous",
        trigger: "Moving through the Steading of the Hill Giant Chief",
        effect: "Regular giant patrols spot intruders, raising alarms and calling reinforcements.",
        detection: { dc: 12, skill: "Perception", clue: "Heavy footsteps, deep voices, torch light" },
        disarm: { dc: 15, skill: "Stealth", method: "Timing movement between patrols or elimination" },
        damage: "Giant attacks (3d10+ bludgeoning)",
        save: { type: "Initiative", dc: 0 },
        countermeasures: ["Stealth", "Invisibility", "Disguise", "Timing"],
        source: "Against the Giants"
    },
    {
        name: "Drow Ambush Points",
        category: "mechanical",
        danger: "deadly",
        trigger: "Entering certain areas of the glacial rift or halls",
        effect: "Drow advisors have prepared ambush positions with poison and darkness.",
        detection: { dc: 16, skill: "Perception", clue: "Spider webs, faint poison smell, shadows move" },
        disarm: { dc: 15, skill: "Survival", method: "Detecting and avoiding or springing deliberately" },
        damage: "Poison weapons + sneak attack damage",
        save: { type: "Constitution", dc: 15 },
        countermeasures: ["Darkvision", "Poison resistance", "Faerie Fire"],
        source: "Against the Giants"
    }
];

// ============================================
// PUZZLE DATA - Complete Collection
// ============================================

const puzzleDifficulty = {
    easy: { name: "Easy", description: "Can be solved through persistence. Clues are obvious.", perplexityMod: 0 },
    medium: { name: "Medium", description: "Requires creativity and investigation. Hidden patterns.", perplexityMod: 2 },
    hard: { name: "Hard", description: "Careful analysis and multiple considerations. May involve math.", perplexityMod: 4 }
};

const puzzleCategories = {
    riddle: {
        name: "Riddle",
        description: "Word-based puzzles requiring clever thinking and wordplay.",
        icon: "fa-question"
    },
    logic: {
        name: "Logic Puzzle",
        description: "Puzzles requiring deduction and logical reasoning.",
        icon: "fa-brain"
    },
    physical: {
        name: "Physical Puzzle",
        description: "Puzzles involving physical manipulation of objects.",
        icon: "fa-hand"
    },
    pattern: {
        name: "Pattern Recognition",
        description: "Puzzles requiring identification of sequences or patterns.",
        icon: "fa-shapes"
    },
    cipher: {
        name: "Cipher/Code",
        description: "Puzzles involving encoded messages or secret writing.",
        icon: "fa-key"
    },
    mechanical: {
        name: "Mechanical Puzzle",
        description: "Puzzles involving locks, gears, or mechanical devices.",
        icon: "fa-gears"
    }
};

// ============================================
// PUZZLE TEMPLATES - Complete from All Sources
// ============================================

const puzzleTemplates = [
    // === PUZZLES, PREDICAMENTS & PERPLEXITIES I ===
    {
        name: "Colors and Clatter",
        category: "logic",
        difficulty: "medium",
        description: "Five levers with colored handles must be pulled in the correct order based on clues from a poem.",
        setup: "A room with five levers (Black, Yellow, Blue, Green, Red) and a locked door. A burnt note reads:\n'The second lever will sound like a roar\nA primary first helps open the door\nThe last lever pulled is the color of sky\nAfter the second will buzz like a fly.'",
        solution: "1st - Red (only remaining primary), 2nd - Black (roar sound), 3rd - Yellow (buzz sound, 'after second'), 4th - Green (only remaining), 5th - Blue (color of sky)",
        hints: [
            "Take notes on which color makes what sound when pulled.",
            "'Primary' refers to primary colors: red, blue, and yellow.",
            "'After second' means third position. Process of elimination helps."
        ],
        reward: "The door unlocks when levers are pulled in correct order.",
        consequence: "Wrong order triggers a trap and resets the levers.",
        source: "Puzzles, Predicaments I"
    },
    {
        name: "Under Pressure",
        category: "physical",
        difficulty: "medium",
        description: "A pressure plate requires the combined weight of the entire party to fully open a door.",
        setup: "A 20x20 foot room with a diamond-shaped pressure plate. A door on the opposite end opens proportionally to weight on the plate. When all party members stand on it, it opens fully, but closes when anyone steps off.",
        solution: "Find heavy objects from the environment (boulders, statues, broken columns) to place on the plate as counterweight. Alternatively, use teleportation spells, gaseous form, or wild shape to slip through partially opened door.",
        hints: [
            "A character could transform into a mouse and slip under the partially opened door.",
            "Heavy objects from earlier areas could be used as counterweights.",
            "Teleportation spells like misty step could bypass the mechanism."
        ],
        reward: "A lever on the other side keeps the door open permanently.",
        consequence: "DC 33 Athletics/Acrobatics to race through before it closes. Failure: 1d6 bludgeoning.",
        source: "Puzzles, Predicaments I"
    },
    {
        name: "The Triangle Lock",
        category: "logic",
        difficulty: "hard",
        description: "A door with 120 keyholes arranged in a triangle. Two keys must be used in the correct four holes.",
        setup: "A steel door with keyholes in 15 rows (1 hole in first row, 15 in the last). Two brass keys with engravings: 'Five from the right with three in between' and 'Five from the left with three in between.' Four clamps hold the door closed.",
        solution: "Row 5: Keys in positions 1 and 5 (three empty between). Row 13: Keys in positions 5 and 9 (three empty between). Each correct turn releases one clamp.",
        hints: [
            "The 'three in between' appears on both keys - they should be three holes apart on the same row.",
            "Wrong keyholes cause a secondary door to close behind the main door.",
            "Look for scratches around keyholes indicating frequent use."
        ],
        reward: "All four clamps release and the door opens.",
        consequence: "Each wrong turn closes a backup door by 2 feet (5 wrong turns seals it).",
        raiseStakes: "Walls begin closing when first incorrect key is turned. 10 feet/round, 4 rounds until crush.",
        source: "Puzzles, Predicaments I"
    },
    {
        name: "Red Light, Green Light",
        category: "pattern",
        difficulty: "medium",
        description: "A grid of symbol buttons must be pressed in correct sequence. Red gems indicate wrong, green indicate right.",
        setup: "A locked door with a 4x4 grid of runic buttons. Above the door: 4 green gems and 3 red gems. Pressing correct buttons lights green gems in sequence order. Wrong buttons light red gems.",
        solution: "Buttons tell a story when decoded (e.g., Elder Runes telling the story of a weapon: Earth → Fire → Water → War). Pressing all correct buttons in order opens the door.",
        hints: [
            "The symbols can be deciphered with DC 12 Arcana or History.",
            "Trial and error reveals which buttons light which color gems.",
            "The correct buttons form a logical sequence or story."
        ],
        reward: "Door opens for 6 hours when all green gems light in order.",
        consequence: "All three red gems lit triggers a trap.",
        source: "Puzzles, Predicaments I"
    },
    {
        name: "Sand Sculptures",
        category: "cipher",
        difficulty: "medium",
        description: "Carved runes must be drawn in sand using their mirror reflection.",
        setup: "Four pedestals: 1) Bowl of white sand, 2) Broken quill, 3) Carved runes with a line beneath, 4) Polished sword blade (mirror). A locked door with no visible mechanism.",
        solution: "Place the sword blade on the line under the runes. View the reflection from the opposite side. Draw the reflected symbols in the sand with the quill to open the door.",
        hints: [
            "The line beneath the runes is the same length as the sword blade.",
            "The blade's surface is as reflective as a mirror.",
            "A cool breeze resets the sand if drawn incorrectly."
        ],
        reward: "Door slides open when correct pattern is drawn.",
        consequence: "Incorrect pattern causes breeze to reset sand.",
        source: "Puzzles, Predicaments I"
    },
    {
        name: "Mirror, Mirror",
        category: "physical",
        difficulty: "hard",
        description: "Items visible only in a mirror's reflection must be placed in the real room to match.",
        setup: "A room with furniture, fireplace, and large mirror. The reflection shows extra items not in the real room (candle, vial, shield, wand, and a sought-after key on the mantel). Real room has none of these.",
        solution: "Gather the items shown in the reflection from elsewhere. Place each in the exact position as seen in the mirror. When all overlap perfectly with their reflections, the key materializes in the real room.",
        hints: [
            "Try to recreate the reflected scene in the actual room.",
            "Items glow briefly when placed in the correct position.",
            "Items may need to be found in other locations first."
        ],
        reward: "The sought item appears on the mantel when puzzle is solved.",
        consequence: "No direct consequence, but requires gathering items from other locations.",
        source: "Puzzles, Predicaments I"
    },
    {
        name: "A List In Chains",
        category: "pattern",
        difficulty: "medium",
        description: "Six chains with sun symbols must be pulled in the correct sequence to create a bridge across a chasm.",
        setup: "A 70-foot chasm with suspended platforms above. Six chains hang nearby, each with a medallion showing the sun in different positions (rising, noon, setting, gone, etc.).",
        solution: "Pull chains in order of the sun's daily journey: Rising in east (quarter sun right) → Noon (full sun above horizon) → Setting in west (quarter sun left) → Gone (no sun visible).",
        hints: [
            "DC 12 History or Survival identifies the symbols as sun and horizon.",
            "The order of chains matters - platforms move with each pull.",
            "Some chains show sun positions that aren't part of the sequence."
        ],
        reward: "Platforms align to form a walkable bridge across the chasm.",
        consequence: "Three wrong pulls triggers gust of wind pushing toward chasm.",
        source: "Puzzles, Predicaments I"
    },
    {
        name: "Pushing Forward Back",
        category: "logic",
        difficulty: "hard",
        description: "A hallway that magically reverses direction, sending travelers back where they started.",
        setup: "A 30+ foot hallway. At the halfway point, creatures are magically turned around without realizing it. They always end up back at the start despite walking straight.",
        solution: "Walk backward through the hallway. The magic reverses reversed movement, allowing passage. Alternatively, use dimension door, teleport, or similar magic.",
        hints: [
            "Creatures walking the hallway always end up where they started.",
            "Something changes at the midpoint but it's not physically noticeable.",
            "Think about doing the opposite of what seems natural."
        ],
        reward: "Successfully traversing the hallway to reach the other side.",
        consequence: "No damage, but endless loop until solved.",
        source: "Puzzles, Predicaments I"
    },
    {
        name: "Like Clockwork",
        category: "mechanical",
        difficulty: "hard",
        description: "A massive clock mechanism with missing gears. Correct gears must be placed to activate a mechanism.",
        setup: "A giant clock face with missing gears. Various gears of different sizes scattered nearby. The clock controls a door/mechanism that only functions when the gears are properly placed.",
        solution: "Place gears so that the input gear's rotation transfers through all gears to the output. Gears must mesh properly (alternating sizes, opposite rotations when touching).",
        hints: [
            "Gears that touch must turn in opposite directions.",
            "Follow the mechanical path from input to output.",
            "Some gears are decoys and don't fit the mechanism."
        ],
        reward: "The mechanism activates, opening a door or revealing a treasure.",
        consequence: "Wrong gear placement jams mechanism, potentially triggering trap.",
        source: "Puzzles, Predicaments I"
    },
    {
        name: "Key Words",
        category: "cipher",
        difficulty: "medium",
        description: "A magical door responds only to the correct spoken password hidden in a cipher.",
        setup: "A door with inscribed letters/numbers and a speaking mouth carving. The inscription is encoded (Caesar cipher, letter-to-number, etc.). Speaking the decoded word opens the door.",
        solution: "Decode the cipher to find the password. For Caesar cipher: shift each letter by 3. For number cipher: convert A=1, B=2, etc.",
        hints: [
            "Count how many unique symbols appear - may correspond to letters.",
            "Look for patterns or common words in the encrypted text.",
            "The emperor's name is a hint (Caesar = shift cipher)."
        ],
        reward: "Door opens when password is spoken aloud.",
        consequence: "Wrong password triggers a glyph of warding or similar trap.",
        source: "Puzzles, Predicaments I"
    },
    
    // === PUZZLES, PREDICAMENTS & PERPLEXITIES II ===
    {
        name: "Punch Board",
        category: "logic",
        difficulty: "easy",
        description: "A 5x10 grid of spider-web covered holes. One contains the prize, others contain clues, hazards, or creatures.",
        setup: "A stone wall with 50 holes covered in spider webs. Clues in holes point to other holes (e.g., '5 Right', '1 Down', 'Top Row'). Some holes contain spiders or rats.",
        solution: "Follow the clues from hole to hole. Track which holes have been checked. The prize is in hole D7.",
        hints: [
            "Track each hole punched and its contents.",
            "Webs in corners are fresher - prize not there.",
            "DC 13 Investigation reveals which holes have creatures."
        ],
        reward: "Finding the sought item in the correct hole.",
        consequence: "Creature encounters (spiders, rats) in some holes.",
        source: "Puzzles, Predicaments II"
    },
    {
        name: "The Devil Is in the Details",
        category: "pattern",
        difficulty: "easy",
        description: "Two nearly identical paintings flank a magical door. Find all 10 differences to open the door.",
        setup: "An artist's studio with a magical door between two paintings of a horned man. The paintings look identical but have 10 differences. Correctly identifying all 10 opens the door to the desired destination.",
        solution: "Differences: 1) Horn length, 2) Teeth shape, 3) Goatee presence, 4) Breastplate rivets, 5) Clasp shape, 6) Goblet engraving, 7) Pinky position, 8) Hand tattoo, 9) Fork direction on frame, 10) Earring presence.",
        hints: [
            "A tattoo in infernal language shows '10' - the number of differences.",
            "DC 11 Investigation gives hints about where to look.",
            "The artist might tell you how many differences to find."
        ],
        reward: "Door opens to the intended destination.",
        consequence: "Wrong count opens door to random location (lake, Icewind Dale, etc.).",
        source: "Puzzles, Predicaments II"
    },
    {
        name: "Boulder Dash",
        category: "physical",
        difficulty: "easy",
        description: "A 100-foot hallway with a tilting floor that releases a boulder when weight shifts past the center.",
        setup: "A long hallway with a boulder on a ledge at one end, a door at the other. Floor pivots on a central fulcrum. Oil covers everything (difficult terrain, DC 11 Dex or fall prone). When more weight passes the center, floor tilts and boulder rolls.",
        solution: "Keep weight balanced - half the party on each side of the fulcrum. Or place counterweights on the entrance side. Boulder rolls at 35 ft/round for 3 rounds.",
        hints: [
            "DC 11 Investigation: ledge grooves match floor section.",
            "DC 12 Perception: deep scrapes in walls indicate mechanism.",
            "DC 13 History: knowledge of how such traps function."
        ],
        reward: "Safely reaching the door at the end.",
        consequence: "Boulder deals 3d10 bludgeoning, blocks the door (DC 17 Strength to move).",
        source: "Puzzles, Predicaments II"
    },
    {
        name: "Name That Tune",
        category: "pattern",
        difficulty: "easy",
        description: "Play the correct musical notes on a harp to lower a drawbridge door.",
        setup: "A harp on a raised platform with sheet music on a pedestal. Seven strings, six notes to play. Wrong notes drop floor sections into a 40-foot pit.",
        solution: "The correct notes are: A, F, B, C, B, G. Correct strings to pluck: 3, 1, 4, 5, 4, 2.",
        hints: [
            "Bards or instrument-proficient characters can read the music automatically.",
            "DC 11 Performance or History to read each note without proficiency.",
            "Muting strings allows testing without triggering the puzzle."
        ],
        reward: "Drawbridge lowers for safe passage.",
        consequence: "Wrong notes drop floor sections (DC 12-15 Dex save or 4d6 bludgeoning).",
        source: "Puzzles, Predicaments II"
    },
    {
        name: "Time Will Tell",
        category: "logic",
        difficulty: "medium",
        description: "A circular room with 12 doors numbered like a clock. The correct door changes hourly based on a sundial.",
        setup: "Circular room, 12 numbered doors, raised ring in center, hole in ceiling for sunlight. Only one door leads to safety at any given time.",
        solution: "Place an object in the center ring to cast a shadow. The shadow points to the correct door (like a sundial). At night, no shadow = no correct door.",
        hints: [
            "DC 11 History: the room resembles a clock or sundial.",
            "DC 12 Perception: scratches in the ring suggest items placed there.",
            "DC 13 Survival: shadow positions change over time."
        ],
        reward: "Selecting the correct door leads to the exit.",
        consequence: "Wrong doors lead back to the puzzle room after 1d4 hours of wandering.",
        raiseStakes: "At night, creatures emerge from doors (see creature table by tier).",
        source: "Puzzles, Predicaments II"
    },
    {
        name: "The Skeleton Court",
        category: "logic",
        difficulty: "medium",
        description: "Three skeletons with gemstone eyes guard three sealed chests. Match chest contents to correct skeleton.",
        setup: "Three skeletons on thrones with eyes: left has rubies, right has emeralds, center has one of each. Three chests contain rubies, emeralds, or both. A damaged magnifying glass of x-ray vision has one use remaining.",
        solution: "Key insight: all chests start in WRONG positions. Use the magnifying glass on the CENTER chest (ruby+emerald skeleton). It reveals a single gem type. Since chests are wrong, that's the ONLY gem in that chest. Then deduce the rest.",
        hints: [
            "DC 10 Investigation: pedestals show all chests are in wrong positions.",
            "DC 12 Intelligence: knowing all positions are wrong is crucial.",
            "The magnifying glass only has one use - choose wisely."
        ],
        reward: "Prize is revealed when all chests are correctly placed.",
        consequence: "Traps or undead if placed incorrectly.",
        source: "Puzzles, Predicaments II"
    },
    {
        name: "Me and My Shadow",
        category: "physical",
        difficulty: "medium",
        description: "A shadow creature must be projected onto walls using light to be vulnerable to damage.",
        setup: "A 60x60 room with two torches. Doors become shadows (unusable). A shadow creature attaches to party members and can only be damaged when on a WALL, not floor or ceiling.",
        solution: "Use light sources to project the shadow creature (attached to a character) onto a vertical wall. Attack it while on the wall. When defeated, doors return to normal.",
        hints: [
            "DC 11 Perception: light sources can move the creature's shadow.",
            "DC 12 Investigation: gashes and scorch marks on WALLS only.",
            "Standing near walls causes shadows to cast on them."
        ],
        reward: "Doors return to normal after defeating the shadow creature.",
        consequence: "Shadow creature attacks; immune to damage except when on walls.",
        source: "Puzzles, Predicaments II"
    },
    {
        name: "The Talking Scale",
        category: "logic",
        difficulty: "medium",
        description: "A living scale that can weigh only twice more before dying. Find the heaviest of 8 identical crates.",
        setup: "Eight identical crates, one is heavier (contains the prize). A giant living scale can perform only 2 weighings. Opening wrong crate destroys all.",
        solution: "First weighing: 3 vs 3 (leave 2 off). If balanced, heavy is in the 2 not weighed. If unbalanced, heavy is in the heavier group of 3. Second weighing: 1 vs 1 from the identified group (if balanced, it's the third).",
        hints: [
            "The scale hints: 'odd numbers' suggests weighing 3 vs 3.",
            "Items NOT on the scale count as a third comparison group.",
            "DC 13 Persuasion: scale reveals two crates are equal, reducing options."
        ],
        reward: "Finding the correct crate with the prize inside.",
        consequence: "Opening wrong crate destroys all crates and contents.",
        source: "Puzzles, Predicaments II"
    },
    {
        name: "Ride the Lightning",
        category: "pattern",
        difficulty: "medium",
        description: "A portal of 8 stones must be activated by conducting electricity through them in the correct order.",
        setup: "A circular portal of 8 runic stones. One stone has electricity flowing in. Characters must conduct electricity through ALL stones by crossing the center in a specific pattern.",
        solution: "Follow the runes: arrows pointing straight mean connect to opposite stone. Two-dot runes mean skip 2 stones. The correct order is: 1→5→8→4→7→3→6→2.",
        hints: [
            "DC 12 Arcana: all runes must glow to activate the portal.",
            "Using your body to conduct electricity deals 1d6 lightning per round.",
            "Ropes, weapons, or environmental items can conduct electricity."
        ],
        reward: "Portal activates when all stones are charged in sequence.",
        consequence: "Wrong sequence opens portal to dangerous plane, releasing a monster.",
        source: "Puzzles, Predicaments II"
    },
    {
        name: "The Dragon Temple",
        category: "physical",
        difficulty: "medium",
        description: "Five dragon statues of different colored gems must each receive their breath weapon element to open the temple.",
        setup: "A temple with sealed door. Five dragon statues: Ruby (red), Sapphire (blue), Emerald (green), Onyx (black), Quartz (white). A staff of dragon's breath must be inserted into each and exposed to the matching element.",
        solution: "Ruby=Fire, Sapphire=Lightning, Emerald=Poison, Onyx=Acid, Quartz=Cold. Generate each element (spell, item, or mundane) while staff is in the matching statue.",
        hints: [
            "DC 11 Intelligence: slot in statues matches the staff perfectly.",
            "DC 12 History: connection between dragon colors and breath weapons.",
            "DC 13 Arcana: breath weapons are part of the solution."
        ],
        reward: "Five colored light beams connect to door, which opens.",
        consequence: "Each beam lasts 1 hour. If one deactivates, must reactivate.",
        source: "Puzzles, Predicaments II"
    },
    {
        name: "Water Weight",
        category: "physical",
        difficulty: "medium",
        description: "Use a 3-gallon and 5-gallon bucket to measure exactly 4 gallons into a cistern.",
        setup: "A fountain, two buckets (3-gallon and 5-gallon), and a cistern. Pouring exactly 4 gallons into the cistern opens a barricaded gate.",
        solution: "Solution 1: Fill 5, pour into 3 (2 left in 5). Empty 3. Pour 2 into 3. Fill 5. Pour from 5 to fill 3 (4 left in 5). Pour 4 into cistern. Solution 2: Fill 3, pour into 5. Fill 3, pour into 5 until full (1 left). Empty 5. Pour 1 into 5. Fill 3. Pour into 5 (now 4). Pour into cistern.",
        hints: [
            "DC 10 Intelligence: an intermediate size exists between the buckets.",
            "DC 11 Arcana/History: markings show 3 and 5 gallon capacity.",
            "DC 12 Wisdom: empty space in buckets matters as much as water."
        ],
        reward: "Gate opens with exactly 4 gallons in cistern.",
        consequence: "A drain plug allows resetting if the wrong amount is poured.",
        source: "Puzzles, Predicaments II"
    },
    {
        name: "Tales from the Crypt",
        category: "cipher",
        difficulty: "hard",
        description: "Reassemble torn song lyrics to identify which coffin to open in a crypt of legendary adventurers.",
        setup: "A crypt with 6 ornate sarcophagi (Barbarian, Wizard, Ranger, Rogue, Bard, Druid). 12 torn pieces of a song must be assembled. The song tells who died in what order. The last survivor has the artifact.",
        solution: "Assemble lyrics by: 1) Rhyme scheme (2nd/4th lines rhyme), 2) Story logic (deaths in order), 3) Counting down survivors. Touch each coffin in death order while reciting its verse. The bard's coffin (last survivor) contains the prize.",
        hints: [
            "DC 10 History/Performance: recognize rhyme patterns.",
            "Characters must touch coffins while reciting verses.",
            "Spirits nod in approval when done correctly."
        ],
        reward: "The final coffin opens, revealing the artifact.",
        consequence: "Wrong order: nothing happens, or optional undead attack.",
        source: "Puzzles, Predicaments II"
    },
    {
        name: "Potion Maker",
        category: "logic",
        difficulty: "hard",
        description: "Follow a cryptic recipe with riddles to brew a luck potion. Mistakes reduce potency or cause disaster.",
        setup: "Individual brewing stations with 3 cauldrons (cast iron, pewter, steel), color-changing burner, grass, blood vials (dragon, vampire, empty), gears diagram, and shape vials (circle, square, triangle).",
        solution: "1) Cast iron (DC 10 skill), 2) Orange flame (missing rainbow color), 3) 7 blades grass (lucky number, DC 11), 4) Own blood (safe choice), 5) 14 stirs counter-clockwise (gear count/direction), 6) 7 minutes (DC 12), 7) Circle vial (has 2 sides: inside/outside).",
        hints: [
            "Step 1: Cast iron is correct for potions (DC 10 check).",
            "Step 2: Rainbow colors listed; orange is missing.",
            "Step 5: Count gears (14) and track rotation direction.",
            "Step 7: Circle has two sides - inside and outside."
        ],
        reward: "0 mistakes: Perfect PA20 (luck for 3 hours). 1 mistake: 10 minutes luck. 2: Healing potion. 3: Poison.",
        consequence: "5 mistakes: Gelatinous cube attacks. 6 mistakes: Explosion (5d10 fire, 25-ft radius).",
        source: "Puzzles, Predicaments II"
    },
    {
        name: "To Tell the Truth",
        category: "logic",
        difficulty: "hard",
        description: "Three suspects await execution for murder. One is innocent. A malfunctioning truth spell means only one speaks truth.",
        setup: "Three identical NPCs (Boris) on gallows. Only one is the real Boris (innocent). Each says one line: Noose 1: 'I'm innocent.' Noose 2: 'I'm guilty.' Noose 3: 'The person in Noose 1 is guilty.'",
        solution: "Only one statement can be true. If Boris is in Noose 1: two truths (1 and 2). If Boris is in Noose 2: one truth (3 only). If Boris is in Noose 3: two truths (2 and 3). Boris is in Noose 2 (only scenario with exactly one truth).",
        hints: [
            "DC 12 Insight: Noose 3 is telling the truth.",
            "DC 13 Intelligence: test each scenario systematically.",
            "DC 14 Investigation: Noose 2 seems more nervous."
        ],
        reward: "Correctly identifying the innocent saves them.",
        consequence: "Wrong choice: surviving doppelganger attacks with executioner's axe.",
        raiseStakes: "Only 3 skill checks allowed before execution proceeds.",
        source: "Puzzles, Predicaments II"
    },
    {
        name: "Need a Hand?",
        category: "logic",
        difficulty: "hard",
        description: "Four chains of different resistance must be weighted with body parts to level them all and lower a drawbridge.",
        setup: "Four chains (A-D) with different resistances. Body parts: a hand (on chain C), skeletal arm, severed foot, skeletal leg. Each has different weight. Match weights to chain resistance to level all four.",
        solution: "Chain A: Skeletal leg, Chain B: Severed foot, Chain C: Hand (already there), Chain D: Skeletal arm. All chains must reach position 4 simultaneously.",
        hints: [
            "DC 12 Perception: chains control the drawbridge.",
            "DC 11 Survival: body parts should go on the chains.",
            "Trial and error while observing chain positions."
        ],
        reward: "Drawbridge lowers across the chasm.",
        consequence: "May need to jump chasms (Athletics DC 15+) if chains not balanced.",
        source: "Puzzles, Predicaments II"
    },
    {
        name: "Twists and Turns",
        category: "physical",
        difficulty: "hard",
        description: "Navigate a winding path through a room where wrong turns trigger traps. Follow the safe pattern from an old map.",
        setup: "A room divided into 25 squares in a 5x5 grid. An ancient map shows a winding path. Only the correct path is safe. Straying triggers traps.",
        solution: "Follow the path shown on the map exactly. The pattern creates a specific route through the grid. Deviating triggers traps in adjacent squares.",
        hints: [
            "The map is the key - study it carefully.",
            "DC 12 Investigation: faded footprints follow the safe path.",
            "DC 13 Perception: trapped squares have slightly different coloring."
        ],
        reward: "Safely crossing the room to reach the exit/treasure.",
        consequence: "Wrong squares trigger various traps (arrows, pits, flames).",
        source: "Puzzles, Predicaments II"
    },
    
    // === GAME MASTER'S BOOK PUZZLES ===
    {
        name: "Caesar's Message",
        category: "cipher",
        difficulty: "easy",
        description: "A cipher message where each letter is shifted by a fixed number in the alphabet.",
        setup: "An inscription reads something like 'DWWDFN DW GDZQ' (ATTACK AT DAWN with shift of 3). The name 'Caesar' may appear as a hint.",
        solution: "Shift each letter back by the indicated number (usually 3). A=D, B=E, etc. The decoded message reveals information or a password.",
        hints: [
            "Julius Caesar used this cipher - it's named after him.",
            "Try shifting letters by small numbers (1-5).",
            "Common words like 'THE' can help crack the code."
        ],
        reward: "The decoded message reveals crucial information or a password.",
        consequence: "Speaking wrong passwords may trigger wards or alarms.",
        source: "Game Master's Book"
    },
    {
        name: "The Mirror Maze",
        category: "physical",
        difficulty: "medium",
        description: "Navigate a maze where mirrors create confusing reflections and illusions of multiple paths.",
        setup: "A maze filled with mirrors. Some paths are real, others are reflections. Creatures may appear as multiple images. DC 15 Investigation to identify real paths vs reflections.",
        solution: "Close one eye to break the optical illusion, or use non-visual senses. Mark paths with chalk or rope. Trust touch over sight.",
        hints: [
            "Reflections don't cast shadows the same way.",
            "Sound echoes differently from real passages.",
            "Throwing small objects reveals solid walls vs open paths."
        ],
        reward: "Finding the exit and any treasures within.",
        consequence: "Getting lost, triggering encounter with maze guardian.",
        source: "Game Master's Book"
    },
    {
        name: "The Elemental Pillars",
        category: "pattern",
        difficulty: "medium",
        description: "Four pillars representing elements must receive their corresponding element simultaneously.",
        setup: "Four stone pillars with symbols: flame, water drop, leaf, and wind spiral. A door won't open until all four receive their element at the same time.",
        solution: "Fire pillar needs flame (torch, fire spell), Water needs water, Earth/nature needs plants or earth, Air needs wind (gust of wind, fanning). All must be active simultaneously.",
        hints: [
            "The symbols represent the four classical elements.",
            "All elements must be applied at the same time.",
            "Even small amounts of each element will work."
        ],
        reward: "The sealed door opens when all elements are satisfied.",
        consequence: "Applying wrong element may discharge energy (damage of that type).",
        source: "Game Master's Book"
    },
    {
        name: "The Weighted Scales",
        category: "logic",
        difficulty: "medium",
        description: "Balance scales with specific weights to open a door. Weights are hidden throughout the dungeon.",
        setup: "A set of balance scales near a sealed door. Various weights are scattered in previous rooms. The scales must be balanced with a specific total on each side.",
        solution: "Find all weights (clues indicate their locations). Calculate combinations that balance. Place correct weights on each side. Door opens when balanced.",
        hints: [
            "Some 'decorative' objects are actually weights.",
            "An inscription may hint at the target weight.",
            "Weights can be combined in multiple valid ways."
        ],
        reward: "The door opens when scales balance correctly.",
        consequence: "Unbalanced scales may trigger counterweight traps.",
        source: "Game Master's Book"
    },
    {
        name: "The Sliding Tile Puzzle",
        category: "mechanical",
        difficulty: "hard",
        description: "A 4x4 grid of tiles with one space empty. Slide tiles to form an image or pattern.",
        setup: "Stone tiles set into the floor or wall. Each tile has part of an image (map, creature, symbol). Tiles can only slide into the empty space. Rearrange to complete the image.",
        solution: "Use the standard 15-puzzle solving method: form rows from top down, columns from left to right, solve the bottom-right 2x2 last.",
        hints: [
            "Work on the top row first, then second row.",
            "The bottom-right corner is hardest - save it for last.",
            "Some tile arrangements are unsolvable - check for correct starting state."
        ],
        reward: "Completed image triggers a mechanism or reveals information.",
        consequence: "Timer may count down; failure locks the puzzle or triggers trap.",
        source: "Game Master's Book"
    },
    
    // === TASHA'S CAULDRON OF EVERYTHING PUZZLES ===
    {
        name: "Creature Cubes",
        category: "logic",
        difficulty: "medium",
        description: "Four colored cubes with creature symbols must be arranged so creatures 'hunt' each other in a food chain.",
        setup: "Four colored cubes (red, blue, green, yellow), each with different creature symbols on their faces (fish, frog, fly, plant). The cubes must be stacked with predators above prey.",
        solution: "Arrange cubes so: Plant (bottom) -> Fly -> Frog -> Fish (top). Each creature must face a creature it can eat. Rotation matters.",
        hints: [
            { dc: 15, skill: "Intelligence (Nature)", hint: "Identify the food chain: plants feed flies, flies feed frogs, frogs feed fish (in this puzzle's logic)." },
            { dc: 12, skill: "Wisdom (Insight)", hint: "The orientation of each cube matters - creatures must face their prey." },
            { dc: 10, skill: "Intelligence (Investigation)", hint: "Try starting from the bottom with what nothing eats." }
        ],
        reward: "Successfully stacking reveals a hidden compartment or deactivates a ward.",
        consequence: "Incorrect stacking causes cubes to reset and may trigger minor magical feedback (1d6 force damage).",
        source: "TCoE"
    },
    {
        name: "Display of Daggers",
        category: "cipher",
        difficulty: "medium",
        description: "Decode a message using daggers arranged on a wall display.",
        setup: "A dead dwarven blacksmith lies near a wall display of daggers arranged in specific patterns. A magic sword rests in his grip. The daggers' arrangement spells out a coded message revealing how to release the sword.",
        solution: "The daggers' positions correspond to letters (like semaphore). Decoded message reveals the command word or action to release the sword safely.",
        hints: [
            { dc: 15, skill: "Intelligence (Nature)", hint: "The blacksmith arranged these deliberately - the pattern is intentional." },
            { dc: 10, skill: "Wisdom (Perception)", hint: "Each dagger's angle seems to correspond to something." },
            { dc: 15, skill: "Intelligence (Investigation)", hint: "The angles might represent letters or numbers." }
        ],
        reward: "The magic sword releases, containing the blacksmith's soul who provides guidance.",
        consequence: "Pulling the sword without solving triggers a curse or the soul attacks.",
        source: "TCoE"
    },
    {
        name: "Exact Change",
        category: "logic",
        difficulty: "hard",
        description: "Weigh soul coins on a balance scale to open a devil's vault.",
        setup: "A balance scale and collection of soul coins of different weights. The vault door has a specific weight requirement displayed. Players must combine coins to match exactly.",
        solution: "Use mathematical deduction to find the coin combination that balances exactly. May require multiple weighings to determine individual coin weights.",
        hints: [
            { dc: 15, skill: "Intelligence (Investigation)", hint: "Weigh coins against each other to determine relative weights." },
            { dc: 12, skill: "Intelligence (History)", hint: "Soul coins from different eras have different weights." },
            { dc: 18, skill: "Dexterity", hint: "The scale is very sensitive - place coins carefully." }
        ],
        reward: "The vault opens revealing treasure or vital information.",
        consequence: "Wrong weight triggers alarm, summons devils, or seals vault permanently.",
        source: "TCoE"
    },
    {
        name: "Eyes of Stone",
        category: "physical",
        difficulty: "medium",
        description: "Medusa statues must be oriented so their gazes intersect at specific points.",
        setup: "A room with several medusa head statues on rotating pedestals. Gems on the floor mark target points. The statues' 'gaze' is represented by beams of light from their eyes.",
        solution: "Rotate each statue so its eye-beams cross at the gem markers. All beams must intersect simultaneously at all points.",
        hints: [
            { dc: 12, skill: "Wisdom (Perception)", hint: "The gems on the floor are clearly significant markers." },
            { dc: 15, skill: "Intelligence (Investigation)", hint: "The statues' eyes emit faint light that could form beams." },
            { dc: 10, skill: "Dexterity", hint: "The pedestals rotate smoothly - try different angles." }
        ],
        reward: "Correct alignment opens a passage or deactivates a petrification trap.",
        consequence: "Wrong alignment may trigger actual petrification rays (DC 14 Con save).",
        source: "TCoE"
    },
    {
        name: "Four by Four",
        category: "logic",
        difficulty: "medium",
        description: "A 4x4 grid puzzle where elements must be placed following sudoku-like rules.",
        setup: "A stone grid with 16 spaces. Elemental tiles (fire, water, earth, air) must fill the grid with no repeated elements in any row or column.",
        solution: "Like sudoku, place each of the four elements exactly once in each row and column. Some tiles may be fixed as starting points.",
        hints: [
            { dc: 10, skill: "Intelligence (Investigation)", hint: "No element can repeat in any row or column." },
            { dc: 12, skill: "Wisdom (Insight)", hint: "Start with rows or columns that have the most pre-placed tiles." },
            { dc: 15, skill: "Intelligence", hint: "Process of elimination is your friend." }
        ],
        reward: "Completing the grid opens a door or grants elemental boon.",
        consequence: "Wrong placement may reset the puzzle or trigger elemental damage (element type matches misplaced tile).",
        source: "TCoE"
    },
    {
        name: "Haunted Hallway",
        category: "physical",
        difficulty: "hard",
        description: "Navigate a hallway filled with spectral hazards by following a specific pattern.",
        setup: "A long hallway where ghostly figures appear and disappear. Stepping on certain tiles at certain times triggers attacks. A rhyme or pattern indicates safe passage.",
        solution: "Move only when specific ghosts are visible/invisible, or step only on tiles matching a color/symbol pattern mentioned in the riddle.",
        hints: [
            { dc: 15, skill: "Wisdom (Perception)", hint: "The ghosts appear and disappear in a regular pattern." },
            { dc: 12, skill: "Intelligence (Religion)", hint: "The inscribed prayer mentions colors - perhaps they're significant." },
            { dc: 15, skill: "Dexterity (Stealth)", hint: "Moving slowly and carefully reveals the safe path." }
        ],
        reward: "Safe passage through to a protected sanctum.",
        consequence: "Wrong movement triggers ghostly attacks (3d6 necrotic) or possession attempt.",
        source: "TCoE"
    },
    {
        name: "Illusive Islands",
        category: "logic",
        difficulty: "hard",
        description: "Cross a chamber by jumping between illusions that follow specific rules.",
        setup: "A chamber with a chasm and floating 'islands' - some real, some illusory. Clues indicate which are safe (color, size, position, etc.).",
        solution: "Identify the pattern (e.g., only islands with moss are real, or every third island is safe). Cross using only the real platforms.",
        hints: [
            { dc: 15, skill: "Intelligence (Arcana)", hint: "Detect magic reveals which islands are illusory." },
            { dc: 12, skill: "Wisdom (Perception)", hint: "Some islands have subtle differences from others." },
            { dc: 10, skill: "Intelligence (Investigation)", hint: "Throwing objects reveals which islands are solid." }
        ],
        reward: "Successfully crossing leads to treasure or next area.",
        consequence: "Stepping on illusion means falling (fall damage varies by height).",
        source: "TCoE"
    },
    {
        name: "Material Components",
        category: "pattern",
        difficulty: "medium",
        description: "Identify and arrange material components to 'cast' a spell that opens the door.",
        setup: "A wizard's laboratory with various components (bat guano, sulfur, feather, glass rod, etc.). A spell name is displayed. Arrange the correct components to simulate casting.",
        solution: "Identify the spell's material components (e.g., Fireball = bat guano + sulfur) and place them in the casting circle.",
        hints: [
            { dc: 12, skill: "Intelligence (Arcana)", hint: "Recognize the spell from its name and recall its components." },
            { dc: 10, skill: "Wisdom (Perception)", hint: "The components are labeled in the laboratory." },
            { dc: 15, skill: "Intelligence (Investigation)", hint: "A spellbook nearby might list component requirements." }
        ],
        reward: "The 'spell' activates, opening the door or granting a magical effect.",
        consequence: "Wrong components cause a magical mishap (wild magic surge or explosion).",
        source: "TCoE"
    },
    {
        name: "Members Only",
        category: "cipher",
        difficulty: "hard",
        description: "Prove membership in a secret society by reproducing their secret handshake or code.",
        setup: "A door guard or magical lock requires the secret sign of a defunct organization. Clues scattered throughout the dungeon piece together the greeting.",
        solution: "Combine clues (hand positions, spoken phrases, presented items) to reproduce the exact membership verification ritual.",
        hints: [
            { dc: 15, skill: "Intelligence (History)", hint: "The society's records mention specific gestures." },
            { dc: 12, skill: "Charisma (Deception)", hint: "Confidence in performing the ritual matters." },
            { dc: 15, skill: "Intelligence (Investigation)", hint: "Old paintings show members greeting each other." }
        ],
        reward: "Granted entry to the secret area with member privileges.",
        consequence: "Failed attempt marks you as an intruder, triggering guards or traps.",
        source: "TCoE"
    },
    {
        name: "Reckless Steps",
        category: "pattern",
        difficulty: "medium",
        description: "Navigate a floor of letter tiles by spelling words to cross safely.",
        setup: "A 60-by-70-foot room with letter tiles. Stepping on correct letters (spelling specific words) is safe. Other tiles trigger poison gas (DC 15 Con, 2d10 poison).",
        solution: "Identify the words to spell from clues (titles of books, names of gods, etc.). Step only on those letters in order.",
        hints: [
            { dc: 10, skill: "Wisdom (Perception)", hint: "Some tiles show more wear than others - they're used more often." },
            { dc: 15, skill: "Intelligence (Religion/History)", hint: "The words relate to the dungeon's original purpose." },
            { dc: 12, skill: "Dexterity", hint: "Thieves' tools can disable individual trapped tiles (DC 15)." }
        ],
        reward: "Safe passage to the chamber beyond.",
        consequence: "Wrong step: DC 15 Constitution save or 2d10 poison damage.",
        source: "TCoE"
    },
    {
        name: "Skeleton Keys",
        category: "physical",
        difficulty: "medium",
        description: "Assemble scattered bones into complete skeletons to unlock doors.",
        setup: "Multiple piles of mixed bones and several locked doors. Each door has an alcove for a complete skeleton. Bones must be correctly assembled anatomically.",
        solution: "Sort bones by creature type and size. Assemble complete skeletons (all bones present and correctly positioned) in each alcove.",
        hints: [
            { dc: 12, skill: "Intelligence (Medicine)", hint: "Anatomical knowledge helps identify which bones go together." },
            { dc: 10, skill: "Wisdom (Perception)", hint: "The bones are different sizes - they probably belong to different creatures." },
            { dc: 15, skill: "Intelligence (Nature)", hint: "Some bones aren't humanoid - identify the creature type." }
        ],
        reward: "Each correctly assembled skeleton unlocks its corresponding door.",
        consequence: "Incorrectly assembled skeletons may animate and attack.",
        source: "TCoE"
    },
    {
        name: "All That Glitters",
        category: "logic",
        difficulty: "hard",
        description: "Identify real gold among counterfeits using limited tools.",
        setup: "Multiple gold items, but only some are real. A balance scale, acid vial, and magnet are available. Must identify all real gold to unlock the treasury.",
        solution: "Use the tests: real gold is denser (heavier for its size), doesn't react to acid, isn't magnetic. Systematically test items to identify the genuine articles.",
        hints: [
            { dc: 12, skill: "Intelligence (Investigation)", hint: "Gold has specific properties that distinguish it from fakes." },
            { dc: 15, skill: "Intelligence (History)", hint: "Counterfeiters often use iron cores - a magnet would reveal them." },
            { dc: 10, skill: "Wisdom (Perception)", hint: "Compare the weight of similar-sized objects on the scale." }
        ],
        reward: "Identifying all real gold opens the treasury vault.",
        consequence: "Presenting a fake triggers alarm or marks you as a thief.",
        source: "TCoE"
    },
    {
        name: "What's on the Menu",
        category: "cipher",
        difficulty: "medium",
        description: "Decode a restaurant menu that contains hidden instructions.",
        setup: "A fancy menu with strange dish names and prices. The first letters, prices, or descriptions encode a message or combination.",
        solution: "Decode using the indicated method (first letters spell words, prices indicate sequence, etc.).",
        hints: [
            { dc: 10, skill: "Wisdom (Perception)", hint: "The dish names seem unusually specific." },
            { dc: 12, skill: "Intelligence (Investigation)", hint: "Look for patterns in the first letters of each dish." },
            { dc: 15, skill: "Intelligence", hint: "The prices might be a number sequence." }
        ],
        reward: "Decoded message reveals password, combination, or secret location.",
        consequence: "Speaking wrong password alerts staff or triggers security.",
        source: "TCoE"
    },
    
    // === TOMB OF ANNIHILATION PUZZLES ===
    {
        name: "Nine Trickster Gods",
        category: "logic",
        difficulty: "hard",
        description: "Match nine trickster god symbols to their correct shrines throughout the tomb.",
        setup: "The Tomb of the Nine Gods requires understanding each trickster god's nature and placing their symbols correctly. Each god has a personality: Obo'laka (caution), I'jin (fickle), Papazotl (arrogance), etc.",
        solution: "Research each god's nature through inscriptions and place their cubes in shrines matching their personalities. Each correct placement grants a boon.",
        hints: [
            "Each trickster god has a distinct personality revealed in inscriptions.",
            "The shrines contain trials matching each god's nature.",
            "Incorrect placements anger the gods but don't prevent progress."
        ],
        reward: "Each correct match grants a spirit boon; all nine unlocks final chamber.",
        consequence: "Wrong matches cause spirits to inflict penalties or possess characters.",
        source: "Tomb of Annihilation"
    },
    {
        name: "Trickster God Altar Statues",
        category: "pattern",
        difficulty: "medium",
        description: "Match floor pictures to corresponding altar statues on the walls.",
        setup: "A room with pictures on the floor tiles and statues of trickster gods on altar alcoves. Players must step on tiles matching the statue they want to honor.",
        solution: "Step on floor pictures that match the statues in the corresponding alcove positions. Matching all correctly opens the way forward.",
        hints: [
            "The floor pictures directly correspond to the altar statues.",
            "Standing on wrong pictures doesn't damage, but spawns enemies.",
            "Multiple party members can stand on correct tiles simultaneously."
        ],
        reward: "Passage opens to next area.",
        consequence: "Wrong matches spawn skeleton guardians.",
        source: "Tomb of Annihilation"
    },
    {
        name: "Transformation Potion Platforms",
        category: "logic",
        difficulty: "medium",
        description: "Drink colored potions that grant animal auras visible only to others, then stand on matching platforms.",
        setup: "Colored potions and matching colored platforms. Drinking a potion gives you an animal aura (invisible to yourself) that others can see. Stand on matching platform.",
        solution: "Each player drinks a potion, then other players guide them to the platform matching their aura color. Communication is key.",
        hints: [
            "You cannot see your own aura - trust your companions.",
            "The potions are not harmful, only transformative.",
            "All players must stand on correct platforms simultaneously."
        ],
        reward: "Door unlocks when all stand on correct platforms.",
        consequence: "Wrong platforms reset the puzzle and drain a potion.",
        source: "Tomb of Annihilation"
    },
    {
        name: "Artifact Activation Sequence",
        category: "pattern",
        difficulty: "hard",
        description: "Activate six artifacts in the correct sequence to unlock passage.",
        setup: "Six magical artifacts around a room, each with different activation methods (touch, speak command, apply element, etc.). Inscriptions hint at the order.",
        solution: "Decode the inscriptions to determine the sequence. Artifacts must be activated in order: typically following a story or elemental cycle.",
        hints: [
            "The inscriptions tell a story - follow its chronological order.",
            "Each artifact activates differently - examine them carefully.",
            "Wrong order resets all artifacts and may trigger a trap."
        ],
        reward: "Final artifact reveals treasure or opens passage.",
        consequence: "Wrong sequence resets puzzle and may summon guardians.",
        source: "Tomb of Annihilation"
    },
    
    // === WHITE PLUME MOUNTAIN PUZZLES ===
    {
        name: "The Sphinx's Three Questions",
        category: "riddle",
        difficulty: "medium",
        description: "Answer three riddles from a gynosphinx to pass through her domain.",
        setup: "A gynosphinx lounges behind a wall of force, posing three riddles. All must be answered correctly to pass. She offers one chance per riddle.",
        solution: "The riddles vary but typically involve wordplay, logic, or mythology. Classic examples: 'What has cities but no houses?' (A map)",
        hints: [
            "Sphinxes enjoy clever wordplay - think literally and metaphorically.",
            "Each riddle often has a simple, common answer.",
            "The sphinx may give hints if properly flattered."
        ],
        reward: "Wall of force drops, allowing passage.",
        consequence: "Wrong answer provokes sphinx attack.",
        source: "White Plume Mountain"
    },
    {
        name: "Blackrazor's Vault",
        category: "physical",
        difficulty: "hard",
        description: "Navigate past multiple guardians to claim the sentient sword Blackrazor.",
        setup: "The final chamber contains the legendary sword Blackrazor, but reaching it requires passing through a room of boiling mud, giants, and magical guardians.",
        solution: "Defeat or bypass each guardian: use fire resistance for mud, stealth or combat for giants, and specific tactics for magical defenses.",
        hints: [
            "The mud can be cooled or bypassed with magic.",
            "Giants can sometimes be reasoned with.",
            "Blackrazor itself may 'help' those it deems worthy."
        ],
        reward: "The sentient sword Blackrazor.",
        consequence: "Death or entrapment in the mountain.",
        source: "White Plume Mountain"
    },
    
    // === CURSE OF STRAHD PUZZLES ===
    {
        name: "The Amber Temple Sarcophagi",
        category: "logic",
        difficulty: "hard",
        description: "Dark vestiges offer forbidden power, but at what cost?",
        setup: "Ancient sarcophagi in the Amber Temple each contain a dark vestige offering great power in exchange for a dark gift. Inscriptions hint at each vestige's nature.",
        solution: "This is more moral than mechanical - each vestige offers real power but extracts a terrible price: physical corruption, personality changes, or worse.",
        hints: [
            "The inscriptions describe the vestige's nature and gift.",
            "Accepting any gift is permanent and has consequences.",
            "Some gifts may seem beneficial but carry hidden costs."
        ],
        reward: "Powerful abilities: flight, resurrection, enhanced magic.",
        consequence: "Physical mutations, alignment shifts, Strahd's attention.",
        source: "Curse of Strahd"
    },
    {
        name: "Tome of Strahd Location",
        category: "cipher",
        difficulty: "medium",
        description: "Use Tarokka card readings to locate the Tome of Strahd.",
        setup: "Madam Eva's card reading provides cryptic clues to the location of the Tome of Strahd, one of three artifacts needed to defeat him.",
        solution: "Interpret the Tarokka reading's imagery to identify the location within Barovia. Each card corresponds to specific locations.",
        hints: [
            "The cards speak in symbols - a 'broken one' might mean a ruined location.",
            "Landmarks mentioned might be literal or metaphorical.",
            "Asking Barovians about card imagery may help."
        ],
        reward: "The Tome of Strahd, revealing his weaknesses.",
        consequence: "Searching wrong locations wastes time and may attract Strahd's notice.",
        source: "Curse of Strahd"
    },
    
    // === CANDLEKEEP MYSTERIES PUZZLES ===
    {
        name: "The Joy of Extradimensional Spaces",
        category: "logic",
        difficulty: "medium",
        description: "Navigate an extradimensional mansion by understanding its creator's organizational system.",
        setup: "A mage's extradimensional space is organized by an eccentric system. Rooms shift based on which doors are opened in what order.",
        solution: "Observe the pattern of room changes and deduce the organizing principle (alphabetical, by color, by size, etc.). Navigate to the exit.",
        hints: [
            "The mage was obsessive about organization - find the system.",
            "Doors may lead to different rooms depending on recent actions.",
            "Notes left behind may hint at the organizational scheme."
        ],
        reward: "Exit with valuable books and knowledge.",
        consequence: "Getting lost wastes time; some rooms contain hazards.",
        source: "Candlekeep Mysteries"
    },
    {
        name: "Book Cipher Mystery",
        category: "cipher",
        difficulty: "medium",
        description: "Decode a message hidden within books using their titles, page numbers, and word positions.",
        setup: "A mystery requires decoding a message where numbers reference specific books, pages, and word positions within Candlekeep's library.",
        solution: "Match number sequences to: book catalog number, page number, word number on page. Spell out the hidden message.",
        hints: [
            "The first number is the book's catalog position.",
            "The second number is the page.",
            "The third number is which word on that page."
        ],
        reward: "Reveals location of treasure or crucial information.",
        consequence: "Wrong decoding leads to red herrings or wasted time.",
        source: "Candlekeep Mysteries"
    },
    
    // === DUNGEON OF THE MAD MAGE PUZZLES ===
    {
        name: "Halaster's Apprentice Doors",
        category: "logic",
        difficulty: "medium",
        description: "Doors in Undermountain require solving riddles from Halaster's apprentices.",
        setup: "Magical doors speak riddles in the voices of Halaster's former apprentices. Each door has a different riddle style based on the apprentice's personality.",
        solution: "Listen to the riddle's style to understand the apprentice. Each has preferred answer types (wordplay, logic, cruelty).",
        hints: [
            "Halaster had many apprentices with different personalities.",
            "The voice's tone hints at what kind of answer they want.",
            "Some doors accept clever wrong answers if they amuse the spirit."
        ],
        reward: "Door opens to the next area.",
        consequence: "Wrong answer triggers magical attack or teleportation.",
        source: "Dungeon of the Mad Mage"
    },
    {
        name: "Skullport Entrance Puzzle",
        category: "cipher",
        difficulty: "hard",
        description: "Finding and opening the secret entrance to Skullport from Undermountain.",
        setup: "The hidden port city of Skullport lies deep in Undermountain. Its entrances are concealed and require specific knowledge to open.",
        solution: "The entrance requires speaking 'Skullport' in Undercommon while touching specific skull carvings in sequence.",
        hints: [
            "The name of the place you seek is also the key.",
            "Not all skulls are decorative.",
            "The language of the Underdark opens Underdark doors."
        ],
        reward: "Access to the hidden city of Skullport.",
        consequence: "Wrong attempts alert Skullport's guardians.",
        source: "Dungeon of the Mad Mage"
    },
    
    // === PRINCES OF THE APOCALYPSE PUZZLES ===
    {
        name: "Elemental Node Alignment",
        category: "pattern",
        difficulty: "hard",
        description: "Align elemental symbols to open the path to the Elemental Nodes.",
        setup: "Four elemental symbols (air, earth, fire, water) must be rotated and aligned based on their relationships - opposites and adjacents.",
        solution: "Place opposites across from each other (air-earth, fire-water) and adjacents next to each other following the elemental cycle.",
        hints: [
            "Some elements are natural enemies.",
            "The cycle flows: Air feeds Fire, Fire creates Earth (ash), Earth contains Water, Water erodes and becomes Air.",
            "Opposition creates balance."
        ],
        reward: "Portal to the Elemental Nodes opens.",
        consequence: "Wrong alignment summons hostile elementals.",
        source: "Princes of the Apocalypse"
    },
    {
        name: "Prophet's Prophecy Cipher",
        category: "cipher",
        difficulty: "medium",
        description: "Decode the elemental cult prophets' coded communications.",
        setup: "Intercepted messages between cult leaders use a cipher based on elemental symbols replacing letters.",
        solution: "Each element represents a letter group. Decode by frequency analysis and known cult terminology.",
        hints: [
            "The cults use their element's name frequently.",
            "Common words like 'destroy' and 'power' appear often.",
            "Each prophet signs with their elemental symbol."
        ],
        reward: "Learn cult plans and locations.",
        consequence: "Wrong decoding wastes time or leads to ambushes.",
        source: "Princes of the Apocalypse"
    },
    
    // === STORM KING'S THUNDER PUZZLES ===
    {
        name: "Giant Rune Magic",
        category: "pattern",
        difficulty: "hard",
        description: "Activate giant runes by understanding their ancient magical language.",
        setup: "Massive stone runes require activation in specific patterns. Each rune type (fire, frost, stone, etc.) has different activation requirements.",
        solution: "Runes must be touched in order from weakest to strongest giant type, or activated with matching elemental energy.",
        hints: [
            "Giants have a strict hierarchy - the ordning.",
            "Each giant type has a preferred element.",
            "Storm giants rule over all others."
        ],
        reward: "Unlock giant treasures or gain magical rune knowledge.",
        consequence: "Wrong activation deals elemental damage.",
        source: "Storm King's Thunder"
    },
    {
        name: "King Hekaton's Court Protocol",
        category: "logic",
        difficulty: "medium",
        description: "Navigate storm giant court politics to gain an audience with the king.",
        setup: "Storm giant court has complex protocols. Visitors must demonstrate worth through proper address, gifts, and challenges.",
        solution: "Address giants by proper titles, offer gifts matching their status, accept appropriate challenges, never show fear.",
        hints: [
            "Giants respect strength and proper respect equally.",
            "Titles matter immensely to giants.",
            "Refusing a challenge is worse than losing one."
        ],
        reward: "Audience with King Hekaton or his court.",
        consequence: "Insults result in combat or expulsion.",
        source: "Storm King's Thunder"
    },
    
    // === RIME OF THE FROSTMAIDEN PUZZLES ===
    {
        name: "Netherese Spire Keys",
        category: "logic",
        difficulty: "hard",
        description: "Collect and use magical keys to access Ythryn's central spire.",
        setup: "Nine Netherese archmages each held a key to the spire. Only three are needed, but they're scattered throughout the ruined city.",
        solution: "Locate three of nine keys by following clues about each archmage's specialty and where they might have fallen.",
        hints: [
            "Each archmage had a magical specialty - look in matching areas.",
            "Some keys are held by creatures that survived the city's fall.",
            "The keys resonate when near each other."
        ],
        reward: "Access to Ythryn's central spire and its secrets.",
        consequence: "Without keys, the spire's defenses attack.",
        source: "Rime of the Frostmaiden"
    },
    {
        name: "Auril's Tests",
        category: "physical",
        difficulty: "hard",
        description: "Pass the Frostmaiden's three tests to reach her inner sanctum.",
        setup: "Auril tests visitors with challenges of Endurance (survive extreme cold), Isolation (face fears alone), and Cruelty (make a horrible choice).",
        solution: "Each test has multiple solutions - brute force, clever bypass, or accepting the cost. The cruelty test can be tricked.",
        hints: [
            "Auril values those who embrace the cold.",
            "Isolation means facing your fears honestly.",
            "Cruelty can be faked if you're convincing enough."
        ],
        reward: "Access to Auril's sanctum and the Codicil of White.",
        consequence: "Failure at any test may result in death or transformation.",
        source: "Rime of the Frostmaiden"
    },
    
    // === WILD BEYOND THE WITCHLIGHT PUZZLES ===
    {
        name: "Lost Things Recovery",
        category: "logic",
        difficulty: "medium",
        description: "Figure out what the carnival stole from you as a child and find it.",
        setup: "Each character lost something precious at the Witchlight Carnival years ago - a memory, a quality, or a small possession.",
        solution: "Investigate carnival attractions, speak with fey, and follow clues to learn what was taken and where it's kept.",
        hints: [
            "The carnival takes abstract things, not just objects.",
            "What you lost shaped who you became.",
            "The hags of Prismeer trade in lost things."
        ],
        reward: "Recovering your lost thing grants closure and possibly power.",
        consequence: "Your lost thing might have been traded to someone dangerous.",
        source: "Wild Beyond the Witchlight"
    },
    {
        name: "Hag Bargain Negotiation",
        category: "logic",
        difficulty: "hard",
        description: "Navigate negotiations with the Hourglass Coven hags.",
        setup: "Each hag (Bavlorna, Skabatha, Endelyn) wants something different and can be played against each other.",
        solution: "Learn what each hag desires, pit them against one another, find their weaknesses, and negotiate from strength.",
        hints: [
            "The hags do not trust each other.",
            "Each hag has a weakness tied to her nature.",
            "Fey contracts have loopholes."
        ],
        reward: "Freedom for Prismeer and Zybilna.",
        consequence: "Bad deals trap you in terrible obligations.",
        source: "Wild Beyond the Witchlight"
    },
    {
        name: "Prismeer Restoration",
        category: "pattern",
        difficulty: "hard",
        description: "Restore the three splinter realms of Prismeer to free Zybilna.",
        setup: "Prismeer has been split into three domains (Hither, Thither, Yon), each ruled by a hag. Reunification requires defeating or dealing with all three.",
        solution: "Address each domain's problem (typically the ruling hag), then reunite the shattered land through the Palace of Heart's Desire.",
        hints: [
            "Each domain reflects its hag's nature.",
            "Zybilna's palace stands at the center.",
            "Not all solutions require combat."
        ],
        reward: "Prismeer is restored, Zybilna freed.",
        consequence: "Failure leaves the realm shattered and Zybilna imprisoned.",
        source: "Wild Beyond the Witchlight"
    },
    
    // === CURSE OF STRAHD ADDITIONAL PUZZLES ===
    {
        name: "Fortunes of Ravenloft",
        category: "cipher",
        difficulty: "medium",
        description: "Interpret Madam Eva's Tarokka reading to find the artifacts.",
        setup: "Madam Eva draws five cards that cryptically reveal the locations of the Sunsword, Holy Symbol of Ravenkind, Tome of Strahd, an ally, and where to fight Strahd.",
        solution: "Each card corresponds to specific Barovian locations. Interpret the imagery to identify each location.",
        hints: [
            "The cards use symbolism, not literal meanings.",
            "Barovians may recognize card references.",
            "Some locations have multiple interpretations."
        ],
        reward: "Locate the three artifacts needed to defeat Strahd.",
        consequence: "Misinterpretation wastes time and alerts Strahd.",
        source: "Curse of Strahd"
    },
    {
        name: "Dinner with Strahd",
        category: "logic",
        difficulty: "hard",
        description: "Survive a dinner invitation with Count Strahd von Zarovich.",
        setup: "Strahd invites the party to dinner. He tests them with conversation, poisoned wine, mind games, and temptation.",
        solution: "Show neither fear nor disrespect. Answer his questions carefully. Don't drink the wine. Don't attack unless attacked.",
        hints: [
            "Strahd respects those who don't cower.",
            "Direct insults may be forgiven, boring conversation won't.",
            "He wants entertainment, not a fight... yet."
        ],
        reward: "Valuable information about Strahd or Barovia.",
        consequence: "Rudeness or cowardice results in torture or death.",
        source: "Curse of Strahd"
    },
    
    // === KEYS FROM THE GOLDEN VAULT PUZZLES ===
    {
        name: "Vault Heist Planning",
        category: "logic",
        difficulty: "medium",
        description: "Plan the perfect heist based on gathered intelligence.",
        setup: "Each heist requires reconnaissance: guard schedules, security measures, entry points, and escape routes.",
        solution: "Gather intelligence through observation, bribery, and infiltration. Plan entry, theft, and escape with contingencies.",
        hints: [
            "Multiple entry points means multiple escape options.",
            "Guards have routines that can be exploited.",
            "The best plans have backup plans."
        ],
        reward: "Successful heist and target acquisition.",
        consequence: "Poor planning leads to capture or death.",
        source: "Keys from the Golden Vault"
    },
    {
        name: "Clockwork Vault Sequence",
        category: "pattern",
        difficulty: "hard",
        description: "Solve the mechanical lock sequence in Tockworth's Clockworks.",
        setup: "A complex clockwork vault requires setting gears in specific positions based on a musical tune.",
        solution: "The tune played nearby encodes the gear positions. Match gear teeth to musical notes.",
        hints: [
            "Listen to the music playing in the workshop.",
            "Each note corresponds to a gear position.",
            "The sequence repeats with variations."
        ],
        reward: "Access to the clockwork vault's contents.",
        consequence: "Wrong sequence triggers clockwork guardians.",
        source: "Keys from the Golden Vault"
    },
    
    // === BALDUR'S GATE: DESCENT INTO AVERNUS PUZZLES ===
    {
        name: "Infernal Contract Reading",
        category: "cipher",
        difficulty: "hard",
        description: "Understand and potentially escape an infernal contract.",
        setup: "Infernal contracts are written in legalese and Infernal script, with hidden clauses and loopholes.",
        solution: "Read every word carefully. Loopholes exist but are well-hidden. Some contracts can be fulfilled in unexpected ways.",
        hints: [
            "Devils are bound by the exact wording, not intent.",
            "Every contract has an escape clause... somewhere.",
            "Time limits and conditions can be exploited."
        ],
        reward: "Freedom from the contract or improved terms.",
        consequence: "Soul forfeit or eternal service.",
        source: "Descent into Avernus"
    },
    {
        name: "Elturel's Chains",
        category: "logic",
        difficulty: "hard",
        description: "Understand how to free the city of Elturel from Avernus.",
        setup: "Elturel is bound to Avernus by massive chains and the Companion (a corrupted solar). Breaking the chains alone isn't enough.",
        solution: "The Companion must be purified or destroyed, the chains broken, and a source of good powerful enough to pull the city free found.",
        hints: [
            "The Companion is key to the city's binding.",
            "Zariel herself forged the chains.",
            "Celestial intervention may be needed."
        ],
        reward: "Elturel is freed and returns to the Material Plane.",
        consequence: "Failure means the city and all souls within are damned.",
        source: "Descent into Avernus"
    },
    
    // === OUT OF THE ABYSS PUZZLES ===
    {
        name: "Society of Brilliance Riddles",
        category: "riddle",
        difficulty: "medium",
        description: "Answer riddles from the Society of Brilliance's intellectual monsters.",
        setup: "A strange society of intelligent Underdark monsters (mind flayer, beholder, etc.) tests visitors with intellectual challenges.",
        solution: "Each member poses riddles matching their species' psychology. Answer in ways that demonstrate intelligence over combat prowess.",
        hints: [
            "These monsters value intellect above all.",
            "Each riddle reflects the creature's nature.",
            "Admitting ignorance is better than stupid guesses."
        ],
        reward: "Alliance with powerful Underdark creatures.",
        consequence: "Failure results in dismissal, not death (usually).",
        source: "Out of the Abyss"
    },
    {
        name: "Demon Lord Weakness Discovery",
        category: "logic",
        difficulty: "hard",
        description: "Research how to defeat or banish the demon lords rampaging through the Underdark.",
        setup: "Multiple demon lords (Demogorgon, Orcus, etc.) are loose. Each has specific weaknesses and banishment requirements.",
        solution: "Research in libraries, consult sages, and observe demon lord behavior to learn individual weaknesses and turn them against each other.",
        hints: [
            "Demon lords hate each other as much as mortals.",
            "Each has a specific bane or weakness.",
            "Forcing them to fight might solve multiple problems."
        ],
        reward: "Knowledge to defeat or banish demon lords.",
        consequence: "Unprepared confrontation means certain death.",
        source: "Out of the Abyss"
    },
    
    // === CLASSIC D&D RIDDLES ===
    {
        name: "The Sphinx's Riddle",
        category: "riddle",
        difficulty: "medium",
        description: "Answer the sphinx's riddle to pass safely.",
        setup: "A sphinx blocks the path. 'What walks on four legs in the morning, two legs at noon, and three legs in the evening?'",
        solution: "A human/person. (Crawls as baby, walks upright as adult, uses cane when old.)",
        hints: [
            "Think about something that changes throughout its life.",
            "The 'legs' might not be literal legs.",
            "'Morning, noon, evening' might represent stages of life."
        ],
        reward: "The sphinx allows passage and may offer a boon.",
        consequence: "Wrong answer may result in combat or being devoured.",
        source: "Classic"
    },
    {
        name: "The River Crossing",
        category: "logic",
        difficulty: "medium",
        description: "Transport a wolf, goat, and cabbage across a river without any being eaten.",
        setup: "A boat that holds only the ferryman and one item. Wolf eats goat if left alone. Goat eats cabbage if left alone. How to get all across?",
        solution: "1) Take goat across. 2) Return alone. 3) Take wolf across. 4) Bring goat back. 5) Take cabbage across. 6) Return alone. 7) Take goat across.",
        hints: [
            "The goat is the problematic one - it can't be left with either.",
            "You may need to bring something back.",
            "The wolf and cabbage can be left together safely."
        ],
        reward: "Successfully crossing with all items intact.",
        consequence: "Losing an item may have story consequences.",
        source: "Classic"
    },
    {
        name: "The Three Doors",
        category: "riddle",
        difficulty: "easy",
        description: "Three doors: one leads to safety, one to a monster, one to treasure. Each has an inscription, but only one tells the truth.",
        setup: "Door 1: 'The treasure is behind this door.' Door 2: 'The monster is behind Door 1.' Door 3: 'The treasure is not behind this door.'",
        solution: "If Door 1 is true, Door 3 would also be true (2 truths - invalid). If Door 2 is true, check consistency. If Door 3 is true, treasure isn't behind it. Work through logic to find the valid single-truth scenario.",
        hints: [
            "Only ONE door tells the truth.",
            "Test each door being the truth-teller.",
            "The false doors might contradict themselves."
        ],
        reward: "Finding the treasure or safe passage.",
        consequence: "Wrong door leads to monster encounter.",
        source: "Classic"
    },
    {
        name: "The Bridge of Questions",
        category: "riddle",
        difficulty: "varies",
        description: "A guardian asks three questions to cross a bridge. Answer correctly or be cast into the chasm.",
        setup: "A guardian (troll, knight, elemental) on a bridge asks questions about various topics - some easy, some hard, some personal to the character's background.",
        solution: "Answer each question correctly. Questions can include: character's name, their quest, favorite color, capital of a region, what item they seek, etc.",
        hints: [
            "Some questions are about the character themselves.",
            "Pay attention to details mentioned earlier in the adventure.",
            "The guardian may accept creative answers to abstract questions."
        ],
        reward: "Safe passage across the bridge.",
        consequence: "Wrong answer: blown off the bridge or attacked.",
        source: "Classic (Monty Python inspired)"
    }
];

// ============================================
// SUPPORT DATA
// ============================================

const dungeonRooms = [
    "Entrance chamber with trapped floor tiles",
    "Long corridor with arrow slits in the walls",
    "Natural cavern with underground river",
    "Library with enchanted books",
    "Throne room of a long-dead king",
    "Treasury with guardian constructs",
    "Prison cells with restless spirits",
    "Alchemist's laboratory with volatile substances",
    "Armory with animated weapons",
    "Chapel to a forgotten god",
    "Dining hall with poisoned feast",
    "Garden chamber with carnivorous plants",
    "Mirror room with doppelganger threat",
    "Pool chamber with water-based hazard",
    "Clockwork room with grinding gears",
    "Lava chamber with narrow bridges",
    "Ice cave with slippery surfaces",
    "Web-filled chamber with spider threat",
    "Crypt with rising undead",
    "Observatory with celestial puzzle"
];

const trapReasons = [
    "To protect the treasure from thieves",
    "To test the worthiness of those who would enter",
    "As a defense against invasion",
    "To contain something dangerous within",
    "As punishment for the unworthy",
    "Built by a mad wizard for amusement",
    "To guard a sacred relic",
    "Left by ancient civilizations",
    "Created by paranoid rulers",
    "To seal away a powerful evil"
];

const puzzleReasons = [
    "To prove intellectual worthiness",
    "As a test by a deity or powerful being",
    "To hide the location of something valuable",
    "Created by an eccentric wizard",
    "A security measure that doesn't harm the worthy",
    "A game left by bored immortals",
    "To encode secret information",
    "Part of an initiation ritual",
    "To slow down invaders",
    "A meditation tool for the enlightened"
];

// ============================================
// UTILITY FUNCTIONS
// ============================================

function randomChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getPartyTierDC(baseDC, partyLevel) {
    if (partyLevel <= 4) return baseDC;
    if (partyLevel <= 10) return baseDC + 2;
    if (partyLevel <= 16) return baseDC + 5;
    return baseDC + 8;
}

function getDamageByLevel(danger, partyLevel) {
    const level = trapDangerLevels[danger];
    if (!level) return "2d10";
    
    if (partyLevel <= 4) return level.damage["1-4"];
    if (partyLevel <= 10) return level.damage["5-10"];
    if (partyLevel <= 16) return level.damage["11-16"];
    return level.damage["17+"];
}

function getTemplatesByCategory(templates, category) {
    if (category === "random") return templates;
    return templates.filter(t => t.category === category);
}

function getTemplatesByDifficulty(templates, difficulty) {
    if (difficulty === "random") return templates;
    return templates.filter(t => t.difficulty === difficulty);
}

function getTemplatesByDanger(templates, danger) {
    if (danger === "random") return templates;
    return templates.filter(t => t.danger === danger);
}

// Count of content for display
const contentStats = {
    traps: trapTemplates.length,
    puzzles: puzzleTemplates.length,
    triggers: trapTriggers.length,
    effects: trapEffects.damage.length + trapEffects.magical.length + trapEffects.environmental.length
};