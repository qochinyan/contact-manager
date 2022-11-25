import './App.css';
import Header from "../Header/Header"
import Home from "../Home/Home"
import About from '../About/About';
import Settings from '../Settings/Settings';
import {BrowserRouter,Route,Routes,NavLink,Switch} from "react-router-dom"
import { useState } from 'react';

function App() {
  ///settings
  const [inlineEdit,setInlineEdit]=useState(false)

  return (
    <BrowserRouter>
     <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home inlineEdit={inlineEdit} />}/>
        <Route path="/about" element={<About/>} />
        <Route path="/settings" element={<Settings inlineEdit={inlineEdit} setInlineEdit={setInlineEdit} />}/>
      </Routes>
    </div>

    </BrowserRouter>



  );
}

export default App;
