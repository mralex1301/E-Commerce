import React, { useEffect, useState } from "react";
import { Container, Wrapper } from "./Search.styled";
import { useLocation } from "react-router-dom";
import Announcements from "../../Components/Announcements/Announcements";
import Navbar from "../../Components/Navbar/Navbar";
import News from "../../Components/News/News";
import Footer from "../../Components/Footer/Footer";
import axios from "axios";
import SearchResults from "../../Components/SearchResults/SearchResults";

const Search = () => {
  const [products, setProducts] = useState([]);

  const location = useLocation();

  const query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/search`, {
          params: { query: query },
        });
        console.log("Response Data:", response.data);
        setProducts(response.data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
    };
    fetchProducts();
  }, [query]);

  return (
    <Container>
      <Announcements />
      <Navbar />
      <Wrapper>
        <SearchResults products={products} />
      </Wrapper>
      <News />
      <Footer />
    </Container>
  );
};

export default Search;
