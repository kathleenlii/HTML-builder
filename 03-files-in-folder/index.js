const fs = require('fs');
const path = require('path');

const secretFolder = path.join(__dirname, 'secret-folder');

fs.readdir(secretFolder, { withFileTypes: true }, (err, data) => {
    if (err) throw err
    for (file of data) {

        if (file.isFile()) {

            const filePath = path.join(secretFolder, file.name);
            const extension = path.extname(filePath).slice(1);
            const name = path.basename(filePath, extension);

            fs.stat(filePath, (err, stats) => {

                if (err) throw err
                const size = (stats.size / 1024).toFixed(3);
                console.log(`${name} - ${extension} - ${size}kb`);

            });
        }}
});

