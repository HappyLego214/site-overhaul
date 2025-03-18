import { hm_firstFrameProps } from "./interfaces"
import React from 'react'

export const HM_firstFrame: React.FC<hm_firstFrameProps> = ({children}) => {
  return (
    <div className="container-ffh">
        {children}
        <div className="titles-ffh">  
        <span className="imagine-journey-empower">Imagine. Journey. Empower.</span>
        <div className="make-it-possible">
            <span className="make-it">Let’s make it </span>
            <span className="possible">possible</span>
            <span className="dot">.</span>
        </div>
        </div> 
        <div className="mesh-gradient-ffh"></div> 
    </div>
  )
}

export const HM_secondFrame = () => {
    return (
      <div className="container-sfh">
        <div className="first-col-sfh">
            <div className="text-container-sfh">
                <div className="text-wrapper-sfh">
                    <h3>Grow with us.</h3>
                    <p>
                    As a transformation and consulting company, Kation, with locations in the Philippines and Indonesia that serves clients in the Asia Pacific region, connects technology with people and how they work. We drive business success using our human-centered design, tools, and systems on platforms that best support business growth and direction.
                    </p>
                </div>
            </div>
            <div className="logo-container-sfh">

            </div>
        </div>
        <div className="second-col-sfh"></div>
        <div className="mesh-gradient-sfh"></div>
      </div>
    )
  }
