import React, { useState } from 'react';
import '../tailwind.generated.css';

import AlgorithmSelector from './AlgorithmSelector';

const App = () => {
  const [sortInput, setSortInput] = useState('');
  const [selected, setSelected] = useState('bubble');

  const handleSortInput = (e) => {
    setSortInput(e.target.value);
  };

  return (
    <div className="App">
      <div className='container mx-auto text-center'>
        <h1 className='font-mono text-3xl mt-16 mb-8'>Sort Visualizer</h1>

        <AlgorithmSelector active={selected} select={setSelected} />

        <div
          className='border border-gray-400 h-8 w-3/4 rounded-full mx-auto my-8 px-4'
        >
          <input
            type='text'
            onChange={handleSortInput}
            className='h-full w-full text-center'
          />
        </div>
      </div>
    </div>
  );
};

export default App;
