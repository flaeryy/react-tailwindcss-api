import React from "react";
import { Link } from "react-router-dom";

function Category() {
  return (
    <div className="flex flex-col ml-5 lg:ml-0">
      <h1 className="text-lg font-bold my-5">Order List</h1>
      <div className="flex flex-wrap">
        <Link
          to={"/recipes/apple"}
          className="flex border-[1px] border-red-500 w-20 h-12 rounded-r-lg mb-4 mr-4 cursor-pointer"
        >
          <p className="m-auto text-red-500"> Apple </p>
        </Link>
        <Link
          to={"/recipes/banana"}
          className="flex border-[1px] border-yellow-500 w-20 h-12 rounded-r-lg mb-4  mr-4 cursor-pointer"
        >
          <p className="m-auto text-yellow-500"> Banana </p>
        </Link>
        <Link
          to={"/recipes/pineapple"}
          className="flex border-[1px] border-rose-900 w-20 h-12 rounded-r-lg mb-4  mr-4 cursor-pointer"
        >
          <p className="m-auto text-rose-900"> Pineapple </p>
        </Link>
        <Link
          to={"/recipes/fruits"}
          className="flex border-[1px] border-green-600 w-20 h-12 rounded-r-lg mb-4  mr-4 cursor-pointer"
        >
          <p className="m-auto"> Others </p>
        </Link>
      </div>
    </div>
  );
}

export default Category;
