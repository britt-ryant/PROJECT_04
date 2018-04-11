
//require the connection to the db
const db = require(`../../config/connection`)

module.exports = {
  // getAll(){
  //   return db.many(`SELECT * FROM test_table;`)
  // },
  getAll(data){
    return db.many(`SELECT * FROM user_information
      JOIN
      user_table
      ON
      user_table.id = user_information.user_id
      WHERE
      gender=$[gender]`, data)
  },
  like(data){
    return db.one(`INSERT INTO like_table (like_sent, like_received) VALUES (
      $[like_sent],
      $[like_received]
    ) RETURNING *;`, data)
  },
  check(data){
    // console.log("Im in the model", data);
    return db.one(`SELECT FROM like_table WHERE like_sent=$[like_sent] AND like_received=$[like_received];`, data)
  },
  newMatch(data){
    console.log("Going into the match table in the db as a new match ", data);
    return db.one(`INSERT INTO match_table (user_one, user_two) VALUES (
      $[user_one],
      $[user_two]
    ) RETURNING *;`, data)
  }
}
