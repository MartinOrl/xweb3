import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import UserReducer from './user/userReducer';

const rootReducer = combineReducers({
    user: UserReducer.reducer
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["user"]
}

export default persistReducer(persistConfig, rootReducer)