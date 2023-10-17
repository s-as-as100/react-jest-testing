import React, { useRef, useEffect, useState } from "react";

const DrawingTool = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [context, setContext] = useState(null);
  const [brushColor, setBrushColor] = useState("#000000");
  const [brushSize, setBrushSize] = useState(5);
  const [img, setImg] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    setContext(ctx);
    canvas.width = window.innerWidth * 0.6;
    canvas.height = 400;
    ctx.lineCap = "round";
    ctx.strokeStyle = brushColor;
    ctx.lineWidth = brushSize;
  }, []);

  const startDrawing = (e) => {
    setIsDrawing(true);
    const { offsetX, offsetY } = e.nativeEvent;
    context.beginPath();
    context.moveTo(offsetX, offsetY);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = e.nativeEvent;
    context.lineTo(offsetX, offsetY);
    context.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const handleBrushColorChange = (e) => {
    setBrushColor(e.target.value);
    context.strokeStyle = e.target.value;
  };

  const handleBrushSizeChange = (e) => {
    setBrushSize(e.target.value);
    context.lineWidth = e.target.value;
  };
  
  const handleUpload = (dataUrl) => {
    const img = new Image();
    img.onload = () => {
      context.drawImage(
        img,
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );
    };
    img.src = dataUrl;
    setImg(img);
  };

  const handleImage = (e) => {
     const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      handleUpload(event.target.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
   
  };

  const resetCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setImg(null);
  }

  return (
    <div>
      <canvas
        ref={canvasRef}
        style={{ border: "1px solid black" }}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseOut={stopDrawing}
       />
      <div style={{ marginTop: "10px" }}>
        <button onClick={resetCanvas}>cancel</button>
        <label htmlFor="brushColor">Brush Color: </label>
        <input
          type="color"
          id="brushColor"
          value={brushColor}
          onChange={handleBrushColorChange}
        />
        <label htmlFor="brushSize">Brush Size: </label>
        <input
          type="range"
          id="brushSize"
          min="1"
          max="20"
          value={brushSize}
          onChange={handleBrushSizeChange}
        />
        <input
          type="file"
          accept=".png,.jpeg,.jpg"
          id="uploadFile"
          onChange={(e) => handleImage(e)}
          onClick={(e) => {
            e.target.value = null;
          }}
        />
      </div>
    </div>
  );
};

export default DrawingTool;
