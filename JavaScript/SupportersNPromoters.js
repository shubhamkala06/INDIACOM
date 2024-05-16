import { BVICAM } from "./DataConstants";
const SupportersNPromoters = (p)=>{
    return (
        <a href={p.href} target="blank">
            <img src={BVICAM+p.imgLink}></img>
        </a>
    );
};

export default SupportersNPromoters;