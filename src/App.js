import "./styles/main.css";
import "./styles/schedule.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/scroll_to_top/ScrollToTop";

import Header from "./components/header/Header.js"
import HomePage from "./pages/logged-in/Home";
import MenuPage from "./pages/logged-in/Menu";
import CoursePage from "./pages/logged-in/Course";
import CoursesTablet from "./components/courses_block/CoursesTablet";
import DeadlineTablet from "./components/deadline_block/DeadlineTablet";
import TaskPage from "./pages/logged-in/Task";
import Sky from "./components/sky/Sky";
import Enter from "./components/enter_block/Enter";

function App() {
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
              <Route path="/task" element={<TaskPage />} />
              <Route path="/enter" element={<Enter />} />

            </Routes>

          </main>
        </div>

      </Router>
    </div>
  );
}

export default App;
