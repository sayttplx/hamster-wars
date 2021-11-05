import styled from "styled-components";

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit,260px);
    grid-gap: 1.2rem;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0px;
    max-width: 1100px;
    list-style-type: none;
`;