import { CATEGORIES_ACTION_TYPES } from "./categories.types"


export const fetchCategoryProductsStart = (category) => {
    return ({
        type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_PRODUCTS_START,
        payload: category
    })
}

export const fetchCategoryProductsSuccess = (categoryProducts) => {
    return ({
        type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_PRODUCTS_SUCCESS,
        payload: categoryProducts
    })
}

export const fetchCategoryProductsFailed = (error) => {
    return ({
        type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_PRODUCTS_FAILED,
        payload: error
    })
}



export const fetchCategoriesPreviewStart = () => {
    return ({
        type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_PREVIEW_START
    })
}

export const fetchCategoriesPreviewSuccess = (categoriesPreview) => {
    return ({
        type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_PREVIEW_SUCCESS,
        payload: categoriesPreview
    })
}

export const fetchCategoriesPreviewFailed = (error) => {
    return ({
        type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_PREVIEW_FAILED,
        payload: error
    })
}


