import React from "react";
import { Link } from "react-router-dom";

function Category() {
  return (
    <div className="flex flex-col">
      <h1 className="text-lg font-bold my-5">Order List</h1>
      <div className="flex flex-wrap">
        <Link
          to={"/recipes/apple"}
          className="flex border-2 border-red-500 w-20 h-12 rounded-r-lg mb-4 mr-4 cursor-pointer"
        >
          <p className="m-auto"> #Apple </p>
        </Link>
        <Link
          to={"/recipes/banana"}
          className="flex border-2 border-red-500 w-20 h-12 rounded-r-lg mb-4  mr-4 cursor-pointer"
        >
          <p className="m-auto"> #Banana </p>
        </Link>
        <Link
          to={"/recipes/pineapple"}
          className="flex border-2 border-red-500 w-20 h-12 rounded-r-lg mb-4  mr-4 cursor-pointer"
        >
          <p className="m-auto"> #Pineapple </p>
        </Link>
        <div className="flex border-2 border-red-500 w-20 h-12 rounded-r-lg mb-4  mr-4 cursor-pointer">
          <p className="m-auto"> #Protein </p>
        </div>
        <div className="flex border-2 border-red-500 w-20 h-12 rounded-r-lg mb-4  mr-4 cursor-pointer">
          <p className="m-auto"> #Protein </p>
        </div>
        <div className="flex border-2 border-red-500 w-20 h-12 rounded-r-lg mb-4  mr-4 cursor-pointer">
          <p className="m-auto"> #Protein </p>
        </div>
      </div>
    </div>
  );
}

export default Category;
