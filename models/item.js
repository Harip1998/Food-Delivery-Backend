const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    
  id: {
    type: Number,
    required: true,
   
  },
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  img: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  desc: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  location: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  price: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  
});

const Item = mongoose.model("Item", ItemSchema);
module.exports = Item;