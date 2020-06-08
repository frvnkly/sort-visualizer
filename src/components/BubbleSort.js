import React from 'react';

import Array from './Array';

const BubbleSort = ({ array }) => {
  const renderBubbleSortSteps = () => {    
    const steps = [];
    const arrayCopy = array.slice();
    while (true) {
      let sorted = true;
      for (let i = 0; i < arrayCopy.length - 1; i++) {
        if (arrayCopy[i] > arrayCopy[i+1]) {
          sorted = false;
          [arrayCopy[i], arrayCopy[i+1]] = [arrayCopy[i+1], arrayCopy[i]];
          steps.push(
            <div className='flex justify-center'>
              <Array elements={arrayCopy.slice()} green={[i]} red={[i+1]} />
            </div>
          );
        } else {
          steps.push(
            <div className='flex justify-center'>
              <Array elements={arrayCopy.slice()} green={[i]} />
            </div>
          );
        }
      }
      if (sorted) break;
    };
    return steps;
  };

  const bubbleSortSteps = renderBubbleSortSteps();

  return (
    <div>
      {bubbleSortSteps}
    </div>
  );
};

export default BubbleSort;
