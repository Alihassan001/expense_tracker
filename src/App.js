import React from 'react';

//components
import { Header, Balance, IncomeExpenses, TransactionList, AddTransaction } from './components'

//styles
import './App.modules.css';


function App() {
  return (
    <div className='main'>
      <div className='app'>
      <Header />
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
      </div>
    </div>
  );
}

export default App;
