import React, { createContext, useReducer } from "react";

type AppState = typeof initialState;
type Action =
    {
        type: 'SET_SEARCH',  payload: string
    } |
    {
        type: 'SET_PAGE',  payload: number
    }|
    {
        type: 'PAGE_INCREMENT'
    }|
    {
        type: 'PAGE_DECREMENT'
    }|
    {
        type: 'SET_ORDER',  payload: Order
    }

interface InputProviderProps{
    children: React.ReactNode;
    filter: Filter;
}

export enum Order {
    Ascending,
    Descending
}

export interface Filter{
    page: number;
    search: string;
    order: Order;
    resultsPerPage?: number;
    options: string[];
    showFilter?: boolean;
}

const initialState: Filter = {
    page: 1,
    search: '',
    order: Order.Descending,
    resultsPerPage: 7,
    options: []
};

const reducer = (state: AppState, action: Action) => {
    switch (action.type) {
        case "SET_SEARCH":
            return {
                ...state,
                search: action.payload,
            };
        case "SET_PAGE":
            return {
                ...state,
                page: action.payload,
            };
        case "PAGE_INCREMENT":
            return {
                ...state,
                page: state.page + 1,
            };
        case "PAGE_DECREMENT":
            return {
                ...state,
                page: state.page - 1,
            };
        case "SET_ORDER":
            return {
                ...state,
                order: action.payload,
            };
        default:
            return state;
    }
};

const InputValueContext = createContext<{
    state: AppState;
    dispatch: React.Dispatch<Action>
}>({state: initialState, dispatch: () => {}});

function InputValueProvider({children, filter}: InputProviderProps) {
    const [state, dispatch] = useReducer(reducer, filter);

    return (
        <InputValueContext.Provider value={{ state, dispatch }}>
            {children}
        </InputValueContext.Provider>
    );
}

export { InputValueContext, InputValueProvider };