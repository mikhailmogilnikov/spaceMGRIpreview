import "./styles/main.css";
import "./styles/schedule.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/scroll_to_top/ScrollToTop";
import { useEffect } from "react";

import Header from "./components/header/Header";
import Navbar_mobile from "./components/nav_bar_mobile/Navbar_mobile";
import HomePage from "./pages/Home";
import MenuPage from "./pages/Menu";
import CoursePage from "./pages/Course";
import CoursesTablet from "./components/courses_block/CoursesTablet";
import DeadlineTablet from "./components/deadline_block/DeadlineTablet";
import Sky from "./components/sky/Sky";

function App() {
  
  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
    const manifest = document.querySelector('link[rel="manifest"]');

    const setThemeColor = (isDarkMode) => {
      const themeColor = isDarkMode ? '#000000' : '#EDEDED';
      if (manifest) {
        const parsedManifest = JSON.parse(manifest.getAttribute('href'));
        parsedManifest.theme_color = themeColor;
        manifest.setAttribute('href', JSON.stringify(parsedManifest));
      }
    };

    setThemeColor(prefersDarkMode.matches); // установка изначального значения

    prefersDarkMode.addEventListener('change', (event) => {
      setThemeColor(event.matches);
    });

    return () => {
      prefersDarkMode.removeEventListener('change', setThemeColor);
    };
  }, []);

  return (
    <div className="App">
      <Router>
        <ScrollToTop />

        {/* <Sky /> */}

        <div className="main_container">
          <Header />
          <main className="content_container">

            <Routes>

              <Route path="/" element={<HomePage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/course" element={<CoursePage />} />
              <Route path="/courses" element={<CoursesTablet />} />
              <Route path="/deadlines" element={<DeadlineTablet />} />

            </Routes>

          </main>
        </div>

        <Navbar_mobile />

      </Router>
    </div>
  );
}

export default App;
