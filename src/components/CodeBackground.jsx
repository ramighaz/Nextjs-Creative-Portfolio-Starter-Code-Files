"use client"
import React, { useEffect, useRef } from "react";

const CodeBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const fontSize = 18;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(0);

    const draw = () => {
      // Clear the canvas with subtle transparency (faint background effect)
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"; // 5% opacity for clearing the canvas
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      drops.forEach((y, index) => {
        const text = letters[Math.floor(Math.random() * letters.length)];

        // Falling text with lower opacity for more transparency effect
        ctx.fillStyle = Math.random() > 0.5 
          ? "rgba(0, 255, 255, 0.4)"  // Neon blue with 40% opacity
          : "rgba(255, 0, 0, 0.4)";   // Neon red with 40% opacity

        ctx.fillText(text, index * fontSize, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[index] = 0;
        }
        drops[index]++;
      });
    };

    const interval = setInterval(draw, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none", // Ensure it doesn't block interactions
        backgroundColor: "transparent", // Canvas background is transparent
      }}
    ></canvas>
  );
};

export default CodeBackground;
