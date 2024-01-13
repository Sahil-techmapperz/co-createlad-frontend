import React from 'react'
import "./investhero.css";
import investbanner from "../assets/Investbanner.png";


const Investhero = () => {
  return (
    <div>
      <div className=" investor-parent-container">
       
          <div className=" investor-left-content">
           
                <h5>
                  Value | Impact | Scale 
                </h5>
                <h1>
                  Creating the next generation of changemakers
                </h1>
                <div className="container invest-right-content1">
            
              <img src={investbanner} alt="" class="img-fluid"/>
            
          </div>
                <p>
                  Get Access to Pitch in front of global investors to launch/
                  scale up your start-up initiatives with investment caps
                  ranging from 10,000 USD- 1.2 M USD.
                </p>
              <div className="invest-btn-container">
                <button
                  className="ibtn rounded-full bg-bluee-400 tex-white"
                 
                >
                  Apply Now
                </button>
              </div>
             
            
          </div>

          <div className="container invest-right-content">
            
              <img src={investbanner} alt="" class="img-fluid"/>
            
          </div>
        
      </div>
    </div>
  )
}

export default Investhero
