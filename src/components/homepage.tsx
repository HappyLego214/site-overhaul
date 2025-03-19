import { hm_firstFrameProps } from "./interfaces"
import Navbar from '../components/navbar';
import PageFrame from '../components/pageFrame';
import React from 'react'

const Homepage: React.FC = () => {
  return (
    <>
      <PageFrame>
        <HM_firstFrame>
        </HM_firstFrame>
      </PageFrame>
      <PageFrame>
        <HM_secondFrame />
      </PageFrame>
      <PageFrame>
        {/* Add other content here */}
      </PageFrame>
      <PageFrame>
        {/* Add other content here */}
      </PageFrame>
      <PageFrame>
        {/* Add other content here */}
      </PageFrame>
    </>
  );
};
export default Homepage;

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
                    <h4>Grow with us.</h4>
                    <p>
                    As a transformation and consulting company, Kation, with locations in the Philippines and Indonesia that serves clients in the Asia Pacific region, connects technology with people and how they work. We drive business success using our human-centered design, tools, and systems on platforms that best support business growth and direction.
                    </p>
                </div>
            </div>
            <div className="logo-container-sfh">
                <div className="logo-sfh">
                  <img src="../src/assets/sfh/royal.png" alt="royal" />
                </div>
                <div className="logo-sfh">
                  <img src="../src/assets/sfh/coca-cola.png" alt="coca-cola" />
                </div>
                <div className="logo-sfh">
                  <img src="../src/assets/sfh/citadel.png" alt="citadel" />
                </div>
                <div className="logo-sfh">
                  <img src="../src/assets/sfh/rustans.png" alt="rustans" />
                </div>
                <div className="logo-sfh">
                  <img src="../src/assets/sfh/messy-bessy.png" alt="messy-bessy" />
                </div>
                <div className="logo-sfh">
                  <img src="../src/assets/sfh/beyond-innovations.png" alt="beyond-innovations" />
                </div>
            </div>
        </div>
        <div className="second-col-sfh">
          <div className="award-sfh">
            <img className="ms-badge" src="../src/assets/sfh/ms-badge.png" alt="microsoft business apps award" />
            <img className="ms-partner" src="../src/assets/sfh/ms-partner.png" alt="microsoft partner"></img>
          </div>
        </div>
        <div className="mesh-gradient-sfh"></div>
      </div>
    )
  }

