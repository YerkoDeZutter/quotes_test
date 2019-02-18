const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quotesShema = new Schema({
  quote: {
    type: String,
    required: [true, "the quote is required"]
  },
  autor: {
    type: String,
    required: [true, "the autor's name is required"]
  },
  autorLife: {
    type: Boolean,
    default: true
  }
});

const Quote = mongoose.model("quote", quotesShema);

module.exports = Quote;
