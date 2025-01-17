import "./App.css";
import Nav from "./Components/Nav";
import Section1 from "./Sections/Section1";
import Section2 from "./Sections/Section2";

import Section4 from "./Sections/Section4";
//import Section3 from "./Sections/Section3";
import Section5 from "./Sections/Section5";
import Section6 from "./Sections/Section6";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetails from "./Components/ProductDetails"; // Details page for products
import LoginPage from "./Sections/LoginPage";
import AdminPage from "./Sections/AdminPage";
import PrivateRoute from "./Components/PrivateRoute";
import Section7 from "./Sections/Section7";

function App() {
  return (
    <div className="wrapper    ">
      {/* <Router>
        <main className="h-screen pb-14 lg:pb-0 text-white relative">
          <Routes>
            {/* Route for Product Details */}
     {/* <Route path="/detail/:id" element={<ProductDetails />} />

      {/* Default Route (Home page with all sections) 
            <Route
              path="/"
              element={
                <>
                  <Nav />
                  <Section1 />
                  <Section2 />
                  <Section5 />
                  <Section6 />
                  <Section4 />
                </>
              }
            />
          </Routes>
          <Footer />
        </main>
      </Router> */}
      <Router>
        <main className="h-screen pb-14 lg:pb-0 text-white relative overflow-x-hidden">
          <Routes>
            {/* Public Routes */}
            <Route
              path="/"
              element={
                <>
                  <Nav />
                  <Section1 />
                  <Section2 />
                  <Section5 />
                  <Section6 />
                  <Section7/>
                  <Section4 />
                  <Footer />
                </>
              }
            />
            <Route path="/detail/:id" element={<ProductDetails />} />

            {/* Login Page */}
            <Route path="/login" element={<LoginPage />} />

            {/* Private Admin Route */}
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <AdminPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </main>
      </Router>
      {/* <main className="  h-screen pb-14 lg:pb-0 text-white relative ">
        <Nav />
        <Router>
          <Routes>
            <Route path="/" element={<Section5 />} />
            <Route path="/detail/:id" element={<ProductDetails />} />
          </Routes>
        </Router>
        <Section1 />
        <Section2 />
        <Section5 />

        <Section6 />
        <Section4 />
        <Footer />
      </main> */}
    </div>
  );
}

export default App;
