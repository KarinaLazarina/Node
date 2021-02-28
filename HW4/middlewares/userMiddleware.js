const errCode = require('../errors/errorCodes');
const errMessage = require('../errors/errorMessages');

module.exports = {
    checkUser: (req, res, next) => {
        try {
            const user = req.body;

            if (user.passwd.length < 4) {
                throw new Error(errMessage.WEAK_PASSWORD);
            }

            if (!user.mail.includes('@')) {
                throw new Error(errMessage.INVALID_EMAIL);
            }

            user.name = user.name[0].toUpperCase() + user.name.slice(1, user.name.length).toLowerCase();

            next();
        } catch (e) {
            res.status(errCode.BAD_REQUEST).json(e.message);
        }
    }
};
