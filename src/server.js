'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = require('./router/index');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.use((req, res, next) => {
    console.log(`Time ${new Date()}`);
    next();
});

app.use(router);

const server = app.listen(3000, (req, res) => {
    console.log(`Application listening on port 3000`);
})

process.on( 'SIGINT', function() {
    console.log( "\nGracefully shutting down from SIGINT (Ctrl-C)" );
    // some other closing procedures go here
    process.exit();
})

/*process.on('SIGTERM', () => {
    console.info('SIGTERM signal received');
    console.log(`Closing http server`);
    server.close( () => {
        console.log(`Close all the connections`);
    })
})*/
