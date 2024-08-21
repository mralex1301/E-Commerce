import Announcements from "../../Components/Announcements/Announcements";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import AddOutlined from "@mui/icons-material/AddOutlined";
import RemoveOutlined from "@mui/icons-material/RemoveOutlined";
import { useSelector } from "react-redux";
import {
  Container,
  Wrapper,
  Title,
  Top,
  TopButton,
  Info,
  Product,
  ProductDetails,
  Image,
  Details,
  ProductName,
  Bottom,
  ProductId,
  ProductColor,
  ProductSize,
  PriceDetail,
  AmountContainer,
  ProductAmount,
  ProductPrice,
  Break,
  Summary,
  SummaryTitle,
  SummaryItem,
  SummaryItemText,
  Button,
} from "./Cart.styled";
import { resetCart, updateProductQuantity } from "../../redux/cartRedux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const clearCart = () => {
    dispatch(resetCart());
  };
console.log(cart.products)
  return (
    <Container>
      <Announcements />
      <Navbar />
      <Wrapper>
        <Title>Your Cart</Title>
        <Top>
          <Link to="/">
            <TopButton>Continue Shopping</TopButton>
          </Link>
          <TopButton type="filled" onClick={clearCart}>
            Clear Cart
          </TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => {
              const handleClick = (type) => {
                console.log("type", type);
                let newQuantity = product.quantity;

                if (type === "decrease") {
                  newQuantity = Math.max(0, product.quantity - 1);
                } else if (type === "increase") {
                  newQuantity = product.quantity + 1;
                }
                console.log("newQuantity", product);
                    dispatch(
                      updateProductQuantity({
                        id: product.id,
                        size: product.size,
                        color: product.color,
                        quantity: newQuantity,
                      })
                    );
              };

              return (
                <>
                  <Product key={product.id}>
                    <ProductDetails>
                      <Image src={product.img} />
                      <Details>
                        <ProductName>
                          <b>Product:</b> {product.title}
                        </ProductName>
                        <ProductId>
                          <b>ID:</b> {product.id}
                        </ProductId>
                        <ProductColor color={product.color} />
                        <ProductSize>
                          <b>Size:</b> {product.size}
                        </ProductSize>
                      </Details>
                    </ProductDetails>
                    <PriceDetail>
                      <AmountContainer>
                        <AddOutlined
                          onClick={() => handleClick("increase")}
                          style={{ cursor: "pointer" }}
                        />
                        <ProductAmount>{product.quantity}</ProductAmount>
                        <RemoveOutlined
                          onClick={() => handleClick("decrease")}
                          style={{ cursor: "pointer" }}
                        />
                      </AmountContainer>
                      <ProductPrice>
                        ${product.price * product.quantity}{" "}
                      </ProductPrice>
                    </PriceDetail>
                  </Product>
                  <Break />
                </>
              );
            })}
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal:</SummaryItemText>
              <SummaryItemText>
                $
                {cart.products.reduce(
                  (total, product) => total + product.price * product.quantity,
                  0
                )}
              </SummaryItemText>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Costs:</SummaryItemText>
              <SummaryItemText>$7</SummaryItemText>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Grand Total:</SummaryItemText>
              <SummaryItemText>
                $
                {cart.products.reduce(
                  (total, product) => total + product.price * product.quantity,
                  0
                ) + 7}
              </SummaryItemText>
            </SummaryItem>
            <Link to="/checkout">
              <Button>Checkout Now</Button>
            </Link>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
