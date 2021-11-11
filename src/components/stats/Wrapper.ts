import styled from "styled-components"

export const StatsWrapper = styled.div`
    display: grid;
    grid-template-areas: 
            "left right"
            "left right"
            "left right";
    grid-gap: 1rem;
    margin-bottom: 1rem;
    text-align: center;

    img {
        width: 200px;
        height: 200px;
    }
`

export const Left = styled.div`
    grid-area: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
`

export const Right = styled.div`
    grid-area: right;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
`

export const Loser = styled.div`

div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        color: red;
        margin-block-start: 0;

    }

    h3 {
        margin-block-start: 0;
 
    }
}
`

export const Winner = styled.div`

div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        color: green;
        margin-block-start: 0;
    }

    h3 {
        margin-block-start: 0;
    }
}
`