import "./Services.css";
import image from './Web Design 1.png';
import image2 from "./Vector(2).png"

export default function Services() {
    return (
        <div className="wrapper5">
            <div className="content-container1">
                <h1>Services</h1>
                <p>All our digital marketing services start with a free 30-minute consultation call where we find the best strategy towards reaching your goals.</p>
                <button>Contact Us</button>
            </div>
            <img src={image} className="img7"/>
            <img src={image2} className="wave7"/>
        </div>
    );
};