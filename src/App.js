import React from 'react';
import { Button } from 'antd';
import 'App.css';

class Counter1 extends React.Component {
  state = {
    value: this.props.initialValue,
  }

  onClick = () => {
    const { value } = this.state;
    this.setState({ value: value + 1 });
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        {value}
        <Button onClick={this.onClick}>+1</Button>
      </div>
    );
  }

}

class FruitComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>좋아하는 과일</h1>
        <ul>
          {
            this.props.fruits.map((name, index) => (
              <li key={index}> {name} </li>
            ))
          }
        </ul>
      </div>
    )
  }
}


function App() {
  const fruits = ["바나나", "사과", "딸기"];
  return (
    <div>
      <Counter1 initialValue={10} /> {/* 숫자로 표현하고 싶으면 {} 안에서 표기할것 */}
      <FruitComponent fruits={fruits} />
    </div>
  );
}

export default App;
