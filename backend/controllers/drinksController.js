const axios = require("axios");
const { processDrinks } = require("../utils/processDrinks");

exports.getDrinks = async (req, res) => {
  const { search } = req.body;
  console.log("drinks reached1", search);

  if (!search) {
    return res.status(400).json({ error: "Search query is required." });
  }

  try {
    const apiUrl = `${process.env.API_URL}?s=${encodeURIComponent(search)}`;

    const response = await axios.get(apiUrl);
    console.log("drinks reached3", response);

    const drinks = processDrinks(response.data);

    res.json(drinks);
  } catch (error) {
    res.status(500).json({ error: "Unable to fetch data." });
  }
};
