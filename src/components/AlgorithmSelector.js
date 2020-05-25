import React from 'react';

import './AlgorithmSelector.css';

const AlgorithmSelector = ({ active, select }) => {
  const methods = {
    bubble: {
      name: 'Bubble Sort',
      description: 'Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.',
      source: 'Wikipedia',
    },
    insertion: {
      name: 'Insertion Sort',
      description: 'Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time.',
      source: 'Wikipedia',
    },
    merge: {
      name: 'Merge Sort',
      description: 'Merge Sort is a Divide and Conquer algorithm. It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves.',
      source: 'GeeksforGeeks',
    },
  };

  return (
    <div>
      <div className='flex flex-col md:flex-row justify-center items-center mb-4'>
        {Object.keys(methods).map((k) => {
          const method = methods[k];
          return <div
            key={k}
            className={`
              w-40 border font-mono m-1 cursor-pointer
              ${k === active
                ? 'border-blue-500 text-blue-500'
                : 'border-black'}
            `}
            onClick={() => { select(k) }}
          >
            <p>{method.name}</p>
          </div>
        })}
      </div>
      
      <div className='w-3/4 mx-auto h-48 md:h-24'>
        <p>{methods[active].description}</p>
        <br />
        <p className='italic'>{methods[active].source}</p>
      </div>
    </div>
  );
};

export default AlgorithmSelector;
