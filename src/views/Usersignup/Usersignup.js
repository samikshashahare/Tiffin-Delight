import React, { useState, useEffect } from 'react';
import './Usersignup.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import showToast from 'crunchy-toast';


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
    if (existingData && existingData.length > 0) {
      setSave(existingData);
    }
  }, []);

  const EmailValid = (email) => {

    const check = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return check.test(email);
  };

  const requiredFields = () => {
    if (!email) {
      showToast('Enter Email', 'warning', 3000);
      return false;
    }
    if (!EmailValid(email)) {
      showToast('Enter Valid Email', 'warning', 3000);
      return false;
    }

    if (!password) {
      showToast('Enter Password', 'warning', 3000);
      return false;
    }

    if (password !== confirmPassword) {
      showToast('Password do not Match', 'warning', 3000);
      return false;
    }

    return true;
  }

  const fetchLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const apiUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

        try {
          const response = await axios.get(apiUrl);
          if (response.data.display_name) {
            const formattedAddress = response.data.display_name;
            setAddress(formattedAddress);
          } else {
            setAddress('Address not found');
          }
        } catch (error) {
          console.error('Error fetching address:', error);
          setAddress('Error fetching address');
        }
      });
    } else {
      showToast('Geolocation is not avilable in browser', 'warning', 3000);
    }
  }


  const handleSignup = () => {
    if (requiredFields() === false) {
      return;
    }

    const isEmailAlreadyExists = save.find((user) => {
      return user.email === email
    });

    if (isEmailAlreadyExists) {
      showToast('Entered Email is already Exist Please try different Email', 'warning', 3000);
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
  }







  return (
    <div className=" row">


      <div className='col-lg-12 col-md-12 col-sm-12 col- pb-2 back-ground-signup'>

        <div className='sign-up-form'>
          <h1 className='mb-2'>jjj</h1>
          <form className='form form-div'>
            <h1 className=' mb-2 ms-5 text-center text-dark' style={{ fontFamily: 'gabriola', fontWeight: 'bolder'}}>Sign Up</h1>


            <div className="col-md-6 mx-auto col-lg-6 col- col-sm " >
              <div className="form-floating input mb-3">
                <input
                  className=' form-control my-input  rounded-2'
                  type="email"
                  value={email}
                  placeholder='Enter Email'
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="floatingInput">Enter Email </label>
              </div>
            </div>

            <div className='col-md-6 mx-auto col-lg-6 col- col-sm'>
              <div className="form-floating  input mb-3">
                <input
                  className='form-control my-input rounded-2'
                  type="Text"
                  placeholder="Full Name"
                  value={firstName}
                  onChange={(e) => { setFirstName(e.target.value) }}
                />
                <label htmlFor="floatingInput">Full Name</label>
              </div>
            </div>

            <div className='col-md-6 mx-auto col-lg-6 col- col-sm'>
              <div className="form-floating mb-3 input emoji-position">
                <input
                  className='form-control my-input rounded-2'
                  type="Text"
                  placeholder="Full Address"
                  value={address}
                  onChange={(e) => { setAddress(e.target.value) }}
                />

                <label htmlFor="floatingInput">Full Address</label>
                <span onClick={fetchLocation} className='location-emoji'>📍</span>
              </div>
            </div>
            <div className='col-md-6 mx-auto col-lg-6 col- col-sm'>
              <div className="form-floating input mb-3">
                <input
                  className='form-control my-input rounded-2'
                  type="text"
                  placeholder="Mobile No."
                  value={mobile}
                  onChange={(e) => { setMobile(e.target.value) }}
                />
                <label htmlFor="floatingInput">Mobile No.</label>
              </div>
            </div>
            <div className="col-md-6 mx-auto col-lg-6 col- col-sm">
              <div className="form-floating input mb-3">
                <input
                  className='form-control my-input rounded-2'
                  type="password"
                  value={password}
                  placeholder='Password'
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="floatingInput">Password</label>
              </div>
            </div>
            <div className="col-md-6 mx-auto col-lg-6 col- col-sm">
              <div className="form-floating input mb-3">
                <input
                  className='form-control my-input rounded-2'
                  type="password"
                  value={confirmPassword}
                  placeholder='ConfirmPassword'
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <label htmlFor="floatingInput">ConfirmPassword</label>
              </div>
            </div>

            <button onClick={handleSignup} className='sing-up-btn' type='button'>Sign Up</button>
            <br />
            <Link to={'/login'}  ><span className='d-block text-center p-0 text-black'>Already Account?</span></Link>



          </form>




        </div>


      </div>

    </div >
  );
}

export default Signup;
