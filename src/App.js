import logo from './logo.svg';
import './App.css';
import Users from './components/Users';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
       
        </p>
        <a
          className="App-link"
          href="https://www.google.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          App in development !!
        </a>
      </header>

      <Users count="5" subtitle="Active Users">list of users</Users>
    </div>
  );
}

export default App;
