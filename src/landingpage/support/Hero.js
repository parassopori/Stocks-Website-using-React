import React from 'react'

function Hero() {
    return (
        <div className='container-fluid' style={{ background: "#387ed1", height: "62vh", color: "white" }}>
            <div className='row '>
                <div className='col d-flex justify-content-between p-5 fw-normal'>
                    <h3 style={{ marginLeft: "200px" }}>Support Portal</h3>
                    <a style={{ color: "white", fontSize: "1.3rem", marginRight: "200px" }} href=''>Track Tickets</a>
                </div>
            </div>
            <div className='row'>
                <div className='col-12 mx-5 '>
                    <h2 className='fs-2 fw-normal'>Search for an answer or browse help topics to create a<br></br> ticket</h2>
                    <input className='w-50 h-25 mt-4' type='text' placeholder='Eg:how do i activate F&O,why is my order getting rejected ...' /><button className='btn btn-outline-primary'><i className="fa-solid fa-magnifying-glass mx-3" ></i></button>
                    
                    <div className='mt-5 mx-5'>
                    <a href='' className='text-white me-5' >Track account opening</a>
                    <a href='' className='text-white me-5' > Track segment activation</a>
                    <a href='' className='text-white me-5' > Intraday margins</a>
                    <a href='' className='text-white me-5' >Kite user manual</a>
                    </div>
             

                   <div className=''style={{position:"Relative",left:"1000px",bottom:"175px"}}>
                      <h2  className='fs-2 fw-normal'>Featured</h2>
                      <ol>
                        <li className='mt-3'>Latest Intraday leverages and Square-off timings</li>
                        <li className='mt-3'>Surveillance measure on scrips - June 2024</li>
                        
                       </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;