import React from "react";
import Category from "./Category";
import useFetchApi from "./useFetchApi";
import { Link } from "react-router-dom";
import Fruit from "./Fruit.js";

function Banana() {
  const { data, loading } = useFetchApi("banana", false);
  return (
    <div className="bg-life-stages-bg dark:bg-slate-900">
      <div className="lg:w-3/4 lg:m-auto">
        <div className="flex flex-wrap">
          <Category />
        </div>
        <div className="flex flex-col w-3/4 lg:w-full m-auto ">
          <div className="flex flex-wrap">
            <Fruit fruit="banana" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banana;
