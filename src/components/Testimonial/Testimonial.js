import "./Testimonial.css"
import img from './Image.png'


export default function Testimonial() {
  return (
    <div className="testimonials-section">
      <h2 className="testimonials-title">Our Testimonials</h2>
        <div className="testimonial-card">
            <div className="card">
                <div className="avatar-box">
                    <img src={img} className="img"/>
                </div>
                <div className="testimonial-content">
                    <p className="testimonial-text">Lunar Strategy helped us with our digital marketing for 4 months now and still helps us. Great service and highly recommended.</p>
                    <p className="testimonial-author">— Kimmo Hakonen - Skrum Master at DaGear AB</p>
                </div>
            </div>
        </div>
    </div>
  )
}
