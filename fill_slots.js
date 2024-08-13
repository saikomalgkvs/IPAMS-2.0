const mongoose = require('mongoose');
const Slot = require('./models/slot');

async function populateSlots() {
    // Connect to MongoDB
    await mongoose.connect('mongodb://localhost:27017/IPAMS');

    console.log('Connected to MongoDB');

    // Generate slots data for one month
    const slots = [];
    const startDate = new Date('2024-08-13');
    const endDate = new Date('2024-09-12');

    for (let date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
        for (let hour = 8; hour < 23; hour++) {
            const starttime = `${hour.toString().padStart(2, '0')}:00`;
            const endtime = `${(hour + 1).toString().padStart(2, '0')}:00`;

            slots.push({
                starttime: starttime,
                endtime: endtime,
                date: new Date(date)
            });
        }
    }

    // Insert generated slots into the collection
    await Slot.insertMany(slots);
    console.log(`${slots.length} slots were inserted`);

    // Close the connection
    await mongoose.connection.close();
    console.log('Connection closed');
}

// Run the function
populateSlots().catch(console.error);
