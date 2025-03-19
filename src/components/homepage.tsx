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

export const HM_firstFrame = () => {
  return (
    <div>
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