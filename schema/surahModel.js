const mongoose = require('mongoose');

const surahSchema = new mongoose.Schema({
  id: Number,
  name: String,
  stranslation: String,
  transliteration: String,
  etranslation: String, 
  utranslation: String, 
  type: String,
  total_verses: Number,
  
  verses: [
    {
      text: String,
      etranslation: String, 
      utranslation: String,
      vid: Number, 
    },
  ],
  
});
module.exports = mongoose.model('Quran', surahSchema,'Quran');
