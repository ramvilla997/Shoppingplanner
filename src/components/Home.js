import React from 'react';
import '../styles/home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      {/* <Link to="/signup">

        <button className="signup-email-btn">Sign up with Email</button>
      </Link> */}
      <Link to="/signup" className="signup-email-btn-link">
        Sign up with Email
      </Link>

      <div className="or-section">
        <hr className="or-hr" />
        <span className="or-text">or use Social Signup</span>
        <hr className="or-hr" />
      </div>
      <button className="social-btn google-btn">
        <div className="icon">G</div>
        <span>Continue with Google</span>
      </button>
      <button className="social-btn facebook-btn">
        <div className="icon">F</div>
        <span>Continue with Facebook</span>
      </button>
      <button className="social-btn apple-btn">
        <div className="icon">A</div>
        <span>Continue with Apple</span>
      </button>
      <div className="footer">
        <p>Already have an account? <Link to="/login" className="login-link">Login</Link></p>
      </div>
    </div>
  );
}

export default Home;
