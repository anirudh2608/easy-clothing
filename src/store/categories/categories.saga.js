import { all, takeLatest, call, put } from 'redux-saga/effects';

import { fetchCategoriesSuccess, fetchCategoriesFailed } from "./categories.action"

import { getCollectionAndDocuments } from "../../utils/firebase/firebasse.utils";

import { CATEGORIES_ACTION_TYPES } from './categories.types';





export function* fetchCategoriesAsync() {
    try {
        const categories = yield call(getCollectionAndDocuments, 'categories');
        yield put(fetchCategoriesSuccess(categories))
    } catch (error) {
        yield put(fetchCategoriesFailed(error))
    }
}

export function* onFetchcategories() {
    yield takeLatest(
        CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
        fetchCategoriesAsync
    )
}

export function* categoriesSaga() {
    yield all([call(onFetchcategories)])
}