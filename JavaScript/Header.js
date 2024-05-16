import { BVICAM } from "./DataConstants"
import { SNPLinks } from "./DataLinks";
import CurrentUserName from "./CurrentUser";
import Marquee from "./Marquee";
import SupportersNPromoters from "./SupportersNPromoters";

const Header = ()=>{
    return (
        <div className="headerContainer">
            <CurrentUserName/>
            <div className="pageHeader">
                <div className="pageHeaderP1">
                    <div className="pageHeaderOrganised">
                        <p>Organised by</p>
                    </div>
                    <div className="bvicamLogo">
                        <img src={BVICAM+"images/BVICAM-Logo.png"}></img>
                    </div>
                    <div className="pageHeaderbvicamLabel">
                        <p>
                            Bharati Vidyapeeth, Delhi
                        </p>
                    </div>
                </div>
                <div className="pageHeaderP2">
                    <h1>
                        INDIACom-2025
                    </h1>
                    <div className="pageHeadingInfo">
                        <p className="infoP1">
                            (SCOPUS Indexed)
                        </p>
                        <p className="infoP2">
                            19<sup>th</sup> INDIACom; 12<sup>th</sup> 2025 International Conference on
                        </p>
                        <p className="infoP3">
                            Computing for Sustainable Global Development
                        </p>
                        <p className="infoP4">
                            10<sup>th</sup>-12<sup>th</sup> March , 2025
                        </p>
                    </div>
                </div>
                <div className="pageHeaderP3">
                    <div className="techSponser">
                        <p>Technically Sponsered by</p>
                    </div>
                    <div className="techSponserLogo">
                        <img src={BVICAM+"images/IEEE-Logo.png"}></img>
                    </div>
                    <div className="techSponserLabel">
                        <p>IEEE Delhi Section</p>
                    </div>
                </div>
            </div>
            <div className="supportesContainer">
                <p>
                    Supported and Promoted by
                </p>
                <div>
                    {SNPLinks.map((lnks,index)=>(
                        <SupportersNPromoters key={index} {...lnks}/>
                    ))}
                </div>
            </div>
            <Marquee/>
        </div>
    )
}

export default Header;