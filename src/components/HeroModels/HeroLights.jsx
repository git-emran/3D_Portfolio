import React from "react";
import * as THREE from "three";

const HeroLights = () => {
  return (
    <>
      <spotLight
        position={[2, 5, 6]}
        intensity={100}
        angle={0.15}
        penumbra={0.2}
        color="white"
      />
      <spotLight
        position={[4, 5, 4]}
        intensity={40}
        angle={0.2}
        penumbra={0.5}
        color="#4cc9f0"
      />
      <spotLight
        position={[-3, 5, 5]}
        intensity={20}
        angle={0.4}
        penumbra={1}
        color="#FFFFFFFF"
      />
      <primitive
        object={new THREE.RectAreaLight("A259FF", 8, 3, 2)}
        position={[1, 9, 4]}
        intensity={0.1}
        rotation={[-Math.PI / 4, Math.PI / 4, 0]}
      />
      <pointLight position={[0, 1, 0]} intensity={12} color="#7209b7" />
      <pointLight position={[1, 2, -2]} intensity={10} color="#292727FF" />
    </>
  );
};

export default HeroLights;
