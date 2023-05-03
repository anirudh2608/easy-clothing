import { useState, useEffect, Fragment } from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { selectCategoriesIsLoading, selectCategoriesMap } from "../../store/categories/categories.selector"
import { selectIsPopUpOpen } from "../../store/user/user.selector"

import { POP_UP_TYPE } from "../../component/pop-up/popUpTypes"

import PopUp from "../../component/pop-up/PopUp.component"
import ProductCard from "../../component/product-card/ProductCard.component"
import Spinner from "../../component/spinner/Spinner.component"

import { CategoryContainer, Title } from "./category.style.jsx"

const Category = () => {
    const { category } = useParams()
    const [products, setProducts] = useState([])

    const isLoading = useSelector(selectCategoriesIsLoading)
    const categoriesMap = useSelector(selectCategoriesMap)
    const isSignIn = useSelector(selectIsPopUpOpen)

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [categoriesMap, category])

    useEffect(() => {
        document.title = `Easy Clothing - ${category}`
    }, [category])

    return (
        <Fragment>
            <Title>{category.toUpperCase()}</Title>
            {
                isLoading ? <Spinner /> :
                    (
                        <CategoryContainer>
                            {
                                products &&
                                products.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))
                            }
                        </CategoryContainer>
                    )
            }
            {isSignIn && <PopUp popUpType={POP_UP_TYPE.SIGN_IN_POP_UP} />}
        </Fragment>
    )
}

export default Category