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
        <HM_thirdframe />
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
    <div className="container-firstfh">
        {children}
        <div className="titles-firstfh">  
        <span className="imagine-journey-empower">Imagine. Journey. Empower.</span>
        <div className="make-it-possible">
            <span className="make-it">Let’s make it </span>
            <span className="possible">possible</span>
            <span className="dot">.</span>
        </div>
        </div> 
        <div className="mesh-gradient-firstfh"></div> 
    </div>
  )
}

export const HM_secondFrame = () => {
    return (
      <div className="container-secondfh">
        <div className="first-col-secondfh">
            <div className="text-container-secondfh">
                <div className="text-wrapper-secondfh">
                    <h4>Grow with us.</h4>
                    <p>
                    As a transformation and consulting company, Kation, with locations in the Philippines and Indonesia that serves clients in the Asia Pacific region, connects technology with people and how they work. We drive business success using our human-centered design, tools, and systems on platforms that best support business growth and direction.
                    </p>
                </div>
            </div>
            <div className="logo-container-secondfh">
                <div className="logo-secondfh">
                  <img src="../src/assets/secondfh/royal.png" alt="royal" />
                </div>
                <div className="logo-secondfh">
                  <img src="../src/assets/secondfh/coca-cola.png" alt="coca-cola" />
                </div>
                <div className="logo-secondfh">
                  <img src="../src/assets/secondfh/citadel.png" alt="citadel" />
                </div>
                <div className="logo-secondfh">
                  <img src="../src/assets/secondfh/rustans.png" alt="rustans" />
                </div>
                <div className="logo-secondfh">
                  <img src="../src/assets/secondfh/messy-bessy.png" alt="messy-bessy" />
                </div>
                <div className="logo-secondfh">
                  <img src="../src/assets/secondfh/beyond-innovations.png" alt="beyond-innovations" />
                </div>
            </div>
        </div>
        <div className="second-col-secondfh">
          <div className="award-secondfh">
            <img className="ms-badge" src="../src/assets/secondfh/ms-badge.png" alt="microsoft business apps award" />
            <img className="ms-partner" src="../src/assets/secondfh/ms-partner.png" alt="microsoft partner"></img>
          </div>
        </div>
        <div className="mesh-gradient-secondfh"></div>
      </div>
    )
  }

export const HM_thirdframe = () => {
  return (
    <div className="">
      <div className="mesh-gradient-thirdfh"></div>
    </div>
  )
}