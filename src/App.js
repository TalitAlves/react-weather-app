import './App.css';
import Footer from './Footer';
import MainForecast from './MainForecast';



function App() {
  return (
    <div className="App">
     <MainForecast defaultCity="Paris"/>
     <Footer></Footer>
   
       </div>
  );
}

export default App;
