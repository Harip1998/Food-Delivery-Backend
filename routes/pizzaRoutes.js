const express = require('express');
const pizzaModel = require('../models/pizza');
const app = express();

app.get('/pizza', async (req, res) => {
  const pizza = await pizzaModel.find({});

  try {
    res.send(pizza);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/pizza', async (req, res) => {
    const pizza = new pizzaModel(req.body);
  
    try {
      await pizza.save();
      res.send(pizza);
    } catch (err) {
      res.status(500).send(err);
    }
  });
module.exports = app