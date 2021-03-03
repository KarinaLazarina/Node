const joi = require('joi');

module.exports = joi.object({
    model: joi.string().alphanum().max(50).required(),
    year: joi.number().integer().positive(),
    color: joi.string().optional()
});
