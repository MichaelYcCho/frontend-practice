import React, { useState } from 'react';
import './App.css';

function App() {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementeItem = () => setItem(item - 1);
  return (
    <div className="App">
      {item}
      <button onClick={incrementItem}>Increment</button>
      <button onClick={decrementeItem}>Decrement</button>
    </div>
  );
}


// 같은내용의 Class Component
class PMComponent extends React.Component {
  state = {
    item: 1
  }
  render() {
    const { item } = this.state;
    return (
      <div className="App">
        {item}
        <button onClick={this.incrementItem}>Increment</button>
        <button onClick={this.decrementeItem}>Decrement</button>
      </div>
    );

  }
  incrementItem = () => {
    this.setState(prevSt => {
      return {
        item: prevSt.item + 1
      };
    });

  };
  decrementeItem = () => {
    this.setState(prevSt => {
      return {
        item: prevSt.item - 1
      };
    });

  };

}


export default App;
