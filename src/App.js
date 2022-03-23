import { useState } from 'react';
import './App.css';
import expensesData from './data/expenses.json';
import Expense from './components/Expense';

function App() {
  const [expenses, setExpenses] = useState(expensesData);

  return (
    <div className='App'>
      {expenses.map((expense, index) => (
        <div className='expense-item' key={index}>
          <Expense expense={expense} />
        </div>
      ))}
    </div>
  );
}

export default App;
