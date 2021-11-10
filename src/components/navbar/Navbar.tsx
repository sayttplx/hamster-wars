import { Link } from "react-router-dom";
import { Navigation } from "./Navigation";


const Navbar = () => {

    return (
        <Navigation>
            <h1>HAMSTERWARS</h1>
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