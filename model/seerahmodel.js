const mongoose =  require('mongoose');
const chapterSchema = new mongoose.Schema({
    id: Number,
    chapter_name: String,
    Attribute: String,
  });
  const Chapter = mongoose.model('Seerah', chapterSchema, 'Seerah');
  module.exports = Chapter;