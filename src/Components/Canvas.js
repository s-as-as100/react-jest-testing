import React, { useEffect, useRef } from 'react';

const CanvasComponent = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Draw a simple rectangle
    context.fillStyle = 'skyblue';
    context.fillRect(20, 20, 150, 100);

    // Draw a line
    context.beginPath();
    context.moveTo(200, 50);
    context.lineTo(200, 100);
    context.strokeStyle = 'red';
    context.stroke();

    // Draw a circle
    context.beginPath();
    context.arc(350, 70, 50, 0, 2 * Math.PI);
    context.stroke();

    // Draw text
    context.font = '30px Arial';
    context.fillStyle = 'black';
    context.fillText('Hello Canvas', 50, 200);
  }, []);

  return <canvas ref={canvasRef} width={500} height={300} />;
};

export default CanvasComponent;