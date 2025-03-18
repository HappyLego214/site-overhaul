import React from 'react'
import { PageFrameProps } from './interfaces'

const PageFrame: React.FC<PageFrameProps> = ({ children }) => {
  return <div className="frame-container">
{children}</div>;
};

export default PageFrame