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
import Contact from "../Contact/Contact"
import { AppProvider } from "../Context/Context";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home/>}
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/settings"
            element={
              <Settings/>
            }
          />
          <Route path="/contacts/:id" element={<Contact/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    </AppProvider>
    
  );
}

export default App;