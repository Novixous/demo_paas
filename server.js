const express = require('express');
const app = express();

app.use(express.json());

const defaultRoute = require('./routes/default');
app.use('/default', defaultRoute);


const welcomeRoute = require('./routes/welcome');
app.use('/', welcomeRoute);

app.listen(3000, () => console.log('Server has started.'));
