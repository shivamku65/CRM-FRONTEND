import React from 'react';
import './SignUpForm.css';

const SignUpForm = () => (
  <div className="sign-up-form">
      <div className="sign-up-form-title">
          <h2>Sign up and get started on your free trial. No credit card needed.</h2>
      </div>
      <form>
          <input type="text" placeholder="Name" required/>
          <input type="email" placeholder="Business Email" required />
      <input type="password" placeholder="Password" required />
     
      <input type="tel" placeholder="Phone Number" required />
      <div className="declaration-section">
          <span>I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.</span>
          <input type="checkbox" required />

      </div>
      <button type="submit">Sign Up </button>
      </form>
  </div>
);

export default SignUpForm;
