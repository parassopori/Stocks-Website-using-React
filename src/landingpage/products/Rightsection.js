import React from "react";

function RightSection() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-4 mx-1" style={{marginTop:"11rem"}}>
                    <h2 className="fs-2 mt-5">Console</h2>
                    <p className="mt-5 fs-5">
                        The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.
                    </p>
                    <a className="fw-medium" href="">Learn more<i className="fa-solid fa-arrow-right"></i></a>
                  <div className="col-1"></div>
                </div>
                <div className="col-7 mx-5">
                    <img
                        className="img-fluid mx-5  mb-3 mb-md-5"
                        src="media/images/Rightsection.png"
                        alt="svg img"
                    />
                </div>
            </div>
        </div>
    );
}

export default RightSection;
