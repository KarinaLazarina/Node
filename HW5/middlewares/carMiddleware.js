const { ERRORS: { errCode } } = require('../constans');
const { carValidator } = require('../validators');

module.exports = {
    checkCar: (req, res, next) => {
        try {
            const { error } = carValidator.carValidator.validate(req.body);

            if (error) {
                throw new Error(error.details[0].message);
            }

            next();
        } catch (e) {
            res.status(errCode.BAD_REQUEST).json(e.message);
        }
    }
};
