import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showUpdatePassword, setShowUpdatePassword] = useState(false);
  const navigate = useNavigate();

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


  const handleUpdatePassword = () => {
    const logindata = localStorage.getItem('details');

    if (!logindata) {
      alert('No user data found in local storage.');
      return;
    }

    const storedDetails = JSON.parse(logindata);
    const userIndex = storedDetails.findIndex((obj) => {
      return obj.email === email;
    });

    if (userIndex !== -1) {
      storedDetails[userIndex].password = newPassword;
      localStorage.setItem('details', JSON.stringify(storedDetails));
      alert('Password updated successfully!');
    } else {
      alert('User not found.');
    }

    setShowUpdatePassword(false)
  }

  return (
    <div className=" contanier row " style={{height:'100vh'}}>

    
      <div className='col-lg-12 col-md-12 col-sm-12 col- back-ground-signup'>

        <div className='sign-up-form'>
          <h1 className='mb-5'>jjj</h1>
        <div className='form'> 
        <h1 className='mb-5 text-center  text-dark' style={{fontFamily:'gabriola' ,fontWeight:'bolder'}}>Login</h1>

          <div className='col-md-6 mx-auto col-lg-6 col- col-sm' style={{width : '80%'}}>

          <div className='col-md-6 mx-auto col-lg-6 col- col-sm' style={{width : '60%'}}>

            <div className="form-floating mb-3">
              <input
                type="email"
                value={email}
                className='form-control my-input rounded-2'
                placeholder='Enter Email'
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="floatingInput">Enter Email </label>
            </div>
          </div>

          <div className='col-md-6 mx-auto col-lg-6 col- col-sm ' style={{width : '80%'}}>

          <div className='col-md-6 mx-auto col-lg-6 col- col-sm ' style={{width : '60%'}}>

            <div className="form-floating">

              <input
                type="password"
                value={password}
                className='form-control rounded-2 '
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="floatingInput">Password</label>
            </div>
           
          </div>
          <div className='Btn-contanier'>
          <button onClick={handleLogin} className='login-button mt-3'>Login</button>
          <p className='text-center m-0 p-0'>OR</p>
          <Link to={'/usersignup'} style={{ textDecoration: 'none' }} >
            <button
              className='login-button'>
              Signup
            </button>
          </Link>
             </div>
          

          {showUpdatePassword ? (
              <div className='col-md-6 mx-auto col-lg-6 col- col-sm ' style={{ width: '50%' }}>
                <div className="form-floating mt-3">
                  <input
                    type="password"
                    value={newPassword}
                    className='form-control rounded-2 '
                    placeholder='New Password'
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  <label htmlFor="floatingInput">New Password</label>
                </div>
                <button onClick={handleUpdatePassword} className=' mt-3 '>Update Password</button>
              </div>
            ) : (
              <button onClick={() => setShowUpdatePassword(true)} className=' mt-3 '>Forget Password</button>
            )}
          </div>
          </div>  
        </div>
      </div>
      </div>
      </div>
   
  );
}

export default Login;
