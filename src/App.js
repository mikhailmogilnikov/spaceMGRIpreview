import "./styles/main.css";
import "./styles/schedule.css";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Header from "./components/header/Header";
import Navbar_mobile from "./components/nav_bar_mobile/Navbar_mobile";
import HomePage from "./pages/Home";
import MenuPage from "./pages/Menu";
import Sky from "./components/sky/Sky";

function App() {
  return (
    <div className="App">
      <Router>

        {/* <Sky /> */}

        <div className="main_container"> 
          <Header />
          
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />

          </Routes>

        </div>

          <Navbar_mobile />

      </Router>
    </div>
  );
}

export default App;
