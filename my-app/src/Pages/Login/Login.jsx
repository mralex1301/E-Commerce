import { useEffect, useState } from "react";
import { login } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { removeError } from "../../redux/userRedux";
import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Button,
  Error,
  StyledLink,
} from "./Login.styled";

const Login = () => {
  useEffect(() => {
    dispatch(removeError());
  });

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} disabled={isFetching}>
            Login
          </Button>
          {error && <Error>Something went wrong.. </Error>}
          <StyledLink>Forgotten Password</StyledLink>
          <StyledLink to="/register">Create Account</StyledLink>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
