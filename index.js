#!/usr/bin/env node
const fs = require('fs');

// Read in the token in the .github-token file
var token = fs.readFileSync('.github-token', 'utf8').trim();
console.log({token})

var args = process.argv.slice(2);
console.log({ args });