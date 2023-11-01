import { all, takeLatest, call, put } from 'redux-saga/effects';

import {
    updateCartItemsFailed,
    updateCartItemsSuccess,
    fetchCartItemsFailed,
    fetchCartItemsSuccess
} from './cart.action';

import { CART_ACTION_TYPE } from './cart.types';

import { getCurrentUserCartItems, updateUserCartItems } from '../../utils/firebase/firebasse.utils';
import { getSingleProduct } from '../../api/single-product/single-product.api';



export function* fetchCartItemsAsync({ payload }) {
    try {
        const cart = yield call(getCurrentUserCartItems, payload)

        let cartItems = []
        for (const item of cart) {
            const product = yield getSingleProduct(item.id)
            cartItems.push({ ...product, quantity: item.quantity })
        }

        yield put(fetchCartItemsSuccess(cartItems))
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