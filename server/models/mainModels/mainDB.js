
//require the connection to the db
const db = require(`../../config/connection`)

module.exports = {
  // getAll(){
  //   return db.many(`SELECT * FROM test_table;`)
  // },
  getAll(data){
    console.log("Im in the model", data);
    return db.many(`SELECT * FROM user_information
      JOIN
      user_table
      ON
      user_table.id = user_information.user_id
      WHERE
      gender=$[gender]`, data)
  }
}
