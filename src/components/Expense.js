function Expense({ expense }) {
  return (
    <>
      <p className='expense-title'>{expense.title}</p>
      <p className='expense-amount'>NPR {expense.amount}</p>
      <div>
        <p className='expense-date'>
          {new Date(expense.spentDate).toDateString()}
        </p>
        <p className='expense-category'>{expense.category}</p>
      </div>
    </>
  );
}

export default Expense;
