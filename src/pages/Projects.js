import React from 'react';

//import FbxViewer from '../components/FBXViewer'
//import ImageTransition from '../components/ImageTransition';
import ImageTransitionText from '../components/ImageTransitionText';

import HappyVulp from '../assets/forrogue.png';

import '../styles/Projects.css';

const images = [
  HappyVulp,
  HappyVulp, 
  HappyVulp, 
  HappyVulp
]
const textBlocks = [
  "ayo",
  "aya",
  "awoo",
  "ono"
]

function Projects() {
  /*<FbxViewer modelPath="../assets/models/tail.fbx" />*/
  const pageSizeFactor = 6;

  return (
    <div 
      className="background-container" 
      style={{ 
        height: `${pageSizeFactor*100}vh` 
      }}
    >
      {/*ImageTransition(pageSizeFactor, images)*/}
      {ImageTransitionText(pageSizeFactor, images, textBlocks)}
    </div>
  )
}

export default Projects
