const express = require('express');
const router = express.Router();
const { getDrinks } = require('../controllers/drinksController');

router.post('/search', getDrinks);

module.exports = router;
