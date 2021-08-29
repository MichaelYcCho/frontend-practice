import { createStore, combineReducers } from 'redux'
import { counterReducers } from 'reducers/CounterReducers';

const reducer = combineReducers({
    counter: counterReducers,
})

const store = createStore(reducer);

export default store

