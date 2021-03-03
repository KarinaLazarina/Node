const router = require('express').Router();

const carController = require('../controllers/carController');
const carMiddleware = require('../middlewares/carMiddleware');

router.get('/', carController.getAllCars);
router.post('/', carMiddleware.checkCar, carController.addCar);
router.get('/:id', carController.getOneCar);
router.delete('/:id', carController.deleteCar);

module.exports = router;
