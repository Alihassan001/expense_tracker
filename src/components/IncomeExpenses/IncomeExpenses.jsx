import React from 'react'
import './IncomeExpenses.modules.css'

export default function IncomeExpenses() {
    return (
        <div className='container'>
            <div className='income'>
                <p className='para'>INCOME</p>
                <p className='para amountIncome'>$1000</p>
            </div>
            <div className='expenses'>
                <p className='para'>EXPENSES</p>
                <p className='para amountExpense'>-$500</p>
            </div>
        </div>
    )
}