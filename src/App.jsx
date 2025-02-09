import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"; // Import Layout
import Home from "./pages/Home";
import Attendance from "./pages/Attendance";
import About from "./pages/About";
import Resources from "./pages/Resources";

function App() {
  return (
    <Router>
      <Routes>
        {/* Wrap all routes inside Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="about" element={<About />} />
          <Route path="resources" element={<Resources/>} />
        </Route>
      </Routes>
      

    </Router>
    
  );
}

export default App;
