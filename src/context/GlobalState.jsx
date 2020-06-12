import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
//initial state
const initialState = {
    transactions: []
}

//create context
export const globalContext = createContext(initialState)

//provider components
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    function deleteTransaction(id) {
        dispatch({
            type: 'deleteTransaction',
            payload: id
        })
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'addTransaction',
            payload: transaction
        })
    }

    return (<globalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction

    }}>
        {children}
    </globalContext.Provider>)
}