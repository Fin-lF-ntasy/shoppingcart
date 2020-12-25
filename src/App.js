import logo from './logo.svg';
import './App.css';
import './style.css';
import Navigation from './Navigation';
import Production from './Production';
import Transaction from './Transaction';

function App() {
  return (
    <div className="App">
      <main>
        <Navigation />
        <Production />
        <Transaction />
      </main>
    </div>
  );
}

export default App;
