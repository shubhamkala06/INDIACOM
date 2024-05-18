import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = ()=> {
  const [formData, setFormData] = useState({user:"",memberID: "",pass: ""});
  const navigate = useNavigate();

  const handleChange = (event) => {
    let { name,value,type } = event.target;
    if(type==='tel'){
      value = value.replace(/[^0-9]/g,"");
    }
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sessionStorage.setItem('currentUser',formData.user);
    window.location.href = window.location.href.slice(0,-6)+`/member/${formData.memberID}`;
  };

  if(sessionStorage.getItem("currentUser")==null){
    return (
      <div className="loginContainer">
          <h1>Member Login</h1>
          <form onSubmit={handleSubmit} autoComplete="off" className="loginForm">
            <div className="loginField">
                <label htmlFor="memberID">Member ID:</label>
                <input type="tel" id="memberID" name="memberID" value={formData.memberID} onChange={handleChange} required/>
            </div>
            <div className="loginField">
                <label htmlFor="user">Username:</label>
                <input type="text" id="user" name="user" value={formData.user} onChange={handleChange} required/>
            </div>
            <div className="loginField">
                <label htmlFor="pass">Password:</label>
                <input type="password" id="pass" name="pass" value={formData.pass} onChange={handleChange} required/>
            </div>
            <button type="submit">Submit</button>
          </form>
          <div className="otherOptions">
              <p>
                  <Link>Forgot MemberID?</Link>
              </p>
              <p>
                <Link to="/signup">Not a Member?</Link> 
              </p>
              <p>
                  <Link>Forgot Password?</Link>
              </p>
          </div>
      </div>
    );
  }
  else{
    return (
      <div className="loggedInContainer">
        <h1>
          Already Logged In
        </h1>
      </div>
    )
  }
}

export default Login;