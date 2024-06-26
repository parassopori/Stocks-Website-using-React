import React from "react";

function Awards() {
  return (
  <div className="container mt-3 mt-md-5 ">
      <div className="row">
        <div className="col">
          <img
            className="img-fluid p-5 mb-3 mb-md-5"
            src="media/images/largestbroker.svg"
            alt="svg img"
          />
        </div>
        <div className="col p-5">
          <h2 className="fs-2 p-2">Largest stock broker in India</h2>
          <p className=" p-2">
            1.5+ Crore Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

         <div className="d-flex">
          <div className="row">
            <div className="col fs-6">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col fs-6">
              <ul>
              <li>
                <p>Stocks & IPOs</p>
              </li>
              <li>
                <p>Direct mutual funds</p>
              </li>
              <li>
                <p>Bonds and Govt. Securities</p>
              </li>
              </ul>
            </div>

          </div>
          </div>
      </div>
  </div>
  </div>
    );
};
export default Awards;
