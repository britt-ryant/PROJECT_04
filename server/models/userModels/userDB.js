

const db = require('../../config/connection');

module.exports = {
  getAll(){
    return db.many(`SELECT * FROM user_table;`)
  },
  findUser(username){
    console.log(username);
    return db.one(`SELECT * FROM user_table WHERE username=$1;`, username)
  },
  createUser(data){
    console.log("new user being created", data);
    return db.one(`INSERT INTO user_table (username, password) VALUES
    (
      $[username],
      $[password]
    ) RETURNING *;`, data)
  },
  getUser(data){
    console.log('in get user', data)
    return db.one(`SELECT * FROM user_table WHERE username=$[username] AND password=$[password];`, data)
  }
}
