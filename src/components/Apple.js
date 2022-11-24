import React from "react";
import Category from "./Category";
import useFetchApi from "./useFetchApi";
import { Link } from "react-router-dom";

function Apple() {
  const { data, loading } = useFetchApi("apple", false);
  return (
    <div className="bg-life-stages-bg">
      <div className="lg:w-3/4 lg:m-auto">
        <div className="mx-4">
          <Category />
        </div>
        <div className="flex flex-col w-3/4 lg:w-full m-auto ">
          <div className="flex flex-wrap">
            {loading
              ? data.map((fruit) => {
                  return (
                    <Link
                      to={"/recipes/" + fruit.id}
                      className="w-64 text-center items-center flex flex-col  mt-6 mr-4"
                      key={fruit.id}
                    >
                      <div className="bg-white h-64">
                        <img
                          className="w-full h-full m-auto object-cover"
                          src={fruit.image}
                        />
                      </div>
                      <h1 className="my-4 text-lg font-bold ">{fruit.title}</h1>
                    </Link>
                  );
                })
              : "loading"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apple;
