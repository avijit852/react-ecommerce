import { Send } from '@mui/icons-material'
import { styled } from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60vh;
    background-color: #fec0c0;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`
const Desc = styled.p`
    font-size: 24px;
    margin-bottom: 20px;
    font-weight: 300;
`
const InputContain = styled.div`
    width: 50%;
    height: 40px;
    background-color: #f5f5f5;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
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
            <Title>New Letter</Title>
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