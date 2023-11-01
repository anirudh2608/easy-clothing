import { useState, useEffect, Fragment } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { selectCategoriesIsLoading, selectCategoriesMap } from "../../store/categories/categories.selector"
import { selectIsPopUpOpen } from "../../store/user/user.selector"

import { fetchCategoryProductsStart } from "../../store/categories/categories.action"

import { POP_UP_TYPE } from "../../component/pop-up/popUpTypes"

import PopUp from "../../component/pop-up/PopUp.component"
import ProductCard from "../../component/product-card/ProductCard.component"
import Filter from "../../component/filter/Filter.component"
import SkeletonProducts from "../../component/skeleton/skeletonProducts.component"

import { CategoryContainer, FilterMenu, OuterContainer, Title } from "./category.style.jsx"


const Category = () => {
    const { category } = useParams()

    const [products, setProducts] = useState([])

    const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false)

    const isLoading = useSelector(selectCategoriesIsLoading)
    const categoriesMap = useSelector(selectCategoriesMap)
    const isSignIn = useSelector(selectIsPopUpOpen)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCategoryProductsStart(category))
    }, [category])


    const togglerFilterMenu = (boolean) => {
        setIsFilterMenuOpen(boolean)
    }

    useEffect(() => {
        if (categoriesMap.length > 0)
            if ("products" in categoriesMap[0]) return
        setProducts(categoriesMap)
    }, [categoriesMap])


    useEffect(() => {
        document.title = `Easy Clothing - ${category}`
    }, [category])


    return (
        <Fragment>
            <Title>{category.toUpperCase()}</Title>

            <FilterMenu
                isFilterMenuOpen={isFilterMenuOpen}
                onClick={() => togglerFilterMenu(true)}>
                Filter
            </FilterMenu>



            {
                isLoading ?
                    <SkeletonProducts category={false} />
                    :
                    (
                        <OuterContainer>

                            <Filter
                                filterProductsHandler={setProducts}
                                filterMenuHandler={togglerFilterMenu}
                                isFilterMenuOpen={isFilterMenuOpen}
                            />

                            <CategoryContainer>
                                {
                                    (products.length > 0) &&
                                    products.map((product) => (
                                        <ProductCard key={product.id} product={product} />
                                    ))
                                }
                            </CategoryContainer>
                        </OuterContainer>
                    )
            }
            {isSignIn && <PopUp popUpType={POP_UP_TYPE.SIGN_IN_POP_UP} />}
        </Fragment>
    )
}

export default Category