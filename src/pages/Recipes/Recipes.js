import React from "react";
import Category from "../../components/Category";
import Fruit from "../../components/Fruit";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function Recipes() {
  return (
    <div className="bg-life-stages-bg">
      <div className="flex flex-col w-3/4 m-auto ">
        <Category />
        <Fruit />
      </div>
    </div>
  );
}
