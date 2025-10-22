const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  assesmentId: {
    type: String,
    require: true,
  },
  userId: {
    type: String,
    require: true,
  },
  score: {
    type: Number,
    require: true,
  }
});

module.exports = new mongoose.model('results', resultSchema)