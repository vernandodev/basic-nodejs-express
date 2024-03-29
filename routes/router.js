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
router.get('/foods', foodController.methodGet);
router.get('/foods/:id', foodController.methodGetId);
router.put('/foods/:id', foodController.methodUpdate);
router.delete('/foods/:id', foodController.methodDelete);

router.post('/foods/upload', foodController.methodUploadPhotos);

module.exports = router;
