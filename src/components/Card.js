import React from "react";

// Gallery Card Component
export default function Card(props) {
  // Extract and Store props.apod
  const { apod } = props;

  // Return Card Markup
  return (
    <div className="card">
      <div className="card-content">
        <img className="card-photo" src={apod.url} alt={apod.title} />
        <div className="card-label">
          <h2>{apod.title}</h2>
          <p className="card-date">Date: {apod.date}</p>
          <p>{apod.explanation}</p>
        </div>
      </div>
    </div>
  );
}
