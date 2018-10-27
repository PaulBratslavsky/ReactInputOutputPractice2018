import React, { Component } from 'react';
import './App.css';
import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput';

class App extends Component {

  state = {
    input: '',
    output: 'This is where the oputput should show'
  }

  onClickHandle = () => {
    console.log('button was clicked');
    this.setState({
      output: this.state.input,
      input: ''
    });
  }

  
  onChangeInput = (e) => {
    console.log('on changed fires');
    this.setState({
        input: e.target.value
      })
  }

  render() {
    return (
      <div className="App">
        <div className="App-view">
          <h1>User Input & Output</h1>
          <UserInput 
              output={this.state.input}
              onClickHandle={this.onClickHandle}  
              onChangeInput={this.onChangeInput}
            />
          <UserOutput 
              output={this.state.output}
          />
        </div>  
      </div>
    );
  }
}

export default App;
