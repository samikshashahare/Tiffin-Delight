import React, { useState, useEffect } from 'react';
import './Usersignup.css';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [mobile, setMobile] = useState('')

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [save, setSave] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const existingData = JSON.parse(localStorage.getItem('details'));
    if (existingData && existingData > 0) {
      setSave(existingData);
    }
  }, []);
  const requiredFields = () => {
    if (!email) {
      alert("Please enter your email");
      return false;
    }

    if (!password) {
      alert("Please enter a password")
      return false;
    }

    if (password !== confirmPassword) {
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
      firstName:firstName,
      lastName:lastName,
      mobile:mobile,
     
     
    };
    const temp = [...save, obj];
    setSave(temp);
    localStorage.setItem('details', JSON.stringify(temp));


    navigate('/login');
  };




  return (
    <div className=" row">

      <div className=' col-md-6 col-sm-6 col-' >
         
      </div>
      <div className='col-md-6 col-sm-6 col-'>
        <h1 className='m-3'>Sign Up</h1>
        <form>
          <div className="form-group">
            
            <input
              type="email"
              value={email}
              placeholder='Enter UserName'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <input
            type="Text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => { setFirstName(e.target.value) }}
          />

          <input
            type="Text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => { setLastName(e.target.value) }}
          />
          <input
            type="text"
            placeholder="Mobile No."
            value={mobile}
            onChange={(e) => { setMobile(e.target.value) }}
          />
         
         <div className="form-group">
         
         <input
           type="password"
           value={password}
           placeholder='Password'
           onChange={(e) => setPassword(e.target.value)}
           className='btn-radio'
         />
       </div>
       <div className="form-group">
         <input
           type="password"
           value={confirmPassword}
           placeholder='ConfirmPassword'
           onChange={(e) => setConfirmPassword(e.target.value)}
         />
       </div>

        
        </form>




     
        <button onClick={handleSignup} className='sing-up-btn'>Sign Up</button>
        <br />
        <Link to={'/login'}  ><p className='text-center'>Already Account</p></Link>
      </div>

    </div>
  );
}

export default Signup;
