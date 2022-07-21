import { useState } from 'react';

import './app.css';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';

const tasks1 = [
  { text: 'do laundry', day: 'oct 22', id: 1, reminder: true },
  { text: 'do sporst', day: 'oct 19', id: 2, reminder: true },
  { text: 'play piano', day: 'oct 03', id: 3, reminder: false },
  { text: 'go shopping', day: 'oct 10', id: 4, reminder: true },
  { text: 'read a book', day: 'oct 01', id: 5, reminder: false },
];

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState(tasks1);
  // add task
  function addTask(task) {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = {
      id,
      ...task,
    };
    setTasks([...tasks, newTask]);
  }
  // delete task
  function deleteTask(id) {
    setTasks(tasks.filter((t) => t.id !== id));
  }
  // toggle reminder
  function toggleReminder(id) {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, reminder: !t.reminder } : t)));
  }

  return (
    <div className="container">
      <Header
        showAdd={showAddTask}
        onAdd={() => setShowAddTask(!showAddTask)}
        title="task tracker"
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks onToggle={toggleReminder} onDelete={deleteTask} tasks={tasks} />
      ) : (
        'No tasks to show'
      )}
    </div>
  );
}

export default App;
