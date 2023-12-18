import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar.jsx";
import SensorSection from "./sensors/SensorSection.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import Footer from "./components/Footer.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";


function App() {
  return (
    <div className="md:flex-row flex min-h-screen flex-col overflow-hidden bg-gradient-to-b from-purple-500 to-purple-900 text-white">
      <BrowserRouter basename={"/"}>
        <Sidebar />
        <div className="flex h-screen flex-1 flex-col justify-between">
          <Routes>
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/sensor01" element={<SensorSection />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
