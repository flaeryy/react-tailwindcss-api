import React from "react";
import Navbar from "./pages/Navbar/Navbar";
import Home from "./pages/Home/Home";
import FruitDose from "./pages/FruitDose/FruitDose";
import Recipes from "./pages/Recipes/Recipes";
import About from "./pages/About/About";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Apple from "./components/Apple";
import Banana from "./components/Banana";
import Pineapple from "./components/Pineapple";
import Details from "./components/Details";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="font-thin h-full dark:bg-slate-700 dark:text-white">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fruit-dose" element={<FruitDose />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/recipes/apple" element={<Apple />} />
          <Route path="/recipes/banana" element={<Banana />} />
          <Route path="/recipes/pineapple" element={<Pineapple />} />
          <Route path="/recipes/:id" element={<Details />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
