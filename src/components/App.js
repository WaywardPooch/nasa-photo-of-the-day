// Real Libraries
import React, { useState, useEffect } from "react";
import axios from "axios";

// Stylesheet Import
import "../App.css";

// Global Constants Import
import { BASE_URL, API_KEY } from "../constants";

// Website Components
import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";

// Main Application
function App() {
  // Data Storage in Slice of State
  const [apod, setApod] = useState([]);

  // Side Effect to Capture Data
  useEffect(() => {
    axios
      .get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}`)
      .then((response) => {
        setApod(response.data);
        console.log(`[AXIOS] APOD Data: ${response.data}`);
      })
      .finally(
        console.log(
          `[AXIOS] GET URL: ${BASE_URL}/planetary/apod?api_key=${API_KEY}`
        )
      );
  }, []);

  // Main Site Rendering Order
  return (
    <div className="App">
      <Header />
      <Card apod={apod} />
      <Footer />
    </div>
  );
}

// Export App (for the primary index.js)
export default App;
