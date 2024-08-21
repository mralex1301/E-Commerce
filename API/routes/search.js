const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

//SEARCH PRODUCTS

router.get("/", async (req, res) => {
  console.log("Search route hit");
  const query = req.query.query;
  console.log("Query:", query);

  try {
    // Create a regular expression for case-insensitive search
    const regex = new RegExp(query.trim(), "i");

    // Construct filter with regex for partial matching
    const filter = {
      $or: [
        { title: { $regex: regex } },
        { categories: { $elemMatch: { $regex: regex } } },
        { id: { $elemMatch: { $regex: regex } } },
      ],
    };
    const products = await Product.find(filter);
    res.status(200).json(products);
    console.log(products);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
