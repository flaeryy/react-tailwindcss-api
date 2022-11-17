import React, { useState, useEffect } from "react";
import useFetchApi from "./useFetchApi";

function Fruit() {
  const { data, loading } = useFetchApi("fruits");

  return (
    <div className="flex flex-wrap">
      {loading
        ? data.map((fruit) => {
            return (
              <div
                className="w-64 text-center items-center flex flex-col  mt-6 mr-4"
                key={fruit.id}
              >
                <div className="bg-white h-64">
                  <img
                    className="w-full h-full m-auto object-cover"
                    src={fruit.image}
                  />
                </div>
                <h1 className="my-4 text-lg font-bold">{fruit.title}</h1>
              </div>
            );
          })
        : "loading"}
    </div>
  );
}

export default Fruit;
