// import Product from '../Product/Product'

import React from "react";
import {
  ResultsContainer,
  ProductCard,
  ProductImage,
  ProductTitle,
  Icon,
  IconContainer,
} from "./SearchResults.styled";
import { Link } from "react-router-dom";
import Search from "@mui/icons-material/Search";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartRedux";

const SearchResults = ({ products }) => {
  const dispatch = useDispatch();

  const handleClick = (item) => {
    console.log("Item to be added to cart:", item);

    dispatch(
      addProduct({
        ...item,
        quantity: 1,
        color: item.color[0],
        size: item.size[0],
        id: item._id,
      })
    );
  };

  if (products.length === 0) {
    return <p>No products found.</p>;
  }
  return (
    <ResultsContainer>
      {products.map((product) => (
        <ProductCard key={product.id}>
          <ProductTitle>{product.title}</ProductTitle>
          <ProductImage src={product.img} />
          <p>${product.price}</p>
          <IconContainer>
            <Icon>
              <ShoppingCartOutlined onClick={() => handleClick(product)} />
            </Icon>
            <Icon>
              <Link to={`/product/${product._id}`}>
                <Search />
              </Link>
            </Icon>
          </IconContainer>
        </ProductCard>
      ))}
    </ResultsContainer>
  );
};

export default SearchResults;
// export default SearchResults;
