const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/Listing");

mongoose.connect("mongodb://127.0.0.1:27017/houseRental");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

// 1. HOME PAGE - Shows all registered houses
app.get("/", async (req, res) => {
    const allListings = await Listing.find({});
    res.render("index", { allListings });
});

// 2. REGISTER PAGE - The form
app.get("/register", (req, res) => {
    res.render("register");
});

// 3. POST ROUTE - Handles the form submission
app.post("/register", async (req, res) => {
    const newHouse = new Listing(req.body);
    await newHouse.save();
    res.redirect("/"); // Automatically shows on homepage after redirect
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));