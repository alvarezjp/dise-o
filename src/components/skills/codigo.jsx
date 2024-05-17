import React, { useState, useRef } from 'react';
import './YourStyles.css'; // Asegúrate de importar tus estilos CSS

const DragContainer = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const containerRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartPosition(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const translateX = currentTranslate + (e.clientX - startPosition);
      containerRef.current.style.transform = `translateX(${translateX}px)`;
    }
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      setCurrentTranslate(currentTranslate + (startPosition - containerRef.current.getBoundingClientRect().left));
    }
  };

  return (
    <div
      className="contain"
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Aquí van tus elementos dentro del contenedor */}
    </div>
  );
};

export default DragContainer;
