const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Create a /search endpoint
app.get('/search', async (req, res) => {
    const keyword = req.query.keyword;
    if (!keyword) {
        return res.status(400).json({ error: 'Keyword is required' });
    }

    // Call the scraper here (we will implement this below)
    const scrapedData = await scrapeListings(keyword);
    return res.json(scrapedData);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
