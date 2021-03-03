// eslint-disable-next-line import/no-extraneous-dependencies
const bcrypt = require('bcrypt');

const { ERRORS: { errMessage } } = require('../constans');

module.exports = {
    hashPasswd: (password) => bcrypt.hash(password, 10),
    comparePasswords: async (password, hashPassword) => {
        const equalsPasswd = await bcrypt.compare(password, hashPassword);

        if (!equalsPasswd) {
            throw new Error(errMessage.WRONG_PASSWORD);
        }
    }
};
