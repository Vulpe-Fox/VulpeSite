import React, { useEffect, useRef } from "react";

import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

const FbxViewer = ({ modelPath }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!modelPath) {
        console.error("FBX URL is required.");
        return;
    }

    const ref = mountRef.current;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    ref.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Load FBX model
    const loader = new FBXLoader();
    let model;
    loader.load(
        modelPath,
        (fbx) => {
            fbx.scale.set(0.01, 0.01, 0.01); // Scale model
            scene.add(fbx);
            model = fbx;
        },
        undefined,
        (error) => console.error("Error loading model:", error)
    );

    // Camera position
    camera.position.set(0, 1, 3);

    // Animation loop
    const animate = () => {
        requestAnimationFrame(animate);
        if (model) model.rotation.y += 0.01; // Rotate model
        renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener("resize", onResize);

    // Cleanup on unmount
    return () => {
        if(ref != null) {
            ref.removeChild(renderer.domElement);

        }
        window.removeEventListener("resize", onResize);
        renderer.dispose();
    };
  }, [modelPath]);

  return <div ref={mountRef} style={{ width: "100vw", height: "100vh" }} />;
};

export default FbxViewer;