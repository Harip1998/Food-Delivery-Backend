const mongoose = require('mongoose');

const PizzaSchema = new mongoose.Schema({
    
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

const Pizza = mongoose.model("Pizza", PizzaSchema);
module.exports = Pizza;