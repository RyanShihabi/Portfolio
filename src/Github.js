import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF(process.env.PUBLIC_URL + "/github.glb")

  const [git, setGit] = useState(false);

  const onClick = () => {
    window.location.href = "https://github.com/RyanShihabi";
  }

  return (
    <group ref={group} {...props} dispose={null} onClick={onClick} onPointerOver={(e) => setGit(true)} onPointerOut={(e) => setGit(false)}>
      <mesh geometry={nodes.Default.geometry} material={git ? new THREE.MeshBasicMaterial({ color: new THREE.Color('orange'), transparent: true }) : materials.white} rotation={[Math.PI/2, 0, 0]} />
    </group>
  )
}

useGLTF.preload(process.env.PUBLIC_URL + "/github.glb")
