import React, { useState, useEffect } from 'react';
import { Header, Footer, LoginButton } from '../components/index.js';
import useUser from '../hooks/useUser';

const Checklist = (props) => {
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState('');
  const [msg, setMsg] = useState('');
  const [uid, setUid] = useState(props);

  const user = useUser();

  const getTasks = async () => {
    const token = localStorage.getItem('jwt');
    try {
      const backendApi = 'http://localhost:8080';
      const response = await fetch(`${backendApi}/api/tasks/add_task`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await result.json();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleAddTask = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('jwt');
    try {
      const result = await fetch('http://localhost:8080/api/tasks/add', {
        method: 'POST',
        mode: 'cors',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ uid: uid, name: name, msg: msg }),
      });
      if (result.ok) {
        getTasks();
        setName('');
        setMsg('');
      } else {
        console.error('Failed to add task');
      }
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const handleRemoveTask = (index) => {
    // Implement removal logic here
  };

  const handleEditTask = (index) => {
    // Implement edit logic here
  };

  return (
    <div className="mainContainer">
      <Header />
      <h1>Checklist</h1>
      {user ? (
        <div className="addTask button">
          <form onSubmit={handleAddTask}>
            <input
              type="text"
              value={name}
              placeholder="Name"
              onChange={(ev) => setName(ev.target.value)}
            />
            <input
              type="text"
              value={msg}
              placeholder="Message"
              onChange={(ev) => setMsg(ev.target.value)}
            />
            <button type="submit">Add Task</button>
          </form>

          <div className="list out tasks">
            <ul>
              {tasks.map((task, index) => (
                <li key={index}>
                  {task.name} - {task.message}
                  <button onClick={() => handleRemoveTask(index)}>Remove</button>
                  <button onClick={() => handleEditTask(index)}>Edit</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <LoginButton />
      )}

      <Footer />
    </div>
  );
};

export default Checklist;
