import React from "react";

function Team() {
  return (
    <div className="container p-2">
      
        
        <div className="row  " style={{padding:"50px"}}>
          <div className="col ">
            <img className="img-fluid mb-4" src="media/images/author.jpg" alt="author" style={{borderRadius:"100%",width:"60%",height:"auto", marginLeft:"170px", marginTop:"95px" }}/>
            <h5 className="text mb-3 " style={{ marginLeft:"280px"}}>Nithin Kamath</h5>
            <p className="text-grey text-center fs-6 fw-medium" style={{ marginLeft:"110px"}}>Founder, CEO</p>
              
            
          </div>
          <div className="col text  fs-5 fw-normal text-align-justify">
          <h1 className="text fw-medium mb-5">
          People
        </h1>
            <p className="text" >
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
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
    
  );
}

export default Team;
