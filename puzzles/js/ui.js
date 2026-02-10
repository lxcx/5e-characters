// D&D 5E Puzzle & Trap Generator - UI Functions

// Display a generated trap
function displayTrap(trap) {
    const resultEl = document.getElementById('result');
    
    const categoryInfo = trapCategories[trap.category] || trapCategories.mechanical;
    const dangerInfo = trapDangerLevels[trap.danger] || trapDangerLevels.dangerous;
    
    const dangerColors = {
        setback: '#f39c12',
        dangerous: '#e74c3c',
        deadly: '#8e44ad'
    };
    
    let html = `
        <div class="trap-card">
            <div class="trap-header">
                <div class="trap-title-section">
                    <h1 class="trap-name"><i class="fa-solid ${categoryInfo.icon}"></i> ${trap.name}</h1>
                    <div class="trap-tags">
                        <span class="tag tag-category">${categoryInfo.name}</span>
                        <span class="tag tag-danger" style="background: ${dangerColors[trap.danger]}">${dangerInfo.name}</span>
                        ${trap.source ? `<span class="tag tag-source">${trap.source}</span>` : ''}
                    </div>
                </div>
            </div>
            
            <div class="stat-block-divider"></div>
            
            <div class="trap-stats">
                <div class="stat-row">
                    <span class="stat-label"><i class="fa-solid fa-location-dot"></i> Location</span>
                    <span class="stat-value">${trap.location}</span>
                </div>
                <div class="stat-row">
                    <span class="stat-label"><i class="fa-solid fa-bolt"></i> Trigger</span>
                    <span class="stat-value">${trap.trigger}</span>
                </div>
            </div>
            
            <div class="stat-block-divider"></div>
            
            <div class="trap-section">
                <h3><i class="fa-solid fa-explosion"></i> Effect</h3>
                <p>${trap.effect}</p>
                ${trap.complexPhases ? renderComplexPhases(trap.complexPhases) : ''}
            </div>
            
            <div class="trap-section damage-section">
                <h3><i class="fa-solid fa-heart-crack"></i> Damage & Saves</h3>
                <div class="damage-grid">
                    <div class="damage-item">
                        <span class="damage-label">Damage</span>
                        <span class="damage-value">${trap.damage}</span>
                    </div>
                    ${trap.secondaryDamage ? `
                    <div class="damage-item">
                        <span class="damage-label">Secondary</span>
                        <span class="damage-value">${trap.secondaryDamage}</span>
                    </div>
                    ` : ''}
                    <div class="damage-item">
                        <span class="damage-label">Save</span>
                        <span class="damage-value">DC ${trap.save.dc} ${trap.save.type}</span>
                    </div>
                </div>
            </div>
            
            <div class="stat-block-divider"></div>
            
            <div class="trap-section">
                <h3><i class="fa-solid fa-eye"></i> Detection</h3>
                <p><strong>DC ${trap.detection.dc} ${trap.detection.skill}:</strong> ${trap.detection.clue}</p>
            </div>
            
            <div class="trap-section">
                <h3><i class="fa-solid fa-screwdriver-wrench"></i> Disabling</h3>
                <p><strong>DC ${trap.disarm.dc} ${trap.disarm.skill}:</strong> ${trap.disarm.method}</p>
            </div>
            
            <div class="trap-section">
                <h3><i class="fa-solid fa-shield"></i> Countermeasures</h3>
                <ul class="countermeasures-list">
                    ${trap.countermeasures.map(c => `<li>${c}</li>`).join('')}
                </ul>
            </div>
            
            <div class="stat-block-divider"></div>
            
            <div class="trap-section flavor-section">
                <h3><i class="fa-solid fa-book"></i> Context</h3>
                <p><em>This trap was placed here ${trap.reason.charAt(0).toLowerCase() + trap.reason.slice(1)}.</em></p>
            </div>
        </div>
    `;
    
    resultEl.innerHTML = html;
}

// Render complex trap phases
function renderComplexPhases(phases) {
    let html = '<div class="complex-phases"><h4>Trap Phases</h4><ul>';
    
    for (const phase of phases) {
        if (phase.initiative !== undefined) {
            html += `<li><strong>Initiative ${phase.initiative}:</strong> ${phase.effect}</li>`;
        } else if (phase.round !== undefined) {
            html += `<li><strong>Round ${phase.round}:</strong> ${phase.effect}</li>`;
        }
    }
    
    html += '</ul></div>';
    return html;
}

