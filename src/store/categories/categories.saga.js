import { all, takeLatest, call, put } from 'redux-saga/effects';

import {
    fetchCategoriesPreviewFailed,
    fetchCategoriesPreviewSuccess,
    fetchCategoryProductsFailed,
    fetchCategoryProductsSuccess
} from "./categories.action"

import { CATEGORIES_ACTION_TYPES } from './categories.types';

import { getGetProductsByCategory } from '../../api/products-by-category/productsByCategory.api';
import { getProductsPreviewByCategory } from '../../api/product-category-preview/productCategoryPreview.api';



export function* fetchCategoryProductsAsync({ payload }) {
    try {
        const categoryProducts = yield call(getGetProductsByCategory, payload);
        yield put(fetchCategoryProductsSuccess(categoryProducts))
    } catch (error) {
        yield put(fetchCategoryProductsFailed(error))
    }
}


export function* fetchCategoriesPreviewAsync() {
    try {
        const categoriesPreview = yield call(getProductsPreviewByCategory);
        yield put(fetchCategoriesPreviewSuccess(categoriesPreview))
    } catch (error) {
        yield put(fetchCategoriesPreviewFailed(error))
    }
}

export function* onFetchCategoryProducts() {
    yield takeLatest(
        CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_PRODUCTS_START,
        fetchCategoryProductsAsync
    )
}

export function* onFetchcategoriesPreview() {
    yield takeLatest(
        CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_PREVIEW_START,
        fetchCategoriesPreviewAsync
    )
}

export function* categoriesSaga() {
    yield all([
        call(onFetchCategoryProducts),
        call(onFetchcategoriesPreview),
    ])
}