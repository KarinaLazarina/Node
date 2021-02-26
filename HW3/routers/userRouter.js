const router = require('express').Router();

const userController = require('../controllers/userController');
const userMiddleware = require('../middlewares/userMiddleware');

router.get('/', userController.getAllUsers);
router.get('/:id', userMiddleware.checkIsIdValid, userController.getUserById);
router.post('/', userMiddleware.checkUser, userController.addUser);
router.delete('/:id', userMiddleware.checkIsIdValid, userController.deleteUser);

module.exports = router;
