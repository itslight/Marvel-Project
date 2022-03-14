import Api from './Component/Api';
import JsonData from './Component/JsonData';
import SearchBar from './Component/SearchBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <SearchBar/>
      <JsonData/>
      {/* <Api/> */}
    </div>
  );
}

export default App;
