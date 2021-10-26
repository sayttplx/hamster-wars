import { Link } from "react-router-dom";

const BadUrl = () => {

    return (
        <>
            <h1>This pages does not exist</h1>
            <p>
                <Link to="/">Go back to the homepage</Link>
            </p>
        </>
    )
};

export default BadUrl;