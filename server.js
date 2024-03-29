// DEPENDENCIES
// get .env variables
require("dotenv").config();
// pull PORT from .env, give default value of 3000
const { PORT } = process.env;
// import express
const express = require("express");
// create application object
const app = express();
//cors
const cors = require('cors');

const plantRoutes = require('./routes/plantRoutes');
const newsRoutes = require('./routes/newsRoutes');



app.use(express.json());
app.use(cors());

// ROUTES
// Plant Routes
app.use('/api/plants', plantRoutes);
// Plant Routes
app.use('/api/news', newsRoutes);

// LISTENER
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
