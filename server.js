// DEPENDENCIES
// get .env variables
require("dotenv").config();
// pull PORT from .env, give default value of 3000
const { PORT } = process.env;
// import express
const express = require("express");
// create application object
const app = express();
// node-fetch
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
//cors
const cors = require('cors');



app.use(express.json());
app.use(cors());

// ROUTES
// Route to get all plants
app.get('/api/plants', async (req, res) => {
    const trefleToken = process.env.TREFLE_TOKEN;
    const url = `https://trefle.io/api/v1/species?token=${trefleToken}`;
  
    try {
      const response = await fetch(url);
      const json = await response.json();
      res.json(json);
    } catch (error) {
      console.error('Error fetching all plants:', error);
      res.status(500).json({ error: 'Failed to fetch plants' });
    }
  });
  
  // Route to get a single plant by ID
  app.get('/api/plants/:id', async (req, res) => {
    const { id } = req.params;
    const trefleToken = process.env.TREFLE_TOKEN; // Your Trefle token stored in .env
    const url = `https://trefle.io/api/v1/species/${id}?token=${trefleToken}`;
  
    try {
      const response = await fetch(url);
      const json = await response.json();
      res.json(json);
    } catch (error) {
      console.error(`Error fetching plant with ID ${id}:`, error);
      res.status(500).json({ error: 'Failed to fetch plant' });
    }
  });
  

// LISTENER
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
