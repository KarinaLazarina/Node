const { ERRORS: { errCode } } = require('../constans');
const { userValidator } = require('../validators');

module.exports = {
    checkUser: (req, res, next) => {
        try {
            const { error } = userValidator.createUserValidator.validate(req.body);

            if (error) {
                throw new Error(error.details[0].message);
            }

            next();
        } catch (e) {
            res.status(errCode.BAD_REQUEST).json(e.message);
        }
    }
};
