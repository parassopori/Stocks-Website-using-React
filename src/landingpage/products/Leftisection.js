import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  appStore,
  googlePlay,
}) {
  return (
    <div className="container mt-3 mt-md-5 ">
      <div className="row">
        <div className="col-7">
          <img src={imageURL} />
        </div>
        <div className="col"></div>
        <div className="col-4 p-5">
          <h2 className="fs-1 p-2">{productName}</h2>
          <p className=" p-2 fs-5">{productDescription}</p>
          <a href={tryDemo}>
            Try Demo
            <i className="fa-solid fa-arrow-right"></i>
          </a>
          <a href={learnMore} style={{ marginLeft: "100px" }}>
            Learn more <i className="fa-solid fa-arrow-right"></i>
          </a>
          <a href={appStore}>
            <img className="mt-5" src="media/images/appstore-badge.svg" />
          </a>
          <a href={googlePlay}>
            <img
              className="mt-5 mx-4"
              src="media/images/google-play-badge.svg"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
