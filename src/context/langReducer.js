import { SET_LANG, REMOVE_LANG } from './types';

const langReducer = (state, action) => {
    switch (action.type) {
        case SET_LANG:
            // return { ...state, lang: 'francais' };
            return { state: 'francais' };
        case REMOVE_LANG:
            // return { ...state, lang: '' };
            return { state: '' };
        default:
            return state;
    }
};

export default langReducer;
