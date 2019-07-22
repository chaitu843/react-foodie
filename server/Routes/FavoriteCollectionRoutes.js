const express = require('express');
const router = express.Router();

const FavoriteCollectionModel = require('../Models/FavoriteCollectionModel');

router.get('/', (req, res) => {
    FavoriteCollectionModel.find().then(docs => res.json(docs));
})

// To add a favorite collection
router.post('/', (req, res) => {
    let favoriteCollectionModel = new FavoriteCollectionModel({
        ...req.body,
        _id: req.body.collection_id
    });
    favoriteCollectionModel.save().then(item => res.json(item)).catch(err => console.log(err));
})

// To delete a favorite collection
router.delete('/:id', (req, res) => {
    console.log(req.params.id);
    FavoriteCollectionModel.deleteOne({ _id: req.params.id }, () => {
        res.end();
    });
})

module.exports = router;