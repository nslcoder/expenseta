function Expense({ expense }) {
  return (
    <>
      <p className='expense-title'>{expense.title}</p>
      <p className='expense-amount'>{expense.amount}</p>
      <p className='expense-date'>{expense.date}</p>
      <p className='expense-category'>{expense.category}</p>
    </>
  );
}

export default Expense;
