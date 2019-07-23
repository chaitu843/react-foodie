const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
app.use(express.static('build'));

app.use(express.json());

const port = process.env.port || 8080;
const FavoriteCollectionRoutes = require('./Routes/FavoriteCollectionRoutes');
const FavoriteRestaurantRoutes = require('./Routes/FavoriteRestaurantRoutes');

const localMongoString = `mongodb://localhost:27017/test`;
const mongoAtlasString = `mongodb+srv://Chaitu:chaitu@843@cluster0-am2rc.mongodb.net/test?retryWrites=true&w=majority`
// Connecting to MongoDB using mongoose
mongoose.connect(mongoAtlasString, {
  auth: {
    user: 'Chaitu',
    password: 'chaitu@843'
  },
    useNewUrlParser: true,}).then(() => {
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
