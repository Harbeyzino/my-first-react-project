import "./Consultant.css"

import image from './Rectangle 4.png'

export default function Consultant() {
  return (
    <div className="free-meeting-container">
        <div className="text">
            <img src={image} className="image"/>
            <h2>Book A Free Digital Marketing Consultation</h2>
        </div>
        <div className="free-meeting-content">
            <form className="free-meeting-form">
                <input type="email" placeholder="Your Email" className="email-input" />
                <button type="submit" className="meeting-button">Book my free meeting</button>
            </form>
        </div>
    </div>
  )
}
