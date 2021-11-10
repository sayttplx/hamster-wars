import styled from "styled-components";

export const Navigation = styled.nav`
    background-color: #ffe8d6;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;

    ul {
        list-style: none;
        display: flex;
        align-items: center;
        a {
            margin-right: 1rem;
            font-size: 1.2rem;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 0.1rem;
            color: #000;
            cursor: pointer;
            &:hover {
                color: #E1C1BC;
            }
        }
    }

    h1 {
    color: #E1C1BC;
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;
    }
`;
