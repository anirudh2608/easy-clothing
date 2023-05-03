import {
    compose,
    createStore,
    applyMiddleware
} from "redux"

// import { persistStore, persistReducer } from "redux-persist"
// import storage from "redux-persist/lib/storage"

import { logger } from "redux-logger"

import createSagaMiddleware from 'redux-saga'

import { rootReducer } from "./root-reducer"
import { rootSaga } from "./root-saga"


// const persistConfig = {
//     key: "root",
//     storage,
//     whitelist: []
// }

const sagaMiddleware = createSagaMiddleware()

// const persistedReducer = persistReducer(persistConfig, rootReducer)

const middlerWare = [
    process.env.NODE_ENV !== 'production' && logger,
    sagaMiddleware,
  ].filter(Boolean);

const composedEnhancers = compose(applyMiddleware(...middlerWare))

export const store = createStore(rootReducer, undefined, composedEnhancers)


sagaMiddleware.run(rootSaga)


// export const persistor = persistStore(store)