const userService = require('../services/userService');
const errCodes = require('../errors/errorCodes');

module.exports = {
    // 2) Get all users
    getAllUsers: (req, res) => {
        try {
            const users = userService.findAllUsers();
            res.json(users);
        } catch (e) {
            res.status(errCodes.BAD_REQUEST).json(e.message);
        }
    },
    // 3) Get user by email or name
    getUserById: (req, res) => {
        try {
            const { id } = req.params;
            const user = userService.findUserById(id);
            res.json(user);
        } catch (e) {
            res.status(errCodes.BAD_REQUEST).json(e.message);
        }
    },
    // 1) Create user
    addUser: (req, res) => {
        try {
            userService.createUser(req.body);

            res.status(errCodes.CREATED).json('User is created!');
        } catch (e) {
            res.status(errCodes.BAD_REQUEST).json(e.message);
        }
    },
    // 4) Delete current user
    deleteUser: (req, res) => {
        try {
            const { id } = req.params;
            const user = userService.deleteUserById(id);
            res.json(user);
        } catch (e) {
            res.status(errCodes.BAD_REQUEST).json(e.message);
        }
    },

};
