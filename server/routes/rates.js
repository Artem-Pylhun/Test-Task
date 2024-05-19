const express = require('express');
const router = express.Router();
const Rate = require('../models/rate');

router.get('/', async (req, res) => {
    try {
        const rates = await Rate.findAll();
        res.json(rates);
    } catch (error) {
        console.error('Error fetching rates:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
