// D&D 5E Item Generator - PDF Export

function exportItemToPDF() {
    if (!currentItem) {
        alert('No item to export. Generate or select an item first!');
        return;
    }
    
    // Create a new window for printing
    const printWindow = window.open('', '_blank');
    const item = currentItem;
    
    // Get item image if it exists
    const itemImg = document.getElementById('itemImage');
    const hasImage = itemImg && itemImg.style.display !== 'none' && itemImg.src;
    
    // Get rarity info
    const rarityName = getRarityName(item.rarity);
    const rarityColor = getRarityColor(item.rarity);
    const categoryName = getCategoryName(item.type);
    const attunementText = getAttunementText(item.attunement);
    
    const html = `
<!DOCTYPE html>
<html>
<head>
    <title>${item.name} - D&D 5E Item</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital@0;1&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Libre Baskerville', Georgia, serif;
            font-size: 11pt;
            line-height: 1.5;
            color: #000;
            padding: 20px;
            max-width: 800px;
            margin: 0 auto;
        }
        
        .item-block {
            background: #fdf1dc;
            border: 2px solid #c9a227;
            border-radius: 8px;
            padding: 20px;
            ${item.cursed ? 'border-color: #8b0000; background: linear-gradient(135deg, #fdf1dc 0%, #fee2e2 100%);' : ''}
        }
        
        .item-name {
            font-family: 'Libre Baskerville', Georgia, serif;
            font-size: 24pt;
            color: ${rarityColor};
            margin-bottom: 0;
            font-variant: small-caps;
            letter-spacing: 1px;
        }
        
        .item-type {
            font-style: italic;
            color: #58180d;
            margin-bottom: 10px;
            font-size: 12pt;
        }
        
        .rarity-badge {
            display: inline-block;
            color: ${rarityColor};
            font-weight: bold;
        }
        
        .divider {
            height: 2px;
            background: linear-gradient(to right, #c9a227, #fdf1dc, #c9a227);
            margin: 12px 0;
        }
        
        .stat-row {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            margin: 10px 0;
        }
        
        .stat-item {
            text-align: center;
        }
        
        .stat-label {
            font-weight: bold;
            color: #58180d;
            font-size: 10pt;
            display: block;
        }
        
        .stat-value {
            font-size: 12pt;
        }
        
        .properties {
            margin: 10px 0;
        }
        
        .property-tag {
            display: inline-block;
            background: rgba(201, 162, 39, 0.2);
            border: 1px solid #c9a227;
            border-radius: 4px;
            padding: 2px 8px;
            margin: 2px;
            font-size: 9pt;
        }
        
        .attunement {
            font-style: italic;
            color: #58180d;
            margin: 10px 0;
            padding: 8px;
            background: rgba(88, 24, 13, 0.1);
            border-radius: 4px;
        }
        
        .description {
            margin-top: 15px;
            text-align: justify;
        }
        
        .description p {
            margin-bottom: 10px;
        }
        
        .charges-section {
            margin-top: 15px;
            padding: 10px;
            background: rgba(201, 162, 39, 0.1);
            border-radius: 4px;
        }
        
        .charges-title {
            font-weight: bold;
            color: #58180d;
            margin-bottom: 5px;
        }
        
        .cursed-warning {
            background: rgba(139, 0, 0, 0.1);
            color: #8b0000;
            padding: 10px;
            border-radius: 4px;
            margin-top: 15px;
            font-weight: bold;
        }
        
        .curse-description {
            margin-top: 10px;
            padding: 10px;
            background: rgba(139, 0, 0, 0.1);
            border-left: 3px solid #8b0000;
            border-radius: 4px;
            font-style: italic;
        }
        
        .item-image-section {
            text-align: center;
            margin: 15px 0;
        }
        
        .item-image {
            max-width: 200px;
            max-height: 200px;
            border: 2px solid #c9a227;
            border-radius: 8px;
        }
        
        .source {
            margin-top: 15px;
            color: #6c757d;
            font-size: 10pt;
            text-align: right;
        }
        
        @media print {
            body {
                padding: 0;
            }
            .item-block {
                border: 1px solid #c9a227;
                box-shadow: none;
            }
        }
    </style>
</head>
<body>
    <div class="item-block">
        ${hasImage ? `<div class="item-image-section"><img src="${itemImg.src}" class="item-image" alt="${item.name}"></div>` : ''}
        
        <h1 class="item-name">${item.name}</h1>
        <p class="item-type">
            ${categoryName}${item.subtype ? ` (${capitalize(item.subtype)})` : ''}, 
            <span class="rarity-badge">${rarityName}</span>
        </p>
        
        <div class="divider"></div>
        
        ${renderPDFStats(item)}
        
        ${renderPDFProperties(item)}
        
        ${attunementText ? `<div class="attunement">🔗 ${attunementText}</div>` : ''}
        
        ${item.charges ? renderPDFCharges(item) : ''}
        
        <div class="description">
            ${formatDescription(item.description || 'No description available.')}
        </div>
        
        ${item.cursed ? `
            <div class="cursed-warning">☠️ This item is cursed</div>
            ${item.curseDescription ? `<div class="curse-description"><strong>Curse Effect:</strong> ${item.curseDescription}</div>` : ''}
        ` : ''}
        
        ${item.source ? `<div class="source"><strong>Source:</strong> ${getSourceName(item.source)}</div>` : ''}
    </div>
    
    <script>
        window.onload = function() {
            window.print();
        }
    </script>
</body>
</html>
    `;
    
    printWindow.document.write(html);
    printWindow.document.close();
}

