'use strict';

const express = require('express');
const router = express.Router();

const pingApi = require('../api/ping/index');

const jwtApi = require('../api/jwt/index');

router.use('/ping', pingApi);

router.use('/jwt', jwtApi);

module.exports = router