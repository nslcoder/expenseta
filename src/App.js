import './App.css';
import { Link } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className='App'>
      <Link to='/'>
        <h1>Expenseta</h1>
      </Link>
      <h2>Expense tracker app</h2>

      <Home />

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
