import {
    Heading,
    NewArrivalContainer,
    Product,
    ProductImg,
    ProductsContainer,
    ProductInfo,
} from "./newArrival.style"

import New_Arrival_Image_1 from "../../assets/New_Arrival_Image_1.webp"
import New_Arrival_Image_2 from "../../assets/New_Arrival_Image_2.webp"
import New_Arrival_Image_3 from "../../assets/New_Arrival_Image_3.webp"

const NewArrivals = () => {
    return (
        <NewArrivalContainer>
            <Heading>New Arrivals</Heading>
            <ProductsContainer>
                <Product>
                    <ProductImg imgURL={New_Arrival_Image_1} />
                    <ProductInfo to="shop/womens-dresses">Women Dresses</ProductInfo>
                </Product>
                <Product>
                    <ProductImg imgURL={New_Arrival_Image_2} />
                    <ProductInfo to="shop/mens-shoes">Mens Shoes</ProductInfo>
                </Product>
                <Product>
                    <ProductImg imgURL={New_Arrival_Image_3} />
                    <ProductInfo to="shop/mens-shirts">Mens Shirt</ProductInfo>
                </Product>
            </ProductsContainer>
        </NewArrivalContainer>
    )
}

export default NewArrivals