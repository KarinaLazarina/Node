const { Schema, model } = require('mongoose');

const CarSchema = new Schema({
    model: { type: String, required: true },
    year: { type: Number },
    color: { type: String }
}, { timestamps: true, toObject: { virtuals: true }, toJSON: { virtuals: true } });

module.exports = model('Car', CarSchema);
