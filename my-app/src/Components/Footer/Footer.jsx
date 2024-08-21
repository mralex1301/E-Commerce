import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactPhoneOutlinedIcon from "@mui/icons-material/ContactPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";

import {
  Container,
  Left,
  Logo,
  Description,
  Socials,
  SocialIcon,
  Center,
  Title,
  List,
  ListItem,
  Right,
  ContactItem,
  Payment,
} from "./Footer.styled";

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Alex</Logo>
        <Description>Your favorite online clothing shop!</Description>
        <Socials>
          <SocialIcon color="3B5999">
            <FacebookIcon />
          </SocialIcon>

          <SocialIcon color="34405F">
            <InstagramIcon />
          </SocialIcon>

          <SocialIcon color="55ACEE">
            <XIcon />
          </SocialIcon>

          <SocialIcon color="E60023">
            <LinkedInIcon />
          </SocialIcon>
        </Socials>
      </Left>

      <Center>
        <Title>Links</Title>
        <List>
          <ListItem>FAQ</ListItem>
          <ListItem>Returns & Exchanges</ListItem>
          <ListItem>Shipping Information</ListItem>
          <ListItem>Track Your Order</ListItem>
          <ListItem>Privacy Policy</ListItem>
          <ListItem>Terms of Service</ListItem>
        </List>
      </Center>

      <Right>
        <Title>Contact Us</Title>
        <ContactItem>
          1-800-555-1234
          <ContactPhoneOutlinedIcon />
        </ContactItem>
        <ContactItem>
          alex-clothing@gmail.com
          <EmailOutlinedIcon />
        </ContactItem>
        <ContactItem>
          45 Baker Street London W1U 8ED <BusinessOutlinedIcon />
        </ContactItem>

        <Payment src="" />
      </Right>
    </Container>
  );
};

export default Footer;
