import React, { useContext } from 'react'
import './IncomeExpenses.modules.css'
import { globalContext } from '../../context/GlobalState'

export default function IncomeExpenses() {
    const { transactions } = useContext(globalContext)
    const amount = transactions.map(transaction => transaction.amount);
    const income = amount.filter(item => item > 0).reduce((acc,item) => (acc+=item),0).toFixed(2)
    const expense = (amount.filter(item => item < 0).reduce((acc,item) => (acc+=item),0) * -1).toFixed(2)

    return (
        <div className='container'>
            <div className='income'>
                <p className='para'>INCOME</p>
    <p className='para amountIncome'>${income}</p>
            </div>
            <div className='expenses'>
                <p className='para'>EXPENSES</p>
                <p className='para amountExpense'>${expense}</p>
            </div>
        </div>
    )
}