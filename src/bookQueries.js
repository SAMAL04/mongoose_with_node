require("./config/mongodb");

const Book = require("./models/book");

const opticksBook = new Book({
  title: "Opticks",
  author: "5decca64537b88140db610ea", //taken from default id of mongo
  summary:
    "Opticks: or, A Treatise of the Reflexions, Refractions, Inflexions and Colours of Light is a book by English natural philosopher Isaac Newton",
  isbn: "9781987618297",
  genre: ""
});

opticksBook
  .save()
  .then(response => {
    console.log(response);
  })
  .catch(console.error);

const findQuery = Book.findOne();

findQuery
  .exec()
  .then(response => {
    console.log(response);
  })
  .catch(console.error);

Book.find({ occupation: /host/ })
  .where("title")
  .equals("Opticks")
  .where("isbn")
  .equals("9781987618297")
  .limit(10)
  .sort("title")
  .select("title")
  .exec();
