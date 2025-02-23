import React, { useState, useEffect, useRef } from 'react';
import './AnimatedList.css';

const AnimatedList = ({ title, items }) => {
  const [checkedItems, setCheckedItems] = useState(new Array(items.length).fill(false));
  const [animationState, setAnimationState] = useState(new Array(items.length).fill(false));
  const listRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation when visible
          observer.disconnect(); // Stop observing once triggered
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the list is visible
    );

    if (listRef.current) {
      observer.observe(listRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timers = [];
      items.forEach((_, i) => {
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
      });

      return () => timers.forEach((timer) => clearTimeout(timer)); // Cleanup timers
    }
  }, [isVisible, items]);

  return (
    <div className="animated-list-container" ref={listRef}>
      <h3>{title}</h3>
      <ul className="animated-list">
        {items.map((item, index) => (
          <li key={index} className={`list-item ${animationState[index] ? 'fall' : ''}`}>
            <input type="checkbox" checked={checkedItems[index]} readOnly className="checkbox" />
            <span className="item-text">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnimatedList;