function renderPDFStats(item) {
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
            stats.push({ label: 'Strength Required', value: item.strengthReq });
        }
    }
    
    // Weapon stats
    if (item.damage) {
        stats.push({ label: 'Damage', value: item.damage });
    }
    if (item.damageType) {
        stats.push({ label: 'Damage Type', value: capitalize(item.damageType) });
    }
    
    // Common stats
    if (item.cost) {
        stats.push({ label: 'Cost', value: item.cost });
    }
    if (item.weight) {
        stats.push({ label: 'Weight', value: `${item.weight} lb.` });
    }
    
    // Container stats
    if (item.capacity) {
        stats.push({ label: 'Capacity', value: item.capacity });
    }
    
    if (stats.length === 0) return '';
    
    return `
        <div class="stat-row">
            ${stats.map(stat => `
                <div class="stat-item">
                    <span class="stat-label">${stat.label}</span>
                    <span class="stat-value">${stat.value}</span>
                </div>
            `).join('')}
        </div>
        <div class="divider"></div>
    `;
}

function renderPDFProperties(item) {
    if (!item.properties || item.properties.length === 0) return '';
    
    return `
        <div class="properties">
            <strong>Properties:</strong>
            ${item.properties.map(prop => `<span class="property-tag">${capitalize(prop)}</span>`).join(' ')}
        </div>
    `;
}

function renderPDFCharges(item) {
    return `
        <div class="charges-section">
            <div class="charges-title">⚡ Charges: ${item.charges}</div>
            ${item.recharge ? `<p style="font-size: 10pt; margin-top: 5px;">${item.recharge}</p>` : ''}
        </div>
    `;
}

function formatDescription(desc) {
    // Convert line breaks to paragraphs and handle formatting
    if (!desc) return '<p>No description available.</p>';
    
    // Split by double line breaks for paragraphs
    const paragraphs = desc.split(/\n\n|\r\n\r\n/);
    return paragraphs.map(p => `<p>${p.trim()}</p>`).join('');
}

function getRarityColor(rarity) {
    const colors = {
        'mundane': '#6c757d',
        'common': '#1a1a1a',
        'uncommon': '#1e7e34',
        'rare': '#004085',
        'very-rare': '#6f42c1',
        'legendary': '#c9a227',
        'artifact': '#dc3545'
    };
    return colors[rarity] || '#1a1a1a';
}
