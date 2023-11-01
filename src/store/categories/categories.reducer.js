import { CATEGORIES_ACTION_TYPES } from "./categories.types"

const CATEGORIES_INIIAL_STATE = {
    categoriesMap: [],
    isLoading: false,
    isSearchResultShown: false,
    error: null
}

export const categoriesReducer = (state = CATEGORIES_INIIAL_STATE, action = {}) => {

    const { type, payload } = action

    switch (type) {
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_PREVIEW_START:
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_PRODUCTS_START:
            return {
                ...state,
                isLoading: true
            }
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_PREVIEW_SUCCESS:
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_PRODUCTS_SUCCESS:
            return {
                ...state,
                categoriesMap: payload,
                isLoading: false
            }
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_PREVIEW_FAILED:
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_PRODUCTS_FAILED:
            return {
                ...state,
                error: payload,
                isLoading: false
            }
        default:
            return state
    }
}