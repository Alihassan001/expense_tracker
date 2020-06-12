import React from 'react';

import { GlobalProvider } from './context/GlobalState'
//components
import { Header, Balance, IncomeExpenses, TransactionList, AddTransaction } from './components'

//styles
import './App.modules.css';


function App() {
  return (
    <GlobalProvider>
      <div className='main'>
        <div className='app'>
        <Header />
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
