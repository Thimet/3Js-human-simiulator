/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 public/models/64c24c000a4ad5e1bbb9cf9a.glb -0 src/components/Avatar.jsx -r public
*/

import React, { useEffect, useMemo, useRef } from 'react'
import { useAnimations, useFBX, useGLTF } from '@react-three/drei'
import { useControls } from 'leva'
// import { useFrame, useLoader } from '@react-three/fiber';
// import * as THREE from 'three'

export function Avatar(props) {

  const { playAudio, script } = useControls({
    playAudio: false,
    script: {
      value: "Welcome",
      options: ["Welcome", "Laughing"],
    },

  });

  const audio = useMemo(() => new Audio(`/audios/${script}.mp3`), [script])
  // const jsonFile=useLoader(THREE.FileLoader,`/audios/${script}.json`)
  // const lipSync=JSON.parse(jsonFile)

  // useFrame(()=>{
  //   const currentTime=audio.currentTime;
  //   for(let i=0;i<lipSync.mouthCues.length;i++){
  //     const mouthCue=lipSync.mouthCues[i];
  //     if(currentTime>=mouthCue.start && currentTime<=mouthCue.end){
  //       console.log(mouthCue.value)
  //     }
  //   }
  // })

  useEffect(() => {
    if (playAudio) {
      audio.play()
    }
    else {
      audio.pause()
    }
  }, [playAudio, script])

  const { nodes, materials } = useGLTF('models/64c24c000a4ad5e1bbb9cf9a.glb')
  const { animations: SaluteAnimation } = useFBX('animations/Salute.fbx')
  const { animations: LaughingAnimation } = useFBX('animations/Laughing.fbx')

  SaluteAnimation[0].name = "Salute"
  LaughingAnimation[0].name = "Laughing"

  const [animation, setAnimation] = React.useState("Laughing")
  const group = useRef()
  const { actions } = useAnimations([SaluteAnimation[0], LaughingAnimation[0]], group)

  useEffect(() => {
    console.log(nodes.Wolf3D_Head.morphTargetDictionary)
    nodes.Wolf3D_Head.morphTargetInfluences[nodes.Wolf3D_Head.morphTargetDictionary["MouthSmile"]] = 1
  }, [actions])

  useEffect(() => {
    actions[animation].reset().fadeIn(0.5).play()
    return () => actions[animation].fadeOut(0.5)
  }, [animation])


  return (
    <group {...props} dispose={null} ref={group}>
      <primitive object={nodes.Hips} />
      <skinnedMesh geometry={nodes.Wolf3D_Body.geometry} material={materials.Wolf3D_Body} skeleton={nodes.Wolf3D_Body.skeleton} />
      <skinnedMesh geometry={nodes.Wolf3D_Outfit_Bottom.geometry} material={materials.Wolf3D_Outfit_Bottom} skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton} />
      <skinnedMesh geometry={nodes.Wolf3D_Outfit_Footwear.geometry} material={materials.Wolf3D_Outfit_Footwear} skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton} />
      <skinnedMesh geometry={nodes.Wolf3D_Outfit_Top.geometry} material={materials.Wolf3D_Outfit_Top} skeleton={nodes.Wolf3D_Outfit_Top.skeleton} />
      <skinnedMesh geometry={nodes.Wolf3D_Hair.geometry} material={materials.Wolf3D_Hair} skeleton={nodes.Wolf3D_Hair.skeleton} />
      <skinnedMesh name="EyeLeft" geometry={nodes.EyeLeft.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeLeft.skeleton} morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary} morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences} />
      <skinnedMesh name="EyeRight" geometry={nodes.EyeRight.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeRight.skeleton} morphTargetDictionary={nodes.EyeRight.morphTargetDictionary} morphTargetInfluences={nodes.EyeRight.morphTargetInfluences} />
      <skinnedMesh name="Wolf3D_Head" geometry={nodes.Wolf3D_Head.geometry} material={materials.Wolf3D_Skin} skeleton={nodes.Wolf3D_Head.skeleton} morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences} />
      <skinnedMesh name="Wolf3D_Teeth" geometry={nodes.Wolf3D_Teeth.geometry} material={materials.Wolf3D_Teeth} skeleton={nodes.Wolf3D_Teeth.skeleton} morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences} />
    </group>
  )
}

useGLTF.preload('models/64c24c000a4ad5e1bbb9cf9a.glb')
