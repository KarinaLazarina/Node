const joi = require('joi');

const { REGEXR } = require('../../constans');

module.exports = joi.object({
    name: joi.string().alphanum().max(50),
    mail: joi.string().regex(REGEXR.EMAIL_REGEXP).required(),
    passwd: joi.string().regex(REGEXR.PASSWD_REGEXP).required(),
    cars: joi.optional(),
    preferL: joi.string().optional()
});
