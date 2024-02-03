import React from 'react';

// go to login button in case user is not logged in
const LoginButton = () => {
  return (
    <div className="flex items-center justify-center">
      <a href="/login" className="btn btn-primary">
        Go to Login
      </a>
    </div>
  );
};

export default LoginButton;
