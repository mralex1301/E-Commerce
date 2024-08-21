import React from 'react';
import CheckoutForm from '../CheckoutForm/checkoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from "@stripe/stripe-js";
import { CheckoutDetails, Container, PaymentContainer } from './checkoutPage.styled';
import Announcements from "../../Components/Announcements/Announcements";
import Navbar from '../Navbar/Navbar';
import News from '../News/News';
import Footer from '../Footer/Footer';


const CheckoutPage = () => {
  const stripePromise = loadStripe('pk_test_51PmFnyA77ehHWz0Pes6cnfGvIIgJYhEJEursgrNt82ZDv3jXXFQO9uTLwNzoU9Y8tVzK4k96VETSvbFVfKIjF4lv00Ti9VStVb');
  return (
    <Container>
      <Announcements/>
      <Navbar/>
      <PaymentContainer>
        <CheckoutDetails>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
      </CheckoutDetails>
      </PaymentContainer>
      <News/>
      <Footer/>
    </Container>
  );
}

export default CheckoutPage;