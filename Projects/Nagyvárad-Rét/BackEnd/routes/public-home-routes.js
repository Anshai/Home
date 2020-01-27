const express = require('express');
const router = express.Router();

const publicController = require('../controllers/publicController');

router.get('/home/napi-ige', publicController.getNapiIge);

module.exports = router;