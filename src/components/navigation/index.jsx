"use client";
import { BtnList } from "@/app/data";
import React from "react";
import NavButton from "./NavButton";

const Navigation = () => {
    const angleIncrement = (2 * Math.PI) / BtnList.length; // Full circle in radians
    const radius = window.innerWidth * 0.2 - 16; // Convert '20vw - 1rem' to pixels

    return (
        <div className="fixed h-screen flex items-center justify-center w-full">
            <div className="relative w-max flex items-center justify-center hover:pause animate-spin-slow group">
                {BtnList.map((btn, index) => {
                    const angleRad = index * angleIncrement;
                    const x = radius * Math.cos(angleRad);
                    const y = radius * Math.sin(angleRad);

                    return <NavButton  key={btn.label} x={x} y={y} {...btn}/>
                        
                    
                })}
            </div>
        </div>
    );
};

export default Navigation;
