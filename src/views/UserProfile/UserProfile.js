import React from "react";
import Navbar from "../../components/Navbar/Navbar";

import ProfileCard from "../../ProfileCard/ProfileCard";
// import Kashishimg from "./kashish.png" 
import profileLogo from "./profile-logo.png"
import { useEffect, useState, useRef } from "react"

import "./UserProfile.css"
const UserProfile = () => {
    
    const [getinfo, setGetinfo] = useState([])
    useEffect(() => {
        const profile = localStorage.getItem('details')
        const profileDetails = JSON.parse(profile)
        setGetinfo(profileDetails)
        console.log(profileDetails)
    }, [])

   

    return (
        <>
            <Navbar />

        <div className="Profile-page" >

            
            
            <div className="row m-0 p-0 w-100 ">
                <div className="col ">
                <h1 className="text-center heading "> My Profile </h1>

                <img src="./profile-logo.png" alt="image" />
                <input type="file" />
                   {
                    getinfo.map((user,index)=>{
                       return <ProfileCard key={index} 
                       name={user.firstName} 
                       img={profileLogo} 
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
