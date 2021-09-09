import React from "react";
import styled from "styled-components";

// Create Header Styles
const StyledHeader = styled.div`
  background-color: ${(props) => props.theme.black};
  position: sticky;
  top: 0;
  width: 100%;

  div {
    color: ${(props) => props.theme.white};
    display: flex;
    justify-content: center;
    padding: 2.5rem;
  }
  h2 {
    border: 2px solid ${(props) => props.theme.white};
    letter-spacing: 0.3rem;
    padding: 0.8rem;
    text-align: center;
    text-transform: uppercase;
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
