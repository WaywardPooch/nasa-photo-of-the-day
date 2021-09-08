import React from "react";
import "./App.css";
import { BASE_URL, API_KEY } from "./.env";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
