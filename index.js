const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import cors
const moviesRouter = require('./Routes/showRoutes'); // Update the path if necessary

const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Middleware to parse JSON
app.use('/movies', moviesRouter);

// Connect to MongoDB
mongoose.connect('mongodb+srv://neelachari34:L4BMuEs6n3gvynTU@neelachari.bynbzdn.mongodb.net/One?retryWrites=true&w=majority&appName=Neelachari')
.then(() => {
  console.log('Connected to MongoDB');
})
.catch(err => {
  console.error('MongoDB connection error:', err);
});

app.use("/", (req, res) => {
    res.send("Welcome user");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
