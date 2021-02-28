const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    name: { type: String, required: true },
    mail: { type: String, required: true, unique: true },
    passwd: { type: String, required: true },
    cars: [{ type: Schema.Types.Mixed }]
}, { timestamps: true, toObject: { virtuals: true }, toJSON: { virtuals: true } });

UserSchema.virtual('userCars', {
    ref: 'Car',
    localField: 'cars',
    foreignField: '_id'
});

UserSchema.pre('find', function() { this.populate('userCars'); })
    .pre('findOne', function() { this.populate('userCars'); });

module.exports = model('User', UserSchema);
