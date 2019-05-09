'use strict';

const express = require('express');
const router = express.Router();

router.get('/verify', (req, res) => {
    var token = req.headers['x-access-token'];
    if (!token) {
        return res.status(401).send({ auth: false, message: 'No token provided.' });
    } else {
        const verifyPayload = require('./verify').verify(token, req.body.options)
        res.status(200).send(verifyPayload);
    }
})

router.post('/sign', (req, res) => {
    const signPayload = require('./sign').sign(req.body);
    res.status(200).send(signPayload);
})

module.exports = router;
