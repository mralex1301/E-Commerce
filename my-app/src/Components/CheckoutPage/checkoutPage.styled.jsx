import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f7f7f7;
`

export const PaymentContainer = styled.div`
  width: 100%;
  min-height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`
export const CheckoutDetails = styled.div`
   width: 100%;
   height: 20%;
  max-width: 400px; /* Limit the width to make the layout more compact */
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
`