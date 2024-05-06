const express = require('express');
const app = express.Router();
const Chapter = require('../schema/seerahmodel')




app.get('/seerah', async (req, res) => {
    try {
       const chapters = await Chapter.find({}, { _id:0, id:1, chapter_name:1}).sort(({id:1}));
       res.json(chapters);
       
     } catch(error) {
       res.status(500).send(error.message);
     }
   });
   // route to get content of chapter
   
   app.get('/seerah/:id', async (req, res)=>{
       
       try{
           const cId = parseInt(req.params.id);
           const chapterdata =await Chapter.find({id:cId});
           if(!chapterdata){
               return res.status(404).json({ message: 'Does not exist' });
           }
           

           console.log(chapterdata);
  
           res.json(chapterdata);
     } catch (error) {
       console.error(error);
       res.status(500).json({ message: 'Something is Wrong' });
     }
       });

module.exports = app;