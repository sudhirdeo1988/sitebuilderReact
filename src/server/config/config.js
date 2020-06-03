// -- Setting of environment variable --
// -- Add 'dotenv' node package
// -- Execute dotenv.config();

// create .env file in root directory
// -- Add .env filr in .gitignore
const dotenv = require('dotenv');
dotenv.config();


// -- Export variabled to use across
module.exports = {
    port: process.env.PORT,
    mySecret: process.env.MY_SECRET
};