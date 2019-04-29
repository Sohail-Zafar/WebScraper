// Assignment: All the news that is worth to scrape.
// File: Notes.js
// Programmer: Sohail Zafar
// This file sets up the Notes data schema ( object ) for the project.


var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var NoteSchema = new Schema({
  // `title` is of type String
  title: String,
  // `body` is of type String
  body: String
});

// This creates our model from the above schema, using mongoose's model method
var Notes = mongoose.model("Notes", NoteSchema);

// Export the Note model
module.exports = Notes;