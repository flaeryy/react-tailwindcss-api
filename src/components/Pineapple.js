import React from "react";
import Category from "./Category";
import useFetchApi from "./useFetchApi";

function Pineapple() {
  const { data, loading } = useFetchApi("pineapple");
  return (
    <div className="bg-life-stages-bg">
      <div className="flex flex-col w-3/4 m-auto ">
        <Category />

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
      </div>
    </div>
  );
}

export default Pineapple;
