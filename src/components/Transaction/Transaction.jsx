import React, { useContext } from 'react'
import './Transaction.modules.css'
import { globalContext } from '../../context/GlobalState'

export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(globalContext)

    const sign = transaction.amount < 0 ? '-' : '+';
    return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
        <span className='btnContainer'>
            <button className='button' onClick={() => deleteTransaction(transaction.id)}>X</button>
            <span>{transaction.text}</span>
        </span>
        <span>{sign}$ {Math.abs(transaction.amount)}</span>
    </li>
    )

}