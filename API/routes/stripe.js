const router = require("express").Router();
const doetnv = require("dotenv");

doetnv.config();

const stripe = require("stripe")(process.env.STRIPE_KEY);

router.post("/", async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.body.amount,
      currency: "gbp",
      payment_method: req.body.paymentMethodId,
      confirm: true,
      return_url: "http://localhost:3000/success",
    });

    res.status(200).json(paymentIntent);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
