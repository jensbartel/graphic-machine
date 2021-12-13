import { useReducer } from 'react';
import AnimationContext from './animationContext';
import animationReducer from './animationReducer';
import { SET_TRIGGER, REMOVE_TRIGGER } from '../types';

const AnimationState = props => {
    const initialState = {
        animate: {
            webpage1: true,
            webpage2: false,
            webpage3: false,
            webpage4: false,
        },
    };

    const [state, dispatch] = useReducer(animationReducer, initialState);

    const setAnimation = item => {
        dispatch({ type: SET_TRIGGER, payload: item });
    };

    const clearAnimation = () => {
        dispatch({ type: REMOVE_TRIGGER, payload: initialState.animate });
    };

    return (
        <AnimationContext.Provider
            value={{
                animate: state.animate,
                setAnimation,
                clearAnimation,
            }}
        >
            {props.children}
        </AnimationContext.Provider>
    );
};

export default AnimationState;
