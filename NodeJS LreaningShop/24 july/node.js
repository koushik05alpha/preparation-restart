// ========== setup & run =============

// check version
// node -v     

// create package.json
// npm init -y

// run file 
// node fileName.js

// ========== Core Modules =============

const fs = require('fs')
const path = require('path')
const os = require('os')


// reading file
fs.readFile('file.txt', 'utf8', (error, data) => {
    console.log(data);
})

// writing file
fs.watchFile('file.txt', 'hello node', () => {})