import React from "react";
import styled from "styled-components";

// Create Card Styles
const StyledCard = styled.div`
  background-color: ${(props) => props.theme.brightWhite};
  margin: 2rem auto;
  max-width: 600px;
  div.card-content {
    padding: 4rem;
    img {
      max-height: 500px;
      width: 100%;
      object-fit: cover;
    }
    div.card-label {
      h2 {
        font-size: 3.5rem;
        letter-spacing: 0.1rem;
        margin: 2rem 0;
        text-align: center;
        text-transform: uppercase;
      }
      p {
        font-size: 2rem;
        font-weight: 300;
        text-align: justify;
        margin: 2rem 0 0 0;
      }
      p.card-date {
        color: ${(props) => props.theme.fadedWhite};
        font-size: 1.8rem;
        letter-spacing: 0.2rem;
        text-transform: uppercase;
        text-align: center;
        margin: 1rem;
      }
    }
  }
`;

// Gallery Card Component
export default function Card(props) {
  // Extract and Store props.apod
  const { apod } = props;

  // Return Card Markup
  return (
    <StyledCard>
      <div className="card-content">
        <img src={apod.url} alt={apod.title} />
        <div className="card-label">
          <h2>{apod.title}</h2>
          <p className="card-date">Date: {apod.date}</p>
          <p>{apod.explanation}</p>
        </div>
      </div>
    </StyledCard>
  );
}
