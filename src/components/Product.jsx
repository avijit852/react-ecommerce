import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material"
import { styled } from "styled-components"

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
    background-color: rgba(0,0,0,0.2);
    transition: all 0.7s ease;
`

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 300px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;

    &:hover ${Info}{
        opacity: 1;
    }
`
const Circle = styled.div`
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`
const Image = styled.img`
    width: 75%;
    z-index: 2;
`

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #f6f6f6;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover{
        background-color: #ffffff;
        transform: scale(1.2);
    }
`

const Product = ({ item, key }) => {
    return (
        <Container key={key}>
            <Circle></Circle>
            <Image src={item.img} />
            <Info>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>
                <Icon>
                    <SearchOutlined />
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined />
                </Icon>
            </Info>

        </Container>
    )
}

export default Product