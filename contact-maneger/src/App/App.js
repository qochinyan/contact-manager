import "./App.css";
import Header from "../Header/Header";
import Home from "../Home/Main/Home";
import About from "../About/About";
import Settings from "../Settings/Settings";
import {
  BrowserRouter,
  Route,
  Routes,
  NavLink,
  Switch,
} from "react-router-dom";
import { useState } from "react";

function App() {
  ///settings
  const [cardView, setCardView] = useState(true);
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home cardView={cardView} />}
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/settings"
            element={
              <Settings/>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
