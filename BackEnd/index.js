require('dotenv').config();
const express = require('express');
const routes = require('./routes/routes');
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.set('Cache-Control', 'no-store')
    next();
});
app.use('/', routes);
const port = process.env.PORT;
app.listen(port, () => console.log(`API escuchando en ${port}`));
