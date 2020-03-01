import React from 'react';
import './StarsDisplay.css';
import utils from '../../util/util';

const StarsDisplay = (props) => {
  return (
    <div>
      {utils.range(1, props.count).map(starId => (           
            <div key={starId} className='star' />
          ))}

      
    </div>
  );
};

export default StarsDisplay;
