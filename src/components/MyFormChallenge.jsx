import React, { useState } from 'react';
import BoxColor from './BoxColor';

const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];

const MyFormChallenge = () => {
  const [inputColor, setInputColor] = useState('');

  const handleChange = (e) => {
    setInputColor(e.target.value.toLowerCase());
  };

  return (
    <div>
      <input type="text" onChange={handleChange} placeholder="Escribe un color" />
      <div className="boxes-container">
        {colors.map((color) => (
          <BoxColor key={color} color={color} currentColor={inputColor} />
        ))}
      </div>
    </div>
  );
};

export default MyFormChallenge;
