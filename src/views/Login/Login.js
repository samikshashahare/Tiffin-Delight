import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import showToast from 'crunchy-toast';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showUpdatePassword, setShowUpdatePassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {

    const logindata = localStorage.getItem('details');

    if (!logindata) {
      showToast('No data found in localstorage', 'warning', 3000);
      return;
    }

    const storedDetails = JSON.parse(logindata);

    const matchingUser = storedDetails.find((obj) => {
      return obj.email === email && obj.password === password
    }
    );


    if (matchingUser) {
      showToast('Login Successfully', 'success', 3000);
      navigate('/menucard')
    } else {
      showToast('Invalid Email ID and Password', 'warning', 3000);
    }
  };


  const handleUpdatePassword = () => {
    const logindata = localStorage.getItem('details');

    if (!logindata) {
      showToast('No data found in localstorage', 'warning', 3000);
      return;
    }

    const storedDetails = JSON.parse(logindata);
    const userIndex = storedDetails.findIndex((obj) => {
      return obj.email === email;
    });

    if (userIndex !== -1) {
      storedDetails[userIndex].password = newPassword;
      localStorage.setItem('details', JSON.stringify(storedDetails));
      showToast('Password update successfully', 'success', 3000);
    } else {
      showToast('User not found', 'warning', 3000);
    }

    setShowUpdatePassword(false)
  }

  return (
    <div className=" contanier row " style={{height:'100vh'}}>

    
      <div className='col-lg-12 col-md-12 col-sm-12 col- back-ground-signup'>

        <div className=''>
          <h1 className='mb-5 '>jjj</h1>
        <div className='input-data mx-auto'> 
        <h1 className='mb-5 text-center  text-dark' style={{fontFamily:'gabriola' ,fontWeight:'bolder'}}>Login</h1>

        

          <div className='col-md-6 mx-auto col-lg-6 col- col-sm' >

            <div className="input-box ">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span >Enter Email </span>
            </div>
         

         
          <div className='col-md-6 mx-auto col-lg-6 col- col-sm ' >

            <div className="input-box">

              <input
                type="password"
                value={password}
               
              
                onChange={(e) => setPassword(e.target.value)}
              />
              <span >Password</span>
            </div>
           
         
          <div className='Btn-contanier'>
          <button onClick={handleLogin} className='update-btn mt-3'>Login</button>
          <p className='text-center m-0 p-0'>OR</p>
          <Link to={'/usersignup'} style={{ textDecoration: 'none' }} >
            <button
              className='update-btn'>
              Signup
            </button>
          </Link>
             </div>
          

        
          </div>
         
          </div> 
          {showUpdatePassword ? (
              <div className='col-md-6 mx-auto col-lg-6 col- col-sm ' >
                <div className="input-box  mt-3">
                  <input
                    type="password"
                    value={newPassword}
                    
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  <span>New Password</span>
                </div>
                <button onClick={handleUpdatePassword} className=' update-btn mt-3 '>Update </button>
              </div>
            ) : (
              <span onClick={() => setShowUpdatePassword(true)} className='  mt-3 '>Forget ?</span>
            )} 
        </div>
      </div>
      </div>
      </div>
   
  );
}

export default Login;
