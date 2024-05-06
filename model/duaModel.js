const mongoose = require('mongoose');
const DuaModel =new mongoose.Schema( {
    title: String,
    reference: String,
    arabic: String,
    english: String,
    id: Number,
  });
  module.exports= mongoose.model('Emaan',DuaModel,'Emaan');