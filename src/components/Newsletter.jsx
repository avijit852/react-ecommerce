import { Send } from '@mui/icons-material'
import { styled } from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60vh;
    background-color: #fedbdb;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
    ${mobile({fontSize: "50px"})}
`
const Desc = styled.p`
    font-size: 24px;
    margin-bottom: 20px;
    font-weight: 300;
    ${mobile({textAlign: "center", fontSize: "20px"})}
`
const InputContain = styled.div`
    width: 50%;
    height: 40px;
    background-color: #f5f5f5;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({width: "80%"})}
`
const Input = styled.input`
    padding-left: 20px;
    border: none;
    flex: 12;
`
const Button = styled.button`
    flex: 1;
    border: none;
    cursor: pointer;
    background-color: teal;
    color: white;
`

const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Desc>
                Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
            </Desc>
            <InputContain>
                <Input placeholder='Enter your email'/>
                <Button>
                    <Send />
                </Button>
            </InputContain>
        </Container>
    )
}

export default Newsletter