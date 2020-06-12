import React, { useContext } from 'react'
import './TransactionList.modules.css'
import { globalContext } from '../../context/GlobalState'
import { Transaction } from '../Transaction/Transaction'

export default function TransactionList() {
    const { transactions } = useContext(globalContext)
    
    return (
        <div className='transactionContainer'>
            <p className='transactionTile'>History</p>
            <ul>
                {transactions.map(transaction => <Transaction key={transaction.id} transaction={transaction}/>)}
            </ul>
        </div>
    )
}