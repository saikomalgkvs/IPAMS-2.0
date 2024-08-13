const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    date: String,
    slot: String
}, {collection: 'scheduled_users' })

module.exports = mongoose.model('User',userSchema)