const express = require('express');
const router = express.Router();
const Slot = require('../models/slot'); // Adjust the path according to your project structure


// Route to fetch available slots for a specific date
router.get('/available-slots', async (req, res) => {
    const { date } = req.query;
    console.log(date)
    if (!date) {
        return res.status(400).send('Date is required');
    }

    try {
        const slots = await Slot.find({ date: new Date(date) });
        res.json(slots);
    } catch (err) {
        console.log(err)
        res.status(500).send('Server error');
    }
});

module.exports = router;
