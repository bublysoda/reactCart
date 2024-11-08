import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import './Shop.css'
import Navbar from './Navbar';


function Shop(){
    return <div className="all">
        {Navbar()}
        Who's ready to shop?
    </div>
}
export default Shop