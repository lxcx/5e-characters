// D&D 5E Item Generator - UI Functions

// Display generated item
function displayItem(item) {
    const resultEl = document.getElementById('itemResult');
    
    const rarityClass = getRarityClass(item.rarity);
    const rarityName = getRarityName(item.rarity);
    const categoryName = getCategoryName(item.type);
    const attunementText = getAttunementText(item.attunement);
    
    let html = `
        <div class="item-card ${item.cursed ? 'cursed' : ''}">
            <!-- Item Type Selector -->
            <div class="item-type-selector">
                <label for="itemTypeSelect"><i class="fa-solid fa-cubes"></i> Item Type:</label>
                <select id="itemTypeSelect" onchange="changeItemType(this.value)">
                    <option value="weapon" ${item.type === 'weapon' ? 'selected' : ''}>Weapon</option>
                    <option value="armor" ${item.type === 'armor' ? 'selected' : ''}>Armor</option>
                    <option value="shield" ${item.type === 'shield' ? 'selected' : ''}>Shield</option>
                    <option value="potion" ${item.type === 'potion' ? 'selected' : ''}>Potion</option>
                    <option value="ring" ${item.type === 'ring' ? 'selected' : ''}>Ring</option>
                    <option value="rod" ${item.type === 'rod' ? 'selected' : ''}>Rod</option>
                    <option value="scroll" ${item.type === 'scroll' ? 'selected' : ''}>Scroll</option>
                    <option value="staff" ${item.type === 'staff' ? 'selected' : ''}>Staff</option>
                    <option value="wand" ${item.type === 'wand' ? 'selected' : ''}>Wand</option>
                    <option value="wondrous-item" ${item.type === 'wondrous-item' ? 'selected' : ''}>Wondrous Item</option>
                    <option value="adventuring-gear" ${item.type === 'adventuring-gear' ? 'selected' : ''}>Adventuring Gear</option>
                    <option value="tool" ${item.type === 'tool' ? 'selected' : ''}>Tool</option>
                    <option value="container" ${item.type === 'container' ? 'selected' : ''}>Container</option>
                    <option value="ammunition" ${item.type === 'ammunition' ? 'selected' : ''}>Ammunition</option>
                </select>
            </div>
            
            <div class="item-header">
                <h1 class="item-name ${rarityClass} editable" onclick="editItemName()" title="Click to edit">${item.name}</h1>
                <p class="item-basics">
                    ${categoryName}${item.subtype ? ` (${capitalize(item.subtype)})` : ''}, 
                    <span class="${rarityClass} editable-inline" onclick="editItemRarity()" title="Click to edit">${rarityName}</span>
                </p>
            </div>
            
            <div class="stat-block-divider"></div>
            
            ${renderEditableItemStats(item)}
            
            ${renderItemProperties(item)}
            
            <div class="attunement-toggle">
                <label class="toggle-switch">
                    <input type="checkbox" id="attunementToggle" ${item.attunement && item.attunement !== 'none' ? 'checked' : ''} onchange="toggleAttunement()">
                    <span class="toggle-slider"></span>
                </label>
                <span class="toggle-text"><i class="fa-solid fa-link"></i> Requires Attunement</span>
                ${item.attunement && typeof item.attunement === 'string' && item.attunement !== 'none' && item.attunement !== 'true' ? `
                    <span class="attunement-detail editable-inline" onclick="editAttunementRequirement()" title="Click to edit">(${item.attunement})</span>
                ` : ''}
            </div>
            
            ${item.charges ? renderCharges(item) : ''}
            
            <div class="item-description editable-block" onclick="editItemDescription()" title="Click to edit">
                ${item.description || 'Click to add description...'}
            </div>
            
            <!-- Item Image Section -->
            <div class="item-image-section">
                <div class="section-title"><i class="fa-solid fa-image"></i> Item Image</div>
                <div class="item-image-container" id="itemImageContainer">
                    <div class="item-image-placeholder" id="itemImagePlaceholder">
                        <i class="fa-solid fa-gem"></i>
                        <span>Upload an image for this item</span>
                    </div>
                    <img id="itemImage" class="item-image" style="display: none;" alt="Item Image">
                </div>
                <div class="item-image-actions">
                    <button class="upload-image-btn" onclick="triggerItemImageUpload()">
                        <i class="fa-solid fa-upload"></i> Upload Image
                    </button>
                    <input type="file" id="itemImageUploadInput" accept="image/*" style="display: none;" onchange="handleItemImageUpload(event)">
                </div>
            </div>
            
            ${item.cursed ? `
                <div class="cursed-warning">
                    <i class="fa-solid fa-skull"></i>
                    <span>This item is cursed</span>
                </div>
                ${item.curseDescription ? `
                <div class="curse-description" style="margin-top: 10px; padding: 10px; background: rgba(139, 0, 0, 0.1); border-left: 3px solid #8b0000; border-radius: 4px;">
                    <div style="font-weight: bold; color: #8b0000; margin-bottom: 5px;"><i class="fa-solid fa-scroll"></i> Curse Effect</div>
                    <div class="curse-text editable" id="editable-curseDescription" onclick="editCurseDescription()" style="cursor: pointer; font-style: italic;">${item.curseDescription}</div>
                </div>
                ` : ''}
            ` : ''}
            
            ${item.source ? `
                <p style="margin-top: 15px; color: #6c757d; font-size: 0.9em;">
                    <strong>Source:</strong> ${getSourceName(item.source)}
                </p>
            ` : ''}
        </div>
    `;
    
    resultEl.innerHTML = html;
    
    // Show export section
    const exportSection = document.getElementById('exportSection');
    if (exportSection) {
        exportSection.style.display = 'block';
    }
}

