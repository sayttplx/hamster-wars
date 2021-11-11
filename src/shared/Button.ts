import styled from "styled-components";

export const Button = styled.button`
  background-color: #E1C1BC;
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    color: white;
    background-color: #d6b5a8;
  }
`;


export const SecondaryButton = styled(Button)`
  display: inline-flex;
  justify-content: center;
  border: 3px solid white;
  min-width: 150px;
  padding: 8px 16px;
  color: white;
  background-color: rgb(27, 27, 27);
  
  &:hover {
    color: black;
    background-color: white;
    border-color: white;
  }

  &:disabled {
    cursor: unset;
    background-color: rgb(27, 27, 27);
    color: white;
  }
`
