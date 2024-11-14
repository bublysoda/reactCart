import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './Shop.css';
import Navbar from './Navbar';

function Shop() {
    const [Products, setProducts] = useState([]);
    const [CartTotal, setCartTotal] = useState(0);
    const [Quantities, setQuantities] = useState({});

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products?limit=16');
                const data = await response.json();
                setProducts(data);

                // Initialize quantities to 0 for each product
                const initialQuantities = data.reduce((acc, product) => {
                    acc[product.id] = 0;
                    return acc;
                }, {});
                setQuantities(initialQuantities);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchProducts();
    }, []);

    function CartUpdate(e, productId) {
        const quantity = parseInt(e.target.value, 10) || 0;

        // Update the quantity for the specific product
        setQuantities(prevQuantities => {
            const newQuantities = { ...prevQuantities, [productId]: quantity };
            
            // Calculate the new cart total
            const newTotal = Object.values(newQuantities).reduce((total, qty) => total + qty, 0);
            setCartTotal(newTotal);

            return newQuantities;
        });
    }

    return (
        <div>
            <div className="navbar-container">
                <Navbar CartTotalNav={CartTotal} /> {/* Pass CartTotal as a prop */}
            </div>
            <div className="all">
                {Products.map((product) => (
                    <div className="item" key={product.id}>
                        <div className="title">{product.title}</div>
                        <div className="image"><img src={product.image} alt="" /></div>
                        <div className="description">{product.description}</div>
                        <div className="rateAndPrice">
                            <div className="rate">{product.rating.rate}/5</div>
                            <div className="price">${product.price}</div>
                        </div>
                        <div className="input">
                            <input 
                                type="number" 
                                onChange={(e) => CartUpdate(e, product.id)} 
                                placeholder='0'
                                value={Quantities[product.id] || 0} 
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div className="cart-total">Total items in cart: {CartTotal}</div>
        </div>
    );
}

export default Shop;
