import { Fragment } from "react"
import { useSelector } from "react-redux"

import { selectCategoriesIsLoading, selectCategoriesMap } from "../../store/categories/categories.selector"
import { selectIsPopUpOpen } from "../../store/user/user.selector"

import CategoryPreview from "../../component/category-preview/CategoryPreview.component"
import Spinner from "../../component/spinner/Spinner.component"
import PopUp  from "../../component/pop-up/PopUp.component"

import  { POP_UP_TYPE } from "../../component/pop-up/popUpTypes"


const CategoriesPreview = () => {

    const categoriesMap = useSelector(selectCategoriesMap)
    const isLoading = useSelector(selectCategoriesIsLoading)
    const isSignIn = useSelector(selectIsPopUpOpen)

    return (

        <Fragment>
            {
                isLoading ? <Spinner /> :
                    (Object.keys(categoriesMap).map(title => {
                        const products = categoriesMap[title]
                        return <CategoryPreview key={title} title={title} products={products} />
                    }))
            }
            {isSignIn && <PopUp popUpType={POP_UP_TYPE.SIGN_IN_POP_UP} />}
        </Fragment>

    )
}

export default CategoriesPreview