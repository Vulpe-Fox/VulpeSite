import React from 'react';

//import FbxViewer from '../components/FBXViewer'
import ImageTransition from '../components/ImageTransition';

import HappyVulp from '../assets/forrogue.png';

import '../styles/Projects.css';

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
      {ImageTransition(pageSizeFactor, [HappyVulp, HappyVulp, HappyVulp, HappyVulp])}
    </div>
  )
}

export default Projects
