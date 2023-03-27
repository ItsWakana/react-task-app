import React from 'react';

const Overview = (props) => {
    const { tasks } = props;

    const handleEdit = (e) => {
        e.preventDefault();
    }
    return (
        <ul class="task-container">
            {tasks.map(task => (
                <li class="task" key={task.id}>
                    <div class="task__name">
                        <p><b>Task Name:</b></p> 
                        <p>{task.name}</p>
                    </div>
                    <div class="task__id">
                        <b>ID:</b> {task.id}
                    </div>

                    <button onClick={handleEdit}>Edit Task</button>
                </li>
            ))}
        </ul>
    )
}

export default Overview;