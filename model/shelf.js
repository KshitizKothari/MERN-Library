var mongoose = require('mongoose');
var Schema =mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var shelf = new Schema({
    title:{type: String, default: "Cool Wish List"},
    books:[{type:ObjectId, ref:'Book'}]
});

module.exports = mongoose.model('Shelf', shelf);

