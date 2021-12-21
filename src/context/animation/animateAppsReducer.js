import { SET_TRIGGER, REMOVE_TRIGGER } from '../types';

const animateAppsReducer = (state, action) => {
    switch (action.type) {
        case SET_TRIGGER:
            const id = action.payload;
            let trigger = state.animate;

            switch (id) {
                case 1:
                    trigger = { webapp1: true, webapp2: true, webapp3: false };
                    break;
                case 2:
                    trigger = { webapp1: true, webapp2: true, webapp3: true };
                    break;
                default:
                    break;
            }
            return {
                animate: trigger,
            };
        case REMOVE_TRIGGER:
            return { animate: action.payload };
        default:
            return state;
    }
};

export default animateAppsReducer;
