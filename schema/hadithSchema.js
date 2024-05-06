const mongoose =  require('mongoose');

const HadithSchema = new mongoose.Schema({
    id: Number,
    hadith_id: Number,
    source: String,
    chapter_no: Number,
    hadith_no: Number,
    chapter: String,
    chain_indx: String,
    text_ar: String,
    text_en: String,

});
module.exports = mongoose.model('Hadith', HadithSchema, 'Hadith');