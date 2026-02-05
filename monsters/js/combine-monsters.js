// Script to combine all monster data files into one
const fs = require('fs');
const path = require('path');

const jsDir = __dirname;
const outputFile = path.join(jsDir, 'monsters-all.js');

// Files to exclude (not monster data)
const excludeFiles = [
    'monsters-index.js',
    'monsters-categorization.js', 
    'monsters-descriptions.js',
    'combine-monsters.js',
    'monsters-all.js'
];

// Get all monster data files
const files = fs.readdirSync(jsDir)
    .filter(f => f.startsWith('monsters-') && f.endsWith('.js') && !excludeFiles.includes(f))
    .sort();

console.log(`Found ${files.length} monster data files to combine`);

// Read each file and extract the monster data
let allMonsters = {};

for (const file of files) {
    const filePath = path.join(jsDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Find the variable assignment (const SOMETHING = { ... })
    const match = content.match(/(?:const|var|let)\s+(\w+)\s*=\s*\{/);
    if (match) {
        try {
            // Create a sandbox to evaluate the file
            const sandbox = {};
            const script = content + `\nmodule.exports = ${match[1]};`;
            
            // Write to temp file and require it
            const tempFile = path.join(jsDir, '_temp_monster.js');
            fs.writeFileSync(tempFile, script);
            
            try {
                delete require.cache[require.resolve(tempFile)];
                const data = require(tempFile);
                
                if (data && typeof data === 'object') {
                    const count = Object.keys(data).length;
                    console.log(`  ${file}: ${count} monsters (${match[1]})`);
                    Object.assign(allMonsters, data);
                }
            } catch (e) {
                console.log(`  ${file}: Error loading - ${e.message}`);
            }
            
            fs.unlinkSync(tempFile);
        } catch (e) {
            console.log(`  ${file}: Parse error - ${e.message}`);
        }
    } else {
        console.log(`  ${file}: No monster object found`);
    }
}

// Write the combined file
const totalMonsters = Object.keys(allMonsters).length;
console.log(`\nTotal monsters: ${totalMonsters}`);

const output = `// D&D 5E Monster Library - Combined Monster Data
// Auto-generated - Do not edit manually
// Contains ${totalMonsters} monsters from all source books

const allMonsters = ${JSON.stringify(allMonsters, null, 2)};

console.log('Monster library loaded: ' + Object.keys(allMonsters).length + ' creatures available');
`;

fs.writeFileSync(outputFile, output);
console.log(`\nWrote combined file: ${outputFile}`);
