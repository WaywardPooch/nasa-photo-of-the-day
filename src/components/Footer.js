import React from "react";
import styled from "styled-components";

// Create Footer Styles
const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.black};
  width: 100%;

  div.footer-content {
    color: ${(props) => props.theme.white};
    margin: auto;
    padding: 4rem;
    text-align: center;
  }
`;

// Footer Component
export default function Footer() {
  // Return Footer Markup
  return (
    <StyledFooter>
      <div className="footer-content">
        <h2>Thanks for stopping by!</h2>
      </div>
    </StyledFooter>
  );
}
