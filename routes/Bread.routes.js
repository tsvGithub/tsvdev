const express = require("express");
const app = express.Router();
const Bread = require("../models/Bread.model");

//POST
app.post("/bread/", async (req, res) => {
  try {
    const newBread = new Bread({
      title: req.body.title,
      image: req.body.image,
      ingredients: {
        fruitWater: req.body.fruitWater,
        wheatFlour: req.body.wheatFlour,
      },
      hydration: req.body.hydration,
      type: req.body.type,
      category: req.body.category,
    });
    await newBread.save();
    res.status(200).json({
      message: {
        msgBody: "New Bread Added!",
        msgError: false,
      },
    });
  } catch {
    res.status(500).json({
      message: {
        msgBody: "Unable to add new Bread!",
        msgError: true,
      },
    });
  }
});

module.exports = app;
