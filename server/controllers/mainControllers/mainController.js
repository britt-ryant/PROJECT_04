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
      console.log('made a call and finished')
    })
    .catch(error => {
      console.log('You forgot how to do this you idiot!', error);
    })
  },
  browseAll(req, res, next){
    mainDB.getAll(req.body)
    .then(results => {
      console.log("I got the results!!!", results);
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
      res.json({
        message: "Its a Match!!",
        data: 1
      })
    })
    .catch(err => {
      res.json({
        message: "no matches found",
        data: 0
      })
    })
  }

  }
