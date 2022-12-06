import "./App.css";
import Header from "../Header/Header";
import Home from "../Home/Main/Home";
import About from "../About/About";
import Settings from "../Settings/Settings";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import { useState } from "react";
import { AppProvider } from "../Context/Context";

function App() {
  ///settings
  const [cardView, setCardView] = useState(false);
  return (
    <AppProvider>
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
    </AppProvider>
    
  );
}

export default App;
