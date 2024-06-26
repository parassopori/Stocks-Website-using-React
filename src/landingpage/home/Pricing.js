import React from 'react'

function Pricing() {
    return (  
       <div className='container mb-5 '>
        <div className='row mt-5'>
            <div className='col-5' >
             <h1 className='mb-4 fs-2'>Unbeatable pricing</h1>
             <p className='mb-4'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
             <a href="" style={{textDecoration:"none"}}>See pricing <i className="fa-solid fa-arrow-right"></i> </a>
            </div>
            <div className='col-1'>
                
            </div>
            <div className='col-6  '>
                <div className='row'>
                    <div className='col border p-3 text-center'>
                     <h1>₹0</h1>
                     <p>Free equity delivery and direct mutual funds</p>
                    </div>
                    <div className='col border  p-3 text-center'>
                    <h1>₹20</h1>
                    <p>Free equity delivery and direct mutual funds</p>
                    </div>  
                </div>
            </div>
        </div>

       </div>
    );
}

export default Pricing;