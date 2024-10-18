// models/Movie.js
const mongoose = require('mongoose');

const seatSchema = new mongoose.Schema({
  seatNumber: { type: String, required: true },
  isAvailable: { type: Boolean, required: true }
});

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  seats: [seatSchema]  // Array of seats for each movie
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
