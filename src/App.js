
import './App.css';
import Fetchurl from './Fetchurl';
import Age from './Age';
import{
  BrowserRouter as Router,
  Routes,
  Route
}from"react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Fetchurl/>}/>
          <Route exact path="/age" element={<Age />}/>
        </Routes>
      </Router>
    </div>

    
  );
}

export default App;
