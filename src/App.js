import DisplayData from './Component/DisplayData';
import AmpSearchBar from './Component/Amp-SearchBar';
import SearchBar from './Component/SearchBar';

function App() {
  const speed = 100;
  if(speed>=60){
    return(
      <div className="App">
        <SearchBar/>
        <DisplayData speed={speed}/>
      </div>
    );
  }
  else{
    return(
      <div className="App">
      <AmpSearchBar/>
      <DisplayData speed={speed}/>
    </div>
    );
  }
}

export default App;
