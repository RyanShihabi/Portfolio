/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.5 iss-_international_space_station.glb
Author: Content House Studios, LLC (https://sketchfab.com/contenthousestudios)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/iss-international-space-station-8fccda739b464719b32fffda5b1fb328
Title: ISS- International Space Station
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function ISS(props) {
  const { nodes, materials } = useGLTF('/iss-_international_space_station.glb')

  const ref = useRef();

  useFrame((state, delta) => (ref.current.rotation.y += (delta*0.5)))

  return (
    <group {...props} dispose={null} ref={ref} rotation={[Math.PI/8, 0, 0]}>
      <group position={[0.001, 0.033, -0.001]}>
        <mesh geometry={nodes.primitive_0.geometry} material={materials.issmod_with_Tex} />
        <mesh geometry={nodes.primitive_1.geometry} material={materials.white} />
        <mesh geometry={nodes.primitive_2.geometry} material={materials.material04} />
        <mesh geometry={nodes.primitive_3.geometry} material={materials.Material2} />
        <mesh geometry={nodes.primitive_4.geometry} material={materials.Material1} />
        <mesh geometry={nodes.primitive_5.geometry} material={materials.Material3} />
        <mesh geometry={nodes.primitive_6.geometry} material={materials.bluebg} />
        <mesh geometry={nodes.iss_issins_split.geometry} material={materials.Material} />
        <mesh geometry={nodes.primitive_0_1.geometry} material={materials.Material2} />
        <mesh geometry={nodes.primitive_1_1.geometry} material={materials.isscover_with_Te} />
        <mesh geometry={nodes.primitive_2_1.geometry} material={materials.issleo_with_Tex} />
        <mesh geometry={nodes.primitive_3_1.geometry} material={materials.issusaf_with_1} />
        <mesh geometry={nodes.primitive_4_1.geometry} material={materials['19___Default']} />
        <mesh geometry={nodes.primitive_5_1.geometry} material={materials.Default} />
        <mesh geometry={nodes.primitive_6_1.geometry} material={materials.issusa_with_Tex} />
        <mesh geometry={nodes.primitive_7.geometry} material={materials.issred_with_Tex} />
        <mesh geometry={nodes.primitive_8.geometry} material={materials.iss_un_with_Tex} />
        <mesh geometry={nodes.primitive_9.geometry} material={materials.isshand_with_Tex} />
        <mesh geometry={nodes.primitive_10.geometry} material={materials.isscov2_with_Tex} />
        <mesh geometry={nodes.primitive_11.geometry} material={materials.graple_with_Tex} />
        <mesh geometry={nodes.primitive_12.geometry} material={materials.questcov_with_Te} />
        <mesh geometry={nodes.primitive_0_2.geometry} material={materials.issins_with_Tex} />
        <mesh geometry={nodes.primitive_1_2.geometry} material={materials.metalcon_with_Te} />
        <mesh geometry={nodes.primitive_2_2.geometry} material={materials.isscup_with_Tex} />
        <mesh geometry={nodes.primitive_3_2.geometry} material={materials.issbs_with_Tex} />
        <mesh geometry={nodes.primitive_4_2.geometry} material={materials.issesa_with_Tex} />
        <mesh geometry={nodes.primitive_5_2.geometry} material={materials.issrad_with_Tex} />
        <mesh geometry={nodes.primitive_6_2.geometry} material={materials.nasda_with_Tex} />
        <mesh geometry={nodes.primitive_7_1.geometry} material={materials.issusaf_with_Tex} />
        <mesh geometry={nodes.primitive_8_1.geometry} material={materials.issmb_with_Tex} />
        <mesh geometry={nodes.primitive_9_1.geometry} material={materials.issbso2_with_Tex} />
        <mesh geometry={nodes.primitive_10_1.geometry} material={materials.issbso_with_Tex} />
        <mesh geometry={nodes.primitive_11_1.geometry} material={materials.issku2_with_Tex} />
        <mesh geometry={nodes.primitive_12_1.geometry} material={materials.issdish_with_Tex} />
        <mesh geometry={nodes.primitive_13.geometry} material={materials.issku1_with_Tex} />
        <mesh geometry={nodes.primitive_14.geometry} material={materials.issku_with_Tex} />
        <mesh geometry={nodes.primitive_15.geometry} material={materials.issb4_with_Tex} />
        <mesh geometry={nodes.primitive_16.geometry} material={materials.isssolar_with_Te} />
        <mesh geometry={nodes.primitive_17.geometry} material={materials.Material} />
        <mesh geometry={nodes.primitive_18.geometry} material={materials.primitive_18} />
        <mesh geometry={nodes.primitive_0_3.geometry} material={materials.issb2_with_Tex} />
        <mesh geometry={nodes.primitive_1_3.geometry} material={materials.isszmod_with_Tex} />
        <mesh geometry={nodes.primitive_2_3.geometry} material={materials.issb3_with_Tex} />
        <mesh geometry={nodes.primitive_3_3.geometry} material={materials.issdot_with_Tex} />
        <mesh geometry={nodes.primitive_4_3.geometry} material={materials.issp2_with_Tex} />
        <mesh geometry={nodes.primitive_5_3.geometry} material={materials.issb_with_Tex__I} />
        <mesh geometry={nodes.primitive_6_3.geometry} material={materials.isspanel_with_Te} />
        <mesh geometry={nodes.primitive_7_2.geometry} material={materials.d_ring_with_Tex} />
        <mesh geometry={nodes.primitive_8_2.geometry} material={materials.iss_dcs_with_Tex} />
        <mesh geometry={nodes.primitive_9_2.geometry} material={materials.iss_dc_with_Tex} />
      </group>
    </group>
  )
}

useGLTF.preload('/iss-_international_space_station.glb')
