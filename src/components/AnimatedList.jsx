import React, { useState, useEffect } from 'react';
import './AnimatedList.css';

const AnimatedList = () => {
  const [checkedItems, setCheckedItems] = useState([false, false, false, false, false]);
  const [animationState, setAnimationState] = useState([false, false, false, false, false]);

  useEffect(() => {
    const timers = [];
    for (let i = 0; i < 5; i++) {
      timers.push(
        setTimeout(() => {
          setAnimationState((prev) => {
            const newState = [...prev];
            newState[i] = true;
            return newState;
          });
          
          setTimeout(() => {
            setCheckedItems((prev) => {
              const newChecked = [...prev];
              newChecked[i] = true;
              return newChecked;
            });
          }, 1000); // Delay ticking the checkbox by 1 second
        }, i * 1500) // Delay the fall of each item by 1.5 seconds
      );
    }

    return () => timers.forEach((timer) => clearTimeout(timer)); // Cleanup timers
  }, []);

  return (
    <div className="animated-list-container">
      <ul className="animated-list">
        {['Kopf-, Rücken- und Kreuzschmerzen', 
          'Menstruations- und Wechseljahresbeschwerden', 
          'Muskelverspannungen', 
          'Gelenkschmerzen', 
          'Schlafstörungen'].map((item, index) => (
          <li 
            key={index} 
            className={`list-item ${animationState[index] ? 'fall' : ''}`}
          >
            <input 
              type="checkbox" 
              checked={checkedItems[index]} 
              readOnly 
              className="checkbox" 
            />
            <span className="item-text">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnimatedList;
