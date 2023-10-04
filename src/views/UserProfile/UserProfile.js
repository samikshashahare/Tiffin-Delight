import React from "react";
import Navbar from "../../components/Navbar/Navbar";

import ProfileCard from "../../ProfileCard/ProfileCard";
import Kashishimg from "./kashish.png"
import SideBG from "./side-bg.png" 
import templat from "./profile.png"
import { useEffect, useState } from "react"

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

        <div >
            
            <div className="row m-0 p-0 w-100 bg-skyblue">
                <div className="col bg-pink">
                <h1 className="text-center heading "> My Profile </h1>
                   {
                    getinfo.map((user,index)=>{
                       return <ProfileCard key={index} name={user.firstName} img={Kashishimg} no={user.mobile} />
                    })
                   }
                </div>
                <div className="col remove">
                    <div className="profile-side-templet">
                    {/* <img src={SideBG} className="side-img" alt="img"/> */}
                    <img src={templat}  alt="templat" className="profile-templat-img"/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default UserProfile
