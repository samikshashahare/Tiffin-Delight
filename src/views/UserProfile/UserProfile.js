import React from "react";
import Navbar from "../../components/Navbar/Navbar";

import ProfileCard from "../../ProfileCard/ProfileCard";
// import Kashishimg from "./kashish.png" 
// import profileLogo from "./profile-logo.png"
import { useEffect, useState} from "react"

import "./UserProfile.css"
const UserProfile = () => {
    
    const [getinfo, setGetinfo] = useState([])
    useEffect(() => {
        const profile = localStorage.getItem('details')
        const profileDetails = JSON.parse(profile)
        if(profileDetails && profileDetails.length>0)
        {
            setGetinfo(profileDetails)
        }
        console.log(profileDetails)
    }, [])

    const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    // Load existing data from local storage
    const existingData = JSON.parse(localStorage.getItem('dataArray'));
    if (existingData) {
      setDataArray(existingData);
    }
  }, []);

   

    return (
        <>
            <Navbar />

        <div className="Profile-page" >

            
            
            <div className="row m-0 p-0 w-100 ">
                <div className="col ">
                <h1 className="text-center heading "> My Profile </h1>

                
                   {
                    getinfo.map((user,index)=>{
                       return <ProfileCard key={index} 
                       name={user.firstName}  
                       no={user.mobile} 
                       mail={user.email} 
                       address={user.address}/>
                    })
                   }
                </div>
            </div>
        </div>
        </>
    )
}
 
export default UserProfile
