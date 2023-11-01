import { Fragment, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { fetchCategoriesPreviewStart } from "../../store/categories/categories.action"

import { selectCategoriesIsLoading, selectCategoriesMap } from "../../store/categories/categories.selector"
import { selectIsPopUpOpen } from "../../store/user/user.selector"

import CategoryPreview from "../../component/category-preview/CategoryPreview.component"
import PopUp from "../../component/pop-up/PopUp.component"

import { POP_UP_TYPE } from "../../component/pop-up/popUpTypes"
import SkeletonProducts from "../../component/skeleton/skeletonProducts.component"


const CategoriesPreview = () => {

    const [categoriesProducts, setCategoriesProducts] = useState([])

    const categoriesMap = useSelector(selectCategoriesMap)
    const isLoading = useSelector(selectCategoriesIsLoading)
    const isSignIn = useSelector(selectIsPopUpOpen)

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchCategoriesPreviewStart())
    }, [])


    useEffect(() => {
        if (categoriesMap.length > 0) {
            if ("products" in categoriesMap[0]) {
                setCategoriesProducts(categoriesMap)
            }
        }
    }, [categoriesMap])


    return (

        <Fragment>
            {
                isLoading ?
                    [...Array(4)].map((_, i) =>
                        <SkeletonProducts category={true} key={i} />) :
                    (categoriesProducts.map(categoryProduct => {
                        const { category, products } = categoryProduct
                        return <CategoryPreview key={category} category={category} products={products} />
                    }))
            }

            {isSignIn && <PopUp popUpType={POP_UP_TYPE.SIGN_IN_POP_UP} />}
        </Fragment>

    )
}

export default CategoriesPreview