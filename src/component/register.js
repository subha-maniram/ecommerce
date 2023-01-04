import React from 'react'
import { Link } from 'react-router-dom';
import '../login.css';

function Register() {
    return (
        <div class="center mt-4">
      <h1>Register</h1>
      <form method="post">
        <div class="txt_field">
          <input type="text" required />
          <span></span>
          <label>Email</label>
        </div>
        <div class="txt_field">
          <input type="password" required />
          <span></span>
          <label>Password</label>
        </div>
        <div class="txt_field">
          <input type="text" required />
          <span></span>
          <label>phone Number</label>
        </div>
        <div class="txt_field">
          <input type="text" required />
          <span></span>
          <label>Address</label>
        </div>
        <div class="pass">Forgot Password?</div>
        <input type="submit" value="Login" />
        <div class="signup_link">
          Already Have An Account <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
    )
}

export default Register;
