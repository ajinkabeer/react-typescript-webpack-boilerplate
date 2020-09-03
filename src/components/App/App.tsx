import React, { useState, useEffect } from "react";
import AppCSS from "./App.module.css";

type JokeType = {
  categories: string[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
};

const App = () => {
  const [jokes, setJokes] = useState<JokeType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchJoke = async () => {
      const response = await fetch("https://api.chucknorris.io/jokes/random");
      const jsonResponse = await response.json();
      setJokes(jsonResponse);
      setIsLoading(false);
    };
    fetchJoke();
  }, []);

  if (isLoading) {
    return (
      <div className={AppCSS.container}>
        <p>Loading..</p>
      </div>
    );
  }

  return (
    <div className={AppCSS.container}>
      <img src={jokes?.icon_url} />
      <p>{jokes?.value}</p>
    </div>
  );
};

export default App;
