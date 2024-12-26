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
    <div className="flex min-h-screen flex-col overflow-hidden bg-gradient-to-b from-purple-500 to-purple-900 text-white md:flex-row">
      <BrowserRouter basename={"/"}>
        <Sidebar />
        <div className="flex h-screen flex-1 flex-col justify-between">
          <Routes>
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route
              path="/sensor01"
              element={<SensorSection sensorNumber="01" sensorName="01" />}
            />
            <Route
              path="/sensor02"
              element={<SensorSection sensorNumber="02" sensorName="Phytotron" />}
            />
            <Route
              path="/sensor03"
              element={<SensorSection sensorNumber="03" sensorName="HsinChu" />}
            />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
