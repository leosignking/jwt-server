'use strict';

const fs = require('fs');
const jwt = require('jsonwebtoken');

const publicKEY = fs.readFileSync('public.key', 'utf8');


const verify = (token, $Option) => {

    const verifyOptions = {};

    if($Option) {
        if($Option.issuer) {
            verifyOptions.issuer = $Option.issuer;
        }
        if($Option.subject) {
            verifyOptions.subject = $Option.subject;
        }
        if($Option.audience) {
            verifyOptions.audience = $Option.audience;
        }
    }
    verifyOptions.expiresIn = 86400;
    verifyOptions.algorithm = ['RS256'];

    try {
        return jwt.verify(token, publicKEY, verifyOptions);
    } catch (err) {
        return false;
    }
}

module.exports = { verify }