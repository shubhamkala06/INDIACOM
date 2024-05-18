import React from "react";

function JoinTechnical() {
  return (
    <div>
      <h1 className="submitpaper-heading">Not Logged-In</h1>
      <p className="submitpaper-p">
        This feature is accessible only to registered members of Delcon-2024
        website. You need to log-in with your Member ID before you proceed. If
        you do not have a Member ID at our website, please register with us.
        Registering with us is simple and fast, and its free too! You can access
        the Membership Form here, for registration and generation of Member ID.
      </p>
      <p className="submitpaper-bold">If you are already a member, please proceed to the Log-In page.</p>
      <p>
        <span className="submitpaper-bold">Note:</span> If you are visiting this website for the first time, please read
        the guidelines given hereunder before you proceed.
      </p>
      <ol>
        <li className="submitpaper_li">Guidelines to get membership</li>
        <li className="submitpaper_li">Guidelines to submit paper</li>
        <li className="submitpaper_li">Guidelines to submit revised paper or related documents</li>
        <li className="submitpaper_li">Guidelines to submit request for Convening a Special Session</li>
        <li className="submitpaper_li">Guidelines to join Technical Programme Committtee</li>
        <li className="submitpaper_li">Guidelines to Submit Feedback</li>
      </ol>
    </div>
  );
}

export default JoinTechnical;