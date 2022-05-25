const fs = require('fs');
const path = require('path');

const style = path.join(__dirname, 'styles');

fs.writeFile(path.join(__dirname, 'project-dist', 'bundle.css'), '', 'utf-8', (err, data) => {
});

fs.readdir(style, (err, data) => {
    data.forEach(i => {
        if (path.extname(i) === '.css') {
            fs.readFile(path.join(style, i), (err, data) => {
                fs.appendFile(path.join(__dirname, 'project-dist', 'bundle.css'), data, 'utf-8', () => { })
            });
        }
    });
});