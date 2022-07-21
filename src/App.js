import { useState } from 'react';

import './app.css';
import Header from './components/Header';
import Tasks from './components/Tasks';

const tasks1 = [
  { name: 'do laundry', day: 'oct 22', id: 1, reminder: true },
  { name: 'do sporst', day: 'oct 19', id: 2, reminder: true },
  { name: 'play piano', day: 'oct 03', id: 3, reminder: false },
  { name: 'go shopping', day: 'oct 10', id: 4, reminder: true },
  { name: 'read a book', day: 'oct 01', id: 5, reminder: false },
];

function App() {
  const [tasks, setTasks] = useState(tasks1);

  // delete task
  function deleteTask(id) {
    setTasks(tasks.filter((t) => t.id !== id));
  }
  // toggle reminder

  return (
    <div className="container">
      <Header title="task tracker" />
      {tasks.length > 0 ? (
        <Tasks onDelete={deleteTask} tasks={tasks} />
      ) : (
        'No tasks to show'
      )}{' '}
    </div>
  );
}

export default App;
