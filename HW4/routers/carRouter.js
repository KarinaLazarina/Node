const router = require('express').Router();

const carController = require('../controllers/carController');

router.get('/', carController.getAllCars);
router.post('/', carController.addCar);
router.get('/:id', carController.getOneCar);
router.delete('/:id', carController.deleteCar);

module.exports = router;
