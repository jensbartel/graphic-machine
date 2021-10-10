import { useReducer } from 'react';
import FilterContext from './filterContext';
import filterReducer from './filterReducer';
import { SET_FILTER, REMOVE_FILTER } from './types';

const FilterState = props => {
    const initialState = {
        filtered: [],
    };

    const [state, dispatch] = useReducer(filterReducer, initialState);

    const setFilter = tool => {
        dispatch({ type: SET_FILTER, payload: tool });
    };

    const removeFilter = () => {
        dispatch({ type: REMOVE_FILTER });
    };

    return (
        <FilterContext.Provider
            value={{
                filter: state,
                setFilter,
                removeFilter,
            }}
        >
            {props.children}
        </FilterContext.Provider>
    );
};

export default FilterState;
