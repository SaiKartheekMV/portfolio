import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import './Cursor.css';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [speed, setSpeed] = useState(0);
  const [lastTime, setLastTime] = useState(0);

  // Update cursor position and calculate speed
  useEffect(() => {
    const handleMouseMove = (event) => {
      const currentTime = performance.now();
      const deltaTime = currentTime - lastTime;

      const distance = Math.sqrt(
        Math.pow(event.clientX - position.x, 2) +
        Math.pow(event.clientY - position.y, 2)
      );

      setSpeed(distance / deltaTime || 0);
      setPosition({ x: event.clientX, y: event.clientY });
      setLastTime(currentTime);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [position, lastTime]);

  // Calculate dynamic cursor color based on speed
  const getColorBySpeed = () => {
    if (speed < 0.5) return "rgba(255, 255, 0, 0.8)"; // Yellow glow
    if (speed < 1.5) return "rgba(0, 255, 255, 0.8)"; // Cyan
    return "rgba(255, 0, 255, 0.8)"; // Magenta
  };

  return (
    <motion.div
      className="custom-cursor"
      animate={{
        x: position.x, // Exact position of the cursor
        y: position.y,
        backgroundColor: getColorBySpeed(),
      }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      style={{
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        position: "fixed",
        pointerEvents: "none",
        zIndex: 9999,
        boxShadow: `0 0 20px ${getColorBySpeed()}`,
        transform: "translate(-50%, -50%)", // Center the cursor effect
      }}
    ></motion.div>
  );
};

export default Cursor;
