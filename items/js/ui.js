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
                <h1 class="item-name ${rarityClass}">${item.name}</h1>
                <p class="item-basics">
                    ${categoryName}${item.subtype ? ` (${capitalize(item.subtype)})` : ''}, 
                    <span class="${rarityClass}">${rarityName}</span>
                </p>
            </div>
            
            <div class="stat-block-divider"></div>
            
            ${renderItemStats(item)}
            
            ${renderItemProperties(item)}
            
            ${attunementText ? `
                <div class="attunement-badge">
                    <i class="fa-solid fa-link"></i>
                    ${attunementText}
                </div>
            ` : ''}
            
            ${item.charges ? renderCharges(item) : ''}
            
            <div class="item-description">
                ${item.description || 'No description available.'}
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
            ` : ''}
            
            ${item.source ? `
                <p style="margin-top: 15px; color: #6c757d; font-size: 0.9em;">
                    <strong>Source:</strong> ${getSourceName(item.source)}
                </p>
            ` : ''}
        </div>
    `;
    
    resultEl.innerHTML = html;
}

// Render item statistics
function renderItemStats(item) {
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
            stats.push({ label: 'Armor Class', value: acText });
        }
        if (item.acBonus) {
            stats.push({ label: 'AC Bonus', value: `+${item.acBonus}` });
        }
        if (item.strengthReq) {
            stats.push({ label: 'Strength', value: `${item.strengthReq} required` });
        }
    }
    
    // Common stats
    if (item.cost) {
        stats.push({ label: 'Cost', value: item.cost });
    }
    
    if (item.weight) {
        stats.push({ label: 'Weight', value: `${item.weight} lb.` });
    }
    
    // Weapon stats
    if (item.damage) {
        stats.push({ label: 'Damage', value: item.damage });
    }
    
    if (item.damageType) {
        stats.push({ label: 'Damage Type', value: capitalize(item.damageType) });
    }
    
    // Container stats
    if (item.capacity) {
        stats.push({ label: 'Capacity', value: item.capacity });
    }
    
    // Magic item stats
    if (item.charges) {
        stats.push({ label: 'Charges', value: item.charges });
    }
    
    if (stats.length === 0) return '';
    
    return `
        <div class="item-stats-row">
            ${stats.map(stat => `
                <div class="stat-item">
                    <span class="stat-label">${stat.label}</span>
                    <span class="stat-value">${stat.value}</span>
                </div>
            `).join('')}
        </div>
        <div class="stat-block-divider"></div>
    `;
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
