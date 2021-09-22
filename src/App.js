// To create a REACK app from scratch follow below steps:
// 1. Create a folder > open that folder path in CMD
// 2. Run: npx create-react-app react-task-tracker
// 3. "Happy hacking" > cd into the created folder (react-task-tracker)
// 4. Run: cd react-task-tracker
// 5. Run: code .
// 6. After your app is done, to do build, Run: npm run build
// 7. To server locally, get SERVE package globally, Run: npm i -g serve
// 8. Run: serve -s build -p 8000 

import Header from "./components/Header";
import Tasks from './components/Tasks'
import { useState } from 'react' //This is a hook called useState
import AddTask from "./components/AddTask";

// function App() {
//   return (
//     <div className="container">
//       <Header/>
//     </div>
//   );
// }

////or do arrow function
const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    },
])
  // Add Task
  const addTask = (task) => {
    //console.log(task)
    const id = Math.floor(Math.random() * 10000) + 1

    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    //console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    //console.log(id)
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }


  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Task To Show'}
    </div>
  );
}

export default App;
