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
    </div>
  )
}

export const HM_secondFrame = () => {
    return (
      <div></div>
    )
  }

export const HM_thirdframe = () => {
  return (
    <div></div>
  )
}