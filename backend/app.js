const express = require('express');
const cors = require('cors');
require('dotenv').config();

const drinksRoutes = require('./routes/drinks');

const app = express();

app.use(cors());
app.use(express.json());

// Routes 
app.use('/api/drinks', drinksRoutes);


app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
