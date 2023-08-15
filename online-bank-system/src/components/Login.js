import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './Login.css';

export const Login = () => {
  return (
    <div>
      <Navbar></Navbar>
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid" alt="Sample image" />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="userID"
                    className="form-control form-control-lg"
                    placeholder="Enter a User ID"
                    pattern="^[A-Za-z\d]{10}$"
                    title="User ID must be exactly 10 characters and contain only letters and numbers"
                    required
                  />
                  <label className="form-label" htmlFor="userID">User ID</label>
                </div>

                <div className="form-outline mb-3">
                  <input
                    type="password"
                    id="password"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                    pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$"
                    title="Must contain at least 6 characters, including at least one letter, one number, and one special character"
                    required
                  />
                  <label className="form-label" htmlFor="password">Password</label>
                </div>
                <div className="password-hint">
                  Password must have at least 6 characters, including 1 letter, 1 number, and 1 special character. It should not contain the word 'password'.
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <a href="/forgetPassword" className="text-decoration-none link-info">Forgot Password?</a>
                </div>

                <br></br>

                <div className="d-flex justify-content-between align-items-center">
                  <a href="/forgetUserID" className="text-decoration-none link-info">Forgot User ID?</a>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button type="button" className="btn btn-primary btn-lg"
                  >Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
