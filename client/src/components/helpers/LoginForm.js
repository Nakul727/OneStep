import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (event) => {
    event.preventDefault();
    // const backendApi = process.env.REACT_APP_BACKEND;
    const backendApi = 'http://localhost:8080';
    const response = await fetch(`${backendApi}/api/accounts/login`, {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email, password: password }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('jwt', data.token);
      console.log(data.token);
      navigate('/dashboard');
    } else {
      console.error(response);
    }
  };

  return (
    <form onSubmit={loginUser}>
      <input
        className="flex"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        className="flex"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button className="bg-slate-300 p-4" type="submit">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
