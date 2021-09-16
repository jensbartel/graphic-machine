import { useReducer } from 'react';
import LangContext from './langContext';
import langReducer from './langReducer';

import { SET_LANG, REMOVE_LANG } from './types';

const LangState = props => {
    const initialState = '';

    const [state, dispatch] = useReducer(langReducer, initialState);

    const setLang = () => {
        dispatch({ type: SET_LANG });
    };

    const removeLang = () => {
        dispatch({ type: REMOVE_LANG });
    };

    return (
        <LangContext.Provider
            value={{
                lang: state,
                setLang,
                removeLang,
            }}
        >
            {props.children}
        </LangContext.Provider>
    );
};

export default LangState;
