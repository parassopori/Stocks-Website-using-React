import React from "react";
import './Footer.css';

function Footer() {
  return (
    <footer className="bg-light mt-5 p-5 border-top">
      <div className="container">
        <div className="row">
          <div className="col">
            <img className="img-fluid w-50" src="media/images/logo.svg"></img>
            <p className="text-dark fw-bold mt-3">© 2010 - 2024, Zerodha Broking Ltd. All rights reserved.</p>
            <a className="me-5 fs-4 " href=""><i className="fa-brands fa-instagram"></i></a>
            <a className="me-5 fs-4" href=""><i className="fa-brands fa-x-twitter"></i></a>
            <a className="me-5 fs-4" href=""><i className="fa-brands fa-facebook"></i></a>
            <a className="me-5 mt-5 fs-3" href=""><i className="fa-brands fa-linkedin"></i></a><br/>
            <a className="me-5 mt-5 fs-4" href=""><i className="fa-brands fa-whatsapp"></i></a>
            <a className="me-5 mt- fs-4" href=""><i className="fa-brands fa-telegram"></i></a>
            <a className="me-5 mt-5 fs-4" href=""><i className="fa-brands fa-youtube"></i></a>
          </div>
          <div className="col">
            <p className="fw-bolder">Company</p>
            <a  className="text-dark fw-medium" href="" style={{ textDecoration: "none" }}>
              About
            </a>
            <br />
            <a className="text-dark fw-medium" href="" style={{ textDecoration: "none" }}>
              Products{" "}
            </a>
            <br />
            <a className="text-dark fw-medium" href="" style={{ textDecoration: "none" }}>
              Pricing
            </a>{" "}
            <br />
            <a className="text-dark fw-medium" href="" style={{ textDecoration: "none" }}>
              Referral{" "}
            </a>
            <br />
            <a className="text-dark fw-medium" href="" style={{ textDecoration: "none" }}>
              programme
            </a>
            <br />
            <a className="text-dark fw-medium" href="" style={{ textDecoration: "none" }}>
              Careers
            </a>{" "}
            <br />
            <a className="text-dark fw-medium" href="" style={{ textDecoration: "none" }}>
              Zerodha.tech Press &media
            </a>
            <br />
            <a className="text-dark fw-medium" href="" style={{ textDecoration: "none" }}>
              Zerodha Cares (CSR)
            </a>
            <br />
          </div>
          <div className="col">
            <p className="fw-bolder">Support</p>
            <a className="text-dark fw-medium" href="" style={{ textDecoration: "none" }}>
              {" "}
              Status of your complaints{" "}
            </a>
            <br />
            <a className="text-dark fw-medium" href="" style={{ textDecoration: "none" }}>
              Support portal{" "}
            </a>
            <br />
            <a className="text-dark fw-medium" href="" style={{ textDecoration: "none" }}>
              Z-Connect blog
            </a>{" "}
            <br />
            <a className="text-dark fw-medium"  href="" style={{ textDecoration: "none" }}>
              {" "}
              List of charges{" "}
            </a>
            <br />
            <a className="text-dark fw-medium" href="" style={{ textDecoration: "none" }}>
              Downloads & resources
            </a>
            <br />
            <a className="text-dark fw-medium" href="" style={{ textDecoration: "none" }}>
              Videos
            </a>{" "}
            <br />
            <a className="text-dark fw-medium" href="" style={{ textDecoration: "none" }}>
              Market overview
            </a>
            <br />
            <a className="text-dark fw-medium" href="" style={{ textDecoration: "none" }}>
              How to file a complaint?
            </a>
            <br />
          </div>
          <div className="col">
            <p className="fw-bolder">Account</p>
            <a className="text-dark fw-medium" href="" style={{ textDecoration: "none" }}>
              Open an account
            </a>
            <br />
            <a className="text-dark fw-medium" href="" style={{ textDecoration: "none" }}>
              Fund transfer{" "}
            </a>
            <br />
          </div>
          <div className="text-muted mt-5" style={{fontSize:"12px"}}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to complaints@zerodha.com, for DP related to dp@zerodha.com.
            Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances Smart Online
            Dispute Resolution | Grievances Redressal Mechanism Investments in
            securities market are subject to market risks; read all the related
            documents carefully before investing.
          </p>
          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>

    
          </div>
          <div><ul className="d-flex text-muted justify-content-evenly" style={{listStyle:"none"}}>
            <li>BSE </li>
            <li>MCX </li>
            <li>Terms & conditions</li>
            <li>Policies & procedures</li>
            <li>Privacy policy</li>
            <li>Disclosure</li>
            <li> For investor's attention</li>
            <li>Investor </li>
            <li>Investor charter</li>

        
          </ul></div>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
