import React, { Component } from 'react';
import Overview from './Overview';
import uniqid from 'uniqid';
import styles from '../style.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 1,
      tasks: [],
      inputValue: ''
    }

    this.addTask = this.addTask.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleTaskEdit = this.handleTaskEdit.bind(this);
    this.handleEditingState = this.handleEditingState.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value,
    })
  }

  handleEditingState(e, index) {
    e.preventDefault();
    this.setState(prevState => {
      const tasksCopy = [...prevState.tasks];
      tasksCopy[index].isEditing = true;

      return { tasks: tasksCopy }
    })
  }

  handleTaskEdit(newTaskName, index) {
    this.setState(prevState => {
      const tasksCopy = [...prevState.tasks];
      tasksCopy[index].name = newTaskName;
      tasksCopy[index].isEditing = false;
      return  {tasks: tasksCopy}
    });
  }

  addTask(e) {
    e.preventDefault();
    const task = {
      id: this.state.id, 
      name: this.state.inputValue,
      isEditing: false
    };

    this.setState({
      id: this.state.id + 1,
      tasks: [...this.state.tasks, task]
    })
  }

  render() {
    return (
      <form>
        <div>
          <input type="text" onChange={this.handleInputChange}></input>
          <button type='submit' onClick={this.addTask}>Submit Task</button>
          <Overview tasks={this.state.tasks} onTaskEdit={this.handleTaskEdit} onEditPhase={this.handleEditingState}/>
        </div>
      </form>
    )
  }
}

export default App;
