import React from "react";

export default function Card() {
  return (
    <div className="card">
      <div className="card-content">
        <img className="card-photo" src="https://picsum.photos/600/400" />
        <div className="card-label">
          <h2>Card Title</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra
            convallis posuere morbi leo urna molestie at elementum. Tortor id
            aliquet lectus proin nibh nisl condimentum id venenatis.
          </p>
        </div>
      </div>
    </div>
  );
}
