import "./Market.css"

import image from './Rectangle 4.png'

export default function Market() {
  return (
    <div className="wrapper">
        <div className="text">
            <img src={image} className="image"/>
            <h2>Digital Marketing <br />Article</h2>
        </div>
        <div class="container3">
        <div class="card1">
            <h3>Top 5 SaaS Businesses – August 2021</h3>
            <p>Are you currently using one of the top SaaS businesses, according to the team at Lunar Strategy? Check out this list of our top SaaS.</p>
            <button class="read-more">Read More</button>
        </div>

        <div class="card1">
            <h3>12 Best SaaS WordPress Themes To Convert Leads</h3>
            <p>Lead conversion is an essential goal for any business. Be it converting site visitors into members, increasing their email subscription list, or converting members into...</p>
            <button class="read-more">Read More</button>
        </div>
    </div>
</div>
);
}
