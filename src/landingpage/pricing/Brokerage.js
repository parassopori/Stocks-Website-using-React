import React from 'react'

function Brokerage() {
    return ( 
    <div className="container mt-5 p-5 mt-md-5 border-top ">
      <div className="row text-center">
      <div className="col-4 text-muted">
      <img className='p-5' src='media/images/zero.svg'></img>
      <h2 className=''>Free equity delivery</h2>
      <p className='fs-5 mt-4'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
      </div>
      <div className="col-4 text-muted">
      <img className='p-5' src='media/images/20.svg'></img>
      <h2 className=''>Intraday and F&O trades</h2>
      <p className='fs-5 mt-4'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
      </div>
      <div className="col-4 text-muted">
      <img className='p-5' src='media/images/zero.svg'></img>
      <h2 className=''>Free direct MF</h2>
      <p className='fs-5 mt-4'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
      </div>
        </div>
        </div>
    )
}

export default Brokerage;