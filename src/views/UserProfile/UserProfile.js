import React from "react";
import { Navbar3 } from "../../components/Navbar/Navbar";

import ProfileCard from "../../ProfileCard/ProfileCard";
// import Kashishimg from "./kashish.png" 
// import profileLogo from "./profile-logo.png"
import { useEffect, useState} from "react"

import "./UserProfile.css"
const UserProfile = () => {
    
    const [getinfo, setGetinfo] = useState({})
    useEffect(() => {
        const profile = localStorage.getItem('loginData')
        const profileDetails = JSON.parse(profile)
        if(profileDetails)
        {
            setGetinfo(profileDetails)
        }
    }, [])

    const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    // Load existing data from local storage
    const existingData = JSON.parse(localStorage.getItem('loginData'));
    if (existingData) {
      setDataArray(existingData);
    }
  }, []);

   

    return (
        <>
            {/* <Navbar /> */}
            <Navbar3 />

        <div className="Profile-page" >

            
            
            <div className="row m-0 p-0 w-100 ">
                <div className="col ">
                <h1 className="text-center heading "> My Profile </h1>

                   <ProfileCard name={getinfo.firstName} address={getinfo.address} no={getinfo.mobile} mail={getinfo.email} />
                </div>
            </div>
        </div>
        </>
    )
}

 
export default UserProfile
