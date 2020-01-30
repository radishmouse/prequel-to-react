// #1 You need to import React
import React from 'react';
// const React = require('react');
import logo from './logo.svg';
import './App.css';

import Greet from './Greet';

// #2 You always define a function (or a class)
function App() {
  return (
    <div>
      <h1>Hello, React</h1>
      <Greet whom="Alice" />
      <Greet whom="Bob" />
      <Greet whom="Cthulu" />
    </div>
  );
}

// #3 You always export that function (or class)
export default App;
// module.exports = App;
