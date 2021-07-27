// ADOPTAPET

// 1) Call dependencias
const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors')
    createError = require('http-errors');

// 2) Get Router
const router = require('./routes')

// App global object
const app = express();

// Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Routes
app.use("/v1", router)

// Handling not found error 404
app.use(function(req, res, next) {
    next(res.status(404).send('La página solicitada no existe'));
    // var err = new Error('Not Found');
    // err.status = 404;
    // next(err);
});

// Bootstrap
const server = app.listen(process.env.PORT || 3030, function(){
  console.log('App running. Listening on port ' + server.address().port);
  console.log('http://localhost:' + server.address().port)
});