// node-fetch
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

exports.getAllPlants = async (req, res) => {
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
};

exports.getPlantById = async (req, res) => {
    const { id } = req.params;
    const trefleToken = process.env.TREFLE_TOKEN;
    const url = `https://trefle.io/api/v1/species/${id}?token=${trefleToken}`;

    try {
      const response = await fetch(url);
      const json = await response.json();
      res.json(json);
    } catch (error) {
      console.error(`Error fetching plant with ID ${id}:`, error);
      res.status(500).json({ error: 'Failed to fetch plant' });
    }
};

exports.searchPlants = async (req, res) => {
    const query = req.query.q;
    const trefleToken = process.env.TREFLE_TOKEN;

    try {
      const response = await fetch(`https://trefle.io/api/v1/plants/search?token=${trefleToken}&q=${query}`);
      const json = await response.json();
      res.json(json);
    } catch (error) {
      console.error('Error fetching data from Trefle API:', error);
      res.status(500).json({ error: 'Failed to fetch data from Trefle API' });
    }
};
