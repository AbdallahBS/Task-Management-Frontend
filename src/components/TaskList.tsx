import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Task } from '../types';

const TaskList: React.FC = () => {
  axios.defaults.baseURL = 'http://localhost:3001'; 

  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await axios.get('/tasks');
      setTasks(response.data);
    };
    fetchTasks();
  }, []);

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
