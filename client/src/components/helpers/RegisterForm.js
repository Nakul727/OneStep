import React, { useState } from 'react';

const registerUser = async (props) => {


}

const RegisterForm = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_pass, setConfirmPass] = useState('');

  return (
    <div>
        <button onSubmit={registerUser}>Submit</button>
    </div>
  );
};

export default RegisterForm;
