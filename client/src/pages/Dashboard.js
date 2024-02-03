import React from 'react';
import { Header, Footer } from '../components/index.js';

const Dashboard = (props) => {
  return (
    <div>
      <Header />

      <div>
        <p>Welcome to the DashBoard</p>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
