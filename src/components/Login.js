import React from 'react';
import '../styles/login.css';

function Login() {
  return (
    <div className="login-container">
      <div className="form-container">
        <h2 className="form-title">Login</h2>
        <div className="fields-container">
          <input type="text" placeholder="Username" className="input-field" />
          <input type="password" placeholder="Password" className="input-field" />
          <button className="submit-btn">Login</button>
        </div>
        <div className="footer">
          <p>Don't have an account? <span className="switch-link">Sign Up</span></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
