import { styled } from "styled-components"
import { popularProducts } from '../data'
import Products from "./Products"
const Container = styled.div`
    
`

const Product = () => {
    return (
        <Container>
            {popularProducts.map(item => (
                <Products item={item} key={item.id} />
            ))}

        </Container>
    )
}

export default Product