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
    <div className="login-container row">

      <div className=' col-md-6 col-sm-6 col- '>

      </div>
      <div className='mt-5 col-md-6 col-sm-6 col-'>
           <h1 className='mb-5'>Login</h1>
      <div className="form-group">
       
        <input
          type="email"
          value={email}
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
       
        <input
          type="password"
          value={password}
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin} className='login-button'>Login</button>
        <p className='text-center m-0 p-0'>OR</p>
      <Link to={'/usersignup'} style={{textDecoration:'none'}} ><button className='login-button'>Signup</button></Link>
      </div>
     
    </div>
  );
}

export default Login;
