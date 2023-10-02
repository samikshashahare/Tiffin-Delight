import React, { useState,useEffect} from 'react';
import './Usersignup.css';
import { Link, useNavigate } from 'react-router-dom'; 

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [save, setSave] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const existingData = JSON.parse(localStorage.getItem('details'));
    if(existingData && existingData >0){
    setSave(existingData);
    }
  }, []);
  const requiredFields = () => {
    if(!email){
      alert("Please enter your email");
      return false;
    }

    if(!password){
      alert("Please enter a password")
       return false;
    }
   
    if(password!==confirmPassword)
    {
      alert("Passwords do not match!")
      return false;
    }

    return true;
  };

  const handleSignup = () => {
    if (requiredFields() === false) {
      return;
    }

    const obj = {
      email: email,
      password: password,
    };
    const temp = [...save, obj];
    setSave(temp);
    localStorage.setItem('details', JSON.stringify(temp));

   
    navigate('/login');
  };

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
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
      <div className="form-group">
        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <button onClick={handleSignup} className='sing-up-btn'>Sign Up</button>
       <Link to={'/login'} ><span>Already Account</span></Link>
    </div>
  );
}

export default Signup;
