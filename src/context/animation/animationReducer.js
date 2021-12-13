import { SET_TRIGGER, REMOVE_TRIGGER } from '../types';

const animationReducer = (state, action) => {
    switch (action.type) {
        case SET_TRIGGER:
            const id = action.payload;
            let trigger = state.animate;
            // console.log('trigger', trigger);
            switch (id) {
                case 1:
                    trigger = { webpage1: true, webpage2: true, webpage3: false, webpage4: false };
                    break;
                case 2:
                    trigger = { webpage1: true, webpage2: true, webpage3: true, webpage4: false };
                    break;
                case 3:
                    trigger = { webpage1: true, webpage2: true, webpage3: true, webpage4: true };
                    break;
                default:
                    break;
            }
            return {
                animate: trigger,
            };
        case REMOVE_TRIGGER:
            return { state: null };
        default:
            return state;
    }
};

export default animationReducer;
