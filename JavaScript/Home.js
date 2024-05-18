import { Link } from "react-router-dom";
import { EmblaCarousel } from "./Carousel";
import News from "./News";
import { news } from "./DataNews";
import TrackInfo from "./TrackInfo";

const Home = ()=>{
    return (
        <div className="homeContainer">
            <div className="homeP1">
                <div className="carouselContainer">
                    <EmblaCarousel/>
                </div>
                <div className="newsSection">
                    <h3>News</h3>
                    <div className="newsScroll">
                        {
                            news.map((n)=>(
                                <News key={n?.["id"]} {...n}/>
                            ))
                                
                        }
                    </div>
                    <div className="newsRoom">
                        <Link>more...</Link>
                    </div>
                </div>
            </div>
            <div className="homeP2">
                <div className="indiacomIntro">
                    <p className="para1">
                        Throughout the world, nations have started recognizing that IT is now acting as a catalyst in speeding up the economic activity in efficient governance, citizens' empowerment and in improving the quality of human life.
                    </p>
                    <p className="para2">
                        Since its inception in the year 2007, <span className="keyword">INDIACom</span> has attracted eminent academicians, scientists, researchers, industrialists, technocrats, government representatives, social visionaries and experts from all strata of society, to explore the new horizons of innovations to identify opportunities and define the path forward. This new path is aimed at eliminating isolation, discouraging redundant efforts and promoting scientific progress to accelerate nations economic growth to prominence in the international arena; and also at contributing effectively to realize the nations vision of sustainable inclusive development using computing. 
                    </p>
                    <p className="para3">
                        Encouraged by the resounding success met with the prior editions of <span className="keyword">INDIACom</span>, we, announce 19<sup>th</sup> <span className="keyword">INDIACom 2025</span>; 12<sup>th</sup> International Conference as <span className="keyword">INDIACom-2025.</span> <span className="keyword">INDIACom</span>, as always, aims at providing an effective platform to the researchers from all over the world to show-case their original research work, have effective exchange of ideas and develop a strategic plan for balanced and inclusive growth of economy through IT in critical areas like E-Governance, E-Commerce, Disaster Management, GIS, Geo-spatial Technologies, Nano-Technology, Intellectual Property Rights, AI and Expert Systems, Networking, Software Engineering, High Performance Computing  and other Emerging Technologies.
                    </p>
                    <p className="para4">
                        <span className="keyword">INDIACom-2025</span> will be held at Bharati Vidyapeeth, New Delhi (INDIA). The conference will provide a platform for technical exchanges within the research community and will encompass regular paper presentation sessions, invited talks, key note addresses, panel discussions and poster exhibitions. In addition, the participants will be treated to a series of cultural activities, receptions and networking to establish new connections and foster everlasting friendship among fellow counterparts. The conference will also provide opportunity to the participants to visit some of the world’s famous tourist places in Delhi like Qutub Minar, Red Fort, Akshardham Temple, Lotus Temple, Jantar Mantar and Taj Mahal at Agra (around 200 KM from Delhi).   
                    </p>
                </div>
                <TrackInfo/>
                <div className="importantDates">
                    <p>Important Dates</p>
                    <div className="datesTable">
                        <div className="events">
                            <p>Event</p>
                            <p>Submission of Full Length Paper</p>
                            <p>Paper Acceptance Notification</p>
                            <p>Submission of Final Version of Paper</p>
                            <p>Registeration</p>
                            <p>PPT Submission</p>
                        </div>
                        <div className="dates">
                            <p>Date</p>
                            <p>10<sup>th</sup> December 2024</p>
                            <p>10<sup>th</sup> February 2025</p>
                            <p>24<sup>th</sup> February 2025</p>
                            <p>24<sup>th</sup> February 2025</p>
                            <p>24<sup>th</sup> February 2025</p>
                        </div>
                    </div>
                </div>
                <div className="note">
                    Papers submitted for the Conference, upon peer review, when accepted, need to be presented for further submission to IEEE CPP for consideration to include in the IEEE Xplore Digital Library, subject to their final decision based on quality of the peer review and technical program development for the Conference by the Technical Program Integrity Committee (TPIC) of IEEE.
                </div>
            </div>
        </div>
    )
}

export default Home;