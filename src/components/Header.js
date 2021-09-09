import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  background-color: #2f2f2f;
  position: sticky;
  top: 0;
  width: 100%;

  div {
    color: white;
    display: flex;
    justify-content: center;
    letter-spacing: 0.3rem;
    padding: 2.5rem;
    text-transform: uppercase;
  }
  h2 {
    border: 2px solid white;
    padding: 0.8rem;
    text-align: center;
  }
`;

// Header Component
export default function Header() {
  // Return Header Markup
  return (
    <StyledHeader>
      <div>
        <h2>NASA Picture of the Day</h2>
      </div>
    </StyledHeader>
  );
}
