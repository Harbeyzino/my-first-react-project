import "./BlogHero.css"
import image from './Vector(1).png'

export default function BlogHero() {
  return (
    <div className="wrapper1">
        <div className="content">
            <h1>DaPixel Blog</h1>
            <p className="para">Digital Marketing Articles</p>
        </div>
        <div>
            <img src={image} className="blog-image"/>
        </div>
    </div>
  );
}
