import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerUser = async (event) => {
    event.preventDefault();
    // const backendApi = process.env.REACT_APP_BACKEND;
    const backendApi = 'http://localhost:8080';
    const response = await fetch(`${backendApi}/api/accounts/register`, {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: username, email: email, password: password })
    });

    if (response.ok) {
      const nextResponse = await fetch(`${backendApi}/api/accounts/login`, {
        mode: 'cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email, password: password })
      });
      if(nextResponse.ok) {
        const data = await nextResponse.json();
        localStorage.setItem('jwt', data.token);
        navigate('/dashboard');
      } else {
        navigate('/login');
      }
    } else {
      console.error(response);
    }
  };

  return (
    <form onSubmit={registerUser}>
      <input className='flex' type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
      <input className='flex' type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input className='flex' type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button className="bg-slate-300 p-4" type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
