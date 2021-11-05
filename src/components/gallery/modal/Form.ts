import styled from "styled-components"

export const Section = styled.section`
  background-color: rgba(0,0,0,0.5);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  
`

export const Header = styled.h3`
  color: black;
  font-size: 35px;
  line-height: 1em;
  font-weight: 300;
  margin: 5px 0 10px;
  text-align: center;
`


export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;
  justify-content: space-evenly;
  width: 400px;
  margin: 5em auto;
  border-radius: 5px;
  padding: 2em 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #a18c8c;
  color: black;
  z-index: 1;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
`

export const Button = styled.button`
  cursor: pointer;
  border: 3px solid white;
  font-size: 16px;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 150px;
  padding: 8px 16px;
  line-height: 1em;
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

export const ButtonContainer = styled.div`
  padding-top: 10%;
  display: flex;
  justify-content: space-between;
  width: 22rem;
`;




export interface AddFormProps {
  addHamster: () => void;
  show: boolean;
  set: any;
}

const CLOSE_BUTTON_SIZE = 40;
export const CloseButton = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  background-color: #c8c8c8;
  border-radius: 50%;
  cursor: pointer;
  top: -${CLOSE_BUTTON_SIZE / 2}px;
  left: calc(100% - ${CLOSE_BUTTON_SIZE / 2}px);

  & > * {
    opacity: 1;
  }
  &:hover > * {
    opacity: 0.4;
  }
`;

export const CloseSign = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  color: #323232;
  &:before, 
  &:after {
    position: absolute;
    left: 19px;
    top: 10px;
    content: ' ';
    height: 20px;
    width: 2px;
    background-color: #333;
}
  &:before {
    transform: rotate(45deg);
}
  &:after {
    transform: rotate(-45deg);
}
`;