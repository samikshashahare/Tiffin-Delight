import React from "react";
import ProfileCard from "../../ProfileCard/ProfileCard";
import Kashishimg from "./kashish.png"
import SideBG from "./side-bg.png" 

import "./UserProfile.css"
const UserProfile = () => {
    return (
        <div >
            
            <div className="row ">
                <div className="col bg-pink">
                <h1 className="text-center heading "> Profile </h1>
                    <ProfileCard img={Kashishimg} no={"8237988102"} add={"Shivajinagar"} alt="kashish" />
                </div>
                <div className="col ">
                    <div className="profile-side-templet">
                    <img src={SideBG} className="side-img" alt="img"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile
