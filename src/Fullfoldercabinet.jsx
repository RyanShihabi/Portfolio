/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.5 fullfoldercabinet.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Cabinet(props) {
  const { nodes, materials } = useGLTF(process.env.PUBLIC_URL + '/fullfoldercabinet.glb')

  const ref = useRef();

  return (
    <group {...props} ref={ref} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.cabinetfullhollow_1.geometry} material={materials.base} />
        <mesh geometry={nodes.cabinetfullhollow_2.geometry} material={materials.gap} />
      </group>
      <group position={[-17, 16.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.cubby.geometry} material={materials['105,105,105.004']} />
        <mesh geometry={nodes.cubby_1.geometry} material={materials['191,191,191.004']} />
        <mesh geometry={nodes.cubby_2.geometry} material={materials['base.005']} />
        <mesh geometry={nodes.cubby_3.geometry} material={materials['handles.001']} />
        <mesh geometry={nodes.folderMidBot.geometry} material={materials['folder.003']} position={[7.715, -6.496, -7]} rotation={[0, 0, -Math.PI / 2]} scale={[1.1, 1, 1]} />
      </group>
      <group position={[-17, 43.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.cubby001.geometry} material={materials['105,105,105.005']} />
        <mesh geometry={nodes.cubby001_1.geometry} material={materials['191,191,191.005']} />
        <mesh geometry={nodes.cubby001_2.geometry} material={materials['base.006']} />
        <mesh geometry={nodes.cubby001_3.geometry} material={materials['handles.002']} />
        <mesh geometry={nodes.folderTop.geometry} material={materials['folder.002']} position={[8, -6.406, -7]} rotation={[0, 0, -Math.PI / 2]} scale={[1.1, 1, 1]} />
      </group>
      <group position={[-17, 30, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.cubby002.geometry} material={materials['105,105,105.006']} />
        <mesh geometry={nodes.cubby002_1.geometry} material={materials['191,191,191.006']} />
        <mesh geometry={nodes.cubby002_2.geometry} material={materials['base.007']} />
        <mesh geometry={nodes.cubby002_3.geometry} material={materials['handles.003']} />
        <mesh geometry={nodes.folderMidTop.geometry} material={materials['folder.001']} position={[8, -6.712, -7]} rotation={[0, 0, -Math.PI / 2]} scale={[1.1, 1, 1]} />
      </group>
      <group position={[-17, 3, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.cubby003.geometry} material={materials['105,105,105.007']} />
        <mesh geometry={nodes.cubby003_1.geometry} material={materials['191,191,191.007']} />
        <mesh geometry={nodes.cubby003_2.geometry} material={materials['base.008']} />
        <mesh geometry={nodes.cubby003_3.geometry} material={materials['handles.004']} />
        <mesh geometry={nodes.folderBottom.geometry} material={materials['folder.004']} position={[8, -6.563, -7]} rotation={[0, 0, -Math.PI / 2]} scale={[1.1, 1, 1]} />
      </group>
      <mesh geometry={nodes.About_Me.geometry} material={materials.white} position={[1.06, 48.121, -7.024]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
      <mesh geometry={nodes.Projects.geometry} material={materials['white.001']} position={[1.168, 34.637, -7.085]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
    </group>
  )
}

useGLTF.preload(process.env.PUBLIC_URL + '/fullfoldercabinet.glb')
