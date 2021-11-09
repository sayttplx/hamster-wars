import { Link } from "react-router-dom";
import styled from "styled-components";

const Navigation = styled.nav`
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
    
    `;


const Kek = styled.h1`
  color: #E1C1BC;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  `


const Navbar = () => {

    return (
        <Navigation>
            <Kek>HAMSTERWARS</Kek>
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