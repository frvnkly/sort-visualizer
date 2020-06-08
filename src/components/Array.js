import React from 'react';

import Element from './Element';

const Array = ({ elements, green, red }) => {
  if (!elements || elements.length === 0) return null;

  const greenIndices = green || [];
  const redIndices = red || [];

  return (
    <div className='flex justify-center mx-4 my-6'>
      {elements.map((e, i) => {
        return (
          <Element
            key={e}
            value={e}
            green={greenIndices.includes(i)}
            red={redIndices.includes(i)}
          />
        );
      })}
    </div>
  );
};

export default Array;
