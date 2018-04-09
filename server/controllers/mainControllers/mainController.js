//require the database

mainDB = require('../../models/mainModels/mainDB');

module.exports = {
  index(req, res, next){
    console.log("I was called here");
    mainDB.getAll()
    .then(response => {
      console.log(response);
      res.json({
        message: "ok",
        data: response
      })
      console.log('made a call and finished')
    })
    .catch(error => {
      console.log('You forgot how to do this you idiot!', error);
    })
  }
}
