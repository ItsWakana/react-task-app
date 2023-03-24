import React, { Component } from 'react';
import Overview from './Overview';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      tasks: [{id: 10, name: 'First Task'}],
      inputValue: ''
    }

    this.addTask = this.addTask.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value,
    })
  }

  addTask(e) {
    console.log(e);
    const task = {id: this.state.id, name: this.state.inputValue};

    this.setState({
      id: this.state.id + 1,
      tasks: [...this.state.tasks, task]
    })
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleInputChange}></input>
        <button type='submit' onClick={this.addTask}>Submit Task</button>
        <Overview tasks={this.state.tasks}/>
      </div>
    )
  }
}

export default App;
