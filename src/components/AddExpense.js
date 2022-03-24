import { useState } from 'react';

function AddExpense() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [spentDate, setSpentDate] = useState('');
  const [category, setCategory] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    console.log(`title: ${title}`);
    console.log(`amount: ${amount}`);
    console.log(`spentDate: ${spentDate}`);
    console.log(`category: ${category}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='title'>Title</label>
        <textarea
          type='text'
          id='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='amount'>Amount</label>
        <input
          type='number'
          id='amount'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='spentDate'>Date</label>
        <input
          type='date'
          id='spentDate'
          value={spentDate}
          onChange={(e) => setSpentDate(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='category'>Category</label>
        <input
          type='text'
          id='category'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <button type='submit'>Add</button>
    </form>
  );
}

export default AddExpense;