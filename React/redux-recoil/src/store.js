import { createStore, combineReducers } from 'redux'
import { counterReducers } from 'screen/CounterReducers';

const reducer = combineReducers({
    counter: counterReducers,
})

const store = createStore(reducer);

export default store

