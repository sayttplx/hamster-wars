import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <>
            <nav>
                <ul>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/battle">
                        <li>Battle</li>
                    </Link>
                    <Link to="/gallery">
                        <li>Gallery</li>
                    </Link>

                </ul>
            </nav>
        </>
    )
};

export default Navbar;