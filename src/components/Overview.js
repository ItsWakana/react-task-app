import React from 'react';
import { useState } from 'react';
import EditText from './EditText';

const Overview = (props) => {
    const { tasks } = props;

    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = (e) => {
        e.preventDefault();
        setIsEditing(true);

    }
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

                    <button onClick={handleEdit}>Edit Task</button>
                    {isEditing && <EditText />}
                </li>
            ))}
        </ul>
    )
}

export default Overview;