import React, { useState, useEffect } from "react";

function useFetchApi(fruits) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

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
      const data1 = await api.json();
      localStorage.setItem(fruits, JSON.stringify(data1.results));
      setData(data1.results);
      setLoading(true);
    }
  };

  useEffect(() => {
    getFruit();
  }, []);

  return { data, loading };
}

export default useFetchApi;
