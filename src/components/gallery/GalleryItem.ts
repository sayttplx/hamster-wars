import styled from "styled-components"

export const GalleryItem = styled.div`
  width: 100%;
  position: relative;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 4px;
  margin-top: 2rem;
  
img {
    width: 260px;
    height: 180px;
    padding: 1rem;
}

.delete-button {
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 16px;
    width: 3rem;
    padding: 0;
    border-radius: 0;
    cursor: pointer;
    opacity: 0.5;
}

.info-button {
    position: absolute;
bottom: 10px;
left: 10px;
font-size: 16px;
width: 3rem;
padding: 0;
border-radius: 0;
cursor: pointer;
opacity: 0.5;
}

button:hover {
opacity: 1;
}

h3 {
    font-size: 1.8rem;
  text-align: center;
  line-height: 2em;
  margin-block-start: 0;
    margin-block-end: 0;

}

`