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


  const handleAddTask = (e) => {
    //send newTask to db
    //try post 

    //get new (this is a list) 
    //setTasks(new)
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
            onChange={(ev) => setNewTask(ev)}
           />
           <button type="submit">Add Task</button>
        </form>
      </div>

      <div className="list out tasks">
          <ul>
            {Tasks.map((task, index) => (
            <li key={index}>
              {task}
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
