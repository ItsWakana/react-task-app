import React from 'react';

const Overview = (props) => {
    const { tasks } = props;

    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    ID: {task.id}
                    Task: {task.name}
                </li>
            ))}
        </ul>
    )
}

export default Overview;