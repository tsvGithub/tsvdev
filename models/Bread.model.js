const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bread = new Schema({
  title: { type: String, required: true },
  image: { type: String },
  ingredients: {
    biga: { type: String },
    fruitWater: { type: String },
    wheatFlour: { type: Number },
    wholeGrainWheatFlour: { type: Number },
    ryeFlour: { type: Number },
    oil: { type: Number },
    butter: { type: Number },
    milk: { type: Number },
    salt: { type: Number },
  },
  hydration: { type: Number },
  type: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number },
});

module.exports = mongoose.model("Bread", bread);
