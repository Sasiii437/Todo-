import React from 'react';
import Task from './Task';

function TaskList({ tasks, deleteTask, toggleTaskCompletion }) {
    const ulStyle = {
        "backgroundImage": "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)",
        
      };
      const task_style={
        "padding":"15px",
      }
  return (
    <ul style={ulStyle}>
      {tasks.map(task => (
        <Task 
        style={task_style}
          key={task.id} 
          task={task} 
          deleteTask={deleteTask} 
          toggleTaskCompletion={toggleTaskCompletion} 
        />
      ))}
    </ul>
  );
}

export default TaskList;
