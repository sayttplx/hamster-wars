import styled from "styled-components"

const StyledHeader = styled.h3`
  color: black;
  font-size: 52px;
  line-height: 1em;
  font-weight: 700;
  margin: 5px 0 10px;
  
`

const Header = ({ text }: any) => {
  return (<StyledHeader>{text}</StyledHeader>)
}

export default Header