import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetCart } from "../../redux/cartRedux";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import {
  FormContainer,
  TopText,
  SubmitButton,
  Button,
  BottomText,
  CardWrapper,
} from "./CheckoutForm.styled";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartTotal = useSelector((state) => state.cart.total);
  const deliveryFee = cartTotal > 100 ? 0 : 7; // Free delivery if cartTotal > $100
  const totalAmount = cartTotal + deliveryFee;

  const handleClick = (e) => {
    navigate("/cart");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.error(error);
    } else {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/checkout/payment",
          {
            paymentMethodId: paymentMethod.id,
            amount: totalAmount * 100,
          }
        );

        if (res.data.status === "succeeded") {
          dispatch(resetCart());
          navigate("/success");
          console.log(res.data);
        } else {
          console.error("Payment failed:", res.data);
        }
      } catch (error) {
        console.error("Payment error:", error);
      }
    }
  };

  const cardElementOptions = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: "16px",
        fontSmoothing: "antialiased",
        "::placeholder": {
          color: "black",
        },
        border: "1px solid #ccc", // Add border styling here
        borderRadius: "4px", // Optional: add border radius for rounded corners
        padding: "10px", // Optional: add padding inside the border
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  return (
    <FormContainer>
      <TopText>Alex's Shop</TopText>
      <TopText>Total Due: ${totalAmount.toFixed(2)}</TopText>{" "}
      <BottomText>Delivery Fee: ${deliveryFee.toFixed(2)}</BottomText>
      <form onSubmit={handleSubmit}>
        <CardWrapper>
          <CardElement options={cardElementOptions} />
        </CardWrapper>
        <SubmitButton type="submit" disabled={!stripe}>
          Complete Purchase
        </SubmitButton>
      </form>
      <Button onClick={handleClick}>Back to Cart </Button>
    </FormContainer>
  );
};

export default CheckoutForm;
