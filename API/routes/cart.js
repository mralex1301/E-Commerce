const {
  verifyAdmin,
  tokenAuthorization,
  verifyToken,
} = require("./verifyToken");
const Cart = require("../models/Cart");

const router = require("express").Router();

//CREATE
router.post("/", verifyToken, async (req, res) => {
  const newCart = new Cart(req.body);
  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
    console.log(savedCart.json());
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", tokenAuthorization, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
//DELETE
router.delete("/:id", tokenAuthorization, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Product deleted.");
  } catch (err) {
    console.log(error);
    res.status(500).json(err);
  }
});

//GET USER CART
router.get("/find/:userId", tokenAuthorization, async (req, res) => {
  try {
    const cart = await Cart.find({ userId: req.params.userId });
    res.status(200).json(cart);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//GET ALL

router.get("/", verifyAdmin, async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch {
    res.status(500).json(err);
  }
});

module.exports = router;
