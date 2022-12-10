import "./App.css";
import Header from "../Header/Header";
import Home from "../Home/Main/Home";
import About from "../Pages/About/About";
import Settings from "../Pages/Settings/Settings";
// dnd
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
//
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "../Contact/Contact";
import { AppProvider } from "../Context/Context";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <DndProvider backend={HTML5Backend}>
          <div className="App">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/contacts/:id" element={<Contact />} />
            </Routes>
          </div>
        </DndProvider>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
