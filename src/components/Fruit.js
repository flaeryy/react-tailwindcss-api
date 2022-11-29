import React, { useState, useEffect } from "react";
import useFetchApi from "./useFetchApi";
import { Link } from "react-router-dom";

function Fruit({ fruit }) {
  const { data, loading } = useFetchApi(fruit, false);

  return (
    <div className="flex flex-wrap dark:bg-slate-900 m-auto w-full">
      {loading
        ? data.map((fruit) => {
            return (
              <Link
                to={"/recipes/" + fruit.id}
                className="w-64 text-center items-center flex flex-col mt-6
                 m-auto lg:mx-2"
                key={fruit.id}
              >
                <div className="bg-white dark:bg-slate-900 h-64">
                  <img
                    className="w-full h-full m-auto object-cover"
                    src={fruit.image}
                  />
                </div>
                <h1 className="my-7 text-lg font-bold">{fruit.title}</h1>
              </Link>
            );
          })
        : "loading"}
    </div>
  );
}

export default Fruit;
