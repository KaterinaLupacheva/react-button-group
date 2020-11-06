import React from 'react';
import './App.css';

import { ButtonGroup } from '@ramonak/react-button-group';
import '@ramonak/react-button-group/dist/index.css';

const App = () => {
  const handleClick = (e) => {
    console.log(e.target.name);
  };
  return (
    <div className='wrapper'>
      <ButtonGroup
        buttons={['One', 'Two', 'Three', 'Four']}
        onButtonClick={handleClick}
      />
    </div>
  );
};

export default App;
