const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const homeRoutes = require('./routes/public-home-routes');
const adminRoutes = require('./routes/admin-routes');

app.use(bodyParser.json());

app.use(cors());

app.use(homeRoutes);

app.use('/admin', adminRoutes);

app.listen(3000);