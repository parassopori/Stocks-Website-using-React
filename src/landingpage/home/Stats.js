import React from "react";

function Stats() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-6">
          <h1 className=" fs-2">Trust with confidence</h1>

          <h2 className="mt-5 fs-5">Customer-first always</h2>
          <p className="mt-3 ">
            That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores
            worth of equity investments.
          </p>
          <h2 className="mt-5 fs-5">No spam or gimmicks</h2>
          <p>
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
          <h2 className="mt-5 fs-5">The Zerodha universe</h2>
          <p>
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h2 className="mt-5 fs-5">Do better with money</h2>
          <p>
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
          <div className="col-6">
            <img src="media/images/ecosystem.png" alt="image" style={{width:"90%"}} />
            <div className="mt-3">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="" style={{textDecoration:"none"}}>Explore our products <i className="fa-solid fa-arrow-right"></i></a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="" style={{textDecoration:"none"}}>Try Kite demo <i className="fa-solid fa-arrow-right"></i> </a>
        
            </div>
          
          </div>
        
      </div>
    </div>
  );
}

export default Stats;
