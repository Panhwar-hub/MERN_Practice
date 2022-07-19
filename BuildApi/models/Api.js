const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ApiSchema = new Schema({
    link: String,
    frequency: Number
})

const Api = mongoose.model("Api", ApiSchema);

module.exports = Api;
