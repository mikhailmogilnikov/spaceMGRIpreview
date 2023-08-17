import "./styles/main.css";
import "./styles/schedule.css";

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import ScrollToTop from "./components/scroll_to_top/ScrollToTop";

import Sky from "./components/sky/Sky";
import Header from "./components/header/Header.js"
import CoursesTablet from "./components/courses_block/CoursesTablet";
import Enter from "./components/enter_block/Enter";
import Courses from "./components/courses_block/Courses";
import Deadline from "./components/deadline_block/Deadline";
import Schedule from "./components/schedule_block/Schedule";
import Menu from "./components/menu_block/Menu";
import Course from "./components/course_block/Course";
import Task from "./components/task_block/Task";
import Settings from "./components/settings_block/Settings";
import PrivacyLogged from "./components/privacy_block/PrivacyLogged";
import PrivacyUnlogged from "./components/privacy_block/PrivacyUnlogged";
import FaqLogged from "./components/faq_block/FaqLogged";
import FaqUnlogged from "./components/faq_block/FaqUnlogged";
import LoaderBlock from "./components/loader/LoaderBlock";
import Home from "./components/homescreen/Home.jsx";
import CreditsLogged from './components/credits_block/CreditsLogged'
import CreditsUnlogged from './components/credits_block/CreditsUnlogged'
import Bonuses from './components/bonuses_block/Bonuses'

function App() {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // Для кнопки выход
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // Для кнопки вход
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  useEffect(() => {
    // Проверка пути URL и установка значения isLoggedIn
    if (
      location.pathname === '/schedule' ||
      location.pathname === '/menu' ||
      location.pathname === '/course' ||
      location.pathname === '/courses' ||
      location.pathname === '/bonuses' ||
      location.pathname === '/task' ||
      location.pathname === '/privacy_logged' ||
      location.pathname === '/faq_logged' ||
      location.pathname === '/credits_logged' ||
      location.pathname === '/loader' ||
      location.pathname === '/settings'
    ) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [location.pathname]);


  return (
    <div className="App">

      <ScrollToTop />

      {/* <Sky /> */}

      <div className="main_container">
        <Header isLoggedIn={isLoggedIn} />

        <main className="content_container">

          {isLoggedIn && <Courses />}

          <Routes>

            <Route path="/schedule" element={<Schedule />} />
            <Route path="/menu" element={<Menu handleLogout={handleLogout} />} />
            <Route path="/course" element={<Course />} />
            <Route path="/courses" element={<CoursesTablet />} />
            <Route path="/bonuses" element={<Bonuses />} />
            <Route path="/task" element={<Task />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/privacy_logged" element={<PrivacyLogged />} />
            <Route path="/faq_logged" element={<FaqLogged />} />
            <Route path="/credits_logged" element={<CreditsLogged />} />
            <Route path="/loader" element={<LoaderBlock />} />

            <Route path="/" element={<Home />} />
            <Route path="/enter" element={<Enter handleLogin={handleLogin} />} />
            <Route path="/privacy" element={<PrivacyUnlogged />} />
            <Route path="/faq" element={<FaqUnlogged />} />
            <Route path="/credits" element={<CreditsUnlogged />} />

          </Routes>

          {isLoggedIn && <Deadline />}

        </main>
      </div>
    </div>
  );
}

export default App;
