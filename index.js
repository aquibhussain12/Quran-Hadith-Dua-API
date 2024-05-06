const express = require('express');
const app = express();
const hadithRoutes = require('./routes/hadithRoutes'); 
const duaRoutes = require('./routes/duaRoutes');
const seerahRoutes = require('./routes/seerahRoutes');
const surahRoutes = require('./routes/surahRoutes');


const db = require('./config/connection');

// const hadithModel=require('./schema/hadithSchema');
const cors = require('cors');


app.use(cors({ origin: 'http://localhost:3000' }))
app.use(express.json());


app.use('/api', surahRoutes);
app.use('/api', hadithRoutes);
app.use('/api', seerahRoutes);
app.use('/api',duaRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});