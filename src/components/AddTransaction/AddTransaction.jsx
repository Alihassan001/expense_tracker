import React, { useState, useContext } from 'react'
import { globalContext } from '../../context/GlobalState'

import './AddTransaction.modules.css'

export default function AddTransaction() {
    const [ text, setText ] = useState('')
    const [ amount, setAmount ] = useState(0)
    const { addTransaction } = useContext(globalContext)

    const onSubmit = (e) => {
        e.preventDefault()
        if (amount === 0) {
            return alert('Amount must be in - or + value')
        }
        
        let addData = {
            id: Math.floor(Math.random()*100000000),
            text,
            amount: +amount
        }
        
        if (addData.text === '') {
            addData.text = 'Secret'
        }


        addTransaction(addData)
        setText('')
        setAmount('')
    }

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
            <button className='submitBtn' onClick={(e) => {onSubmit(e)}}>Add Transaction</button>
        </div>
    )
}