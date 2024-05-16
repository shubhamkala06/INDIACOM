import { useLocation } from "react-router-dom";
const Marquee = ()=>{
    const location = useLocation();
    if(location.pathname!=="/"){
        return null;
    }
    return(
        <div className="marqueeRow">
            <p>
                <span>Last date to submit paper for INDIACom-2025 is 09<sup>th</sup> December, 2024. Accepted Papers, after presentation, will be submitted to IEEE Xplore for Publication. </span>
            </p>
        </div>
    )
};

export default Marquee;