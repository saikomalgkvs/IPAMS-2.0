const mongoose = require('mongoose');

const slotSchema = new mongoose.Schema({
    starttime: {
        type: String,
        required: true
    },
    endtime: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    booking_status: {
        type: Boolean,
        default: false
    }
}, {collection: 'available_slots' });

module.exports = mongoose.model('Slot', slotSchema);
