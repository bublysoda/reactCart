import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar({ CartTotalNav = 0 }) {  // Default to 0 if CartTotalNav is not passed
    return (
        <div className="bar">
            <div className="home">
                <Link to="/">Homepage</Link>
            </div>
            <div className="shop">
                <Link to="/shop">Shop</Link>
            </div>
            <div className="shopcount">
                {CartTotalNav} items in cart {/* Display the CartTotalNav prop */}
            </div>
        </div>
    );
}

export default Navbar;
