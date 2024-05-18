import React from "react";

function PaymentMode() {
  return (
    <div className="payment-container">
      <h1>Payment Modes</h1>
      <p className="payment_p">
        If the Authors / Participants / Delegates sign up at 
        <a href = "www.bvicam.ac.in/indiacom"> www.bvicam.ac.in/indiacom</a> and create a Member ID (MID), they will not be
        required to fill up the required <a>Registration Form.</a> They can login with
        their MID & Password, click on <span>Upload Payment Details,</span> fill
        up the payment details and then upload the copy of the proof of payment
        there itself and generate a Payment ID, which shall be verified from our
        end and then the confirmation shall be sent. Before making the payment,
        all the authors of accepted papers, are requested to kindly check their
        applicable registration amount, after logging in with their MID &
        Password and Click on <span>View Applicable Payment</span> under their
        Member Area, to ensure to make the payment of correct amount.
      </p>
      <p className="payment_p">
        Prospective Delegates, not having MID at www.bvicam.ac.in/indiacom can
        fill up the detailed Registration Form and send it along with the
        payment in person or by Speed Post, at the address mentioned below.
        Those, who are making online payment must mention their online payment
        details Like NEFT / RTGS Transaction Number, date, amount, etc. in the
        Registration Form and send the scanned copy of the filled in
        Registration Form by E-Mail at <a href = "conference@bvicam.ac.in/mca@bvicam.ac.in.">conference@bvicam.ac.in /
        mca@bvicam.ac.in.</a>
      </p>
      <p className="payment_p">Follwing are acceptable modes of payment: -</p>
      <div className="payment_list">
        <ol className="payment_ol">
          <li>
            Make <span>Online Payment</span> through your Credit Card / Debit
            Card / Net Banking using our Payment Gateway by clicking here.
          </li>
          <li>
            Deposit <span>Cash</span> at the Office;{" "}
            <span>
              Bharati Vidyapeeth’s Institute of Computer Applications and
              Management (BVICAM), A-4, Paschim Vihar, Opp. Paschim Vihar (East)
              Metro Station, Rohtak Road, New Delhi – 110063
            </span>
            , on all working days between 09:00 am to 05:00 pm (Monday to
            Friday) and 09:00 am to 01:00 pm on Saturday. Kindly obtain the
            receipt at the time of the payment. After that, login with their MID
            & Password, click on{" "}
            <span className="span_payment_blue">Upload Payment Details</span>,
            fill up the payment details and then upload the scanned copy (in
            PDF) of the proof of payment there itself and generate a Payment ID.
          </li>
          <li>
            <span>Multicity Cheque / Demand Draft (DD)</span> to be drawn in
            favour of
            <span>DIRECTOR, BVICAM</span> payable at{" "}
            <span>New Delhi (INDIA)</span>,{" "}
            <span className="span_payment_red">
              must be sent by SPEED POST or delivered personally in the office
              of the Institute,
            </span>{" "}
            Bharati Vidyapeeth’s Institute of Computer Applications and
            Management (BVICAM), A-4, Paschim Vihar, Opp. Paschim Vihar (East)
            Metro Station, Rohtak Road, New Delhi – 110063, between 09:00 am to
            05:00 pm (Monday to Friday) and 09:00 am to 01:00 pm on Saturday.
            Before sending the <span>Multicity Cheque / Demand Draft (DD)</span>
            , login with their MID & Password, click on{" "}
            <span className="span_payment_blue">Upload Payment Details,</span>{" "}
            fill up the payment details and then upload the scanned copy (in
            PDF) of the proof of payment there itself and generate a Payment ID.{" "}
            <p>
              <span className="span_payment_blue">Important Note:</span>
              <span className="span_payment_red">
                Please do not deposit either Cash or Cheque/DD in our Bank
                account in your city, as tracking the same in our bank statement
                becomes difficult.
              </span>
            </p>
          </li>
          <li>
            Make payment through{" "}
            <span>Wire Transfer / Online Bank Transfer / NEFT / RTGS</span> in
            our <span>SBI Bank Account</span> (as per the account details, given
            below). Please ensure to mention your PID and MID, while making the
            payment, so that the same can be tracked easily, in our bank
            statement. After making the payment, login with their MID &
            Password, click on{" "}
            <span className="span_payment_blue">Upload Payment Details</span>,
            fill up the payment details and then upload the scanned copy (in
            PDF) of the proof of payment there itself and generate a Payment ID.{" "}
            <span>
              Please note that in this form of payment, authors are not required
              to send any thing by post.
            </span>
          </li>
        </ol>
      </div>
      <p className="span_payment_red">
        Details for Wire Transfer / Online Transfer / NEFT / RTGS Payment:
      </p>
      <div className="payment-flex">
        <div>
          <li>Name of Beneficiary Bank</li>
          <li>Name of the Branch of the Beneficiary Bank</li>
          <li>Address of the Branch of the Beneficiary Bank</li>
          <li>Branch Code</li>
          <li>Branch's IFSC Code</li>
          <li>MICR Code of Bank</li>
          <li>Swift Code of the Beneficiary Bank</li>
          <li>Beneficiary Account Name</li>
          <li>Beneficiary Bank Account Number</li>
          <li>Type of Beneficiary Account</li>
        </div>
        <div className="payment_bold">
          <li>: State Bank of India (SBI)</li>
          <li>: Jawala Heri (Delhi, INDIA)</li>
          <li>: SBI Jawala Heri, Paschim Vihar, New Delhi – 110063 (INDIA)</li>
          <li>: 06623</li>
          <li>: SBIN0006623</li>
          <li>: 110002142</li>
          <li>: SBININBB378</li>
          <li>
            : BVICAM (Bharati Vidyapeeth’s Inst. of Computer Applications &
            Mgt.)
          </li>
          <li>: 32077798105</li>
          <li>: SAVING</li>
        </div>
      </div>
      <p className="payment_ol">
        In case of any difficulty, please contact{" "}
        <span>Dr. Sunil Pratap Singh</span> at
        <span>(Tel.: +91-11-25275055; Mob.:+91-8630340857, E-Mail ID:</span>
        <span className="span_payment_blue">payments.indiacom@gmail.com).</span>
      </p>
      <p className="payment_ol">
        <span className="span_payment_red">
          In case of payment by Multicity Cheque / Demand Draft (DD)
        </span>
        : Registration Form, Multicity Cheque / Demand Draft, Certificate of
        Originality, Copy Right Transfer Form and copies of Membership Cards
        (for availing of discount) if any, along with any other documents (if
        required) must be sent by{" "}
        <span className="span_payment_red">SPEED POST</span>, with the caption "
        <span className="span_payment_red">INDIACom-2024</span>" at the top
        centre of the envelope to the following address:-
      </p>
      <div>
        <p className="payment_end">Prof. M. N. Hoda</p>
        <p className="payment_end">General Chair, INDIACom-2024</p>
        <p className="payment_end">Director, Bharati Vidyapeeth’s</p>
        <p className="payment_end">Institute of Computer Applications and Management (BVICAM)</p>
        <p className="payment_end">A-4, Paschim Vihar, Rohtak Road, New Delhi – 110063 (INDIA)</p>
        <p className="payment_end">Tel.:+ 91–11–25275055 Fax:+ 91–11–25255056 Mobile: +91–9212022066</p>
        <p className="payment_end">E-Mail: conference@bvicam.ac.in; mca.hoda@gmail.com</p>
      </div>
    </div>
  );
}

export default PaymentMode;