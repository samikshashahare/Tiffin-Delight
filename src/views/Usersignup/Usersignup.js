import React, { useState, useEffect } from 'react';
import './Usersignup.css';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [mobile, setMobile] = useState('')
  const [gender, setGender] = useState('male')

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
      gender:gender,
     
    };
    const temp = [...save, obj];
    setSave(temp);
    localStorage.setItem('details', JSON.stringify(temp));


    navigate('/login');
  };




  return (
    <div className="signup-container">

      <div className='sub'>
       <img src="https://img.freepik.com/free-photo/top-view-delicious-vegan-salad-plate-stained-white-surface_179666-34233.jpg?w=360&t=st=1696237500~exp=1696238100~hmac=dce9b8d72db931ae15a0ecac15c25fb514a4b2414f67a1565765a43b93a177cc" alt="" />
      </div>
      <div className='sub'>
        <h1>Sign Up</h1>
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
         

          <input
            type='radio'
            name='gender'
            value={'male'}
            onChange={(e) => {
              if (e.target.checked) {
                setGender(e.target.value)
              }
            }}
            checked={gender === 'male'}
          /> male  &nbsp;
          <input
            type='radio'
            name='gender'
            value={'female'}
            onChange={(e) => {
              if (e.target.checked) {
                setGender(e.target.value)
              }

            }}
            checked={gender === 'female'}
          /> female
         
        
        </form>




        <div className="form-group">
         
          <input
            type="password"
            value={password}
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
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
        <button onClick={handleSignup} className='sing-up-btn'>Sign Up</button>
        <br />
        <Link to={'/login'} ><span>Already Account</span></Link>
      </div>

    </div>
  );
}

export default Signup;
