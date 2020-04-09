import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

// import authReducer from './authReducer';
import listReducer from './listReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['list'], // reducer want to persist goes here (can be more than one) , if not given it wil persist all reducers
};
const rootReducer = combineReducers({
  // auth: authReducer,
  list: listReducer,
});
export default persistReducer(persistConfig, rootReducer);
