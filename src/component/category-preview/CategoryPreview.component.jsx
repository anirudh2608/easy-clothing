import { Link } from "react-router-dom"

import ProductCard from "../product-card/ProductCard.component"

import {
    CategoryPreviewContainer,
    Title,
    Priview
} from "./category-preview.styles"


import { Fragment } from "react"

const CategoryPreview = ({ category, products }) => {
    return (
        <Fragment>
            <CategoryPreviewContainer>
                <Link to={category} >
                    <h2>
                        <Title>{category.toUpperCase()}</Title>
                    </h2>
                </Link>
                <Priview>
                    {
                        products.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))
                    }
                </Priview>
            </CategoryPreviewContainer>
        </Fragment>
    )
}

export default CategoryPreview