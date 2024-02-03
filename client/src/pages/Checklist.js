import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//add note todo
//edit, remove, mark as complete
//input

//display date name and message


//msg
//uid
//task id
//task name
//date?





const Checklist = (props) => {
  const [Tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [name, setname] = useState('');
  const [msg, setmsg] = useState('');
  const [uid, setuid] = useState(props);
  
  const getTasks = async (e) => {
    const token = localStorage.getItem('jwt');
    e.preventDefault();
    try {
      const result = await fetch('http://localhost:3000/api/tasks');
      
      const data = await response.json();
      setTasks(data);


    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };


  const handleAddTask = async (e) => {
    const token = localStorage.getItem('jwt');
    e.preventDefault()

    try {
      const result = await fetch('http://localhost:3000/api/tasks/add', {
      mode: 'cors',
      method: 'POST',
      headers: {
      'Authorization': 'Bearer ${token}',
      'Content-Type': 'something/json',
      },
      body: JSON.stringify({ uid: uid, name: name, msg: msg})
    })
    if (result.ok) {
      getTasks();
      setNewTasks('');
    } else {
      console.error('Failed to add task');
    }
  } catch (error) {
    console.error('Error adding task:', error);
  }
};


  const handleRemoveTask = (tasks) => {
    //remove task from db


  };

  const handleEditTask = (task, msg, name) => {
    //given a specific task, change message and/or name in db
    
  };

  return (
  <div className="mainContainer">
      <h>Checklist</h>
      <div className="addTask button">
        <form onSumbmit={handleAddTask}>
          <input
            type="text"
            value={newTask}
            placeholder="Add Task"
            onChange={(ev) => setNewTask(ev.target.value)}
           />
           <button type="submit">Add Task</button>
        </form>
      </div>

      <div className="list out tasks">
          <ul>
            {Tasks.map((task, index) => (
              <li key={index}>{task.name} - {task.message}
              <button onClick={() => handleRemoveTask(index)}>Remove</button>
              <button onClick={() => handleEditTask(index)}>Edit</button>
              </li>
          
            ))}
          </ul>
      </div>

  </div>
  );
}

export default Checklist;
