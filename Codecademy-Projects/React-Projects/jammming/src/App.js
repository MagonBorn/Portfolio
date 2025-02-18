import logo from './logo.svg';
import './App.css';
import SearchBarContainer from './components/searchbar/SearchBarContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBarContainer/>
      </header>
    </div>
  );
}

export default App;
