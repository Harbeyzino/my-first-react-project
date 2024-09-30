import "./AboutHero.css";
import image from './Products.png';
import image2 from "./Wave.png"

export default function AboutHero() {
    return (
        <div className="wrapper4">
            <div className="content-container">
                <h1>Consitency - Drive - Curiosity - Passion</h1>
                <p>in a constant evolving and competitive digital world, is imperative to stay on top and in the know, be highly visible among search results and feeds, and be responsive to your audience.</p>
            </div>
            <img src={image} className="img1"/>
            <img src={image2} className="wave"/>
        </div>
    );
};