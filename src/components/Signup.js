import React from 'react';
import '../styles/signup.css';

function SignUp() {
  return (
    <div className="form">
      <h2 className="form-title">Sign Up</h2>
      <input type="text" placeholder="Full Name" className="input-field" />
      <input type="text" placeholder="Username" className="input-field" />
      <input type="email" placeholder="Email" className="input-field" />
      <input type="password" placeholder="Password" className="input-field" />
      <button className="submit-btn">Sign Up</button>
      <div className="footer">
        <p>Already have an account? <span className="switch-link">Login</span></p>
      </div>
    </div>
  );
}

export default SignUp;
