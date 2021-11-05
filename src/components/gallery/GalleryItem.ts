import styled from "styled-components"

export const GalleryItem = styled.div`
position: relative;
background-color: transparent;
width: 250px;
height: 250px;
perspective: 1000px; 


.flip-card-inner {
position: relative;
width: 100%;
height: 100%;
text-align: center;
transition: transform 0.8s;
transform-style: preserve-3d;
}

.flip-card-inner {
position: relative;
width: 100%;
height: 100%;
text-align: center;
transition: transform 0.8s;
transform-style: preserve-3d;
}



&:hover .flip-card-inner {
transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
 position: absolute;
 width: 100%;
height: 100%;
 -webkit-backface-visibility: hidden; /* Safari */
 backface-visibility: hidden;
}

.flip-card-front {
 background-color: #bbb;
 color: black;
}

.flip-card-back {
 background-color: dodgerblue;
 color: white;
 transform: rotateY(180deg);
}







img {
border: 4px solid rgb(0, 0, 0);
border-radius: .3rem;
box-shadow: 4px 7px 4px 4px rgba(0,0,0,0.75);
width: 250px;
height: 250px;
}

.delete-button {
position: absolute;
top: 10px;
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
right: 10px;
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
`