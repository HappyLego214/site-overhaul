import PageFrame from '../components/pageFrame';
import React from 'react'

const Homepage: React.FC = () => {
  return (
    <>
      <PageFrame>
        <HM_firstFrame/>
      </PageFrame>
      <PageFrame>
        <HM_secondFrame />
      </PageFrame>
      <PageFrame>
        <HM_thirdframe/>
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

export const HM_firstFrame = () => {
  return (
    <div className="homepage_first_frame_container">
      <div className="text_homepage_first_frame_container">
        <div className="tagline_homepage_first_frame">
          <h3>Imagine. Journey. Empower.</h3>
        </div>
        <div className="title_homepage_first_frame">
          <h1>Let's make it</h1>
          <h1>possible.</h1>
        </div>
      </div>
    </div>
  )
}

export const HM_secondFrame = () => {
    return (
      <div className="homepage_second_frame_container">
        <div className="one_homepage_second_frame_container">
          <div className="text_homepage_second_frame_container">
            <h1>Grow with us.</h1>
            <p>As a transformation and consulting company, Kation, with locations in the Philippines and Indonesia that serves clients in the Asia Pacific region, connects technology with people and how they work. We drive business success using our human-centered design, tools, and systems on platforms that best support business growth and direction.</p>
          </div>
          <div className="brands_homepage_second_frame_container">
            <img src="./src/assets/homepage/royal.png" className="brand_img_homepage_second_frame"></img>
            <img src="./src/assets/homepage/coca-cola.png" className="brand_img_homepage_second_frame"></img>
            <img src="./src/assets/homepage/citadel.png" className="brand_img_homepage_second_frame"></img>
            <img src="./src/assets/homepage/rustans.png" className="brand_img_homepage_second_frame"></img>
            <img src="./src/assets/homepage/messy-bessy.png" className="brand_img_homepage_second_frame"></img>
            <img src="./src/assets/homepage/beyond-innovations.png"className="brand_img_homepage_second_frame"></img>
          </div>
        </div>
        <div className="two_homepage_second_frame_container">
          <div className="badge_homepage_second_frame">
            <img src="./src/assets/homepage/badge-partner.png"></img>
          </div>
        </div>
      </div>
    )
  }

export const HM_thirdframe = () => {
  return (
    <div className="homepage_third_frame_container">
      <div className="one_homepage_third_frame_container">
        <div className="text_homepage_third_frame_container">
          <h1>Driving Change with Kation</h1>
          <p>
          As a Microsoft Tier 1 Partner, we go beyond providing licensing services—we empower organizations with tailored solutions built on Dynamics 365 and Microsoft 365. With deep expertise and a passion for innovation, we help businesses harness the full potential of technology to streamline operations, enhance efficiency, and adapt to an ever-evolving digital landscape. Our goal is not just to implement solutions, but to create lasting impact—unlocking new opportunities, driving transformation, and equipping teams with the tools they need to thrive today and in the future.
          </p>
        </div>
        <div className="products_third_frame_container">
        <img src="./src/assets/homepage/Tier.png"></ img>
          <img src="./src/assets/homepage/D365.png"></img>
          <img src="./src/assets/homepage/M365.png"></img>
   
        </div>
      </div>
      <div className="two_homepage_third_frame_container"></div>
    </div>
  )
}