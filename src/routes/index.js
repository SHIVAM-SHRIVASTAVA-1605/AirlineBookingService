const express = require('express');

const v1ApiRouts = require('./v1/index');

const router = express.Router();

router.use('/v1', v1ApiRouts);

module.exports = router;