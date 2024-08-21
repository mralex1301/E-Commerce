import Search from "@mui/icons-material/Search";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { Info, Container, Circle, Image, Icon } from "./Product.styled";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartRedux";

const Product = ({ item }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
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

  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon onClick={handleClick}>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
            <Search />
          </Link>
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
