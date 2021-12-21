import { useReducer } from 'react';
import AnimateAppsContext from './animateAppsContext';
import animateAppsReducer from './animateAppsReducer';
import { SET_TRIGGER, REMOVE_TRIGGER } from '../types';

const AnimateAppsState = props => {
    const initialState = {
        animate: {
            webapp1: true,
            webapp2: false,
            webapp3: false,
        },
    };

    const [state, dispatch] = useReducer(animateAppsReducer, initialState);

    const setAnimateApps = item => {
        dispatch({ type: SET_TRIGGER, payload: item });
    };

    const clearAnimateApps = () => {
        dispatch({ type: REMOVE_TRIGGER, payload: initialState.animate });
    };

    return (
        <AnimateAppsContext.Provider
            value={{
                animate: state.animate,
                setAnimateApps,
                clearAnimateApps,
            }}
        >
            {props.children}
        </AnimateAppsContext.Provider>
    );
};

export default AnimateAppsState;
