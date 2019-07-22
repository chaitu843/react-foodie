const mongoose = require('mongoose');

const schemaTypes = mongoose.SchemaTypes; 
let FavoriteCollectionSchema = new mongoose.Schema(
    {
            collection_id: schemaTypes.Number,
            res_count: schemaTypes.Number,
            image_url: schemaTypes.String,
            url: schemaTypes.String,
            title: schemaTypes.String,
            description: schemaTypes.String,
            share_url: schemaTypes.String,
            _id: schemaTypes.Number,
    },
    {
       _id: false,
       strict: true
    }
)

module.exports = mongoose.model('FavoriteCollections', FavoriteCollectionSchema, 'collections');