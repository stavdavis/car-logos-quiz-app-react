import {createStore, combineReducers} from 'redux';
import questionsReducer from './reducers/questions-reducer';

const store = createStore(
    questionsReducer       //ES6 equivalent to questionsReducer: questionsReducer
);

export default store;