// Render item statistics with editable fields based on item type
function renderEditableItemStats(item) {
    let stats = [];
    
    // Weapon-specific stats (always show for weapons)
    if (item.type === 'weapon') {
        stats.push({ label: 'Damage', value: item.damage || '—', editable: true, field: 'damage' });
        stats.push({ label: 'Damage Type', value: item.damageType ? capitalize(item.damageType) : '—', editable: true, field: 'damageType' });
    }
    
    // Armor stats (always show for armor/shield)
    if (item.type === 'armor' || item.type === 'shield') {
        let acText = item.ac ? item.ac.toString() : '—';
        if (item.ac && item.maxDex !== undefined && item.maxDex !== null) {
            if (item.maxDex === 0) {
                acText = item.ac.toString();
            } else {
                acText = `${item.ac} + Dex (max ${item.maxDex})`;
            }
        } else if (item.ac && item.subtype === 'light') {
            acText = `${item.ac} + Dex`;
        }
        stats.push({ label: 'Armor Class', value: acText, editable: true, field: 'ac' });
        
        if (item.type === 'shield') {
            stats.push({ label: 'AC Bonus', value: item.acBonus ? `+${item.acBonus}` : '+2', editable: true, field: 'acBonus' });
        }
    }
    
    // Common stats - cost and weight are always shown and editable
    stats.push({ label: 'Cost', value: item.cost || '—', editable: true, field: 'cost' });
    stats.push({ label: 'Weight', value: item.weight ? `${item.weight} lb.` : '—', editable: true, field: 'weight' });
    
    // Container stats
    if (item.type === 'container') {
        stats.push({ label: 'Capacity', value: item.capacity || '—', editable: true, field: 'capacity' });
    }
    
    // Magic item charges (for wands, staffs, rods, etc.)
    if (['wand', 'staff', 'rod', 'ring', 'wondrous-item'].includes(item.type)) {
        stats.push({ label: 'Charges', value: item.charges || '—', editable: true, field: 'charges' });
    }
    
    if (stats.length === 0) return '';
    
    return `
        <div class="item-stats-row">
            ${stats.map(stat => `
                <div class="stat-item editable-stat" onclick="editItemStat('${stat.field}')" title="Click to edit">
                    <span class="stat-label">${stat.label}</span>
                    <span class="stat-value">${stat.value}</span>
                </div>
            `).join('')}
        </div>
        <div class="stat-block-divider"></div>
    `;
}

// Render item statistics (non-editable version for compatibility)
function renderItemStats(item) {
    return renderEditableItemStats(item);
}

// Render item properties
function renderItemProperties(item) {
    const properties = item.properties || [];
    
    return `
        <div class="item-properties-section">
            <div class="item-properties">
                ${properties.map((prop, index) => `
                    <span class="property-tag editable-property" onclick="editProperty(${index})" title="Click to edit">
                        ${capitalize(prop)}
                        <button class="property-delete" onclick="event.stopPropagation(); deleteProperty(${index})" title="Remove property">×</button>
                    </span>
                `).join('')}
                <button class="property-add" onclick="addProperty()" title="Add property">
                    <i class="fa-solid fa-plus"></i> Add
                </button>
            </div>
        </div>
    `;
}

