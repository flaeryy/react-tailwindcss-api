import React from "react";
import Category from "../../components/Category";
import Fruit from "../../components/Fruit";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

document.title = "Fruits | Recipes";

export default function Recipes() {
  return (
    <div className="bg-life-stages-bg dark:bg-slate-900">
      <div className="lg:w-3/4 lg:m-auto">
        <div className="flex flex-wrap">
          <Category />
        </div>
        <div className="flex flex-col w-3/4 lg:w-full lg:h-full m-auto ">
          <Fruit fruit="fruits" />
        </div>
      </div>
    </div>
  );
}
