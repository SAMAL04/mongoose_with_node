require("./config/mongodb");

const Genre = require("./models/genre");

const genreBook = new Genre({
  name: "Fiction",
  url: "www.fiction.com"
});

genreBook
  .save()
  .then(response => {
    console.log(response);
  })
  .catch(console.error);