// Display a generated puzzle
function displayPuzzle(puzzle) {
    const resultEl = document.getElementById('result');
    
    const categoryInfo = puzzleCategories[puzzle.category] || puzzleCategories.logic;
    const difficultyInfo = puzzleDifficulty[puzzle.difficulty] || puzzleDifficulty.medium;
    
    const difficultyColors = {
        easy: '#27ae60',
        medium: '#f39c12',
        hard: '#e74c3c'
    };
    
    let html = `
        <div class="puzzle-card">
            <div class="puzzle-header">
                <div class="puzzle-title-section">
                    <h1 class="puzzle-name"><i class="fa-solid ${categoryInfo.icon}"></i> ${puzzle.name}</h1>
                    <div class="puzzle-tags">
                        <span class="tag tag-category">${categoryInfo.name}</span>
                        <span class="tag tag-difficulty" style="background: ${difficultyColors[puzzle.difficulty]}">${difficultyInfo.name}</span>
                        ${puzzle.source ? `<span class="tag tag-source">${puzzle.source}</span>` : ''}
                    </div>
                </div>
            </div>
            
            <div class="stat-block-divider"></div>
            
            <div class="puzzle-stats">
                <div class="stat-row">
                    <span class="stat-label"><i class="fa-solid fa-location-dot"></i> Location</span>
                    <span class="stat-value">${puzzle.location}</span>
                </div>
                <div class="stat-row">
                    <span class="stat-label"><i class="fa-solid fa-scroll"></i> Purpose</span>
                    <span class="stat-value">${puzzle.reason}</span>
                </div>
            </div>
            
            <div class="stat-block-divider"></div>
            
            <div class="puzzle-section">
                <h3><i class="fa-solid fa-circle-info"></i> Description</h3>
                <p>${puzzle.description}</p>
            </div>
            
            <div class="puzzle-section setup-section">
                <h3><i class="fa-solid fa-dungeon"></i> Setup</h3>
                <div class="setup-box">
                    <p>${puzzle.setup.replace(/\n/g, '<br>')}</p>
                </div>
            </div>
            
            <div class="stat-block-divider"></div>
            
            <div class="puzzle-section solution-section collapsed" id="solutionSection">
                <h3 onclick="toggleSolution()" class="clickable">
                    <i class="fa-solid fa-key"></i> Solution 
                    <span class="spoiler-warning">(Click to reveal - SPOILER)</span>
                </h3>
                <div class="solution-content hidden" id="solutionContent">
                    <p>${puzzle.solution}</p>
                </div>
            </div>
            
            <div class="puzzle-section hints-section">
                <h3><i class="fa-solid fa-lightbulb"></i> Hints for Players</h3>
                <div class="hints-list">
                    ${puzzle.hints.map((hint, i) => `
                        <div class="hint-item collapsed" id="hint-${i}">
                            <button class="hint-reveal-btn" onclick="revealHint(${i})">
                                <i class="fa-solid fa-eye"></i> Reveal Hint ${i + 1}
                            </button>
                            <p class="hint-text hidden">${hint}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="stat-block-divider"></div>
            
            <div class="puzzle-section">
                <h3><i class="fa-solid fa-trophy"></i> Reward</h3>
                <p>${puzzle.reward}</p>
            </div>
            
            <div class="puzzle-section consequence-section">
                <h3><i class="fa-solid fa-skull"></i> Consequence of Failure</h3>
                <p>${puzzle.consequence}</p>
            </div>
            
            ${puzzle.raiseStakes ? `
            <div class="puzzle-section raise-stakes-section" style="background: rgba(142, 68, 173, 0.1); padding: 15px; border-radius: 8px; margin-top: 15px;">
                <h3><i class="fa-solid fa-fire"></i> Raise the Stakes (Optional)</h3>
                <p>${puzzle.raiseStakes}</p>
            </div>
            ` : ''}
        </div>
    `;
    
    resultEl.innerHTML = html;
}

// Toggle solution visibility
function toggleSolution() {
    const content = document.getElementById('solutionContent');
    const section = document.getElementById('solutionSection');
    
    content.classList.toggle('hidden');
    section.classList.toggle('collapsed');
}

// Reveal a specific hint
function revealHint(index) {
    const hintItem = document.getElementById(`hint-${index}`);
    const hintText = hintItem.querySelector('.hint-text');
    const btn = hintItem.querySelector('.hint-reveal-btn');
    
    hintText.classList.remove('hidden');
    btn.style.display = 'none';
    hintItem.classList.remove('collapsed');
}

// Utility functions
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Initialize page with content counts
document.addEventListener('DOMContentLoaded', function() {
    // Update content counts
    if (typeof trapTemplates !== 'undefined') {
        const trapCountEl = document.getElementById('trapCount');
        if (trapCountEl) trapCountEl.textContent = trapTemplates.length;
    }
    if (typeof puzzleTemplates !== 'undefined') {
        const puzzleCountEl = document.getElementById('puzzleCount');
        if (puzzleCountEl) puzzleCountEl.textContent = puzzleTemplates.length;
    }
});
