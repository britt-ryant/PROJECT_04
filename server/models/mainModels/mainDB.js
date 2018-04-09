
//require the connection to the db
const db = require(`../../config/connection`)

module.exports = {
  getAll(){
    return db.many(`SELECT * FROM test_table;`)
  }
}
