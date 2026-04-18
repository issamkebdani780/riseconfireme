const fs = require('fs');
const path = require('path');

function walk(dir) {
    let files = fs.readdirSync(dir);
    files.forEach(file => {
        let fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walk(fullPath);
        } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let changed = false;
            if (content.includes('ريز كونفيرم')) {
                content = content.replace(/ريز كونفيرم/g, 'riseconfireme');
                changed = true;
            }
            if (content.includes('RiseConfirm')) {
                content = content.replace(/RiseConfirm/g, 'riseconfireme');
                changed = true;
            }
            if (changed) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Updated ${fullPath}`);
            }
        }
    });
}

walk('c:/Users/issam/Desktop/rise/riseconfireme/src');
console.log('Replacement complete.');
