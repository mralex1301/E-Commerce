import styled from "styled-components";

export const Container = styled.div`
    
`
export const SuccessContainer = styled.div`
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
  background-color: #f7f7f7;
  padding: 20px;
  text-align: center;
  padding-top: 30px;
  background-image: url('https://images.vexels.com/content/2504/preview/balloon-set-39ef23.png');
`

export const SuccessWindow = styled.div`
    background-color: white;
    border: 1px solid black;  
    flex-direction: column;
    justify-content: center; /* Center children vertically */
    align-items: center; /* Center children horizontally */
    border-radius: 10px; 
    width: 50%; 
    height: 60%; 
    display: flex; 
    
`

export const Message = styled.h1` 
    text-align: center;
    margin: 0; 

`

export const MessageTwo = styled.p`
    text-align: center; 
    margin: 0;
`

export const Button = styled.button`
    align-items: left;
    background-color: black ;
    border: 1px white solid; 
    border-radius: 10px; 
    color: white; 
    width: 150px; 
    height: 40px; 
    cursor:pointer; 
`

export const SuccessImage = styled.img`
    height: 25%; 

`