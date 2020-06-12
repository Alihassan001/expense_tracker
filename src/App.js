import React from 'react';

import { GlobalProvider } from './context/GlobalState'
//components
import { Header, Balance, IncomeExpenses, TransactionList, AddTransaction } from './components'

//styles
import './App.modules.css';


function App() {
  return (
    <div className='main'>
      <GlobalProvider>
        <div className='app'>
        <Header />
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
        </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
