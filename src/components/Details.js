import React, { useEffect, useState } from "react";
import useFetchApi from "./useFetchApi";
import "./Details.css";
import { useParams } from "react-router-dom";
import Category from "./Category";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Gluten from "../logo/Gluten.js";
import Plate from "../logo/Plate.js";
import Vegan from "../logo/Vegan.js";
import Clock from "../logo/Clock.js";

function Details() {
  //const [details, setDetails] = useState({});
  const printRef = React.useRef();

  let params = useParams();

  const { error, data, loading } = useFetchApi(params.id, true);

  return (
    <div>
      {error ? (
        <ErrorPage />
      ) : (
        <div className="lg:w-3/4 lg:m-auto">
          <div className="flex flex-wrap">
            <Category />
          </div>

          <div className="flex w-full">
            {loading ? (
              <div
                id="report"
                className="m-5 flex flex-col w-full"
                ref={printRef}
              >
                <div className="w-full my-5">
                  <h2 className="text-center my-3 text-2xl font-bold">
                    {data.title}
                  </h2>
                  <img
                    className="w-full m-auto max-w-3xl object-cover rounded-md"
                    src={data.image}
                    alt=""
                  />

                  <div className="flex flex-col items-left my-2">
                    <div className="flex gap-2">
                      <Clock />
                      Ready in:
                      <span className="font-bold">
                        {`${data.readyInMinutes} mins`}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <Plate />
                      Serves:{" "}
                      <span className="font-bold">{`${data.servings}`}</span>
                    </div>

                    <div className="flex gap-2">
                      <Gluten />
                      Gluten Free:{" "}
                      <span className="font-bold">{`${
                        data.glutenFree ? "Yes" : "No"
                      }`}</span>
                    </div>
                    <div className="flex gap-2">
                      <Vegan />
                      Vegan:
                      <span className="font-bold">{`${
                        data.vegan ? "Yes" : "No"
                      }`}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row w-full">
                  <div className="lg:w-1/2">
                    <h2 className="text-left my-3 text-2xl font-bold">
                      INGREDIENTS
                    </h2>
                    <ul className="list-inside">
                      {data.extendedIngredients.map((ingredients) => (
                        <li
                          className="list-disc lg:my-4"
                          key={
                            ingredients.id *
                              Math.floor(Math.random() * (1 - 9999 + 1)) +
                            9999
                          }
                        >
                          {ingredients.original}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:w-1/2">
                    <div>
                      <h2 className="text-left my-3 text-2xl font-bold">
                        DIRECTIONS
                      </h2>

                      <h3
                        className="my-4"
                        dangerouslySetInnerHTML={{ __html: data.summary }}
                      ></h3>
                      <h3
                        className="bullet"
                        dangerouslySetInnerHTML={{ __html: data.instructions }}
                      ></h3>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              "Loading..."
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Details;
