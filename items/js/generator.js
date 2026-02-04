// D&D 5E Item Generator - Generation Logic

let currentItem = null;
let allItems = {};
let currentMode = 'generate';

// Initialize the generator
function init() {
    // Merge all item databases
    mergeItemDatabases();
    
    // Populate the item library list
    populateItemLibrary();
    
    // Set up event listeners
    setupEventListeners();
}

// Merge all item databases into one
function mergeItemDatabases() {
    allItems = {};
    
    // Add mundane items
    if (typeof mundaneItems !== 'undefined') {
        Object.assign(allItems, mundaneItems);
    }
    
    // Add armor items
    if (typeof armorItems !== 'undefined') {
        Object.assign(allItems, armorItems);
    }
    
    // Add tool items
    if (typeof toolItems !== 'undefined') {
        Object.assign(allItems, toolItems);
    }
    
    // Add potion items
    if (typeof potionItems !== 'undefined') {
        Object.assign(allItems, potionItems);
    }
    
    // Add magic items A-H
    if (typeof magicItemsA !== 'undefined') {
        Object.assign(allItems, magicItemsA);
    }
    if (typeof magicItemsB !== 'undefined') {
        Object.assign(allItems, magicItemsB);
    }
    if (typeof magicItemsC !== 'undefined') {
        Object.assign(allItems, magicItemsC);
    }
    if (typeof magicItemsD !== 'undefined') {
        Object.assign(allItems, magicItemsD);
    }
    if (typeof magicItemsEFGH !== 'undefined') {
        Object.assign(allItems, magicItemsEFGH);
    }
    
    console.log(`Loaded ${Object.keys(allItems).length} items`);
}

// Setup event listeners
function setupEventListeners() {
    // Close modal on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeAllModals();
        }
    });
}

// Set generator mode
function setMode(mode) {
    currentMode = mode;
    
    // Update button states
    document.getElementById('modeGenerate').classList.toggle('active', mode === 'generate');
    document.getElementById('modeSelect').classList.toggle('active', mode === 'select');
    
    // Show/hide relevant sections
    document.getElementById('generatorSection').style.display = mode === 'generate' ? 'block' : 'none';
    document.getElementById('librarySection').style.display = mode === 'select' ? 'block' : 'none';
    
    // Update buttons
    document.getElementById('generateBtn').style.display = mode === 'generate' ? 'block' : 'none';
    document.getElementById('loadBtn').style.display = mode === 'select' ? 'block' : 'none';
}

// Handle generate/load based on mode
function handleGenerate() {
    if (currentMode === 'generate') {
        generateItem();
    } else {
        loadSelectedItem();
    }
}

// Generate a random item
function generateItem() {
    const categoryFilter = document.getElementById('itemCategory').value;
    const rarityFilter = document.getElementById('rarity').value;
    const sourceFilter = document.getElementById('source').value;
    const magicOnly = document.getElementById('magicOnly').checked;
    
    // Filter items based on criteria
    let filteredItems = Object.entries(allItems).filter(([id, item]) => {
        // Category filter
        if (categoryFilter !== 'random' && item.type !== categoryFilter) {
            return false;
        }
        
        // Rarity filter
        if (rarityFilter !== 'random') {
            if (rarityFilter === 'mundane' && item.rarity !== null) {
                return false;
            } else if (rarityFilter !== 'mundane' && item.rarity !== rarityFilter) {
                return false;
            }
        }
        
        // Source filter
        if (sourceFilter !== 'all' && item.source !== sourceFilter) {
            return false;
        }
        
        // Magic only filter
        if (magicOnly && !item.rarity) {
            return false;
        }
        
        return true;
    });
    
    if (filteredItems.length === 0) {
        alert('No items match your criteria. Try adjusting the filters.');
        return;
    }
    
    // Pick a random item
    const [itemId, itemData] = filteredItems[Math.floor(Math.random() * filteredItems.length)];
    
    currentItem = { id: itemId, ...itemData };
    displayItem(currentItem);
    
    // Show regenerate button and result
    document.getElementById('regenerateBtn').style.display = 'flex';
    document.getElementById('itemResult').classList.remove('hidden');
    document.getElementById('placeholder').style.display = 'none';
}

// Regenerate with same filters
function regenerateItem() {
    generateItem();
}

// Generate from treasure table
function rollTreasureTable(table) {
    const tableItems = Object.entries(allItems).filter(([id, item]) => {
        if (!item.rarity) return false;
        
        const tableRarities = {
            'A': ['common'],
            'B': ['uncommon'],
            'C': ['rare'],
            'D': ['very-rare'],
            'E': ['legendary'],
            'F': ['uncommon'],
            'G': ['rare'],
            'H': ['very-rare'],
            'I': ['legendary']
        };
        
        return tableRarities[table]?.includes(item.rarity);
    });
    
    if (tableItems.length === 0) {
        alert(`No items found for table ${table}`);
        return;
    }
    
    const [itemId, itemData] = tableItems[Math.floor(Math.random() * tableItems.length)];
    currentItem = { id: itemId, ...itemData };
    displayItem(currentItem);
    
    document.getElementById('regenerateBtn').style.display = 'flex';
    document.getElementById('itemResult').classList.remove('hidden');
    document.getElementById('placeholder').style.display = 'none';
}

// Populate item library list
function populateItemLibrary() {
    const select = document.getElementById('itemSelect');
    if (!select) return;
    
    select.innerHTML = '';
    
    // Sort items alphabetically
    const sortedItems = Object.entries(allItems)
        .sort((a, b) => a[1].name.localeCompare(b[1].name));
    
    for (const [id, item] of sortedItems) {
        const option = document.createElement('option');
        option.value = id;
        option.textContent = item.name;
        if (item.rarity) {
            option.textContent += ` (${capitalize(item.rarity.replace('-', ' '))})`;
        }
        select.appendChild(option);
    }
    
    // Update count
    updateItemCount();
}

