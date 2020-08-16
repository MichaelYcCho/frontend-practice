import React from 'react';
import PropTypes from 'prop-types';
import Counter from "Counter";
import 'App.css';





class App extends React.Component {
  state = { myquery: "", language: "" }

  onChange = (e) => {
    const { name, value } = e.target;
    console.log("changed value : ", value, this);
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <>
        <Counter onClick={() => { console.log("clicked") }} />
        <input name="myquery" onChange={this.onChange} />
        <input name="language" onChange={this.onChange} />
        {JSON.stringify(this.state)}
      </>
    );
  }
}

export default App;
