const errCode = require('../errors/errorCodes');
const errMessage = require('../errors/errorMessages');

module.exports = {
    checkUser: (req, res, next) => {
        try {
            const {
                passwd, mail, preferL = 'en'
            } = req.body;

            if (passwd.length < 4) {
                throw new Error(errMessage.WEAK_PASSWORD[preferL]);
            }

            if (!mail.includes('@')) {
                throw new Error(errMessage.INVALID_EMAIL[preferL]);
            }

            // name = name[0].toUpperCase() + name.slice(1, name.length).toLowerCase();

            next();
        } catch (e) {
            res.status(errCode.BAD_REQUEST).json(e.message);
        }
    }
};
