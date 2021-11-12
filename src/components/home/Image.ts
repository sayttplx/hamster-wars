import styled from "styled-components"

export const Image = styled.div`
position: relative;
background-color: #fff;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
border-radius: 4px;
margin-top: 2rem;

img {
  padding: 1rem;
  width: 100%;
  height: 400px
}

.crown {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 6rem;
  padding: 0;
  border-radius: 0;
}

.hamster-leader {
  position: absolute;
  bottom: 20px;
  left: 20px;
  font-size: 5rem;
  padding: 0;
  border-radius: 0;
  color: #fff;
}
  `