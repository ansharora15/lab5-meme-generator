const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());

// Unsplash API configuration
const UNSPLASH_ACCESS_KEY = 'hFWGDMn-jfwx9rTtDhKcB3yHFIAJjhpou7bBI4b6T9c';

// Endpoint to fetch images from Unsplash API
app.get('/api/images', async (req, res) => {
    const query = req.query.query;

    if (!query) {
        return res.status(400).json({ message: 'Query parameter is required' });
    }

    try {
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}`, {
            headers: {
                Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
                'Accept-Version': 'v1'
            }
        });

        const data = await response.json();

        console.log('Unsplash API Response:', data);

        if (!data.results || data.results.length === 0) {
            return res.status(404).json({ message: 'No images found for this search term.' });
        }

        res.json(data);
    } catch (error) {
        console.error('Error fetching images:', error);
        res.status(500).json({ message: 'Error fetching images' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
