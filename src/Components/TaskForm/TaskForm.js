import React, { useState } from 'react';

// Définition du composant TaskForm 
function TaskForm({ addTask }) {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(task);
        setTask('');
    };

    return (
        <form data-cy="task-form" onSubmit={handleSubmit}>
            <input data-cy="task-input" type="text" value={task} onChange={(e) => setTask(e.target.value)} />
            <button data-cy="add-task-btn" type="submit">Add Task</button>
        </form>
    );
}

export default TaskForm;
