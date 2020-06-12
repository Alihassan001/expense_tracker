import React, { useContext } from 'react'
import './Balance.modules.css'
import { globalContext } from '../../context/GlobalState'

export default function Balance() {
    const { transactions } = useContext(globalContext)
    const amount = transactions.map(transaction => transaction.amount)
    const total = amount.reduce((acc, item) => (acc += item),0).toFixed(2)
    
    return (
        <div className='balanceContainer'>
            <p className='title'>YOUR BALANCE </p>
            <h1 className="amount">$ {total}</h1>
        </div>
    )
}