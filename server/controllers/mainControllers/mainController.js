//require the database

mainDB = require('../../models/mainModels/mainDB');

module.exports = {
  index(req, res, next){
    console.log("I was called here");
    mainDB.getAll()
    .then(response => {
      res.json({
        message: "ok",
        data: response
      })
    })
    .catch(error => {
      console.log('You forgot how to do this you idiot!', error);
    })
  }
}
