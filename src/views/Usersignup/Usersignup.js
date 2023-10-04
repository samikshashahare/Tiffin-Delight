import React, { useState, useEffect } from 'react';
import './Usersignup.css';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const [firstName, setFirstName] = useState('')
  const [address, setAddress] = useState('')
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
      firstName: firstName,
      address: address,
      mobile: mobile,


    };
    const temp = [...save, obj];
    setSave(temp);
    localStorage.setItem('details', JSON.stringify(temp));


    navigate('/login');
  };




  return (
    <div className=" row">


      <div className='col-lg-12 col-md-12 col-sm-12 col- pb-2 back-ground-signup'>

        <div className='sign-up-form'>
<h1 className='mb-2'>jjj</h1>
          <form className='form'>
          <h1 className=' mb-2 text-center text-dark' style={{ fontFamily: 'gabriola', fontWeight: 'bolder' }}>Sign Up</h1>


            <div className="col-md-6 mx-auto col-lg-6 col- col-sm " >
              <div className="form-floating mb-3">
                <input
                  className='form-control my-input rounded-5'
                  type="email"
                  value={email}
                  placeholder='Enter UserName'
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="floatingInput">Enter UserName </label>
              </div>
            </div>

            <div className='col-md-6 mx-auto col-lg-6 col- col-sm'>
              <div className="form-floating mb-3">
                <input
                  className='form-control my-input rounded-5'
                  type="Text"
                  placeholder="Full Name"
                  value={firstName}
                  onChange={(e) => { setFirstName(e.target.value) }}
                />
                <label htmlFor="floatingInput">Full Name</label>
              </div>
            </div>

            <div className='col-md-6 mx-auto col-lg-6 col- col-sm'>
              <div className="form-floating mb-3">
                <input
                  className='form-control my-input rounded-5'
                  type="Text"
                  placeholder="Full Address"
                  value={address}
                  onChange={(e) => { setAddress(e.target.value) }}
                />
                <label htmlFor="floatingInput">Full Address</label>
              </div>
            </div>
            <div className='col-md-6 mx-auto col-lg-6 col- col-sm'>
              <div className="form-floating mb-3">
                <input
                  className='form-control my-input rounded-5'
                  type="text"
                  placeholder="Mobile No."
                  value={mobile}
                  onChange={(e) => { setMobile(e.target.value) }}
                />
                <label htmlFor="floatingInput">Mobile No.</label>
              </div>
            </div>
            <div className="col-md-6 mx-auto col-lg-6 col- col-sm">
              <div className="form-floating mb-3">
                <input
                  className='form-control my-input rounded-5'
                  type="password"
                  value={password}
                  placeholder='Password'
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="floatingInput">Password</label>
              </div>
            </div>
            <div className="col-md-6 mx-auto col-lg-6 col- col-sm">
              <div className="form-floating mb-3">
                <input
                  className='form-control my-input rounded-5'
                  type="password"
                  value={confirmPassword}
                  placeholder='ConfirmPassword'
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <label htmlFor="floatingInput">ConfirmPassword</label>
              </div>
            </div>

            <button onClick={handleSignup} className='sing-up-btn'>Sign Up</button>
            <br />
            <Link to={'/login'}  ><span className='d-block text-center p-0 text-black'>Already Account?</span></Link>

          </form>




        </div>


      </div>
      {/* <div className='col-lg-6 col-md-12 col-sm-12 col-' >

      </div>  */}
    </div >
  );
}

export default Signup;
