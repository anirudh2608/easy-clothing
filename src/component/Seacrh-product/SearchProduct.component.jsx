import { Container, ProductImg, ProductName } from "./seacrh-product.style"

const SearchProduct = ({ product}) => {
    
    const { thumbnail, title } = product
    return (
        <Container ifProducts={product}>
            <ProductImg imgURL={thumbnail} />
            <ProductName>
                {title}
            </ProductName>
        </Container>
    )
}

export default SearchProduct