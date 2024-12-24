import React, { useState } from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';

const Home: React.FC = () => {
  const [taskAdded, setTaskAdded] = useState(false);

  const handleTaskAdded = () => {
    setTaskAdded(!taskAdded);
  };

  return (
    <div>
      <h1>Task Management Tool</h1>
      <TaskForm onTaskAdded={handleTaskAdded} />
      <TaskList />
    </div>
  );
};

export default Home;
