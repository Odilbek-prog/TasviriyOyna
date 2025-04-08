import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Quest from "./components/Quest/Quest";

function App() {
  return (
    <div className="layout">
      <Navbar />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
      <Quest />
      <Footer />
    </div>
  );
}

export default App;
