import React from 'react'

function LeftSection() {
    return ( 
    <div className="container mt-3 mt-md-5 ">
        <div className="row">
          <div className="col-7">
            <img
              className="img-fluid p-5 mb-3 mb-md-5"
              src="media/images/leftsection.png"
              alt="svg img"
            />
          </div>
          <div className="col">
            
          </div>
          <div className="col-4 p-5">
            <h2 className="fs-1 p-2">Kite</h2>
            <p className=" p-2">
            Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.
            </p>
            <a href="">Try demo<i className="fa-solid fa-arrow-right"></i></a>
            <a href="" style={{marginLeft:"100px"}}>
            Learn more <i className="fa-solid fa-arrow-right"></i></a>
            <img className="mt-5" src="media/images/appstore-badge.svg"/>
            <img className="mt-5 mx-4" src="media/images/google-play-badge.svg"/>
         </div>
      </div>
  </div> 
);
}

export default LeftSection;