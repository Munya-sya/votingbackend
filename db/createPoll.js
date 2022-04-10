const mongoose = require("mongoose");

// user schema
const PollSchema = new mongoose.Schema({
  // title field
  title: {
    type: String,
    required: [true, "Please provide an title!"],
  },
  useremail: {
    type: String,
    required: [true, "Please provide an email!"],
  },
  // choice field
  choices:  [{
    name: {type: String},
    count: {type: Number, default:0},
  }],
  
});

// export UserSchema
module.exports = mongoose.model.Polls || mongoose.model("Polls", PollSchema);