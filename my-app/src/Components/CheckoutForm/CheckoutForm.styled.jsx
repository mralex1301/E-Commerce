import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column; /* Stack child elements vertically */
  justify-content: center; /* Center child elements vertically */
  align-items: center; /* Center child elements horizontally */
  height: 40vh; /* Full viewport height */
  background-color: white; /* Optional: background color */
  padding: 20px;
  /* box-sizing: border-box; */
  background-image: url('https://static.wixstatic.com/media/64cd4e_c01a00941c5f41089bdabe132a05c411~mv2.png/v1/fill/w_640,h_378,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/64cd4e_c01a00941c5f41089bdabe132a05c411~mv2.png');
  background-size: cover; 
`;

export const SubmitButton = styled.button`
  display: block;
  margin: 20px auto; /* Center the button horizontally */
  width: 250px;
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.3s ease; /* Smooth transition for hover effect */
  
  &:hover {
    background-color: green; /* Color change on hover */
  }
`;

export const TopText = styled.h1`
    margin: 10px 0px; /* Optional: spacing around text */
    text-align: center; /* Center text horizontally */
    padding-bottom: 10px;
`

export const BottomText = styled.h3`
  margin-top: 0px;
  padding-bottom: 10px;  
`
export const Button = styled.button`
  display: block;
  width: 250px;
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.3s ease; /* Smooth transition for hover effect */
  
  &:hover {
    background-color: green; /* Color change on hover */
  }
`

export const CardWrapper = styled.div`
  border: 1px solid black;  // Border around the CardElement
  border-radius: 4px;      // Optional: rounded corners
  padding: 10px;           // Optional: padding inside the border
  background-color: none; // Optional: background color
  width: 100%;             // Ensure it takes full width of the containe
  `