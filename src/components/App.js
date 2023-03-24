import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    }
  }

  render() {
    return (
      <div>
        <input type="search" placeholder='Enter Task'></input>
        <button type='submit'>Submit Task</button>
      </div>
    )
  }
}

export default App;
