/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 chair.gltf --transform --types
Author: Francesco Coldesina (https://sketchfab.com/topfrank2013)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/chair-b5ecdb6253a7454c916954bef6c10251
Title: Chair
*/

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh;
    Object_3: THREE.Mesh;
    Object_4: THREE.Mesh;
    Object_5: THREE.Mesh;
    Object_6: THREE.Mesh;
  };
  materials: {
    ["default"]: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/chair-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-337.62, -369.78, -444.19]}>
          <mesh
            geometry={nodes.Object_2.geometry}
            material={materials["default"]}
          />
          <mesh
            geometry={nodes.Object_3.geometry}
            material={materials["default"]}
          />
          <mesh
            geometry={nodes.Object_4.geometry}
            material={materials["default"]}
          />
          <mesh
            geometry={nodes.Object_5.geometry}
            material={materials["default"]}
          />
          <mesh
            geometry={nodes.Object_6.geometry}
            material={materials["default"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/chair-transformed.glb");
