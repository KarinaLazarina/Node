const fs = require('fs');
const { promisify } = require('util');

const data = require('../DB/users.json');
const errMessage = require('../errors/errorMessages');

const writeFilePromise = promisify(fs.writeFile);

module.exports = {
    findAllUsers: () => data,
    findUserById: (id) => data[id],
    createUser: (user) => {
        data.forEach((value) => {
            if (value.mail.toLowerCase() === user.mail.toLowerCase()) {
                throw new Error(errMessage.REGISTERED_USER);
            }
        });

        data.push(user);
        writeFilePromise('./DB/users.json', JSON.stringify(data)).then();

        return user;
    },
    deleteUserById: (id) => {
        const user = data.splice(id, id + 1);
        writeFilePromise('./DB/users.json', JSON.stringify(data)).then();

        return user;
    }
};
