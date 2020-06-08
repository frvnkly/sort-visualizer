import React, { useState, useEffect } from 'react';
import '../tailwind.generated.css';

import './App.css';
import Array from './Array';
import AlgorithmSelector from './AlgorithmSelector';
import BubbleSort from './BubbleSort';
import InsertionSort from './InsertionSort';
import MergeSort from './MergeSort';
import StepsContainer from './StepsContainer';

const App = () => {
  const [sortInput, setSortInput] = useState('');
  const [elements, setElements] = useState([]);
  const [selected, setSelected] = useState('bubble');
  const [showSteps, setShowSteps] = useState(false);

  const formatInputToArray = (s) => {
    const elements = [];
    const strings = s.trim().split(',');

    strings.forEach((s) => {
      const n = parseFloat(s);
      if (!isNaN(n)) elements.push(n);
    });

    setElements(elements);
  };
  useEffect(() => { formatInputToArray(sortInput) }, [sortInput]);

  useEffect(() => { setShowSteps(false); }, [sortInput, selected]);

  const handleSortInput = (e) => {
    setSortInput(e.target.value);
    // setShowSteps(false);
  };

  let sortingAlgorithm;
  switch (selected) {
    case 'bubble':
    default:
      sortingAlgorithm = <BubbleSort array={elements} />;
      break;
    case 'insertion':
      sortingAlgorithm = <InsertionSort array={elements} />;
      break;
    case 'merge':
      sortingAlgorithm = <MergeSort array={elements} />;
      break;
  }

  return (
    <div className="App">
      <div className='container mx-auto text-center'>
        <h1 className='font-mono text-3xl mt-16 md:mt-56 mb-8'>
          Sort Visualizer
        </h1>

        <AlgorithmSelector active={selected} select={setSelected} />

        <div className='my-8'>
          <p>Enter a list of comma-separated numbers to sort.</p>
          <div
            className={`
              border border-gray-400 h-8 w-3/4 rounded-full mx-auto px-4
            `}
          >
            <input
              type='text'
              onChange={handleSortInput}
              value={sortInput}
              placeholder='e.g. 1,2,3,4,5'
              className='h-full w-full text-center'            
            />
          </div>
        </div>

        <button
          className={`
            sort-button border font-mono w-16 mb-8
            ${elements.length
              ? 'border-black hover:border-blue-500 hover:text-blue-500'
              : 'border-gray-500 text-gray-500 cursor-not-allowed'}
          `}
          disabled={!elements.length}
          onClick={() => { setShowSteps(true) }}
        >
          Sort
        </button>

        {!!elements.length &&
          <Array elements={elements} />}

        <StepsContainer show={showSteps}>
          {sortingAlgorithm}
        </StepsContainer>
      </div>
    </div>
  );
};

export default App;
