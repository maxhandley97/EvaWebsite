import React, { useState, useEffect, useRef } from 'react';
import './AnimatedListRow.css';

const AnimatedListRow = ({ items }) => {
  const [checkedItems, setCheckedItems] = useState(new Array(items.length).fill(false));
  const [animationState, setAnimationState] = useState(new Array(items.length).fill(false));
  const listRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (listRef.current) observer.observe(listRef.current);

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
            }, 1000);
          }, i * 1200) // slightly faster for row layout
        );
      });

      return () => timers.forEach((t) => clearTimeout(t));
    }
  }, [isVisible, items]);

  return (
    <div className="animated-list-row-container" ref={listRef}>
      <ul className="animated-list-row">
        {items.map((item, index) => (
          <li key={index} className={`list-item-row ${animationState[index] ? 'fall' : ''}`}>
            <input type="checkbox" checked={checkedItems[index]} readOnly className="checkbox-row" />
            <span className="item-text-row">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnimatedListRow;
