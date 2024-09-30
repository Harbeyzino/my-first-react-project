import image from './top1.png';
import image1 from "./top2.png";
import "./Section2.css"

export default function Section2() {
  return (
    <div className='wrapper3'>
        <h2 className='h1'>Make a Difference For Your Business!</h2>
        <div className=''>
            <div className='content6'>
                <p>We understand that not every company has an in-house department that is always updated and tracks the algorithms, trends, and changes within digital marketing, but we strongly believe every company should have somebody to do so! Therefore, we started Lunar Strategy digital marketing agency – to offer companies solutions that are completely customized to fit their business needs and goals. We tailor high-performing marketing strategies intended to serve and benefit your company long term.Lunar Strategy is a professional digital marketing agency with a highly motivated team. </p>
                <img src={image} className='top1'/>
            </div>
            <div className='content5'>
                <img src={image1} className='top2'/>
                <p>Most of us have profound hands-on experience working with and for Google and Google Ads directly. Our marketing masters also have experience with Facebook Ads and SEO.Our team lives and breathes innovative, quick, and smart digital marketing solutions. We want to help as many businesses as possible to find new potential customers, reengage with old ones to reach far beyond growth expectations.Book a meeting with us today, free of charge, and we’ll talk about how we can implement a thorough and solid marketing strategy.</p>
            </div>
        </div>
    </div>
  );
};
