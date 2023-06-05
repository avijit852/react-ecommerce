import { Facebook, Instagram, Mail, Phone, Room, Twitter, WhatsApp } from "@mui/icons-material"
import { styled } from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection:"column"})}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1``
const Desc = styled.p`
    margin: 20px 0px;
`
const SocialContain = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display:"none"})}
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;

`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 20;
    cursor: pointer;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor:"#fff8f8"})}
`
const ContactItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    
`
const Payment = styled.img`
    width: 50%;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Avijit Das</Logo>
                <Desc>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</Desc>
                <SocialContain>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="19A305">
                        <WhatsApp />
                    </SocialIcon>
                </SocialContain>
            </Left>
            <Center>
                <Title>Useful links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Women Fashion</ListItem>
                    <ListItem>Accressories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlish</ListItem>
                    <ListItem>Tream</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem> <Room style={{marginRight:10}}/> Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016 </ContactItem>
                <ContactItem> <Phone style={{marginRight:10}}/> +91 6294122856</ContactItem>
                <ContactItem> <Mail style={{marginRight:10}}/> avijitd852@gmail.com</ContactItem>
                <Payment src="https://www.manchestervideo.com/wp-content/uploads/2013/11/PP_UK_acceptancemark_198x50_white.png"/>
            </Right>
        </Container>
    )
}

export default Footer