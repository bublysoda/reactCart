import './App.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

function App() {
    return (
        <div className='allApp'>
            <div className="navbar-container">
                {/* Render Navbar without passing CartTotalNav */}
                <Navbar />
            </div>
            <div className="intro">
                <div className="shopIntro">
                    Welcome to The Shop, where we want to give you the best shopping experience!
                </div>
                <div className="information">
                    At The Shop, we are committed to low prices! Click the "shop" button above to start shopping!
                </div>
            </div>
            <div className="moreFiller">
                <div className="quote">
                    "The inherent vice of capitalism is the unequal sharing of blessings; the inherent virtue of socialism is the equal sharing of miseries." - Winston Churchill
                </div>
                <div className="location">
                    Located at 308 Negra Arroyo Lane Albuquerque New Mexico 87104. Do not throw pizza on the roof!
                </div>
            </div>
        </div>
    );
}

export default App;
