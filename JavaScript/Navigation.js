import { Link } from "react-router-dom";

const Navigation = ()=>{
    return (
        <>
            <nav className="navTab">
                <Link to="/newsPage">
                    <div className="navItem">
                        News
                    </div>
                </Link>
                <Link to="importantDates">
                    <div className="navItem">
                       Important Dates
                    </div>
                </Link>
                <Link to="callforpapers">
                    <div className="navItem">
                        Call for Paper
                    </div>
                </Link>
                <Link>
                    <div className="navItem">
                        ICIEM-2025
                    </div>
                </Link>
                <Link to="/submitPaper">
                    <div className="navItem">
                        Submit Paper
                    </div>
                </Link>
                <Link to="/specialSessions">
                    <div className="navItem">
                        Special Sessions
                    </div>
                </Link>
                <Link>
                    <div className="navItem">
                        Registeration
                    </div>
                </Link>
                <Link to="paymentModes">
                    <div className="navItem">
                        Payment Modes
                    </div>
                </Link>
                <Link to="/conference">
                    <div className="navItem">
                        Conference Secretariat
                    </div>
                </Link>
                <Link to="/reviewNindexing">
                    <div className="navItem">
                        Review Process, Publication & Indexing
                    </div>
                </Link>
                <Link>
                    <div className="navItem">
                        INDIACom History
                    </div>
                </Link>
                <Link>
                    <div className="navItem">
                        Downloads
                    </div>
                </Link>
                <Link>
                    <div className="navItem">
                        Invited Speakers
                    </div>
                </Link>
                <Link to='/guidelines'>
                    <div className="navItem">
                        Guidelines to Submit Paper
                    </div>
                </Link>
                <Link to="/joinTPC">
                    <div className="navItem">
                        Join Technical Programme Committee
                    </div>
                </Link>
                <Link to="/plagiarism">
                    <div className="navItem">
                        Plagiarism Policy
                    </div>
                </Link>
                <Link to="committees">
                    <div className="navItem">
                        Committees
                    </div>
                </Link>
                <Link>
                    <div className="navItem">
                        Our Supporters
                    </div>
                </Link>
                <Link>
                    <div className="navItem">
                        INDIACom Proceedings
                    </div>
                </Link>
                <Link>
                    <div className="navItem">
                        Accommodation
                    </div>
                </Link>
                <Link>
                    <div className="navItem">
                        How to reach Venue
                    </div>
                </Link>
                <Link>
                    <div className="navItem">
                        Submit Feedback
                    </div>
                </Link>
            </nav>
        </>
    )
}

export default Navigation;