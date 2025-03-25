"use client"; // Ensure this is at the top to enable client-side rendering

import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import React, { Suspense } from "react";
import Avatar from "./Avatar";

const Duck = ({ className }) => {
  return (
    <Canvas
      camera={{ position: [0, 1, 5] }}
      className={clsx("w-screen h-screen mt-48", className)}
    >
      <Suspense fallback={null}>
        <Avatar />
      </Suspense>
      <Environment preset="forest" />
    </Canvas>
  );
};

export default Duck;
