// routes/movies.js
const express = require('express');
const Movie = require('../Model/show');
const router = express.Router();

// Get all movies
router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find({});
    res.json(movies);
    console.log(movies)
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get available seats for a selected movie
router.get('/:id/seats', async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).json({ message: 'Movie not found' });
    
    const availableSeats = movie.seats.filter(seat => seat.isAvailable);
    const occupiedSeats = movie.seats.filter(seat => !seat.isAvailable);
    res.json({availableSeats, occupiedSeats});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.patch('/:id/seats/:seatNumber', async (req, res) => {
    try {
      const { id, seatNumber } = req.params;
  
     
      const movie = await Movie.findById(id);
      if (!movie) return res.status(404).json({ message: 'Movie not found' });
  
     
      const seat = movie.seats.find(s => s.seatNumber === seatNumber);
      if (!seat) return res.status(404).json({ message: 'Seat not found' });
  
      
      seat.isAvailable = !seat.isAvailable;  
      await movie.save(); 
  
      res.json({ message: 'Seat availability toggled', seat });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  



module.exports = router;
