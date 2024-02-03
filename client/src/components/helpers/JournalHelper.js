import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const JournalHelper = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const token = localStorage.getItem('jwt');
  const { id } = jwtDecode(token);

  const makeJournal = async (event) => {
    event.preventDefault();
    const backendApi = 'http://localhost:8080';
    const response = await fetch(`${backendApi}/api/journals/post-journal`, {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer: ${token}`,
      },
      body: JSON.stringify({ title: title, description: description, userid: id }),
    });
    if (response.ok) {
      navigate('/dashboard');
    } else {
      console.error(response);
    }
  };

  return (
    <form onSubmit={makeJournal}>
      <input
        className="flex"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="title"
      />
      <input
        className="flex"
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="description"
      />
      <button className="bg-slate300 p-4" type="submit">
        Create Journal
      </button>
    </form>
  );
};

export default JournalHelper;
