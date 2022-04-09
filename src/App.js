import './App.css';
import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <Link to='/'>
        <h1>Expenseta</h1>
      </Link>
      <h2>Expense tracker app</h2>

      <Outlet />

      <footer>
        <p>
          Made with dedication by{' '}
          <a
            href='https://nslcoder.github.io/'
            target='_blank'
            rel='noopener noreferrer'
          >
            nslcoder
          </a>{' '}
          (Lokesh Gurung) for learning.
        </p>
      </footer>
    </div>
  );
}

export default App;
