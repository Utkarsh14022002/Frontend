import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import './Login'

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="page-heading">Online Banking System</h1>
      <div className="two-cards-layout">
        <div className="card">
          <a href="/admin">
            <img src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg" alt="Card 1" />
            <h2>Admin Panel</h2>
          </a>
        </div>
        <div className="card">
          <a href="/login">
            <img src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg" alt="Card 2" />
            <h2>User Panel</h2>
          </a>
        </div>
      </div>
    </div>
  );
}
