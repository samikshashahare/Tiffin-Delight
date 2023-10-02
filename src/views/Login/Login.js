import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
   
    const logindata = localStorage.getItem('details');
    
    if (!logindata) {
      alert('No user data found in local storage.');
      return;
    }

    const storedDetails = JSON.parse(logindata);
   
    const matchingUser = storedDetails.find((obj) => {
      return obj.email === email && obj.password === password
    }
    );
  

    if (matchingUser) {
      alert('Logged in successfully!');
    } else {
      alert('Invalid email or password.');
    }
  };

  return (
    <div className="login-container">

      <div className='sub'>

      </div>
      <div className='sub'>
           <h1>Login</h1>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
        <p className='ps-5 ms-5 mb-0'>OR</p>
      <Link to={'/usersignup'} ><button>Signup</button></Link>
      </div>
     
    </div>
  );
}

export default Login;
