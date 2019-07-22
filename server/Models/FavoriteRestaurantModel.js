const mongoose = require('mongoose');

const schemaTypes = mongoose.SchemaTypes; 
let FavoriteRestaurantSchema = new mongoose.Schema(
    {
            _id: schemaTypes.Number,
    },
    {
       _id: false,
       strict: false
    }
)

module.exports = mongoose.model('FavoriteRestaurants', FavoriteRestaurantSchema, 'restaurants');