// Render charges display
function renderCharges(item) {
    const chargeCount = item.charges || 0;
    let dots = '';
    
    for (let i = 0; i < Math.min(chargeCount, 10); i++) {
        dots += '<span class="charge-dot"></span>';
    }
    
    return `
        <div class="charges-section" style="margin-top: 15px;">
            <h4 class="section-title"><i class="fa-solid fa-bolt"></i> Charges</h4>
            <div class="charges-display">
                ${dots}
                ${chargeCount > 10 ? `<span style="margin-left: 5px;">(${chargeCount} total)</span>` : ''}
            </div>
            ${item.recharge ? `<p style="margin-top: 8px; font-size: 0.9em; color: #6c757d;">${item.recharge}</p>` : ''}
        </div>
    `;
}

// Get source display name
function getSourceName(source) {
    const sources = {
        'PHB': 'Player\'s Handbook',
        'DMG': 'Dungeon Master\'s Guide',
        'XGE': 'Xanathar\'s Guide to Everything',
        'TCE': 'Tasha\'s Cauldron of Everything',
        'FTOD': 'Fizban\'s Treasury of Dragons',
        'VRGR': 'Van Richten\'s Guide to Ravenloft',
        'MOT': 'Mythic Odysseys of Theros',
        'ERLW': 'Eberron: Rising from the Last War',
        'EGW': 'Explorer\'s Guide to Wildemount',
        'SCAG': 'Sword Coast Adventurer\'s Guide'
    };
    
    return sources[source] || source;
}

// Format modifier
function formatModifier(mod) {
    if (mod >= 0) return `+${mod}`;
    return mod.toString();
}

// Format number with commas
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// ============================================
// IMAGE UPLOAD FUNCTIONS
// ============================================

// Trigger file upload dialog
function triggerItemImageUpload() {
    document.getElementById('itemImageUploadInput').click();
}

// Handle uploaded image
function handleItemImageUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    if (!file.type.startsWith('image/')) {
        alert('Please select an image file.');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        const placeholder = document.getElementById('itemImagePlaceholder');
        const image = document.getElementById('itemImage');
        
        if (placeholder) placeholder.style.display = 'none';
        if (image) {
            image.src = e.target.result;
            image.style.display = 'block';
        }
    };
    reader.readAsDataURL(file);
    event.target.value = '';
}

// ============================================
// CURSE EDITING
// ============================================

// Edit curse description
function editCurseDescription() {
    const element = document.getElementById('editable-curseDescription');
    if (!element || !currentItem) return;
    
    const currentValue = currentItem.curseDescription || '';
    
    const textarea = document.createElement('textarea');
    textarea.className = 'curse-edit-textarea';
    textarea.value = currentValue;
    textarea.style.cssText = 'width: 100%; min-height: 80px; padding: 8px; border: 1px solid #8b0000; border-radius: 4px; font-family: inherit; font-size: inherit; resize: vertical;';
    
    element.innerHTML = '';
    element.appendChild(textarea);
    element.classList.remove('editable');
    
    setTimeout(() => {
        textarea.focus();
        textarea.select();
    }, 10);
    
    const saveEdit = () => {
        const newValue = textarea.value.trim();
        if (newValue) {
            currentItem.curseDescription = newValue;
        }
        displayItem(currentItem);
    };
    
    textarea.addEventListener('blur', saveEdit);
    
    textarea.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            displayItem(currentItem);
        }
    });
}

// ============================================
// ITEM EDITING FUNCTIONS
// ============================================

// Edit item name
function editItemName() {
    if (!currentItem) return;
    
    const nameEl = document.querySelector('.item-name');
    if (!nameEl) return;
    
    const input = document.createElement('input');
    input.type = 'text';
    input.value = currentItem.name;
    input.className = 'edit-input edit-input-large';
    
    nameEl.innerHTML = '';
    nameEl.appendChild(input);
    input.focus();
    input.select();
    
    const saveEdit = () => {
        const newValue = input.value.trim();
        if (newValue) {
            currentItem.name = newValue;
        }
        displayItem(currentItem);
    };
    
    input.addEventListener('blur', saveEdit);
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') saveEdit();
        if (e.key === 'Escape') displayItem(currentItem);
    });
}

