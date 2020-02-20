const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const GenreSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  url: {
    type: URL,
    required: true
  }
});

// GenreSchema.virtual("url").get(function() {
//   return "/catalog/book/" + this._id;
// });

const Genre = model("Genre", GenreSchema);

module.exports = Genre;
