import './App.css';
import Header from "../Header/Header"
import Home from "../Home/Home"
import About from '../About/About';
import {BrowserRouter,Route,Routes,NavLink,Switch} from "react-router-dom"

function App() {
  return (
 
    <BrowserRouter>
     <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About/>} />
        <Route path="/settings" element={<div style={{textAlign:"center",fontSize:"50px",color:"rgb(61, 145, 255)",padding:"50px 0" }}>Soooon</div>}/>
      </Routes>
    </div>

    </BrowserRouter>



  );
}

export default App;
