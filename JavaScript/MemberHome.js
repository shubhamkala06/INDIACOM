import { Link } from "react-router-dom";

const MemberHome = ()=>{
    return (
        <div className="memberHomeContainer">
            <p className="salutation">Dear {window.sessionStorage.getItem("currentUser")}</p>
            <p className="wlcm">Welcome to BVICAM</p>
            <ol className="memberMainList">
                <li>
                    <Link>Click Here</Link>if you wish to organise / convene a Special Session
                </li>
                <li>
                    <Link>Click Here</Link>to join Technical Programme Committee
                </li>
                <li>
                    <Link>Click Here</Link>to submit a new paper
                </li>
                <li>
                    <Link>Click Here</Link>for free access of SpringerNature BJIT Papers
                </li>
                <li>
                    <p>
                        Operations related to submitted papers
                        <ol className="memberSubList">
                            <li>
                                <Link>View Status and Submitted Papers</Link>
                            </li>
                            <li>
                                <Link>Submit a Revised Paper</Link>
                            </li>
                            <li>
                                <Link>Change Title of a Submitted Paper</Link>
                            </li>
                            <li>
                                <Link>Add Author to a submitted paper</Link>
                            </li>
                            <li>
                                <Link>Submit Copyright Transfer Form, Certificate of Orginality or Presentation</Link>
                            </li>
                        </ol>
                    </p>
                </li>
                <li>
                    <Link>Click Here</Link> to Submit your Documents for Verification of Category Registeration.
                </li>
                <li>
                    <Link>View Payable Amount,</Link> so that payment can be verified and confirmed.
                </li>
                <li>
                    <Link>Upload Payment Details and genrate Payment ID</Link>, so that the payment can be verified and confirmed
                </li>
                <li>
                    <Link>Click Here</Link> to Proof read your Paper.
                </li>
                <li>
                    <Link>Submit your feedback</Link>
                </li>
            </ol>
        </div>
    );
};

export default MemberHome;