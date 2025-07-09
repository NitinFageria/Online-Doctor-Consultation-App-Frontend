import React from "react";
import Home from "../screens/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../common/header/Header";

const Controller = () => {
  const baseUrl = "/api/v1/";
  return (
    <Router>
      <div className="main-container">
        <Header/>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home baseUrl={baseUrl} />} // Use element prop instead of render prop
          />
        </Routes>
      </div>
    </Router>
  );
};

export default Controller;
