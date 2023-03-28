import React from 'react';
import EditText from './EditText';

class Overview extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            isEditing: false,
        }

        this.handleEditCompletion = this.handleEditCompletion.bind(this);

    }

    handleEditCompletion() {
        this.setState({
            isEditing: !this.state.isEditing,
        });
    }

    render() {

        const { tasks, onTaskEdit, onEditPhase } = this.props;
        return (
            <ul className="task-container">
                {tasks.map((task, index) => (
                    <li className="task" key={task.id}>
                        <div className="task__name">
                            <p><b>Task Name:</b></p> 
                            <p>{task.name}</p>
                        </div>
                        <div className="task__id">
                            <b>ID:</b> {task.id}
                        </div>
                        {!task.isEditing &&                         <button onClick={(e) => onEditPhase(e,index)}>Edit Task</button>}
                        {task.isEditing && <EditText onTaskEdit={onTaskEdit} taskIndex={index} onEditCompletion={this.handleEditCompletion}/>}
                    </li>
                ))}
            </ul>
        )
    }
}
export default Overview;
