import { useState } from 'react';

function AddExpense({ createExpenses }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [spentDate, setSpentDate] = useState('');
  const [category, setCategory] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    createExpenses({
      title,
      amount,
      spentDate,
      category,
    });

    setTitle('');
    setAmount('');
    setSpentDate('');
    setCategory('');
  }

  return (
    <div className='expenses-form'>
      <h3>Add an expense</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='title'>Title</label>
          <textarea
            type='text'
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor='amount'>Amount</label>
          <input
            type='number'
            id='amount'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor='spentDate'>Date</label>
          <input
            type='date'
            id='spentDate'
            value={spentDate}
            onChange={(e) => setSpentDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor='category'>Category</label>
          <input
            type='text'
            id='category'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <div className='button'>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddExpense;
