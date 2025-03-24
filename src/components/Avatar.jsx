import { useFBX, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useState, useRef, useCallback } from "react";
import * as THREE from "three";
import { SkeletonUtils } from "three-stdlib";

export default function Avatar(props) {
  const { scene } = useGLTF("/models/rami.glb");
  const [clonedScene, setClonedScene] = useState(null);
  const mixer = useRef(null);
  const { camera } = useThree();

  const dyingAnim = useFBX("/animations/Dying.fbx");
  const greetingAnim = useFBX("/animations/Greeting.fbx");
  const [isDyingFinished, setIsDyingFinished] = useState(false);
  const [isGreetingPlayed, setIsGreetingPlayed] = useState(false);

  useEffect(() => {
    if (!scene) return;

    const clone = SkeletonUtils.clone(scene);
    setClonedScene(clone);
    mixer.current = new THREE.AnimationMixer(clone);
    
    // Debugging: Log all mesh names to check for head
    console.log("Scene Loaded:", clone.children);
    clone.traverse((child) => {
      if (child.isMesh) {
        console.log("Mesh found:", child.name);
      }
    });
  }, [scene]);

  useEffect(() => {
    if (!clonedScene || !dyingAnim.animations.length || !greetingAnim.animations.length) return;

    const dyingAction = mixer.current.clipAction(dyingAnim.animations[0]);
    dyingAction.setLoop(THREE.LoopOnce, 1);
    dyingAction.clampWhenFinished = true;
    dyingAction.play();

    dyingAction.getMixer().addEventListener("finished", (e) => {
      if (e.action === dyingAction) {
        console.log("Dying animation finished. Playing greeting animation.");
        setIsDyingFinished(true);
      }
    });
  }, [clonedScene, dyingAnim, greetingAnim]);

  const playGreetingAnimation = useCallback(() => {
    if (!clonedScene) return;

    const greetingAction = mixer.current.clipAction(greetingAnim.animations[0]);
    greetingAction.reset();
    greetingAction.setLoop(THREE.LoopOnce, 1);
    greetingAction.clampWhenFinished = true;
    greetingAction.play();

    setIsGreetingPlayed(true);
    console.log("Greeting animation started.");
    camera.position.set(0, 1, 3.7); // Reset the camera position
  }, [clonedScene, greetingAnim, mixer, camera]);

  useEffect(() => {
    if (isDyingFinished && !isGreetingPlayed) {
      playGreetingAnimation();
    }
  }, [isDyingFinished, isGreetingPlayed, playGreetingAnimation]);

  const handleClick = () => {
    console.log("Avatar clicked.");
    if (!isGreetingPlayed) {
      console.log("Playing greeting animation from click event.");
      playGreetingAnimation();
    }
    camera.position.set(0, 1, 3);
  };

  useFrame((_, delta) => {
    if (mixer.current) mixer.current.update(delta);
  });

  return clonedScene ? (
    <group {...props} dispose={null}>
      <primitive object={clonedScene} onClick={handleClick} />
    </group>
  ) : null;
}

useGLTF.preload("/models/rami.glb");
