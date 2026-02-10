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
            <div class="item-header">
                <h1 class="item-name ${rarityClass} editable" onclick="editItemName()" title="Click to edit">${item.name}</h1>
                <p class="item-basics">
                    <span class="editable-inline" onclick="editItemType()" title="Click to edit">${categoryName}${item.subtype ? ` (${capitalize(item.subtype)})` : ''}</span>, 
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

// Render item statistics with editable cost
function renderEditableItemStats(item) {
    let stats = [];
    
    // Armor stats
    if (item.type === 'armor' || item.type === 'shield') {
        if (item.ac) {
            let acText = item.ac.toString();
            if (item.maxDex !== undefined && item.maxDex !== null) {
                if (item.maxDex === 0) {
                    acText = item.ac.toString();
                } else {
                    acText = `${item.ac} + Dex (max ${item.maxDex})`;
                }
            } else if (item.subtype === 'light') {
                acText = `${item.ac} + Dex`;
            }
            stats.push({ label: 'Armor Class', value: acText, editable: false });
        }
        if (item.acBonus) {
            stats.push({ label: 'AC Bonus', value: `+${item.acBonus}`, editable: false });
        }
        if (item.strengthReq) {
            stats.push({ label: 'Strength', value: `${item.strengthReq} required`, editable: false });
        }
    }
    
    // Common stats - cost is editable
    if (item.cost || item.rarity !== 'mundane') {
        stats.push({ label: 'Cost', value: item.cost || 'Unknown', editable: true, field: 'cost' });
    }
    
    if (item.weight) {
        stats.push({ label: 'Weight', value: `${item.weight} lb.`, editable: false });
    }
    
    // Weapon stats
    if (item.damage) {
        stats.push({ label: 'Damage', value: item.damage, editable: false });
    }
    
    if (item.damageType) {
        stats.push({ label: 'Damage Type', value: capitalize(item.damageType), editable: false });
    }
    
    // Container stats
    if (item.capacity) {
        stats.push({ label: 'Capacity', value: item.capacity, editable: false });
    }
    
    // Magic item stats
    if (item.charges) {
        stats.push({ label: 'Charges', value: item.charges, editable: false });
    }
    
    if (stats.length === 0) return '';
    
    return `
        <div class="item-stats-row">
            ${stats.map(stat => `
                <div class="stat-item ${stat.editable ? 'editable-stat' : ''}" ${stat.editable ? `onclick="editItemStat('${stat.field}')" title="Click to edit"` : ''}>
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
    if (!item.properties || item.properties.length === 0) return '';
    
    return `
        <div class="item-properties">
            ${item.properties.map(prop => `
                <span class="property-tag">${capitalize(prop)}</span>
            `).join('')}
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

// Edit item type
function editItemType() {
    if (!currentItem) return;
    
    const typeEl = document.querySelector('.item-basics .editable-inline');
    if (!typeEl) return;
    
    const types = [
        { value: 'weapon', label: 'Weapon' },
        { value: 'armor', label: 'Armor' },
        { value: 'shield', label: 'Shield' },
        { value: 'potion', label: 'Potion' },
        { value: 'ring', label: 'Ring' },
        { value: 'rod', label: 'Rod' },
        { value: 'scroll', label: 'Scroll' },
        { value: 'staff', label: 'Staff' },
        { value: 'wand', label: 'Wand' },
        { value: 'wondrous-item', label: 'Wondrous Item' },
        { value: 'adventuring-gear', label: 'Adventuring Gear' },
        { value: 'tool', label: 'Tool' },
        { value: 'ammunition', label: 'Ammunition' }
    ];
    
    const select = document.createElement('select');
    select.className = 'edit-select';
    types.forEach(t => {
        const option = document.createElement('option');
        option.value = t.value;
        option.textContent = t.label;
        if (t.value === currentItem.type) option.selected = true;
        select.appendChild(option);
    });
    
    typeEl.innerHTML = '';
    typeEl.appendChild(select);
    select.focus();
    
    const saveEdit = () => {
        currentItem.type = select.value;
        displayItem(currentItem);
    };
    
    select.addEventListener('change', saveEdit);
    select.addEventListener('blur', saveEdit);
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

// Edit item stat (cost)
function editItemStat(field) {
    if (!currentItem || field !== 'cost') return;
    
    const statEl = document.querySelector('.editable-stat .stat-value');
    if (!statEl) return;
    
    const input = document.createElement('input');
    input.type = 'text';
    input.value = currentItem.cost || '';
    input.placeholder = 'e.g., 500 gp';
    input.className = 'edit-input edit-input-small';
    
    statEl.innerHTML = '';
    statEl.appendChild(input);
    input.focus();
    input.select();
    
    const saveEdit = () => {
        currentItem.cost = input.value.trim();
        displayItem(currentItem);
    };
    
    input.addEventListener('blur', saveEdit);
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') saveEdit();
        if (e.key === 'Escape') displayItem(currentItem);
    });
}
