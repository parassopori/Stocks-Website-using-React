import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center mt-5 p-2 p-lg-5 fs-2">
          We pioneered the discount broking model in India.
          <br />
          Now, we are breaking ground with our technology.
        </h1>
        <div className="row mt-5 border-top text-align-justify" style={{padding:"130px"}}>
          <div className="col ">
            <p className="text fs-5 fw-normal">
              We kick-started operations on the 15th of August, 2010 with the
              goal of breaking all barriers that traders and investors face in
              India in terms of cost, support, and technology. We named the
              company Zerodha, a combination of Zero and "Rodha", the Sanskrit
              word for barrier.
               <p className="text mt-5">Today, our disruptive pricing models and
              in-house technology have made us the biggest stock broker in
              India.</p>
              <p className="text mt-5">
                <p className="text mt-5">Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment <br></br> platforms, contributing over 15% of all Indian retail<br></br> trading volumes.</p></p>
            </p>
          </div>
          <div className="col text  fs-5 fw-normal">
            <p className="text  ">
              In addition, we run a number of popular open online educational
              and community initiatives to empower retail traders and investors.</p>
              <p className="text fs-5 mt-5">Rainmatter, our fintech fund and incubator, has invested in
              several fintech startups with the goal of growing the Indian
              capital markets.</p> 
              
              <p className="text fs-5 mt-5">And yet, we are always up to something new every
              day. Catch up on the latest updates on our blog or see what the
              media is saying about us.
              </p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
