import React, { useEffect, useState } from 'react';
import './progress.css';

const Progress = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => Math.min(prev + 1, 100)); 
    }, 1000);
    return () => clearInterval(interval); 
  }, []); 

  return (
    <div>
      <h1>Progress Bar</h1>
      <div className="container">
        {value}%
      </div>
    </div>
  );
};

export default Progress;
