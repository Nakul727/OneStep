import React from 'react';
import { Header, Footer } from '../components/index.js';
import { RegisterForm } from '../components/index.js';

const Register = (props) => {
  return (
    <div>
      <Header />

      <div>
        <p>Welcome to the Register page</p>
        <RegisterForm />
      </div>

      <Footer />
    </div>
  );
};

export default Register;
