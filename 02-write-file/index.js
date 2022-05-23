const fs = require('fs');
const path = require('path');
const { stdin, stdout } = process;


const writeStream = fs.createWriteStream(path.join(__dirname, 'text.txt'));

stdout.write('Enter the text:');

stdin.on('data', data => {
    if (!data.toString().includes('exit')) {
        writeStream.write(data);
    } else {
        stdout.write('I will see you soon! ')  
        process.exit()
    }
});

process.on('SIGINT',()=>exit());