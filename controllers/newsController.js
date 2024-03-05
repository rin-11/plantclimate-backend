// Import Axios for making HTTP requests
const axios = require('axios');

// Function to fetch all news articles
exports.getAllNews = async (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://climate-news-feed.p.rapidapi.com/',
    params: {
      source: 'Nasa Climate',
      limit: '50',
      exclude: 'The Guardian'
    },
    headers: {
      'X-RapidAPI-Key': process.env.RAPIDAPI_KEY, 
      'X-RapidAPI-Host': 'climate-news-feed.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching all news:', error);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
};

