import { useState } from 'react';
import Header from './Components/Header'
import Tasks from './Components/Tasks'
import AddTask from './Components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);


  const [tasks, setTasks] = useState([
    {id:1, text: "Do Homework"},
    {id:2, text: "Walk Dog"},
    {id:3, text: "Eat Food"}
  ]);

  const showForm = function() {
    setShowAddTask(!showAddTask);
  }


  // Add Task
  const addTask = function(text) {
    const id  = Math.random() * 10000;
    setTasks([...tasks, {id, text}]);
  }


  // Delete Task
  const deleteTask = function(id) {
    let newTasks = tasks.filter((elem) => elem.id !== id);
    setTasks(newTasks);
  }


  return (
    <div className="container">
      <Header onShow={showForm} status={showAddTask}/>

      {showAddTask && <AddTask onAdd={addTask}/>}

      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> : <h3>No Tasks Left</h3>}
      
    </div>
  );
}

// import React from 'react'
// class App extends React.Component {
//   render() {
//     return <h1>Hello from class</h1>
//   }
// }





export default App;
