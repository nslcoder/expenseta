function TotalExpenses({ expenses }) {
  const amounts = expenses.map((expense) => expense.amount);

  return (
    <div className='total-expenses'>
      {amounts.reduce((accu, cur) => Number(accu) + Number(cur))}
    </div>
  );
}

export default TotalExpenses;
