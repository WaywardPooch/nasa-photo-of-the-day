// Real Libraries
import React, { useState, useEffect } from "react";
import axios from "axios";

// Global Constants Import
import { BASE_URL, API_KEY } from "../constants";

// Website Components
import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";
import DateInput from "./DateInput";

// Main Application
function App() {
  // Data Storage in Slice of State
  const [apod, setApod] = useState([]);
  const [dateInput, setDateInput] = useState("");
  const [date, setDate] = useState("2021-09-09");

  const getUserDateInput = (event) => {
    setDateInput(event.target.value);
    console.log("TESTING TESTING, HERE:", event.target.value);
  };

  const changeDate = (event) => {
    event.preventDefault();
    setDate(dateInput);
    console.log(date);
  };

  // Side Effect to Capture Data
  useEffect(() => {
    axios
      .get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}&date=${date}`)
      .then((response) => {
        setApod(response.data);
        console.log(`[AXIOS] APOD Data: ${response.data}`);
      })
      .finally(
        console.log(
          `[AXIOS] GET URL: ${BASE_URL}/planetary/apod?api_key=${API_KEY}`
        )
      );
  }, [date]);

  // Main Site Rendering Order
  return (
    <>
      <Header />
      <DateInput getUserDateInput={getUserDateInput} changeDate={changeDate} />
      <Card apod={apod} />
      <Footer />
    </>
  );
}

// Export App (for the primary index.js)
export default App;
