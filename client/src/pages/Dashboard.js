import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header, Footer, LoginButton } from '../components/index.js';
import useUser from '../hooks/useUser';

const Dashboard = (props) => {
  const user = useUser();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('jwt');
    navigate('/');
  };

  return (
    <div>
      <Header />

      <div>
        {user ? (
          <>
            <p>Welcome to the DashBoard, {user.name}</p>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <LoginButton />
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;