"use client"
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import React , { Suspense} from "react";
import Avatar from "./Avatar";


const RModel = ({className}) => {
    return (
        <Canvas
        camera={{position:[0,1,4]}}
        className={clsx("w-screen h-screen mt-48",className)}
        >
            <Suspense fallback={null}>
                
                <Avatar/>
            </Suspense>
            <Environment preset="forest" />
        </Canvas>
    )
}
export default RModel