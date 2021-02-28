const User = require('../DB/models/User');
require('../DB/models/Car');

module.exports = {
    findAllUsers: (filter) => User.find(filter),

    createUser: (user) => User.create(user),

    findUserById: (id) => User.findById(id),

    deleteUserById: (id) => User.findByIdAndDelete(id)
};
