import { UPDATE } from 'constants/ReduxConstants'


// Reducer
export function counterReducers(state = { count: 0 }, action) {
    switch (action.type) {
        case UPDATE:
            return {
                ...state,
                count: state.count + action.payload
            };
        default:
            return state;
    }
}