var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const book = new mongoose.Schema({
    title: String,
    author: String,
    genre: String,
    price: Number,
    likes: {type: Number, default:0},
    
});

 
module.exports = mongoose.model('Book', book); 


