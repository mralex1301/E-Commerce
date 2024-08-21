import { Button, Container, Message, MessageTwo, SuccessContainer, SuccessImage, SuccessWindow } from "./Success.styled"
import Announcements from '../../Components/Announcements/Announcements'
import Navbar from '../../Components/Navbar/Navbar'
import News from '../../Components/News/News'
import Footer from '../../Components/Footer/Footer'
import { useNavigate } from "react-router-dom"


const Success = () => {
    const navigate = useNavigate();
    const handleClick = (e) => {
        navigate('/');
    };

  return (
    <Container>
        <Announcements/>
        <Navbar/>
        <SuccessContainer>
            <SuccessWindow>
                <SuccessImage src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQWN-SLzk5eeEuA9zBJKzsM0qbvtLsKDfJ-w&s'></SuccessImage>
                <Message>Payment Succeeded!</Message>
                <MessageTwo>Thank you for shopping with us! Your payment has been processed. </MessageTwo>
                <Button onClick={handleClick}>Homepage</Button>
            </SuccessWindow>
        </SuccessContainer>
        <News/>
        <Footer/> 
    </Container>
  )
}

export default Success