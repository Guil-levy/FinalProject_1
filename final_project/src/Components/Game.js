import React, { useState, useEffect } from "react";

const Game = () => {
  const [characterPosition, setCharacterPosition] = useState({ x: 50, y: 50 });
  const [movingBoxPosition, setMovingBoxPosition] = useState({
    x: Math.random() * 400,
    y: Math.random() * 400,
  });
  const [boxVelocity, setBoxVelocity] = useState({ x: 2, y: 2 });
  const [score, setScore] = useState(0);

  const containerStyle = {
    position: "relative",
    width: "500px",
    height: "500px",
    border: "1px solid black",
    overflow: "hidden", // Limit motion to the container
  };

  const characterStyle = {
    position: "absolute",
    top: `${characterPosition.y}px`,
    left: `${characterPosition.x}px`,
    width: "50px",
    height: "50px",
    backgroundColor: "blue",
  };

  const movingBoxStyle = {
    position: "absolute",
    top: `${movingBoxPosition.y}px`,
    left: `${movingBoxPosition.x}px`,
    width: "50px",
    height: "50px",
    backgroundColor: "red",
  };

  const handleKeyPress = (e) => {
    const speed = 5;

    switch (e.key) {
      case "w":
        setCharacterPosition((prev) => ({ ...prev, y: Math.max(prev.y - speed, 0) }));
        break;
      case "a":
        setCharacterPosition((prev) => ({ ...prev, x: Math.max(prev.x - speed, 0) }));
        break;
      case "s":
        setCharacterPosition((prev) => ({ ...prev, y: Math.min(prev.y + speed, 450) }));
        break;
      case "d":
        setCharacterPosition((prev) => ({ ...prev, x: Math.min(prev.x + speed, 450) }));
        break;
      default:
        break;
    }
  };

  const updateMovingBox = () => {
    setMovingBoxPosition((prev) => {
      let newX = prev.x + boxVelocity.x;
      let newY = prev.y + boxVelocity.y;

      // Bounce off the walls
      if (newX < 0 || newX > 450) {
        setBoxVelocity((prev) => ({ ...prev, x: -prev.x }));
        newX = Math.max(0, Math.min(newX, 450));
      }

      if (newY < 0 || newY > 450) {
        setBoxVelocity((prev) => ({ ...prev, y: -prev.y }));
        newY = Math.max(0, Math.min(newY, 450));
      }

      return { x: newX, y: newY };
    });
  };

  const checkCollisions = () => {
    // Check collision with the moving box
    const distance = Math.sqrt(
      Math.pow(characterPosition.x - movingBoxPosition.x, 2) + Math.pow(characterPosition.y - movingBoxPosition.y, 2)
    );

    if (distance < 50) {
      // Collision detected, deduct a point
      setScore((prev) => prev - 1);

      // Change the direction of the moving box upon collision
      setBoxVelocity({
        x: Math.random() * 4 - 2,
        y: Math.random() * 4 - 2,
      });
    }
  };

  useEffect(() => {
    const animationFrameId = requestAnimationFrame(() => {
      updateMovingBox();
      checkCollisions();
    });

    return () => cancelAnimationFrame(animationFrameId);
  }, [characterPosition, movingBoxPosition]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBoxVelocity({
        x: Math.random() * 4 - 2,
        y: Math.random() * 4 - 2,
      });
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div>
      <p>Score: {score}</p>
      <div style={containerStyle}>
        <div style={characterStyle}>Character</div>
        <div style={movingBoxStyle}>Moving Box</div>
      </div>
    </div>
  );
};

export default Game;