// Edit item rarity
function editItemRarity() {
    if (!currentItem) return;
    
    const rarityEl = document.querySelectorAll('.item-basics .editable-inline')[1];
    if (!rarityEl) return;
    
    const rarities = [
        { value: 'mundane', label: 'Mundane' },
        { value: 'common', label: 'Common' },
        { value: 'uncommon', label: 'Uncommon' },
        { value: 'rare', label: 'Rare' },
        { value: 'very-rare', label: 'Very Rare' },
        { value: 'legendary', label: 'Legendary' },
        { value: 'artifact', label: 'Artifact' }
    ];
    
    const select = document.createElement('select');
    select.className = 'edit-select';
    rarities.forEach(r => {
        const option = document.createElement('option');
        option.value = r.value;
        option.textContent = r.label;
        if (r.value === currentItem.rarity) option.selected = true;
        select.appendChild(option);
    });
    
    rarityEl.innerHTML = '';
    rarityEl.appendChild(select);
    select.focus();
    
    const saveEdit = () => {
        currentItem.rarity = select.value;
        displayItem(currentItem);
    };
    
    select.addEventListener('change', saveEdit);
    select.addEventListener('blur', saveEdit);
}

// Toggle attunement
function toggleAttunement() {
    if (!currentItem) return;
    
    const checkbox = document.getElementById('attunementToggle');
    if (checkbox.checked) {
        currentItem.attunement = true;
    } else {
        currentItem.attunement = false;
    }
    displayItem(currentItem);
}

// Edit attunement requirement
function editAttunementRequirement() {
    if (!currentItem) return;
    
    const detailEl = document.querySelector('.attunement-detail');
    if (!detailEl) return;
    
    const currentReq = typeof currentItem.attunement === 'string' ? currentItem.attunement : '';
    
    const input = document.createElement('input');
    input.type = 'text';
    input.value = currentReq;
    input.placeholder = 'e.g., by a spellcaster';
    input.className = 'edit-input';
    
    detailEl.innerHTML = '';
    detailEl.appendChild(input);
    input.focus();
    input.select();
    
    const saveEdit = () => {
        const newValue = input.value.trim();
        currentItem.attunement = newValue || true;
        displayItem(currentItem);
    };
    
    input.addEventListener('blur', saveEdit);
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') saveEdit();
        if (e.key === 'Escape') displayItem(currentItem);
    });
}

// Edit item description
function editItemDescription() {
    if (!currentItem) return;
    
    const descEl = document.querySelector('.item-description');
    if (!descEl) return;
    
    // Get the current height to maintain it
    const currentHeight = descEl.offsetHeight;
    
    const textarea = document.createElement('textarea');
    textarea.value = currentItem.description || '';
    textarea.className = 'edit-textarea';
    textarea.placeholder = 'Enter item description...';
    textarea.style.minHeight = Math.max(currentHeight, 200) + 'px';
    
    descEl.innerHTML = '';
    descEl.appendChild(textarea);
    descEl.classList.remove('editable-block');
    descEl.classList.add('editing');
    textarea.focus();
    
    const saveEdit = () => {
        currentItem.description = textarea.value.trim();
        displayItem(currentItem);
    };
    
    textarea.addEventListener('blur', saveEdit);
    textarea.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') displayItem(currentItem);
    });
}

// Edit item stat (various fields)
function editItemStat(field) {
    if (!currentItem) return;
    
    // Find the stat element for this field
    const statItems = document.querySelectorAll('.stat-item');
    let statEl = null;
    
    const fieldLabels = {
        'damage': 'Damage',
        'damageType': 'Damage Type',
        'ac': 'Armor Class',
        'acBonus': 'AC Bonus',
        'cost': 'Cost',
        'weight': 'Weight',
        'capacity': 'Capacity',
        'charges': 'Charges'
    };
    
    statItems.forEach(el => {
        const label = el.querySelector('.stat-label');
        if (label && label.textContent === fieldLabels[field]) {
            statEl = el.querySelector('.stat-value');
        }
    });
    
    if (!statEl) return;
    
    // For damage type, show a dropdown
    if (field === 'damageType') {
        const select = document.createElement('select');
        select.className = 'edit-select';
        const types = ['bludgeoning', 'piercing', 'slashing', 'acid', 'cold', 'fire', 'force', 'lightning', 'necrotic', 'poison', 'psychic', 'radiant', 'thunder'];
        types.forEach(t => {
            const option = document.createElement('option');
            option.value = t;
            option.textContent = capitalize(t);
            if (currentItem.damageType && currentItem.damageType.toLowerCase() === t) option.selected = true;
            select.appendChild(option);
        });
        
        statEl.innerHTML = '';
        statEl.appendChild(select);
        select.focus();
        
        const saveEdit = () => {
            currentItem.damageType = select.value;
            displayItem(currentItem);
        };
        
        select.addEventListener('change', saveEdit);
        select.addEventListener('blur', saveEdit);
        return;
    }
    
    // For other fields, use text input
    const input = document.createElement('input');
    input.type = 'text';
    
    const placeholders = {
        'damage': 'e.g., 1d8+1',
        'ac': 'e.g., 15',
        'acBonus': 'e.g., 2',
        'cost': 'e.g., 500 gp',
        'weight': 'e.g., 3',
        'capacity': 'e.g., 30 lb.',
        'charges': 'e.g., 7'
    };
    
    // Get current value, stripping any suffixes like " lb."
    let currentValue = currentItem[field] || '';
    if (field === 'weight' && currentValue) {
        currentValue = currentValue.toString();
    }
    
    input.value = currentValue;
    input.placeholder = placeholders[field] || '';
    input.className = 'edit-input edit-input-small';
    
    statEl.innerHTML = '';
    statEl.appendChild(input);
    input.focus();
    input.select();
    
    const saveEdit = () => {
        let newValue = input.value.trim();
        
        // Handle numeric fields
        if (field === 'weight' || field === 'ac' || field === 'acBonus' || field === 'charges') {
            const num = parseFloat(newValue);
            currentItem[field] = isNaN(num) ? null : num;
        } else {
            currentItem[field] = newValue || null;
        }
        
        displayItem(currentItem);
    };
    
    input.addEventListener('blur', saveEdit);
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') saveEdit();
        if (e.key === 'Escape') displayItem(currentItem);
    });
}

