const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*----- Room ----*/
const schema = new Schema({
    name: String,
    company: String,
    street1: String,
    street2: String,
    city: String,
    state: String,
    zipCode: String,
    country: String,
});

module.exports = mongoose.model('Company', schema);