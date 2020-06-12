import React from 'react'
import './TransactionList.modules.css'

export default function TransactionList() {
    return (
        <div className='transactionContainer'>
            <p className='transactionTile'>History</p>
            <ul>
                <li><span>Cash</span><span>$400</span></li>
            </ul>
        </div>
    )
}