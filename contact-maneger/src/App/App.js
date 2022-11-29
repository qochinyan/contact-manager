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
  const [inlineEdit, setInlineEdit] = useState(false);
  const [cardView, setCardView] = useState(true);
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home cardView={cardView} inlineEdit={inlineEdit} />}
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/settings"
            element={
              <Settings
                cardView={cardView}
                setCardView={setCardView}
                inlineEdit={inlineEdit}
                setInlineEdit={setInlineEdit}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
