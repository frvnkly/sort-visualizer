import React from 'react';

import Array from './Array';

const InsertionSort = ({ array }) => {
  const renderInsertionSortSteps = () => {
    const steps = [];
    const arrayCopy = array.slice();
    for (let i = 1; i < arrayCopy.length; i++) {
      if (arrayCopy[i] < arrayCopy[i-1]) {
        let a = i;
        let b = i - 1;
        const red = [];
        while (a > 0 && arrayCopy[a] < arrayCopy[b]) {
          [arrayCopy[a], arrayCopy[b]] = [arrayCopy[b], arrayCopy[a]];
          red.push(a);
          a--;
          b--;
        }
        const green = [a];
        steps.push(
          <div className='flex justify-center'>
            <Array elements={arrayCopy.slice()} green={green} red={red} />
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
    return steps;
  };

  const insertionSortSteps = renderInsertionSortSteps();

  return (
    <div>
      {insertionSortSteps}
    </div>
  );
};

export default InsertionSort;
