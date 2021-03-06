userDB = require('../../models/userModels/userDB');

module.exports = {
  index(req, res, next){
    userDB.getAll()
    .then(response => {
      res.json({
        message: "ok",
        data: response
      })
    })
    .catch(err => {
      console.log("I am the error from the user controller", err);
    })
  },
  new(req, res, next){
    // console.log("I am the req.body", req.body);
  },
  verifyUserExists(req, res, next){
    userDB.findUser(req.body.username)
    .then(result => {
      res.json({
        message: 'This user already exists!',
        data: 0
      })
    })
    .catch(err => {
      console.log(`I am going to create a new user`);
      next()
    })
  },
  createNewUser(req, res, next){
    // console.log('I am still the same req.body', req.body);
    userDB.createUser(req.body)
    .then(result => {
      res.json({
        message: "new user was created!",
        data: result
      })
    })
    .catch(err => {
      console.log("This time you errored out!", err);
    })
  },
  getUserData(req, res, next){
    // console.log('In the controller');
    userDB.getUser(req.body)
    .then(result => {
      // console.log('I am the result in the controller', result);
      res.json({
        message: "got the user",
        data: result
      })
    })
    .catch(err => {
      // console.log('Youre a fucking idiot', err);
      res.json({
        message: "The username and password do not match what we have on record!",
        data: 0
      })
    })
  },
  getMe(req, res, next){
    userDB.getDetails(req.params.id)
    .then(result => {
      res.json({
        message: "got user",
        data: result
      })
    })
    .catch(error => {
      console.log(error);
    })
  },
  update(req, res, next){
    userDB.updateInfo(req.body)
    .then(result => {
      res.json({
        message: "update was successful",
        data: result
      })
    })
    .catch(error => {
      console.log(error);
    })
  },
  createNewInfo(req, res, next){
    userDB.insertInfo(req.body)
    .then(result => {
      res.json({
        message: "created new user information table entry",
        data: result
      })
    })
    .catch(err => {
      console.log("I am the error in the create user information controller method", err);
    })
  },
  removeProfileFromUserInformation(req, res, next){
    userDB.remove(req.params.id)
    .then(() => {
      next()
    })
    .catch(err => {
      next(err)
    })
  },
  removeProfileFromUserTable(req, res, next){
    userDB.delete(req.params.id)
    .then(result => {
      res.json({
        message: "profile was deleted"
      })
    })
    .catch(err => {
      console.log("error occured in the delete", err);
    })
  }
}
