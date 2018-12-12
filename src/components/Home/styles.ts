import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  width: 300px;
  margin: auto;
`;

export const Button = styled.button`
  width: 40px;
  height: 40px;
  background-color: antiquewhite;
  border: 1px solid #ecd6b9;
  font-weight: bold;
  font-size: 22px;
  border-radius: 5px;
  color: #867155;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

export const NumberDisplay = styled.div`
  margin: 20px;
  width: 50px;
  font-size: 36px;
  text-align: center;
`;
