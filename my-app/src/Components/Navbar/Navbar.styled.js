import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 60px;
  width: 100%;
  padding-bottom: 10px;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba (0, 0, 0, 0.1);
`;
export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
export const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
export const SearchContainer = styled.form`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
export const Input = styled.input`
  border: none;
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  text-decoration: none;
`;
export const Center = styled.div`
  flex: 1;
  text-align: center;
`;
export const Logo = styled.h1`
  display: block;
  font-size: 2em;
  margin-top: 0.67em;
  margin-bottom: 0.67em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
  color: black;

  & {
    text-decoration: none !important;
    
  }

  &:hover {
    color: gray; // Optional hover effect
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: none;
  }
`;
