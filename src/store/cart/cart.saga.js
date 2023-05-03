import { all, takeLatest, call, put } from 'redux-saga/effects';

import {
    updateCartItemsFailed,
    updateCartItemsSuccess,
    fetchCartItemsFailed,
    fetchCartItemsSuccess
} from './cart.action';

import { CART_ACTION_TYPE } from './cart.types';

import { getCurrentUserCartItems, updateUserCartItems } from '../../utils/firebase/firebasse.utils';



export function* fetchCartItemsAsync({ payload }) {
    try {
        const cart = yield call(getCurrentUserCartItems, payload)
        yield put(fetchCartItemsSuccess(cart))
    }
    catch (error) {
        yield put(fetchCartItemsFailed(error))
    }
}

export function* updateCartStart({ payload: { newCartItems, currentUserId } }) {
    try {
        yield call(updateUserCartItems, currentUserId, newCartItems)
        yield put(updateCartItemsSuccess(newCartItems))
    }
    catch (error) {
        yield put(updateCartItemsFailed(error))
    }

}

export function* onFetchCartItems() {
    yield takeLatest(CART_ACTION_TYPE.FETCH_CART_ITEMS_START, fetchCartItemsAsync)
}

export function* onUpdateCartStart() {
    yield takeLatest(CART_ACTION_TYPE.UPDATE_CART_START, updateCartStart)
}

export function* cartSaga() {
    yield all([call(onFetchCartItems), call(onUpdateCartStart)])
}