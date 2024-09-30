import "./Hero.css"
import logo from "./saas.png"
import logo1 from "./Fiverr.png"
import logo2 from "./Group(1).png"
import logo3 from "./socialMedia.png"
import logo4 from "./Vector.png"



export default function Hero(){
    return(
        <div className="container">
           <div className="content">
                <h1 className=""><span className="pan"></span>We help you grow<br></br>your <span className="conversion">conversions.</span></h1>
                <p>Features in leading pubications around the world</p>
                <div className="img">
                    <img src={logo2} className="group"/>
                    <img src={logo} className="saas"/>
                    <img src={logo1} className="fiverr"/>
                </div>
                <button className="btn1">Contact Us</button>
           </div>
            <div>
                <img src={logo3} className="socialMedia"/>
            </div>
            <img src={logo4} className="vector"/>
        </div>

    )
};