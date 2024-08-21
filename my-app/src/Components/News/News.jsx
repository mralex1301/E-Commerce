import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { Container,Title,Description,InputContainer,Input,Button } from "./News.styled";

const News = () => {
  return (
    <Container>
      <Title>NEWS</Title>
      <Description>
        Subscribe for regular updates on your favorite products!
      </Description>
      <InputContainer>
        <Input type="text" placeholder="Enter your e-mail" />
        <Button>
          <SendOutlinedIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default News;
