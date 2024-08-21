import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Agreement,
  Button,
} from "./Register.styled";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { register } from "../../redux/apiCalls";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isRegistering } = useSelector((state) => state.registration);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    if (!name || !lastName || !email || !username || !password) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      await register(dispatch, { username, email, password });
      navigate("/");
    } catch (error) {
      alert("Registration failed", error);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Create Account</Title>
        <Form>
          <Input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <Input
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            placeholder="Confirm password"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Agreement>
            By creating an account, you agree to provide accurate information,
            maintain the security of your account, comply with our terms of
            service, and consent to our <b>PRIVACY POLICY</b>.
          </Agreement>
          <Button onClick={handleClick} disabled={isRegistering}>
            Create Account
          </Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
