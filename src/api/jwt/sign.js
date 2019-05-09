'use strict';

const fs = require('fs');
const jwt = require('jsonwebtoken');

const privateKEY = fs.readFileSync('private.key', 'utf8');


const sign = (payload) => {

    const signOptions = {};

    const $Option = payload != null ? payload.options : null;

    if($Option) {
        if($Option.issuer) {
            signOptions.issuer = $Option.issuer;
        }
        if($Option.subject) {
            signOptions.subject = $Option.subject;
        }
        if($Option.audience) {
            signOptions.audience = $Option.audience;
        }
    }
    signOptions.expiresIn = 86400;
    signOptions.algorithm = 'RS256';

    return jwt.sign(payload, privateKEY, signOptions);
    
}

module.exports = { sign }