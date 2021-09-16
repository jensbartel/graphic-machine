import { SET_LANG, REMOVE_LANG } from './types';

const langReducer = (state, action) => {
    switch (action.type) {
        case SET_LANG:
            console.log('francais');
            return { ...state, lang: 'francais' };
        case REMOVE_LANG:
            console.log('english');
            return { ...state, lang: '' };
        default:
            return state;
    }
};

export default langReducer;
