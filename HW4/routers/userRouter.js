const router = require('express').Router();

const userController = require('../controllers/userController');
const userMiddleware = require('../middlewares/userMiddleware');

router.get('/', userController.getAllUsers);
router.post('/', userMiddleware.checkUser, userController.addUser);
router.get('/:id', userController.getUserById);
router.delete('/:id', userController.deleteUser);

module.exports = router;
