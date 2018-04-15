
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
    console.log("Im in the model", data);
    return db.one(`SELECT FROM like_table WHERE like_sent=$[like_sent] AND like_received=$[like_received];`, data)
  },
  newMatch(data){
    // console.log("Going into the match table in the db as a new match ", data);
    return db.one(`INSERT INTO match_table (user_one, user_two) VALUES (
      $[user_one],
      $[user_two]
    ) RETURNING *;`, data)
  },
  newMessage(data){
    // console.log("Going to insert into the db as a new initiator message", data);
    return db.one(`INSERT INTO message_table (sent_user_id, received_user_id, message, initiator) VALUES (
      $[sent_user_id],
      $[received_user_id],
      $[message],
      $[initiator]
    ) RETURNING *;`, data)
  },
  getMatches(data){
    // console.log(`In the model, getting all of the matches for the user ${data}`);
    return db.many(`SELECT *
    FROM match_table
    JOIN user_information
    ON user_information.user_id=match_table.user_one
    OR
    user_information.user_id=match_table.user_two
    JOIN
    user_table
    ON match_table.user_one=user_table.id
    OR
    match_table.user_two=user_table.id
    WHERE
    match_table.user_one=$1
    OR
    match_table.user_two=$1;`, data)
  },
  getMessages(data){
    // console.log(`I am in the model for get messages ----> `, data);
    return db.many(`SELECT * FROM message_table
                    WHERE sent_user_id=$[sent_user_id]
                    AND received_user_id=$[received_user_id]
                    OR sent_user_id=$[received_user_id]
                    AND received_user_id=$[sent_user_id]
                    ORDER BY id;`, data)
  },
  newMessage(data){
    // console.log(`In the model, here is the new message that I am trying to insert ---> `, data);
    return db.one(`INSERT INTO message_table (sent_user_id, received_user_id, message) VALUES (
      $[sent_user_id],
      $[received_user_id],
      $[message]
    ) RETURNING *;`, data)
  }
}
