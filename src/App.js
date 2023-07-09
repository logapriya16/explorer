import './App.css';
import {Route,Routes} from "react-router-dom"
import Continent from './pages/continent';
import Country from './pages/country';
import Destinations from './pages/destinations';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element ={<Continent/>}/>
        <Route path="/country" element ={<Country/>}/>
        <Route path="/destinations" element ={<Destinations/>}/>
        
        
      </Routes>
    </div>
  );
}

export default App;
