import { Link } from "react-router-dom";

const CurrentUserName = ()=>{
    return(
        <div className="loginLink">
            <div className="wlcm">Welcome, Guest</div>
            <Link to="/login">[log in]</Link>
        </div>
    );
};

export default CurrentUserName;