// Change item type and update fields accordingly
function changeItemType(newType) {
    if (!currentItem) return;
    
    const oldType = currentItem.type;
    currentItem.type = newType;
    
    // Initialize type-specific fields if switching to a new type
    if (newType === 'weapon' && oldType !== 'weapon') {
        currentItem.damage = currentItem.damage || '1d6';
        currentItem.damageType = currentItem.damageType || 'slashing';
    } else if ((newType === 'armor' || newType === 'shield') && oldType !== 'armor' && oldType !== 'shield') {
        currentItem.ac = currentItem.ac || (newType === 'shield' ? null : 12);
        if (newType === 'shield') {
            currentItem.acBonus = currentItem.acBonus || 2;
        }
    } else if (newType === 'container' && oldType !== 'container') {
        currentItem.capacity = currentItem.capacity || '';
    }
    
    // Clear type-specific fields when changing away from that type
    if (oldType === 'weapon' && newType !== 'weapon') {
        delete currentItem.damage;
        delete currentItem.damageType;
    }
    if ((oldType === 'armor' || oldType === 'shield') && newType !== 'armor' && newType !== 'shield') {
        delete currentItem.ac;
        delete currentItem.acBonus;
        delete currentItem.maxDex;
        delete currentItem.strengthReq;
    }
    if (oldType === 'container' && newType !== 'container') {
        delete currentItem.capacity;
    }
    
    displayItem(currentItem);
}

// ============================================
// PROPERTY EDITING FUNCTIONS
// ============================================

// Edit a property
function editProperty(index) {
    if (!currentItem || !currentItem.properties) return;
    
    const propertyTags = document.querySelectorAll('.property-tag.editable-property');
    const tagEl = propertyTags[index];
    if (!tagEl) return;
    
    const currentValue = currentItem.properties[index] || '';
    
    const input = document.createElement('input');
    input.type = 'text';
    input.value = currentValue;
    input.className = 'edit-input property-edit-input';
    input.placeholder = 'e.g., +1 weapon, versatile (1d10)';
    
    tagEl.innerHTML = '';
    tagEl.appendChild(input);
    tagEl.classList.remove('editable-property');
    input.focus();
    input.select();
    
    const saveEdit = () => {
        const newValue = input.value.trim();
        if (newValue) {
            currentItem.properties[index] = newValue;
        } else {
            // Remove empty property
            currentItem.properties.splice(index, 1);
        }
        displayItem(currentItem);
    };
    
    input.addEventListener('blur', saveEdit);
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') saveEdit();
        if (e.key === 'Escape') displayItem(currentItem);
    });
}

// Delete a property
function deleteProperty(index) {
    if (!currentItem || !currentItem.properties) return;
    
    currentItem.properties.splice(index, 1);
    displayItem(currentItem);
}

// Add a new property
function addProperty() {
    if (!currentItem) return;
    
    if (!currentItem.properties) {
        currentItem.properties = [];
    }
    
    // Add a placeholder and immediately edit it
    currentItem.properties.push('');
    displayItem(currentItem);
    
    // Immediately edit the new property
    setTimeout(() => {
        const newIndex = currentItem.properties.length - 1;
        editProperty(newIndex);
    }, 50);
}
