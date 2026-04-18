const fs = require('fs');
const glob = require('glob');

const targetPath = 'c:/Users/issam/Desktop/rise/riseconfireme/src/**/*.{js,jsx}';
const files = glob.sync(targetPath);

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;
    
    // Replace Arabic transliteration again (just in case)
    if (content.includes('riseconfireme')) {
        content = content.replace(/riseconfireme/g, 'riseconfireme');
        changed = true;
    }
    
    // Replace English brand name
    if (content.includes('riseconfireme')) {
        content = content.replace(/riseconfireme/g, 'riseconfireme');
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated ${file}`);
    }
});
