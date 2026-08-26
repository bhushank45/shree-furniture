import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Collections from "./pages/Collections";
import OurShowroom from "./pages/OurShowroom";
import ContactUs from "./pages/ContactUs";
import Navbar from "./components/Navbar";
function App() {
  return( 
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/collections" element={<Collections/>}/>
        <Route path="/ourshowroom" element={<OurShowroom/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
