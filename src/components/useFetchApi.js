import React, { useState, useEffect } from "react";

function useFetchApi(fruits, recipesDetails) {
  //fruits =>query results ( id or name of the fruits)
  //recipesDetails true / false
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getFruit = async () => {
    const check = localStorage.getItem(fruits);

    if (check) {
      setData(JSON.parse(check));
      setLoading(true);
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${fruits}`
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
    const check = localStorage.getItem(fruits);

    if (check !== null) {
      // console.log(JSON.parse(check));
      setData(JSON.parse(check));
      setLoading(true);
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/${fruits}/information?apiKey=${process.env.REACT_APP_API_KEY}`
      );

      if (api.ok) {
        const data1 = await api.json();

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
