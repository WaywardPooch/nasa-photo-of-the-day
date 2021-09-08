import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { BASE_URL, API_KEY } from "./constants";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  const [apod, setApod] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}`)
      .then((response) => {
        setApod(response.data);
      })
      .finally(console.log(`${BASE_URL}/planetary/apod?api_key=${API_KEY}`));
  }, []);

  return (
    <div className="App">
      <Header />
      <Card apod={apod} />
      <Footer />
    </div>
  );
}

export default App;
