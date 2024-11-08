import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'


function Navbar(){
    return <div className="bar">
        <div className="home">
            <Link to="">Homepage</Link>
        </div>
        <div className="shop">
            <Link to="shop">Shop</Link>
        </div>
    </div>
}
export default Navbar