import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
//initial state
const initialState = {
    transactions: [
        { id: 1, text: 'React course', amount: -40},
        { id: 1, text: 'Incentive', amount: 50},
        { id: 1, text: 'Gadgets', amount: -60},
        { id: 1, text: 'Earnings', amount: 100},
    ]
}

//create context
export const globalContext = createContext(initialState)

//provider components
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    return (<globalContext.Provider value={{
        transactions: state.transactions
    }}>
        {children}
    </globalContext.Provider>)
}