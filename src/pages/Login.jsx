import { styled } from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient( 
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
        ),
        url("https://www.careeraddict.com/uploads/article/60419/entrepreneurship-product-ideas.png") center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    ${mobile({ width:"75%"})}
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const From = styled.form`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    flex: 1;
    margin: 15px 0;
    padding: 15px;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 20px;
`
const Link = styled.a`
    margin: 5px 0;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`

const Login = () => {
  return (
    <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <From>
                    <Input placeholder="username" />
                    <Input placeholder="password" />
                    <Button>LOGIN</Button>
                    <Link>DO NOT REMEMBER THE PASSWORD ?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </From>
            </Wrapper>
        </Container>
  )
}

export default Login