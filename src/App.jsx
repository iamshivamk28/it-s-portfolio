import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Developer from "./components/Developer/Developer";
import VideoEditor from "./components/VideoEditor/VideoEditor";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
//import TechStack from "./components/TechStack/TechStack";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import HireBanner from "./components/HireBanner/HireBanner";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/frontend" element={<Developer />} />
        <Route path="/videoeditor" element={<VideoEditor />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <CustomCursor/>
     <HireBanner/>
      <Footer/>
    </Router>
  );
}

export default App;
