import React, { useState, useEffect } from "react";

function useFetchApi(fruits, recipesDetails) {
  //fruits =>query results ( id or name of the fruits)
  //recipesDetails true / false
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getFruit = async () => {
    console.log(fruits);
    const check = localStorage.getItem(fruits);

    console.log(check);

    if (check) {
      console.log("14");
      // console.log(JSON.parse(check));
      setData(JSON.parse(check));
      setLoading(true);
    } else {
      console.log("19");
      const api = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=d59cfdd91459422f8f5f99ef909d99e4&query=${fruits}`
      );
      if (api.ok) {
        const data1 = await api.json();
        localStorage.setItem(fruits, JSON.stringify(data1.results));
        setData(data1.results);
        setLoading(true);
      } else {
        setError(true);
      }
    }
  };

  const getRecipesDetails = async () => {
    console.log(fruits);
    const check = localStorage.getItem(fruits);

    console.log(check);

    if (check !== null) {
      console.log("14313131313");
      // console.log(JSON.parse(check));
      setData(JSON.parse(check));
      setLoading(true);
    } else {
      console.log("19");
      const api = await fetch(
        `https://api.spoonacular.com/recipes/${fruits}/information?apiKey=d4b3186a0019486882a97fabf3820215`
      );
      console.log("api");
      console.log(api.ok);

      if (api.ok) {
        const data1 = await api.json();
        console.log("1212");
        console.log(data1);
        localStorage.setItem(fruits, JSON.stringify(data1));
        setData(data1);
        setLoading(true);
      } else {
        setError(true);
      }
    }
  };

  useEffect(() => {
    recipesDetails ? getRecipesDetails() : getFruit();
  }, []);

  return { error, data, loading };
}

export default useFetchApi;
