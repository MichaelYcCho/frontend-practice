import React from 'react';
import './App.css';
import { Nav } from './components/nav';
import { Body } from './components/body';

import { RecoilRoot } from 'recoil';


function App() {
  return (
    <RecoilRoot>
      <Nav />
      <Body />
    </RecoilRoot>
  );
}








export default App;