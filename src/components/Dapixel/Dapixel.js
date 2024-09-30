import "./Dapixel.css";
import image from './Marketing 1.png';

export default function Dapixel() {
  return (
    <div className="container4">
        <div className="text-content">
            <h2>Why DaPixel?</h2>
            <p>
                To get customers, it’s imperative to be seen by the mass. Every successful company 
                is unique and needs contrasting digital marketing strategies. Book a meeting with us 
                and we will help you find the correct strategy for your company.
            </p>
            <button className="book-meeting">Book Free Meeting</button>
        </div>
        <div className="image-content">
            <img src={image} alt="Illustration of digital marketing" className="marketing-image"/>
        </div>
    </div>
  )
}
