const Car = require('../DB/models/Car');

module.exports = {
    findAllCars: (filter) => Car.find(filter),

    createCar: (car) => Car.create(car),

    findCarById: (id) => Car.findById(id),

    deleteCarById: (id) => Car.findByIdAndDelete(id)
};
