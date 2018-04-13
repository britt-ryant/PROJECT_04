//require the database

mainDB = require('../../models/mainModels/mainDB');

module.exports = {
  index(req, res, next){
    // console.log("I was called here");
    mainDB.getAll()
    .then(response => {
      // console.log(response);
      res.json({
        message: "ok",
        data: response
      })
    })
    .catch(error => {
      console.log('You forgot how to do this you idiot!', error);
    })
  },
  browseAll(req, res, next){
    mainDB.getAll(req.body)
    .then(results => {
      // console.log("I got the results!!!", results);
      res.json({
        message: "got all of the users",
        data: results
      })
    })
    .catch(err => {
      console.log('I am the error in the get all function in the mainController', err);
    })
  },
  submitLike(req, res, next){
    mainDB.like(req.body)
    .then(result => {
      res.json({
        message: "Like was added to the like table",
        data: result
      })
    })
    .catch(err => {
      console.log("oops, something went wrong here!", err);
    })
  },
  checkForMatch(req, res, next){
    mainDB.check(req.body)
    .then(result => {
      console.log(`I am checking for matches!`, result);
      res.json({
        message: "Its a Match!!",
        data: 1
      })
    })
    .catch(err => {
      console.log(`I am checking for errors`, err);
      res.json({
        message: "no matches found",
        data: 0
      })
    })
  },
  createMatch(req, res, next){
    // console.log("I am the req.body in the controller for creating a new match", req.body);
    mainDB.newMatch(req.body)
    .then(result => {
      res.locals= result
      // console.log("I am the result", res.locals);
      next()
    }, )
    .catch(err => {
      console.log('there was an error when you tried to insert a new match:', err);
    })
  },
  createNotification(req, res, next){
    // console.log("Going to create a notification for: ", res.locals);
    let messageData = {
      sent_user_id: res.locals.user_one,
      received_user_id: res.locals.user_two,
      message: "It's a match! Now its time to start a conversation!",
      initiator: 1
    }
    mainDB.newMessage(messageData)
    .then(result => {
      res.json({
        message: "ok",
        data: result
      })
    })
    .catch(err => {
      console.log(`Something went wrong with messages`, err);
    })
  },
  getAllMatches(req, res, next){
    // console.log(`in the mainController, getting all matches`, req.params.id);
    mainDB.getMatches(req.params.id)
    .then(results => {
      // console.log(`Got all the matches`, results)
      let newResults = results.filter(person => (person.user_id !== parseInt(req.params.id) && person.id !== parseInt(req.params.id)))
      // console.log(`This should be the new results`, newResults)
      res.json({
        message: "got all of the matches",
        data: newResults
      })
    })
    .catch(err => {
      console.log(`I am the error for getAllMatches in the controller`, err);
    })
  },
  getAllMessages(req, res, next){
    mainDB.getMessages(req.body)
    .then(results => {
      res.json({
        message: "ok",
        data: results
      })
    })
    .catch(err => {
      console.log(`I errored out in the controller, getAllMessages`, err);
    })
  },
  makeNewMessage(req, res, next){
    mainDB.newMessage(req.body)
    .then(result => {
      res.json({
        message: "post was successful",
        data: result
      });
    })
    .catch(err => {
      console.log(`messed up in the controller`, err);
    })
  }

  }
