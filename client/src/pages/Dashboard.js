import React from 'react';
import { Header, Footer } from '../components/index.js';
import { jwtDecode } from 'jwt-decode';

const Dashboard = (props) => {
  const token = localStorage.getItem('jwt');
  const decodedUser = jwtDecode(token); 
  const { name } = decodedUser;
  console.log(decodedUser);
  return (
    <div>
      <Header />

      <div>      
        <p>Welcome to the DashBoard, {name}</p>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
