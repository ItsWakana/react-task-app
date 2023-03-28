import React from 'react';
import EditText from './EditText';

// const Overview = (props) => {
//     const { tasks } = props;

//     const [isEditing, setIsEditing] = useState(false);

//     const handleEdit = (e) => {
//         e.preventDefault();
//         setIsEditing(true);

//     }
//     return (
//         <ul className="task-container">
//             {tasks.map(task => (
//                 <li className="task" key={task.id}>
//                     <div className="task__name">
//                         <p><b>Task Name:</b></p> 
//                         <p>{task.name}</p>
//                     </div>
//                     <div className="task__id">
//                         <b>ID:</b> {task.id}
//                     </div>

//                     <button onClick={handleEdit}>Edit Task</button>
//                     {isEditing && <EditText />}
//                 </li>
//             ))}
//         </ul>
//     )
// }

class Overview extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            isEditing: false,
        }

        this.handleEdit = this.handleEdit.bind(this)

    }
    // const { tasks } = props;

    // const [isEditing, setIsEditing] = useState(false);

    handleEdit(e) {
        e.preventDefault();
        this.setState({
            isEditing: !this.state.isEditing,
        });

    }

    render() {

        const { tasks, onTaskEdit } = this.props;
        const { isEditing } = this.state;
        return (
            <ul className="task-container">
                {tasks.map(task => (
                    <li className="task" key={task.id}>
                        <div className="task__name">
                            <p><b>Task Name:</b></p> 
                            <p>{task.name}</p>
                        </div>
                        <div className="task__id">
                            <b>ID:</b> {task.id}
                        </div>
                        {!isEditing &&                         <button onClick={this.handleEdit}>Edit Task</button>}
                        {isEditing && <EditText onTaskEdit={onTaskEdit} />}
                    </li>
                ))}
            </ul>
        )
    }
}
export default Overview;
