const mongoose = require("mongoose");
let Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    inputString: {
      type: String,
      required: [true, "inputString not provided "]
    }
  });

module.exports = mongoose.model("exercise",exerciseSchema);