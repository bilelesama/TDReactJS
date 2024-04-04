import React, { useState, useEffect } from 'react';

function TaskList({ tasks, toggleTask  }) {
// Sauvegarde les tâches dans le localStorage 
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

   // State pour gérer le filtre des tâches
    const [filter, setFilter] = useState('toutes');

    // Filtre les tâches en fonction de l'état actuel du filtre
    const filteredTasks = tasks.filter(task => {
        if (filter === 'toutes') {
            return true;
        } else if (filter === 'complétées') {
            return task.completed;
        } else if (filter === 'non complétées') {
            return !task.completed;
        }
    });
 // Met à jour l'état du filtre 
    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    return (
        <div data-cy="task-list">
            <h1>Task List</h1>

            <button onClick={() => setFilter('toutes')} data-cy="filter-btn-all">Toutes</button>
            <button onClick={() => setFilter('complétées')} data-cy="filter-btn-done">Complétées</button>
            <button onClick={() => setFilter('non complétées')} data-cy="filter-btn-undone">Non complétées</button>

            {filteredTasks.map((task, index) => (
                <div  key={index}>
                    <div className='{clompeted}' data-cy="task-item">

                    {task.name}
                    </div>

                    <button onClick={() => toggleTask(index)}>
                        {task.completed ? 'Marquer non complétée' : 'Marquer complétée'}
                    </button>
                </div>
            ))}
            </div>
    )
};

export default TaskList;