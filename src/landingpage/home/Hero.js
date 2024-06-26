import React from 'react'
import './Hero.css';

function Hero() {
    return ( 
        <div className='container mt-0'>
            <div className='Row text-center p-1 p-md-5'>
                <div className='col p-1 p-md-5'>
                    <img className="img-fluid" src='media/images/homehero.png' alt='imghero'  />
                    <h1 className='Heading mt-2 fs-2'>Invest in everything</h1>
                    <p className='para1 mt-3 fs-5'>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                   <button className='btn btn-primary fs-6 mt-3 mb-3'>Sign up now</button>
                    
                </div>
                
            </div>

        </div>
     );
}

export default Hero;