import DisplayData from './Component/DisplayData';
import AmpSearchBar from './Component/Amp-SearchBar';
import SearchBar from './Component/SearchBar';

function App() {
  function DownloadSpeed() {
    if(window.addEventListener){
        window.addEventListener('load', InitiateSpeedDetection, false);
    }
      // }else if(window.attachEvent){
      //   window.attachEvent('onload', InitiateSpeedDetection);
      // }
      var imageAddr = "https://images.wallpaperscraft.com/image/single/small_green_flower_yellow_4560_240x320.jpg"; 
      var downloadSize = 8287; //bytes
      function ShowProgressMessage(msg) {
          console.log(msg);
      }
      function showResultMessage(msg){
        console.log("result "+msg);
      }
      function InitiateSpeedDetection() {
          ShowProgressMessage("Calculating Speed ...");
          window.setTimeout(MeasureConnectionSpeed, 1);
      };
      function MeasureConnectionSpeed() {
          var startTime, endTime;
          var download = new Image();
          download.onload = function () {
              endTime = (new Date()).getTime();
              showResults();
          }
          
          download.onerror = function (err, msg) {
              ShowProgressMessage("Invalid image, or error downloading");
          }
          
          startTime = (new Date()).getTime();
          var cacheBuster = "?nnn=" + startTime;
          download.src = imageAddr + cacheBuster;
          
          function showResults() {
              var duration = (endTime - startTime) / 1000;
              var bitsLoaded = downloadSize * 8;
              var speedBps = (bitsLoaded / duration).toFixed(2);
              var speedKbps = (speedBps / 1024).toFixed(2);
            //   var speedMbps = (speedKbps / 1024).toFixed(2);
              showResultMessage(speedKbps + " Kbps");
              return speedKbps;
          }
        }
      }
  const speed = DownloadSpeed();
  if(speed>=15){
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
