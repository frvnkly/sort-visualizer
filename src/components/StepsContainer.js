import React from 'react';

import './StepsContainer.css';

const StepsContainer = ({ show, children }) => {
  if (show)
    return (
      <div className='relative mb-32 overflow-y-hidden'>
        {children}
        <div className='screen' />
      </div>
    );

  return null;
};

export default StepsContainer;
