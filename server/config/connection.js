
//require dependancies i.e. pg promise and the config file
const pgp = require(`pg-promise`)();
const dbConfig = require(`../config/dbConfig`)

module.exports = pgp(dbConfig);
