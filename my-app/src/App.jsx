import "./App.css";
import Product from "./Pages/Product/Product";
import Home from "./Pages/Home/Home";
import ProductList from "./Pages/ProductList/ProductList";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Cart from "./Pages/Cart/Cart";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Success from "./Pages/Success/Success";
import { useSelector } from "react-redux";
import Search from "./Pages/Search/Search";
import CheckoutPage from "./Components/CheckoutPage/checkoutPage";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  console.log("Current User:", user);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/register"
          element={<Register />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
