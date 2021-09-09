import React from "react";
import styled from "styled-components";

const DateInputArea = styled.form`
  text-align: center;
  margin: 2rem 0;
`;

export default function DateInput(props) {
  const { getUserDateInput, changeDate } = props;
  return (
    <DateInputArea>
      <label>DATE (YYYY-MM-DD):</label>
      <br />
      <input onChange={getUserDateInput} type="text"></input>
      <button onClick={changeDate}>SUBMIT</button>
    </DateInputArea>
  );
}
