const express = require('express');
const router = express.Router();
const Surah = require('../model/surahModel');

// Define the route to get a list of Surahs
router.get('/surahs', async (req, res) => {
  try {
    const surahs = await Surah.find({}, { _id: 0, id: 1, name: 1, etranslation: 1, total_verses: 1  }).sort({id:1});
    res.json(surahs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Define the route to get a specific Surah by ID
router.get('/surahs/:id', async (req, res) => {
  try {
    const surahId = req.params.id;

    const surah = await Surah.find({id:surahId});
    

    if (!surah) {
      return res.status(404).json({ message: 'Does not exist' });
    }

  
//print response
    res.json(surah[0].verses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something is Wrong' });
  }
});
// Route to get an Ayah by Surah ID and Verse ID
router.get('/surahs/:surahId/:verseId', async (req, res) => {
  try {
    const surahId = parseInt(req.params.surahId); // Parse the Surah ID as an integer
    const verseId = parseInt(req.params.verseId); // Parse the Verse ID as an integer

    
    // Use Mongoose to query the database and find the specific Ayah
    const surah = await Surah.findOne({ id: surahId });

    if (!surah) {
      return res.status(404).json({ message: 'Surah not found' });
    }

    const verse = surah.verses.find((v) => v.vid === verseId);

    if (!verse) {
      return res.status(404).json({ message: 'Verse not found' });
    }

    // Format the response to include Ayah and translations
    const response = {
      Surahid: surah.id,
      name: surah.name,
      transliteration: surah.transliteration,
      etranslation: surah.etranslation,
      utranslation: surah.utranslation,
      type: surah.type,
      verseID: verse.vid,
      versetext: verse.text,
      verseEtranslation: verse.etranslation,
      verseUtranslation: verse.utranslation,
    };

    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;