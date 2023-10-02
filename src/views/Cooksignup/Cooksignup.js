import React from "react";
import thali from './thali.jpg'
import ProfileCard from "../../ProfileCard/ProfileCard";
import Kashishimg from "./kashish.png"
const Cooksignup = () => {
    return (
        <div>
            <div className="row">
                <div className="col">
                    <img src={thali}  alt="thali"/>
                </div>
                <div className="col">
                    <ProfileCard img={Kashishimg} no={"8237988102"} add={"Shivajinagar"} alt="kashish" />
                </div>
            </div>

        </div>
    )
}

export default Cooksignup
