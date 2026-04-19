const fs = require('fs');
const glob = require('glob');

const targetPath = 'c:/Users/issam/Desktop/rise/RiseConfirm/src/**/*.{js,jsx}';
const files = glob.sync(targetPath);

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;
    
    // Replace Arabic transliteration again (just in case)
    if (content.includes('RiseConfirm')) {
        content = content.replace(/RiseConfirm/g, 'RiseConfirm');
        changed = true;
    }
    
    // Replace English brand name
    if (content.includes('RiseConfirm')) {
        content = content.replace(/RiseConfirm/g, 'RiseConfirm');
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated ${file}`);
    }
});
