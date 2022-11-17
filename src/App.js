import React from "react";
import Navbar from "./pages/Navbar/Navbar";
import Home from "./pages/Home/Home";
import FruitDose from "./pages/FruitDose/FruitDose";
import Recipes from "./pages/Recipes/Recipes";
import Apple from "./components/Apple";
import Banana from "./components/Banana";
import Pineapple from "./components/Pineapple";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="overflow-y-hidden">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fruit-dose" element={<FruitDose />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/apple" element={<Apple />} />
          <Route path="/recipes/banana" element={<Banana />} />
          <Route path="/recipes/pineapple" element={<Pineapple />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
