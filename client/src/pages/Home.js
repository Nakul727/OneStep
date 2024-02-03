import React from 'react';
import { Header, Footer } from '../components/index.js';
import logo_tagline from '../assets/tagline.png';

const Home = (props) => {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center p-4">
        <p className="text-3xl">Hello! Welcome to OneStep</p>
      </div>

      <div className="flex items-center justify-center">
        <img src={logo_tagline} alt="logo" className="w-96" />
      </div>

      <div className="flex items-center justify-center p-4">
        <a href="/login" className=" bg-slate-100 p-4 mr-16">
          Login
        </a>
        <a href="/register" className=" bg-slate-100 p-4">
          Register
        </a>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
