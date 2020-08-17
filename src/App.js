import React from 'react';
import PropTypes from 'prop-types';
import Counter from "Counter";
import 'App.css';





class App extends React.Component {
  render() {
    return (
      <div>
        <Counter />
        <Counter color="green" />
        <Counter color="blue" />
      </div>
    );
  }
}

export default App;
