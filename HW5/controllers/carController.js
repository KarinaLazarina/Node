const carService = require('../services/carService');
const { ERRORS: { errCode } } = require('../constans');

module.exports = {
    getAllCars: async (req, res) => {
        try {
            const cars = await carService.findAllCars(req.params);
            res.json(cars);
        } catch (e) {
            res.status(errCode.BAD_REQUEST).json(e.message);
        }
    },
    getOneCar: async (req, res) => {
        try {
            const { id } = req.params;
            const car = await carService.findCarById(id);
            res.json(car);
        } catch (e) {
            res.status(errCode.BAD_REQUEST).json(e.message);
        }
    },
    addCar: async (req, res) => {
        try {
            await carService.createCar(req.body);

            res.status(errCode.CREATED).json('Car is created!');
        } catch (e) {
            res.status(errCode.BAD_REQUEST).json(e.message);
        }
    },
    deleteCar: async (req, res) => {
        try {
            const { id } = req.params;
            const car = await carService.deleteCarById(id);
            res.json(car);
        } catch (e) {
            res.status(errCode.BAD_REQUEST).json(e.message);
        }
    }
};
