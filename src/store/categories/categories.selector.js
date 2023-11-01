import { createSelector } from "reselect"

const selectCategoryReducer = (state) => state.categories

export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categoriesMap
);

export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) => categories
);

export const selectCategoryProducts = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categoryProducts
);

export const selectCategoryProductsMap = createSelector(
    [selectCategoryProducts],
    (categoryProduct) => categoryProduct
);

export const selectCategoriesIsLoading = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.isLoading
)