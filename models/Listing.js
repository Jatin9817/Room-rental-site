const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
    title: String,
    image: String,
    price: Number,
    location: String
});

module.exports = mongoose.model("Listing", listingSchema);