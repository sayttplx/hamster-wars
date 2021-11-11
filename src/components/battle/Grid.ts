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