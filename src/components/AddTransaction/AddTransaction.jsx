import React, { useState } from 'react'
import './AddTransaction.modules.css'

export default function AddTransaction() {
    const [ text, setText ] = useState('')
    const [ amount, setAmount ] = useState(0)
    return (
        <div className='addTransactionContainer'>
            <p className='addTransactionTile'>Add new transaction</p>
            <p className='inputTitle'>Text</p>
            <input className='inputField' type='text' value={text} 
            onChange={(e) => setText(e.target.value)} placeholder='Enter Remarks'/>
            <p className='inputTitle'>Amount</p>
            <p className='amountDesc'>(Negative - Expense, Positive + Income)</p>
            <input className='inputField' type='number' value={amount} 
            onChange={(e) => setAmount(e.target.value)} placeholder='Enter Remarks'/>
            <button className='submitBtn'>Add Transaction</button>
        </div>
    )
}