import React from "react";
import styled from "styled-components";

const DateInputArea = styled.form`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 2rem 0;

  button,
  input {
    font-size: 2.5rem;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
    text-align: center;
    border: none;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 80rem;
    letter-spacing: 0.1rem;
    background-color: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.white};
    transition: 200ms;
    padding: 0 2rem;

    &:hover {
      background-color: ${(props) => props.theme.secondaryColor};
    }
  }
  input {
    max-width: 32rem;
    height: 5rem;
  }
`;

export default function DateInput(props) {
  const { getUserDateInput, changeDate } = props;
  return (
    <DateInputArea>
      <input
        onChange={getUserDateInput}
        type="text"
        placeHolder="YYYY-MM-DD"
      ></input>
      <button onClick={changeDate}>SEARCH DATE</button>
    </DateInputArea>
  );
}
