import { SET_FILTER, REMOVE_FILTER } from './types';

const filterReducer = (state, action) => {
    switch (action.type) {
        case SET_FILTER:
            const filtered_nonunique = [...state.filtered, action.payload];
            return {
                filtered: [...new Set(filtered_nonunique)],
            };
        case REMOVE_FILTER:
            return { state: 'filter removed' };
        default:
            return state;
    }
};

export default filterReducer;
