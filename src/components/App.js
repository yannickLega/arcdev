import React, { useState } from "react";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import theme from "../components/ui/theme";
import Header from "../components/ui/header/Header";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Customsoftware from "./pages/Customsoftware";
import Estimate from "./pages/Estimate";
import MobileApps from "./pages/MobileApps";
import Revolution from "./pages/Revolution";
import Services from "./pages/Services";
import Websites from "./pages/Websites";
import Footer from "./ui/Footer";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <LandingPage setValue={setValue} selectedIndex={selectedIndex} />
            }
          />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/customsoftware" element={<Customsoftware />} />
          <Route exact path="/mobileapps" element={<MobileApps />} />
          <Route exact path="/websites" element={<Websites />} />
          <Route exact path="/revolution" element={<Revolution />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/estimate" element={<Estimate />} />
        </Routes>
        <Footer setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
