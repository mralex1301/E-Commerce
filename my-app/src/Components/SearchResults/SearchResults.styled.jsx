import styled from "styled-components";

export const IconContainer = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;


export const ResultsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  &:hover ${IconContainer} {
    opacity: 1;
  }
`;

export const ProductCard = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  width: 200px;
  text-align: center;
  z-index: 0; 
  overflow: hidden; 
  position: relative; 
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  z-index: 2; 
  `

export const ProductTitle = styled.h3`
    color: black; 
    z-index: 3; 
`




export const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: aliceblue;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: none;
    transform: scale(1.3);
  }
`;
  
