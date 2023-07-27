const express = require('express');
const itemModel = require('../models/item');
const app = express();

app.get('/item', async (req, res) => {
  const item = await itemModel.find({});

  try {
    res.send(item);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/item', async (req, res) => {
    const chicken = new itemModel(req.body);
  
    try {
      await item.save();
      res.send(item);
    } catch (err) {
      res.status(500).send(err);
    }
  });
module.exports = app