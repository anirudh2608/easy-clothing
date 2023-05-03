import { Link } from "react-router-dom"

import ProductCard from "../product-card/ProductCard.component"

import {
    CategoryPreviewContainer,
    Title,
    Priview
} from "./category-preview.styles"
import { Fragment } from "react"

const CategoryPreview = ({ title, products }) => {
    return (
        <Fragment>
            <CategoryPreviewContainer>
                <Link to={title} >
                    <h2>
                        <Title>{title.toUpperCase()}</Title>
                    </h2>
                </Link>
                <Priview>
                    {
                        products.filter((_, idx) => idx < 4)
                            .map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))
                    }
                </Priview>
            </CategoryPreviewContainer>
        </Fragment>
    )
}

export default CategoryPreview