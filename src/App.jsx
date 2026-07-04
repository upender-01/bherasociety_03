import Home from "./Components/Home";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admincontroller from "./Components/Admincontroller";
import Donate from "./Components/Donatebutton";
import PhotoGallery from "./pages/photogallery";
import ContactUs from "./pages/contactus";
import PrivacyPolicy from "./pages/privacypolicy";
import Termsandservices from "./pages/termsandservice";
import ComplianceSection from "./pages/compliance";
const App = () => {
  return (
    <>
    <Router>
        <Routes>
          {/* Standard Static Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Admincontroller />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/gallery" element={<PhotoGallery />} />
          <Route path="/contactus" element={<ContactUs/>} />
          <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
          <Route path="/terms" element={<Termsandservices/>} />
          <Route path="/compliance" element={<ComplianceSection/>} />


          {/* Dynamic Route for Specific Doctor Profiles */}
        </Routes>
      </Router>
    </>
  )
}
export default App;
