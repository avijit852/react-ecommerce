import { styled } from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { mobile } from "../responsive"

const Container = styled.div``
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
    ${mobile({ width:"0px 20px", display:"flex", flexDirection:"column"})}
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight:"0px"})}
`
const Select = styled.select`
    padding: 10px 20px;
    margin-right: 20px;
    font-size: 16px;
    ${mobile({ margin:"10px 0px"})}
`
const Option = styled.option`
    font-weight: 500;
`
const Productlist = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>Dress</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products: </FilterText>
                    <Select>
                        <Option selected>Color</Option>
                        <Option>Red</Option>
                        <Option>Greed</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Black</Option>
                        <Option>White</Option>
                    </Select>
                    <Select>
                        <Option selected>Size</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                        <Option>XXl</Option>
                        <Option>XXXL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select>
                        <Option selected>Newest</Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Productlist