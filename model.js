const mongoose = require("mongoose")

// Schema and model

const schema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    mobile: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: false
    }
})

const contactModel = mongoose.model('contacts', schema);

module.exports = { contactModel }