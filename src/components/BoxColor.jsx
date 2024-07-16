import React, { useRef, useEffect, useState } from 'react';

const BoxColor = ({ color, currentColor }) => {
  const boxRef = useRef(null);
  const [text, setText] = useState('No soy el color');

  useEffect(() => {
    if (currentColor === color) {
      boxRef.current.style.backgroundColor = color;
      setText('Soy el color');
    } else {
      boxRef.current.style.backgroundColor = 'transparent';
      setText('No soy el color');
    }
  }, [currentColor, color]);

  return (
    <div ref={boxRef} className={`box ${color}`}>
      {currentColor}
      <p>{text}</p>
    </div>
  );
};

export default BoxColor;
