import styled from 'styled-components';

export const Grid = styled.div`
        display:grid;
        grid-template-columns: repeat(2, 1fr);

        @media (max-width: 768px) {
            grid-template-columns: repeat(1, 1fr);
        }

        .grid-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 1em;
            padding: 1em;
            border: 1px solid #ccc;
            border-radius: 5px;
            background-color: #fff;
        }

        button {
            width: 13em;
            padding: 0.8em 1.2em;
            margin-top: 1em;
            border-radius: 5em;
            border: none;
            background-color: #f5f5f5;
            color: #000;
            font-size: 1em;
            font-weight: lighter;
        }

        button:hover {
            background-color: #ccc;
            cursor: pointer;
            transform: scale(1.1);
        }

        h3 {
           font-size: 1.5em;
           margin-block-start: 0;
           margin-block-end: 0;
        }

        h1 {
            margin-block-start: 0;
            margin-block-end: 0;
        }

        img {
            width: 300px;
            height: 300px;
        }

        .stats {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 1em;
        }
        
`