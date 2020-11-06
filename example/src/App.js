import React from 'react';
import './App.css';

import { ButtonGroup } from '@ramonak/react-button-group';
import '@ramonak/react-button-group/dist/index.css';

const App = () => {
  return (
    <div className='wrapper'>
      <ButtonGroup
        buttons={['One', 'Two', 'Three', 'Four']}
        // orientation='vertical'
        
      />
    </div>
  );
};

export default App;
