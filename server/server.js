const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
app.use(express.static('build'));

app.use(express.json());

const port = process.env.port || 5000;
const FavoriteCollectionRoutes = require('./Routes/FavoriteCollectionRoutes');
const FavoriteRestaurantRoutes = require('./Routes/FavoriteRestaurantRoutes');

// Connecting to MongoDB using mongoose
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true,}).then(() => {
  console.log('Connected to Mongo');
}).catch(err => {
  console.log(err);
});

// To get all favorite collections
app.use('/favoriteCollection', FavoriteCollectionRoutes);
app.use('/favoriteRestaurant', FavoriteRestaurantRoutes);

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../build/index.html'));
  res.end();
});

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../build/index.html'));
  res.end();
});
app.listen(port, () => {
  console.log('Listening to port 5000');
})
