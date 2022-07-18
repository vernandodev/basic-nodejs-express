const express = require('express');
const sampleController = require('../controller/sampleController');
const router = express.Router();
const foodController = require('../controller/foodsController');

router.get('/:id/:nama/:role', sampleController.methodGet);

router.post('/', sampleController.methodPost);

router.put('/:id', sampleController.methodPut);

router.delete('/:id', sampleController.methodDelete);

// Route foods
router.post('/foods', foodController.methodPost);

module.exports = router;
