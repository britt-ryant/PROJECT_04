

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
    return db.one(`SELECT * FROM user_table
      JOIN
      user_information
      ON
      user_table.id=user_information.user_id
      WHERE username=$[username]
      AND password=$[password];`, data)
  },
  getDetails(id){
    return db.one(`SELECT * FROM user_information WHERE user_id=$1`, id)
  },
  updateInfo(data){
    console.log(data);
    return db.one(`UPDATE user_information
      SET
      gender=$[gender],
      seeking=$[seeking],
      description=$[description]
      WHERE
      user_id=$[user_id]
      RETURNING *;`,
    data)
  },
  insertInfo(data){
    return db.one(`INSERT INTO user_information (user_id, gender, seeking, description) VALUES (
      $[user_id],
      $[gender],
      $[seeking],
      $[description]
    )RETURNING *;`, data)
  },
  remove(id){
    console.log(id);
    return db.none(`DELETE FROM user_information WHERE user_id=$1`, id)
  },
  delete(id){
    console.log(id);
    return db.none('DELETE FROM user_table WHERE id=$1', id)
  }
}
