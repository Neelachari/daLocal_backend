const mongoose = require('mongoose');
const Show = require('./Model/show'); 


mongoose.connect('mongodb+srv://neelachari34:L4BMuEs6n3gvynTU@neelachari.bynbzdn.mongodb.net/One?retryWrites=true&w=majority&appName=Neelachari')
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.log('Error connecting to MongoDB:', error));


const showsData = [
  {
    title: 'Cinema 10',
    movieName: 'Avengers: Endgame',
    showTime: '6:00 PM',
    seats: [
      { seatNumber: 'J1', isAvailable: true },
      { seatNumber: 'J2', isAvailable: true },
      { seatNumber: 'J3', isAvailable: true },
      { seatNumber: 'J4', isAvailable: true },
    ],
  },
  {
    title: 'Cinema 11',
    movieName: 'The Dark Knight',
    showTime: '8:00 PM',
    seats: [
      { seatNumber: 'K1', isAvailable: true },
      { seatNumber: 'K2', isAvailable: true },
      { seatNumber: 'K3', isAvailable: true },
      { seatNumber: 'K4', isAvailable: true },
    ],
  },
  {
    title: 'Cinema 12',
    movieName: 'Inception',
    showTime: '9:00 PM',
    seats: [
      { seatNumber: 'L1', isAvailable: true },
      { seatNumber: 'L2', isAvailable: true },
      { seatNumber: 'L3', isAvailable: true },
      { seatNumber: 'L4', isAvailable: true },
    ]
  },
];


Show.insertMany(showsData)
  .then(() => {
    console.log('Data inserted successfully')
    mongoose.connection.close(); 
  })
  .catch((error) => {
    console.error('Error inserting data:', error)
    mongoose.connection.close(); 
  });
