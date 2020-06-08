import React from 'react';

import Array from './Array';

const MergeSort = ({ array }) => {
  const renderMergeSortSteps = () => {
    const steps = [];

    // divide array into subarrays
    const arrayCopy = array.slice();
    let slices = [[0, arrayCopy.length]];
    let divided = false;
    while (!divided) {
      divided = true;
      const step = [];
      const nextSlices = [];
      for (const slice of slices) {
        const mid = Math.ceil((slice[0] + slice[1]) / 2);
        const a = [slice[0], mid];
        const b = [mid, slice[1]];

        if (a[1] - a[0] > 1 || b[1] - b[0] > 1) divided = false;

        if (a[1] - a[0] > 0) {
          step.push(<Array elements={arrayCopy.slice(a[0] , a[1])} />);
          nextSlices.push(a);
        }
        if (b[1] - b[0] > 0) {
          step.push(<Array elements={arrayCopy.slice(b[0] , b[1])} />);
          nextSlices.push(b);
        }          
      }
      steps.push(<div className='flex justify-center'>{step}</div>);
      slices = nextSlices;
    }

    // merge subarrays
    while (slices.length > 1) {
      const step = [];
      const nextSlices = [];
      for (let i = 0; i < slices.length; i += 2) {        
        if (slices.length - i < 2) {
          const slice = slices[i];
          step.push(<Array elements={arrayCopy.slice(slice[0], slice[1])} />);
          nextSlices.push(slice);
        } else {
          const a = slices[i];
          const b = slices[i+1];
          const merged = [];
          let x = a[0];
          let y = b[0];
          while (x < a[1] && y < b[1]) {
            if (arrayCopy[x] <= arrayCopy[y]) {
              merged.push(arrayCopy[x]);
              x++;
            } else {
              merged.push(arrayCopy[y]);
              y++;
            }
          }
          while (x < a[1]) {
            merged.push(arrayCopy[x]);
            x++;
          }
          while (y < b[1]) {
            merged.push(arrayCopy[y]);
            y++;
          }

          let z = 0;
          while (a[0] + z < b[1]) {
            arrayCopy[a[0] + z] = merged[z];
            z++;
          }

          step.push(<Array elements={merged} />);
          nextSlices.push([a[0], b[1]]);
        }
      }
      steps.push(<div className='flex justify-center'>{step}</div>);
      slices = nextSlices;
    }

    return steps;
  };

  const mergeSortSteps = renderMergeSortSteps();

  return (
    <div>
      {mergeSortSteps}
    </div>
  );
};

export default MergeSort;
