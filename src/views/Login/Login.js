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
    <div className=" contanier row " style={{height:'100vh'}}>

    
      <div className='col-lg-12 col-md-12 col-sm-12 col- back-ground-signup'>

        <div className='sign-up-form'>
          <h1 className='mb-5'>jjj</h1>
        <div className='form'> 
        <h1 className='mb-5 text-center  text-dark' style={{fontFamily:'gabriola' ,fontWeight:'bolder'}}>Login</h1>
          <div className='col-md-6 mx-auto col-lg-6 col- col-sm' style={{width : '80%'}}>
            <div className="form-floating mb-3">
              <input
                type="email"
                value={email}
                className='form-control my-input rounded-5'
                placeholder='Enter UserName'
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="floatingInput">Enter UserName </label>
            </div>
          </div>
          <div className='col-md-6 mx-auto col-lg-6 col- col-sm ' style={{width : '80%'}}>
            <div className="form-floating">

              <input
                type="password"
                value={password}
                className='form-control rounded-5 '
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="floatingInput">Password</label>
            </div>
          </div>
          <button onClick={handleLogin} className='login-button mt-3'>Login</button>
          <p className='text-center m-0 p-0'>OR</p>
          <Link to={'/usersignup'} style={{ textDecoration: 'none' }} >
            <button
              className='login-button'>
              Signup
            </button>
          </Link>
          </div>  
        </div>
      </div>



    </div>
  );
}

export default Login;
