import React, { useState } from 'react';

const loginUser = async (props) => {


}

const LoginForm = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
        <button className="bg-slate-300 p-4" onSubmit={loginUser}>Submit</button>
    </div>
  );
};

export default LoginForm;
