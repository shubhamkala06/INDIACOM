import { Link } from "react-router-dom";

const Footer = ()=>{
    return (
        <div className="footerContainer">
            <Link to="/">Home</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/faqs">FAQs</Link>
            <a href="http://bvicam.in/">www.bvicam.ac.in</a>
        </div>

    )
};

export default Footer;