import React from 'react';
import { Button } from 'antd';
import 'App.css';

function App() {
  return (
    <div>
      <button>
        Hello React
      </button>
      <Button type='primary' onClick={() => console.log('clicked')}>
        Hello React
      </Button>
    </div>
  );
}

export default App;
