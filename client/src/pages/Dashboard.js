import React from 'react';
import { Header, Footer, LoginButton } from '../components/index.js';
import useUser from '../hooks/useUser';

const Dashboard = (props) => {
  const user = useUser();

  return (
    <div>
      <Header />

      <div>{user ? <p>Welcome to the DashBoard, {user.name}</p> : <LoginButton />}</div>

      <Footer />
    </div>
  );
};

export default Dashboard;
