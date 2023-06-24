import './App.css';
import Nav from './component/nav/nav';
import Searchbar from './component/searchBar/searchbar';
import Transaction from './component/transaction/transaction';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Searchbar/>
      <Transaction/>
    </div>
  );
}

export default App;
