import './App.css';
import Heading from "./Heading";
import MainForecast from './MainForecast';
import Forecast5Days from './Forecast5Days';

function App() {
  return (
    <div className="App">
     <Heading/>
     <MainForecast/>
     <Forecast5Days/>
       </div>
  );
}

export default App;
