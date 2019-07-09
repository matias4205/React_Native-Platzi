import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import thunk from 'redux-thunk';

import videosReducer from './src/reducers/videos';

const composeEnhancers = composeWithDevTools({ });

const persistConfig = {
    key: 'root',
    storage: storage,
    blacklist: [
        'videosReducer'
    ]
}

const videosPersistConfig = {
    key: 'videosReducer',
    storage: storage,
    blacklist: ['selectedMovie']
}

const rootReducer = combineReducers({
    videosReducer: persistReducer(videosPersistConfig, videosReducer)
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
    persistedReducer,
    {},
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

const persistor = persistStore(store)

export { persistor, store };