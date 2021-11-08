import { Link } from "react-router-dom";
import styled from "styled-components";

const Navigation = styled.nav`
    background-color: #ffe8d6;
    display: flex;
    justify-content: left;
    align-items: center;

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
    
    `;

const Navbar = () => {

    return (
        <Navigation>
            <ul>
                <Link to="/"> <li>Home</li></Link>
                <Link to="/battle"><li>Battle</li></Link>
                <Link to="/gallery"><li>Gallery</li></Link>
                <Link to="/stats">Stats</Link>
                <Link to="/matches">History</Link>
            </ul>
        </Navigation>

    )
};

export default Navbar;