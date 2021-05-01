const path = require('path');
const eslintFile = path.join(__dirname,'.eslintrc.js');

const eslintrc = require(eslintFile);

module.exports = eslintrc;