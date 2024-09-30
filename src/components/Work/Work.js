import "./Work.css"

import icon from "./01.png"
import icon2 from "./Testimonial01.png"
import icon3 from "./02.png"
import icon4 from "./Get Started02.png"
import icon5 from "./03.png"
import icon6 from "./Settings03.png"
import icon7 from "./04.png"
import icon8 from "./Team Work04.png"

export default function Work(){
    return(
        <div className="container1">
            <h2 className="h">How it works</h2>
            <div>
                <div className="content1">
                    <img src={icon}  className="icon01"/>
                    <img src={icon2}  className="Test01"/>
                    <div className="content-text">
                        <h3>Goal</h3>
                        <p>To help your company grow, we want to understand your goals. with the, we can provide you with a complete road map towards acheiving them. </p>
                    </div>
                </div>
            </div>
            <div>
                <div className="content2">
                    <img src={icon4}  className="Test02"/>
                    <div className="content-text">
                        <h3>Competitors</h3>
                        <p>
                        Everybody wants to be the best in their field. To achieve success, we audit your competitors and find out what is working and what is not. All this to help you save time, money, and effort on things that do not work and focus on what does.
                        </p>
                    </div>
                    <img src={icon3}  className="icon02"/>
                </div>
            </div>
            <div>
                <div className="content3">
                    <img src={icon5}  className="icon01"/>
                    <img src={icon6}  className="Test01"/>
                    <div className="content-text">
                        <h3>Strategy</h3>
                        <p>
                        Understanding the steps needed to beat your competitors is essential when understanding the length of the project, and how we will effectively tackle your digital marketing.​ We also make sure to get you the most value for your money.​
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div className="content4">
                    <img src={icon8}  className="Test02"/>
                    <div className="content-text">
                        <h3>Launch</h3>
                        <p>Launching everything into action will be the start of your new marketing strategy. Taking every step we have planned and carefully following the laid-out road map to reach your business goals.​</p>
                    </div>
                    <img src={icon7}  className="icon02"/>
                </div>
            </div>
        </div>
    )
}