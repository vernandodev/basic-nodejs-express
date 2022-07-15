const express = require('express');
const sampleController = require('../controller/sampleController');
const router = express.Router();

router.get('/:id/:nama/:role', sampleController.methodGet);

router.post('/', sampleController.methodPost);

router.put('/:id', sampleController.methodPut);

router.delete('/:id', sampleController.methodDelete);

module.exports = router;
