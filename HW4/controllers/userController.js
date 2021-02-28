const userService = require('../services/userService');
const errCodes = require('../errors/errorCodes');

module.exports = {
    // 2) Get all users
    getAllUsers: async (req, res) => {
        try {
            const users = await userService.findAllUsers(req.query);
            res.json(users);
        } catch (e) {
            res.status(errCodes.BAD_REQUEST).json(e.message);
        }
    },
    // 3) Get user by email or name
    getUserById: async (req, res) => {
        try {
            const { id } = req.params;
            const user = await userService.findUserById(id);
            res.json(user);
        } catch (e) {
            res.status(errCodes.BAD_REQUEST).json(e.message);
        }
    },
    // 1) Create user
    addUser: async (req, res) => {
        try {
            await userService.createUser(req.body);

            res.status(errCodes.CREATED).json('User is created!');
        } catch (e) {
            res.status(errCodes.BAD_REQUEST).json(e.message);
        }
    },
    // 4) Delete current user
    deleteUser: async (req, res) => {
        try {
            const { id } = req.params;
            const user = await userService.deleteUserById(id);
            res.json(user);
        } catch (e) {
            res.status(errCodes.BAD_REQUEST).json(e.message);
        }
    },

};
