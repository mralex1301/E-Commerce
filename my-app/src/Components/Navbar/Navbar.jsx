import React, { useState } from "react";
import Search from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  Wrapper,
  Left,
  Language,
  SearchContainer,
  Input,
  Right,
  MenuItem,
  Center,
  Logo,
  StyledLink,
} from "./Navbar.styled";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const quantity = useSelector((state) => state.cart.quantity);
  const isLoggedIn = useSelector((state) => state.user.currentUser);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer onSubmit={handleSearch}>
            <Input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              <Search
                style={{ color: "gray", fontSize: 16, cursor: "pointer" }}
              />
            </button>
          </SearchContainer>
        </Left>

        <Center>
          <Logo>Sanikata's Shop</Logo>
        </Center>
        <Right>
          {!isLoggedIn && (
            <>
              <StyledLink to="/register">
                <MenuItem>Register</MenuItem>
              </StyledLink>

              <StyledLink to="/login">
                <MenuItem>Sign In</MenuItem>
              </StyledLink>
            </>
          )}
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
