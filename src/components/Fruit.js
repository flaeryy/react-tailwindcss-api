import React, { useState, useEffect } from "react";
import useFetchApi from "./useFetchApi";
import { Link } from "react-router-dom";

function Fruit() {
  const { data, loading } = useFetchApi("fruits", false);

  // za tocan recept
  //const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=d59cfdd91459422f8f5f99ef909d99e4`);
  return (
    <div className="flex flex-wrap">
      {loading
        ? data.map((fruit) => {
            return (
              <Link
                to={"/recipes/" + fruit.id}
                className="w-64 text-center items-center flex flex-col mt-6
                mr-4"
                key={fruit.id}
              >
                <div className="bg-white h-64">
                  <img
                    className="w-full h-full m-auto object-cover"
                    src={fruit.image}
                  />
                </div>
                <h1 className="my-4 text-lg font-bold">{fruit.title}</h1>
              </Link>
            );
          })
        : "loading"}
    </div>
  );
}

export default Fruit;
