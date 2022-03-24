import { useState } from 'react';
import './App.css';
import expensesData from './data/expenses.json';
import Expense from './components/Expense';
import AddExpense from './components/AddExpense';

function App() {
  const [expenses, setExpenses] = useState(expensesData);

  return (
    <div className='App'>
      <h1>Expenseta</h1>
      <h2>Expense tracker app</h2>

      <AddExpense />

      {expenses.map((expense) => (
        <div className='expense-item' key={expense.id}>
          <Expense expense={expense} />
        </div>
      ))}
    </div>
  );
}

export default App;
