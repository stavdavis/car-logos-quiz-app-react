import {createStore, applyMiddleware, combineReducers} from 'redux';
import lawmakers from './reducers/lawmaker-search-reducer';
import {setAuthToken, refreshAuthToken} from './actions/auth';

const store = createStore(
    combineReducers({
        form: formReducer,
        auth: authReducer,
        protectedData: protectedDataReducer,
        lawmakers
    }),
);

export default store;
 