// Filter item library list
function filterItemList() {
    const searchTerm = document.getElementById('itemSearch').value.toLowerCase();
    const select = document.getElementById('itemSelect');
    
    select.innerHTML = '';
    
    const sortedItems = Object.entries(allItems)
        .filter(([id, item]) => {
            return item.name.toLowerCase().includes(searchTerm) ||
                   (item.type && item.type.toLowerCase().includes(searchTerm)) ||
                   (item.rarity && item.rarity.toLowerCase().includes(searchTerm));
        })
        .sort((a, b) => a[1].name.localeCompare(b[1].name));
    
    for (const [id, item] of sortedItems) {
        const option = document.createElement('option');
        option.value = id;
        option.textContent = item.name;
        if (item.rarity) {
            option.textContent += ` (${capitalize(item.rarity.replace('-', ' '))})`;
        }
        select.appendChild(option);
    }
    
    updateItemCount();
}

// Update item count display
function updateItemCount() {
    const select = document.getElementById('itemSelect');
    const countEl = document.querySelector('.item-count');
    if (countEl && select) {
        countEl.textContent = `${select.options.length} items`;
    }
}

// Preview selected item
function previewSelectedItem() {
    const select = document.getElementById('itemSelect');
    const preview = document.getElementById('itemPreview');
    
    if (!select.value || !preview) return;
    
    const item = allItems[select.value];
    if (!item) return;
    
    preview.style.display = 'block';
    preview.innerHTML = `
        <div class="item-preview-name">${item.name}</div>
        <div class="item-preview-stats">
            <strong>Type:</strong> ${capitalize(item.type || 'Item')}<br>
            ${item.rarity ? `<strong>Rarity:</strong> ${capitalize(item.rarity.replace('-', ' '))}<br>` : ''}
            ${item.cost ? `<strong>Cost:</strong> ${item.cost}<br>` : ''}
            ${item.weight ? `<strong>Weight:</strong> ${item.weight} lb.<br>` : ''}
        </div>
    `;
}

// Load selected item from library
function loadSelectedItem() {
    const select = document.getElementById('itemSelect');
    if (!select.value) {
        alert('Please select an item from the library');
        return;
    }
    
    const item = allItems[select.value];
    if (!item) return;
    
    currentItem = { id: select.value, ...item };
    displayItem(currentItem);
    
    document.getElementById('regenerateBtn').style.display = 'none';
    document.getElementById('itemResult').classList.remove('hidden');
    document.getElementById('placeholder').style.display = 'none';
}

// Get rarity display class
function getRarityClass(rarity) {
    if (!rarity) return '';
    return 'rarity-' + rarity.toLowerCase().replace(' ', '-');
}

// Get rarity display name
function getRarityName(rarity) {
    if (!rarity) return 'Mundane';
    const names = {
        'common': 'Common',
        'uncommon': 'Uncommon',
        'rare': 'Rare',
        'very-rare': 'Very Rare',
        'legendary': 'Legendary',
        'artifact': 'Artifact'
    };
    return names[rarity] || capitalize(rarity);
}

// Get attunement text
function getAttunementText(attunement) {
    if (!attunement || attunement === 'none') return null;
    
    const texts = {
        'any': 'Requires attunement',
        'spellcaster': 'Requires attunement by a spellcaster',
        'cleric': 'Requires attunement by a cleric',
        'druid': 'Requires attunement by a druid',
        'paladin': 'Requires attunement by a paladin',
        'ranger': 'Requires attunement by a ranger',
        'sorcerer': 'Requires attunement by a sorcerer',
        'warlock': 'Requires attunement by a warlock',
        'wizard': 'Requires attunement by a wizard',
        'bard': 'Requires attunement by a bard',
        'monk': 'Requires attunement by a monk',
        'rogue': 'Requires attunement by a rogue',
        'barbarian': 'Requires attunement by a barbarian',
        'fighter': 'Requires attunement by a fighter',
        'artificer': 'Requires attunement by an artificer',
        'good': 'Requires attunement by a creature of good alignment',
        'evil': 'Requires attunement by a creature of evil alignment'
    };
    
    return texts[attunement] || attunement;
}

// Get category display name
function getCategoryName(type) {
    if (!type) return 'Item';
    
    const names = {
        'adventuring-gear': 'Adventuring Gear',
        'ammunition': 'Ammunition',
        'arcane-focus': 'Arcane Focus',
        'armor': 'Armor',
        'artisan-tools': "Artisan's Tools",
        'clothing': 'Clothing',
        'container': 'Container',
        'druidic-focus': 'Druidic Focus',
        'equipment-pack': 'Equipment Pack',
        'food-drink': 'Food & Drink',
        'gaming-set': 'Gaming Set',
        'holy-symbol': 'Holy Symbol',
        'instrument': 'Musical Instrument',
        'mount-gear': 'Mount & Gear',
        'potion': 'Potion',
        'ring': 'Ring',
        'rod': 'Rod',
        'scroll': 'Scroll',
        'shield': 'Shield',
        'staff': 'Staff',
        'tool': 'Tool',
        'trade-goods': 'Trade Goods',
        'vehicle': 'Vehicle',
        'wand': 'Wand',
        'weapon': 'Weapon',
        'wondrous-item': 'Wondrous Item'
    };
    
    return names[type] || capitalize(type.replace('-', ' '));
}

// Capitalize string
function capitalize(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Close all modals
function closeAllModals() {
    document.querySelectorAll('.modal-overlay').forEach(modal => {
        modal.classList.remove('active');
    });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', init);
