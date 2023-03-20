const mongoose = require('mongoose');

const finalSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Travel', finalSchema);