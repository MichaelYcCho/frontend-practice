import { UPDATE } from 'constants/ReduxConstants';


// Action creators
export const update = (payload) => {
    return { type: UPDATE, payload };
}