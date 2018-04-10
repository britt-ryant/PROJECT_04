const userRouter = require('express').Router();
const userController = require('../../controllers/userControllers/userController');

userRouter.route('/sign_up')
          .post(userController.verifyUserExists, userController.createNewUser)
userRouter.route('/log_in')
          .post(userController.getUserData)
// userRouter.route('/profiles')
//           .get(userController.getAll)
userRouter.route('/profiles/:id')
          .get(userController.getMe)
          .put(userController.update)
          .post(userController.createNewInfo)
          .delete(userController.removeProfileFromUserInformation, userController.removeProfileFromUserTable)

module.exports = userRouter
