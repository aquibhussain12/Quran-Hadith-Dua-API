const express = require("express");
const router = express.Router();
const Hadith = require("../schema/hadithSchema");
const mongoose = require("mongoose");

// fetch list of books
router.get("/sources", async (req, res) => {
  try {
    const source = req.params.source;
    const availableSources = await Hadith.distinct("source");
    console.log("Available Sources:", availableSources);

    res.json(availableSources);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
// fetch list of chapters of a book
router.get("/chapters/:source", async (req, res) => {
  const source = req.params.source;

  try {
    const distinctChapters = await Hadith.aggregate([
      { $match: { source } },
      { $group: { _id: { chapter_no: "$chapter_no", chapter: "$chapter" } } },
      {
        $project: {
          _id: 0,
          chapter_no: "$_id.chapter_no",
          chapter: "$_id.chapter",
        },
      },
      { $sort: { chapter_no: 1 } },
    ]);
    res.json({ chapters: distinctChapters });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// fetch all hadith of a chapter
router.get("/hadiths/:source/:chapterNo", async (req, res) => {
  const source = req.params.source;
  const chapterNo = parseInt(req.params.chapterNo);

  try {
    const hadithsInChapter = await Hadith.find({
      source,
      chapter_no: chapterNo,
    }).sort({ id: 1 });
    res.json({ hadiths: hadithsInChapter });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// fetch hadith by its number
router.get("/search/:source/:hadithNo", async (req, res) => {
  const source = req.params.source;
  const hadithNo = parseInt(req.params.hadithNo);

  try {
    const hadith = await Hadith.findOne({ source, hadith_no: hadithNo });

    if (!hadith) {
      return res.status(404).json({ error: "Hadith not found" });
    }

    res.json({ hadith });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
//api to get random hadith
router.get("/random", async (req, res) => {
  try {
    const randomhadith = await Hadith.aggregate([{ $sample: { size: 1 } }]);

    if (!randomhadith) {
      return res.status(404).json({ error: "Hadith not found" });
    }

    res.json({ randomhadith });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
