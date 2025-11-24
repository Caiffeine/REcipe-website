import React from 'react';
import './card.css';

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  glass = false,
  ...props 
}) => {
  return (
    <div 
      className={`
        card 
        ${hover ? 'card--hover' : ''} 
        ${glass ? 'card--glass' : ''} 
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
