import React from 'react';

function Task({ task, deleteTask, toggleTaskCompletion }) {
  return (
    <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={() => toggleTaskCompletion(task.id)} 
      />
      {task.text}
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
}

export default Task;
