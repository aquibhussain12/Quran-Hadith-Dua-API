const express = require('express');
const router = express.Router();

// Import the DataModel from your main file
const dua = require('../model/duaModel');

// Route to get the list of chapters
router.get('/chapters', async (req, res,next) => {
  try {
    console.log(dua);
    const chapters = await dua.find({}, {_id:0,  id:1, title:1 }).sort({id:1});;
    console.log('chapters:', chapters.length,"route hitted");
    return res.json(chapters);
  } catch (error) {
    console.error(error);
    res.status(500).json(error.message);
  }
});


// API to get dua by ID
router.get('/duas/:id', async (req, res) => {
  const itemId = parseInt(req.params.id);

  try {
    const duas = await dua.findOne({ id: itemId });
    if (duas) {
      res.json(duas);
    } else {
      res.status(404).json({ error: 'Item not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
module.exports = router;
