import React from "react";

function RightSection({ title, discription, learnMore, imageURL }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4 mx-1" style={{ marginTop: "10rem" }}>
          <h2 className="fs-2 mt-5">{title}</h2>
          <p className="mt-5 fs-5">
            {discription}
          </p>
          <a className="fw-medium" href="">
            {learnMore}<i className="fa-solid fa-arrow-right"></i>
          </a>
          <div className="col-1"></div>
        </div>
        <div className="col-7 mx-5">
          <img className="img-fluid mx-5  mb-3 mb-md-5" src={imageURL} alt="svg img" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
