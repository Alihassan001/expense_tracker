import React, { useState } from 'react'
import './Balance.modules.css'

export default function Balance() {
    const [ amount, setAmount ] = useState(0)
    return (
        <div className='balanceContainer'>
            <p className='title'>YOUR BALANCE </p>
            <h1 className="amount">$ {amount.toFixed(2)}</h1>
        </div>
    )
}