import React from "react";

export default function Card(props) {
  const { apod } = props;

  return (
    <div className="card">
      <div className="card-content">
        <img className="card-photo" src={apod.url} />
        <div className="card-label">
          <h2>NASA Photo of the Day</h2>
          <p className="card-date">Date: {apod.date}</p>
          <p>{apod.explanation}</p>
        </div>
      </div>
    </div>
  );
}
