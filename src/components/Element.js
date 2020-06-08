import React from 'react';

const Element = ({ value, green, red }) => {
  return (
    <div className={
      `border border-gray-500 rounded-lg mx-1 p-6
      ${green && 'border-green-400 text-green-400'}
      ${red && 'border-red-500 text-red-500'}
    `}>
      {value}
    </div>
  );
};

export default Element;
