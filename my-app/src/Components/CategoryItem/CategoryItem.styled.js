import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: grey;
  cursor: pointer;
  font-weight: 600;
`;
